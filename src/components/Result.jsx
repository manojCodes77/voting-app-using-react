import React from 'react';
import { useSelector } from 'react-redux';
import { selectParties } from '../redux/partySlice';

function Result() {
    const parties = useSelector(selectParties);

    return (
        <div className="result-page p-8 text-black">
        <h1 className="text-3xl font-bold mb-6 text-white">Voting Results</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {parties.map((party) => (
                <div key={party.name} className="party-result bg-cyan-400 p-4 rounded shadow-lg flex flex-col items-center">
                    <img src={party.image} alt={party.name} className="w-20 h-20 mb-4" />
                    <h2 className="text-2xl font-semibold">{party.name}</h2>
                    <p className="text-xl font-bold">Votes: {party.votes}</p>
                </div>
            ))}
        </div>
        </div>

    );
}

export default Result;
