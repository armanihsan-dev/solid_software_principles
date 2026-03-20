interface Character {
    name: string;
    attack(): void;
    castSpell(): void; // Not all heroes have magic!
    stealth(): void;   // Not all heroes are sneaky!
}

class Warrior implements Character {
    name = "Thor";
    attack() { console.log("Smash!"); }

    // Warriors can't do these! This is a "Fat Interface" problem.
    // violating the ISP as well as SRP
    castSpell() { /* Empty or Error */ }
    stealth() { /* Empty or Error */ }
}

class Mage implements Character {
    name = "Gandalf";
    attack() { console.log("Staff hit!"); }
    castSpell() { console.log("Fireball!"); }

    // Violating the ISP as well as SRP
    stealth() { /* Mage isn't sneaky! */ }
}