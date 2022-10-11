import "./AddTodo.css";

export default function AddTodo() {
    return (
        <>
            <h2 className="todo-title">Add New Todo</h2>
            <form className="add-todo-form">
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Description" />
                <input type="date" />
                <button className="btn">Add</button>
            </form>
        </>
    );
}
