// Dogs
// TODO: define the Dog class here
class Dog {
    constructor(name, species, size) {
        this.name = name
        this.species = species
        this.size = size
    }
    bark() {
        return this.size > 60 ? "Grrr! Grrr!" : "Woof! Woof!"
    }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);


// Character inventory
class Character {

    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
      this.gold = 10 // New characters starts with 10 golds
      this.key = 1 // New characters starts with 1 key(s)
    }

    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          console.log(
            `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.gold} gold and ${target.key} key(s)`
          );
          this.xp += bonusXP;
          this.gold += target.gold
          target.gold = 0
          this.key += target.key
          target.key = 0
        }
      } else {
        console.log(`${this.name} can't attack (they've been eliminated)`);
      }
    }

    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this.strength} as strength, ${this.xp} XP points, ${this.gold} gold and ${this.key} key(s)`;
    }
}
const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());


// Account list
class Account {
    constructor(name) {
        this.name = name
        this.balance = 0 // New accounts starts with 0 balance
    }
    credit(val) {
        this.balance += val
    }
    describe() {
        return `owner: ${this.name}, balance ${this.balance}`
    }
}
const sean = new Account('Sean')
const brad = new Account('Brad')
const georges = new Account('Georges')
let accounts = [sean, brad, georges]
sean.credit(1000)
brad.credit(1000)
georges.credit(1000)
sean.describe()
brad.describe()
georges.describe()