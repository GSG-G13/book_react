import React from "react";
// import FetchData from "../Fetch/Fetch";
class Card extends React.Component{
   

    render() {
        if (!this.props?.data[0]?.items) return <div className="load">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
    </div>;
        return <ul>
            {this.props?.data[0]?.items?.map((e, i) => {
                   return <li key={i}>{e.volumeInfo.title}</li>
            })}
        </ul>;
    }
}
export default Card;