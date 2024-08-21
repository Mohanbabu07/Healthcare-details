// App.js
import React from 'react';
import ViewProfile from './components/ViewProfile';

const App = () => {
  // Sample userId, you can replace this with a dynamic value or route parameter
  const userId = "1"; // Example user ID to fetch data

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl p-4">
        <ViewProfile userId={userId} />
      </div>
    </div>
  );
};

export default App;