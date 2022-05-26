function Pokemon(name, type, height, weight) {
    this.name = name;
    this.type = type;
    this.height = height;
    this.weight = weight;
    this.life = 0;
}
Pokemon.prototype.hit = function() {
    console.log('Current life is ' + (this.life += 10));
    return this;
}    

Pokemon.prototype.getHit = function() {
    console.log('Current life is ' + (this.life -= 10));
    return this;
}

function MoveToProfessorOak(...args) {
    Pokemon.apply(this, args);
    this.accept = false;
}

MoveToProfessorOak.prototype = Object.create(Pokemon.prototype);
    MoveToProfessorOak.prototype.sendThePokemon = function(pokemon) {
        pokemonDB = pokemonDB.filter(p => {
            return p.name != pokemon.name;
        });    
    }


var pk1 = new Pokemon('Chirzard', 'Fire', 2.07, 165);
var pk2 = new Pokemon('Hitmonlee', 'Fighting', 1.75, 56);
var pk3 = new Pokemon('Blastoise', 'Water', 1.6, 85);
var pk4 = new Pokemon('Venusaur', 'Leaf', 2.0, 100);

var pokemonDB = [pk1, pk2, pk3, pk4];

console.log('Before Sending ' + pokemonDB)
for (i = 0; i < pokemonDB.length; i++) {
    console.log('name: ' + pokemonDB[i].name + ' and life: ' + pokemonDB[i].life);
}

pk1.hit().hit().hit().hit().getHit().hit().hit().getHit().getHit().hit();
pk2.hit().hit().getHit().hit();

console.log('After Sending ' + pokemonDB);
var oak = new MoveToProfessorOak('Professor Oak', 'nothing', 1.7, 65);
oak.sendThePokemon(pk2);

for (i = 0; i < pokemonDB.length; i++) {
    console.log('name: ' + pokemonDB[i].name + ' and life: ' + pokemonDB[i].life);
}

document.write('Tranfering');