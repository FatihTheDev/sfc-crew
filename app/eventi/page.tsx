'use client';
import Image from 'next/image';

const Events = () => {
  const events = [
    { id: 1, title: "Uskoro", description: "Ostanite sa nama za sljedeći event", image: "/events/image.png" },
    { id: 2, title: "AJMO POLIGON 3", description: "📅 19/05/2024 📍 Poligon Ilidža", image: "/events/img5.jpg" },
    { id: 3, title: "AJMO POLIGON 2", description: "📅 28/05/2023 📍 Poligon Ilidža", image: "/events/img4.jpg" },
    { id: 4, title: "Cars&POOL", description: "📅 09/10/2022 📍 Termalna rivijera Ilidža", image: "/events/img3.jpg" },
    { id: 5, title: "AJMO POLIGON", description: "📅 22/05/2022 📍 Energoinvest - poligon ", image: "/events/img2.jpg" },
    { id: 6, title: "Car Meet vol. 1", description: " 📅 19/09/2021 📍 Parking Energoinvest", image: "/events/img1.jpg" },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event) => (
          <div key={event.id} className="relative bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image 
                src={event.image} 
                alt={event.title} 
                layout="fill" 
                objectFit="cover" 
                className="w-full h-full object-cover"
              />
              {event.title === "Uskoro" && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Uskoro</span>
              )}
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
