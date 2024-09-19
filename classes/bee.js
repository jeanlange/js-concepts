import { Fren } from "./frens.js";

export class Bee extends Fren {
    constructor(name) {
        super(name);
        this.wings = true;
    }

  // override data / behavior
  sayHi = () => {
    console.log("I'm a bee!");
    super.sayHi();
  }
  // add new data / behavior
  poop() {
    console.log("heh heh heh");
  }
}
