import data from "../data/data.json";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/Cards/StatCard";
// import RevenueChart from ../components/Charts/...

const Dashboard = ({ theme, setTheme }) => {
  return (
    <DashboardLayout theme={theme} setTheme={setTheme}>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        {data.stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Revenue Chart & Bar Chart can also use data.revenueChart */}
    </DashboardLayout>
  );
};

export default Dashboard;
