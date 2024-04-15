let smartPhone = {
    brand: "Tecno",
    model: "LD7",
    key: {
        sizeOfScreen: "6x4",
        ram: "6 Gb",
        storage: "128 Gb",
        battry: "6000 mah"
    }
}

console.log(smartPhone.key);

// I think I could not understand the question

// teacher code

let developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameWork: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
}
// Getting spacific skill from the list

let {languages, frameWork, tools} = developerSkills

// showing a skill from each catagory

console.log(`language: ${languages[0]} framework: ${frameWork[0]} Tools: ${tools[0]}`);
console.log(`language: ${languages[1]} framework: ${frameWork[1]} Tools: ${tools[1]}`);
console.log(`language: ${languages[2]} framework: ${frameWork[2]} Tools: ${tools[2]}`);
