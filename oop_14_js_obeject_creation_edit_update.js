var pokemon = {
    name: 'Chirzard',
    height: 2.07,
    data() {
        console.log('Name of the pokemon is ' + this.name + 'and it\'s height is ' + this.height);
    },
    moves: {
        framethrower: 120,
        dragon_tail: 90
    },
    attack() {
        console.log('Hitpoints ' + (this.moves.dragon_tail + this.moves.framethrower));
    }
};

console.log(pokemon);
console.log('\n');
console.log(pokemon.name);
console.log('\n');
console.log(pokemon.attack());
console.log('\n');
console.log(pokemon.moves.framethrower);
console.log('edit begins');
pokemon.height = 3.03
console.log(pokemon);
console.log('Adding another attribute');
pokemon.weight = 199;
console.log(pokemon);

document.write(pokemon.name)