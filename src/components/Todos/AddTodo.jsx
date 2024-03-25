const AddTodo = ({ onKeyDown, onChange, value }) => {
  return (
    <input
      type="text"
      name="addTodo"
      placeholder="Add New Todo"
      className="add-todo"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export { AddTodo };
