const getCenterCoordinates = (elem) => {
  const offset = $(elem).offset();
  const x = offset.left + $(elem).width() / 2;
  const y = offset.top + $(elem).height() / 2;
  return { x, y };
};

const calculateAngle = (p1, p2) =>
  (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;

$(document).mousemove((e) => {
  const mousePos = {x: e.pageX, y: e.pageY};
  const rawAngle = calculateAngle(mousePos, getCenterCoordinates(".name-header"));
  const angle = Math.abs(rawAngle);
  headerMaterial.uniforms.uRotation.value = angle;
})
