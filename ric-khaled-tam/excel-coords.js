
const cellToCoords = cell => {
  //check format
  if ( !RegExp('([A-Za-z]{1,3}[0-9]{1,3})').test(cell) && cell.length > 6){
    throw Error('invalid cell')
  }
  //split
  let x = cell.match(/[A-Za-z]{1,3}/)[0].toUpperCase()
  let y = cell.match(/[0-9]{1,3}/)[0] -1 
  //convert
  x = x.split('')
    .map( letter => letter.charCodeAt() - 64 )
    .reverse()
    .reduce( (a, c, idx) => c * (26 ** idx) + a ) -1

  return ({ x, y })
}

console.log( cellToCoords('A1'), cellToCoords('A1').x === 0 ? 'pass' : 'fail'  )
console.log( cellToCoords('ABC123'), cellToCoords('ABC123').x === 730 ? 'pass' : 'fail' )