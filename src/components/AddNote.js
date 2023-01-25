import React from 'react'
import noteContext from '../context/notes/noteContext'
import { useContext,useState } from 'react';

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    
    const handleClick=(e)=>{
        e.preventDefault();
      addNote(note.title,note.description,note.tag);
      
    //   setNote({title:"", description:"",tag:""})

    }
    const [note, setNote] = useState({title:"", description:"",tag:""})
   
    const onChange=(e)=>{

        setNote({...note,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <div className="container">
                <h1 >Add your Notes</h1>
                <form>
                    <div className="mb-2">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description"name='description' onChange={onChange}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag"name='tag' onChange={onChange}/>
                    </div>
                  
                  
                    <button disabled={note.title.length<5||note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote