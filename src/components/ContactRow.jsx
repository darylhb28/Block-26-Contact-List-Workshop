function ContactRow({setSelectedContactID, contact}) {
    return (
        <tr onClick={()=>
            setSelectedContactID(contact.id)
        }>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
        </tr>
      )
}

export default ContactRow