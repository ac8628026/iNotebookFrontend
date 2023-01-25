import React from 'react'
import { useContext, useState, useEffect, useRef } from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote';
import Noteitem from './Noteitem';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
    let navigate = useNavigate();

    const context = useContext(noteContext);

    const { notes, getNote,editNote } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNote();
        }
        else {
            navigate('/login');
        }

    }, [])

    const [note, setNote] = useState({title:"", description:"",tag:""})

    const onChange=(e)=>{

        setNote({...note,[e.target.name]:e.target.value})
    }
    
    const handleClick=(e)=>{
        
        console.log(note)
        refClose.current.click();
        editNote(note._id,note.title,note.description,note.tag);
        window.location.reload();
       
    }


    const updateNote = (currentNote) => {
         ref.current.click();
         setNote(currentNote);
    }
    const ref = useRef(null);
    const refClose=useRef(null);
    return (
        <>
            <AddNote />


           

            {/* modal */}

            {/* <!-- Button trigger modal --> */}
            <button type="button" style={{display:"none"}} ref={ref} class=" mx-3 my-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch 
            </button>
            {/*<!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <form>
                    <div className="mb-2">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' value={note.title} aria-describedby="emailHelp" onChange={onChange} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" value={note.description}className="form-control" id="description"name='description' onChange={onChange}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" value={note.tag}  className="form-control" id="tag"name='tag' onChange={onChange}/>
                    </div>
                
                </form>


                        </div>
                        <div class="modal-footer">
                            <button type="button"ref={refClose} class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleClick}  class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h2>Your Notes</h2>
                <div className="container mx-2">
                    {notes.length === 0 && "no notes available"}
                </div>
                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} />;

                })}
            </div>
        </>
    )
}

export default Notes