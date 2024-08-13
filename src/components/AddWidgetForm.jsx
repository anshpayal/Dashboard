/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDashboard } from '../context/DashboardContext';

const AddWidgetForm = ({ onClose }) => {
  const { categories, addWidget } = useDashboard();
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [selectedCategories, setSelectedCategories] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text && Object.values(selectedCategories).some(v => v)) {
      Object.entries(selectedCategories).forEach(([categoryId, isSelected]) => {
        if (isSelected) {
          addWidget(categoryId, {
            id: Date.now().toString(),
            name,
            text,
          });
        }
      });
      onClose();
    }
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-end">
      <div className="bg-white h-full shadow-xl w-5/12">
        <div>
          <h1 className='bg-blue-900 text-white font-semibold p-3'>Add Widget</h1>
          <span></span>
        </div>
        <div className='p-3'>
          <h2 className="text-sm font-semibold mb-4 text-gray-600">Personalise your dashboard by adding the following widget</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Widget name"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Widget text"
                className="w-full p-2 border rounded"
                rows="3"
                required
              />
            </div>
            <div className="mb-4">
              <p className="font-semibold mb-2">Select category:</p>
              {categories.map(category => (
                <label key={category.id} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories[category.id] || false}
                    onChange={() => handleCategoryChange(category.id)}
                    className="mr-2"
                  />
                  {category.name}
                </label>
              ))}
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={onClose} className="text-sm mr-2 px-6 py-2 border border-blue-900  rounded-lg hover:bg-gray-100">
                Cancel
              </button>
              <button type="submit" className="px-6 py-2 bg-blue-900 text-sm text-white rounded-lg hover:bg-blue-600">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetForm;