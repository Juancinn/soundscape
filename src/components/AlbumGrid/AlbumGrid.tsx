const AlbumGrid = () => {
  return (
    <div className="relative h-64 bg-gray-200 mb-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex conveyor">
        {[...Array(36)].map((_, index) => (
          <div key={index} className="w-1/6 h-1/3 p-2">
            <div className="w-full h-full bg-gray-400"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumGrid;
