import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { partySliceActions } from '../redux/partySlice';
import { useNavigate } from 'react-router';

const AddPartyForm = () => {
    const dispatch = useDispatch();
    const nameRef = useRef();
    const descriptionRef = useRef();
    const leaderRef = useRef();
    const foundedRef = useRef();
    const ideologyRef = useRef();
    const imageRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newParty = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            leader: leaderRef.current.value,
            founded: foundedRef.current.value,
            ideology: ideologyRef.current.value,
            image: imageRef.current.value,
            votes: 0
        };
        dispatch(partySliceActions.addParty(newParty));
        navigate('/parties');
        e.target.reset();
    };

    return (
        <div className='w-full flex flex-col justify-center items-center' >
            <h1 className='text-3xl font-serif font-semibold leading-loose'>Add New Political Party</h1>
            <form action='/parties' method='post' onSubmit={handleSubmit} className="form bg-teal-900 p-6 rounded-md shadow-md w-10/12 max-w-96">
                <div className="mb-4 flex flex-col">
                    <label htmlFor="name" className="text-white dark:text-gray-300">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        ref={nameRef}
                        className="border border-gray-700 bg-gray-900 text-white rounded-md px-3 py-2"
                        spellCheck="false"
                        required
                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="description" className="text-white dark:text-gray-300">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        ref={descriptionRef}
                        spellCheck="false"
                        className="border border-gray-700 bg-gray-900 text-white rounded-md px-3 py-2 min-h-12 max-h-40 overflow-hidden"
                        required
                    ></textarea>
                </div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="leader" className="text-white dark:text-gray-300">Leader</label>
                    <input
                        type="text"
                        id="leader"
                        name="leader"
                        ref={leaderRef}
                        spellCheck="false"
                        className="border border-gray-700 bg-gray-900 text-white rounded-md px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="founded" className="text-white dark:text-gray-300">Founded</label>
                    <input
                        type="text"
                        id="founded"
                        name="founded"
                        ref={foundedRef}
                        spellCheck="false"
                        className="border border-gray-700 bg-gray-900 text-white rounded-md px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="ideology" className="text-white dark:text-gray-300">Ideology</label>
                    <input
                        type="text"
                        id="ideology"
                        name="ideology"
                        ref={ideologyRef}
                        spellCheck="false"
                        className="border border-gray-700 bg-gray-900 text-white rounded-md px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="image" className="text-white dark:text-gray-300">Image URL</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        ref={imageRef}
                        spellCheck="false"
                        className="border border-gray-700 bg-gray-900 text-white rounded-md px-3 py-2"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700">
                    Add Party
                </button>
            </form>
        </div>
    );
};

export default AddPartyForm;
