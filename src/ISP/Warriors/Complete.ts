interface Character {
    name :String;
    attack():void
}

interface castSpellable {
    castSpell():void;
}
interface stealthable {
    stealth():void;
}



class Warrior implements Character {
    name = "Thor";
    attack() { console.log("Smash!"); }
}

class Mage implements Character , castSpellable{
    name = "Gandalf";
    attack() { console.log("Staff hit!"); }
    castSpell() { console.log("Fireball!"); }
}
