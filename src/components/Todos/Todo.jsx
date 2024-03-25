const Todo = ({ checked, title, makeDone, removeTodo, createdAt }) => {
  const itemNewStyle = checked ? {} : { backgroundColor: "#f5f8fb" };
  const titleNewStyle = checked ? { textDecoration: "line-through" } : {};
  return (
    <div className="todo-item" style={itemNewStyle}>
      <div className="item-checker" onClick={makeDone}>
        {checked ? "✅" : "☐"}
      </div>
      <div className="item-content">
        <span style={titleNewStyle}>{title}</span>
        <span>{createdAt}</span>
      </div>
      <div className="item-remove" onClick={removeTodo}>
        🗑
      </div>
    </div>
  );
};

export default Todo;
