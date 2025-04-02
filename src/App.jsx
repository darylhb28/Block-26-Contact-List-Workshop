import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'

function App() {
  const [selectedContactID, setSelectedContactID] = useState(null)
  

  return (
    <>
    {
      selectedContactID ? 
        <div>
          <SelectedContact selectedContactID={selectedContactID} setSelectedContactID={setSelectedContactID}/>
        </div> :  
      <ContactList setSelectedContactID={setSelectedContactID} />
    }
    </>
  )
}

export default App
