import React, { Component } from "react";

interface State {
  count: number;
}

export default class App extends Component<{value?: null | undefined }, State> {
  constructor(props: {value?: null | undefined}) {
    super(props);
    this.state = {
      count:0
    }
  }

  Add() {
    this.setState({count: this.state.count + 1})
  }

  greetUser(user: string, e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    console.log(`greeting ${user}`);
    alert("HELLO")
  }
  
  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={() => this.Add()}>tambah</button>
        <button onClick={this.greetUser.bind(this, "habib")}>greet</button>
      </>
    );
  }
}
