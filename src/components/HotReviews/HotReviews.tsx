const reviews = [
  {
    id: 1,
    quote: "A terrific piece of praise",
    name: "John Doe",
    description:
      "This album was a pleasant surprise with its intricate melodies.",
  },
  {
    id: 2,
    quote: "A fantastic bit of feedback",
    name: "Jane Smith",
    description: "The artist's new single is a refreshing take on modern pop.",
  },
  {
    id: 3,
    quote: "A genuinely glowing review",
    name: "Alex Johnson",
    description: "Every track on this album tells a compelling story.",
  },
];

const HotReviews = () => {
  return (
    <div className="mb-20">
      <h2 className="text-2xl font-bold mb-6 text-prussian-blue">
        What's hot?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-6 bg-white shadow-md rounded-lg border border-light-gray"
          >
            <p className="font-semibold text-prussian-blue">{`"${review.quote}"`}</p>
            <p className="text-gray-600">{review.name}</p>
            <p className="text-gray-500">{review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotReviews;
