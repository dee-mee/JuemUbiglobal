import React from 'react';
import { Page } from '../../types';

interface HomePageProps {
  setCurrentPage: (page: Page, options?: { scrollToId?: string }) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
        <div className="absolute inset-0 bg-dark-bg/70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white-text px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-4 drop-shadow-lg">Experience Sound, Redefined.</h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8 text-light-text drop-shadow-md">
            Kenya's leading provider of professional sound systems for sale and hire. We power events that resonate.
          </p>
          <button 
            onClick={() => setCurrentPage(Page.Contact, { scrollToId: 'contact-section' })}
            className="bg-primary hover:bg-primary-dark text-white-text font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white-text mb-4">What We Do</h2>
          <p className="max-w-2xl mx-auto text-light-text mb-12">From intimate gatherings to large-scale festivals, we provide crystal-clear audio solutions tailored to your needs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard icon={<IconSpeaker />} title="Equipment Rentals" description="State-of-the-art sound systems for concerts, weddings, corporate events, and more." />
            <ServiceCard icon={<IconShoppingCart />} title="Pro Audio Sales" description="We are authorized dealers for top audio brands. Get expert advice and competitive pricing." />
            <ServiceCard icon={<IconWrench />} title="Installation & Support" description="Professional installation and on-site technical support to ensure your event is flawless." />
          </div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white-text mb-4">Our Premium Equipment</h2>
          <p className="max-w-2xl mx-auto text-light-text mb-12">We use industry-leading brands to deliver uncompromising sound quality.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              <BrandLogo name="JBL Professional" />
              <BrandLogo name="Sennheiser" />
              <BrandLogo name="Shure" />
              <BrandLogo name="Pioneer DJ" />
              <BrandLogo name="Yamaha" />
              <BrandLogo name="Behringer" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white-text mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard quote="The sound quality was impeccable. Juem Uniglobal's team was professional and made our festival a huge success!" author="Event Organizer, Nairobi Music Fest" />
            <TestimonialCard quote="Truly the best in the business. They handled our corporate conference audio flawlessly. Highly recommended." author="CEO, TechCorp Kenya" />
            <TestimonialCard quote="Our wedding day sounded like a dream, all thanks to Juem. The music was crisp and the speeches were clear." author="Jane & John Doe" />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
              <h2 className="text-3xl font-bold font-heading text-white-text mb-4">Ready to Amplify Your Event?</h2>
              <p className="text-lg text-slate-100 max-w-2xl mx-auto mb-8">Let's discuss how we can make your next event sound extraordinary. Contact us today for a consultation.</p>
              <button
                  onClick={() => setCurrentPage(Page.Contact, { scrollToId: 'contact-section' })}
                  className="bg-white-text text-primary font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
              >
                  Contact Us Now
              </button>
          </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-dark-bg p-8 rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300 transform hover:-translate-y-2">
    <div className="flex items-center justify-center h-16 w-16 bg-light-bg rounded-full mx-auto mb-6 text-primary">
      {icon}
    </div>
    <h3 className="text-xl font-bold font-heading text-white-text mb-3">{title}</h3>
    <p className="text-light-text">{description}</p>
  </div>
);

const BrandLogo: React.FC<{ name: string }> = ({ name }) => (
    <div className="text-2xl font-semibold text-slate-500 hover:text-white-text transition-colors duration-300 cursor-pointer grayscale hover:grayscale-0">
        {name}
    </div>
);

const TestimonialCard: React.FC<{ quote: string; author: string }> = ({ quote, author }) => (
  <div className="bg-dark-bg p-6 rounded-lg border-l-4 border-primary">
    <p className="text-light-text italic mb-4">"{quote}"</p>
    <p className="font-semibold text-white-text text-right">- {author}</p>
  </div>
);

const IconSpeaker: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line></svg>;
const IconShoppingCart: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>;
const IconWrench: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>;

export default HomePage;