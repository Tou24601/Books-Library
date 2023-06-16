import { useState, useEffect } from "react";
import Image from "../assets/book_cover.png"

const SelectedRow = ({data, isHighlighted}) => {

    const [imgUrl, setImgUrl] = useState(Image)

    useEffect(() => {
        if (data.volumeInfo.imageLinks !== undefined) {
            setImgUrl(data.volumeInfo.imageLinks.smallThumbnail)
        }
        console.log(data.volumeInfo.imageLinks)
    }, [data])



    return (
        <div className={isHighlighted ? "" : "nonvisible"}>
            <img src={imgUrl}  alt="IMAGE NOT AVAILABLE" className="coverImage" />
            <div>
                <h3 className="f-5">Description:</h3>
                <p>{data.volumeInfo.description}</p>
            </div>
        </div>
    )
}

export default SelectedRow;
