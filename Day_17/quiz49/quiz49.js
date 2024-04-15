"use strict";
function hobbies(...hoby) {
    hoby.forEach(hobys => {
        console.log(`you enjoy the ${hobys}`);
    });
}
hobbies("cricket", "Movie", "Coding");
