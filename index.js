$(window).keypress(function (e) {
  if (e.keyCode === 32 || e.keyCOde === 0) {
    e.preventDefault();
    const animation = document.querySelector(".scene");
    const running = animation.style.animationPlayState || "running";
    animation.style.animationPlayState =
      running === "running" ? "paused" : "running";
  }
});
