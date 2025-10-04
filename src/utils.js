export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function stringToHSL(str) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = Math.abs(hash) % 360;
  const saturation = 70;
  const lightness = 60;

  return { hue, saturation, lightness };
}