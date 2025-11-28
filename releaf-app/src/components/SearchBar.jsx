export default function SearchBar({ setSearch, getAllPlants, search }) {
  return (
    <div className="mt-40">
      <div className="px-20 py-5 flex items-center gap-8 text-base">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer"
            onClick={getAllPlants}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            className="ml-2 border-1 border-[#2a2a2a] rounded-md py-1 px-3 text-sm w-100"
            placeholder="plants name: e.g jasmine"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        <span
          className="cursor-pointer hover:underline"
          onClick={(e) => {
            setSearch(e.target.innerText);
          }}
        >
          spider plant
        </span>
        <span
          className="cursor-pointer hover:underline"
          onClick={(e) => {
            setSearch(e.target.innerText);
          }}
        >
          ivy
        </span>
        <span
          className="cursor-pointer hover:underline"
          onClick={(e) => {
            setSearch(e.target.innerText);
          }}
        >
          chinese money plant
        </span>
        <span
          className="cursor-pointer hover:underline"
          onClick={(e) => {
            setSearch(e.target.innerText);
          }}
        >
          ferns
        </span>
      </div>
    </div>
  );
}
