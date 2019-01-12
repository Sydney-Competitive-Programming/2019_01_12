console.reset = () => process.stdout.write('\033c');

const waitingAni = () => {
  let cols  = process.stdout.getWindowSize()[0]
  let loader  = new Array(cols).fill(' ')
  
  let i = 1;
  let str = ""
  let dir = 1
  setInterval( () => {
    if ( i === cols ) dir = -1
    if ( i === 0 ) dir = 1
    
    i = i + dir
    loader[i- dir] = " "
    loader[i] = "#"
    console.reset()
    console.log(loader.join(""));
  }, 1000 / 60 )  
}

waitingAni()