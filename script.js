let sceneElement = document.querySelector("a-scene");
if (sceneElement.hasLoaded) {
  run()
} else {
  sceneElement.addEventListener("loaded", run)
}

function stellaRng() {
  return (Math.random() - 0.5) * 100;
}

function run() {
  for (let s = 0; s < 100; s++) {
    nuovaStella = document.createElement("a-sphere");
    nuovaStella.setAttribute("position", {
      x: stellaRng(),
      y: stellaRng(),
      z: stellaRng()
    });
    nuovaStella.setAttribute("radius", "0.05");
    nuovaStella.setAttribute("color", "#FDCA40");

    sceneElement.appendChild(nuovaStella);
  }

  let cursor = document.querySelector("a-cursor")
  cursor.addEventListener("click", cliccato)

}


function cliccato(event) {
  console.log(event.detail.intersection.point)
  let punto = event.detail.intersection.point

  nuovaStella = document.createElement("a-sphere");
  nuovaStella.setAttribute("position", {
    x: punto.x,
    y: punto.y,
    z: punto.z
  });
  nuovaStella.setAttribute("radius", "10");
  nuovaStella.setAttribute("color", "#FDCA40");

  sceneElement.appendChild(nuovaStella);
}