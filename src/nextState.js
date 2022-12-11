
function joinCells(state) {
  let cells3 = [];
  let cells3String = "";
  for (let i = 0; i < state.length; i++) {
    let before = (state[i-1] ? state[i-1] : state[state.length-1]);
    let now =  (state[i]);
    let after = (state[i+1] ? state[i+1] : state[0]);
    cells3String = before.concat(now).concat(after);
    cells3.push(cells3String);
  }

  return cells3;
}

function compareWithRules(rules, array3Cells) {
  let finalStateArray = [];
  for (const cells of array3Cells) {
    let finalState = '';
    let isRuleIncluded = rules.includes(cells);
    finalState = isRuleIncluded ? 'x' : '-';
    finalStateArray.push(finalState);     
  }

  return finalStateArray;  
}
function nextState(rules, state) {
  let join3Cells = joinCells(state);
  let finalState = compareWithRules(rules, join3Cells);
  return finalState;
}

export {
  nextState
}
