import { useNavigate } from "react-router-dom";


const ArtistCard = ({track, song}) => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm snimate-slideip rounded-lg cursor-pointer" onClick={() => navigate(`/artists/${song?.artists[0].adamid}`)} >
      <img src={song?.images.background} alt="artist" />
      <p className="mt-4 font-semibold text-lg text-white truncate">{song?.subtitle}</p>
    </div>
  )
};

export default ArtistCard;
