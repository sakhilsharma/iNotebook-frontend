import React, { useContext } from 'react'; //to use context api
import NoteContext from '../context/notes/noteContext';
import AddNote from './addNote';

export default function Home() {
    const context = useContext(NoteContext);
    return (
        <>
           <AddNote/>
        </>
    )
}