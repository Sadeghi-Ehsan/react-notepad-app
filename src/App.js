import React from "react";
import "./App.css";

function Note({ notePad, index, removeNote }) {
    return (
        <div className="" >
            <form >
                <input type="text" defaultValue={notePad.title} />
                <textarea  rows="4" cols="30" defaultValue={notePad.text}/>
                <button onClick={() => removeNote(index)}>delete</button>
            </form>
        </div>
    );
}

function NoteForm({ addNote }) {
    const [value, setValue] = React.useState("");

    const addNotePad = () => {
        if (!value) return;
        addNote(value);
        setValue("");
    };

    return (
        <div>
            <input
                type="text"
                className="input"
                value={value}
                placeholder={'My Note Pad Title'}
                onChange={e => setValue(e.target.value)}
            />
            <div>
                <button onClick={() => addNotePad()}>Save</button>
                <button onClick={() => console.log('delete')}>Delete</button>
            </div>
        </div>

    );
}

function App() {
    const [notes, setNotes] = React.useState([
        {
            title: "Title Of first note",
            text: "first note description",
        },
        {
            title: "Title Of second note",
            text: "second note description",
        },

    ]);

    const addNote = text => {
        const newNotes = [...notes, { text }];
        setNotes(newNotes);
    };

    const removeNote = index => {
        const newNotes = [...notes];
        newNotes.splice(index, 1);
        setNotes(newNotes);
    };

    return (
        <div className="app">
            <div className="notePad-list">
                <NoteForm addNote={addNote} />
                {notes.map((notePad, index) => (
                    <Note
                        key={index}
                        index={index}
                        notePad={notePad}
                        removeNote={removeNote}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;