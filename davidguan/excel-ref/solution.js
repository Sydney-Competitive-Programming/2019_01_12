var charCount = "Z".charCodeAt(0) - "A".charCodeAt(0) + 1
var aCharCode = "A".charCodeAt(0)

function solve(puzzle) {
  var cur = 0
  while (puzzle[cur] >= "A" && puzzle[cur] <= "Z") {
    cur++
  }
  var colString = puzzle.slice(0, cur)
  var rowString = puzzle.slice(cur)
  var row = Number.parseInt(rowString)

  var col = 0
  for (var i = 0; i < colString.length; i++) {
    col *= charCount
    col += colString[i].charCodeAt(0) - aCharCode + 1
  }

  console.log(`(${row-1}, ${col-1})`)
}

solve("A1")
solve("B1")
solve("A2")
solve("AA10")
solve("AAA10")