var globalvariable = {
    name: "Akber",
    mainfunc: function () {
        var _this = this;
        console.log(this.name);
        var nested = function () {
            console.log(_this.name);
        };
        nested();
    },
};
globalvariable.mainfunc();
