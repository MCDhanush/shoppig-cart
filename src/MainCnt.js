import imagesMain from "./images/image-product-1.jpg";
import imagesMain2 from "./images/image-product-2.jpg";
import imagesMain3 from "./images/image-product-3.jpg";
import imagesMain4 from "./images/image-product-4.jpg";
import imagesSub1 from "./images/image-product-1-thumbnail.jpg";
import imagesSub2 from "./images/image-product-2-thumbnail.jpg";
import imagesSub3 from "./images/image-product-3-thumbnail.jpg";
import imagesSub4 from "./images/image-product-4-thumbnail.jpg";
import Minus from "./images/icon-minus.svg";
import Plus from "./images/icon-plus.svg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import { Navbar } from "./Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// const imageArr = [imagesSub1, imagesSub2, imagesSub3, imagesSub4];
const mainImagesArr = [imagesMain, imagesMain2, imagesMain3, imagesMain4];

const activeCSS = {
  border: "2px solid hsl(26, 100%, 55%)",
  filter: "brightness(70%) opacity(0.5)",
  // background: linear-gradient(to bottom, rgba(128, 128, 128, 0.5), rgba(128, 128, 128, 0.2));
};

export function MainCnt({ handleBtnClick, increase, decrease, count }) {
  // this is my approach(when i think this idea will came)
  const [iscarousel, setIscarousel] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const [imageUrl, setImageUrl] = useState(imagesMain);

  const [fiImg, setFiImg] = useState(true);
  const [sec, setSec] = useState(false);
  const [thir, setThir] = useState(false);
  const [four, setFour] = useState(false);

  const handleImageClick = (imageSetter) => {
    // Deactivate all images
    setFiImg(false);
    setSec(false);
    setThir(false);
    setFour(false);

    // Activate the clicked image
    imageSetter(true);
  };

  const productDetail = {
    price: "$125.00",
    subHead: "Fall inside edition sneaker",
    count: 0,
  };
  // const [count, setCount] = useState(productDetail.count);

  const calculateamount = () => {
    let total = count * 125;
    // console.log(total);
    return total;
  };

  calculateamount();

  return (
    <main id="main-di" style={{ marginTop: "75px", minWidth: "450px" }}>
      <div id="main-pic" style={{ display: "flex", flexDirection: "column" }}>
        <div onClick={() => setIscarousel(!iscarousel)}>
          {/* {fiImg ? <img id="images-main" src={imagesMain} /> : ""}
          {sec ? <img id="images-main" src={imagesMain2} /> : ""}
          {thir ? <img id="images-main" src={imagesMain3} /> : ""}
          {four ? <img id="images-main" src={imagesMain4} /> : ""} */}
          <img
            src={mainImagesArr[selectedImage]}
            id="images-main"
            alt="main-img"
          />
        </div>
        {iscarousel ? (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "9000",
              height: "70%",
              width: "70%",
              // overflow: "scroll",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Carousel>
              {mainImagesArr.map((item, index) => (
                <div key={index}>
                  <img
                    style={{
                      width: "300px",
                      background: "none",
                      opacity: "none",
                    }}
                    src={item}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        ) : (
          false
        )}
        <div
          style={{
            display: "flex",
            height: "25px",
            justifyContent: "center",
            gap: "30px",
            marginTop: "40px",
          }}
        >
          {mainImagesArr.map((item, index) => (
            <img
              key={index}
              id="images-sub"
              className={`images-sub-${index}`}
              onClick={() => setSelectedImage(index)}
              width="70px"
              height="150px"
              style={selectedImage === index ? activeCSS : {}}
              // style={fiImg ? { backgroundColor: "red", border: "1px solid" } : {}}

              src={item}
            />
          ))}
          {/* <img
            id="images-sub"
            onClick={() => handleImageClick(setFiImg)}
            style={
              fiImg
                ? {
                    filter: "brightness(70%) opacity(0.5)",
                    border: "2px solid hsl(26, 100%, 55%)",
                  }
                : {}
            }
            // style={fiImg ? { backgroundColor: "red", border: "1px solid" } : {}}

            src={imagesSub1}
          />
          <img
            id="images-sub"
            src={imagesSub2}
            style={
              sec
                ? {
                    border: "2px solid hsl(26, 100%, 55%)",
                    filter: "brightness(70%) opacity(0.5)",
                  }
                : {}
            }
            onClick={() => handleImageClick(setSec)}
          />
          <img
            id="images-sub"
            src={imagesSub3}
            onClick={() => handleImageClick(setThir)}
            style={
              thir
                ? {
                    filter: "brightness(70%) opacity(0.5)",
                    border: "2px solid hsl(26, 100%, 55%)",
                  }
                : {}
            }
          />
          <img
            id="images-sub"
            src={imagesSub4}
            onClick={() => handleImageClick(setFour)}
            style={
              four
                ? {
                    filter: "brightness(70%) opacity(0.5)",
                    border: "2px solid hsl(26, 100%, 55%)",
                  }
                : {}
            }
          /> */}
        </div>
      </div>
      <div
        id="main-cnt"
        style={{ textAlign: "start" }}
        onClick={() => setIscarousel(false)}
      >
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
        <h1>{productDetail.subHead}</h1>
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
            {productDetail.price}
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
              backgroundColor: "#f8f9ff",
              borderRadius: "8px",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <img onClick={decrease} src={Minus} />
            <p>{count}</p>
            <img onClick={increase} src={Plus} />
          </div>
          <div
            className="add-but"
            onClick={handleBtnClick}
            // onClick={() => handleBtnClick}
            // onClick={() => handleBtnClick()} // works
            // onClick={handleBtnClick()}
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
