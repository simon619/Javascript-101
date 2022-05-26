function Pokemon(name, type, height, weight, damage) {
    const hitpoint = 10
    this.name = name;
    this.type = type;
    this.height = height;
    this.weight = weight;
    this.currentLife = 0;
}

Pokemon.prototype.hit = function() {
    this.currentLife += 100;
    console.log('Current life is ' + this.currentLife);
    return this;
}

Pokemon.prototype.getHit = function() {
    this.currentLife -= 100;
    console.log('Current life is ' + this.currentLife);
    return this;
}

var pk1 = new Pokemon('Chirzard', 'Fire', 2.07, 165);
var pk2 = new Pokemon('Hitmonlee', 'Fighting', 1.75, 56);

console.log(pk1);
pk1.hit().hit().getHit();

document.write('Hit and hurt');