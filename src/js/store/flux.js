const getState = ({ getStore, getActions, setStore }) => {
	const apiURL = "https://playground.4geeks.com/contact"
	const slug = "emanueldelc"
	
	
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: async () => {
				let response = await fetch(`${apiURL}/agendas/${slug}/contacts`)
				if(response.status==404){
					console.log("Agenda with slug not found. A new one is being created")
					getActions().createAgenda()
				} else if(response.status==200){
					let data=await response.json()
					console.log(data)
					setStore({contacts: data.contacts})
				} else{
					console.log("error occurred while getting your contacts", response.statusText, response.status)
					alert("error occured while getting your contacts. Please try again later")
				} 
			},
			createAgenda: async () => {
				let response = await fetch(`${apiURL}/agendas/${slug}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					}
				})
				if(response.status==201){
					console.log("Succesfully created new agenda. Getting contacts")
					getActions().getContacts()
				} else{
					console.log("error occurred while getting your contacts", response.statusText, response.status)
					alert("error occured while creating your Agenda. Please try again later")
				}
			},
			addContact: async (formData) => {
				let response = await fetch(`${apiURL}/agendas/${slug}/contacts`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: formData.email,
						phone: formData.phone,
						name: formData.name,
						address: formData.address
					})

					
				})
				if(response.status==201){
					console.log("Succesfully added new contact")
					getActions().getContacts() 
					return true
				} else{
					console.log("error occurred while adding your contact", response.statusText, response.status)
					alert("error occured while creating your contact. Please try again later")
					return false
				}
			},
			editContact: async (contact) => {
				let options = {
					method: "PUT",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify(contact)
				} 
				try {
					let response = await fetch(`${apiURL}/agendas/${slug}/contacts/` + contact.id, options)
					if (response){
						getActions().getContacts()
						return true 
					} else {
						return false
					}
				} catch {
					console.log (error)
				}

			},
			deleteContact: async (contactId) => {
				let options = {
					method: "DELETE",
					headers: {"Content-Type": "application/json"}
				} 
				try {
					let response = await fetch(`${apiURL}/agendas/${slug}/contacts/` + contactId, options)
					if (response){
						getActions().getContacts()
						return true 
					} else {
						return false
					}
				} catch {
					console.log (error)
				}

			}
		}
	};
};

export default getState;
