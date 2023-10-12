import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import {useState} from 'react';

export default function App() {
  const [images,setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    //atualiza o state de imagens com as imagens resgatadas do API unsplash (pela função searchImages)
    setImages(result)
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      < ImageList images={images}/>
    </div>
  );
}
