const jokeEl = document.getElementById("joke");
const btn = document.getElementById("btn");

async function generateJoke() {
  const config = { headers: { Accept: "application/json" } };

  const response = await fetch("https://icanhazdadjoke.com/", config);
  const data = await response.json();
  jokeEl.textContent = data.joke;
  btn.textContent = "Get Another Joke";
}
// const generateJoke = () => {
//   const config = { headers: { Accept: "application/json" } };

//   fetch("https://icanhazdadjoke.com/", config)
//     .then((response) => response.json())
//     .then((data) => (jokeEl.textContent = data.joke));
//   btn.textContent = "Get Another Joke";
// };

btn.addEventListener("click", generateJoke);
