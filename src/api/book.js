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

const getBorrowsByUser = async (userId) => {
  try {
    if (!userId) {
      throw new Error('User id is undefined');
    }
    const response = await instance.get(`/user/${userId}/borrow`);
    if (!response) {
      throw new Error('Books not found');
    }
    return response.data
  } catch (error) {
    throw new Error('Something went wrong');
  }
}

const returnBook = async (bookId) => {
  try {
    const response = await instance.delete(`/book/${bookId}/return`);
    if (!response.data) {
      throw new Error('Book not deleted');
    }
  } catch (error) {
    throw new Error('Something went wrong');
  }
}

const editBook = async ({ bookId, bookData }) => {
  try {
    const response = await instance.patch(`/book/${bookId}`, bookData);
    if (!response.data) {
      throw new Error('Book not updated');
    }
  } catch (error) {
    throw new Error('Something went wrong');
  }
}

const deleteBook = async (bookId) => {
  try {
    const response = await instance.delete(`/book/${bookId}`);
    if (!response.data) {
      throw new Error('Book not deleted');
    }
  } catch (error) {
    throw new Error('Something went wrong');
  }
}

export { getBooks, postBook, borrowBook, getBorrowsByUser, returnBook, editBook, deleteBook };
