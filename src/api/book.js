import { instance } from "../lib/instance";

const getBooks = async () => {
  try {
    const response = await instance.get('/books');
    if (!response.data) {
      throw new Error('Books not found');
    }
    return response.data
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong');
  }
}

const postBook = async (bookData) => {
  try {
    const response = await instance.post('/books', bookData);
    if (!response.data) {
      throw new Error('Book not created');
    }
  } catch (error) {
    throw new Error('Something went wrong');
  }
}

const borrowBook = async (bookId) => {
  try {
    const response = await instance.post(`/book/${bookId}/borrow`, {
      book_id: bookId
    });
    if (!response.data) {
      throw new Error('Book not created');
    }
  } catch (error) {
    throw new Error('Something went wrong');
  }
}



export { getBooks, postBook, borrowBook }
