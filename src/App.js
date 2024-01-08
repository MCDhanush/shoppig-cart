import "./App.css";
import { Navbar } from "./Navbar";
import { MainCnt } from "./MainCnt";
import { useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState(0);
  const handleBtnClick = () => {
    setCartItem(cartItem + 1);
  };

  const [data, setData] = useState([]);

  const addItem = () => {
    setData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        price: "$125.00",
        subHead: `Fall inside edition sneaker  `,
      },
    ]);
  };

  const deleteItem = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  let decrease = () => {
    // setCount(count - 1);
    if (count > 0) {
      setCount(count - 1);
    } else if (count < 0) {
      setCount((count = 0));
    }
  };
  return (
    <div className="App" id="body-tag">
      <Navbar cartItem={cartItem} count={count} />
      <MainCnt
        handleBtnClick={handleBtnClick}
        increase={increase}
        decrease={decrease}
        count={count}
      />
      <ul>
        {/* {data.map((item) => (
          <Navbar
            key={item.id}
            id={item.id}
            price={item.price}
            subHead={item.subHead}
          />
        ))} */}
        {data.map((item, id) => (
          <Navbar
            item={item}
            id={id}
            price={item.price}
            subHead={item.subHead}
          />
        ))}
      </ul>

      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default App;
