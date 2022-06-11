import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '../contexts/auth0-context';


function Home():JSX.Element {
  let history = useNavigate()
  const { isAuthenticated, getIdTokenClaims, user } = useAuth0();

  const [posts, setPosts] = useState([] as any[]);

  const deletePost = async(id: string) => {
    const accessToken = await getIdTokenClaims();
    await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/blog/delete?postID=${id}`, {
      method: "delete",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "authorization": `Bearer ${accessToken.__raw}`
      })
    });
    _removePostFromView(id);
    history('/');
  }

  const _removePostFromView = (id: string) => {
    const index = posts.findIndex((post: { _id: string; }) => post._id === id);
    posts.splice(index, 1);
  }

  useEffect(() => {
    const fetchPosts = async (): Promise<any> => {
      const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/blog/posts`);
      const json = await response.json();
      setPosts(json)
    }
    fetchPosts();
  }, [])

    return (
        <section className="blog-area section">
        <div className="container">
          <div className="row">
            {posts && posts.map((post: { title: React.ReactNode; _id: any; author: any; }) => (
              <div className="col-lg-4 col-md-6" key={post._id}>
              <div className="card h-100">
                <div className="single-post post-style-1">

                  <div className="blog-image">
                    
                    <img src="https://img.freepik.com/vector-gratis/concepto-transmision-vivo-noticias-ultima-hora_23-2148500721.jpg?w=996&t=st=1654900353~exp=1654900953~hmac=d42d73f87b795e4694253721da7af554f0599dcaa138dc947d4138b665df7ef4" alt="Blog" />
                  </div>

                  

                  <div className="blog-info">

                    <h4 className="title">
                      <span>
                        <b>{post.title}</b>
                      </span>
                    </h4>                  
                  </div>
                  <span>
                        <b>{post.author}</b>
                  </span>
                  <br />
                  <br />
                  <li>
                    <Link to={`/post/${post._id}`} className="btn btn-sm btn-outline-secondary">Ver Post </Link>
                  </li>
                  <br />
                  <li>
                    {
                      isAuthenticated && (user.name === post.author) &&
                      <Link to={`/edit/${post._id}`} className="btn btn-sm btn-outline-secondary">Editar Post </Link>
                    }
                  </li>
                  
                  <li>
                    {
                      isAuthenticated && (user.name === post.author) &&
                      <button className="btn btn-sm btn-outline-secondary" onClick={() => deletePost(post._id)}>Eliminar post</button>
                    }
                  </li>
                </div>

                <ul className="post-footer">
                  
                 
                 
                </ul>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default Home;