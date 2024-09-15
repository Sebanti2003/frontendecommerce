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

    return result.reverse(); // To ensure the months appear in chronological order
  },
};

// const labels = Utils.months({ count: 7 });
// export const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "My First Dataset",
//       data: [65, 59, 80, 81, 56, 55, 40],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//         "rgba(255, 205, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(201, 203, 207, 0.2)",
//       ],
//       borderColor: [
//         "rgb(255, 99, 132)",
//         "rgb(255, 159, 64)",
//         "rgb(255, 205, 86)",
//         "rgb(75, 192, 192)",
//         "rgb(54, 162, 235)",
//         "rgb(153, 102, 255)",
//         "rgb(201, 203, 207)",
//       ],
//       borderWidth: 1,
//     },
//     {
//       label: `My Second Dataset`,
//       data: [12,34,56,78,90,23,100],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//         "rgba(255, 205, 86, 0.9)",
//         "rgba(89, 192, 192, 0.9)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(201, 203, 207, 0.2)",
//       ],
//       borderColor: [
//         "rgb(255, 99, 132)",
//         "rgb(255, 159, 64)",
//         "rgb(255, 205, 86)",
//         "rgb(79, 197, 192)",
//         "rgb(54, 162, 235)",
//         "rgb(153, 102, 255)",
//         "rgb(201, 203, 207)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };
// export const options = {
//   indexAxis: "x",
//   barThickness: 30,
//   scales: {
//     y: {
//       beginAtZero: true,
//       grid: {
//         display: false,
//       },
//     },
//     x: {
//       ticks: {
//         font: {
//           size: 10,
//         },
//       },
//       grid: {
//         display: false,
//       },
//     },
//   },
// };

// export const config = {
//   type: "bar",
//   data: data,
//   options,
// };
export const data = {
  labels: Utils.months({ count: 7 }),
  datasets: [
    {
      label: "Revenue",
      data: [12, 34, 56, 78, 90, 23, 100],
      backgroundColor: [
        "rgba(55, 145, 255, 0.49)",
        "rgba(55, 145, 255, 0.49)",
        "rgba(55, 145, 255, 0.49)",
        "rgba(55, 145, 255, 0.49)",
        "rgba(55, 145, 255, 0.49)",
        "rgba(55, 145, 255, 0.49)",
        "rgba(55, 145, 255, 0.49)",
      ],
      borderColor: [],
      borderWidth: 1,
    },
    {
      label: "Transaction",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(22, 10, 250, 0.8)",
        "rgba(22, 10, 250, 0.8)",
        "rgba(22, 10, 250, 0.8)",
        "rgba(22, 10, 250, 0.8)",
        "rgba(22, 10, 250, 0.8)",
        "rgba(22, 10, 250, 0.8)",
        "rgba(22, 10, 250, 0.8)",
      ],
      borderColor: [],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  barThickness: 30,
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
  // Customize the legend to change the label colors
  plugins: {
    legend: {
      labels: {
        color: "#00000", // Set the color of the labels (for the first dataset, for example)
        font: {
          size: 10, // Change font size if needed
        },
      },
    },
  },
};
