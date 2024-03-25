import Todo from "./Todo";

const List = ({ todos, makeDone, removeTodo }) => {
  return (
    <div className="todo-list">
      {todos.map(({ id, title, checked }) => (
        <Todo
          key={id}
          title={title}
          checked={checked}
          makeDone={() => makeDone(id)}
          removeTodo={() => removeTodo(id)}
        />
      ))}
    </div>
  );
};

export default List;
