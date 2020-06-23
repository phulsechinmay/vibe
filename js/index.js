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
});
