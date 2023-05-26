# Paystack-Payment-Integration
<https://jedidiah-solomon.github.io/>


## How to use Paystack API keys to collect payment.

### EXPLANATION    
```
// Paystack Live public key
const paystackPublicKey = 'pk_live_9aeb93844dc1beb38c613d53cb43efd8a1f23ffa';
```

This line defines the Paystack public API key, which is used to initialize the Paystack transaction. 
The provided key is a sample key and should be replaced with your actual Paystack public API key.

** Get Public API key

`https://dashboard.paystack.com/#/settings/developers`

```
// Handle form submission
document.getElementById('registration-form').addEventListener('submit', function(event) {
event.preventDefault();
```

This code attaches an event listener to the form with the ID "registration-form" and listens 
for the form submission event. When the form is submitted, the provided function will be executed. 
The event.preventDefault() method is used to prevent the form from being submitted traditionally 
(i.e., reloading the page).

```
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
```

These lines retrieve the values entered in the **"name"** and **"email"** input fields
of the form and assign them to the respective variables.

```
const amountInKobo = 5000000;
```

This line sets the amount to be paid in Kobo. In this example, it is set to 5,000,000 Kobo, 
which is equivalent to 50,000 Naira (NGN). You can adjust this value to match the desired amount.

```
const handler = PaystackPop.setup({
    key: paystackPublicKey,
    email: email,
    amount: amountInKobo,
    currency: 'NGN',
    metadata: {
        name: name,
    },
    callback: function(response) {
        // Handle successful payment
        alert('Payment successful!');

        // You can perform additional actions here, such as saving the registration details to a database.

        // For example, you can submit the form to a server-side script for further processing:
        // document.getElementById('registration-form').submit();
    },
    onClose: function() {
        // Handle payment cancellation or failure
        alert('Payment cancelled or failed.');
    }
});
```

This code initializes the Paystack transaction using the PaystackPop.setup() method. 
PaystackPop.setup() is a method provided by the Paystack JavaScript library that enables
you to integrate the Paystack payment gateway into your web application and customize the payment process.

The Paystack JavaScript library is responsible for handling the integration with Paystack's payment gateway.

When you include the Paystack JavaScript library in your HTML file using the following script tag:

```
<script src="https://js.paystack.co/v1/inline.js"></script>
```

It makes the PaystackPop object available, which contains the setup() method. 
This method is used to configure and initialize the Paystack transaction, providing the
necessary parameters such as the API key, customer email, amount, currency, and callback functions.

The `PaystackPop.setup()` method allows you to customize the payment process and handle different
events related to the payment, such as successful payment, payment cancellation, or failure 
You can define your own callback functions to perform actions based on the outcome of the payment process.

It takes an object as an argument with various configuration options. These options include 
the Paystack public API key (key), the customer's email address (email), the amount to be paid 
in Kobo (amount), the currency code (currency), and any additional metadata such as the customer's name.

The callback function is triggered when the payment is successfully completed. In this example, 
it shows an alert message indicating the payment was successful. You can modify this function to
perform additional actions such as saving the registration details to a database or triggering other events.

The onClose function is triggered when the payment modal is closed without completing the payment. 
It shows an alert message indicating that the payment was cancelled or failed. You can customize
this function to handle the appropriate actions for your application.

```
handler.openIframe();
```

This line opens the Paystack payment modal, allowing the user to enter 
their payment details and complete the transaction.

##NOTE: 

```
const handler = PaystackPop.setup({ ... }); 
```

initializes the Paystack transaction and assigns the returned transaction handler to the handler variable. 
The transaction handler allows you to interact with the Paystack payment modal and handle the transaction.

`key: paystackPublicKey` 

specifies the Paystack public API key obtained from your Paystack account.
It authorizes the integration and allows communication with the Paystack API.

`email: email`

sets the customer's email address for the transaction. It should be 
a valid email address provided by the user in the registration form.

`amount: amountInKobo` 

specifies the amount to be paid in Kobo. The amountInKobo variable
holds the value in Kobo that you want to charge the customer. In this example, 
it is set to 5,000,000 Kobo, which is equivalent to 50,000 Naira (NGN). You can adjust this value as needed.

`currency: 'NGN'`

sets the currency code for the transaction. In this case, it is set to 'NGN' for Nigerian Naira. You can replace this value with the appropriate currency code for your application.

`metadata: { name: name }`

allows you to attach additional metadata to the transaction. Here,
it includes the customer's name obtained from the registration form. You can include 
more key-value pairs in the metadata object if needed.

The remaining code within the `PaystackPop.setup()` block includes other optional configuration 
options and callback functions such as callback and onClose, which handle the successful payment 
and cancellation/failure events, respectively.

Overall, the `PaystackPop.setup()` method configures the Paystack transaction with the provided
parameters and returns a transaction handler that allows you to interact with the Paystack 
payment modal and handle the transaction events.

More meta data you can add based on what you want to add or have: 
 for instance:

```
    metadata: {
        name: name,
        webinar: 'Front-end Webinar',
        ticketType: 'Premium',
        referralCode: 'ABC123',
    },
  ```  


for reference use uuid or generate it on your own e.g
 ```  
// Generate a random number between 1000 and 9999
const randomNumber = Math.floor(1000 + Math.random() * 9000);

// Create the unique reference by combining the prefix and random number
const uniqueReference = `jed2023-${randomNumber}`;

console.log(uniqueReference); // Output: e.g., "jed2023-1234"
  ```  

### But note:

The Math.random() method in JavaScript is designed to generate pseudo-random numbers, which means 
the generated numbers are not truly random but appear random.
There is a possibility that the same random number can be generated for different users,
especially if the generation happens very close in time.

To ensure uniqueness and avoid the possibility of generating the same random number for 
different users, you can consider using a more robust method for generating unique identifiers. 
One widely used method is the Universally Unique Identifier (UUID).

Here's an example of generating a UUID using the uuid library in JavaScript:

// Install the uuid package using npm or yarn: 

`npm install uuid`

**Inside your script, add these lines
```
const uuid = require('uuid');

// Generate a UUID
const uniqueId = uuid.v4();

console.log(uniqueId);
```


To install the uuid package using npm, you can follow these steps:

Open your command-line interface (CLI), such as Terminal or Command Prompt.
Navigate to your project's directory using the cd command. For example:

cd path/to/your/project

Once you are inside your project's directory, run the following command to install the uuid package:

`npm install uuid`  as said above.

This command will download and install the uuid package from the npm registry and add it as a dependency to your project.
After the installation is complete, you can start using the uuid package in your JavaScript code by importing the necessary functions. For example:


Make sure you have Node.js and npm installed on your system before running these commands.

UUIDs (Universally Unique Identifiers) can be generated using different versions of the UUID algorithm. Each version has its own characteristics and use cases. Version 4 (v4) UUIDs are randomly generated and have a very low probability of collision. They are typically used when uniqueness is important, and cryptographic strength is not required.

## Using Your own Function

The generateUUID() function is used to generate a version 4 UUID using the window.crypto object available in a web browser environment. 

>Here's a breakdown of how the function works:

-It retrieves the window.crypto object, which provides access to cryptographic functions.
-It creates a new Uint8Array of length 16 to store the random values for the UUID.
-It calls the cryptoObj.getRandomValues(array) method to fill the array with random values.
-It modifies specific elements in the array to set the version number and variant according to the UUID format.
-It iterates over the array and converts each value to hexadecimal using array[i].toString(16). The padStart(2, '0') method ensures that each hexadecimal value is two characters long.
-It concatenates the hexadecimal values together, inserting hyphens at specific positions to match the UUID format.
-It returns the generated UUID.
-To use this function, you can concatenate the webinarCode with the result of generateUUID() to create a unique identifier. 

![Tux, the Linux mascot](/img/tux.avif)

For example:

`const uniqueId = webinarCode + generateUUID();`

This will result in a string where webinarCode is prepended to the generated UUID.

Please note that the window.crypto object is not available in all JavaScript environments (e.g., Node.js). If you're using this code outside of a web browser, you may need to use a different method to generate random UUIDs.

In summary, using the uuid library from npm is a more general and recommended approach as it provides a standardized and cross-platform solution for generating UUIDs. This runs on node.js environment e.g server-side, terminal etc.


On the other hand, the generateUUID() function  is a custom implementation specifically tailored for web browser environments using the window.crypto object.

## The languages required to create say a landing page to collect payment with paystack.

| Programmin Language  | Description 			|
| -------------------- | -----------------------|
| HTML      		   | Webpage Markup      	|
| CSS		   		   | Styling        		|
| JAVASCRIPT		   | Functionality and APIs |

Visit my site [Jedidiah Solomon](https://jedidiah-solomon.github.io/JedybrownFolio/).

## END OF NOTE 
