import { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";

interface Movie {
  id: number;
  title: string;
  posterURL: string;
  imdbId: string;
}
interface MoviecardProps {
  category: string;
}
function Moviecard({ category }: MoviecardProps) {
  const [image, setImage] = useState<Movie[]>([]);
  useEffect(() => {
    async function getImage() {
      const data = await fetchMovies(category);

      setImage(data);
    }
    getImage();
  }, []);
  return (
    <div>
      <div className="flex flex-row gap-1">
        {image.map((movie) => (
          <div key={movie.id} className="w-35 h-55 ">
            {movie.posterURL && (
              <img
                src={movie.posterURL}
                alt={movie.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const parent = e.currentTarget.parentElement;
                  if (parent) parent.style.display = "none";
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Moviecard;
