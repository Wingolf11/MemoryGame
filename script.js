const hero = document.getElementById("hero");
const game = document.getElementById("game");
const playBtn = document.querySelector(".play-btn");

// Show game, hide hero
playBtn.addEventListener("click", () => {
	hero.classList.add("hidden");
	game.classList.remove("hidden");
});
