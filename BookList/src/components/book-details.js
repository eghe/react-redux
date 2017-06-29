import React from 'react'
import { connect } from 'react-redux'

class BookDetails extends React.Component {

    render() {
      console.log(this.props.selected);
      return (
        <div>
          {this.props.selected.book? this.props.selected.book.title:'NO BOOK'}
        </div>
      );
    }

}

function mapStateToProps(state) {
  return {
    selected: state.selected
  }
}

export default connect(mapStateToProps)(BookDetails);
