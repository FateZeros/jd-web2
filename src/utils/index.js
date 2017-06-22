
/* 缓存 用户信息 */
function setUser(nameSpace, username, token, date) {
	let value = {
		username,
		token,
		date
	}
	value = JSON.stringify(value)
	localStorage.setItem(nameSpace, value)
}

/* 从缓存中 获取用户信息 */
function getUser(nameSpace) {
	let userModel = {}
	try {
		const user = JSON.parse(localStorage.getItem(nameSpace))
		if (user) {
			userModel = user
		}
	} catch (err) {
		console.error(err)
	}
	return userModel
}

export {
	setUser,
	getUser
}