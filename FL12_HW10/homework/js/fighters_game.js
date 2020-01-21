function Fighter(obj) {
    const name = obj.name;
    const damage = obj.damage;
    const hp = obj.hp;
    const strength = obj.strength;
    const agility = obj.agility;
    const PERCENTS = 100;
    let health = obj.hp;
    let win = 0;
    let loss = 0;

    function attack(defender) {
        if (Math.random() * PERCENTS > defender.getStrength() + defender.getAgility()) {
            defender.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }

    function heal(points) {
        health = health + points > hp ? hp : health + points;
    }

    function dealDamage(points) {
        health = health - points > 0 ? 0 : health - points;
    }

    return {
        getName: () => name,
        getDamage: () => damage,
        getHealth: () => health,
        getStrength: () => strength,
        getAgility: () => agility,
        logCombatHistory: () => console.log(`Name: ${name}, Wins: ${win}, Losses: ${loss}`),
        attack,
        heal,
        dealDamage,
        addWin: () => win++,
        addLoss: () => loss++
    }
}

function battle(fighter1, fighter2) {
    if (!fighter1.getHealth()) {
        console.log(`${fighter1.getName()} is dead and can't fight.`);
    }
    if (!fighter2.getHealth()) {
        console.log(`${fighter2.getName()} is dead and can't fight.`);
    }
    while (fighter1.getHealth() && fighter2.getHealth()) {
        fighter1.attack(fighter2);
        if (!fighter2.getHealth()) {
            fighter1.addWin();
            fighter2.addLoss();
            console.log(`${fighter1.getName()} has won!`);
        } else {
            fighter2.attack(fighter1);
        }
        if (!fighter1.getHealth()) {
            fighter2.addWin();
            fighter1.addLoss();
            console.log(`${fighter2.getName()} has won!`);
        }
    }
}

/*
const fighter1 = new Fighter({ name: 'Maximus', damage: 20, hp: 100, strength: 20, agility: 15 });
const fighter2 = new Fighter({ name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 20 });

battle(fighter1, fighter2);
*/
