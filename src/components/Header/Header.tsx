const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-white shadow-md">
      <div className="text-2xl font-bold">SoundScape</div>
      <nav className="space-x-4">
        <a href="#" className="text-gray-700">
          Artists
        </a>
        <a href="#" className="text-gray-700">
          Tracks
        </a>
        <a href="#" className="text-gray-700">
          Listen to this
        </a>
        <button className="px-4 py-2 bg-black text-white rounded">
          Sign In
        </button>
      </nav>
    </header>
  );
};

export default Header;
