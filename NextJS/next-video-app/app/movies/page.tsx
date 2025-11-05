import Link from "next/link";
import Image from "next/image";

interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link key={movie.id} href={`/movies/${movie.id}`} style={cardStyle}>
      {movie.poster_path && (
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={250}
          height={375}
          style={{ borderRadius: "8px", marginBottom: "1rem" }}
        />
      )}
      <h2 style={movieTitleStyle}>{movie.title}</h2>
      <p style={infoStyle}>
        개봉: {new Date(movie.release_date).getFullYear()}
      </p>
      <p style={ratingStyle}>⭐ {movie.vote_average.toFixed(1)}/10</p>
    </Link>
  );
};

async function getLatestMovies(): Promise<Movie[]> {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`
    }
  };

  const response = await fetch(
    'https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1',
    options
  );

  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  const data = await response.json();
  return data.results;
}

const MoviePage: React.FC = async () => {
  const movies: Movie[] = await getLatestMovies();

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>최신 영화 목록</h1>
      <div style={gridStyle}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  padding: "2rem 3rem",
  backgroundColor: "#000",
  minHeight: "100vh",
};

const titleStyle: React.CSSProperties = {
  fontSize: "2rem",
  marginBottom: "2rem",
  color: "#FFFFFF",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "1.5rem",
};

const cardStyle: React.CSSProperties = {
  borderRadius: "8px",
  textDecoration: "none",
  color: "#333",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "pointer",
};

const movieTitleStyle: React.CSSProperties = {
  fontSize: "1.3rem",
  marginBottom: "0.5rem",
};

const infoStyle: React.CSSProperties = {
  color: "#666",
  marginBottom: "0.5rem",
};

const ratingStyle: React.CSSProperties = {
  fontWeight: "bold",
  color: "#f39c12",
};

export default MoviePage;