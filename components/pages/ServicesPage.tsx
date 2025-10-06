
import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="py-20 bg-light-bg animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white-text mb-4">Our Services</h1>
          <p className="text-lg text-primary max-w-3xl mx-auto">Comprehensive Audio Solutions for Every Occasion</p>
        </div>
        
        <div className="mb-20">
            <h2 className="text-3xl font-bold font-heading text-white-text text-center mb-12">Events We Power</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                <EventIcon icon={<MusicIcon />} name="Concerts & Festivals" />
                <EventIcon icon={<BriefcaseIcon />} name="Corporate Events" />
                <EventIcon icon={<HeartIcon />} name="Weddings" />
                <EventIcon icon={<GiftIcon />} name="Private Parties" />
                <EventIcon icon={<MegaphoneIcon />} name="Public Gatherings" />
            </div>
        </div>


        <div className="space-y-16">
          <ServiceDetail
            title="Sound System Rentals"
            description="Whether it's a wedding, a corporate gala, a concert, or a private party, we have the perfect sound system for you. Our rental packages are fully customizable and include delivery, setup, and on-site technical support. We offer:"
            items={['PA Systems & Line Arrays', 'DJ Equipment & Backline', 'Wireless Microphones & Mixers', 'Stage Monitors & Subwoofers', 'Power Amplifiers & Processors']}
            imageUrl="https://picsum.photos/800/600?random=2"
            imagePosition="left"
          />

          <ServiceDetail
            title="Professional Audio Sales"
            description="As authorized dealers for renowned audio brands, we offer competitive pricing on a wide range of professional equipment. Our experts will guide you to the perfect gear for your venue, studio, or mobile setup. Our sales services include:"
            items={['Expert Consultation & System Design', 'Product Demonstration', 'Competitive Pricing & Warranties', 'Installation Services', 'After-Sales Support & Training']}
            imageUrl="https://picsum.photos/800/600?random=3"
            imagePosition="right"
          />

          <ServiceDetail
            title="Event Production & Technical Support"
            description="Go beyond just sound with our full event production services. Our experienced team can manage all technical aspects of your event, ensuring a seamless and professional execution from start to finish. We provide:"
            items={['Audio Engineering & Live Mixing', 'Stage Management & Crew', 'Lighting and Visuals Coordination', 'Power Distribution & Management', 'Full technical production planning']}
            imageUrl="https://picsum.photos/800/600?random=4"
            imagePosition="left"
          />
        </div>
      </div>
    </div>
  );
};

interface ServiceDetailProps {
  title: string;
  description: string;
  items: string[];
  imageUrl: string;
  imagePosition: 'left' | 'right';
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ title, description, items, imageUrl, imagePosition }) => {
  const isImageLeft = imagePosition === 'left';
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-dark-bg p-8 rounded-lg shadow-xl`}>
      <div className={`${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
        <img src={imageUrl} alt={`Professional audio setup for ${title} services`} className="rounded-lg shadow-lg" />
      </div>
      <div className={`space-y-4 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
        <h2 className="text-3xl font-bold font-heading text-white-text">{title}</h2>
        <p className="text-light-text leading-relaxed">{description}</p>
        <ul className="space-y-2 pt-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <span className="text-light-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const EventIcon: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => (
    <div className="flex flex-col items-center">
        <div className="flex items-center justify-center h-20 w-20 bg-dark-bg rounded-full mb-4 text-primary transition-colors duration-300 hover:bg-primary hover:text-white-text">
            {icon}
        </div>
        <h3 className="font-semibold text-white-text">{name}</h3>
    </div>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>;
const MusicIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>;
const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>;
const GiftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>;
const MegaphoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>;

export default ServicesPage;