import styled from "styled-components";

//As variaveis tem que começar com as letras maiusculas

export const AddBotao = styled.button`
  background: #057186;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.2s ease;

  &:hover {
    opacity: 0.8; //clareia o botão quando passa o mouse
  }
`;

export const Container = styled.div`
  background-color: #fff; /* Fundo branco para o "cartão" */
  padding: 30px; /* Espaçamento interno */
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave para o efeito suspenso */
  text-align: center; /* Centraliza o texto e elementos internos */
  transition: all 0.3s ease; /* Transição suave para efeitos de hover */

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra mais intensa */
    transform: translateY(-5px); /* Move ligeiramente para cima */
  }

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
    flex-grow: 1; /* Faz o input ocupar o espaço disponível */
    max-width: 250px; /* Limita a largura máxima do input */
    outline: none;
  }

  form {
    display: flex;
    margin-top: 20px;
    gap: 10px; /* Espaço entre input e botão */
    justify-content: center; /* Centraliza o formulário */
  }
`;

export const Produto = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  margin-top: 10px;

  &:last-child {
    border-bottom: none; /* Remove a borda do último item */
  }

  p {
    margin: 0;
    font-size: 1.1em;
    color: #333;
    text-transform: capitalize;
  }
`;

export const BotaoLixo = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  padding: 5px;
  color: #888;

  &:hover {
    color: #f00; /* Cor vermelha ao passar o mouse no lixo */
  }
`;
