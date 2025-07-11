"use client";
import { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

export default function Hero() {
  const bikes = [
    { src: "/bicycle.svg", alt: "Bike 1" },
    { src: "/bicycle2.svg", alt: "Bike 2" },
    { src: "/bicycle3.svg", alt: "Bike 3" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const changeBike = (newIndex) => {
    if (newIndex < 0 || newIndex >= bikes.length) return;
    setFade(false);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setFade(true);
    }, 200);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => changeBike(activeIndex + 1),
    onSwipedRight: () => changeBike(activeIndex - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white relative">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover the <span className="text-red-500">Future of Riding</span>
          </h1>
          <p className="text-sm md:text-base mb-6 text-gray-600">
  We are redefining the ride, blending smart technology, cutting-edge design, and human-centered engineering. Whether you&rsquo;re conquering city streets or exploring new terrain, our bikes are built for tomorrow&rsquo;s journey, today.
</p>

          <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition">
            Order Now
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative flex flex-col items-center mt-8 md:mt-0 w-full">
          <div
            {...swipeHandlers}
           className={`relative w-full h-[16rem] sm:h-[18rem] md:h-[24rem] transition-opacity duration-500 ${
  fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              key={bikes[activeIndex].src}
              src={bikes[activeIndex].src}
              alt={bikes[activeIndex].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>

          {/* Thumbnail Selectors */}
          <div className="absolute bottom-2 right-4 flex gap-2 mt-4 bg-white bg-opacity-90 p-2 rounded-lg shadow-md">
            {bikes.map((bike, index) => (
              <button
                key={bike.src}
                onClick={() => changeBike(index)}
                className={`w-14 h-14 p-1 rounded border-2 transition-all duration-300 ${
                  activeIndex === index
                    ? "border-red-500 scale-110"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <Image
                  src={bike.src}
                  alt={bike.alt}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


