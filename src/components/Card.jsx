function Card({ id, title, image, handleClick, fail, isClicked }) {
  function checkCorrect() {
    if (!isClicked) {
      handleClick(id);
    } else {
      fail();
    }
  }

  return (
    <div className="card" onClick={checkCorrect}>
      <img className="card-image" src={image} alt={title} />
      <p className="card-title">{title}</p>
    </div>
  );
}

export default Card;
