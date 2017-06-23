
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
	const jdUser = localStorage.getItem(nameSpace)
	if (jdUser) {
		userModel = JSON.parse(jdUser)
	}
	return userModel
}

export {
	setUser,
	getUser
}