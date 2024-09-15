import { Bar, Doughnut } from "react-chartjs-2";

export const Barchart = ({
  barthickness,
  yaxis,
}: {
  barthickness: number;
  yaxis: "x" | "y"; // Restrict yaxis type to "x" or "y"
}) => {
  const Utils = {
    months: function ({ count }: { count: number }) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const result = [];
      const currentMonth = new Date().getMonth();

      for (let i = 0; i < count; i++) {
        result.push(monthNames[(currentMonth - i + 12) % 12]);
      }

      return result.reverse();
    },
  };

  const data = {
    labels: Utils.months({ count: 7 }),
    datasets: [
      {
        label: "Revenue",
        data: [12, 34, 56, 78, 90, 23, 100],
        backgroundColor: "rgba(55, 145, 255, 0.49)",
        borderWidth: 1,
      },
      {
        label: "Transaction",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(22, 10, 250, 0.8)",
        borderWidth: 1,
      },
    ],
  };

  // Common options
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    barThickness: barthickness,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#000000", // Corrected hex code for black
          font: {
            size: 10,
          },
        },
      },
    },
  };

  const options = {
    ...commonOptions,
    indexAxis: yaxis, // Dynamically set indexAxis based on props
  };

  return (
    <div className="min-h-[70vh]">
      <Bar options={options} data={data} />
    </div>
  );
};
export const PieChart = () => {
  const data = {
    datasets: [
      {
        label: "GenderRatio",
        data: [3, 5],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
        cutout:90
      },
    ],
    labels: ["Female", "Male"],
  };
  return <Doughnut data={data} />;
};
