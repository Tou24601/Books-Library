import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cover from "../assets/book_cover.png";

const SelectedRowComp = ({data, isHighlighted, tableData}) => {

    const [imgUrl, setImgUrl] = useState(Cover)
    const [description, setDescription] = useState("Description not available")
    const [pageCount, setPageCount] = useState("")
    const [authors, setAuthors] = useState("")

    useEffect(() => {
        if (data.volumeInfo.imageLinks !== undefined) {
            setImgUrl(data.volumeInfo.imageLinks.smallThumbnail)
        }
        if (data.volumeInfo.description !== undefined) {
            setDescription(data.volumeInfo.description)
        }
        if (data.volumeInfo.pageCount !== undefined) {
            setPageCount(`Page count: ${data.volumeInfo.pageCount}`)
        }
        const authorsString = data.volumeInfo.authors[0].split(" ").join("_")
        setAuthors(authorsString)
    }, [data])



    return (
        <div className={isHighlighted ? "col-12 d-flex flex-column flex-md-row mb-4 justify-content-center justify-content-md-evenly" : "nonvisible"}>
            <div className="col-11 col-md-5 mx-3"><img src={imgUrl}  alt="IMAGE NOT AVAILABLE" className="coverImage mx-5 mb-5" /></div>
            <div className="col-11 col-md-7 text-center text-md-start ps-4">
                <h5>Description:</h5>
                <p className="mx-1 col-11 col-md-5 ">{description}</p>
                <p>{pageCount}</p>
                <Link to={`/${authors}`} state={tableData}>See other books by the same authors</Link>
            </div>
        </div>
    )
}

export default SelectedRowComp;
