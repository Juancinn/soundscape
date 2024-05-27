const SearchBar = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Looking for something?</h1>
      <input
        type="text"
        placeholder="Search"
        className="w-full p-3 border border-gray-300 rounded mb-10"
      />
    </div>
  );
};

export default SearchBar;
