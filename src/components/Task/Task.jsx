const Task = ({
  difficulty,
  title,
  description,
  completed,
  removeMe,
  completeMe,
}) => {
  const compeleteStyle = completed
    ? {
        backgroundColor: "green",
        pointer: "none",
        pointerEvents: "none",
        color: "white",
      }
    : { backgroundColor: "red" };

  const cardStyle = completed
    ? {
        boxShadow: "1px 2px 8px green",
      }
    : {
        boxShadow: "1px 2px 8px red",
      };

  const difficultyStyle = {
    backgroundColor: "",
    color: "black",
  };
  if (difficulty === "high") {
    difficultyStyle.backgroundColor = "#D90313";
    difficultyStyle.color = "white";
  } else if (difficulty === "medium") {
    difficultyStyle.backgroundColor = "#FF5E25";
  } else if (difficulty === "low") {
    difficultyStyle.backgroundColor = "#FF8225";
  } else if (difficulty === "easy") {
    difficultyStyle.backgroundColor = "#FFBE73";
  }
  return (
    <div className="card" style={cardStyle}>
      <div className="header" style={difficultyStyle}>
        {difficulty}
      </div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <div className="footer">
        <button
          onClick={completeMe}
          style={compeleteStyle}
          className="complete"
        >
          {completed ? "COMPLETED" : "NOT COMPLETED"}
        </button>
        <button onClick={removeMe} className="remove">
          Remove Task
        </button>
      </div>
    </div>
  );
};

export default Task;
