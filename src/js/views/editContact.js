import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, useNavigate } from "react-router-dom";

export const EditContact = props => {
  const { store, actions } = useContext(Context);
  const params = useParams()
  let navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")

  useEffect (()=>{
	const contact = store.contacts.find((item)=> item.id==params.theid)
	if (contact){
		setName(contact.name)
		setAddress(contact.address)
		setPhone(contact.phone)
		setEmail(contact.email)
	}
  }, [store.contacts, params.theid])

  const handleSubmit = async () => {
	const updatedContact = {
		id: params.theid,
		name,
		email,
		phone,
		address
	}
	try {
		let response = await actions.editContact(updatedContact)
		if (response) {
			navigate("/")
		} else {
			alert("Contact un-succesfully edited")
		}
	} catch (error){
		console.log (error)
	}
  }
//   const handleSubmit =  async () => {

//     const success = await actions.EditContact({
//       email: email,
//       name: name,
//       phone: phone,
//       address: address
//     })
//     if (success) {
//       alert("Contact successfully added")
//     } else {
//       alert("something went wrong")
//     }
    
//   }

  return (
    <div className="jumbotron">
      <div>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Phone</label>
          <input type="tel" class="form-control" id="phone" onChange={(e) => setPhone(e.target.value)} value={phone} />
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <input type="address" class="form-control" id="address" onChange={(e) => setAddress(e.target.value)} value={address} />
        </div>
        <button class="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};




