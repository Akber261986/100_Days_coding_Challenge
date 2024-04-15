"use strict";
function make_sandwich(...items) {
    console.log(`Make a Sandwich with: ${items.join(', ')}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "letuce", "tomato");
make_sandwich("avocado", "sprouts", "mastard", "mayo");
