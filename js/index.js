var text = new Blotter.Text("Chinmay Phulse", {
  family: "serif",
  size: parseInt($(".name-header").css("font-size")),
  fill: "#171717",
});

var headerMaterial = new Blotter.ChannelSplitMaterial();
headerMaterial.uniforms.uOffset.value = 0.045;

var blotter = new Blotter(headerMaterial, { texts: text });

var scope = blotter.forText(text);

scope.appendTo($(".name-header"));

$(".name-header").hover(() => {
  headerMaterial.uniforms.uApplyBlur.value = 0.0;
}, () => {
  headerMaterial.uniforms.uApplyBlur.value = 1.0;
})

function step() {
  document.querySelector("#feturbulence").baseFrequencyY.baseVal = Math.random() / 10
  document.querySelector("#feturbulence").baseFrequencyX.baseVal = Math.random() / 10
  setTimeout(() => {
    requestAnimationFrame(step)
  }, 16)
}

requestAnimationFrame(step);