import "./TodoList.css";

export default function TodoList({ todos, clickHandle }) {
    return todos.map((todo) => {
        return (
            <div className="single-todo" key={todo.id}>
                <h2>{todo.title}</h2>
                <span>At {todo.date}</span>
                <p>{todo.details}</p>
                <button className="close-btn" onClick={() => clickHandle(todo.id)}>
                    X
                </button>
            </div>
        );
    });
}
