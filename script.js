const heart = document.getElementById("heart");

function createHeart() {
  for (let t = 0; t < Math.PI * 2; t += 0.08) {

    const x = 16 * Math.pow(Math.sin(t), 3);

    const y =
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t);
          const span = document.createElement("span");

    span.className = "love";
    span.innerText = "I love you";

    span.style.left = `${x * 18 + 250}px`;
    span.style.top = `${-y * 18 + 250}px`;

    heart.appendChild(span);
  }
}

createHeart();