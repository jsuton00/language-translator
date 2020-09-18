import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { doTranslate } from '../api/api';

export default function TranslatedText(props) {
  const { language, text } = props;

  const [translated, setTranslated] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      const cancelToken = axios.CancelToken.source();
      doTranslate(text, language, cancelToken)
        .then(setTranslated)
        .then(() => {
          try {
            return cancelToken.cancel();
          } catch (error) {
            return;
          }
        });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [language, text]);
  return (
    <div id="translated-output" className="translated-output">
      <textarea
        id="translated-display"
        name="translated-display"
        type="text"
        placeholder="Translate"
        className="translate-display form-control"
        value={translated}
        rows="7"
        disabled
      ></textarea>
    </div>
  );
}
