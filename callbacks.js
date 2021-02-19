class Clock {
  constructor() {
    let date = new Date();// 1. Create a Date object.
    this.time = [date.getHours(), date.getMinutes(), date.getSeconds()];// 2. Store the hours, minutes, and seconds.
    this.printTime()// 3. Call printTime.
    setInterval(this._tick.bind(this), 1000)// 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    let format = this.time.join(":");// Format the time in HH:MM:SS
    console.log(format);// Use console.log to print it.
  }

  _tick() {
    // debugger
   ++this.time[2] // 1. Increment the time by one second.
   if (this.time[2] === 60) {
     this.time[2] = 0;
     this.time[1] += 1;
   }
    if (this.time[1] === 60) {
      this.time[1] = 0;
      this.time[0] += 1;
    }

    if (this.time[0] === 13) {
      this.time[0] = 1
    }
    this.printTime()// 2. Call printTime.
  }
}

// console.log("taco")

const clock = new Clock();

// clock.printTime()

// clock._tick()

// clock.printTime()
