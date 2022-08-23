import "./Jogo.css";
import nuvens from "../../assets/clouds.png";
import cano from "../../assets/pipe.png";
import mario from "../../assets/mario.gif";

function Jogo() {
  return (
    <div className="jogo">
      <img className="nuvens" src={nuvens} alt="Nuvens" />

      <img className="cano" src={nuvens} alt="Cano" />

      <img className="mario" src={nuvens} alt="Mario" />

      <div className="chao"></div>
    </div>
  );
}

export default Jogo;