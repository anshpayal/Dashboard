/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useDashboard } from '../context/DashboardContext';
import Category from './Category';
import AddWidgetForm from './AddWidgetForm';
import { ChevronDown, Clock, EllipsisVertical, Plus, RefreshCcw } from 'lucide-react';

const Dashboard = ({ searchQuery }) => {
  const { categories, searchWidgets } = useDashboard();
  const [searchResults, setSearchResults] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      const results = searchWidgets(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, searchWidgets]);

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">CNAPP Dashboard</h1>
        <div className='flex gap-x-4 items-center'>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-white text-gray-600 font-semibold px-3 py-2 border text-sm rounded-lg hover:bg-gray-200 flex items-center gap-x-3"
          >
            Add Widget <span><Plus size={16} /></span>
          </button>
          <button 
          className="bg-white text-gray-600 px-2 py-2 border rounded-lg hover:bg-gray-200"
        >
          <RefreshCcw size={16}/>
        </button>
        <button 
          className="bg-white text-gray-600 px-2 py-2 border rounded-lg hover:bg-gray-200"
        >
          <EllipsisVertical size={16}/>
        </button>
        <button
            className="bg-white text-blue-900 px-3 py-2 border border-blue-900 text-sm font-semibold rounded-md hover:bg-gray-200 flex items-center gap-x-3"
          >
            <span className='border-r border-blue-900 pr-1'><Clock size={20}/></span>
            Last 2 days
            <span><ChevronDown size={20}/></span> 
          </button>
        </div>

      </div>
      {/* <SearchBar onSearch={handleSearch} /> */}
      {searchResults.length > 0 ? (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Search Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.map(widget => (
              <div key={widget.id} className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">{widget.name}</h3>
                <p>{widget.text}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        categories.map(category => (
          <Category key={category.id} category={category} />
        ))
      )}
      {showAddForm && (
        <AddWidgetForm onClose={() => setShowAddForm(false)} />
      )}
    </div>
  );
};

export default Dashboard