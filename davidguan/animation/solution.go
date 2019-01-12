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

	barLength, goBack := 0, false
	for {
		formatStr := fmt.Sprintf("%%-%ds\r", lengthMax)
		fmt.Printf(formatStr, bar[:barLength])
		if goBack {
			barLength = barLength - 1
			goBack = barLength != 0
		} else {
			barLength = barLength + 1
			goBack = barLength == lengthMax
		}

		time.Sleep(time.Millisecond * 150)
	}
}
