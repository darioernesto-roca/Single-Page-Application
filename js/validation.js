// JavaScript for forms validations
console.log('Validation code');

const inputs = document.querySelectorAll('input');
console.log(inputs);

const patterns = {
    telephone: /3[0-9]{9}/gm,

}

// Validation function

function validate(field, regex) {
    console.log(regex.test(field.value));
    if(regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
        console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});

validate();