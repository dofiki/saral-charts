# saral-charts

saral-charts is a lightweight React charting library built with `<canvas>`. 
It supports bar, line, and pie charts with customizable styles and zero dependencies.

## Features

- Bar, Line, and Pie charts
- Custom colors, fonts, labels
- Responsive canvas resizing
- Simple API
- Written in TypeScript

---

## 🚀 Installation

```bash
npm install saral-canvas
````

> Or with yarn:

```bash
yarn add saral-canvas
```

---

## 🧩 Usage

```tsx
import { SaralCanvas } from "saral-canvas";

const data = {
  graph: "bar", // "bar" | "line" | "pie"
  labels: ["A", "B", "C", "D"],
  dataSet: [20, 40, 10, 30],
  fontName: "Arial",
  fontSize: "14",
  textColor: "#333",

  // For bar chart
  max: 50,
  steps: 5,
  barColor: ["#3498db", "#e74c3c", "#f1c40f", "#2ecc71"],
  gridColor: "#ddd"
};

function App() {
  return (
    <div style={{ width: "500px", height: "300px" }}>
      <SaralCanvas data={data} />
    </div>
  );
}
```

---

## 🧠 Chart Types & Props

### Common Props (`BaseChartData`)

| Prop        | Type      | Description                        |
| ----------- | --------- | ---------------------------------- |
| `graph`     | string    | `"bar"` \| `"line"` \| `"pie"`     |
| `labels`    | string\[] | Labels for X-axis or legend        |
| `dataSet`   | number\[] | Data values                        |
| `fontName`  | string    | Font family                        |
| `fontSize`  | string    | Font size in pixels (e.g., `"12"`) |
| `textColor` | string    | Color for labels & text            |

### Bar Chart Props

* `barColor: string[]`
* `gridColor: string`
* `max: number`
* `steps: number`

### Line Chart Props

* `lineColor: string`
* `pointColor: string[]`
* `gridColor: string`
* `max: number`
* `steps: number`

### Pie Chart Props

* `sliceColor: string[]`

---

## 🛠 Development

```bash
git clone https://github.com/your-username/saral-canvas
cd saral-canvas
npm install
npm run dev
```

---

## 📦 Build

```bash
npm run build
```

---

## 📄 License

MIT © \[dofiki]

```


