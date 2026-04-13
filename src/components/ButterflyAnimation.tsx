import React from 'react';

const ButterflyAnimation = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="200"
      height="200"
    >
      <g>
        <path
          d="M50,100 Q25,50 0,100 Q25,150 50,100 Q0,0 50,0 Q100,0 50,100"
          fill="pink"
          className="butterfly-wing"
        />
        <path
          d="M150,100 Q175,50 200,100 Q175,150 150,100 Q200,0 150,0 Q100,0 150,100"
          fill="lightblue"
          className="butterfly-wing"
        />
      </g>
      <circle cx="100" cy="100" r="10" fill="black" className="butterfly-body" />
      <style>{`
        .butterfly-wing {
          animation: flapping 1s infinite; 
        }

        .butterfly-body {
          animation: bouncing 0.5s infinite; 
        }

        @keyframes flapping {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(45deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes bouncing {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </svg>
  );
};

export default ButterflyAnimation;