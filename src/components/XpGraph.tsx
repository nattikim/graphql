import { useProjects } from "@/hooks/charts";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

import { Line } from "react-chartjs-2";
import Loading from "@/components/Loading";

const XpGraph = ({ userId }: { userId: number | undefined }) => {
  const {
    chart: chartData,
    loading: chartLoading,
    error: chartError,
  } = useProjects(userId);

  if (chartLoading) {
    return <Loading />;
  }
  if (chartError) {
    return <div>{chartError.message}</div>;
  }

  const sortedChartData = (chartData || []).slice().sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateA - dateB;
  });

  const data = {
    labels: sortedChartData?.map((item) => item.object.name) ?? [],
    datasets: [
      {
        label: "XP",
        data: sortedChartData?.map((item) => item.amount) ?? [],
        fill: false,
        backgroundColor: "#c3cd37",
        borderColor: "#c3cd37",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col m-auto w-[99%]">
      <Line
        data={data}
        options={options}
        placeholder={"School curriculum progress"}
      />
    </div>
  );
};

export default XpGraph;
