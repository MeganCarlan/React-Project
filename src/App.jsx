import './App.css';
import { Component } from "react";
import FilmsList from './components/filmsList';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    }
  }

  onSubmit(event) {
    event.preventDefault();
    let newList = [...this.state.list, this.state.text];
    this.setState({list: newList, text: ""});
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" id="text" name="text" value={this.state.text} onChange={(event) => this.setState({text: event.target.value})}></input>
          <button type="submit">Add</button>
        </form>
        <ul>
          <FilmsList />
        </ul>
      </div>
    );
  }
}

export default App;
