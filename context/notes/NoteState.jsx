import NoteContext from './noteContext'; //use noteContex
import {useState} from 'react';
const NoteState = (props) => {
   const notesInitial= [
        {
          "_id": "66ded57a911d717084943c3a",
          "user": "66ded4fc911d717084943c34",
          "title": "Success",
          "description": "Success requires hardwork",
          "tag": "life lesson",
          "date": "2024-09-09T11:01:14.930Z",
          "__v": 0
        },
        {
            "user": "66ded4fc911d717084943c34",
            "title": "Life sucks",
            "description": "Life is really challenging",
            "tag": "life lesson",
            "_id": "66dedcf6911d717084943c3e",
            "date": "2024-09-09T11:33:10.884Z",
            "__v": 0
          }
      ]
   const [notes , setNotes] = useState(notesInitial);
   //exportes both so that can access notes and setnotes when needed to change
    return (
        <NoteContext.Provider value={{notes,setNotes} }>
            {props.children}
        </NoteContext.Provider>

    )
}
export default NoteState;