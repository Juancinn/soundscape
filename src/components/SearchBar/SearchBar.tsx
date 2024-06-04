const SearchBar = () => {
  return (
    <div className="text-center mb-20">
      <h1 className="text-5xl font-bold mb-10 text-black">
        Looking for something?
      </h1>
      <input
        type="text"
        placeholder="Search"
        className="w-3/4 max-w-lg mx-auto p-4 text-lg border border-gray-300 rounded"
      />
    </div>
  );
};

export default SearchBar;
