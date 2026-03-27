export default function ImageSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-48 w-full rounded"></div>
      <div className="bg-gray-300 h-4 mt-2 w-2/3 rounded"></div>
    </div>
  );
}