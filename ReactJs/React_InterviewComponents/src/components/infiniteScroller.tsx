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

import React, { useEffect, useState,useRef} from "react";

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
const targetRef=useRef(null)
const [visible,setVisible]=useState(false)
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
  console.log("Event",visible)

//window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10 ///Without intersection API
if (visible) {
  console.log("Event",event)
    setPage(prev=>prev+1)
    fetchImages(limit,page)}
}

  useEffect(() => {
     const images=fetchImages(limit,page)
    

  }, []);

useEffect(()=>{
const observer=new IntersectionObserver((entries)=>{
const [entry]=entries

setVisible(entry.isIntersecting)

},{
  root:null,
  rootMargin:'0px',
  threshold:0.5
})

if(targetRef.current)observer.observe(targetRef.current)
console.log("Jai shree Ram");

  return(()=>{
    if(targetRef.current)observer.unobserve(targetRef.current)
  })

},[])

  useEffect(() => {
    console.log("fdjhkjsbjk",visible);
    
    handleScroll("evvent")
   // window.addEventListener("scroll", handleScroll);
 //   return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }} >
      {images.map((image) => (
        <span key={image.id}>
          <img
            style={{ width: "400px", height: "300px" }}
            src={image.download_url}
            alt="image"
          />
        </span>
      ))}
      <div ref={targetRef} style={{marginTop:'30px'}}>Loading ....</div>
    </div>
  );
};

export default InfiniteScroll;



/*
import Login from './login

export default hocAuthentication(Component){
return function Authentication(props){
const [login,setLogin]=useState()

useEffect(()=>{
setLogin(true)
},[])

if(login)<Compnent />
else <Login/>

}
}
*/


