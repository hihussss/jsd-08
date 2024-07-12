import { Team } from "../class/set.js";
import { Character } from "../class/character.js";


test('add', () => {
    const team = new Team();
    const Bowman = new Character('Лучник', 'Bowman', 25, 25);
    // const Swordsman = new Character('Мечник', 'Swordsman', 10, 40);

    team.add(Bowman);
    expect(team.members).toEqual(new Set([Bowman]));
})

test('addError', () => {
    const team = new Team();
    const Bowman = new Character('Лучник', 'Bowman', 25, 25);
    team.add(Bowman);
    expect(() => team.add(Bowman)).toThrow();
})

test('addAll', () => {
    const team = new Team();
    const Bowman = new Character('Лучник', 'Bowman', 25, 25);
    const Swordsman = new Character('Мечник', 'Swordsman', 10, 40);
    team.addAll(Bowman, Swordsman);
    expect(team.members).toEqual(new Set([Bowman, Swordsman]));
})

test('toArray', () => {
    const team = new Team();
    const Bowman = new Character('Лучник', 'Bowman', 25, 25);
    const Swordsman = new Character('Мечник', 'Swordsman', 10, 40);
    team.addAll(Bowman, Swordsman);
    expect(team.toArray()).toEqual([Bowman, Swordsman]);
})
