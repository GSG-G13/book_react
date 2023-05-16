import React from "react";

class FetchData extends React.Component {
    state = {
        data: null
    }
    componentDidMount() {
        const { search } = this.props;
        getData(search).then((data) => this.setState({ data }))
    }

    componentDidUpdate(prevProps) {
        const { search } = this.props;
        if (prevProps.search !== search) {
            getData(search).then((data) => this.setState({ data }))
        }
    }

    render() {
        return (
            <div>
             
            </div>
        )
    }

}
function getData(search) {

    const key = 'AIzaSyDOEa3KwP6_wmN4JNjNxL1rkl2kRZwqkzk';
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}+subject&&api_key=${key}`)
        .then((result) => result.json())
    .then((data)=>console.log(data))
        
    
}

export default FetchData;