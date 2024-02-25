import React from 'react';

const Card = (props) => {
  return (
    <>
    <div className="w-64 h-30 rounded shadow-lg m-4 
       hover:bg-teal-400 hover:text-white text-gray-500">
      <img className="w-full" src={props.doctor_image} alt={props.doctor_name} />
      <div className="px-2">
        <div className="t font-bold text-xl ">{props.doctor_name}</div>
        <div className="px-3 py-1 text-sm font-semibold  ">{props.doctor_profession}</div>
       </div>
    </div>

    </>
  );
};

export default Card;
