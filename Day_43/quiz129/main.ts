const obj = {
    name: "Akber",
    traditionalFunction:  function (){
        console.log("Traditional: "+this.name)
    },
     arrowFunction: () => {
        console.log("Arrow: "+ this.name);
    }, 
    
};
obj.traditionalFunction();
obj.arrowFunction();
