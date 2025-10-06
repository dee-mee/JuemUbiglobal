import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import GalleryPage from './components/pages/GalleryPage';
import ContactPage from './components/pages/ContactPage';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const targetScrollIdRef = useRef<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate loading for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.title = `Juem Uniglobal | ${currentPage}`;
    }
  }, [currentPage, isLoading]);
  
  useLayoutEffect(() => {
    if (isLoading) return;

    if (targetScrollIdRef.current) {
      const element = document.getElementById(targetScrollIdRef.current);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      targetScrollIdRef.current = null; // Reset after use
    } else {
      window.scrollTo(0, 0); // Scroll to top on normal page changes
    }
  }, [currentPage, isLoading]);

  const handleSetCurrentPage = (page: Page, options?: { scrollToId?: string }) => {
    if (page === currentPage && options?.scrollToId) {
      document.getElementById(options.scrollToId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      targetScrollIdRef.current = options?.scrollToId || null;
      setCurrentPage(page);
    }
  };


  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage setCurrentPage={handleSetCurrentPage} />;
      case Page.About:
        return <AboutPage />;
      case Page.Services:
        return <ServicesPage />;
      case Page.Gallery:
        return <GalleryPage />;
      case Page.Contact:
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={handleSetCurrentPage} />;
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <Navbar currentPage={currentPage} setCurrentPage={handleSetCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={handleSetCurrentPage} />
    </div>
  );
};

export default App;