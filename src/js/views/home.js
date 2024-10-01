import React, {useContext} from "react";
import {Context} from "../store/appContext"
import "../../styles/home.css";

export const Home = () => { 
	const {store, actions} = useContext(Context)
	return (
	<div className="text-center mt-5">
		<div>
			{store.contacts.map(contact =>{
				return (
					<div>
						{contact.name}
						
					</div>
				)
			})}
		</div>
	</div>
);
}