import { Fren } from "./frens.js";

const genericFren = new Fren("Jean");
genericFren.sayHi();
genericFren.checkin();
genericFren.run();
genericFren.checkin();

const buzzy = new Fren("Buzzy");
buzzy.checkin();