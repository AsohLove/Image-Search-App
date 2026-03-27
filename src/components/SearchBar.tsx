import type { Props } from "../types/imagesTypes";


export default function SearchBar({ query, setQuery, onSearch }: Props) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query) {
      onSearch();
    }
  };

  return (
    <div className="flex justify-center gap-2 mb-6">
      <input
        className="border p-2 rounded w-64"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search images..."
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={onSearch}
        disabled={!query}
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        Search
      </button>
      
    </div>
  );
}