import { instance } from "../lib/instance";

const newAuthUser = async (userData) => {
  try {
    const response = await instance.post('/auth/signup', userData)
    if (!response.data) {
      throw new Error('User not created');
    }
    const authData = {
      user: response.data,
      token: response.token
    }
    return authData
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong');
  }
}

const authenticateUser = async (userData) => {
  try {
    const response = await instance.post('/auth/signin', userData)
    if (!response.data) {
      throw new Error('User not found');
    }
    const authData = {
      user: response.data.data,
      token: response.data.token
    }
    return authData
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong');
  }
}

export { newAuthUser, authenticateUser }