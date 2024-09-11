import { useRef } from "react";
import "./TodoInput.css";
import { useEffect } from "react";

export default function TodoInput(props) {
    let inputRef = useRef(null);
    const { handleInputs, todoValue, setValue } = props

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className="TodoInput">
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter task"
                aria-valuetext="Enter task"
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    handleInputs(todoValue);
                    inputRef.current.value = ""
                }}
            >
                <i className="fa-solid fa-list-ul"></i>
            </button>
        </div>
    );
}
