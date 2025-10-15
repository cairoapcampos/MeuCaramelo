import React, { useEffect, useState } from "react";
import { getPets, removePet } from "../services/api.js";
import styles from "./Pets.module.css";

export default function Pets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    loadPets();
  }, []);

  const loadPets = () => {
    setLoading(true);
    getPets()
      .then(setPets)
      .catch(() =>
        setError(
          "Erro ao carregar pets. Verifique se o backend está rodando e a API está acessível."
        )
      )
      .finally(() => setLoading(false));
  };

  const handleDeletePet = async (id) => {
    if (!confirm('Tem certeza que deseja remover este pet?')) {
      return;
    }

    setDeleteLoading(true);
    setError(""); // Limpa qualquer erro anterior
    
    try {
      await removePet(id);
      // Atualiza a lista após a remoção
      loadPets();
    } catch (err) {
      console.error("Erro ao remover pet:", err);
      setError(`Erro ao remover pet: ${err.message}`);
      setLoading(false); // Garante que o estado de carregamento seja desativado em caso de erro
    } finally {
      setDeleteLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="card">
        <h2>
          <span className="section-icon">🐾</span>Carregando pets...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card">
        <h2 className={styles.errorTitle}>Erro</h2>
        <p className={styles.errorText}>{error}</p>
      </div>
    );
  }

  return (
    <div className={`card ${styles.cardPets}`}>
      <h2>Meus Queridos Pets ({pets.length})</h2>

      {pets.length === 0 ? (
        <div className={styles.emptyPets}>
          <p className={styles.emptyPetsTitle}>
            🐕 Ainda não há pets cadastrados
          </p>
          <p>Que tal adicionar o primeiro pet da família?</p>
        </div>
      ) : (
        <div className={styles.petsGrid}>
          {pets.map((pet) => (
            <div key={pet.id} className={styles.petCard}>
              <button 
                className={styles.deleteButton} 
                onClick={() => handleDeletePet(pet.id)} 
                title="Remover pet"
              >
                ✕
              </button>
              <div className={styles.petName}>{pet.nome}</div>
              <div className={styles.petAge}>
                🎂 {pet.idade} {pet.idade === 1 ? "ano" : "anos"} de idade
              </div>
              <div>
                <strong>Tutor:</strong> {pet.tutor}
              </div>
              <div>
                <strong>Telefone:</strong> {pet.telefone}
              </div>
              <div>
                <strong>Endereço:</strong> {pet.endereco}
              </div>
              <div>
                <strong>Raça:</strong> {pet.raca}
              </div>
              <div>
                <strong>Observações:</strong> {pet.observacoes}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
