import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-dark-bg flex items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-t-primary border-slate-700 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
