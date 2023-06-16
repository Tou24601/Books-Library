import { useState, useEffect } from "react";
import Image from "../assets/book_cover.png"

const SelectedRow = ({data, isHighlighted}) => {

    const [imgUrl, setImgUrl] = useState(Image)
    const [description, setDescription] = useState("Description not available")
    const [pageCount, setPageCount] = useState("")

    useEffect(() => {
        if (data.volumeInfo.imageLinks !== undefined) {
            setImgUrl(data.volumeInfo.imageLinks.smallThumbnail)
        }
        //console.log(data.volumeInfo.imageLinks)
        if (data.volumeInfo.description !== undefined) {
            setDescription(data.volumeInfo.description)
        }
        if (data.volumeInfo.pageCount !== undefined) {
            setPageCount(`Page count: ${data.volumeInfo.pageCount}`)
        }
    }, [data])



    return (
        <div className={isHighlighted ? "d-flex flex-rows" : "nonvisible"}>
            <div className="col-6 px-3"><img src={imgUrl}  alt="IMAGE NOT AVAILABLE" className="coverImage mx-5 mb-5" /></div>
            <div className="col-6">
                <h5 className="text-start">Description:</h5>
                <p className="text-start col-5">{description}</p>
                <p className="text-start">{pageCount}</p>
                <p className="text-start"><a href="">See other books by the same authors</a></p>
            </div>
            
        </div>
    )
}

export default SelectedRow;
