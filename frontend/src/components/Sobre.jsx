import React from "react";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <div className={`card ${styles.sobreCard}`}>
      <h2 className="section-title">Sobre o Meu Caramelo</h2>
      <p className={styles.sobreText}>
        O <strong>Meu Caramelo</strong> nasceu do sonho de apaixonados por cães
        na cidade de <strong>Machado/MG</strong>. Inspirados pelo carisma e
        alegria dos famosos vira-latas caramelo, criamos uma plataforma para
        aproximar tutores e seus companheiros de quatro patas, promovendo
        cuidado, carinho e praticidade no dia a dia.
      </p>
      <p className={styles.sobreTextSmall}>
        Nosso amor por cães é o que nos move: acreditamos que cada pet merece
        ser tratado como família, com respeito, atenção e muito afeto. O Meu
        Caramelo existe para valorizar essa relação única entre humanos e cães,
        celebrando a amizade, a lealdade e a alegria que eles trazem para nossas
        vidas.
      </p>
      <p className={styles.sobreTextLast}>
        Seja bem-vindo ao Meu Caramelo! Aqui, seu cãozinho é sempre prioridade e
        faz parte da nossa história de amor pelos animais.
      </p>
      <div className={styles.sobreCenter}>
        <img
          src="/gif_caramelo.gif"
          alt="Cachorro caramelo animado"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: 12,
            boxShadow: "0 2px 8px #0001",
          }}
        />
      </div>
    </div>
  );
}
