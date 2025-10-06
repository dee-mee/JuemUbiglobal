
import React from 'react';

const galleryItems = [
  { id: 1, title: "Nairobi Music Festival", description: "Main stage audio setup", imageUrl: "https://picsum.photos/600/800?random=10" },
  { id: 2, title: "Corporate Gala Dinner", description: "Crystal-clear speeches and ambient music", imageUrl: "https://picsum.photos/800/600?random=11" },
  { id: 3, title: "Beach Wedding Ceremony", description: "Wireless mic system for vows by the sea", imageUrl: "https://picsum.photos/600/800?random=12" },
  { id: 4, title: "Rooftop DJ Party", description: "Pumping bass and crisp highs over the city", imageUrl: "https://picsum.photos/800/600?random=13" },
  { id: 5, title: "Product Launch Event", description: "Flawless audio-visual integration", imageUrl: "https://picsum.photos/800/600?random=14" },
  { id: 6, title: "Charity Concert", description: "Powering performances for a good cause", imageUrl: "https://picsum.photos/600/800?random=15" },
  { id: 7, title: "Cultural Festival", description: "Capturing the sounds of tradition", imageUrl: "https://picsum.photos/800/600?random=16" },
  { id: 8, title: "Outdoor Cinema Night", description: "Immersive sound under the stars", imageUrl: "https://picsum.photos/800/600?random=17" },
  { id: 9, title: "Fashion Show Runway", description: "High-energy sound for the catwalk", imageUrl: "https://picsum.photos/600/800?random=18" },
  { id: 10, title: "University Graduation", description: "Ensuring every name is heard clearly", imageUrl: "https://picsum.photos/800/600?random=19" },
  { id: 11, title: "Gospel Album Launch", description: "Anointed sound for a spiritual event", imageUrl: "https://picsum.photos/800/600?random=20" },
  { id: 12, title: "Political Rally", description: "Powerful voice projection for large crowds", imageUrl: "https://picsum.photos/600/800?random=21" },
];

const GalleryPage: React.FC = () => {
  return (
    <div className="py-20 bg-dark-bg animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white-text mb-4">Our Gallery</h1>
          <p className="text-lg text-primary max-w-3xl mx-auto">A Glimpse into the Events We've Powered</p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-lg group relative break-inside-avoid">
              <img
                src={item.imageUrl}
                alt={`${item.title} - ${item.description}`}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white-text transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                <p className="text-sm text-light-text transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;