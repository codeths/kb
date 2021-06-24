document.querySelectorAll(".breadcrumbs").forEach(element => {
	let path = window.location.pathname.split("/")
	path = path.filter(value => value.length > 0)
	element.innerHTML = ''
	for (let i = 0; i < path.length; i++) {
		let url = `/${path.slice(0,i+1).join("/")}`
		element.innerHTML += `<a href=${url}/>${path[i]}</a>`
		if (i < path.length - 1) {
			element.innerHTML += ` > `
		}
	}
})