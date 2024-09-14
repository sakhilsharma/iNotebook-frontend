import NoteContext from './noteContext'; //use noteContex
import { useState } from 'react';
const NoteState = (props) => {
    const host = "http://localhost:4000"
    const notesInitial = [
        {
            "_id": "66dhd57a911d717b84943c3a",
            "user": "66ded4fc911d717084943c34",
            "title": "Success",
            "description": "Success requires hardwork",
            "tag": "life lesson",
            "date": "2024-09-09T11:01:14.930Z",
            "__v": 0
        },
        {
            "user": "66dgd4fc911dc17084943c34",
            "title": "Life sucks",
            "description": "Life is really challenging  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas architecto debitis iure. Porro numquam natus sapiente reprehenderit delectus iusto sint ipsam ea aspernatur est quibusdam enim, accusamus ipsa quaerat",
            "tag": "life lesson",
            "_id": "66dedcf6911d717084943c3e",
            "date": "2024-09-09T11:33:10.884Z",
            "__v": 0
        },
        {
            "user": "66dcd4fc911g717084943c34",
            "title": "Life sucks",
            "description": "Life is really challenging  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas architecto debitis iure. Porro numquam natus sapiente reprehenderit delectus iusto sint ipsam ea aspernatur est quibusdam enim, accusamus ipsa quaerat",
            "tag": "life lesson",
            "_id": "66dedcf6911d717084943c3e",
            "date": "2024-09-09T11:33:10.884Z",
            "__v": 0
        },
        {
            "user": "66ded4fc961d717084943c34",
            "title": "Life sucks",
            "description": "Life is really challenging  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas architecto debitis iure. Porro numquam natus sapiente reprehenderit delectus iusto sint ipsam ea aspernatur est quibusdam enim, accusamus ipsa quaerat",
            "tag": "life lesson",
            "_id": "66dedcf6911d717084943c3e",
            "date": "2024-09-09T11:33:10.884Z",
            "__v": 0
        },
        {
            "user": "66dfd4fc915d717084943c34",
            "title": "Life sucks",
            "description": "Life is really challenging  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas architecto debitis iure. Porro numquam natus sapiente reprehenderit delectus iusto sint ipsam ea aspernatur est quibusdam enim, accusamus ipsa quaerat",
            "tag": "life lesson",
            "_id": "66dedcf6911d717084943c3e",
            "date": "2024-09-09T11:33:10.884Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial);

    //CRUD for notes
    //1. ADD a note
    const addNote = async(note) => {
        console.log("adding a new note");
        const note1 = {
            "user": "61dfd4fc915d717084943c34",
            "title": "Life sucks",
            "description": "Life is really challenging  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas architecto debitis iure. Porro numquam natus sapiente reprehenderit delectus iusto sint ipsam ea aspernatur est quibusdam enim, accusamus ipsa quaerat",
            "tag": "life lesson",
            "_id": "66dedcf6911d717084943c3e",
            "date": "2024-09-09T11:33:10.884Z",
            "__v": 0
        };//api calls
       
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            header: {
                'Content-Type': 'application.json',
                'Auth-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkNTlkZDZmNjFiMDZhNjQyY2MxOTIxIn0sImlhdCI6MTcyNTI3NTYzNn0.o-cB81CCIOo992CJJv6SprtldtXrMNhpXYZ_nehYt98',
            },
            body: JSON.stringify({title , description , tag})
        });
       
        setNotes(notes.concat(note)); //makes a copy in notes statw
    }

    //2.Delete Note
    const deleteNote = (id) => {
        console.log("deleting note from id:", id);
        const newNotes = notes.filter((note) => {
            return note._id !== id;
        })
        setNotes(newNotes);

    }
    //3.Edit a Note
    const editNote = async (id, title, description, tag) => {
        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            header: {
                'Content-Type': 'application.json',
                'Auth-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkNTlkZDZmNjFiMDZhNjQyY2MxOTIxIn0sImlhdCI6MTcyNTI3NTYzNn0.o-cB81CCIOo992CJJv6SprtldtXrMNhpXYZ_nehYt98',
            },
            body: JSON.stringify({title,description , tag})
        });
        const json = response.json();

        //logic to traverse into notes to change specific index
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
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>

    )
}
export default NoteState;