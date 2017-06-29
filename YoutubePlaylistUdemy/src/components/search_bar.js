import React from 'react'

/*
need to create class because maybe we want to specify a function
that will be called when input something
const SearchBar = () => {
  return <input />
}
*/

/*
  using class, the component knows its state,
  communicates with other components etc
*/

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  // this is how we declare functions
  render() {
    //return <input onChange = {this.onInputChange}/>;
    //return <input onChange = {(event) => console.log(event.target.value) } />
    return (
      <div className="search-bar">
        <input
          onSubmit = {() => this.props.onSearchTermChanged(this.state.term)}
          value = {this.state.term}
          onChange = {event => this.onChangeInput(event.target.value)}
         />
      </div>
    );
  }

  onChangeInput(term) {
    this.setState({term});
    this.props.onSearchTermChanged(term);
  }

  onInputChange(event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    console.log('-----------------');
  }
 }

export default SearchBar;
