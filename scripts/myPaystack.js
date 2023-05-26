// Store variables
const referralCode = document.getElementById('referral-code').value;

//Paystack Live public key
const paystackPublicKey = 'pk_live_5aeb93844dc1beb38c613d53cb43efd8a1f43ffa';

// Generate a similar webinar code for participants
const webinarCode = 'jed2023-';


function generateUUID() {
  const cryptoObj = window.crypto || window.msCrypto; // Get the crypto object
  const array = new Uint8Array(16); // Create an array to store the random values
  cryptoObj.getRandomValues(array); // Fill the array with random values
  array[6] = (array[6] & 0x0f) | 0x40; // Set the version number (4) in the UUID
  array[8] = (array[8] & 0x3f) | 0x80; // Set the variant (RFC4122) in the UUID

  let uuid = '';
  for (let i = 0; i < 16; i++) {
    uuid += array[i].toString(16).padStart(2, '0'); // Convert each value to hexadecimal and concatenate
    if (i === 3 || i === 5 || i === 7 || i === 9) {
      uuid += '-'; // Insert hyphens at specific positions to match the UUID format
    }
  }

  return uuid;
}

// Usage:
const uniqueId = webinarCode + generateUUID();


// Handle form submission
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const ticketType = document.getElementById('ticket-type').value;

    let amountInKobo;// The amount to be paid in Kobo (100kb = #1)

    switch (ticketType) {
        case 'premium':
          amountInKobo = 5000000;
          break;
        case 'vip':
          amountInKobo = 8000000;
          break;
        default:
          amountInKobo = 3000000;
          // Handle the case when the ticketType is not recognized
          // You can set a default amount or display an error message
    }

   
    // Create a Paystack Inline transaction
    const handler = PaystackPop.setup({
        key: paystackPublicKey,
        email: email,
        amount: amountInKobo,
        currency: 'NGN', // Replace with the desired currency code e.g NGN, GHS, ZAR or USD
        ref: uniqueId,
        metadata: {
            name: name,
            ticketType: ticketType,
            referralCode: referralCode
        },
        callback: function(response) {
            // Handle successful payment
            let reference = response.reference;
            alert('Payment successful! Reference code: ' + reference);

            // You can perform additional actions here, such as saving the registration details to a database.

            // For example, you can submit the form to a server-side script for further processing:
            // document.getElementById('registration-form').submit();
            //Make an Ajax callto your server with the reference to verify transaction

            /* 
            const detailsDiv = document.getElementById('registration-details');
            detailsDiv.innerHTML = 'Name: ' + name + '<br>Email: ' + email + '<br>Ticket Type: ' + ticketType;
            detailsDiv.style.display = 'block';
            */
        },
        onClose: function() {
            // Handle payment cancellation or failure
            alert('Transaction was not completed, window closed.');
        }
    });

    // Open the Paystack payment modal
    handler.openIframe();
});



