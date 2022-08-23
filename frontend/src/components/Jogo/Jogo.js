import "./Jogo.css";
import nuvens from "../../assets/clouds.png";
import cano from "../../assets/pipe.png";
import mario from "../../assets/mario.gif";
import { useState } from "react";

function Jogo() {
  //Criamos o estado 'estaPulando' com valor padrao 'false'
  const [estaPulando, setEstaPulando] = useState(false);

  document.onkeydown = function () {
    console.log("On Key Down");

    estaPulando = true;
  };

  console.log (15, { estaPulando });

  //jsx
  return (
    <div className="jogo">
      <img className="nuvens" src={nuvens} alt="Nuvens" />

      <img className="cano" src={cano} alt="Cano" />

      <img className="mario" src={mario} alt="Mario" />

      <div className="chao"></div>
    </div>
  );
}

export default Jogo;