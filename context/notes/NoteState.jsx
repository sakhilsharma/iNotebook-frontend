import NoteContext from './noteContext'; //use noteContex
import { useState } from 'react';
const NoteState = (props) => {
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
    const addNote = (title, description, tag) => {
        const note = {
            "user": "66dfd4fc915d717084943c34",
            "title": "Life sucks",
            "description": "Life is really challenging  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas architecto debitis iure. Porro numquam natus sapiente reprehenderit delectus iusto sint ipsam ea aspernatur est quibusdam enim, accusamus ipsa quaerat",
            "tag": "life lesson",
            "_id": "66dedcf6911d717084943c3e",
            "date": "2024-09-09T11:33:10.884Z",
            "__v": 0
        };//api calls
        setNotes(notes.push(note));
    }

    //2.Delete Note
    const deleteNote = () => {

    }
    //3.Edit a Note
    const editNote = () => {

    }


    //exportes both so that can access notes and setnotes when needed to change
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>

    )
}
export default NoteState;