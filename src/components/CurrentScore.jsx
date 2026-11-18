function CurrentScore({ score }) {
  return (
    <div className="score-card">
      <h2 className="score-label">Current Score</h2>
      <p className="score-value">{score}</p>
    </div>
  );
}

export default CurrentScore;
