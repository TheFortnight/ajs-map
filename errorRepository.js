export default class ErrorRepository {
  constructor() {
    this.repository = new Map();

    this.repository.set('id1', 'Error1');
    this.repository.set('id2', 'Error2');
    this.repository.set('id3', 'Error3');
  }

  translate(id) {
    if (!this.repository.has(id)) {
      return 'Unknown error';
    }
    return this.repository.get(id);
  }
}
