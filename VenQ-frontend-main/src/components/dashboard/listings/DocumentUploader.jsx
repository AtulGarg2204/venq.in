import React, { useState } from "react";
import axios from "axios";
import config from "../../../config";
function App({docl,sdocl}) {
  const URL=config.URL;
  const [fileData, setFileData] = useState();
  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };
  const onSubmitHandler =  async (e) => {
    e.preventDefault();

    // Handle File Data from the state Before Sending
    const data = new FormData();

    data.append("file", fileData);
    fetch(`${URL}/api/single`, {
      method: "POST",
      body: data,
    })
      .then((result) => {
        result.json().then((resv)=>{
            sdocl(`${URL}/${resv.dlink}`);
        })
      })
      .catch((err) => {
        console.log(err.message);
      });
    
   
  };

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler} enctype="multipart/form-data">
        <input type="file" name="file" onChange={fileChangeHandler} />
        <button style={{
            backgroundColor:'#626bea'
        }} type="submit">Submit File to Backend</button>
      </form>
    </div>
  );
}

export default App;
