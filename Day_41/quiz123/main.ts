let chracters: string[] = ["q", "j", "f", "o", "f", "e", "v", "i", "a"];

for (let i =0; i<chracters.length; i++){
    if (chracters[i] === "a"){
        break;
    }
    else if (chracters[i] === "e"){
        break;
    }
    else if (chracters[i] === "i"){
        break;
    }
    else if (chracters[i] === "o"){
        break;
    }
    else if (chracters[i] === "u"){
        break;
    }
    
    console.log(chracters[i]);
}


            // Teacher code


function logUntilVowel(str:string): void {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)){
            console.log(`First Vowel found: ${char}`);
            break;
        }
        console.log(char);
        
    }
}
logUntilVowel("syziygy");