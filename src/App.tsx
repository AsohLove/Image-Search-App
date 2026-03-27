import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageGrid from "./components/ImageGrid";
import ImageModal from "./components/ImageModal";
import { useImages } from "./hooks/useImages";
import LoadMoreButton from "./components/LoadMoreButton";
import type { UnsplashImage } from "./types/imagesTypes";
import ImageSkeleton from "./components/ImageSkeleton";

export default function App() {
  const [query, setQuery] = useState("nature");
  const [inputValue, setInputValue] = useState('nature')
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null,
  );
  const [images, setImages] = useState<UnsplashImage[]>([]);

  const { data, isLoading } = useImages(query, page);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!data) return;

    if (page === 1) {
      setImages(data);
    } else {
      setImages((prev) => [...prev, ...data]);
    }
  }, [data, page]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mt-8 mb-6">📸 Pixplore</h1>
      <p className="text-center text-gray-500 mb-6">
        Discover beautiful images from around the world
      </p>

      <SearchBar
        query={inputValue}
        setQuery={setInputValue}
        onSearch={() => {
          setPage(1);
          setQuery(inputValue); }}
      />

      {isLoading && <ImageSkeleton />}

      {query && (
        <p className="text-center text-gray-600 mt-4 mb-4">
          Showing  {images.length} images for <span className="font-semibold text-blue-600">"{query}"</span>
        </p>
      )}

      <ImageGrid
        images={images}
        loading={isLoading}
        onSelect={setSelectedImage}
      />

      <LoadMoreButton onClick={() => setPage((p) => p + 1)} />

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
