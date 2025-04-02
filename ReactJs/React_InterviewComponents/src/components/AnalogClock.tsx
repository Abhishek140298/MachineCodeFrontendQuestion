import React, { useEffect, useState } from "react";

const AnalogClock:React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const second:number = time.getSeconds();
  const minute:number = time.getDate();
  const hours:number = time.getHours();

  const secondsDegree:number = (second / 60) * 360;
  const minutedeg:number = (minute / 60) * 360 + (second / 60) * 6;

  const hourDeg:number = (hours / 12) * 360 + (minute / 60) * 30;


  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        border: "5px solid black",
        borderRadius: "50%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          transform: `rotate(${secondsDegree}deg)`,
          position: "absolute",
          bottom: "50%",
          left: "50%",
          transformOrigin: "top left",
          transition: "transform 0.2s linear",
          background:'white',
          width:'100px',
          height:'1px'
        }}
      ></div>
      <div
        style={{
          transform: `rotate(${minutedeg}deg)`,
          position: "absolute",
          bottom: "50%",
          left: "50%",
          transformOrigin: "top left",
          transition: "transform 0.2s linear",
          background:'white',
          width:'100px',
          height:'1px'
        }}
      ></div>
      <div
        style={{
          transform: `rotate(${hourDeg}deg)`,
          position: "absolute",
          bottom: "50%",
          left: "50%",
          transformOrigin: "top left",
          transition: "transform 0.2s linear",
          background:'white',
          width:'100px',
          height:'1px'
        }}
      ></div>
    </div>
  );
};

export default AnalogClock;
