import { LineChartData } from "../../types/chartData";

export function drawLineChart(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  data: LineChartData
): [number, number][] {

    const linePoints: [number, number][] = [];
    let newFont = data.fontName || "sans-serif";
    let newFontSize = data.fontSize || "12";
    let newTextColor = data.textColor || "black";

    const numRows = data.steps;
    const numCols = data.dataSet.length;
    const padding = 40; // from left and bottom
    let cellHeight = (canvas.height - padding) / numRows;
    let cellWidth = (canvas.width-padding) / numCols;

    let totalWidth = cellWidth * numCols;
    let offsetX = canvas.width - totalWidth;

    let increment = data.max / data.steps;

    // clear previous
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
   
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
           

            ctx.strokeStyle = data.gridColor;
            ctx.strokeRect(
                cellWidth * col + offsetX - 2,
                cellHeight * row + 2,
                cellWidth,
                cellHeight
            );
        }
    }

    // bottom labels
    for (let col = 0; col < numCols; col++) {
        let labelX = cellWidth * col + offsetX + cellWidth / 2;
        let labelY = cellHeight * numRows + 25;

        ctx.fillStyle = `${newTextColor}`;
        ctx.font = `${newFontSize}px ${newFont}`;
        ctx.textAlign = "center";
        ctx.fillText(data.labels[col], labelX, labelY);
    }

    // left side step values
    for (let row = 0; row <= numRows; row++) {
        let stepX = offsetX - 10;
        let stepY = cellHeight * row + cellHeight / 10;
        let stepValue = data.max - increment * row;

        ctx.fillStyle =`${newTextColor}`;
        ctx.font = `${newFontSize}px ${newFont}`;
        ctx.textAlign = "right";
        ctx.textBaseline = "top";
        ctx.fillText(stepValue.toFixed(0), stepX, stepY);
    }

    // draw points
    for (let col = 0; col < numCols; col++) {
        let lineHeight =
            (data.dataSet[col] / data.max) * (cellHeight * numRows);
        let lineX = cellWidth * col + offsetX + cellWidth / 4;
        let lineY = cellHeight * numRows - lineHeight + 2;
        
        linePoints.push([lineX,lineY]);

        ctx.fillStyle = data.pointColor[col];
        ctx.beginPath();
        ctx.arc(lineX, lineY, 5, 0, 2 * Math.PI);
        ctx.fill();
    }

    // draw
   for (let i = 0; i < linePoints.length - 1; i++) {
        ctx.strokeStyle = data.lineColor;
        ctx.beginPath();
        ctx.moveTo(linePoints[i][0], linePoints[i][1]);
        ctx.lineTo(linePoints[i + 1][0], linePoints[i + 1][1]);
        ctx.stroke();
    }

    return linePoints;
}
