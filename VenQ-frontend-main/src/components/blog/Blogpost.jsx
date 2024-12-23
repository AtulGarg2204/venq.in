import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import { useParams } from 'react-router-dom';
import config from '../../config';
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/45720526.js"></script>
const Blogpost = () => {
  const URL=config.URL;
  const [blockMap,setBlockmap]=useState({});
  const [allblogs,setallblogs]=useState([]); 
  const { blogTitle } = useParams();
  useEffect(()=>{
    
   
    
      const findblog=async()=>{
            try {
              console.log('map se pehle');
             
                const blogres=await axios.get(`${URL}/blogs/single/${blogTitle}`);
                if(blogres){
                    console.log('milgaya');
                    console.log(blogres);
                    setBlockmap(blogres.data);
                }else{
                    console.log('nahi mila');
                }
            } catch (error) {
                console.log(error);
            }
        }
        findblog();
        
    },[]);
   
  return (
    <div>
        <NotionRenderer fullPage blockMap={blockMap} />
      </div>
  )
}

export default Blogpost