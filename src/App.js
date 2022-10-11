import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Modal from "./components/Modal";
import TodoList from "./components/TodoList";

function App() {
    const [showingTodos, setShowingTodos] = useState(true);
    const [showingModal, setShowingModal] = useState(false);
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((prevTodo) => {
            return [...prevTodo, todo];
        });
    };

    const clickHandle = (id) => {
        setTodos(todos.filter((todo) => id !== todo.id));
        console.log(id);
    };

    const todoHandle = () => (showingTodos ? setShowingTodos(false) : setShowingTodos(true));
    const modalHandle = () => (showingModal ? setShowingModal(false) : setShowingModal(true));

    return (
        <div className="App">
            <h1>Todo App</h1>
            <div className="btn-container">
                {!showingTodos && (
                    <button className="btn" onClick={todoHandle}>
                        Show Todos
                    </button>
                )}
                {showingTodos && (
                    <button className="btn" onClick={todoHandle}>
                        Hide Todos
                    </button>
                )}
                <button className="btn" onClick={modalHandle}>
                    Add New Todos
                </button>
            </div>
            {showingTodos && <TodoList todos={todos} clickHandle={clickHandle} />}
            {showingModal && (
                <Modal modalHandle={modalHandle}>
                    {" "}
                    <AddTodo modalHandle={modalHandle} addTodo={addTodo} />
                </Modal>
            )}
        </div>
    );
}

export default App;
