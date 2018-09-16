import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMap } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: 'Seoul' };
    }
	
	componentDidMount(){
		this.props.fetchMap(this.state.term);
	}

    onInputChange = (e) => {
        this.setState({
            term: e.target.value,
        });
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        //we need to go and fetch  map data
		this.props.fetchMap(this.state.term);
        this.setState({ term: '' });
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group" >
                <input
                    placeholder="Get the Picture in your favorite words"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchMap }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);