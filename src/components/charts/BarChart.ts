import { BarChartData } from "../../types/chartData";

export function drawBarChart(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, data: BarChartData) {
    
    let newFont = data.fontName || "sans-serif";
    let newFontSize = data.fontSize || "12";
    let newTextColor = data.textColor || "black";
    
    const numRows = data.steps;
    const numCols = data.dataSet.length;

    let cellHeight = canvas.height/ numRows - 12;
    let cellWidth = canvas.width / numCols - 12;

    let totalWidth = cellWidth * numCols;
    let offsetX = canvas.width- totalWidth;

    let increment = data.max / data.steps;

    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            ctx.strokeStyle = data.gridColor;
            ctx.lineWidth = 0.5;
            ctx.strokeRect(
                cellWidth * col + offsetX - 2,
                cellHeight * row + 2,
                cellWidth,
                cellHeight
            );
        }
    }

    for (let col = 0; col < numCols; col++) {
        let labelX = cellWidth * col + offsetX + cellWidth / 2;
        let labelY = cellHeight * numRows + 25;

        ctx.fillStyle = `${newTextColor}`;
        ctx.font = `${newFontSize}px ${newFont}`;
        ctx.textAlign = "center";
        ctx.fillText(data.labels[col], labelX, labelY);
    }

    for (let row = 0; row <= numRows; row++) {
        let stepX = offsetX - 10;
        let stepY = cellHeight * row + cellHeight / 6;
        let stepValue = data.max - increment * row;

        ctx.fillStyle = `${newTextColor}`;
        ctx.font = `${newFontSize}px ${newFont}`;
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillText(stepValue.toFixed(0), stepX, stepY);
    }

    for (let col = 0; col < numCols; col++) {
        let barHeight =
            (data.dataSet[col] / data.max) * (cellHeight * numRows);
        let barX = cellWidth * col + offsetX + cellWidth / 4;
        let barY = cellHeight * numRows - barHeight + 2;

        ctx.fillStyle = data.barColor[col];
        ctx.fillRect(barX, barY, cellWidth / 2, barHeight);
    }

}
