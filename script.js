const password = document.getElementById('password');
const copyBtn = document.querySelector('.copy-btn');
const form = document.querySelector('form');

const isLength = document.getElementById('password-length');
const isLowercase = document.getElementById('lowercase');
const isUppercase = document.getElementById('uppercase');
const isNumbers = document.getElementById('numbers');
const isSymbols = document.getElementById('symbols');

const formHandler = (e) => {
	e.preventDefault();
	const currentChars = generateCharsOptions();
	password.textContent = generatePassword(currentChars, isLength.value);
};

const copyHandler = (e) => {
	e.preventDefault();
	navigator.clipboard.writeText(password.textContent);
};

const generateCharsOptions = () => {
	let output = [];
	if (isLowercase.checked) output = output.concat(splitString('abcdefghijklmnopqrstuvwxyz'));
	if (isUppercase.checked) output = output.concat(splitString('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
	if (isNumbers.checked) output = output.concat(splitString('0123456789'));
	if (isSymbols.checked) output = output.concat(splitString('~`! @#$%^&*()_-+={[}]|\\:;"\'<,>.?/'));
	return output;
};

const splitString = (string) => string.split('');

const generatePassword = (characters, length) => {
	if (characters.length === 0) {
		return null;
	}
	const output = [];
	for (let i = 0; i < length; i++) output.push(randomChar(characters));
	return output.join('');
};

const randomChar = (characters) => characters[Math.floor(Math.random() * characters.length)];

form.addEventListener('submit', formHandler);
copyBtn.addEventListener('click', copyHandler);
