import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
    const [todos, setTodos] = useState([]);
    const [todoValue, setValue] = useState("");

    const persistTodos = () => {
        localStorage.setItem("todos", JSON.stringify({ todos: todos }));
        console.log(`Todos updated to the localstorage: ${todos}`);
    };

    useEffect(() => {
        if (!localStorage) return;

        let localTodos = localStorage.getItem("todos");
        if (!localTodos) return;

        console.log(`LocalTodo: ${localTodos}`);

        localTodos = JSON.parse(localTodos).todos;
        setTodos(localTodos);
    }, []);

    useEffect(() => {
        console.log(`Todovalue: ${todoValue}`);
    }, [todoValue])

    useEffect(() => {
        console.log(`Todo list updated: ${todos}`);
        persistTodos();
    }, [todos]);

    const handleInputs = (todoValue) => {
        if (todoValue) {
            setTodos([...todos, todoValue]);
        }
    };

    const handleEdit = (todoIndex) => {
        let valueToBeEdited = todos[todoIndex];
        setValue(valueToBeEdited);
        console.log(`value to be edited: ${valueToBeEdited}`);
    };

    const handleDelete = (todoIndex) => {
        setTodos(
            todos.filter((value, index) => {
                return todoIndex != index;
            })
        );
    };

    return (
        <>
            <TodoInput
                handleInputs={handleInputs}
                todoValue={todoValue}
                setValue={setValue}
            />
            <TodoList
                todos={todos}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </>
    );
}