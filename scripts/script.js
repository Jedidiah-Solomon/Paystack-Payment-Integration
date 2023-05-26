// How to use uuid after installing it using npm to your project root

const webinarCode = 'jed2023-';

// Import the uuid module
const uuid = require('uuid');


const uniqueId = webinarCode + uuid.v4();// Generate a random UUID (Universally Nuique Identifier) plus your own code, this is optional but good for code to look alike

console.log(uniqueId);





