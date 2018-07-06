
import request from 'axios';

import { USTORY_SERVER_API_URL, SERVER_IMAGE_URL } from "../constant";

export const uploadImage = async dataImage => {
  const token = localStorage.getItem('ustory_token');
  try {
    const response = await request.post(USTORY_SERVER_API_URL + 'auth/files', dataImage, {
      headers: {
        Authorization: token
      }
    });

    return response.data.success ? SERVER_IMAGE_URL + response.data.data.imageUrl : false;
  } catch(e) {
    console.log('=======>', e);
  };
}