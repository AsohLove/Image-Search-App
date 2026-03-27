import type { UnsplashImage } from "../types/imagesTypes";

interface ImageModalProps {
    image: UnsplashImage | null;
    onClose: () => void
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image.urls.small} />

        <p className="mt-2 text-sm">
          {image.description || "No description"}
        </p>

        <button
          onClick={onClose}
          className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}