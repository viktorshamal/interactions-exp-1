function store() {
  // get user input
  let input = document.getElementById("userInput");
  // save user input
  localStorage.setItem("userInput", input.value);
  // saving initial count
  let count = 0;
  localStorage.setItem("count", count);
}
let inputs = [];

function storeText() {
  let textInputValue = document.getElementById("textInput").value;
  inputs.push(textInputValue);
  localStorage.setItem("textInputs", JSON.stringify(inputs));
}

let storedInputs = localStorage.getItem("textInputs");
if (storedInputs !== null) {
  inputs = JSON.parse(storedInputs);
}

function breakThing() {
  count = parseInt(localStorage.count);
  count = count + 1;
  localStorage.setItem("count", count);
  checkCount();
}

function checkCount() {
  count = parseInt(localStorage.count);

  switch (count) {
    case 0:
      let img0 = document.getElementById("img0");
      img0.style.display = "block";
      break;

    case 1:
      //hiding photo(s)
      document.getElementById("img0").style.display = "none";
      //show correct photo
      let img1 = document.getElementById("img1");
      img1.style.display = "block";
      break;
    case 2:
      //hiding photo(s)
      document.getElementById("img0").style.display = "none";
      document.getElementById("img1").style.display = "none";
      //show correct photo
      let img2 = document.getElementById("img2");
      img2.style.display = "block";
      break;
    case 3:
      //hiding photo(s)
      document.getElementById("img0").style.display = "none";
      document.getElementById("img1").style.display = "none";
      document.getElementById("img2").style.display = "none";
      //show correct photo
      let img3 = document.getElementById("img3");
      img3.style.display = "block";
      break;

    case 4:
      //hiding photo(s)
      document.getElementById("img0").style.display = "none";
      document.getElementById("img1").style.display = "none";
      document.getElementById("img2").style.display = "none";
      document.getElementById("img3").style.display = "none";
      //show correct photo
      let img4 = document.getElementById("img4");
      img4.style.display = "block";
      break;

    case 5:
      //hiding photo(s)
      document.getElementById("img0").style.display = "none";
      document.getElementById("img1").style.display = "none";
      document.getElementById("img2").style.display = "none";
      document.getElementById("img3").style.display = "none";
      document.getElementById("img4").style.display = "none";
      //show correct photo
      let img5 = document.getElementById("img5");
      img5.style.display = "block";
      break;

    // case 6:
    //   //hiding photo(s)
    //   document.getElementById("img0").style.display = "none";
    //   document.getElementById("img1").style.display = "none";
    //   document.getElementById("img2").style.display = "none";
    //   document.getElementById("img3").style.display = "none";
    //   document.getElementById("img4").style.display = "none";
    //   document.getElementById("img5").style.display = "none";

    //   //show correct photo
    //   let img6 = document.getElementById("img6");
    //   img6.style.display = "block";
    //   break;

    default:
      //hiding photo(s)
      document.getElementById("img0").style.display = "none";
      document.getElementById("img1").style.display = "none";
      document.getElementById("img2").style.display = "none";
      document.getElementById("img3").style.display = "none";
      document.getElementById("img4").style.display = "none";
      document.getElementById("img5").style.display = "none";
      // document.getElementById("img6").style.display = "none";
      document.getElementById("input-form").style.display = "none";
      document.getElementById("header-title").style.display = "none";

      document.getElementById("end-title").style.display = "block";
      document.getElementById("clear-div").style.display = "block";
      document.getElementById("listInputs").style.display = "block";
  }
}
function clearStorage() {
  localStorage.clear();
  location.href = "./index.html";
}
