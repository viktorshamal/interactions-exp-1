function store() {
  // get user input
  let input = document.getElementById("userInput");
  // save user input
  localStorage.setItem("userInput", input.value);
  // saving initial count
  let count = 0;
  localStorage.setItem("count", count);
}

function breakThing() {
  count = parseInt(localStorage.count);
  count = count + 1;
  localStorage.setItem("count", count);
  checkCount();
}

function checkCount() {
  count = parseInt(localStorage.count);
  if (count === 0) {
    let img0 = document.getElementById("img0");
    img0.style.display = "block";
  }
  if (count === 1) {
    //hiding photo(s)
    document.getElementById("img0").style.display = "none";
    //show correct photo
    let img1 = document.getElementById("img1");
    img1.style.display = "block";
  }
  if (count === 2) {
    //hiding photo(s)
    document.getElementById("img0").style.display = "none";
    document.getElementById("img1").style.display = "none";
    //show correct photo
    let img2 = document.getElementById("img2");
    img2.style.display = "block";
  }
  if (count === 3) {
    //hiding photo(s)
    document.getElementById("img0").style.display = "none";
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    //show correct photo
    let img3 = document.getElementById("img3");
    img3.style.display = "block";
  }
  if (count === 4) {
    //hiding photo(s)
    document.getElementById("img0").style.display = "none";
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "none";
    //show correct photo
    let img4 = document.getElementById("img4");
    img4.style.display = "block";
  }
  if (count === 5) {
    //hiding photo(s)
    document.getElementById("img0").style.display = "none";
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "none";
    document.getElementById("img4").style.display = "none";
    //show correct photo
    let img5 = document.getElementById("img5");
    img5.style.display = "block";
  }
  if (count > 5) {
    //hiding photo(s)
    document.getElementById("img0").style.display = "none";
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "none";
    document.getElementById("img4").style.display = "none";
    //show correct photo
    let img5 = document.getElementById("img5");
    img5.style.display = "none";

    document.getElementById("end-title").style.display = "block";
  }
}
