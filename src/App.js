import "./App.css";
import { Navbar } from "./Navbar";
import { MainCnt } from "./MainCnt";
import { useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState(0);
  const handleBtnClick = () => {
    setCartItem(cartItem + 1);
  };
  return (
    <div className="App" id="body-tag">
      <Navbar cartItem={cartItem} />
      <MainCnt handleBtnClick={handleBtnClick} />
    </div>
  );
}

export default App;
