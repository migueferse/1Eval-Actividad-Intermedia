
import { nextState } from './nextState.js';
import { rules } from './rules.js';
let state = ['-','x','-','-','-','x','-'];
let rulesNextState = ['-x-', '---'];
// let state = ['x','-','x'];
// let rulesNextState = [];
console.log('NextState', nextState(rulesNextState, state));


console.log('Rules', rules(80));