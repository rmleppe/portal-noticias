import * as mongoose from 'mongoose';


//Aqui se especifica todos los campos  que se guardaran y solo se aceptaran de tipo string

export const BlogSchema = new mongoose.Schema({
  title: String,
  description: String,
  body: String,
  author: String,
  date_posted: String,
});