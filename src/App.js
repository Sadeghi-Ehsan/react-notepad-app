import React from "react";
import "./App.scss";

function Note({notePad, index, removeNote}) {
  return (
    <div className="notePad-list m-4">
      <div className="col-sm-8">
        <div className="d-flex  justify-content-between p-2">
          <input className="form-control col-sm-10" type="text" defaultValue={notePad.title}/>
          <button type="button" className="  btn btn-delete" onClick={() => removeNote(index)}>delete</button>
        </div>
        <div className="form-group p-2">
          <textarea className="form-control" rows="4" cols="30" defaultValue={notePad.text}/>
        </div>
      </div>
    </div>

  );
}

function NoteForm({addNote}) {
  const [value, setValue] = React.useState("");

  const addNotePad = () => {
    if (!value) return;
    addNote(value);
    setValue("");
  };

  return (
    <div className="m-4 d-flex justify-content-between">
      <div className="col-sm-4">
        <input
          type="text"
          className="form-control"
          value={value}
          placeholder={'My Note Pad Title'}
          onChange={e => setValue(e.target.value)}/>
      </div>
      <div className="">
        <button type="button" className="btn btn-outline" onClick={() => addNotePad()}>View State</button>
        <button type="button" className="btn btn-save" onClick={() => addNotePad()}>Save</button>
        <button type="button" className="btn btn-delete" onClick={() => console.log('delete')}>Delete</button>
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
    const newNotes = [...notes, {text}];
    setNotes(newNotes);
  };

  const removeNote = index => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="app container">
      <div className="notePad-list p-2">
        <NoteForm addNote={addNote}/>
        <div className="m-4">
          <h2 className="my-notes">My Notes</h2>
          <div className="col-sm-8">
            <div className="d-flex  justify-content-between pt-2">
              <input className="form-control col-sm-10" type="text" placeholder="Enter note title..." />
            </div>
            <div className="form-group pt-2">
              <textarea className="form-control" rows="4" cols="30" placeholder="Enter note..."/>
            </div>
            <button type="button" className="btn btn-add mt-2" onClick={() => addNote('index')}>Add</button>
          </div>
        </div>
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