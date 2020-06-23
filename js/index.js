$(document).ready(() => {
  var firstNameText = new Blotter.Text("Chinmay", {
    family: "serif",
    size: parseInt($(".name-header").css("font-size")),
    fill: "#171717",
  });
  var lastNameText = new Blotter.Text("Phulse", {
    family: "serif",
    size: parseInt($(".name-header").css("font-size")),
    fill: "#171717",
  });

  // Setup Blotter Materials
  var headerMaterial = new Blotter.ChannelSplitMaterial();
  headerMaterial.uniforms.uOffset.value = 0.045;

  var blotter = new Blotter(headerMaterial, {
    texts: [firstNameText, lastNameText],
  });
  // potvar lastNameBlotter = new Blotter(headerMaterial, { texts: lastNameText });

  var firstNameScope = blotter.forText(firstNameText);
  firstNameScope.appendTo($("#firstName"));
  var lastNameScope = blotter.forText(lastNameText);
  lastNameScope.appendTo($("#lastName"));

  $(".name-header").hover(
    () => {
      headerMaterial.uniforms.uApplyBlur.value = 0.0;
    },
    () => {
      headerMaterial.uniforms.uApplyBlur.value = 1.0;
    }
  );

  // Change turbulence frequency intermittently for persistent turbulence effect.
  function step() {
    document.querySelector("#feturbulence").baseFrequencyY.baseVal =
      Math.random() / 10;
    document.querySelector("#feturbulence").baseFrequencyX.baseVal =
      Math.random() / 10;
    setTimeout(() => {
      requestAnimationFrame(step);
    }, 50);
  }

  requestAnimationFrame(step);

  const getCenterCoordinates = (elem) => {
    const offset = $(elem).offset();
    const x = offset.left + $(elem).width() / 2;
    const y = offset.top + $(elem).height() / 2;
    return { x, y };
  };

  const calculateAngle = (p1, p2) =>
    (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;

  // Change blue rotation when mouse moves inside name-container.
  $(document).mousemove((e) => {
    if ($('.name-container').is(':hover')) {
      const mousePos = { x: e.pageX, y: e.pageY };
      const rawAngle = calculateAngle(
        mousePos,
        getCenterCoordinates(".name-container")
      );
      const angle = rawAngle > 0 ? rawAngle : 360 + rawAngle;
      headerMaterial.uniforms.uRotation.value = angle;
    }
  });
});
