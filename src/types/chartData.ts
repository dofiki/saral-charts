export type GraphType = "bar" | "line" | "pie";

export interface BaseChartData {
    graph: GraphType,
    dataSet: number[],
    labels: string[],
    fontName: string,
    fontSize: string,
    textColor: string
}

export interface LineChartData extends BaseChartData{
    graph:"line",
    max: number,
    steps: number,
    gridColor: string,
    pointColor: string[],
    lineColor: string;
}

export interface BarChartData extends BaseChartData {
  graph: "bar";
  max: number;
  steps: number;
  barColor: string[];
  gridColor: string;
}

export interface PieChartData extends BaseChartData {
  graph: "pie";
  sliceColor: string[];
}

export type ChartData = LineChartData | BarChartData | PieChartData;