import { Document } from 'mongoose';

//Aqui se especifica que un post llevará solo valores de tipo string

export interface Post extends Document {
  readonly title: string;
  readonly description: string;
  readonly body: string;
  readonly author: string;
  readonly date_posted: string;
}