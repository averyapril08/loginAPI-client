import React, { Component } from 'react';
import './MainPage.scss';


class MainPage extends Component {
    state={
        items:[],
        inputText:'',
        searchText:'',
        isColumn1:true,
        isColumn2:false
    }

    render() {
        return (
            <div className="form">
                <h4>ADD AN ITEM</h4>
                <div className="container">
                    <div className="col-md-4">
                        <form>
                            <div className="form-group enter-item">
                                <input className="form-control"
                                    type="text"
                                    placeholder="ENTER ITEM" />
                            </div>

                            <div className="form-group">
                                <select className="form-control" >
                                    <option value="0">Column 1</option>
                                    <option value="1">Column 2</option>
                                </select>
                            </div>
                            <button type="submit" className="btn">ADD ITEM</button>
                            <div className="form-group">
                                <label className="search-label" for="searchItem">Search an Item</label>
                                <div className="submit-container"> 
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="search"
                                    name="searchItem" />
                                <button><i class="fas fa-search"></i></button>
                                </div>
                            </div>
                        </form>

                    </div>
                    <div className="col-md-4">
                        <p>Colum1</p>
                        <ul claaName="col-1">


                        </ul>
                    </div>

                    <div className="col-md-4">
                        <p>Colum2</p>
                        <ul className="col-2">


                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}

export default MainPage;