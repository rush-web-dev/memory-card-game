function Card({ id, title, handleClick, fail, isClicked }) {
  function checkCorrect() {
    if (!isClicked) {
      handleClick(id);
    } else {
      fail();
    }
  }

  return (
    <>
      <div
        className={`card ${isClicked ? "clicked-card" : ""}`}
        onClick={checkCorrect}
      >
        {title}
      </div>
    </>
  );
}

export default Card;
