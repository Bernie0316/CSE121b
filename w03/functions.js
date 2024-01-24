let firstName = 'Antonia';
let lastName = 'Francesca';

// function declaration / definition
function fullname(first, last) {
    return `${first} ${last}`
}

// function expression
const fullname = function (first, last) {
    return `${first} ${last}`
}

// arrow function expression
const fullname = (firstName, lastName) => `${firstName} ${lastName}`;

// expression to an an existing HTML element
document.querySelector('#fullName').innerHTML = fullname(firstName, lastName);