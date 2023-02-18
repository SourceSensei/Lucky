const textEl = document.getElementById("text2");
const text = "The Story";
let idx = 1;
let speed = 300; // adjust the speed by changing this value

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}
