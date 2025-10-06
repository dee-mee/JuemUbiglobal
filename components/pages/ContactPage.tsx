import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="py-20 bg-light-bg animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white-text mb-4">Get In Touch</h1>
          <p className="text-lg text-primary max-w-3xl mx-auto">We'd love to hear about your next event. Let's make it sound incredible.</p>
        </div>

        <div id="contact-section" className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-dark-bg p-8 md:p-12 rounded-lg shadow-2xl">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full bg-light-bg p-8 rounded-md text-center">
                 <h2 className="text-2xl font-bold text-white-text mb-4">Thank You!</h2>
                 <p className="text-light-text">Your message has been sent. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="bg-light-bg border border-slate-600 rounded-md p-3 text-white-text focus:ring-2 focus:ring-primary focus:outline-none" />
                  <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} className="bg-light-bg border border-slate-600 rounded-md p-3 text-white-text focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} className="w-full bg-light-bg border border-slate-600 rounded-md p-3 text-white-text focus:ring-2 focus:ring-primary focus:outline-none" />
                <textarea name="message" placeholder="Your Message" rows={6} required value={formData.message} onChange={handleChange} className="w-full bg-light-bg border border-slate-600 rounded-md p-3 text-white-text focus:ring-2 focus:ring-primary focus:outline-none"></textarea>
                <button type="submit" className="bg-primary hover:bg-primary-dark text-white-text font-bold py-3 px-8 rounded-md transition duration-300 shadow-lg w-full md:w-auto">Send Message</button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <ContactInfoItem icon={<LocationIcon />} title="Our Office" lines={["123 Sound Street", "Nairobi, Kenya"]} />
            <ContactInfoItem icon={<EmailIcon />} title="Email Us" lines={["info@juemglobal.co.ke", "sales@juemglobal.co.ke"]} />
            <ContactInfoItem icon={<PhoneIcon />} title="Call Us" lines={["+254 700 123 456", "+254 700 987 654"]} />
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-heading text-white-text">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
                <FAQItem
                    question="What areas do you serve in Kenya?"
                    answer="We are based in Nairobi but serve clients across the entire country. Additional travel and logistics fees may apply for events outside of the greater Nairobi metropolitan area."
                />
                <FAQItem
                    question="Do your rental packages include a technician?"
                    answer="Yes, all our standard rental packages include delivery, setup, and a certified audio technician on-site for the duration of your event to ensure everything runs smoothly."
                />
                <FAQItem
                    question="How far in advance should I book for my event?"
                    answer="We recommend booking as early as possible, especially for large events or during peak seasons (June-August, December). A 3-6 month lead time is ideal, but we can often accommodate last-minute requests depending on availability."
                />
                 <FAQItem
                    question="Can I purchase equipment from you?"
                    answer="Absolutely. We are authorized dealers for many top pro-audio brands. Visit our Services page for more details or contact us with your specific needs, and we can provide a competitive quote."
                />
            </div>
        </div>

      </div>
    </div>
  );
};

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; lines: string[] }> = ({ icon, title, lines }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 text-primary mt-1">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-white-text">{title}</h3>
      {lines.map((line, index) => (
        <p key={index} className="text-light-text">{line}</p>
      ))}
    </div>
  </div>
);

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => (
    <div className="bg-dark-bg p-6 rounded-lg">
        <h3 className="font-semibold text-lg text-primary mb-2">{question}</h3>
        <p className="text-light-text leading-relaxed">{answer}</p>
    </div>
)

const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;

export default ContactPage;