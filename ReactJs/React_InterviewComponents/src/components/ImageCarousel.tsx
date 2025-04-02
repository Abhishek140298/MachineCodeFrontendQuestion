import { useState, useEffect } from "react";

const images = [
  "https://picsum.photos/id/100/600/400",
  "https://picsum.photos/id/100/600/400",
  "https://picsum.photos/id/300/600/400",
  "https://picsum.photos/id/200/600/400",
  "",
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(true);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (animating) {
        console.log("bhjj", index);

      const timeout = setTimeout(() => {
        console.log("bhjj", index);
         index<4?setIndex((prev) => (prev + direction + images.length) % images.length):null
      //  setAnimating(false);
      }, 9000);
      return () => clearTimeout(timeout);
    }
  }, [animating, direction,index]);

  const nextImage = () => {
    if (animating) return;
    setDirection(1);
    setAnimating(true);
  };

  const prevImage = () => {
    if (animating) return;
    setDirection(-1);
    setAnimating(true);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "600px",
        height: "400px",
        overflow: "hidden",
        margin: "auto",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
            transform: `translateX(${!animating ? -direction * 100 : 0}%)`,
          }}
        />
      </div>

      <button
        onClick={prevImage}
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
        Prev
      </button>
      <button
        onClick={nextImage}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "gray",
          padding: "10px",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Next
      </button>
    </div>
  );
}
