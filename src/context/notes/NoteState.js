import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
     const host = "http://localhost:5000";
     const notesInitial = []

     const [notes, setNotes] = useState(notesInitial);


     // get a notes
     const getNote = async () => {
          //to do call api
          const response = await fetch('http://localhost:5000/api/notes/fetchallnotes', {
               method: 'GET',
               headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
               },

          });
          const json = await response.json()

          setNotes(json);
     }



     // add a note
     const addNote = async (title, description, tag) => {
          //to do call api
          const response = await fetch('http://localhost:5000/api/notes/addnote', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
               },
               body: JSON.stringify({ title, description, tag })
          });
          const json = await response.json()
          setNotes(notes.concat(json));




     }

     // delete a note
     const deleteNote = async (id) => {
          //api call
          const response = await fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
               method: 'DELETE',
               headers: {
                    'Content-Type':'application/json',
                    'auth-token': localStorage.getItem('token')
               },

          });

          const newNote = notes.filter((note) => { return note._id !== id })
          setNotes(newNote)

     }

     //Edit a note
     const editNote = async (id, title, description, tag) => {
          //api call
              
          const response = await fetch(`http://localhost:5000/api/notes/updatenote/${id}`, {
               method: 'PUT',
               headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
               },
               body: JSON.stringify({ title, description, tag })
          });
          const json = response.json();
          console.log("running")

     

      //logic to edit in client
          for (let index = 0; index < notes.length; index++) {
               const element = notes[index];
               if (element._id === id) {
                    element.title = title;
                    element.description = description;
                    element.tag = tag;


               }

          }
     }


     return (
          <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNote }}>
               {props.children}
          </NoteContext.Provider>

     )
}

export default NoteState;