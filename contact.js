'use stric';

/**
 * Phone field.
 * @type {HTMLInputElement}
 */
var phone = document.querySelector('#phone');

phone.addEventListener('keydown', maskPhone);
phone.addEventListener('blur', cleanPhone);

/**
 * Set a mask on a phone field.
 * @param {KeyboardEvent} event
 */
function maskPhone(event) {
	if (event.key === 'Backspace')
		return;

	var phone = this.value;

	if (this.value.length === 0)
		phone = '(' + this.value;

	if (this.value.length === 3)
		phone = this.value + ') '; 

	if (this.value.length === 9)
		phone = this.value + '-';

	this.value = phone;
}

/**
 * Cleans phone field's value.
 */
function cleanPhone() {
	if (this.value.length === 14)
		return;

	this.value = '';
}
