import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Typography,
  styled,
  Grid,
  Divider,
  CardMedia,
  CardContent,
  Card,
  CardActionArea,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import axios from "axios";
import config from "../../../config";

const arrow = ">";

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
    background-color: white;
  }
`;

const PropertyLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-right: 10px;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;
const Bookmark = styled(Button)`
  text-transform: none;
  color: black;
  border: 2px solid black;
  background-color: white;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    color: white;
    background-color: #0170dc;
    border: 2px solid #0170dc;
  }
  &:hover path {
    color: white;
  }
`;

const Photos = ({ clicked, setClicked }) => {
  console.log("fdksljfkdj");
  const { id } = useParams(); // Access the ID from the URL params
  console.log(id);
  const URL = config.URL;
  const [listing, setListing] = useState({});
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`${URL}/listing/${id}`);
        console.log(response.data);
        setListing(response.data);
      } catch (error) {
        console.error("Error fetching listing:", error);
      }
    };

    fetchListing();
  }, [id]);

  return (
    <div>
      <Box style={{ padding: "30px" }}>
        <Box>
          <Box style={{ display: "flex" }}>
            <PropertyLink to="/dashboard/properties">
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                Properties
              </Typography>
            </PropertyLink>

            {arrow}
            <PropertyLink to={`/dashboard/properties/view/${id}`}>
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontWeight: "600",
                  paddingLeft: "10px",
                }}
              >
                {listing.properyheading}
              </Typography>
            </PropertyLink>

            {arrow}
            <Typography
              style={{
                color: "#a3abba",
                marginLeft: "10px",
                fontFamily: "Inter",
                fontSize: "15px",
              }}
            >
              Photos
            </Typography>
          </Box>
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "20px 0",
          }}
        >
          <Typography
            style={{ fontFamily: "Inter", fontWeight: 600, fontSize: "30px" }}
          >
            {listing.images?.length} photos
          </Typography>

          <Box>
            <Bookmark onClick={() => setClicked(!clicked)}>
              {clicked === true ? (
                <BookmarkIcon style={{ color: "#0170dc" }} />
              ) : (
                <BookmarkBorderIcon />
              )}
              <Typography
                style={{
                  paddingLeft: "10px",
                  fontFamily: "Inter",
                  fontSize: "18px",
                }}
              >
                Bookmark
              </Typography>
            </Bookmark>
          </Box>
        </Box>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 4, md: 12 }}
            sx={{
              gap: "20px",
            }}
          >
            <PhotoProvider>
              {listing.images?.map((post, index) => (
                <Grid
                  item
                  xs={2}
                  sm={3}
                  md={3}
                  key={index}
                  sx={{
                    marginLeft: "16px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Property sx={{ maxWidth: 360 }}>
                    <PropertyArea sx={{}}>
                      <PhotoView key={index} src={post}>
                        <CardMedia
                          component="img"
                          height="191"
                          image={post}
                          alt="green iguana"
                        />
                      </PhotoView>
                    </PropertyArea>
                  </Property>
                </Grid>
              ))}
            </PhotoProvider>
          </Grid>
        </div>
      </Box>
    </div>
  );
};

export default Photos;
