import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class Search extends Component {
    state = {
        dataSource: [],
    };

    handleUpdateInput = (value) => {
        this.setState({
            dataSource: [
               'Aadhaar'
            ],
        });
    };

    render() {
        return (
            <div>
                <AutoComplete
                    hintText="Type anything"
                    dataSource={this.state.dataSource}
                    onUpdateInput={this.handleUpdateInput}
                   
                />
                
            </div>
        );
    }
}