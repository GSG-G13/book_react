import React from "react";
// import FetchData from "../Fetch/Fetch";
class Card extends React.Component{
    componentDidUpdate(){
        console.log(this.props.data);
    }
    render(){
        // if (!this.state.data) return <div>Loading...</div>;          
          return <div>
                {this.props.data.map((item)=>{
                    // <div>{items}</div>
                    {console.log(item.items ,"hello Yasser")}
                })}
             </div>;
    }
}
export default Card;