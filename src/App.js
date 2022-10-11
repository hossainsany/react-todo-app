import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Modal from "./components/Modal";
import TodoList from "./components/TodoList";

function App() {
    const [showingTodos, setShowingTodos] = useState(true);
    const [showingModal, setShowingModal] = useState(false);
    const [todos, setTodos] = useState([
        { title: "Go Shopping", details: "Shop for peanut butter and toothpaste", date: "11/10/2022", id: 1 },
        { title: "Code a little", details: "Create a todo app in react", date: "11/10/2022", id: 2 },
        { title: "Do nothing", details: "Do absolutely nothing for rest of the day", date: "11/10/2022", id: 3 },
    ]);

    const clickHandle = (id) => {
        setTodos(todos.filter((todo) => id !== todo.id));
        console.log(id);
    };

    const todoHandle = () => (showingTodos ? setShowingTodos(false) : setShowingTodos(true));
    const modalHandle = () => (showingModal ? setShowingModal(false) : setShowingModal(true));

    return (
        <div className='App'>
            <h1>Todo App</h1>
            <div className='btn-container'>
                {!showingTodos && (
                    <button className='btn' onClick={todoHandle}>
                        Show Todos
                    </button>
                )}
                {showingTodos && (
                    <button className='btn' onClick={todoHandle}>
                        Hide Todos
                    </button>
                )}
                <button className='btn' onClick={modalHandle}>
                    Add New Todos
                </button>
            </div>
            {showingTodos && <TodoList todos={todos} clickHandle={clickHandle} />}
            {showingModal && (
                <Modal modalHandle={modalHandle}>
                    {" "}
                    <AddTodo />
                </Modal>
            )}
        </div>
    );
}

export default App;
