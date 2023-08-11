import { Skills, useSkills } from "@/hooks/charts";

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
  ArcElement,
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
  ArcElement,
);

import { Doughnut } from "react-chartjs-2";
import Loading from "@/components/Loading";

const Skills = ({ userId }: { userId: number | undefined }) => {
  const {
    skill: chartData,
    loading: chartLoading,
    error: chartError,
  } = useSkills(userId);

  if (chartLoading) {
    return <Loading />;
  }
  if (chartError) {
    return <div>{chartError.message}</div>;
  }

  if (!Array.isArray(chartData)) {
    return null;
  }

  const summedChartDataMap = new Map<string, number>();

  chartData.forEach((item: Skills) => {
    const { type, amount } = item;
    if (summedChartDataMap.has(type)) {
      summedChartDataMap.set(type, summedChartDataMap.get(type)! + amount);
    } else {
      summedChartDataMap.set(type, amount);
    }
  });

  const summedChartData = Array.from(summedChartDataMap, ([type, amount]) => ({
    type,
    amount,
  }));

  const sortedChartData = summedChartData.sort((a, b) => b.amount - a.amount);

  const top5ChartData = sortedChartData.slice(0, 5);

  const data = {
    labels:
      top5ChartData?.map((item) => item.type?.replace("skill_", "")) ?? [],

    datasets: [
      {
        label: " total",
        data: top5ChartData?.map((item) => item.amount) ?? [],
        backgroundColor: [
          "#d071ff",
          "#c3cd37",
          "#7190ff",
          "#ff60cb",
          "#fff8ca",
        ],
        hoverOffset: 3,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    cutout: "77%",
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col m-auto w-[99%]">
      <Doughnut data={data} options={options} placeholder={"Top skills"} />
    </div>
  );
};

export default Skills;
