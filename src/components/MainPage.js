import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, getItems } from '../actions/itemAction';
import './MainPage.scss';


class MainPage extends Component {
    state = {
        inputText: '',
        searchText: '',
        columnNum: "1"
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChange = (e) => {
        this.setState({
            columnNum: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { inputText, columnNum } = this.state;
        const newItem = { inputText, columnNum };
        this.props.addItem(newItem);
    }
    searchSubmit = (e) => {
        e.preventDefault();
        const { searchText } = this.state;
    }

    componentDidMount() {
        this.props.getItems();
    }
   

    render() {
        const { items } = this.props;
        let column1;
        let column2;
        column1 = (items.filter(item => item.columnNum === "1").map(item =>(
                <li key={item._id}>{item.inputText}</li>)))
       
        column2 = (items.filter(item => item.columnNum === "2").map(item =>(
            <li key={item._id}>{item.inputText}</li>

        )))
                
            
        

        return (
            <div className="form">
                <h4>ADD AN ITEM</h4>
                <div className="container">
                    <div className="col-md-4">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group enter-item">
                                <input className="form-control"
                                    type="text"
                                    placeholder="ENTER ITEM"
                                    name="inputText"
                                    value={this.state.inputText}
                                    onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <select value={this.state.columnNum} onChange={this.handleChange} className="form-control" >
                                    <option value="1" name="1" >Column 1</option>
                                    <option value="2" name="2" >Column 2</option>
                                </select>
                            </div>
                            <button type="submit" className="btn">ADD ITEM</button>
                        </form>
                        <form onSubmit={this.searchSubmit}>
                            <div className="form-group">
                                <label className="search-label" htmlFor="searchItem">Search an Item</label>
                                <div className="submit-container">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="search"
                                        name="searchText"
                                        value={this.state.searchText}
                                        onChange={this.onChange}
                                    />
                                    <button><i className="fas fa-search"></i></button>
                                </div>
                            </div>
                        </form>

                    </div>
                    <div className="col-md-4">
                        <p>Colum1</p>
                        <ul className="col-1">
                            {column1}

                        </ul>
                    </div>

                    <div className="col-md-4">
                        <p>Colum2</p>
                        <ul className="col-2">
                        {column2}

                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items
})

export default connect(mapStateToProps, { addItem, getItems })(MainPage)