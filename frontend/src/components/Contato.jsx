import React, { useState } from "react";
import styles from "./Contato.module.css";

function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <div className={styles.contatoCard}>
      <h2>Contato</h2>
      {enviado ? (
        <div className={styles.contatoSuccess}>
          Obrigado pelo contato! Em breve retornaremos.
        </div>
      ) : (
        <form className={`form ${styles.contatoForm}`} onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="nome">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              className="form-input"
              placeholder="Digite seu nome..."
              value={form.nome}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              placeholder="Digite seu email..."
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="mensagem">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              className="form-input"
              placeholder="Digite sua mensagem..."
              value={form.mensagem}
              onChange={handleChange}
              required
              rows={4}
              autoComplete="off"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Enviar
          </button>
        </form>
      )}
    </div>
  );
}

export default Contato;
