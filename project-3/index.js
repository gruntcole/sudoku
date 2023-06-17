// Not sure why, but curly braces breaks some of the code where normally I would add if || if else || else 


function getRow(sPuzz, row) { 
    return sPuzz[row]; 
};


function getColumn(sPuzz, col) {
  let column = [];
  for (let i = 0; i < sPuzz.length; i++) {
    //let row = sPuzz[i];
    column.push(sPuzz[i][col]);
  }
  return column;
}

function getSection(sPuzz, x, y) {
  let section = [];
  for (let row = y * 3; row < y * 3 + 3; row++) //skip and grap thsoe three
   
    section.push(...sPuzz[row].slice(x * 3, x * 3 + 3))//then do same
  return section;
}

function includes1to9(arr) {
  for (let num = 1; num <= 9; num++)//count
    if (arr.indexOf(num) === -1) return false;
  return true;
}


function isValidSodoku(sPuzz) {
  for (let i = 0; i < 9; i++)
//     if (!includes1to9(getRow(sPuzz, i)) || !includes1to9(getColumn(sPuzz, i)) || !includes1to9(getSection(sPuzz, i % 3, Math.floor(i / 3)))) return false;
//   return true;
if (includes1to9(getRow(sPuzz, i)) && includes1to9(getColumn(sPuzz, i)) && includes1to9(getSection(sPuzz, i % 3, Math.floor(i / 3)))) return true;
  return false;

}

function isSame(sPuzz1, sPuzz2) {
    for (let i = 0; i < 81; i++)
      if (sPuzz1[Math.floor(i / 9)][i % 9] !== sPuzz2[Math.floor(i /9)][i % 9]) return false;
      // just needs to be divide evenly for total puzz lengths
    return true;
//     for (let i = 0; i < 81; i++)
//     if (sPuzz1[Math.floor(i / 9)][i % 9] === sPuzz2[Math.floor(i /9)][i % 9]) return true;
//   return false;
// does not work

  }