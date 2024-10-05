import { AuthorModel, AuthorSchema } from '../models/AuthorModel';

  export const findAll = async () => {
    try {
      return await AuthorModel.find();
    } catch(error) {
      throw error;
    }
  }

  export const insert = async(author: AuthorSchema) : Promise<AuthorSchema> => {
    try {
      const insertedAuthor = await AuthorModel.create(author);

      return insertedAuthor;
    } catch (error) {
      throw error;
    }
  }

  export const deleteAuthor = async(authorId: string) : Promise<boolean> => {
    try {
      await AuthorModel.findOneAndDelete({_id: authorId});
      return true;
    } catch (error) {
      throw error;
    }
  }

  export const updateAuthor = async(author: AuthorSchema) : Promise<AuthorSchema> => {
    try {
      await AuthorModel.findOneAndUpdate({ _id: author._id }, { $set: author });
      return author;
    } catch (error) {
      throw error;
    }
  }