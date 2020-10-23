
import React from "react"; 
 
import Produtos from "./components/produtos/Produtos";  
import Carrinho from "./components/carrinho/Carrinho";
import Filtro from "./components/filtro/Filtro";
import "./App.css";
import styled from "styled-components"


const AppContainer = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
padding: 16px;
gap: 8px;
`;

const produtos = [
  {
    cod: 1,
    nome: "Camiseta 01",
    valor: 100.0,
    img: "https://picsum.photos/200/200?a=1",
  },
  {
    cod: 2,
    nome: "Camiseta 02",
    valor: 110.0,
    img: "https://picsum.photos/200/200?a=2",
  },
  {
    cod: 3,
    nome: "Camiseta 03",
    valor: 150.0,
    img: "https://picsum.photos/200/200?a=3",
  },
  {
    cod: 4,
    nome: "Camiseta 04",
    valor: 280.0,
    img: "https://picsum.photos/200/200?a=4",
  },
  {
    cod: 5,
    nome: "Camiseta 05",
    valor: 500.0,
    img: "https://picsum.photos/200/200?a=5",
  },
  {
    cod: 6,
    nome: "Camiseta 06",
    valor: 250.0,
    img: "https://picsum.photos/200/200?a=6",
  },
  {
    cod: 7,
    nome: "Camiseta 07",
    valor: 200.0,
    img: "https://picsum.photos/200/200?a=7",
  },
  {
    cod: 8,
    nome: "Camiseta 08",
    valor: 180.0,
    img: "https://picsum.photos/200/200?a=8",
  },
  {
    cod: 9,
    nome: "Camiseta 09",
    valor: 100.0,
    img: "https://picsum.photos/200/200?a=9",
  },
  {
    cod: 10,
    nome: "Camiseta 10",
    valor: 130.0,
    img: "https://picsum.photos/200/200?a=10",
  },
  {
    cod: 11,
    nome: "Camiseta 11",
    valor: 110.0,
    img: "https://picsum.photos/200/200?a=11",
  },
  {
    cod: 12,
    nome: "Camiseta 12",
    valor: 300.0,
    img: "https://picsum.photos/200/200?a=12",
  },
]
class App extends React.Component {
  state = {
    filtroMin: 100,
    filtroMax: 500,
    filtroNome: "Camiseta",
    produtosNoCarrinho: [
      {
        cod: 1,
        nome: "Camiseta 01",
        valor: 100.0,
        img: "https://picsum.photos/200/200?a=1",
        quantidade: 1,
      },
      {
        cod: 2,
        nome: "Camiseta 02",
        valor: 200.0,
        img: "https://picsum.photos/200/200?a=1",
        quantidade: 3,
      },

    ]
  };

  onChangeFiltroMin = (event) =>{
    this.setState({filtroMin: event.target.value})
  }

  onChangeFiltroMax = (event) =>{
    this.setState({filtroMax: event.target.value})
  }

  onChangeFiltroNome = (event) =>{
    this.setState({filtroNome: event.target.value})
  }

  adicionaProdutoNoCarrinho = (codProduto) => {
    const addNoCarrinho = this.state.produtosNoCarrinho.find(produto => codProduto === produto.cod)

    if(addNoCarrinho){
      const novoProdutoAdd = this.state.produtosNoCarrinho.map(produto => {
        if(codProduto === produto.cod){
          return{
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }
        return produto
      })
      this.setState({produtosNoCarrinho: novoProdutoAdd})
    } else {
      const produtoNovo = produtos.find(produto => codProduto === produto.cod)

      const novoProdutoAdd = [...this.state.produtosNoCarrinho, {...produtoNovo, quantidade: 1}]

      this.setState({produtosNoCarrinho: novoProdutoAdd})
    }
  }
  render() {
    return (
      <AppContainer>
        <Filtro 
          filtroMin={this.state.filtroMin}
          filtroMax={this.state.filtroMax}
          filtroNome={this.state.filtroNome}
          onChangeFiltroMin={this.onChangeFiltroMin}
          onChangeFiltroMax={this.onChangeFiltroMax}
          onChangeFiltroNome={this.onChangeFiltroNome}

        />
        <Produtos 
          produtos={produtos}
          filtroMin={this.state.filtroMin}
          filtroMax={this.state.filtroMax}
          filtroNome={this.state.filtroNome}
          adicionaProdutoNoCarrinho={this.adicionaProdutoNoCarrinho}
        />
        <Carrinho 
          produtosNoCarrinho={this.state.produtosNoCarrinho}
        />
      </AppContainer>
    );
  }
}

export default App;
