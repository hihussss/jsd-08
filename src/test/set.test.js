import { Team } from "../class/set.mjs";
import { Character } from "../class/character.mjs";


test('add', () => {
    const team = new Team();
    const character = new Character('Лучник', 'Bowman', 25, 25);
    team.add(character);
    expect(team.toArray().length).toBe(1);
})