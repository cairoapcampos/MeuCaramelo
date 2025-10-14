import React, { useState, useRef, useEffect } from "react";
import { addPet } from "../services/api.js";
import Snackbar from "./Snackbar.jsx";
import styles from "./NewPet.module.css";

const initialForm = {
  nome: "",
  idade: "",
  tutor: "",
  telefone: "",
  endereco: "",
  raca: "",
  observacoes: "",
};

export default function NewPet() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const nomeRef = useRef(null);

  useEffect(() => {
    if (nomeRef.current) nomeRef.current.focus();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSnackbar({ open: false, message: "" });
    try {
      await addPet(form);
      setSnackbar({
        open: true,
        message: `🎉 ${form.nome} cadastrado com sucesso!`,
      });
      setForm(initialForm);
      if (nomeRef.current) nomeRef.current.focus();
    } catch (error) {
      setSnackbar({
        open: true,
        message: "❌ Falha de conexão com a API. Pet não cadastrado.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`card ${styles.cardNewPet}`}>
      <h2>Cadastrar Novo Pet</h2>
      <p className={styles.subtitleNewPet}>
        Adicione um novo membro à família de pets do Meu Caramelo
      </p>
      {/* Snackbar agora aparece após o botão */}
      <div className={styles.requiredInfo}>
        <span className={styles.requiredAsterisk}>*</span> Campo obrigatório
      </div>
      <form className={`form ${styles.formNewPet}`} onSubmit={handleSubmit}>
        {/* Nome do Tutor */}
        <div className="form-group">
          <label className="form-label" htmlFor="tutor">
            Nome do Tutor <span className={styles.requiredAsterisk}>*</span>
          </label>
          <input
            id="tutor"
            name="tutor"
            className="form-input"
            placeholder="Digite o nome do tutor..."
            value={form.tutor}
            onChange={handleChange}
            required
            aria-required="true"
            aria-label="Nome do Tutor"
            autoComplete="off"
          />
        </div>
        {/* Endereço do Tutor */}
        <div className="form-group">
          <label className="form-label" htmlFor="endereco">
            Endereço do Tutor <span className={styles.requiredAsterisk}>*</span>
          </label>
          <input
            id="endereco"
            name="endereco"
            className="form-input"
            placeholder="Digite o endereço do tutor..."
            value={form.endereco}
            onChange={handleChange}
            required
            aria-required="true"
            aria-label="Endereço do Tutor"
            autoComplete="off"
          />
        </div>
        {/* Telefone do Tutor */}
        <div className="form-group">
          <label className="form-label" htmlFor="telefone">
            Telefone do Tutor <span className={styles.requiredAsterisk}>*</span>
          </label>
          <input
            id="telefone"
            name="telefone"
            className="form-input"
            placeholder="Ex: (99) 99999-9999"
            value={form.telefone}
            onChange={handleChange}
            required
            aria-required="true"
            aria-label="Telefone do Tutor"
            autoComplete="off"
          />
        </div>
        {/* Nome do Pet */}
        <div className="form-group">
          <label className="form-label" htmlFor="nome">
            Nome do Pet <span className={styles.requiredAsterisk}>*</span>
          </label>
          <input
            id="nome"
            name="nome"
            className="form-input"
            placeholder="Digite o nome do seu pet..."
            value={form.nome}
            onChange={handleChange}
            required
            aria-required="true"
            aria-label="Nome do Pet"
            ref={nomeRef}
            autoComplete="off"
          />
        </div>
        {/* Idade */}
        <div className="form-group">
          <label className="form-label" htmlFor="idade">
            Idade do Pet <span className={styles.requiredAsterisk}>*</span>
          </label>
          <input
            id="idade"
            name="idade"
            type="number"
            className="form-input"
            placeholder="Quantos anos tem seu pet?"
            value={form.idade}
            onChange={handleChange}
            min="0"
            max="30"
            required
            aria-required="true"
            aria-label="Idade do Pet"
            autoComplete="off"
          />
        </div>
        {/* Raça do Pet */}
        <div className="form-group">
          <label className="form-label" htmlFor="raca">
            Raça do Pet
          </label>
          <input
            id="raca"
            name="raca"
            className="form-input"
            placeholder="(opcional) Ex: Vira-lata, Poodle..."
            value={form.raca}
            onChange={handleChange}
            aria-label="Raça do Pet"
            autoComplete="off"
          />
        </div>
        {/* Observações */}
        <div className="form-group">
          <label className="form-label" htmlFor="observacoes">
            Observações
          </label>
          <textarea
            id="observacoes"
            name="observacoes"
            className={`form-input ${styles.textareaNewPet}`}
            placeholder="(opcional) Alguma observação extra..."
            value={form.observacoes}
            onChange={handleChange}
            rows={3}
            aria-label="Observações"
            autoComplete="off"
          />
        </div>
        {/* Toast centralizado abaixo do botão */}
        <div className={styles.snackbarContainer}>
          <Snackbar
            open={snackbar && snackbar.open}
            message={snackbar && snackbar.message}
            duration={3500}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            type={
              snackbar && snackbar.message && snackbar.message.startsWith("🎉")
                ? "success"
                : "error"
            }
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? "Cadastrando..." : "Cadastrar Pet"}
        </button>
      </form>
    </div>
  );
}
