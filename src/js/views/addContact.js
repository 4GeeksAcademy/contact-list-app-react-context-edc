import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = props => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit =  async () => {
    const success = await actions.addContact({
      email: email,
      name: name,
      phone: phone,
      address: address
    })
    if (success) {
      alert("Contact successfully added")
    } else {
      alert("something went wrong")
    }
    
  }

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


