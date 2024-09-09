import React, { useContext } from 'react'; //to use context api
import NoteContext from '../context/notes/noteContext';
import Notes from './Notes.jsx';
export default function Home() {
    
    return (
        <>
            <div className="container my-3">
                <h2>Add a Note:</h2>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <br />
                <div>
                   <Notes />
                </div>


            </div>
        </>
    )
}