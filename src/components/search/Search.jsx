import React from "react";
import FetchData from "../Fetch/Fetch";
class Search extends React.Component {
    state = {
        search: "",
    }
    render() {
        return (
            <div className="search-box">
                <input type="text" className="search-input" onChange={(e) => this.setState({ search: e.target.value })} value={this.search} />
                <FetchData search={this.state.search} />
            </div>
        )
    }

}

export default Search;