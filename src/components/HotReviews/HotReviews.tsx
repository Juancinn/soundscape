const reviews = [
  { quote: "A terrific piece of praise", name: "Name" },
  { quote: "A fantastic bit of feedback", name: "Name" },
  { quote: "A genuinely glowing review", name: "Name" },
];

const HotReviews = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">What's hot?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded">
            <p className="font-semibold">{`"${review.quote}"`}</p>
            <p className="text-gray-600">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotReviews;
