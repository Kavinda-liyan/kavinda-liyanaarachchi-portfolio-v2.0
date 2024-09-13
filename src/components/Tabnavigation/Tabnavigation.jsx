import React from 'react';
import TabLinks from './TabLinks';

const Tabnavigation = () => {
  return (
    <div className='h-40'>
      <div className='mt-10'>
        <div className='m-10'>
          <ul className='m-10 p-10 flex text-center justify-center gap-0 font-ubuntu text-slate-100 text-3xl'>
            {/* Passing the "to" prop for routing */}
            <TabLinks subject={"Experience"} to="/experience" />
            <TabLinks subject={"Education"} to="/education" />
            <TabLinks subject={"Soft Skills"} to="/soft-skills" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tabnavigation;
