package main

import (
	"fmt"
	"os"
	"strconv"
	"time"
)

func main() {
	lengthMax := 10
	if len(os.Args) > 1 {
		lengthMax, _ = strconv.Atoi(os.Args[1])
	}

	fmt.Println("Some CPU intensive work going on, so we display a loading bar for u :)")
	fmt.Println("The max length for the loading bar:", lengthMax)
	bar := ""
	for i := 0; i < lengthMax; i++ {
		bar += "#"
	}

	barLength := 0
	for {
		time.Sleep(time.Millisecond * 300)
		formatStr := fmt.Sprintf("%%-%ds\r", lengthMax)
		fmt.Printf(formatStr, bar[:barLength])
		barLength = (barLength + 1) % 11
	}
}
