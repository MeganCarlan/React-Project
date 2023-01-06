import { Component } from "react";

class FilmsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [],
        }
    }

    getFilms() {
        fetch("https://studioghibliapi-d6fc8.web.app/films")
        .then((res) => res.json())
        .then((list) => this.setState({list}))
        .catch((err) => console.error(err))
    }

    componentDidMount() {
        this.getFilms();
    }

    render() {
        return (
        <ul>
            {this.state.list.map((item) => <li key={item.id}>{item.title}</li>)}
        </ul>
        )
    }
}

export default FilmsList;
