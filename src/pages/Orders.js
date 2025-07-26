import data from "../data/data.json";
import DashboardLayout from "../layouts/DashboardLayout";

const Orders = ({ theme, setTheme }) => {
  const orders = data.orders;

  return (
    <DashboardLayout theme={theme} setTheme={setTheme}>
      <h2 className="text-xl font-semibold mb-4">Order List</h2>
      {/* Render orders table here like before using `orders.map(...)` */}
    </DashboardLayout>
  );
};

export default Orders;
