
const RULESARRAY = ['xxx','xx-','x-x','x--','-xx','-x-','--x','---'];

function convertToBinary(number) {
  let binaryString = (number.toString(2));
  let filledBinary = binaryString.padStart(8, '0');
  return filledBinary

}

function assignCellsAlive(stringBinary) {
  let mapAllRules = new Map();
  let aliveRules = [];
  let arrayBinary = Array.from(stringBinary);
  for (let i = 0; i < RULESARRAY.length; i++) {
    mapAllRules.set(RULESARRAY[i], arrayBinary[i])
  }

  for (const value of mapAllRules) {
    if (value[1] === '1') {
      aliveRules.push(value[0]);
    }
  }

  return aliveRules;
}
function rules(number) {
  if (number < 0 || 255 < number ) {
    return 'Error';
  }

  let stringBinary = convertToBinary(number);
  let rulesAlive = assignCellsAlive(stringBinary);
  return rulesAlive;
}

export {
  rules
}