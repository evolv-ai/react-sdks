import React from 'react';
import { useVariable } from "@evolv/react";
import { ContextToggle } from "./ContextToggle";


function App() {
  const buttonText: string = useVariable('cta-button.text', 'Button');
  const buttonColor: string = useVariable('cta-button.color', 'white');

  return (
    <div className="App">
      <ContextToggle keyName="customizeButton" />
      <button
        type="button"
        className="btn btn-light"
        style={{ backgroundColor: buttonColor }}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default App;
