import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
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
  const optionspie = {
    responsive: true, // Ensure chart responds to different screen sizes
    maintainAspectRatio: false, // Prevents maintaining the default ratio
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
  };
  const data = {
    datasets: [
      {
        label: "GenderRatio",
        data: [3, 5],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
        cutout: 90,
      },
    ],
    labels: ["Female", "Male"],
  };
  return (
    <div className={`w-full max-w-[360px] h-[300px]`}>
      <Doughnut data={data} options={optionspie} />
    </div>
  );
};
export const Barchartnew = ({
  barthickness,
  yaxis,
  label1,
  label2,
  bgcolor1,
  bgcolor2,
  data1,
  data2,
}: {
  barthickness: number;
  yaxis: "x" | "y";
  label1: string;
  label2: string;
  bgcolor1: string;
  bgcolor2: string;
  data1: number[];
  data2: number[]; // Restrict yaxis type to "x" or "y"
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
        label: label1,
        data: data1,
        backgroundColor: bgcolor1,
        borderWidth: 1,
      },
      {
        label: label2,
        data: data2,
        backgroundColor: bgcolor2,
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
export const Barchartnew2 = ({
  barthickness,
  yaxis,
  label,
  bgcolor,
  dataa,
}: {
  barthickness: number;
  yaxis: "x" | "y";
  label: string;
  bgcolor: string;
  dataa: number[]; // Restrict yaxis type to "x" or "y"
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
        label: label,
        data: dataa,
        backgroundColor: bgcolor,
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
export const PieChart2 = () => {
  const optionspie = {
    responsive: true, // Ensure chart responds to different screen sizes
    maintainAspectRatio: false, // Prevents maintaining the default ratio
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
  };
  const data = {
    datasets: [
      {
        label: "Order Status",
        data: [13, 12, 5],
        backgroundColor: [
          "rgb(115, 236, 139)",
          "rgb(84, 195, 146)",
          "rgb(21, 179, 146)",
        ],
        hoverOffset: 4,
        cutout: 0,
      },
    ],
    labels: ["Processing", "Delivered", "Shipped"],
  };
  return (
    <div className={`w-full max-w-[360px] h-[300px]`}>
      <Pie data={data} options={optionspie} />
    </div>
  );
};
export const Categoryproduct = () => {
  const data1 = [
    {
      name: "Camera",
      value: 10,
    },
    {
      name: "TV",
      value: 20,
    },
    {
      name: "Washing Machine",
      value: 30,
    },
    {
      name: "Watches",
      value: 40,
    },
    {
      name: "Phones",
      value: 50,
    },
  ];
  const data = {
    datasets: [
      {
        label: "Categories",
        data: data1.map((e) => e.value),
        backgroundColor: data1.map(
          (e) => `rgb(${e.value * 4}, ${e.value * 4}, 133`
        ),
        hoverOffset: 4,
        cutout: 30,
      },
    ],
    labels: data1.map((e) => e.name),
  };
  const optionspie = {
    responsive: true, // Ensure chart responds to different screen sizes
    maintainAspectRatio: false, // Prevents maintaining the default ratio
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
  };
  return (
    <div className={`w-full max-w-[360px] h-[300px]`}>
      <Pie data={data} options={optionspie} />
    </div>
  );
};
export const StockAvailability = () => {
  const data1 = [
    {
      name: "In Stock",
      value: 10,
    },
    {
      name: "Out of Stock",
      value: 20,
    },
  ];
  const data = {
    datasets: [
      {
        label: "Stocks",
        data: data1.map((e) => e.value),
        backgroundColor: data1.map(
          (e) => `rgb(${e.value * 15}, ${e.value * 8}, 180`
        ),
        hoverOffset: 4,
        cutout: 80,
      },
    ],
    labels: data1.map((e) => e.name),
  };
  const optionspie = {
    responsive: true, // Ensure chart responds to different screen sizes
    maintainAspectRatio: false, // Prevents maintaining the default ratio
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
  };
  return (
    <div className={`w-full max-w-[360px] h-[300px]`}>
      <Pie data={data} options={optionspie} />
    </div>
  );
};
export const RevenuemarketingCharges = () => {
  const data1 = [
    {
      grossIncome: 223,
      discount: 10,
      productionCost: 15,
      marketingCost: 66.9,
      netMargin: 113.1,
    },
  ];
  
  const generateRandomColor = (factor:number) => {
    const r = Math.floor((Math.random() * 100 + factor) % 255);
    const g = Math.floor((Math.random() * 150 + factor) % 255);
    const b = Math.floor((Math.random() * 200 + factor) % 255);
    return `rgb(${r}, ${g}, ${b})`;
  };
  
  const data = {
    datasets: [
      {
        label: "Revenue and Marketing Charges",
        data: Object.values(data1[0]),
        backgroundColor: Object.values(data1[0]).map((e, i) =>
          generateRandomColor(e * i)
        ),
        hoverOffset: 4,
        cutout: 0,
      },
    ],
    labels: Object.keys(data1[0]),
  };
  
  const optionspie = {
    responsive: true, // Ensure chart responds to different screen sizes
    maintainAspectRatio: false, // Prevents maintaining the default ratio
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
  };
  return (
    <div className={`w-full max-w-[360px] h-[300px]`}>
      <Pie data={data} options={optionspie} />
    </div>
  );
};
export const UserandAdminCount=()=>{
  const data1 = [
    {
      name: "User",
      value: 1,
    },
    {
      name: "Admin",
      value: 3,
    },
  ];
  const data = {
    datasets: [
      {
        label: "User and Admin Count",
        data: data1.map((e) => e.value),
        backgroundColor: data1.map(
          (e) => `rgb(${e.value * 89}, ${e.value * 4}, 133`
        ),
        hoverOffset: 4,
        cutout: 30,
      },
    ],
    labels: data1.map((e) => e.name),
  };
  const optionspie = {
    responsive: true, // Ensure chart responds to different screen sizes
    maintainAspectRatio: false, // Prevents maintaining the default ratio
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
  };
  return (
    <div className={`w-full max-w-[360px] h-[300px]`}>
      <Pie data={data} options={optionspie} />
    </div>
  );
}
export const UserAgeGroup=()=>{
  const data1 = [
    {
      name: "teen",
      value: 1,
    },
    {
      name: "adult",
      value: 3,
    },
    {
      name: "old",
      value: 2,
    }
  
]
  const data = {
    datasets: [
      {
        label: "User Age Groups",
        data: data1.map((e) => e.value),
        backgroundColor: data1.map(
          (e) => `rgb(${e.value * 4}, ${e.value * 89}, 133`
        ),
        hoverOffset: 4,
        cutout: 30,
      },
    ],
    labels: data1.map((e) => e.name),
  };
  const optionspie = {
    responsive: true, // Ensure chart responds to different screen sizes
    maintainAspectRatio: false, // Prevents maintaining the default ratio
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
  };
  return (
    <div className={`w-full max-w-[360px] h-[300px]`}>
      <Pie data={data} options={optionspie} />
    </div>
  );
}

export const Linechartone = ({
  barthickness,
  yaxis,
  label,
  bgcolor,
  dataa,
  borderColor
}: {
  barthickness: number;
  yaxis: "x" | "y";
  label: string;
  bgcolor: string;
  dataa: number[];
  borderColor: string; // Restrict yaxis type to "x" or "y"
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
    labels: Utils.months({ count: 12}),
    datasets: [
      {
        label: label,
        data: dataa,
        borderColor: borderColor,
        backgroundColor: bgcolor,
        borderWidth: 1,
        fill:true,
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
      <Line options={options} data={data} />
    </div>
  );
};
    
