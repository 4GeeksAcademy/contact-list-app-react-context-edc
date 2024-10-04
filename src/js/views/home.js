import React, { useContext } from "react";
import { Context } from "../store/appContext"
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="text-center mt-5">
			<div>
				{store.contacts.map(contact => {
					return (
						<div>
							<div>
								{contact.name}
								{contact.email}
								{contact.address}
								{contact.phone}
							</div>
							<div>
								<button className="text-danger" onClick={()=> actions.deleteContact(contact.id)} >Delete</button>
								<Link to={"/edit-contact/" + contact.id} className="text-primary">Edit</Link>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	);
}