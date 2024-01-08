import { useState, useEffect, useRef } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import profileImg from "./images/image-avatar.png";

export function Navbar({ cartItem, id, price, subHead, count }) {
  const [cartOC, setCartOC] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <header style={{ padding: "0 120px" }}>
      <div class="top-header">
        <div class="header-cnt1">
          <p class="header-fontbig">sneakers</p>
          <p class="header-font">Collections</p>
          <p class="header-font">Men</p>
          <p class="header-font">Women</p>
          <p class="header-font">About</p>
          <p class="header-font">Content</p>
        </div>
        <div class="header-cnt2">
          <div
            style={{
              position: "relative",
            }}
          >
            <ShoppingCartOutlinedIcon onClick={() => setCartOC(!cartOC)} />
            <div
              style={{
                position: "absolute",
                width: "20px",
                height: "20px",
                right: 0,
                background: "red",
                color: "white",
              }}
            >
              {cartItem}
            </div>
            {cartOC ? (
              <div id="shopping-cart-list" class="shopping-cart-list1">
                <p id="car-inside-container">{count}</p>
                <div id="cart-list">
                  <li key={id}>
                    <p>ID: {id}</p>
                    <p>Price: {price * count}</p>
                    <p>SubHead: {subHead}</p>
                    {/* <button onClick={() => deleteItem(item.id)}>Delete</button> */}
                  </li>
                </div>
                <div id="checkout">
                  <p>checkout</p>
                </div>
              </div>
            ) : (
              false
            )}
          </div>
          <div>
            <img
              class="profile-icon"
              src={profileImg}
              onClick={() => setActive(!active)}
              style={{
                backgroundColor: active ? "hsl(26, 100%, 55%)" : "white",
              }}
              alt="profile"
            />
            {active ? (
              <div id="profile-list" class="profile-list1">
                <p id="profile-container">Profile</p>
                <div id="cart-list"></div>
              </div>
            ) : (
              false
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
