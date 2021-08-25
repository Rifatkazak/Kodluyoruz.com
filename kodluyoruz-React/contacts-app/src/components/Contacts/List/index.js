import {useState} from "react";
import "./list.css"

function List({contacts}) {
    const [filterText, setFilterText] = useState("") ;

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
        item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLocaleLowerCase()) 
        )
    });

    return (
    <div>
         <input placeholder="Filter" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
        <ul className="List">
           { filtered.map((contact, i) => <li key={i}><span>{contact.fullname}</span><span className="phone">{contact.phone_number}</span></li>)}
        </ul>
    </div> 
    );
}

export default List ;