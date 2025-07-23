import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <Card title="Customers" value="3,781" growth="+1.10%" />
      <Card title="Orders" value="1,219" growth="-0.03%" />
      <Card title="Revenue" value="$695" growth="+15.03%" />
      <Card title="Growth" value="30.1%" growth="+6.08%" />
    </div>
  );
};

export default Dashboard;
