import { useState } from "react";

function App() {
  const [message, setMessage] = useState(
    "JavaScript is the best thing in the world"
  );


  // Actions

  function handleClick() {
    setMessage("Some new message saying somthing smart");
  }

    // UI
  return (
  <div>
    <h1>{message}</h1>;
    <button onClick={handleClick}>Update the message</button>
  </div>

  );
   
}

export default App;
