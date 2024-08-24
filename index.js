import sayMyFood from "./food.js";
import sayMyColor from "./color.js";
import { sayMyCountry, sayMyPet } from "./country.js";
// or we can import { sayMyCountry as news, sayMyPet as dog } from "./country.js";

let result = sayMyFood()
console.log(result);

let newResult = sayMyColor()
console.log(newResult);

let nResult = sayMyCountry()
let nnResult = sayMyPet()

console.log(nResult, nnResult)