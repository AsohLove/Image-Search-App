








export interface UnsplashImage {
  id: string;
  alt_description: string;
  description: string;
  urls: {
    small: string;
    regular: string;
    thumb: string;
  };
  user: {
    name: string;
  };
}

export interface Props {
  query: string;
  setQuery: (value: string) => void;
  onSearch: () => void;
}