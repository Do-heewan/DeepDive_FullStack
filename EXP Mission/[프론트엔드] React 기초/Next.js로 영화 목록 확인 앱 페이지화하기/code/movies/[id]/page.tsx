import Image from "next/image";

interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string | null;
  overview: string;
}

async function getMovie(id: string): Promise<Movie> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=ko-KR`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return res.json();
}

export default async function MovieDetailPage(
  props: { params: Promise<{ id: string }> }
) {
  const { id } = await props.params; // await 필요
  const movie = await getMovie(id);

  return (
    <div style={detailContainerStyle}>
      <h1 style={titleStyle}>{movie.title}</h1>
      {movie.poster_path && (
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
          unoptimized
          style={{ borderRadius: "8px", marginBottom: "1rem", height: "auto" }}
        />
      )}
      <p style={overviewStyle}>{movie.overview}</p>
      <p style={infoStyle}>개봉: {new Date(movie.release_date).getFullYear()}</p>
      <p style={ratingStyle}>⭐ {movie.vote_average.toFixed(1)}/10</p>
    </div>
  );
}

const detailContainerStyle: React.CSSProperties = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "2rem",
};

const titleStyle: React.CSSProperties = {
  fontSize: "2.5rem",
  marginBottom: "1rem",
  color: "#FAFAFA",
};

const overviewStyle: React.CSSProperties = {
  fontSize: "1.1rem",
  lineHeight: "1.6",
  color: "#FAFAFA",
};

const infoStyle: React.CSSProperties = {
  color: "#FAFAFA",
  marginBottom: "0.5rem",
};

const ratingStyle: React.CSSProperties = {
  fontWeight: "bold",
  color: "#f39c12",
};