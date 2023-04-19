import { useState } from "react";

const B = () => {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex items-center">
      <button
        className="bg-white border-2 border-cyan-800 text-cyan-800  w-10 h-10 mx-3 rounded-xl"
        onClick={onClickMinus}
      >
        -
      </button>
      <div className="text-black-500">{count}</div>
      <button
        className="bg-white border-2 border-pink-800 text-pink-800  w-10 h-10 mx-3 rounded-xl
      "
        onClick={onClickPlus}
      >
        +
      </button>
    </div>
  );
};

export default B;
