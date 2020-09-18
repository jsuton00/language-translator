import React from 'react';

export default function TranslateInput(props) {
  const { inputValue, changeValue } = props;
  return (
    <div id="translate-input" className="translate-input">
      <textarea
        id="language-input"
        name="language-input"
        type="text"
        placeholder="English..."
        rows="7"
        className="language-input form-control"
        onChange={(e) => {
          return changeValue(e.target.value);
        }}
        value={inputValue}
        autoFocus
      ></textarea>
    </div>
  );
}
