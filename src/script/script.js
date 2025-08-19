const passInput = document.querySelector('#inputPasswordId');
const lenInput = document.querySelector('#inputLengthId');
const infoLength = document.querySelector('#labelLengthId');
const btnGerar = document.querySelector('#btnGerar');

const chkLower = document.querySelector('#chkLowerId');
const chkUpper = document.querySelector('#chkUpperId');
const chkNumber = document.querySelector('#chkNumberId');
const chkSymbols = document.querySelector('#chkSymbolsId');

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ['!', '@', '#', '$', '%'];

const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const LowerCaseCaracters = caracters.map((item) => String.fromCharCode(item));
const UpperCaseCaracters = LowerCaseCaracters.map((item) => item.toUpperCase());

infoLength.innerHTML = lenInput.value;

lenInput.addEventListener("change", () => {
    infoLength.innerHTML = lenInput.value;
});

btnGerar.addEventListener('click', () => {
    generatePassword(
        chkNumber.checked,
        chkSymbols.checked,
        chkLower.checked,
        chkUpper.checked,
        parseInt(lenInput.value), // Garante que o valor é um número inteiro
    );
});

const generatePassword = (
    hasNumbers,
    hasSymbols,
    hasLowercase,
    hasUppercase,
    length,
) => {
    const availableCharacters = [
        ...(hasNumbers ? numbers : []),
        ...(hasSymbols ? symbols : []),
        ...(hasLowercase ? LowerCaseCaracters : []),
        ...(hasUppercase ? UpperCaseCaracters : []),
    ];

    if (availableCharacters.length === 0) {
        passInput.value = '';
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        password += availableCharacters[randomIndex];
    }
    passInput.value = password;
};