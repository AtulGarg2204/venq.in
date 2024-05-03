import "./second.css";
export default function TextDiv() {
  return (
    <div
      className="content-div"
      style={{
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        padding: "1rem",
        gap: "0rem",
        height: "240vh",
      }}
    >
      <div className="sticky-div">
        <h5
          style={{
            color: "#209476",
            fontSize: "24px",
            fontWeight: "600",
            fontFamily: "Plus Jakarta Sans",
            paddingTop: "20px",
          }}
        >
          Why VENQ?
        </h5>
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "700",
          }}
        >
          The Global Leader in digital real estate investing
        </h1>
        <p style={{ color: "grey" }}>
          Invest in high growth, income generating properties in the world's
          most lucrative real estate market
        </p>
        <p style={{ marginTop: "20px", backgroundColor: "white" }}>
          As seen in
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            justifyContent: "start",
            backgroundColor: "white",
            gap: "20px",
            backgroundColor: "white",
          }}
        >
          <img
            style={{
              height: "30px",
              width: "90px",
              margin: "10px 2px",
            }}
            src="https://m.dailyhunt.in/assets/img/desktop/logo.svg?mode=pwa&ver=4.0.130"
            alt="logo1"
          />
          <img
            style={{
              height: "30px",
              width: "90px",
              margin: "10px 2px",
            }}
            src="https://republicnewsindia.com/wp-content/uploads/2023/07/Republic-News-India-New-Logo-PNG-300x100.png"
            alt="logo2"
          />
          <img
            style={{
              height: "30px",
              width: "90px",
              margin: "10px 2px",
            }}
            src="https://indiansentinel.in/wp-content/uploads/2021/04/cropped-Indian-Sentinel-Copy-scaled-1.jpg"
            alt="logo3"
          />
        </div>
      </div>

      <div style={{ marginTop: "100px" }}>
        <div
          style={{
            border: "1px solid #CFCFCF",
            borderRadius: "12px",
            padding: "1rem",
            marginLeft: "20px",
            marginTop: "2rem",
            maxWidth: "300px",
            height: "40vh",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "60%",
            }}
            src="https://framerusercontent.com/images/XbJ9LeF3AdtdB7eRoEPINQN8h4.png?scale-down-to=512"
            alt="icon"
          />
          <h5>Invest from anywhere</h5>
          <p>
            We're trusted over 450K+ users from 203 countries worldwide to fully
            manage their real estate investments
          </p>
        </div>
        <div
          style={{
            border: "1px solid #CFCFCF",
            borderRadius: "12px",
            height: "40vh",
            padding: "1rem",
            marginTop: "2rem",
            marginLeft: "20px",
            maxWidth: "300px",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "60%",
            }}
            src="https://framerusercontent.com/images/XbJ9LeF3AdtdB7eRoEPINQN8h4.png?scale-down-to=512"
            alt="icon"
          />
          <h5>Invest from anywhere</h5>
          <p>
            We're trusted over 450K+ users from 203 countries worldwide to fully
            manage their real estate investments
          </p>
        </div>
        <div
          style={{
            border: "1px solid #CFCFCF",
            height: "40vh",
            borderRadius: "12px",
            padding: "1rem",
            marginTop: "2rem",
            marginLeft: "20px",
            maxWidth: "300px",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "60%",
            }}
            src="https://framerusercontent.com/images/XbJ9LeF3AdtdB7eRoEPINQN8h4.png?scale-down-to=512"
            alt="icon"
          />
          <h5>Invest from anywhere</h5>
          <p>
            We're trusted over 450K+ users from 203 countries worldwide to fully
            manage their real estate investments
          </p>
        </div>
        <div
          style={{
            border: "1px solid #CFCFCF",
            borderRadius: "12px",
            padding: "1rem",
            marginTop: "2rem",
            height: "40vh",
            maxWidth: "300px",
            marginLeft: "20px",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "60%",
            }}
            src="https://framerusercontent.com/images/XbJ9LeF3AdtdB7eRoEPINQN8h4.png?scale-down-to=512"
            alt="icon"
          />
          <h5>Invest from anywhere</h5>
          <p>
            We're trusted over 450K+ users from 203 countries worldwide to fully
            manage their real estate investments
          </p>
        </div>
      </div>
    </div>
  );
}
