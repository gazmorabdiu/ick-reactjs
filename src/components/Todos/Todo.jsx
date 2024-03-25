const Todo = ({ checked, title, makeDone, removeTodo }) => {
  const itemNewStyle = checked ? {} : { backgroundColor: "#f5f8fb" };
  const titleNewStyle = checked ? { textDecoration: "line-through" } : {};
  return (
    <div className="todo-item" style={itemNewStyle}>
      <div className="item-checker" onClick={makeDone}>
        {checked ? "✅" : "☐"}
      </div>
      <div className="item-title" style={titleNewStyle}>
        {title}
      </div>
      <div className="item-remove" onClick={removeTodo}>
        🗑
      </div>
    </div>
  );
};

export default Todo;
