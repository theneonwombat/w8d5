class Clock {
  constructor() {
    let date = new Date();// 1. Create a Date object.
    this.time = [date.getHours(), date.getMinutes(), date.getSeconds()];// 2. Store the hours, minutes, and seconds.
    this.printTime(time)// 3. Call printTime.
    this._tick(time)// 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    let format = this.time.join(":");// Format the time in HH:MM:SS
    console.log(format);// Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

const clock = new Clock();

[b.getHours(), b.getMinutes(), b.getSeconds()]