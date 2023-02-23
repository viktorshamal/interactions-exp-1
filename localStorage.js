function store() {
  // get user input
  let input = document.getElementById("userInput");
  // save user input
  localStorage.setItem("userInput", input.value);
  // saving initial count
  let count = 0;
  localStorgage.setItem("count", count);
}
