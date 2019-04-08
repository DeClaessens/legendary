class Stack {
  gameHistory: any; // The message pushed to history should probably be a class ? I dont know.
  constructor() {
    this.gameHistory = [];
    this.add({ message: 'Stack Initialized' });
  }

  add(data): Promise<any> {
    return Promise.resolve(this.gameHistory.push(data));
  }
}

export default Stack;
