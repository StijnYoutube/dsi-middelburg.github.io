/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects
var objPeople = [
	{
		username: "DSI+00",
		password: "Stijn#2022#hsjkl"
	},
    {
		username: "DSI+01",
		password: "Stijn#2022#jqwke"
	}
]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
            window.location = './html-bestanden/inGelogd.html'
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect username or password")
}

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        window.location = './index.html'
    }
}

function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}

