import React, {useState, useEffect, Fragment} from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./App.scss";
import {fetchGists, signIn} from './actions/AuthActionCreators';
import {GistsChart} from "./components/GistsChart";
import Utils from "./sharedServices/utils";

function Note({note, index, removeNote}) {
  return (
    <div className="note-list m-4">
      <div className="col-sm-8">
        <div className="d-flex  justify-content-between p-2">
          <input className="form-control col-sm-10" type="text" defaultValue={note.title}/>
          <button type="button" className="  btn btn-delete" onClick={() => removeNote(index)}>delete</button>
        </div>
        <div className="form-group p-2">
          <textarea className="form-control" rows="4" cols="30" defaultValue={note.text}/>
        </div>
      </div>
    </div>

  );
}

function NotePadForm({saveNotePad,deleteNotePad,chartDisplay,notepads}) {
  const [value, setValue] = useState("");

  const addNotePad = () => {
    if (!value){
      console.log('%c title has not entered!','background: #222;color:#bada55')
      return;
    }
    saveNotePad(value);
    setValue("");
  };
  const delNotePad = () => {
    if (!value){
      console.log('%c title has not selected!','background: #222;color:#bada55')
      return;
    }
    deleteNotePad(value)
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
          list="notepadList"
          onChange={e => setValue(e.target.value)}/>
        <datalist id="notepadList">
          {notepads.map((item,index)=>(
            <option key={index} value={item.title}/>
          ))}

        </datalist>
      </div>


      <div className="">
        <button type="button" className="btn btn-outline" onClick={() => chartDisplay()}>View State</button>
        <button type="button" className="btn btn-save" onClick={() => addNotePad()}>Save</button>
        <button type="button" className="btn btn-delete" onClick={() => delNotePad()}>Delete</button>
      </div>
    </div>
  );
}

function NewEmptyNote({addNote}) {
  return (
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
  );
}

function App() {
  const [page, setPage] = useState(1);
  const [displayChart, setDisplayChart] = useState(false);
  const [notes, setNotes] = useState([
    {
      title: "Title Of first note",
      text: "first note description",
    },
    {
      title: "Title Of second note",
      text: "second note description",
    },

  ]);
  const [notepads, setNotepads] = useState([
    {
      title: "My Notepad Application",
    },
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    let model = {};
    model.page = page;
    model.per_page = 100;
    dispatch(fetchGists(Utils.updateQueryString(model)))
  }, [page]);

  const { gists,gistsLoading } = useSelector(state => ({
    gists:state.authReducer.gists ,
    gistsLoading: state.authReducer.gistLoading
  }));

  const addNote = text => {
    const newNotes = [...notes, {text}];
    setNotes(newNotes);
  };

  const saveNotePad = title => {
    notepads.find(item => {
      if(item.title === title){
        console.log('%c Entered Title does exist! select Another One','background: #222;color:#bada55')
        return;
      }
    })
    const newNotepad = [...notepads, {title}];
    setNotepads(newNotepad);
  };

  const deleteNotePad = title => {
    let newList=[];
    if(notepads.length>1){
      newList = notepads.filter(item => item.title !== title)
      setNotepads(newList);
    }else{
      console.log('%c At least One notePad has to be remain!','background: #222;color:#bada55')
    }
  };


  const removeNote = index => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const loadMore = () =>{
    setPage(page + 1)
  }

  const chartDisplay=()=>{
    setDisplayChart(!displayChart)
  }

  return (
    <div className="container">
      <h1 className="main-title p-2 m-2">NotePad Application</h1>
      <div className="note-list p-2">
        <NotePadForm notepads={notepads} saveNotePad={saveNotePad} deleteNotePad={deleteNotePad} chartDisplay={chartDisplay}/>
        <NewEmptyNote addNote={addNote} />
        {notes.map((note, index) => (
          <Note
            key={index}
            index={index}
            note={note}
            removeNote={removeNote}
          />
        ))}
        {displayChart && <Fragment>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-outline" onClick={() => chartDisplay()}>Close State</button>
            </div>
           <GistsChart gists={gists} loading={gistsLoading} loadMore={loadMore}/>
          </Fragment>}
      </div>
    </div>
  );
}
export default App;