"use sctrict";

class extendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision=1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
};

let lowResolutionClock = new extendedClock({
  template: 'h:m:s',
  precision: 10000
});

lowResolutionClock.start();