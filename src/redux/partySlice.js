import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../store/partyData';
const partySlice = createSlice({
    name: 'party',
    initialState: initialState,
    reducers: {
        addParty: (state, action) => {
            state.parties.push({...action.payload});
        },
        addVote: (state, action) => {
            const partyName = action.payload.trim().toLowerCase();
            const party = state.parties.find(party => party.name.trim().toLowerCase() === partyName);
            if (party) {
                party.votes++;
            } else {
                console.error('Party not found:', action.payload);
            }
        },
    },
});
export const partySliceActions=partySlice.actions;
export const selectParties = (state) => state.party.parties;

export default partySlice.reducer;