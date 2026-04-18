import React from "react";
import Todoitem from "./todoitem";

function Todolist({list, deletetodo}){
    return (
        <ul className="todo-list">
            {list.map((todo, index) => (
                <Todoitem key={index} todo={todo} index={index} deletetodo={deletetodo} />
            ))}
        </ul>
    )
}
export default Todolist 