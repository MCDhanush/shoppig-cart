import "./App.css";
import { Navbar } from "./Navbar";
import imagesMain from "./images/image-product-1.jpg";
import imagesSub1 from "./images/image-product-1-thumbnail.jpg";
import imagesSub2 from "./images/image-product-2-thumbnail.jpg";
import imagesSub3 from "./images/image-product-3-thumbnail.jpg";
import imagesSub4 from "./images/image-product-4-thumbnail.jpg";
import Minus from "./images/icon-minus.svg";
import Plus from "./images/icon-plus.svg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function App() {
  return (
    <div className="App" id="body-tag">
      <Navbar />
      <MainCnt />
    </div>
  );
}

function MainCnt() {
  return (
    <main id="main-di" style={{ marginTop: "75px", minWidth: "450px" }}>
      <div id="main-pic" style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <img id="images-main" src={imagesMain} />
        </div>
        <div
          style={{
            display: "flex",
            height: "25px",
            justifyContent: "center",
            gap: "30px",
            marginTop: "40px",
          }}
        >
          <img id="images-sub" src={imagesSub1} />
          <img id="images-sub" src={imagesSub2} />
          <img id="images-sub" src={imagesSub3} />
          <img id="images-sub" src={imagesSub4} />
        </div>
      </div>
      <div id="main-cnt" style={{ textAlign: "start" }}>
        <p
          className="cnt-head"
          style={{
            fontWeight: "800",
            fontSize: "13px",
            lineHeight: "10px",
            fontFamily: "Kumbh Sans",
            marginTop: "50px",
          }}
        >
          SNEAKER COMPANY
        </p>
        <h1>Fall inside edition sneaker</h1>
        <p style={{ width: "450px", marginBottom: "0" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          obcaecati perspiciatis laboriosam possimus excepturi debitis nemo
          ipsa, aut consequuntur nisi tenetur delectus id exercitationem dolorem
          aliquam expedita distinctio, repellat eveniet?
        </p>
        <div
          className="price-cnt"
          style={{
            fontSize: "20px",
            fontWeight: "600",
            marginBottom: "0",
            marginTop: "6px",
          }}
        >
          <p
            className="price-tag"
            style={{ fontSize: "22px", fontWeight: "900", marginBottom: "0" }}
          >
            $125.00
          </p>
          <p
            className="discount-per"
            style={{
              color: "rgb(255, 125, 26)",
              fontSize: "2px",
              backgroundColor: "rgb(255 119 0 / 27%)",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              width: "40px",
              lineHeight: "15px",
              height: "20px",
              fontSize: "14px",
              alignItems: "center",
              marginTop: "24px",
              marginBottom: "0",
            }}
          >
            50%
          </p>
        </div>
        <p
          className="dis-cut"
          style={{ fontSize: "14px", color: "#aaaaaa", marginTop: "2px" }}
        >
          $250.00
        </p>
        <div className="total-but" style={{ marginTop: "35px" }}>
          <div
            className="inc-dec-but"
            style={{
              width: "150px",
              height: "45px",
              backgroundColor: "#aaaaa0",
              borderRadius: "8px",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <img src={Minus} />
            <p>250</p>
            <img src={Plus} />
          </div>
          <div
            className="add-but"
            style={{
              width: "200px",
              height: "45px",
              backgroundColor: "rgb(255, 125, 26)",
              borderRadius: "8px",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <ShoppingCartOutlinedIcon
              style={{ color: "white", height: "18px" }}
            />
            <p
              className="add-but-cart"
              style={{ color: "white", height: "18px" }}
            >
              Add to Cart
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
export default App;
