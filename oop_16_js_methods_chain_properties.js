class Pokemon {
    constructor(name, type, height, weight, cp, hp, damage) {
        this.name = name;
        this.type = type;
        this.height = height;
        this.weight = weight;
        this.cp = cp;
        this.hp = hp;
        this.damage = damage;
        this.hit = this.cp;
    }
    data() {
        console.log(this.name + ' is ' + this.type + ' type ' + ' with ' + this.cp + ' cp.');
        return this;
    }
    power() {
        console.log('Power: ' + (this.cp -  this.damage));
        return this;
    }
    attack() {
        this.hit += this.hit;
        console.log('Damage is ' + this.hit);
        return this;
    }
}

var pk1 = new Pokemon('Chirzard', 'Fire', 2.07, 165, 1433, 111, 10);
var pk2 = new Pokemon('Hitmonlee', 'Fighting', 1.75, 56, 1321, 83, 15);

pk1.attack();
pk1.attack();
pk1.attack();

console.log('Chainning for Chirzard');
pk1.data().power().attack().data();
console.log('Chainning for Hitmonlee');
pk2.data().power().attack().data();

document.write('Chainning has occured');