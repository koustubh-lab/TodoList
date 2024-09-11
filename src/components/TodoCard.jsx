import "./TodoCard.css";

export default function TodoCard({
    todo,
    todoIndex,
    handleDelete,
    handleEdit,
}) {
    return (
        <div className="TodoCard">
            <p>{todo}</p>
            <i
                className="fa-regular fa-pen-to-square"
                onClick={() => {
                    handleEdit(todoIndex);
                }}
                tabIndex={0}
            ></i>
            <i
                className="fa-solid fa-trash-can"
                onClick={() => {
                    handleDelete(todoIndex);
                }}
                tabIndex={0}
            ></i>
        </div>
    );
}
