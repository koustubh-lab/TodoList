import TodoCard from "./TodoCard";

export default function TodoList({ todos, handleDelete, handleEdit }) {
    return (
        <div className="TodoList">
            <ul>
                {todos.map((todo, todoIndex) => {
                    return (
                        <TodoCard
                            key={todoIndex}
                            todoIndex={todoIndex}
                            todo={todo}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
