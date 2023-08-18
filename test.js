class Phone {
  constructor(model) {
    this.model = model;
  }

  #calculateMegapixel() {
    console.log(Math.floor((this.model * 1080) / (2436 / 9) + Math.random()));
  }

  call() {
    console.log(`Calling ${calculateMegapixel()}...`);
  }
}

const iphone = new Phone("13 pro max");
iphone.call();

// function Phone() {
//   let calculateMegapixel = function () {
//     return Math.floor((this.model * 1080) / (2436 / 9) + Math.random());
//   };

//   this.call = () => {
//     console.log(`Calling ${this.model}.. calculateMegapixel().`);
//   };
// }
