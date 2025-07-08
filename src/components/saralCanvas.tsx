    import React, { useEffect, useRef } from "react";
    import { ChartData } from "../types/chartData";
    import { chartRenderers } from "./charts";
    import { resizeCanvas } from "../utils/resizeCanvas";

    interface CanvasChartProps {
    data: ChartData;
    }

    const CanvasChart: React.FC<CanvasChartProps> = ({ data }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const linePointsRef = useRef<[number, number][]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const draw = () => {
        resizeCanvas(canvas);

        const renderer = chartRenderers[data.graph];

        if (renderer) {
            const result = renderer(ctx, canvas, data as any);

            if (data.graph === "line" && Array.isArray(result)) {
            linePointsRef.current = result;
            }
        }
        };

        draw();
        window.addEventListener("resize", draw);
        return () => window.removeEventListener("resize", draw);
    }, [data]);

    return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
    };

    export default CanvasChart;
