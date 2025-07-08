export const resizeCanvas = (canvas: HTMLCanvasElement) => {
  const container = canvas.parentElement;
  if (!container) return;
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
};