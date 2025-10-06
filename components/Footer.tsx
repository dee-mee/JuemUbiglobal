import React from 'react';
import { Page } from '../types';

interface FooterProps {
    setCurrentPage: (page: Page, options?: { scrollToId?: string }) => void;
}

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-light-text hover:text-primary transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC<FooterProps> = ({setCurrentPage}) => {
  return (
    <footer className="bg-light-bg border-t border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold font-heading text-white-text mb-2">JUEM UNIGLOBAL</h3>
            <p className="text-sm text-slate-400">Your premier partner for professional sound systems in Kenya. Sales, rentals, and unforgettable experiences.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white-text mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {Object.values(Page).map(page => (
                <li key={page}>
                  <button onClick={() => {
                    if (page === Page.Contact) {
                      setCurrentPage(page, { scrollToId: 'contact-section' })
                    } else {
                      setCurrentPage(page)
                    }
                  }} className="text-sm text-slate-400 hover:text-primary transition-colors duration-300">{page}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white-text mb-4 uppercase tracking-wider">Follow Us</h4>
            <div className="flex space-x-6">
              <SocialIcon href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </SocialIcon>
              <SocialIcon href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </SocialIcon>
              <SocialIcon href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 3 5.2-1.4 1.1-3.5 2.3-5.5 3.1-.6 1.2-1.8 3-3.5 4.3-1.2 1-2.5 1.7-4 2-.5-1.7-.3-3.6.8-5.2-1.2-.3-2.5-.8-3.8-1.7-1.1-1.1-2.1-2.6-2.8-4.3-.4-1-.6-2.3-.5-3.6 1.4.5 2.9.8 4.4.8 1.4 0 2.7-.3 4-.8.3-.2.7-.3 1-.5.3-.2.5-.4.7-.6.2-.2.5-.3.7-.5.2-.2.5-.3.7-.5.7-1 1.2-2.3 1.5-3.6.3-1.2.4-2.5.3-3.8z"></path></svg>
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Juem Uniglobal Tech Electronics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;