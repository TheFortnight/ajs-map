export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Character already exists!');
    } else {
      this.members.add(character);
    }
  }

  addAll(...chars) {
    chars.forEach((char) => {
      this.members.add(char);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
