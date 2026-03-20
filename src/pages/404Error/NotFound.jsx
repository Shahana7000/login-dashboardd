import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";


import errorImage from '../../assets/404error.png';

const NotFound = () => {
  const navigate = useNavigate();

 
  return (
    <div className="min-h-screen w-full bg-white flex flex-col relative overflow-hidden">
      {/* Logo Section */}
      {/* <div className="absolute top-8 left-8">
        <img src={logo} alt="SPARKZ" className="h-10 sm:h-12" />
      </div> */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {/* User Provided 404 Illustration */}
        <div className="relative mb-8 max-w-[500px] w-full flex justify-center">
          <img 
            src={errorImage} 
            alt="404 Error"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="text-center max-w-lg mt-4">
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            The Page You Are Trying To Access Has Restricted Access. <br/> Please Refresh or go back to dashboard.
          </p>
          
          <Button 
            onClick={() => navigate('/dashboard')}
            className="bg-[#157395] hover:bg-[#126280] text-white px-10 py-6 rounded-lg text-lg font-semibold shadow-lg shadow-[#157395]/20 transition-all hover:scale-105 active:scale-95"
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
