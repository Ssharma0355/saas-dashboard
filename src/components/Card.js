const Card = ({ title, value, growth }) => (
  <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-xl transition hover:scale-[1.01]">
    <h4 className="text-gray-500 dark:text-gray-300 text-sm">{title}</h4>
    <p className="text-2xl font-bold text-black dark:text-white">{value}</p>
    <span
      className={`text-sm ${
        growth.startsWith("+") ? "text-green-500" : "text-red-500"
      }`}
    >
      {growth}
    </span>
  </div>
);

export default Card;
