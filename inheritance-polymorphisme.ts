class PublicEnemy{
    hp: number ;
    attack: number;
    defense: number;
    speed: number;

    constructor(hp: number, attack: number, defense: number, speed: number) {
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
    }

    basicAttack(): number {
        return (this.attack = 10);
    }
}


class Lord extends PublicEnemy{

    constructor() {
        super(16000, 100, 100,100)
    }
    areaEffect(): void {
        this.attack;
    }
}

class Turtle extends PublicEnemy{
    basicAttack(): number {
        return (this.attack = 70);
    }
}

class BlueWolf extends PublicEnemy{
    basicAttack(): number {
        return (this.attack = 50);
    }
}

class RedDragon extends PublicEnemy{
    basicAttack(): number {
        return (this.attack = 10);
    }
}

