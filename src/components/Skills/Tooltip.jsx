import React from 'react';

const Tooltip = ({ message, children }) => {
  return (
    <div className="relative flex items-center group ">
      {children}
      <span className="w-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full scale-0 group-hover:scale-100 transition-all duration-150 bg-teal-800 text-white text-xxs rounded p-1 z-10 font-bold">
        {message}
      </span>
    </div>
  );
};

export default Tooltip;
