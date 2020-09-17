import axios from 'axios';
require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;

export const doTranslate = async (input, languageCode, cancelToken) => {
  try {
    const { data } = await axios.post(
      `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
      {
        q: input,
        target: languageCode,
      },
      { cancelToken: cancelToken.token },
    );
    return data.data.translations[0].translatedText;
  } catch (err) {
    return '';
  }
};
