package main

import (
	"fmt"
	"time"
)

// Go has its own circular linked node list implementation, implement own one for fun.
type circularLinkedNode struct {
	prev, next *circularLinkedNode
	val        int
}

func (node *circularLinkedNode) insert(newNode *circularLinkedNode) {
	newNode.next, newNode.prev = node.next, node
	node.next, node.next.prev = newNode, newNode
}

// For this question, we don't have to worry whether there is only one node left in the list.
func (node *circularLinkedNode) delete() {
	node.prev.next, node.next.prev = node.next, node.prev
}

func solve(lastM, pCount int) {
	currentNode, scoreMap := &(circularLinkedNode{nil, nil, 0}), map[int]int{}
	currentNode.next, currentNode.prev = currentNode, currentNode
	for i := 1; i <= lastM; i++ {
		if i%23 == 0 {
			userID := i%pCount + 1
			for i := 0; i < 7; i++ {
				currentNode = currentNode.prev
			}
			currentNode.delete()
			scoreMap[userID] += i + currentNode.val
			currentNode = currentNode.next
		} else {
			newNode := &(circularLinkedNode{nil, nil, i})
			currentNode.next.insert(newNode)
			currentNode = newNode
		}
	}
	max := 0
	for _, v := range scoreMap {
		if v > max {
			max = v
		}
	}
	fmt.Printf("When there are %d players, last marble is worth %d, highest score is: %d\n", pCount, lastM, max)
}

func main() {
	tStart := time.Now()
	solve(25, 9)
	solve(71920, 403)
	solve(72019, 458)

	// Second problem
	solve(71920*100, 403)
	fmt.Println(time.Since(tStart))
}
