import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();

    let currentLink = ""

    const crumbs = location.pathname.split("/").filter(crumb => crumb !== "").map(crumb => {
        currentLink =+ `/${crumb}`
        return (
            <div className="crumb" key={Date.now()}>
                <Link to={currentLink}>{crumb}</Link>
            </div>
        )
    })
    console.log(crumbs)

    return (
        <div className="breadcrumbs">{crumbs}</div>
    )
}

export default Breadcrumbs;