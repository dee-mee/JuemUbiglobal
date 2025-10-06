
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-20 bg-dark-bg animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white-text mb-4">About Juem Uniglobal</h1>
          <p className="text-lg text-primary max-w-3xl mx-auto">The Sound of Excellence in Kenya</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://picsum.photos/800/600?random=1" 
              alt="Juem Uniglobal team working at an event" 
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-heading text-white-text">Our Story</h2>
            <p className="text-light-text leading-relaxed">
              Founded with a passion for pristine audio, Juem Uniglobal Tech Electronics has grown from a small startup to one of Kenya's most trusted names in sound system solutions. We believe that great sound is the backbone of any memorable event, and our mission is to deliver unparalleled audio experiences that captivate audiences and exceed expectations.
            </p>
            <p className="text-light-text leading-relaxed">
              Our team consists of experienced audio engineers, technicians, and event specialists who are dedicated to their craft. We combine technical expertise with a creative approach to design soundscapes that are perfectly suited for any occasion, from corporate functions to vibrant music festivals.
            </p>
          </div>
        </div>

        <div className="mt-24">
            <h2 className="text-3xl font-bold font-heading text-white-text text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard 
                    title="Excellence" 
                    description="We strive for perfection in every project, ensuring flawless audio and professional service."
                />
                <FeatureCard 
                    title="Reliability" 
                    description="Our clients trust us to deliver on time, every time, with meticulously maintained, top-tier equipment."
                />
                <FeatureCard 
                    title="Partnership" 
                    description="We work with you as a partner, dedicated to bringing your event's vision to life through sound."
                />
            </div>
        </div>

        <div className="mt-24 bg-light-bg py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold font-heading text-white-text text-center mb-12">Meet Our Experts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMemberCard
                imageUrl="https://picsum.photos/400/400?random=21"
                name="John Omondi"
                title="Founder & CEO"
                bio="With over 15 years in the audio industry, John's vision is the driving force behind our commitment to quality."
              />
              <TeamMemberCard
                imageUrl="https://picsum.photos/400/400?random=22"
                name="Grace Wanjiru"
                title="Lead Audio Engineer"
                bio="Grace is a master of the mixing board, ensuring every event sounds perfectly balanced and powerful."
              />
              <TeamMemberCard
                imageUrl="https://picsum.photos/400/400?random=23"
                name="David Kimani"
                title="Head of Rentals & Logistics"
                bio="David ensures that the right gear gets to the right place at the right time, every single time."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-dark-bg p-8 rounded-lg text-center transform transition duration-300 hover:scale-105 hover:bg-slate-900/50">
        <h3 className="text-xl font-bold font-heading text-primary mb-3">{title}</h3>
        <p className="text-light-text">{description}</p>
    </div>
);

const TeamMemberCard: React.FC<{ imageUrl: string; name: string; title: string; bio: string; }> = ({ imageUrl, name, title, bio }) => (
  <div className="bg-dark-bg p-6 rounded-lg text-center shadow-lg">
    <img src={imageUrl} alt={`Profile photo of ${name}, ${title}`} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary" />
    <h3 className="text-xl font-bold font-heading text-white-text">{name}</h3>
    <p className="text-primary font-medium mb-3">{title}</p>
    <p className="text-light-text text-sm">{bio}</p>
  </div>
);

export default AboutPage;