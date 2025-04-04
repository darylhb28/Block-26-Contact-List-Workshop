import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";
import './ContactList.css'

// const dummyContacts = [
//     { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//     { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//     { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
//   ];



function ContactList ({setSelectedContactID}){
    const [contacts, setContacts] = useState([])

    useEffect(()=>{
        async function fetchContacts(){
            try {
                const response = await fetch ("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
                const res = await response.json()
                setContacts(res)
            } catch (error) {
                console.error(error)
            }
        }
        fetchContacts()
    },[])

    console.log("Contacts: ", contacts)

    return ( 
        <table className="contactlist">
          <thead>
            <tr>
              <th colSpan="3"><strong>Contact List</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Name</strong></td>
              <td><strong>Email</strong></td>
              <td><strong>Phone</strong></td>
            </tr>
            {
               contacts.map((contact)=> {
                return <ContactRow key={contact.id} contact={contact} setSelectedContactID={setSelectedContactID} />
               })}
          </tbody>
        </table>
    );

}

export default ContactList