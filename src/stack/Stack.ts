class Stack {
  history: any; // The message pushed to history should probably be a class ? I dont know.
  constructor() {
    this.history = [];
    this.add({ message: 'Stack Initialized' });
  }

  add(data) {
    this.history.push(data);
    console.log(this.history);
  }
}

export default Stack;
