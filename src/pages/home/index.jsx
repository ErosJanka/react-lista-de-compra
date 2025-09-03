//Baixando hooks (ferramentas)
//useState / estado => é uma variavel que toda vez que troca de valor a tela irá 'recarregar os valores'

import { useRef, useState } from "react"; //funciona para pegar referencia da onde quero (aqui para pegar o produto do input)
import { v4 } from "uuid"; //gera varias chaves aleatorias, é bom para fazer listas no react que pede uma key
import { AddBotao, Container, Produto, BotaoLixo } from './styles'

function Home() {
  const [produtos, setProdutos] = useState([]); //A função vai colocar o valor dentro da variavel "produtos". No useState o valor inicial é um Array vazio. Poderia começar com uma palavra tipo 'abacate'
  //const [nomeVariavel, nomeQueVaiSerAFuncao] = useState(aqui coloca o valor inicial da variavel)

  const inputRef = useRef(); //usa como referencia

  // let produtos = [] //armazenar os produtos => aqui não funciona por conta do react, precisa do useState

  function cliqueiNoBotao(event) {
    // Adiciona o 'event' como parâmetro para usar o 'event.preventDefault()'
    event.preventDefault(); // Impede que a página recarregue ao enviar o formulário
    
    //produtos.push(inputRef.current.value) //vai adicionar o que o inputRef estuver chamando
    console.log(v4());
    setProdutos([
      {
        id: v4(), //quando clicar no botão ele vai criar um array e criar um ID dentro dele e o nomne
        nome: inputRef.current.value,
      },
      ...produtos,
    ]); //'...produtos' mantém tudo que tem, assim quando colocar um novo produto o antigo não seja substituido
    //captar o texto que esta no imput

    inputRef.current.value = "";
  }

  function deletar(id) {
    setProdutos(produtos.filter((produto) => produto.id !== id)); //vai fazer um filtro e vai passar produto por produto, e vai manter somento o produto que oId for diferente do ID que quero excluir
  }

  return (
    <Container>
      <h1>Lista de compras</h1>

      {/* Adiciona a tag <form> com o evento onSubmit */}
      <form onSubmit={cliqueiNoBotao}> 
        <input placeholder="Produto..." ref={inputRef} />{" "}
        {/* //pega o que esta escrito e coloca na referencia */}
        <AddBotao type="submit">Adicionar</AddBotao> {/* Altera o tipo do botão para 'submit' */}
      </form>

      {//o {} é para colocar codigo JS no html
      produtos.map(
        (
          produto //adiciona os produtos no array "produtos"
        ) => (
          <Produto key={produto.id}>
            <p>{produto.nome}</p>
            <BotaoLixo onClick={() => deletar(produto.id)}>🗑️</BotaoLixo>
          </Produto>
        )
      ) //map pega item por item e faz o que quiser com ele
      }
    </Container>
  );
}

export default Home;