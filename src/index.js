
import { Character } from "./class/character.mjs";
import { Team } from "./class/set.mjs";


const Bowman = new Character('Лучник', 'Bowman', 25, 25);
// const Swordsman = new Character('Мечник', 'Swordsman', 10, 40);
// const Magician = new Character('Маг', 'Magician', 10, 40);
// const Daemon = new Character('Демон', 'Daemon', 10, 40);
// const Undead = new Character('Нежить', 'Undead', 10, 40);
// const Zombie = new Character('Зомби', 'Zombie', 10, 40);



const German = new Team();
German.add(Bowman);

console.log(German)