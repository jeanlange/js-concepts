export class Fren {
    // is called when you do `new Fren`
    // purpose: set default stuff
    constructor(nameFromOutsideWorld) {
        this.name = nameFromOutsideWorld;
        this.speed = 0;
    }

    sayHi = () => {
        console.log("hello! my name is", this.name);
    }

    run = () => {
        this.speed = 10;
    }

    checkin = () => {
        console.log(this.name, "is going so fast! How fast?", this.speed, " fast!");
    }
}
