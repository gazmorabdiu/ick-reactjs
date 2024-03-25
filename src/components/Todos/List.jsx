import Todo from "./Todo";

const List = ({ todos, makeDone, removeTodo }) => {
  return (
    <div className="todo-list">
      {todos.map(({ id, title, checked, createdAt }) => (
        <Todo
          key={id}
          title={title}
          checked={checked}
          makeDone={() => makeDone(id)}
          removeTodo={() => removeTodo(id)}
          createdAt={createdAt}
        />
      ))}
    </div>
  );
};

export default List;
