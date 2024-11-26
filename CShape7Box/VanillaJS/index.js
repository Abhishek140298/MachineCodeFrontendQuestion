(function () {
  let root = document.getElementById("root");

  const boxes = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];
  let numberOfBoxesToBeclicked = 0;
  let boxesClicked = [];
  function makeCWithBoxes(boxes, row) {
    for (let i = 0; i < boxes.length; i++) {
      if (Array.isArray(boxes[i])) {
        makeCWithBoxes(boxes[i], i);
      } else {
        if (boxes[i] === 1) {
          let dynamicBoxe = document.createElement("span");
          dynamicBoxe.id = `myDynamicSpan${i}${row}`;

          dynamicBoxe.className = "box_highlight";

          dynamicBoxe.addEventListener("click", clickedTheBox);
          root.appendChild(dynamicBoxe);
          numberOfBoxesToBeclicked++;
        } else {
          let dynamicBoxe = document.createElement("span");
          dynamicBoxe.id = "myDynamicSpan";

          dynamicBoxe.className = "box_no_highlight";

          root.appendChild(dynamicBoxe);
        }
      }
    }
  }

  function clickedTheBox(e) {
    document.getElementById(e.target.id).style.backgroundColor = "green";
    boxesClicked.push(e.target.id);

    if (boxesClicked.length === numberOfBoxesToBeclicked) {
      for (let i = 0; i < boxesClicked.length; i++)
        setTimeout(() => unClickBoxes(boxesClicked[i]), 1000 + 1000 * i);
    }
  }

  function unClickBoxes(id) {
    document.getElementById(id).style.backgroundColor = "white";
  }
  makeCWithBoxes(boxes);
})();


///Document all content loaded=>
  //  document.addEventListner('DOMContentLoaded',function)