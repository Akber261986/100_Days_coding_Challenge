let laptop2 = {
    make: "Lenovo",
    model: "X1 Carbon",
    year: "2015",
    describe: function(){
        console.log(`This laptoop is a ${this.year} ${this.make} ${this.model}.`);
        
    }

};
laptop2.describe()
