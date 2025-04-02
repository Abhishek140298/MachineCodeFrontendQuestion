import React, { useState } from "react";

//bAout grid
//display:grid
//grid-template-row:100px,100px
// grid-template-rows: 100px 200px;
//grid-template-columns: 1fr 2fr;
//use repeat aslo

//For placing items
/*.item {
  grid-row: 1 / 2;
  grid-column: 1 / 3;
} */

const GridLight: React.FC = () => {
  const [order, setOrder] = useState<Number[]>([]);
  const [decativateClick, setDeactivateClick] = useState<Boolean>(false);
  const configGrid: number[][] = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deleteColouredBox = () => {
    const interval: number = setInterval(() => {
      setOrder((prev) => {
        let newOreder = [...prev];
        newOreder.pop();
        if (newOreder.length === 0) {
          clearInterval(interval);
          setDeactivateClick(false);
        }
        return newOreder;
      });
    }, 300);
  };

  const handleClick = (index: number) => {
    if (!order.includes(index)) {
      let addOrder = [...order, index];
      setOrder(addOrder);
      console.log(
        "Rythm",
        order.length,
        configGrid.flat().filter(Boolean).length
      );
      if (addOrder.length === configGrid.flat().filter(Boolean).length) {
        setDeactivateClick(true);

        deleteColouredBox();
      }
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(3, 1fr)`, // Dynamic columns
        gap: "10px",
        width: "100%",
        maxWidth: "300px", // Adjust based on parent width
        margin: "auto",
        background: "white",
        padding: "10px",
      }}
    >
      {configGrid.flat().map((grid: number, index: number) =>
        grid ? (
          <div
            style={{
              border: "1px solid black",
              width: "90px",
              height: "90px",
              cursor: "pointer",
              background: order.includes(index) ? "green" : "white",
            }}
            onClick={() => (!decativateClick ? handleClick(index) : null)}
          ></div>
        ) : (
          <span></span>
        )
      )}
    </div>
  );
};

export default GridLight;
