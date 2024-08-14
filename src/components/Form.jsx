import {  partySliceActions, selectParties } from "../redux/partySlice";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
export const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const partyNames = useSelector(selectParties).map(party => party.name);
    const handleSubmit = (e) => {
        e.preventDefault();
        const party = e.target.party.value;
        // dispatch(addVote(party));
        // partySlice.actions.addVote(party);
        // partySliceActions.addVote(party);
        dispatch(partySliceActions.addVote(party));
        navigate('/result');
        e.target.reset();
    };
    return (
        <>
        <div className="" >
            <div className="text-center text-3xl text-white dark:text-gray-300 my-2">Vote</div>
            <form  onSubmit={handleSubmit} className="form bg-cyan-950 p-6 rounded-md shadow-md max-w-md mx-auto">
                <div className="space-y-4">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="Name" className="block text-white dark:text-gray-300">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name ..."
                            spellCheck="false"
                            autoComplete="off"
                            required
                            className="border border-gray-700 bg-gray-900 text-white rounded-md px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="Email" className="block text-white dark:text-gray-300">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email ..."
                            spellCheck="false"
                            autoComplete="off"
                            className="border border-gray-700 bg-gray-900 text-white rounded-md px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="aadhar" className="block text-white dark:text-gray-300">Aadhar No.</label>
                        <input
                            type="text"
                            placeholder="Enter your Aadhar No. ..."
                            spellCheck="false"
                            autoComplete="off"
                            required
                            className="border border-gray-700 bg-gray-900 text-white rounded-md px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="party" className="block text-white dark:text-gray-300">Party</label>
                        <select
                            id="party"
                            name="party"
                            className="border border-gray-700 bg-gray-900 text-white rounded-md px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        >
                            {partyNames.map((party, index) => (
                                <option key={index} value={party}>{party}</option>
                            ))}
                            <option value="NOTA">NOTA(None of the Above)</option>
                        </select>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </>

    )
}