//task 1

class Car {
  carModel: string;
  protected engineType: string;

  constructor(carModel: string, engineType: string) {
    this.carModel = carModel;
    this.engineType = engineType;
  }
}

class SportCar extends Car {
  maxSpeed: number;
  carCost: number;

  constructor(
    carName: string,
    engineType: string,
    maxSpeed: number,
    carCost: number
  ) {
    super(carName, engineType);
    this.maxSpeed = maxSpeed;
    this.carCost = carCost;
  }

  showStats() {
    console.log(
      `This is ${this.carModel}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}`
    );
  }
}

class luxuryCar extends Car {
  maxSpeed: number;
  private carCost: number;

  constructor(
    carName: string,
    engineType: string,
    maxSpeed: number,
    carCost: number
  ) {
    super(carName, engineType);
    this.maxSpeed = maxSpeed;
    this.carCost = carCost;
  }

  showStats() {
    console.log(
      `This is ${this.carModel}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}`
    );
  }
}

const porscheGT3RS = new SportCar("Porsche GT3 RS", "Gasoline", 435, 10000);
const paganiHuayra = new luxuryCar("Pagani Huayra", "Gasoline", 498, 5000);

porscheGT3RS.showStats();
paganiHuayra.showStats();

//task 2

const firstMan = {
  firstName: "Oleg",
};

const secondMan = {
  firstName: "Mateusz",
};

function sayHi() {
  console.log(`My name is ${this.firstName}`);
}

sayHi.call(firstMan);
sayHi.call(secondMan);

//task 3

const carA = {
  doorsAmount: 5,
  wheelSide: "left-hand",
};

const carB = {
  doorsAmount: 2,
  wheelSide: "right-hand",
};

function carInfo() {
  console.log(
    `This car has ${this.doorsAmount} doors and this is ${this.wheelSide} drive car`
  );
}

const carDetailsA = carInfo.bind(carA);
const carDetailsB = carInfo.bind(carB);

carDetailsA();
carDetailsB();
