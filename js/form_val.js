function validate() {
    var email = document.getElementById("email").value; // Get the value of the email input field
    var telephone = document.getElementById("Phone").value; // Get the value of the telephone input field

    var emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Regular expression for email validation
    var telephoneRegx = /^[0-9]{10}$/; // Regular expression for telephone validation

    if (emailRegx.test(email) && telephoneRegx.test(telephone)) { // Test the email and telephone against the regular expressions
        // Both email and telephone are valid
        return true;
    } else {
        // Email or telephone is not valid
        alert("Please enter a valid email and telephone number.");
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Get the payment option images and the hidden input field
    const paymentOptions = document.querySelectorAll('.payment-option');
    const selectedPaymentMethod = document.getElementById('selectedPaymentMethod');

    // Add click event listener to each payment option image
    paymentOptions.forEach(function (paymentOption) {
        paymentOption.addEventListener('click', function (event) {
            // Prevent the default action (form submission)
            event.preventDefault();

            // Check if the clicked option is already selected
            if (this.style.border === '4px solid green') {
                // If it's selected, deselect it
                this.style.border = ''; // Remove border from the selected option
                selectedPaymentMethod.value = ''; // Clear the selected payment method
            } else {
                // If it's not selected, select it
                paymentOptions.forEach(function (option) {
                    option.style.border = ''; // Remove border from all options
                });
                this.style.border = '4px solid green'; // Add border to the selected option
                selectedPaymentMethod.value = this.dataset.paymentMethod; // Update the hidden input field with the selected payment method
            }
        });
    });

    // Add submit event listener to the form
    document.querySelector('form').addEventListener('submit', function (event) {
        // Check if a payment method has been selected
        if (!selectedPaymentMethod.value) {
            alert('Please select a payment method.');
            event.preventDefault(); // Prevent form submission if no payment method is selected
        }
    });
});

