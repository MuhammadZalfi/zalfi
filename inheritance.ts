class hero {
    health: number = 100;
    speed: number = 100;
    magicalDefense: number = 100;
    physcialDefense: number = 100;
    basicAttack: number = 100;

    getInformationHero(): string (
        return `darahnya $(this.health), speed $(this.speed)`;
    
    )

    getAttacked(damage: number): number {
        this.health = this.health - damage;
        return this.health;
    }
}

const hero = new hero();

console.log(hero.getInformationHero());
console.log(hero.getAttacked(20));