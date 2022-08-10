
// Input & Output declarations
const initialOutElem = document.getElementById("initial-output");
const firstNameInp = document.getElementById("first-name-input");
const secondNameInp = document.getElementById("second-name-input");
const namesOutElem = document.getElementById("names-output");
const lastNameInp = document.getElementById("last-name-input");
const lastNameOut = document.getElementById("last-name-output");
const dateInp = document.getElementById("date-input");
const dateOut = document.getElementById("date-output");
const locationInp = document.getElementById("location-input");
const locationOut = document.getElementById("location-output");


// Nav Template button declarations
const blueBtn = document.getElementById("blue-btn");
const ornateBtn = document.getElementById("ornate-btn");
const goldBtn = document.getElementById("gold-btn");
const templateBackground = document.getElementById("template-grid-container");


// This eventlistener is set for on-loading page style
window.addEventListener("load", function () {
    firstNameInp.value = "";
    secondNameInp.value = "";
    lastNameInp.value = "";
    dateInp.value = "";
    locationInp.value = "";
    blueBtn.style.backgroundColor = "#8795d8";
    blueBtn.style.color = "whitesmoke";
    ornateBtn.style.color = "whitesmoke";
    goldBtn.style.color = "whitesmoke";
    
  });

// BlueAesthetic button event & function
blueBtn.addEventListener("click", function () {
templateBackground.style.backgroundImage = "url('./images/blue.png')";
 

  blueTemplateTextFormat();

  blueBtn.style.backgroundColor = "#8795d8";
  blueBtn.style.color = "white";
  ornateBtn.style.backgroundColor = "transparent";
  ornateBtn.style.color = "#1d1160";
  goldBtn.style.backgroundColor = "transparent";
  goldBtn.style.color = "#1d1160";
});
// This function is created to change the font style of the blue aesthetic template
function blueTemplateTextFormat() {
  const changeToPhosphate = [initialOutElem, namesOutElem, lastNameOut];
  const changeToRockwell = [dateOut, locationOut];
  const allBlueText = changeToPhosphate.concat(changeToRockwell);

  for (let i = 0; i < changeToPhosphate.length; i++) {
    changeToPhosphate[i].style.fontFamily = "phosphate";
  }

  for (let i = 0; i < changeToRockwell.length; i++) {
    changeToRockwell[i].style.fontFamily = "rockwell";
  }

  for (let i = 0; i < allBlueText.length; i++) {
    allBlueText[i].style.color = "rgba(0,0,0)";
  }
}

// OrnateFloral button event & function
ornateBtn.addEventListener("click", function () {
  templateBackground.style.backgroundImage = "url('./images/ornate.png')";
  ornateTemplateTextFormat();

  blueBtn.style.backgroundColor = "transparent";
  blueBtn.style.color = "#1d1160";
  ornateBtn.style.backgroundColor = "#9d2c23";
  ornateBtn.style.color = "white";
  goldBtn.style.backgroundColor = "transparent";
  goldBtn.style.color = "#1d1160";
});


// This function is created to change the font style of the ornate floral template
 function ornateTemplateTextFormat() {      
  const allOrnateText = [
    initialOutElem,
    namesOutElem,
    lastNameOut,
    dateOut,
    locationOut,
  ];

  for (let i = 0; i < allOrnateText.length; i++) {
    allOrnateText[i].style.fontFamily = "math";
  }

  for (let i = 0; i < allOrnateText.length; i++) {
    allOrnateText[i].style.color = "#9d2c23";
  }
}

// GoldRustic button event & function
goldBtn.addEventListener("click", function () {
  templateBackground.style.backgroundImage = "url('./images/gold.png')";
  goldTemplateTextFormat();

  blueBtn.style.backgroundColor = "transparent";
  blueBtn.style.color = "#1d1160";
  ornateBtn.style.backgroundColor = "transparent";
  ornateBtn.style.color = "#1d1160";
  goldBtn.style.backgroundColor = "#1e0204";
  goldBtn.style.color = "white";
});

// This function is created to change the font style of the gold rustic template
function goldTemplateTextFormat() {
  const allGoldText = [
    initialOutElem,
    namesOutElem,
    lastNameOut,
    dateOut,
    locationOut,
  ];

  for (let i = 0; i < allGoldText.length; i++) {
    allGoldText[i].style.fontFamily = "math";
  }

  for (let i = 0; i < allGoldText.length; i++) {
    allGoldText[i].style.color = "#f7e2e8";
  }
}

// FirstName,SecondName, LastName & NameIntials events & function


firstNameInp.addEventListener("keyup", function () {
  namesInitialOutput();

  let firstName = firstNameInp.value;

  if (firstName.length === 10) {
    firstNameInp.style.color = "red";
    window.alert("firstname should be less than 10 characters");
  } else {
    firstNameInp.style.borderColor = "black";
  }
});


secondNameInp.addEventListener("keyup", function () {
  namesInitialOutput();

  let secondName = secondNameInp.value;

  if (secondName.length === 10) {
    secondNameInp.style.color = "red";
    window.alert("Second name should  be less than 10 characters");
  } else {
    secondNameInp.style.borderColor = "black";
  }
});


function namesInitialOutput() {
  let firstName = firstNameInp.value ? firstNameInp.value : " ";
  let secondName = secondNameInp.value ? secondNameInp.value : " ";
  let ampersand = firstNameInp.value[0] || secondNameInp.value[0] ? "&" : " ";

  initialOutElem.innerHTML = `${firstName[0].toUpperCase()} ${ampersand} ${secondName[0].toUpperCase()}`;

  namesOutElem.innerHTML = `${firstName.toUpperCase()} ${ampersand} ${secondName.toUpperCase()}`;
}


// Last name event


lastNameInp.addEventListener("keyup", function () {
  let lastName = lastNameInp.value;
  lastNameOut.innerHTML = lastName.toUpperCase();

  if (lastName.length === 10) {
    
    lastNameInp.style.color = "red";
    window.alert("Last name should be less than 10");
  } else {
    lastNameInp.style.borderColor = "black";
  }
});

// Date event
dateInp.addEventListener("change", function () {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let wedDate = new Date(dateInp.value);
  let day = wedDate.getDate() ? wedDate.getDate() : " ";
  let month = months[wedDate.getMonth()] ? months[wedDate.getMonth()] : " ";
  let year = wedDate.getFullYear() ? wedDate.getFullYear() : " ";
  let brkline =
    wedDate.getDate() || wedDate.getMonth() || wedDate.getFullYear()
      ? "|"
      : " ";

  dateOut.innerHTML = `${day} ${brkline} ${month} ${brkline} ${year}`;
});


// Location event
locationInp.addEventListener("keyup", function () {
  let location = locationInp.value;
  locationOut.innerHTML = location.toUpperCase();

  if (location.length === 20) {
    locationInp.style.color = "red";
    window.alert("location name should be less than 20");
  } else {
    locationInp.style.borderColor = "black";
  }
});
