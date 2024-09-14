import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext';
const AddingNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "default" })
  function OnChange(e) {
    setNote({...note , [e.target.name]: e.target.value})
  }
  function handleClick(e) {
    e.preventDefault();
   addNote(note);
   console.log(note);
   }
  return (
    <div className="container my-3">
      <h2>Add a Note:</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">title</label>
          <input type="text" className="form-control" id="title" name="title" onChange={OnChange}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" onChange={OnChange}></input>
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
      </form>
      <br />
    </div>
  )
}

export default AddingNote;
