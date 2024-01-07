import { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import profileImg from "./images/image-avatar.png";

export function Navbar() {
  const [cartOC, setCartOC] = useState(false);

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
          <div>
            <ShoppingCartOutlinedIcon onClick={() => setCartOC(!cartOC)} />
            {cartOC ? (
              <div id="shopping-cart-list" class="shopping-cart-list1">
                <p id="car-inside-container">cart</p>
                <div id="cart-list"></div>
                <div id="checkout">
                  <p>checkout</p>
                </div>
              </div>
            ) : (
              false
            )}
          </div>
          <img class="profile-icon" src={profileImg} alt="profile" />
        </div>
      </div>
    </header>
  );
}
