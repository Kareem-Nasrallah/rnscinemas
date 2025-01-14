import "./nowShowing.scss";

type movies = {
  id: number;
  name: string;
  image: {
    medium: string;
  };
  genres: string[];
};

const NowShowing: React.FC<{ moviesImg: movies[] }> = ({ moviesImg }) => {
  return (
    <div id="nowShowing" className="container">
      <h2 className="sideTitle">Now Showing</h2>
      <div id="showingMovies">
        {moviesImg.slice(0, 18).map((mo) => (
          <a key={mo.id} href="#" title={mo.name}>
            <img src={mo.image.medium} alt={mo.name} />
            <div>
              <h3>{mo.name}</h3>
              <p>{mo.genres.join("/")}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NowShowing;
