import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;

    const { note,updateNote } = props;

    return (
       <> <div className='col-md-3'>
            <div className="card my-2" >
                <div className="card-body">
                    <div className="d-flex align-items-center ">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-trash-can ms-auto mx-3" onClick={() => { deleteNote(note._id) }}></i>
                        {/*ms for margin left me for right or end   */}
                        <i className="fa-sharp fa-solid fa-pen-to-square " onClick={() => {updateNote(note)}}></i></div>
                       
                    <p className="card-text">{note.description}</p>
                    
                    
                </div>
            </div>
        </div>

        
        </>

    )
}

export default Noteitem