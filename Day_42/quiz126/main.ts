const globalvariable = {
    name: "Akber",
    mainfunc: function (){
        console.log(this.name);
        const nested = () => {
            console.log(this.name);
            
        };
        nested();
    },
};
globalvariable.mainfunc();