import { useEffect, useState } from "react";
import "./style.css";

export default function Home() {
  const [message, setMessage] = useState("Carregando mensagem...");

  useEffect(() => {
    // Simula uma chamada de API
    const timer = setTimeout(() => {
      setMessage("Bem-vindo à nossa aplicação React 🚀");
    }, 2000);

    // Função de limpeza (cleanup)
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <h2>Bem-vindo 👋</h2>
        <p>{message}</p>
      </section>

      <section className="features">
        <div className="card">
          <h3>Estrutura</h3>
          <p>
            Código organizado, componentes reutilizáveis e layout consistente.
          </p>
        </div>
        <div className="card">
          <h3>Escalável</h3>
          <p>Pensado para crescer sem virar um emaranhado de CSS e JSX.</p>
        </div>
        <div className="card">
          <h3>Didático</h3>
          <p>Ideal para aprender React com boas práticas desde o início.</p>
        </div>
      </section>
    </div>
  );
}
