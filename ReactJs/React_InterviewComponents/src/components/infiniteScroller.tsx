/*
This frontend machine coding problem is asked by companies like Flipkart Myntra Amazon 

Problem 

Design an infinite scrolling image gallery. You should be able to call API and whenever you reach the end of the page, you should call the API again to fetch more images. 

Followup - 1 
Make images and their container responsive. 

Followup - 2 
Handle fetching more images when the user reaches the end of the page. 

Followup - 3 
Handle multiple API calls triggered by rapid scrolling. 

This problem tests your understanding of CSS responsiveness, refs, Intersection Observer API, AbortController, and signals for API handling.  */

import React, { useEffect, useState } from "react";

///Requirement
//Make the component and fetch the data from the api
const images = [
  "https://picsum.photos/id/140/2448/2448",
  "https://picsum.photos/id/140/2448/2448",
  "https://picsum.photos/id/140/2448/2448",
];
const InfiniteScroll: React.FC = () => {

const [images,setImages]=useState([])
const [page,setPage]=useState(1)
const limit=3
  //Api Fetch
  const fetchImages = async (limit: number, page: number) => {
    let url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
    const response = await fetch(url)
  const data=await response.json()
  setImages((prev)=>[...prev,...data])
  };


  //
const handleScroll=(event:object)=>{
console.log("Event",event)
}

  useEffect(() => {
     const images=fetchImages(30,1)
    

  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }} onScroll={handleScroll}>
      {images.map((image) => (
        <span>
          <img
            style={{ width: "400px", height: "300px" }}
            src={image.download_url}
            alt="image"
          />
        </span>
      ))}
    </div>
  );
};

export default InfiniteScroll;
