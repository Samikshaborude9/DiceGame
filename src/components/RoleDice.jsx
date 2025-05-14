import React from 'react'

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="cursor-pointer" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
      </div>
      <p className="text-2xl mt-2">Click on Dice to roll</p>
    </div>
  );
};

export default RoleDice;
