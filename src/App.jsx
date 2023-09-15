import './App.css'
import Header from './components/Header'
import CreateNote from './components/CreateNote'
import { useState } from 'react';
import  List  from './components/List';
import Footer from './components/Footer';


function App() {
   const [addnotes, setAddNotes] = useState([]);

   const handlenote = (addnote) => {
    setAddNotes((prev) => {
      return [...prev, addnote]
    })
   };
  
   const handledelete = (id) => {
    setAddNotes((prevenotes) => {
      return prevenotes.filter((notes,index) => {
        return index !== id
      })
    })
   };

  return (
    <>
    <Header />
    <CreateNote addnote={handlenote} />
    {addnotes.map((items,index) => {
      return(
        <List  key={index} id={index} title={items.title} content={items.content} onDelete={handledelete}/>
      )
    })}
    <Footer />
    </>
  )
}

export default App
