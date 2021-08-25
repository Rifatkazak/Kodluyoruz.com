import {useState, useEffect} from "react";
import List from "./List/index"
import Form from "./Form";
import "./contact.css"
function Contacts() {
    const [contacts, setContacts] = useState([]);//girilen contactları burada tutup form componentine göndermek istiyorum

    useEffect(() => {
        console.log(contacts)
    }, [contacts])
    return (
    <div className="contacts-box">
       <h1 className="header">Contacts</h1>
       <List contacts= {contacts} />
       <Form addContacts= {setContacts} contacts = {contacts}/>
    </div> );
}

export default Contacts ;