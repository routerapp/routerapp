
		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyBkQ9PFLAlI44yVzuKZarBqwI5g8lFQZrE",
			authDomain: "router-160015.firebaseapp.com",
			databaseURL: "https://router-160015.firebaseio.com",
			projectId: "router-160015",
			storageBucket: "router-160015.appspot.com",
			messagingSenderId: "146678618209"
		};



		firebase.initializeApp(config);
		document.getElementById('sub-btn').onclick = function() {
			var mail = document.getElementById('inp-a').value;
			if (mail != '') {
				firebase.database().ref(`subscribers/${mail.replace('@','_').replace('.','_')}`).set(mail);
				document.getElementById('sub-btn').value = '';
				//Materialize.toast(`Subscribed ${mail}`, 4000) // 4000 is the duration of the toast
			}
		};
