import PoliticalPartyCard from "./PoliticalPartyCard";
import { selectParties } from "../redux/partySlice";
import { useSelector } from "react-redux";

function PoliticalParties() {
    const parties=useSelector(selectParties);
    return (
        <main className="flex-grow p-6">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-4 dark:text-white text-center">Political Parties</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {parties.map((party, index) => (
                        <PoliticalPartyCard key={index} party={party} />
                    ))}
                </div>
            </div>
        </main>
    );
}
export default PoliticalParties;