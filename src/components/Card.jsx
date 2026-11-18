function Card({ id, title, image, handleClick, fail, isClicked }) {
  function checkCorrect() {
    if (!isClicked) {
      handleClick(id);
    } else {
      fail();
    }
  }

  return (
    <>
      <div className={`card`} onClick={checkCorrect}>
        <img src={image} alt={title} />
      </div>
    </>
  );
}

export default Card;
