// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health - damage
    }
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health>0) {
        return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage
        if (this.health>0) {
        return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy = []
    saxonArmy = []

    addViking(array) {
        this.vikingArmy.push(array)
    }

    addSaxon(array) {
        this.saxonArmy.push(array)
    }

    vikingAttack() {
        const damage = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength;
        const indexSaxon = Math.floor(Math.random() * this.vikingArmy.length);
        const result = this.saxonArmy[indexSaxon].receiveDamage(damage);
        if (this.saxonArmy[indexSaxon].health<= 0) {
            this.saxonArmy.splice(indexSaxon, 1);
        }
        return result;
    }

    saxonAttack() {
        const damage = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength;
        const indexViking = Math.floor(Math.random() * this.saxonArmy.length);
        const result = this.vikingArmy[indexViking].receiveDamage(damage);
        if (this.vikingArmy[indexViking].health<= 0) {
            this.vikingArmy.splice(indexViking, 1);
        }
        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }

        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }

        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }


}
