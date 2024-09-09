//contain all notes systematically 
import React, { useContext } from 'react'; //to use context api
import NoteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem.jsx';
export default function Notes(){
    const context = useContext(NoteContext);
    const { notes, setNotes } = context; //destructuring
    return(
        <div className="row my-3">
            <h2>Notes here:</h2>
            {
                notes.map((note)=>{
                    return <Noteitem note ={note}/>;
                })
            }
        </div>
    )
}