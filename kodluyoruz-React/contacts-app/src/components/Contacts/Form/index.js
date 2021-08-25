import {useState} from "react";
import "./form.css"

function Form({addContacts, contacts}) {

    const initialFormValues = {fullname:"" , phone_number:""}
    const [form,setForm] = useState(initialFormValues);
    
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name] : e.target.value }); // ..form önceki default verileri korumak için
    } // event.target.name = event.target.value(inputa girilen value neyse o) 

    const onSubmit = (e) => {
        e.preventDefault();//form özelinde bilgiler submt olunca sayfayı yeniliyor.Sayfa yenilememesi için ...
        if (form.fullname ==="" || form.phone_number ===""){ //form altındaki fullname veya phonenumber boş ise formu gönderme
            return false;
        }
        addContacts([...contacts, form])
        setForm(initialFormValues)
        console.log(form)
    }
    return ( 
    <div>
        <form onSubmit ={onSubmit}>
            <div>
                <input name="fullname" placeholder ="Fullname" onChange={onChangeInput} value={form.fullname} />
            </div>
            <div>
                <input name = "phone_number"  placeholder ="Phone Number" onChange={onChangeInput} value={form.phone_number} />
            </div>
            <div className="btn-container" >
                <button className="btn" >Add Contact</button>
            </div>
        </form>
    </div> );
}

export default Form ;