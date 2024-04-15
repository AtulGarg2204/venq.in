import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import config from '../../config';

import {
  Typography,
  styled,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  CardMedia,
  Divider,useMediaQuery
} from "@mui/material";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/45720526.js"></script>
const Property = styled(Card)`
  background-color: white;
  border-radius: 10px;
  &:hover {
    transform: translateY(-10px);
  }
`;

const PropertyArea = styled(CardActionArea)`
  background-color: white;
  border-radius: 10px;
  &:hover {
    background-color:white;
  }
`;
const Category = styled(Typography)`
  position: absolute;
  width: 100%;
  text-align: center;
  background-color: #0170dc;
  color: white;
  z-index: 2;
  padding: 5px;
  font-family: "Inter";
`;
const Subheader = styled(Box)`
  display: flex;
  margin-top:10px;
  & div {
    border: 1px solid lightgray;
    padding: 4px 10px;
    margin-left: 16px;
    border-radius: 6px;
  }
`;
const PriceBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 15px 0 10px 0;
  align-items: center;
`;
const Header = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  font-family: "Inter";
  margin-top: 10px ;
  margin-left:16px;
`;
const UpperPart = styled(Box)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  position: "absolute",
  top: "0%",
  height: '250px',
  backgroundColor: "#121c30",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    height:'20%',
    marginBottom:  "20px"
    
  },
}));


const SubText = styled(Typography)`
  display:flex;
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  font-family: "Bebes Neue";
  font-style: normal;
  text-align:left;
`;


const BlogPage = () => {
  const URL=config.URL;
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const navigate=useNavigate();
    const [allblogs,setallblogs]=useState([]);  
    useEffect(()=>{
     
        const myfunc=async()=>{
          try {
            
          } catch (error) {
            console.log(error);
          }
           const blogData = await axios.get(
            `${URL}/blogs/all`
          );
          if(blogData){
            console.log(blogData.data.data);
            setallblogs(blogData.data.data);
          }
        }
        myfunc();
        
    },[]);
  return (
    <>

    {!isSmallScreen && 
        <>
        
        <UpperPart>
      <div style={{
        width:'610px',
        display:'flex',
        flexDirection:'column',
      }}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
          <img src="images/VENQ_BOLD_small1.png" alt="notfound" height={30} />
          <p style={{
            fontFamily:'Gilroy-Medium',
            cursor:'pointer'
          }} onClick={()=>{
            navigate('/')
          }} >Go To VenQ</p>
        </div>
      <div style={{
        display:'flex',
        flexDirection:'column',
      }}>
      <SubText>
               <h2 style={{
                width:'300px',  
                fontFamily:'Inter',
                display:'flex',
               }}>Need Answers? explore our Blogs</h2>
              </SubText>
      </div>
      </div>
              <input style={{
                width:'600px',
                
              }} placeholder='Search for Articles..' type="text" />
      
              
              
            </UpperPart>

<div style={{
        marginTop:'260px',
        display:'flex',
        justifyContent:'center'
    }}>
       
       <Grid container sx={{
       
       }}>
        {allblogs.map((post) => (
          <Grid  item xs={2} sm={4} md={4} key={post.id} sx={
          {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:'20px',
            marginTop:'20px'
          }
          }>
             <Link
                      to={`/blog/${post.id}`}
                      style={{textDecoration: "none"}}
                    >
           <Property sx={{ maxWidth: 338}}>
      <PropertyArea sx={{

      }}>
        <CardMedia
          component="img"
          height="191"
          image={(post.Cover[0]).url}
          alt="green iguana"
          
        />
        <CardContent>
          
        <div style={{
            backgroundColor:'white',
            cursor:'pointer',
            margin:'6px 3px',
            padding:'4px',
            borderRadius:'16px',
            position:'absolute',
            top:'0px',
            right:'0px',
            width:'80px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          //  : 4px 2px;
          //   cursor: pointer;
          //   border-radius: 16px;
          }}>
          <Typography gutterBottom variant="p" component="div" sx={{
            marginTop:'2px',
            textAlign:'center'
          }}>
            {post.Category[0]}
          </Typography>
          </div>
          <Typography variant="body2" color="text.secondary" sx={{
            textAlign:'center',
            fontFamily:'Gilroy-Bold',
            fontWeight:'bold',
            color:'#44475b'
          }}>
           {post.Page}
          </Typography>
        </CardContent>
      </PropertyArea>
      <Divider/>
      <CardContent>
          <Typography gutterBottom variant="p" component="div" sx={{
            textAlign:'center',
            fontFamily:'Gilroy-Medium',
            fontSize:'12px'
          }}>
            {post.Date} . {Math.floor(Math.random() * (8 - 3 + 1)) + 3} min read
          </Typography>
          
        </CardContent>

      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Property>
    </Link>
          </Grid>
        ))}
      </Grid>
  </div>
    
        
        </>
    }

    {/* choti hai screen  */}
    {isSmallScreen &&  

      <>
      
      <UpperPart>
      <div style={{
        width:'80%',
        display:'flex',
        flexDirection:'column',
      }}>
        <div style={{
          display:'flex',
          justifyContent:'space-between'
        }}>
          <img src="images/VENQ_BOLD_small1.png" alt="notfound" height={30} style={{
            marginTop:'10px'
          }} />
          <p style={{
            fontFamily:'Gilroy-Medium',
            cursor:'pointer'
          }} onClick={()=>{
            navigate('/')
          }} >Go To VenQ</p>
        </div>
      <div style={{
        display:'flex',
        flexDirection:'column',
      }}>
      <SubText>
               <h2 style={{
                width:'300px',  
                fontFamily:'Inter',
                display:'flex',
               }}>Need Answers? explore our Blogs</h2>
              </SubText>
      </div>
      </div>
              <input style={{
                width:'80%',
                
              }} placeholder='Search for Articles..' type="text" />
      
              
              
            </UpperPart>

<div style={{
        marginTop:'260px',
        display:'flex',
        justifyContent:'center'
    }}>
       
       <Grid container 
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 4, md: 12 }}
        
       >
        {allblogs.map((post) => (
          <Grid  item xs={2} sm={4} md={4} key={post.id} sx={{
            marginLeft:'16px'
          }}
          >
           <Link
                      to={`/blog/${post.Slug}`}
                      style={{textDecoration: "none"}}
                    >
           <Property sx={{maxWidth:385}}>
           
      <PropertyArea sx={{

      }}>
        <CardMedia
          component="img"
          height="191"
          image={(post.Cover[0]).url}
          alt="green iguana"
          
        />
        <CardContent>
          
        <div style={{
            backgroundColor:'white',
            cursor:'pointer',
            margin:'6px 3px',
            padding:'4px',
            borderRadius:'16px',
            position:'absolute',
            top:'0px',
            right:'0px',
            width:'80px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          //  : 4px 2px;
          //   cursor: pointer;
          //   border-radius: 16px;
          }}>
          <Typography gutterBottom variant="p" component="div" sx={{
            marginTop:'2px',
            textAlign:'center'
          }}>
            {post.Category[0]}
          </Typography>
          </div>
          <Typography variant="body2" color="text.secondary" sx={{
            textAlign:'center',
            fontFamily:'Gilroy-Bold',
            fontWeight:'bold',
            color:'#44475b'
          }}>
           {post.Page}
          </Typography>
        </CardContent>
      </PropertyArea>
      <Divider/>
      <CardContent>
          <Typography gutterBottom variant="p" component="div" sx={{
            textAlign:'center',
            fontFamily:'Gilroy-Medium',
            fontSize:'12px'
          }}>
            {post.Date} . {Math.floor(Math.random() * (8 - 3 + 1)) + 3} min read
          </Typography>
          
        </CardContent>

      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Property>
    </Link>
          </Grid>
        ))}
      </Grid>
  </div>
    
      
      </>


    
    }
    
    </>

    
  )
}

export default BlogPage