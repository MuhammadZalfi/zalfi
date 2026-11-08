// =====================================================================
//  SOAL: Mario Bros dengan OOP (TypeScript)
// =====================================================================
//  Mario memiliki atribut: HP, speed, positionX, positionY, invincible,
//  currentForm. Mario dapat berubah menjadi 3 form: 'mario',
//  'super mario', dan 'fire mario'.
//
//  Default: HP = 1, speed = 5, currentForm = 'mario', invincible = false,
//           positionX = 0, positionY = 0
//
//  1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1.
//  2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1,
//     dan dapat menembakkan bola api.
//  3. SuperStar (Bintang): Mario kebal terhadap serangan.
//  4. Diserang: HP - 1 dan kembali ke form 'mario'.
//     Jika sedang kebal, serangan tidak berpengaruh.
//  5. Bergerak ke kanan: positionX + speed.
//  6. Bergerak ke kiri: positionX - speed.
//
//  Buat class, attribute, method, dan object.
//  Terapkan inheritance dan polymorphism.
// =====================================================================

// Kerjakan Quiznya Disini

class Mario {
    hp: number = 1;
    speed: number = 5;
    positionX: number = 0;
    positionY: number = 0;
    invincible: boolean = false;
    currentForm: string = "mario";

    constructor() {
        this.hp = 1;
        this.speed = 5;
        this.positionX = 0;
        this.positionY = 0;
        this.invincible = false;
        this.currentForm = "mario";
    }

    eatMushroom(): void {
        this.currentForm = "super mario";
        this.hp++;
    }

    eatFireFlower(): void {
        this.currentForm = "fire mario";
        this.hp++;
    }

    shootFireball(): void {
        console.log("Mario belum bisa menembakkan bola api.");
    }

    eatStar(): void {
        this.invincible = true;
        console.log("Mario menjadi kebal!");
    }

    attacked(): void {
        if (this.invincible) {
            console.log("Mario kebal, serangan tidak mempan!");
            return;
        }

        this.hp--;
        this.currentForm = "mario";

        if (this.hp <= 0) {
            this.hp = 0;
            console.log("Game Over!");
        } else {
            console.log("Mario terkena serangan!");
        }
    }

    moveRight(): void {
        this.positionX += this.speed;
    }

    moveLeft(): void {
        this.positionX -= this.speed;
    }
}

// CLASS TURUNAN SUPERMARIO
class SuperMario extends Mario {
    constructor() {
        super();
        this.eatMushroom();
    }

    override shootFireball(): void {
        console.log("Super Mario belum bisa menembakkan bola api!");
    }
}

// CLASS TURUNAN FIREMARIO
class FireMario extends Mario {
    constructor() {
        super();
        this.eatFireFlower();
    }

    override shootFireball(): void {
        console.log("Fire Mario menembakkan bola api!");
    }
}

// PEMBUATAN OBJECT
const myMario = new Mario();
const superMario = new SuperMario();
const fireMario = new FireMario();

// PENGUJIAN PROGRAM
console.log("=== MARIO BIASA ===");
myMario.shootFireball();

console.log("=== SUPER MARIO ===");
superMario.shootFireball();

console.log("=== FIRE MARIO ===");
fireMario.shootFireball();

console.log("=== FIRE MARIO DISERANG ===");
fireMario.attacked();

console.log("=== MENDAPATKAN SUPER STAR ===");
fireMario.eatStar();
fireMario.attacked();

console.log("=== STATUS OBJECT ===");
console.log(myMario);
console.log(superMario);
console.log(fireMario);

export {};
