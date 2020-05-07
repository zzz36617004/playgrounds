import React, { Component } from 'react';
import '../scss/App.scss';
import Counter from './Counter.jsx';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      books: [],
      title: '',
      author: '',
    };
  }

  componentDidMount() {
    this.getBook();
  }

  getBook = () => {
    fetch('/books')  //fetch vs axios 
      .then(res => res.json())
      .then(books => this.setState({ books }));
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick = () => {
    const { title, author } = this.state;
    
    fetch('/books', {
      method: 'POST',
      body: JSON.stringify({
        title,
        author
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(res => this.getBook());
    document.getElementById('title').value = "";  //domselect fuck
    document.getElementById('author').value = "";
  }

  render() {
    return (
      <div>
        <h1>BOOK</h1>
        <p>
          ID : <input id="title" name="title" onChange={this.handleChange}></input><br/>
          제목 : <input id="title" name="title" onChange={this.handleChange}></input><br/>
          저자 : <input id="author" name="author" onChange={this.handleChange}></input><br/>
          <button onClick={this.handleClick}>등록</button>
        </p>
        {this.state.books.map(book => 
          <div key={book._id}>{book.title} {book.author}</div>
        )}
        <Counter />
      </div>
    );
  }
}

export default App;
