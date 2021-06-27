import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { addQuote } from '../actions/quotes';
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            {this.props.quotes.map(quote=> 
                <QuoteCard 
                key = {quote.id}
                id = {quote.id}
                quote={quote} remove={this.props.removeQuote} 
                add={this.props.addQuote} upvote={this.props.upvoteQuote} downvote={this.props.downvoteQuote}
                votes={quote.votes}
                />
                
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      quotes: state.quotes
  }
}
export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
