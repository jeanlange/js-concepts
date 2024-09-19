import { Fren } from "./frens.js";
import { Bee } from "./bee.js";

// const genericFren = new Fren("Jean");
// genericFren.sayHi();
// genericFren.checkin();
// genericFren.run();
// genericFren.checkin();

const buzzy = new Fren("Buzzy");
// buzzy.checkin();

const matilda = new Bee("Matilda");
matilda.sayHi();
matilda.run();
matilda.checkin();

matilda.poop();
