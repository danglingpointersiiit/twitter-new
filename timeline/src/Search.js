import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const text = [
   'Aadhaar',
   'aadhaar'
];

export default class AutoCompleteExampleControlled extends Component {
    state = {
        searchText: '',
    };

    handleUpdateInput = (searchText) => {
        this.setState({
            searchText: searchText,
        });
    };

    handleNewRequest = () => {
        window.location.assign("/aadhaar");
    };

    render() {
        return (
            <div>
                <AutoComplete
                    hintText="Search Twitter"
                    searchText={this.state.searchText}
                    onUpdateInput={this.handleUpdateInput}
                    onNewRequest={this.handleNewRequest}
                    dataSource={text}
                    filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
                    openOnFocus={true}
                />
            </div>
        );
    }
}