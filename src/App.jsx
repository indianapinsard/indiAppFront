import React, { useState } from 'react';

/**
 * Build a button that says clicked when clicked.
 * @return {HTMLButtonElement} The html code for the button.
 */
function App() {
  const [state, setState] = useState('CLICK ME');
  return <button type="button" onClick={() => setState('CLICKED')}>{state}</button>;
}

export default App;
