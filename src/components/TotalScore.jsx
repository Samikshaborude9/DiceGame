import React from 'react'

const TotalScore = ({ score }) => {
  return (
    <div className="max-w-[200px] text-center">
      <h1 className="text-[100px] leading-[100px]">{score}</h1>
      <p className="text-[24px] font-medium">Total Score</p>
    </div>
  );
};

export default TotalScore;
