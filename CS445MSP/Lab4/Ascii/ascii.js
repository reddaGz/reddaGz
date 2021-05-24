window.onload = pageOnLoad;
function pageOnLoad() {
  let interval;
  let delayTime;
  let i = 0;
  let animArray;
  mainAnimation();
  function mainAnimation() {
    let startBtn = document.getElementById("start");
    startBtn.onclick = startAnimation;

    let stopBtn = document.getElementById("stop");
    stopBtn.onclick = stopAnimation;

    let animSelect = document.getElementById("animation");
    animSelect.onchange = animationChanged;
    let fontSizeSelect = document.getElementById("fontsize");
    fontSizeSelect.onchange = fontSizeChanged;

    let turboCkBx = document.getElementById("turbo");
    turboCkBx.onclick = turboCkBxClicked;
  }
  function startAnimation() {
    let animaSelect = document.getElementById("animation");
    let selectedAnimation = animaSelect.value;

    if (selectedAnimation !== "Blank") {
      animaSelect.disabled = true;
      let stopBtn = document.getElementById("stop");
      stopBtn.disabled = false;

      let startBtn = document.getElementById("start");
      startBtn.disabled = true;

      animArray = ANIMATIONS[selectedAnimation].split("=====\n");
      let turboCkBx = document.getElementById("turbo");
      let checked = turboCkBx.checked;
      delayTime = checked ? 50 : 250;
      interval = setInterval(animate, delayTime);
    }
  }
  function stopAnimation() {
    clearInterval(interval);
    let textArea = document.getElementById("text-area");
    textArea.value = animArray[0];
    i = 0;
    let stopBtn = document.getElementById("stop");
    stopBtn.disabled = true;

    let startBtn = document.getElementById("start");
    startBtn.disabled = false;

    let animaSelect = document.getElementById("animation");
    animaSelect.disabled = false;
  }
  function animate() {
    if (i < animArray.length - 1) {
      i = i + 1;
    } else {
      i = 0;
    }
    let textArea = document.getElementById("text-area");
    textArea.value = animArray[i];
  }

  function animationChanged() {
    let animaSelect = document.getElementById("animation");
    let selectedAnimation = animaSelect.value;
    let textArea = document.getElementById("text-area");
    animArray = ANIMATIONS[selectedAnimation];
    textArea.value = animArray.split("=====")[0];
  }

  function fontSizeChanged() {
    let fontSizeSelect = document.getElementById("fontsize");
    let selectedFontSize = fontSizeSelect.value;

    let textArea = document.getElementById("text-area");
    textArea.style.fontSize = selectedFontSize + "pt";
  }

  function turboCkBxClicked() {
    clearInterval(interval);
    let turboCkBx = document.getElementById("turbo");
    let checked = turboCkBx.checked;
    delayTime = checked ? 50 : 250;
    interval = setInterval(animate, delayTime);
  }
}
