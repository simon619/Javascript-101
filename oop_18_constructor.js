function Pokemon(name, type, height, weight, cp, hp, damage) {
        const hitpoint = 10
        this.name = name;
        this.type = type;
        this.height = height;
        this.weight = weight;
        this.cp = cp;
        this.hp = hp;
        this.damage = damage;
        this.getHit = function() {
            console.log('Current Life is ' + (this.hp -= hitpoint));
        }
}
var pk1 = new Pokemon('Chirzard', 'Fire', 2.07, 165, 1433, 111, 10);
var pk2 = new Pokemon('Hitmonlee', 'Fighting', 1.75, 56, 1321, 83, 15);
var pk3 = new Pokemon('Blastoise', 'Water', 1.6, 85, 1402, 115, 15);
var pk4 = new Pokemon('Venusaur', 'Leaf', 2, 100, 1166, 162, 20);

console.log(pk1);
pk1.getHit();

document.write('Hit is hurt');