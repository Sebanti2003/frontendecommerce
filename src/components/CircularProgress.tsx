const CircularProgress = ({ percentage }: { percentage: number }) => {
  const isNegative = percentage < 0;
  const absPercentage = Math.abs(percentage); // Always work with absolute values for stroke-dasharray

  return (
    <div className="single-chart">
      <svg
        viewBox="0 0 36 36"
        className={`circular-chart ${isNegative ?"red": "green"}`} // Change color based on percentage
        style={{
          transform: isNegative ? "rotate(0deg)" : "rotate(0deg)", // Rotate for negative values
        }}
      >
        <path
          className="circle-bg"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          strokeDasharray={`${absPercentage}, 100`}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" className="percentage">
          {absPercentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
