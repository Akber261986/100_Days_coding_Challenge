let divisible = (num1:number) => {
        if (num1%2 == 0 && num1%3 == 0){
            console.log(`${num1} is Divisible By 2 and 3`);
            
        }
        else{
            console.log(`${num1} is Not Divisible By 2 and 3`);

        }
}

divisible(6);
divisible(15);
divisible(12);
divisible(20);