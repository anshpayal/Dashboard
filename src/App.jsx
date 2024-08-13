import { useState } from 'react';
import { DashboardProvider } from './context/DashboardContext';
import Dashboard from './components/Dashboard';
import SearchBar from './components/SearchBar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <DashboardProvider>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <p className="text-sm font-bold text-gray-400">
              Home {">"} <span className=' text-blue-900'>Dashboard V2</span>
            </p>
            <SearchBar onSearch={handleSearch} />
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Dashboard searchQuery={searchQuery} />
          </div>
        </main>
      </div>
    </DashboardProvider>
  );
}

export default App;