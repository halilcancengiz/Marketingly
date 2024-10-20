import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="flex items-center bg-gray-100 py-2 gap-5">
            <NavLink to="/">HomeV1</NavLink>
            <NavLink to="/homev2">HomeV2</NavLink>
            <NavLink to="/styleguide">Style Guide</NavLink>
        </div>
    )
}

export default Navbar