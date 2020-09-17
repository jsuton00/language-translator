import React from 'react';
import { LANGUAGES } from '../constants/languages';

export default function LanguageSelect(props) {
  const { language, selectLanguage } = props;
  const languageList = LANGUAGES;

  return (
    <div id="language-select-section" className="language-select-section">
      <select
        id="language-select"
        className="language-select form-control"
        onChange={(e) => {
          selectLanguage(e.target.value);
        }}
        value={language}
      >
        {languageList.map((language, index) => {
          return (
            <option key={index} value={language.value}>
              {language.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
