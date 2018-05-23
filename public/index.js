class Controller {
	constructor() {
		this.isTimePreferenceChecked = false

		this.formData = {
			issue: 'Idöpontkérés',
			name: null,
			phone: null,
			email: null,
			complaint: null,
			time_preference: null
		}

		this.addEvents();
	}

	prepareFormData() {
		let inputs = document.querySelectorAll('.form-content');

		let readyForSend = true

		inputs.forEach(input => {
			if (this.isInputEmpty(input.value)) {
				this.alertBy(input.name)
				readyForSend = false
			}

			if (input.type == 'radio') {
				if (input.checked) {
					this.isTimePreferenceChecked = true
					this.formData[input.name] = input.value
				}
			} else {
				this.formData[input.name] = input.value
			}
		});

		let isTimePreferenceChecked = this.checkForTimePreference()

		if (readyForSend && isTimePreferenceChecked) {
			this.send()
		}
	}

	send() {
		console.log(this.formData);
		let data = JSON.stringify(this.formData)

		fetch(`/appointment`, {
        method: 'POST',
        headers: new Headers({
					'Content-Type': 'application/json',
          'X-PANDA': 'OK'
        }),
				body: data
      }).then(response => {
				this.handleResponse(response)
      }).catch(error => {
        console.log('error', error)
      })
	}

	handleResponse(response) {
		if (!(response.status === 200)) {
			this.showError(null, 'Váratlan hiba történt, kérem próbálja meg újra.')
		}

		if (response.ok) {
			this.clearInput()
			this.showSuccess()
		}
	}

	clearInput() {
		let inputs = document.querySelectorAll('input');
		let textarea = document.querySelector('textarea');
		inputs.forEach(input => {
			input.value = '';
			input.checked = false;
		})
		textarea.value = '';
	}

	showSuccess() {
		console.log('success');
		$('#myModal').modal({show: true})
	}

	showError(parent, errorMessage) {
		let parentNode = document.querySelector('header .row');
		if (parent != null) {
			parentNode = parent;
		}

		const error = document.createElement('p');
		this.createErrorElement(error, errorMessage);

		parentNode.appendChild(error)
		this.hideError(parentNode, error)
	}

	createErrorElement(error, errorMessage) {
		error.innerText = errorMessage;
		error.classList.add('alert')
		error.classList.add('alert-danger')
		error.classList.add('error')
	}

	hideError(parent, errorElement) {
		window.setTimeout(() => {
			parent.removeChild(errorElement);
		}, 3000)
	}

	isInputEmpty(inputValue) {
		return inputValue == null || inputValue == ''
	}

	alertBy(inputName) {
		console.log(inputName);
		if (inputName == 'name') {
			this.setAlertForInput(inputName, 'Kérem válasszon egy napot!')
		} else if (inputName == 'phone') {
			this.setAlertForInput(inputName, 'Kérem adja meg a telefonszámát!')
		} else if (inputName == 'email') {
			this.setAlertForInput(inputName, 'Kérem adja meg az email címét!')
		} else if (inputName == 'complaint') {
			this.setAlertForInput(inputName, 'Kérem írja meg, hogy mi a panasza!')
		}
	}

	setAlertForInput(inputName, message) {
		let input

		if (inputName == 'complaint') {
			input = document.querySelector(`textarea[name='${inputName}']`)
		} else {
			input = document.querySelector(`input[name='${inputName}']`)
		}

		let parent = input.parentElement
		this.showError(parent, message)
	}

	checkForTimePreference() {
		if (!this.isTimePreferenceChecked) {
			let parent = document.querySelector('.time-preference')
			this.showError(parent, 'Kérem válasszon egy napot!')
			return false
		}
		return true
	}


	addEvents() {
		let sendButton = document.querySelector('#send');
		sendButton.addEventListener('click', () => {
			this.prepareFormData();
		});
	}
}

const controller = new Controller();
