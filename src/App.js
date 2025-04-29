import React from "react";
import NewsWindow from "./components/NewsWindow";
import Example from "./example_data/Example";
import "./components/App.scss"

function App() {
  return (
    <div style={{ padding: "24px" }}>
      {Example.map((data, index) => (
      <NewsWindow key = {index} data={data} />
      ))}
    </div>
  )
}

export default App;