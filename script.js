var scene = document.querySelector('a-scene');

if (scene.hasLoaded) {
  run();
} else {
  scene.addEventListener('loaded', run);
}

function stellaRng() {
  return (Math.random() - 0.5) * 100;
}


function run() {
  console.log(THREE);
  for (let s = 0; s < 2; s++) {
    nuovaStella = document.createElement("a-sphere");
    nuovaStella.setAttribute("position", {
      x: stellaRng(),
      y: stellaRng(),
      z: stellaRng()
    });
    nuovaStella.setAttribute("radius", "0.05");
    nuovaStella.setAttribute("color", "#FDCA40");

    scene.appendChild(nuovaStella);
  }
}

AFRAME.registerComponent('cursor-listener', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      var scene = document.querySelector('a-scene');

      // this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);

      nuovaStella = document.createElement("a-sphere");
      nuovaStella.setAttribute("position",

        {
          x: evt.detail.intersection.point.x,
          y: evt.detail.intersection.point.y,
          z: evt.detail.intersection.point.z
        }


      );
      nuovaStella.setAttribute("radius", Math.random() * 10);
      nuovaStella.setAttribute("color", "#FDCA40");

      scene.appendChild(nuovaStella);
    });
  }
});