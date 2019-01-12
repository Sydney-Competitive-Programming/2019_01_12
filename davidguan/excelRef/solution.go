package main

import (
	"fmt"
	"strconv"
)

var (
	aASCII    = "A"[0]
	zASCII    = "Z"[0]
	charCount = int("Z"[0] - "A"[0] + 1)
)

func main() {
	excelRef := ""
	fmt.Scan(&excelRef)

	charMap := map[byte]int{}
	for i := aASCII; i <= zASCII; i++ {
		charMap[i] = int(i - aASCII + 1)
	}

	cur := 0
	ok := true
	for ok == true {
		cur = cur + 1
		_, ok = charMap[excelRef[cur]]
	}
	rowStr, colStr := excelRef[cur:], excelRef[:cur]
	row, _ := strconv.Atoi(rowStr)

	col := 0
	for i := 0; i < len(colStr); i++ {
		col *= charCount
		col += charMap[colStr[i]]
	}
	// Mapping stuff from 1-indexed to 0-indexed
	fmt.Printf("(%d, %d)\n", row-1, col-1)
}
