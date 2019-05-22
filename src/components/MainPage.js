import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, getItems,delItem} from '../actions/itemAction';
import { addLog } from '../actions/logAction';
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
        const txt={text: inputText+" is added in column " + columnNum} ;
        this.props.addItem(newItem);
        this.props.addLog(txt);

    }

    delete = (id,txt,col)=>{
          this.props.delItem(id);
          const text= {text: txt+" in column " + col +" is deleted."}
          this.props.addLog(text);    
    }
 

    componentDidMount() {
        this.props.getItems();
    }
   

    render() {
        const { items } = this.props;
        const { searchText } = this.state;
        const newItems  = items.filter(item =>item.inputText.indexOf(searchText)>-1)
        let column1;
        let column2;
        column1 = (newItems.filter(item => item.columnNum === "1").map(item =>(
                <li key={item._id}>{item.inputText}<button onClick={()=>this.delete(item._id,item.inputText, "1")}>x</button></li>)))
       
        column2 = (newItems.filter(item => item.columnNum === "2").map(item =>(
            <li key={item._id}>{item.inputText}<button onClick={()=>this.delete(item._id,item.inputText, "2")}>x</button></li>

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
                        <form >
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
    items: state.items,
    
})

export default connect(mapStateToProps, { addItem, getItems,delItem,addLog})(MainPage)