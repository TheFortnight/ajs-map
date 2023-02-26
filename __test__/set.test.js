import Character from "../character.js";
import Team from "../set.js";

const character1 = new Character('Alex', 100);
const character2 = new Character('Alex', 100);
const character3 = new Character('Boris', 150);

test('add one character', () => {
    let team = new Team();
    team.add(character1);
    expect(team.members.size).toEqual(1);
});

test('add two unique characters', () => {
    let team = new Team();
    team.add(character1);
    team.add(character3);
    expect(team.members.size).toEqual(2);
});

test('add two same characters', () => {
    let team = new Team();
    team.add(character1);
    expect(function(){ team.add(character1); }).toThrow(new Error("Character already exists!"));
});

test('add all unique characters', () => {
    let team = new Team();
    team.addAll(character1, character2, character3, character3, character3);
    expect(team.members.size).toEqual(3);
});

test('add all repeated characters', () => {
    let team = new Team();
    team.addAll(character1, character2, character3, character3, character3);
    expect(team.members.size).toEqual(3);
});

test('toArray', () => {
    let team = new Team();
    team.addAll(character1, character2, character3, character3, character3);
    let result = team.toArray();
    expect(Array.isArray(result)).toEqual(true);
});