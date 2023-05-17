import React from "react";
import './card.css'
class Card extends React.Component {
    render() {
        if (!this.props?.data[0]?.items) return <div className="load">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
        </div>

        return (
            <>
                
                {this.props?.data[0]?.items?.map((e, i) =>
                    <div className="book" key={i}>
                        <div className="book-banner">
                            <img src={e.volumeInfo.imageLinks?.thumbnail || "https://images-ext-1.discordapp.net/external/ef05u0aLix_SLP9-MdR7cj8_1SIv-vJUP02K2wolfj0/%3Fid%3DgqDf__ULmR8C%26printsec%3Dfrontcover%26img%3D1%26zoom%3D1%26edge%3Dcurl%26source%3Dgbs_api/http/books.google.com/books/content?width=160&height=242"} alt="Pennsylvania Law Encyclopedia" />
                        </div>
                        <div className="book-content">
                            <div className="book-data">
                                <h2>{e.volumeInfo.title}</h2>
                                <p> </p>
                                <div className="book-extra-data">
                                    <div>
                                        <p>{e.volumeInfo.pageCount}</p>
                                        <p>Pages</p>
                                    </div>
                                    <div>
                                        <p>{e.volumeInfo.publishedDate}</p>
                                        <p>Published</p>
                                    </div>
                                    <div>
                                        <p>{e.volumeInfo.categories || "law"}</p>
                                        <p>Category</p>
                                    </div>
                                </div>
                                <a className="preview-btn" href={e.volumeInfo.previewLink} target=" _blank">Preview</a>
                            </div>
                        </div>
                    </div>

                )}
            </>
        )

    }
}
export default Card;