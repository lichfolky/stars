function stellaRng() {
    return (Math.random() - 0.5) * 100;
  }
  
  let sceneElement = document.querySelector("a-scene");
  
  for (let s = 0; s < 5000; s++) {
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
  