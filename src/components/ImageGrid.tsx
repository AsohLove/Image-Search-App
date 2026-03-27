import type { UnsplashImage } from "../types/imagesTypes";
import ImageCard from "./ImageCard";
import ImageSkeleton from "./ImageSkeleton";

interface ImageGridProps {
    images: UnsplashImage[];
    loading: boolean;
    onSelect: (image: UnsplashImage) => void
}

export default function ImageGrid({ images, onSelect, loading }: ImageGridProps) {
    if (loading) {
        return (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 12 }).map((_, index) => (
                    <ImageSkeleton key={index} />
                ))}
            </div>
        )
    }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img) => (
        <ImageCard key={img.id} image={img} onSelect={onSelect} />
      ))}
    </div>
  );
}