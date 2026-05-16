import { useEffect, useState } from "react";
import { getCharacters } from "../../api/rickAndMorty";
import CharacterCard from "../../componets/CharacterCard";
import "./style.css";

export default function Home() {
  const [personagens, setPersonagens] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await getCharacters();
        setPersonagens(dados);
      } catch (e) {
        setErro(e.message);
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, []);

  if (carregando) return <p className="feedback">Carregando personagens...</p>;
  if (erro) return <p className="feedback erro">{erro}</p>;

  return (
    <div className="home page">
      <h2 className="titulo-lista">Personagens - Rick and Morty</h2>
      <div className="lista-personagens">
        {personagens.map((personagem) => (
          <CharacterCard key={personagem.id} character={personagem} />
        ))}
      </div>
    </div>
  );
}
