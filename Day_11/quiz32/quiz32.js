"use strict";
let current_users = ['aini', 'akbar', 'junaid', 'asma', 'babloo'];
let new_users = ['khizra', 'akbar', 'ambar', 'asma', 'rizwan'];
new_users.forEach(new_users => {
    if (current_users.some(current_users => current_users.toLowerCase() === new_users.toLowerCase())) {
        console.log(`${new_users} will need to enter a new user Name`);
    }
    else {
        console.log(`${new_users} is awailable`);
    }
});
// I could not solve myself
