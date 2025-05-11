(function () {
  var accordianList = [
    {
      id: 1,
      label: "Accordian1",
      description: "I am accordian 1",
      status: false,
    },
    {
      id: 2,
      label: "Accordian2",
      description: "I am accordian 2",
      status: false,
    },
    {
      id: 3,
      label: "Accordian3",
      description: "I am accordian 3",
      status: false,
    },
  ];
  let openAccordians = [];
  const accordianContainer = document.getElementById("accordianContainer");
  for (let i = 0; i < accordianList.length; i++) {
    let newElementLabel = document.createElement("div");
    newElementLabel.textContent = accordianList[i].label;
    accordianContainer.appendChild(newElementLabel);
    let newElementDescription = document.createElement("div");
    newElementDescription.textContent = accordianList[i].description;
    accordianContainer.appendChild(newElementDescription);
    newElementDescription.hidden = !openAccordians.includes(accordianList[i].id);

    newElementLabel.addEventListener("click", function () {
      accordianClickHandler(accordianList[i].id,newElementDescription);
    });
  }
  function accordianClickHandler(id,newElementDescription) {

    openAccordians.push(id)
    newElementDescription.hidden = !openAccordians.includes(id);
    console.log("Data", id,openAccordians);
  }
})();
