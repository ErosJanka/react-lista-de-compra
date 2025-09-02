function Home() {
  function cliqueiNoBotao () {
    console.log("Botão clicado")

    //captar o texto que esta no imput
  }

  return (
    <>
      <div>
        <h1>Lista de compras</h1>
        <input placeholder="Produto..." />
        <button onClick={cliqueiNoBotao}>Adicionar</button>
      </div>
    </>
  )
}

export default Home
