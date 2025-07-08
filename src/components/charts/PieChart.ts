import { PieChartData } from "../../types/chartData";

export function drawPieChart(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, data: PieChartData) {
    
    let newFont = data.fontName || "sans-serif";
    let newFontSize = data.fontSize || "12";
    let newTextColor = data.textColor || "black";
    
 const total = data.dataSet.reduce((sum, val) => sum + val, 0);
    const cx = canvas.width / 2;
    const cy = canvas.height / 2.5; 
    const radius = Math.min(canvas.width, canvas.height) / 3;

    let startAngle = 0;

    for (let i = 0; i < data.dataSet.length; i++) {
        const sliceAngle = (data.dataSet[i] / total) * 2 * Math.PI;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, radius, startAngle, startAngle + sliceAngle);
        ctx.closePath();

        ctx.fillStyle = data.sliceColor[i];
        ctx.fill();

        startAngle += sliceAngle;
    }

    const legendX = 10;
    let legendY = canvas.height-canvas.height+5; 

    for (let i = 0; i < data.labels.length; i++) {
        
        ctx.fillStyle = data.sliceColor[i];
        ctx.fillRect(legendX, legendY + i * 20, 10, 10);

        ctx.fillStyle = `${newTextColor}`;
        ctx.font = `${newFontSize}px ${newFont}`;
        ctx.textBaseline = "top";
        ctx.fillText(data.labels[i], legendX + 20, legendY + i * 20);
    }

}
