import { useState } from "react";
import axios from "axios";

const D = () => {
  const [msg, setMsg] = useState();
  const onClickButton = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.get("https://green-bush-5824.fly.dev");

      console.log(response);
      setMsg(response.data.msg);
    } catch (error) {
      console.error(error);
      alert("에러");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button onClick={onClickButton}>요청</button>
      {msg && <div className="mt-16 text-2xl font-bold">{msg}</div>}
    </div>
  );
};

export default D;
