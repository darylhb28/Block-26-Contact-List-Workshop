import { useState, useEffect } from "react"

function SelectedContact({selectedContactID, setSelectedContactID}){

const [contact, setContact] = useState (null)

useEffect(()=>{
    async function fetchSelectedContact() {
        try {
            const response = await fetch (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactID}`)
            const res = await response.json()
            setContact(res)
        } catch (error) {
            console.error(error)
        }
    }
    fetchSelectedContact ()
},[selectedContactID])

console.log("Selected Contact:", contact)

return (
    <> {
       contact &&  (
            <div>
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <button onClick={()=>setSelectedContactID(null)}>Back to Full List</button>
        </div>
        )
    }
    </>
  )

}

export default SelectedContact