// import { useState, useEffect } from "react";

// const images = [
//   "https://picsum.photos/id/100/600/400",
//   "https://picsum.photos/id/100/600/400",
//   "https://picsum.photos/id/300/600/400",
//   "https://picsum.photos/id/200/600/400",
//   "",
// ];

// export default function ImageCarousel() {
//   const [index, setIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const [direction, setDirection] = useState(1);

//   useEffect(() => {

//     if (animating) {

//       const timeout = setTimeout(() => {
//     setIndex((prev) => (prev + direction + images.length) % images.length)
//        setAnimating(false);
//       }, 500);
//       return () => clearTimeout(timeout);
//     }
//   }, [animating, direction]);

//   const nextImage = () => {
//     if (animating) return;
//     setDirection(1);
//     setAnimating(true);
//   };

//   const prevImage = () => {
//     if (animating) return;
//     setDirection(-1);
//     setAnimating(true);
//   };

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "600px",
//         height: "400px",
//         overflow: "hidden",
//         margin: "auto",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <img
//           key={index}
//           src={images[index]}
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             borderRadius: "10px",
//             transition: "transform 0.5s",
//             transform: `translateX(${animating ? -direction * 100 : 0}%)`,
//           }}
//         />
//       </div>

//       <button
//         onClick={prevImage}
//         style={{
//           position: "absolute",
//           left: "10px",
//           top: "50%",
//           transform: "translateY(-50%)",
//           backgroundColor: "gray",
//           padding: "10px",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         Prev
//       </button>
//       <button
//         onClick={nextImage}
//         style={{
//           position: "absolute",
//           right: "10px",
//           top: "50%",
//           transform: "translateY(-50%)",
//           backgroundColor: "gray",
//           padding: "10px",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         Next
//       </button>
//     </div>
//   );
// }

import React from "react";

const images = [
  "https://picsum.photos/id/100/600/400",
  "https://picsum.photos/id/100/600/400",
  "https://picsum.photos/id/300/600/400",
  "https://picsum.photos/id/200/600/400",
];

export default function Carousel() {
  //image index to be shown
  //Is slide active
  //left navigation or right navigation
  //if left then direction -1 or if right +1

  const [index, setIndex] = React.useState(1);
  const [direction, setDirection] = React.useState(1);
  const [animating, setAnmting] = React.useState(false);

  const handleNexImage = () => {
    if (animating) return;
    setDirection(1);
    setAnmting(true);
 
  };

  const handlePrevImage = () => {
    if (animating) return;

    setAnmting(true);
    setDirection(-1);
  };

  React.useEffect(() => {
    if (animating) {
   let timeout=   setTimeout(() => {
        setIndex((prev) => (prev + direction + images.length) % images.length);
        setAnmting(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [direction, animating]);
  console.log("prev+direction+images.length)images.length,", index);

  return (
    <div
      style={{
        width: "600px",
        height: "400px",
        margin: "auto",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
            key={index}
                   src={images[index]}
                   style={{
                     position: "absolute",
                     width: "100%",
                     height: "100%",
                     objectFit: "cover",
                     borderRadius: "10px",
                     transition: "transform 0.5s",
                     transform: `translateX(${animating ? -direction * 100 : 0}%)`,
                   }}
        />
      </div>
      <button
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "gray",
          padding: "10px",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        prev
      </button>
      <button
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "gray",
          padding: "10px",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleNexImage}
      >
        next
      </button>
    </div>
  );
}
