const PoliticalPartyCard = ({ party }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800  justify-self-center ">
      <div className="flex flex-row justify-center py-2" ><img className=" h-48 " src={party.image} alt={party.name} /></div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{party.name}</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          {party.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
          {party.leader}
        </span>
        <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
          {party.founded}
        </span>
        <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
          {party.ideology}
        </span>
      </div>
    </div>
  );
};

export default PoliticalPartyCard;
