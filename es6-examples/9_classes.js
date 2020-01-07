class Car {
  constructor(name) {
    this.name = name;
  }

  driving() {
    console.log(`${this.name} drives on its own.`);
  }
}

const skoda = new Car('Skoda');
skoda.driving();

class AlfaRomeo extends Car {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  driving() {
    console.log(`${this.name} enjoys a car carrier nearby.`);
  }
}

const giulia = new AlfaRomeo('Giulia');
giulia.driving();
