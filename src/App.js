import React from 'react';
import ColorPicker from './components/ColorPicker';
import './App.css'; 

function App() {
  const colors = ["red", "lightgreen", "blue", "yellow","pink","cyan","orange","purple","indigo","brown"];

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
