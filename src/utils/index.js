export function formatter(number) {
  let result = "";
  const numStr = number.toString(); // Convert number to string

  if (number === 0 || numStr.length < 4 || isNaN(number)) return;

  for (let i = 0; i < numStr.length; i++) {
    if (i > 0 && (numStr.length - i) % 3 === 0) {
      result += ","; // Add comma before every third digit from the end
    }
    result += numStr[i];
  }
  return result;
}
