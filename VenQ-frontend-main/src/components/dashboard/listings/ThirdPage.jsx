import React, { useState } from "react";
import "./ThirdPage.css";

function ThirdPage({ fd, sfd }) {
  const [images, setImages] = useState("");
  const [url, setUrl] = useState("");

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    setImages(selectedImage);
  };

  const submitImages = () => {
    const formData = new FormData();
    // CLOUDINARY_CLOUD_NAME=dzycz1c4v
    // CLOUDINARY_API_KEY=283832445163947
    // CLOUDINARY_API_SECRET=cJ9bzf7LNXkyAbGEBy1lNm7AcL8

    formData.append("file", images);

    formData.append("upload_preset", "cplzk4eb");
    formData.append("cloud_name", "dos2aqlca");

    fetch("https://api.cloudinary.com/v1_1/dos2aqlca/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setUrl(data.url);
        console.log("Upload successful:", data);
      })
      .catch((error) => {
        console.error("Error uploading images:", error);
      });
  };

  return (
    <div>
      <div className="other-info-container">
        {/* {[...Array(8)].map((_, index) => ( */}
        <div>
          <input type="file" onChange={(e) => handleImageChange(e)} />
        </div>
        {/* ))} */}
        <button onClick={submitImages}>Upload Images</button>
      </div>
      <div className="url_div">
        <div>
          <h3>{url}</h3>
        </div>
      </div>

      <div style={{ marginBottom: "50px" }} className="other-info-container">
        <input
          type="url"
          placeholder="Enter url 1"
          value={fd.propertyImgUrlOne}
          onChange={(e) => {
            sfd({ ...fd, propertyImgUrlOne: e.target.value });
          }}
        />
        <input
          type="url"
          placeholder="Enter url 2"
          value={fd.propertyImgUrlTwo}
          onChange={(e) => {
            sfd({ ...fd, propertyImgUrlTwo: e.target.value });
          }}
        />
        <input
          type="url"
          placeholder="Enter url 3"
          value={fd.propertyImgUrlThree}
          onChange={(e) => {
            sfd({ ...fd, propertyImgUrlThree: e.target.value });
          }}
        />
        <input
          type="url"
          placeholder="Enter url 4"
          value={fd.propertyImgUrlFour}
          onChange={(e) => {
            sfd({ ...fd, propertyImgUrlFour: e.target.value });
          }}
        />
        <input
          type="url"
          placeholder="Enter url 5"
          value={fd.propertyImgUrlFive}
          onChange={(e) => {
            sfd({ ...fd, propertyImgUrlFive: e.target.value });
          }}
        />
        <input
          type="url"
          placeholder="Enter url 6"
          value={fd.propertyImgUrlSix}
          onChange={(e) => {
            sfd({ ...fd, propertyImgUrlSix: e.target.value });
          }}
        />
        <input
          type="url"
          placeholder="Enter url 7"
          value={fd.propertyImgUrlSeven}
          onChange={(e) => {
            sfd({ ...fd, propertyImgUrlSeven: e.target.value });
          }}
        />
        <input
          type="url"
          placeholder="Enter url 8"
          value={fd.propertyImgUrlEight}
          onChange={(e) => {
            sfd({ ...fd, propertyImgUrlEight: e.target.value });
          }}
        />
        <input
          type="url"
          placeholder="Enter url 9"
          value={fd.propertyImgUrlNine}
          onChange={(e) => {
            sfd({ ...fd, propertyImgUrlNine: e.target.value });
          }}
        />
        <input
          type="url"
          placeholder="Enter url 10"
          value={fd.propertyImgUrlTen}
          onChange={(e) => {
            sfd({ ...fd, propertyImgUrlTen: e.target.value });
          }}
        />
      </div>
    </div>
  );
}

export default ThirdPage;
