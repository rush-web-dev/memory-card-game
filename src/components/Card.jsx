import { useState } from "react";

function Card({ title, handleClick, fail }) {
  const [clicked, setClicked] = useState(false);
  function checkCorrect() {
    if (!clicked) {
      handleClick();
      setClicked(true);
    } else {
      setClicked(false);
      fail();
    }
  }

  return (
    <>
      <div className="card" onClick={checkCorrect}>
        {title}
      </div>
    </>
  );
}

export default Card;
