import { useState } from "react";
import "./AddTodo.css";

export default function AddTodo({ modalHandle, addTodo }) {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const todo = {
            title: title,
            details: details,
            date: date,
            id: Math.floor(Math.random() * 10000),
        };
        addTodo(todo);
        console.log(todo.id);
        //reset form
        setTitle("");
        setDetails("");
        setDate("");
        modalHandle();
    };

    return (
        <>
            <h2 className="todo-title">Add New Todo</h2>
            <form className="add-todo-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" onChange={(e) => setTitle(e.currentTarget.value)} value={title} />
                <input type="text" placeholder="Description" onChange={(e) => setDetails(e.currentTarget.value)} value={details} />
                <input type="date" onChange={(e) => setDate(e.currentTarget.value)} value={date} />
                <button className="btn">Add</button>
            </form>
        </>
    );
}
