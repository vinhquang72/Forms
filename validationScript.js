document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('yourFormId'); 

    form.addEventListener('submit', function(event) {
        const inputField = document.getElementById('yourInputFieldId'); 
        const inputValue = inputField.value;

        if (!validateInput(inputValue)) {
            event.preventDefault(); 
            alert('Please enter only alphanumeric characters.');
        } else {
            alert('Form submitted successfully.');
        }
    });

    function validateInput(inputValue) {
        const alphanumericPattern = /^[a-zA-Z0-9]+$/;
        return alphanumericPattern.test(inputValue);
    }
});
