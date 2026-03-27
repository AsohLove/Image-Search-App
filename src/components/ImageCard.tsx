import type { UnsplashImage } from "../types/imagesTypes";

interface ImageCardProps {
    image: UnsplashImage;
    onSelect: (image: UnsplashImage) => void
}

export default function ImageCard({ image, onSelect }: ImageCardProps) {
  return (
    <div className="cursor-pointer">
    
       <div className="aspect-square overflow-hidden rounded">
        <img
          src={image.urls.small}
          alt={image.alt_description ?? ""}
          onClick={() => onSelect(image)}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-sm text-gray-500 mt-1">
        {image.user.name}
      </p>
    </div>
  );
}