import React, { useContext } from "react";
import { Context } from "../store/appContext"
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="mt-5">
			<div className="d-flex justify-content-end container">
				<Link to="/add-contact">
				<button className="btn btn-success ms-auto">
				Add New Contact
				</button>
				</Link>
			</div>
			<div className="container">
				{store.contacts.map(contact => {
					return (
						<div className="bg-light border d-flex justify-content-between my-2 py-2 px-2">
							<div className="d-flex">
								<div className="col-2">
									<img src="https://thispersondoesnotexist.com" className="img-thumbnail rounded-circle" />
								</div>
								<div className="ms-3">
									<h1>{contact.name}</h1>
									<h2><FontAwesomeIcon icon={faEnvelope} className="me-4" />{contact.email}</h2>
									<h4><FontAwesomeIcon icon={faLocationDot} className="me-4" />{contact.address}</h4>
									<h4><FontAwesomeIcon icon={faPhone} className="me-4" />{contact.phone}</h4>
								</div>
							</div>
							<div className=" d-flex align-items-center gap-2">
								<button className="btn btn-danger" onClick={()=> actions.deleteContact(contact.id)} >🧺</button>
								<Link to={"/edit-contact/" + contact.id} className="text-primary">✏</Link>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	);
}