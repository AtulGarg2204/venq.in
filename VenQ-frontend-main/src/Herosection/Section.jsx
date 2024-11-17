import React from 'react';

const Section = React.forwardRef(({ dataIndex, activeSection, title, clickable }, ref) => {
  return (
    <div
      ref={ref}
      data-index={dataIndex}
      className={`Multicurrency_Accounts p-[60px] rounded-3xl bg-zinc-100 h-[80vh] ${activeSection === dataIndex ? 'block' : 'hidden'}`}
    >
      <div className="flex justify-start gap-5 items-center">
        <div className="w-10 h-10 rounded-full bg-zinc-200"></div>
        <h1 className='text-[30px] font-medium'>{title}</h1>
      </div>
      <div className="w-full h-[300px] rounded-3xl bg-white mt-10"></div>
      <div className="w-full h-[100px] rounded-3xl bg-white mt-5"></div>
      <h1 className='mt-5 text-[20px] font-medium text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      {clickable && (
        <h1 className='mt-5 text-[20px] font-medium text-zinc-400 cursor-pointer'>
          Click to view more details
        </h1>
      )}
    </div>
  );
});

export default Section;
