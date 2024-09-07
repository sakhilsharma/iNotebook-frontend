import React, { useContext } from 'react';
//imported context api to use the states defined
import NoteContext from '../context/notes/noteContext'
import { useEffect } from 'react'
export default function About() {
    const a = useContext(NoteContext)
    useEffect(() => {
        a.update() //update value seperatly for a
    }, [])
    return (
        <div>
            This is About {a.state.name} and he is in class {a.state.class}
        </div>
    )
}