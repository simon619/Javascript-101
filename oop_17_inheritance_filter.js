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

class MoveToProfessorOak extends Pokemon {
    sendThePokemon(pokemon){
        pokeDB = pokeDB.filter(p => {
            return p.name != pokemon.name;
        })
    }
}

var pk1 = new Pokemon('Chirzard', 'Fire', 2.07, 165, 1433, 111, 10);
var pk2 = new Pokemon('Hitmonlee', 'Fighting', 1.75, 56, 1321, 83, 15);
var pk3 = new Pokemon('Blastoise', 'Water', 1.6, 85, 1402, 115, 15);
var pk4 = new Pokemon('Venusaur', 'Leaf', 2, 100, 1166, 162, 20);

var pokeDB = [pk1, pk2, pk3, pk4];
console.log('Before sending ' + pokeDB);
for (i = 0; i < pokeDB.length; i++) {
    console.log(pokeDB[i].name);
}

var oak = new MoveToProfessorOak();
oak.sendThePokemon(pk2);
console.log('After sending ' + pokeDB);
for (i = 0; i < pokeDB.length; i++) {
    console.log(pokeDB[i].name);
}

document.write('Sending has been done');