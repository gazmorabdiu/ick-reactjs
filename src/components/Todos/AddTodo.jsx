const AddTodo = ({ onKeyDown, onChange, value }) => {
  return (
    <input
      type="text"
      name="addTodo"
      placeholder="Add New Todo"
      className="add-todo"
      value={value}
      onChange={(e) => onChange(e)}
      onKeyDown={(e) => onKeyDown(e)}
    />
  );
};

export { AddTodo };
