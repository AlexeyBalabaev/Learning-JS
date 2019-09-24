"use sctrict";

class Clock {
  constructor({template}) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let min = date.getMinutes();
    if (min < 10) min = '0' + min;

    let sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    let output = this.template
      .replace('h', hours)
      .replace('m', min)
      .replace('s', sec);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer)
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000)
  }
}

let clock = new Clock({template: 'h:m:s'});
clock.start();