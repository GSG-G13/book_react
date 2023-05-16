import React from "react";
class FetchData extends React.Component{
    state={
        data:null
    }
    componentDidMount(){
        const key = 'AIzaSyDOEa3KwP6_wmN4JNjNxL1rkl2kRZwqkzk';
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=sport+subject&&api_key=${key}`)
                .then((result) => result.json() )
                .then((result)=>console.log(result))

    }
    render(){
       return(
         <div>
            Hi
        </div>
       )
    }   

}
export default FetchData;