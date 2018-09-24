class State {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
  }
}

export default State;
