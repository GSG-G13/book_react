import React from "react";
// import FetchData from "../Fetch/Fetch";
class Card extends React.Component{
   

    render() {
        return <ul>
            {this.props?.data[0]?.items?.map((e, i) => {
                   return <li key={i}>{e.volumeInfo.title}</li>
            })}
        </ul>;
    }
}
export default Card;