import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOut() {
    setMouseOver(false);
  }
  function handleMouseOver() {
    setMouseOver(true);
    console.log("Someone was here");
  }

  function myfunction() {
    console.log("CLICKED");
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          style={{ backgroundColor: "#e9edc9" }}
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          style={{ backgroundColor: "#e9edc9" }}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{ backgroundColor: isMouseOver ? "#e9c46a" : "#f4a261" }}
          onClick={submitNote}
        >
          <img
            src="https://cdn.icon-icons.com/icons2/1393/PNG/512/-pen_96740.png"
            height="20px"
            width="20px"
            alt="my image"
            onClick={myfunction}
          />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
