function getEmoji() {
  var username = document.getElementById("username").value;
  var result = document.getElementById("result");

  if (username === "") {
    result.innerHTML = "Please enter your username.";
    return;
  }

  // Logic to determine the emoji based on a random number
  var randomIndex = Math.floor(Math.random() * 4); // 0, 1, 2, or 3
  var emojis = ["🐼", "🐮", "🐶", "🐰"];
  var emoji = emojis[randomIndex];

  result.innerHTML = "You associate with: " + emoji;
}
