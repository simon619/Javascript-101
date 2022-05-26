class Pokemon {
    constructor(name, type, height, weight, cp, hp, damage) {
        this.name = name;
        this.type = type;
        this.height = height;
        this.weight = weight;
        this.cp = cp;
        this.hp = hp;
        this.damage = damage;
    }
    data() {
        console.log(this.name + ' is ' + this.type + ' type ' + ' with ' + this.cp + ' cp.');
    }
    power() {
        console.log('Power: ' + (this.cp -  this.damage));
    }
    level(p) {
        console.log(this.name + ' is a ' + p + ' Pokemon');
    }
}
var pk1 = new Pokemon('Chirzard', 'Fire', 2.07, 165, 1433, 111, 10);
var pk2 = new Pokemon('Hitmonlee', 'Fighting', 1.75, 56, 1321, 83, 15);

console.log(pk1);
console.log(pk1.name);
console.log(pk2);
console.log(pk2.type);

document.write(pk1.name);
console.log('Method testing');

pk1.data();
pk1.power();
pk1.level('X');
pk2.data();
pk2.power();