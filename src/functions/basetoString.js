export function basetoString(image) {
  const uint8Array = new Uint8Array(image);
  let binaryString = "";
  for (let i = 0; i < uint8Array.length; i++) {
    binaryString += String.fromCharCode(uint8Array[i]);
  }
  const base64String = btoa(binaryString);

  return base64String;
}
