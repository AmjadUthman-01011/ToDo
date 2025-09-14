import React, { useState } from 'react';

function List({ id, text, completed, toggleTask,  deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const openInput = () => {
    setIsEditing(true);
    setEditText(text);
  };

  const saveEdit = () => {
    if (editText.trim() === "") return;
    editTask(id, editText); 
    setIsEditing(false);
    console.log("Saving edit for task id:", id, "with new text:", editText);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditText(text); 
  };

  return (
    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <input type="checkbox" checked={completed} onChange={() => toggleTask(id)} />

      {isEditing ? (
        <>
          <input
          className='edit-input'
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && saveEdit(id, editText)}
            autoFocus
          />
          <button onClick={() => saveEdit(id, editText)}>💾</button>
          <button onClick={cancelEdit}>❌</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: completed ? "line-through" : "none" }}>
            {text}
          </span>
          <div className="list-btns">
            <button className="list-delete-btn" onClick={() => deleteTask(id)}>Delete</button>
            <button className="list-edit-btn" onClick={openInput}>Edit</button>
          </div>
        </>
      )}
    </li>
  );
}

export default List;
