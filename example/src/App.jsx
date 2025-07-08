import { SaralCanvas } from "saral-charts";

let data = {
    graph:"bar",
    dataSet: [5, 25, 80, 15, 8],
    labels: ["Ram", "Shyam", "Hari", "Bharat", "Ramesh"],
    max: 100,
    steps: 5,
    barColor: ["purple", "maroon", "green", "darkgreen", "orange"],
    gridColor: "black",
    fontName: "Arial",
    fontSize: "12",
    textColor: "black", 
};

export default function App() {
  return (
    <div style={{ width: 600, height: 400 }}>
      <SaralCanvas data={data} />
    </div>
  );
}
