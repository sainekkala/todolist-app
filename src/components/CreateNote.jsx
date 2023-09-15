import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import "./CreateNote.css";
import Zoom from '@mui/material/Zoom';


function CreateNote(props) {
    const [note, setNote] = useState({
        title : "",
        content :""
    })

    const [isexpand, setIsExpand] = useState(false) ;

    const handleinput = (event) => {
        const {name, value} = event.target;
        setNote( (prevnote) => {
            return {
                ...prevnote,
                [name] : value
            }
        }
        )
    }

    const handlesubmit = (event) => {
      event.preventDefault();
      props.addnote(note);
      setNote({
        title:"",
        content:""
      })
    }

    const handlexpand = () => {
      setIsExpand(true)
    }
    
  return (
    <>
      <form className='create-note'>
       {isexpand && 
        <input 
        type='text'
        name='title'
        placeholder='title' 
        value={note.title}
        onChange={handleinput}
        />
       }
        <textarea 
        rows={isexpand ? "3":"1"}
        placeholder='add a note'
        name='content'
        value={note.content}
        onChange={handleinput}
        onClick={handlexpand}
        />
        <Zoom in={isexpand}>
        <Fab onClick={handlesubmit}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </>
  )
}

export default CreateNote
