import { blue } from "@mui/material/colors";
import axios from "axios";
import React, { useState } from "react";
import config from "../../../config";
const PhotoUploader = ({ addedPhotos, onChange }) => {
  const URL = config.URL;
  const [photoLink, setPhotoLink] = useState("");

  function uploadPhoto(e) {
    const files = e.target.files;
    const data = new FormData();
    // console.log('here');
    for (let index = 0; index < files.length; index++) {
      data.append("photos", files[index]);
    }
    axios
      .post(`${URL}/api/upload`, data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        onChange((prev) => {
          return [...prev, ...filenames];
        });
      });
  }

  async function addPhotoByLink(e) {
    e.preventDefault();
    const { data: filename } = await axios.post(`${URL}/api/upload-by-link`, {
      link: photoLink,
    });

    onChange((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  }

  function removePhoto(event, filename) {
    onChange([...addedPhotos].filter((photo) => photo !== filename));
    event.preventDefault();
  }

  function selectMainPhoto(event, filename) {
    event.preventDefault();
    const newAddedPhotos = [
      filename,
      ...addedPhotos.filter((photo) => photo !== filename),
    ];
    onChange(newAddedPhotos);
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6 mt-2">
        {addedPhotos.length > 0 &&
          addedPhotos.map((link, index) => (
            <div key={index} className="h-24 flex relative ">
              <img
                className="rounded-xl w-full object-cover position-center"
                src={link}
                alt=""
              />
              <button
                onClick={(e) => removePhoto(e, link)}
                className="cursor pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-75 p-1 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          ))}
        {/* <label className='h-24 w-36 mx-36 mb-4 cursor-pointer flex items-center gap-3 justify-center  border  bg-gray-20 rounded-2xl p-2 text-l text-gray-600'> */}
        <label>
          <input
            type={"file"}
            multiple
            className="hidden"
            onChange={uploadPhoto}
          />
          <br />
          <button
            style={{ backgroundColor: blue, color: "white", cursor: "pointer" }}
          >
            Upload Photo
          </button>
        </label>
      </div>
    </>
  );
};

export default PhotoUploader;
