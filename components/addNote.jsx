import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext';
import Notes from './Notes.jsx';

export default function AddNote() {
    const context = useContext(NoteContext);
    const addNote = context.addNote;
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    console.log(addNote)
    const handleClick = () => {

    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: [e.target.value] })
    }
    return (
        <>
            <div className="container my-3">
                <h2>Add a Note:</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">title</label>
                        <input type="text" className="form-control" id="title" name="title" onChange={onChange}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" class="form-label">Description</label>
                        <input type="text" className="form-control" id="desc" name="desc" onChange={onChange}></input>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
                </form>
                <br />
                <div>
                    <Notes />
                </div>


            </div>
        </>
    )
}


