import { Link } from "react-router-dom";
import { GiVote } from "react-icons/gi";
function Header() {
    return (
        <div className="header bg-cyan-700 text-white flex flex-row justify-between px-4 items-center gri ">
            <div className="flex gap-3" >
                <GiVote className="text-2xl" />
                <Link className="text-2xl text-stone-200" to="/" >Voting-App</Link>
            </div>
            <div className="flex flex-row gap-4" >
                <Link to="/form">Vote</Link>
                <Link to="/parties">Parties</Link>
                <Link to="/add-party">Add Party</Link>
                <Link to="/result">Results</Link>
            </div>
        </div>
    )
}
export default Header;