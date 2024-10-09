import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext';
import Notes from './Notes.jsx';

export default function Home() {

    const context = useContext(NoteContext);
    const { addNote } = context;

    return (
        <>
            <Notes />
        </>

    )
}