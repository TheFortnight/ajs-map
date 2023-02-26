import Character from '../character.js';
import Team from '../set.js';

const character1 = new Character('Alex', 100);
const character2 = new Character('Alex', 100);
const character3 = new Character('Boris', 150);

const team = new Team();

team.add(character1);
team.addAll(character1, character2, character3, character3, character3);

console.log(team.members.size);
