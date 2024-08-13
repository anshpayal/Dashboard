/* eslint-disable react/prop-types */
import { Search } from 'lucide-react';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-5/12 flex items-center justify-center gap-x-3">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search widgets..."
        className="w-full px-2 py-1 border rounded"
      />
      <button type="submit" className=" bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-400">
        <Search/>
      </button>
    </form>
  );
};

export default SearchBar;