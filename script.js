	// In HTML, .display-area has the width of 4 cards = 880px. Each card is 200px width and margin set to 10px.
		// .display-area has a .cards-wrapper which contains all the cards. .cards-wrapper is set to display flex.
		// .display-area has overflow hidden to hide the portion of cards-wrapper which extends beyond the container's width.

		const wrapper = document.querySelector('.cards-wrapper');
		// console.log(wrapper.clientWidth);

		// grab the dots
		const dots = document.querySelectorAll('.dot');
		// the default active dot num which is array[0]
		let activeDotNum = 0;

		dots.forEach((dot, idx) => {
			//   number each dot according to array index
			dot.setAttribute('data-num', idx);

			//   add a click event listener to each dot
			dot.addEventListener('click', (e) => {

				let clickedDotNum = e.target.dataset.num;
				// console.log(clickedDotNum);
				//     if the dot clicked is already active, then do nothing
				if (clickedDotNum == activeDotNum) {
					// console.log('active');
					return;
				}
				else {
					// console.log('not active');
					// shift the wrapper
					let displayArea = wrapper.parentElement.clientWidth;
					// let pixels = -wrapper.clientWidth * clickedDotNum;
					let pixels = -displayArea * clickedDotNum
					wrapper.style.transform = 'translateX(' + pixels + 'px)';
					//       remove the active class from the active dot
					dots[activeDotNum].classList.remove('active');
					//       add the active class to the clicked dot
					dots[clickedDotNum].classList.add('active');
					//       now set the active dot number to the clicked dot;
					activeDotNum = clickedDotNum;
				}

			});
		});

		function sendEmail() {
			var name = document.getElementById("name").value;
			var email = document.getElementById("email").value;
			var message = document.getElementById("message").value;

			var subject = "Contact Form Submission";
			var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

			// Replace 'YOUR_EMAIL_ADDRESS' with the actual email address to which you want to send emails.
			var mailtoLink = "nyakellongengineering@gmail.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

			// Open the default email client with the pre-filled details.
			window.location.href = mailtoLink;
		}