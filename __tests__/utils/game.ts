export function getRandomCoordinate(width: number, height: number) {
  const catchError = (seed: number) => seed < 1 || seed !== Math.floor(seed)
  if (catchError(width) || catchError(height)) {
    throw new TypeError("width or height must be a positive integer")
  }
  const x = Math.floor(Math.random() * width); 
  const y = Math.floor(Math.random() * height); 
  return { x, y }
}