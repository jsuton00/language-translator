import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import LanguageSelect from './components/LanguageSelect';
import TranslateInput from './components/TranslateInput';
import TranslatedText from './components/TranslatedText';

function App() {
  const [language, setLanguage] = useState('');
  const [text, setText] = useState('');
  return (
    <div id="app" className="app">
      <header id="header" className="app-header container-fluid">
        <nav id="navigation" role="navigation" className="nav navbar row">
          <div className="navbar-brand">
            <h1 className="navbar-brand-text">
              <span className="navbar-brand-logo">
                <FontAwesomeIcon icon={faLanguage} />
              </span>
              Translate
            </h1>
          </div>
        </nav>
      </header>
      <main id="main" className="app-main container-fluid">
        <div id="translation-section" className="translation">
          <div id="translation-controls" className="translation-controls row">
            <TranslateInput inputValue={text} changeValue={setText} />
            <LanguageSelect language={language} selectLanguage={setLanguage} />
            <TranslatedText text={text} language={language} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
