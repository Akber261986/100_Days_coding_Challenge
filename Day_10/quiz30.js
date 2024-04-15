"use strict";
// 30. Hello Admin:
let users = ['admin', 'ali', 'fatima', 'rizwan', 'aini'];
for (let username of users) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + username + ", thank you for logging in again.");
    }
}
