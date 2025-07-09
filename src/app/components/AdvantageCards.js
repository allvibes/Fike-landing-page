export default function AdvantageCards() {
  const cards = [
    {
      icon: "🛡",
      title: "10 Day at Home Trial",
      desc: "Test ride your bike at home for up to 10 days.",
      bg: "bg-white",
    },
    {
      icon: "🚚",
      title: "Free Shipping",
      desc: "Your bike ships free, fully assembled and ready to ride.",
      bg: "bg-red-500 text-white",
    },
    {
      icon: "🎖",
      title: "4-Year Warranty",
      desc: "Enjoy 4 years or 20,000 miles of peace-of-mind protection.",
      bg: "bg-white",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-6 md:px-16">
      <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`p-6 rounded shadow hover:shadow-md transition text-center ${card.bg}`}
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
