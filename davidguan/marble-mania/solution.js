function insertNode(current, newNode) {
  newNode.prev = current
  newNode.next = current.next
  current.next.prev = newNode
  current.next = newNode
}

function deleteNode(current) {
  current.prev.next = current.next
  current.next.prev = current.prev
}

function solve(lastM, pCount) {
  scoreMap = {}
  for (var i = 1; i <= pCount; i++) {
    scoreMap[i] = 0
  }
  currentNode = { val: 0 }
  currentNode.prev = currentNode
  currentNode.next = currentNode

  for (var i = 1; i <= lastM; i++) {
    if (i % 23 == 0) {
      var userID = i % pCount + 1
      for (var j = 0; j < 7; j++) {
        currentNode = currentNode.prev
      }
      deleteNode(currentNode)
      scoreMap[userID] += i + currentNode.val
      currentNode = currentNode.next
    } else {
      newNode = { val: i }
      insertNode(currentNode.next, newNode)
      currentNode = newNode
    }
  }

  var max = 0
  for (var i = 1; i <= pCount; i++) {
    if (max < scoreMap[i]) {
      max = scoreMap[i]
    }
  }
  console.log(max)
}

solve(25, 9)
solve(71920, 403)
solve(72019, 458)

// Second problem
solve(71920 * 100, 403)