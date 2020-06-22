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
