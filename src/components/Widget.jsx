/* eslint-disable react/prop-types */
import { useDashboard } from '../context/DashboardContext';

const Widget = ({ widget, categoryId }) => {
  const { removeWidget } = useDashboard();

  return (
    <div className="bg-white p-4 rounded shadow relative">
      <button
        onClick={() => removeWidget(categoryId, widget.id)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        ×
      </button>
      <h3 className="font-semibold mb-2">{widget.name}</h3>
      <p>{widget.text}</p>
    </div>
  );
};

export default Widget;