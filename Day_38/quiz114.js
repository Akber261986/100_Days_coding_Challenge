let studentInfo = new Map();
studentInfo.set("Ateeq", 100);
studentInfo.set("Khizra", 101);
studentInfo.set("komal", 102);
studentInfo.set("Imran", 103);
studentInfo.forEach((Id, name) => {
    console.log(`Student Name: ${name} ID: ${Id}`);
});
export {};
