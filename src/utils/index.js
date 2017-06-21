
function setUser(nameSpace, username, token, date) {
	let value = {
		username,
		token,
		date
	}
	value = JSON.stringify(value)
	localStorage.setItem(nameSpace, value)
}

export {
	setUser
}