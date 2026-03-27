interface LoadProps {
    onClick: () => void
}


export default function LoadMoreButton({ onClick }: LoadProps ) {
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={onClick}
        className="bg-black text-white px-6 py-2 rounded cursor-pointer"
      >
        Load More
      </button>
    </div>
  );
}