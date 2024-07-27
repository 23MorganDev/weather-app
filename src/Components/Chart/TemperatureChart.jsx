import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./TemperatureChart.css"; // Import the CSS file

// Register the components
Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TemperatureChart = ({ days, temperatures }) => {
  // Debugging logs
  console.log("Days:", days);
  console.log("Temperatures:", temperatures);

  const chartData = {
    labels: days,
    datasets: [
      {
        label: "Temperature Trends",
        data: temperatures,
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.2)", 
        borderColor: "rgba(75, 192, 192, 1)", 
        pointBackgroundColor: "rgba(75, 192, 192, 1)", 
        pointBorderColor: "#fff", 
        pointHoverBackgroundColor: "#fff", 
        pointHoverBorderColor: "rgba(75, 192, 192, 1)", 
        yAxisID: "y",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Day",
          color: "#ffffff", 
          font: {
            size: 16,
          },
        },
        ticks: {
          color: "#ffffff", 
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", 
        },
      },
      y: {
        title: {
          display: true,
          text: "Temperature (°C)",
          color: "#ffffff", 
          font: {
            size: 16,
          },
        },
        ticks: {
          color: "#ffffff", 
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", 
        },
        position: "left",
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#ffffff", 
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)", 
        titleColor: "#ffffff",
        bodyColor: "#ffffff", 
      },
    },
  };

  return (
    <div className="chart-container">
      <div style={{ width: "80%", maxWidth: "800px", height: "400px" }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default TemperatureChart;



