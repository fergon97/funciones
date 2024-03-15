let dynamicDiv = null;

document.addEventListener("keydown", function (event) {
  const keyDiv = document.getElementById("key");
  let colorKey = "";
  let colorDynamicDiv = "";

  switch (event.key) {
    case "a":
      colorKey = "pink";
      break;
    case "s":
      colorKey = "orange";
      break;
    case "d":
      colorKey = "lightblue";
      break;
    case "q":
      colorDynamicDiv = "purple";
      break;
    case "w":
      colorDynamicDiv = "gray";
      break;
    case "e":
      colorDynamicDiv = "brown";
      break;
  }

  if (colorKey) {
    keyDiv.style.backgroundColor = colorKey;
  }

  if (colorDynamicDiv) {
    if (!dynamicDiv) {
      dynamicDiv = document.createElement("div");
      dynamicDiv.classList.add("newDiv");
      document.body.appendChild(dynamicDiv);
    }
    dynamicDiv.style.backgroundColor = colorDynamicDiv;
  }
});
