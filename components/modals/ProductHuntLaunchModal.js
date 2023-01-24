import React from "react";
import bg from "/public/assets/product_hunt_launch_modal_bg.webp";
import cross from "/public/assets/icons/cross.svg";
function ProductHuntLaunchModal({ setProductHuntLaunchModal }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.7)",
        zIndex: "500",
      }}
    >
      <div
        style={{
          background: `url(${bg.src}) center center/cover`,
          position: "absolute",
          minHeight: "430px",
          padding: "30px",
          width: "70vw",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "8px",
          justifyContent: "center",
        }}
      >
        <img
          src={cross.src}
          onClick={() => setProductHuntLaunchModal(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "20px",
            cursor: "pointer",
          }}
        />
        <h2
          style={{
            textAlign: "center",
            fontSize: "53px",
            fontWeight: "500",
            marginBottom: "0px",
          }}
        >
          DAO Manager is live on
          <br />
          Product Hunt.
        </h2>
        <h4
          style={{
            textAlign: "center",
            fontSize: "21px",
            fontWeight: "400",
            color: "#CBBDE9",
            margin: "20px 0 30px 0",
          }}
        >
          Check us out and leave a review
        </h4>
        <a
          href="https://www.producthunt.com/posts/dao-manager"
          rel="noreferrer"
          target="_blank"
          onClick={() => setProductHuntLaunchModal(false)}
        >
          <span
            style={{
              background:
                "linear-gradient(85.21deg, #5FB5FC -7.59%, #844AFF 62.28%, #DF52FF 113.15%)",
              border: "1.09302px solid rgba(255, 255, 255, 0.49)",
              borderRadius: " 8.74419px",
              color: "#ffffff",
              height: "40px",
              width: "190px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Continue
          </span>
        </a>
      </div>
    </div>
  );
}

export default ProductHuntLaunchModal;
