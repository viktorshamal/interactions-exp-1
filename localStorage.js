function storeThing() {
  // get user input
  let input = document.getElementById("userInput");

  // save user input
  localStorage.setItem("userInput", input.value);
}
