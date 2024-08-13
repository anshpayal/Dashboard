/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';
import initialData from '../data/initialData';

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState(initialData);

  const addWidget = (categoryId, widget) => {
    setCategories(prevCategories => {
      const updatedCategories = [...prevCategories];
      const categoryIndex = updatedCategories.findIndex(cat => cat.id === categoryId);
      if (categoryIndex !== -1) {
        updatedCategories[categoryIndex].widgets.push(widget);
      }
      return updatedCategories;
    });
  };

  const removeWidget = (categoryId, widgetId) => {
    setCategories(prevCategories => {
      const updatedCategories = [...prevCategories];
      const categoryIndex = updatedCategories.findIndex(cat => cat.id === categoryId);
      if (categoryIndex !== -1) {
        updatedCategories[categoryIndex].widgets = updatedCategories[categoryIndex].widgets.filter(
          widget => widget.id !== widgetId
        );
      }
      return updatedCategories;
    });
  };

  const searchWidgets = (query) => {
    return categories.flatMap(category => 
      category.widgets.filter(widget => 
        widget.name.toLowerCase().includes(query.toLowerCase()) ||
        widget.text.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <DashboardContext.Provider value={{ categories, addWidget, removeWidget, searchWidgets }}>
      {children}
    </DashboardContext.Provider>
  );
};