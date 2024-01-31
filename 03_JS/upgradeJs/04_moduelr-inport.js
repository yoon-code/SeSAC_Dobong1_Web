// 모듈 사용 - import 키워드를 사용
import { flr, getFlr } from './04_export1';
import * as flowres from './04_export1';

console.log(flr);
console.log(getFlr(2));
console.log(getFlr(3));

console.log(flowres)

console.log(flowres);
console.log(flowres.flr);
console.log(flowres.getFlr(3));

import { animals, showAnimals } from './04_export2';
console.log(animals);
showAnimals();


import sayHi from './05_export5-export default';
sayHi();