import { drawBarChart } from "./BarChart";
import { drawLineChart } from "./LineChart";
import { drawPieChart } from "./PieChart";

export const chartRenderers = {
  bar: drawBarChart,
  line: drawLineChart,
  pie: drawPieChart
};
