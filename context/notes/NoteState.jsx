import NoteContext from './noteContext'; //use noteContex
import { useState } from 'react';
const NoteState = (props) => {
    const host = "http://localhost:3000";
    const notesInitial = [
        {
            "_id": "66ded57a911d717084943c3a",
            "user": "66ded4fc911d717084943c34",
            "title": "Success",
            "description": "Success requires hardwork",
            "tag": "life lesson",
            "date": "2024-09-09T11:01:14.930Z",
            "__v": 0
          },
        
    ]

    const [notes, setNotes] = useState(notesInitial);
   
    //1.Get all notes
    const getNotes = async () => {
        //API call
       const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            header: {
                'Content-Type': 'application.json',
                'Auth-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkZWQ0ZmM5MTFkNzE3MDg0OTQzYzM0In0sImlhdCI6MTcyNTg3OTYyMn0.2Sg608f34me0MFcEgd6PPmH9yCaBFQwsWpaezvKkfxc',
            //AUTH-tokenhard coded for a time being
            },
            
        });
       const json = await response.json();
        setNotes(json);
    }

    //CRUD for notes
    //1. ADD a note
    const addNote = async (note) => {
        console.log("adding a new note");
       
        //API call
       const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            header: {
                'Content-Type': 'application.json',
                'Auth-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkZWQ0ZmM5MTFkNzE3MDg0OTQzYzM0In0sImlhdCI6MTcyNTg3OTYyMn0.2Sg608f34me0MFcEgd6PPmH9yCaBFQwsWpaezvKkfxc',
            //AUTH-tokenhard coded for a time being
            },
            body: JSON.stringify({title , description , tag})
        });
       
        setNotes(notes.concat(note)); //makes a copy in notes state
    }

    //2.Delete Note
    const deleteNote = (id) => {
        console.log("Delete the note with id",id);
       const newNote = notes.filter((note)=>{
          return note._id !== id;
       })
       setNotes(newNote);

    }
    //3.Edit a Note
    const editNote = async (id, title, description, tag) => {
        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            header: {
                'Content-Type': 'application.json',
                'Auth-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkZWQ0ZmM5MTFkNzE3MDg0OTQzYzM0In0sImlhdCI6MTcyNTg3OTYyMn0.2Sg608f34me0MFcEgd6PPmH9yCaBFQwsWpaezvKkfxc',
            },
            body: JSON.stringify({title,description , tag})
        });
        const json = response.json();

        //logic to edit the data
        for (let idx = 0; idx < notes.length; idx++) {
            const element = notes[idx];
            if (element._id === id) {
                element.title = title;
                element.description = description;

            }
        }

    }

    //exportes both so that can access notes and setnotes when needed to change
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote ,getNotes}}>
            {props.children}
        </NoteContext.Provider>

    )
}
export default NoteState;