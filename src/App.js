
import React from "react"; 
 
import Produtos from "./components/produtos/Produtos";  
import Carrinho from "./components/carrinho/Carrinho";
import Filtro from "./components/filtro/Filtro";
import "./App.css";
import styled from "styled-components";
import produto1 from "./img/produto1.jpg";
import produto2 from "./img/produto2.jpg";
import produto3 from "./img/produto3.jpg"
import produto4 from "./img/produto4.jpg";
import produto5 from "./img/produto5.jpg";
import produto6 from "./img/produto6.jpg";
import produto7 from "./img/produto7.jpg";
import produto8 from "./img/produto8.jpg";
import produto9 from "./img/produto9.jpg";
import produto10 from "./img/produto10.jpg";
import produto11 from "./img/produto11.jpg";
import produto12 from "./img/produto12.jpg";



const AppContainer = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
padding: 16px;
gap: 8px;
`;

const produtos = [
  {
    cod: 1,
    nome: "UFO colorida",
    valor: 100.0,
    img: produto1,
  },
  {
    cod: 2,
    nome: "Me Leva!",
    valor: 110.0,
    img: produto2,
  },
  {
    cod: 3,
    nome: "Astro relax",
    valor: 150.0,
    img: produto3,
  },
  {
    cod: 4,
    nome: "Rocket",
    valor: 280.0,
    img: produto4,
  },
  {
    cod: 5,
    nome: "De boas",
    valor: 500.0,
    img: produto5,
  },
  {
    cod: 6,
    nome: "Space flower",
    valor: 250.0,
    img: produto6,
  },
  {
    cod: 7,
    nome: "Space monkey",
    valor: 200.0,
    img: produto7,
  },
  {
    cod: 8,
    nome: "Space on B/W",
    valor: 150,
    img: produto8,
  },
  {
    cod: 9,
    nome: "Sideral",
    valor: 100.0,
    img: produto9,
  },
  {
    cod: 10,
    nome: "Surfer",
    valor: 130.0,
    img: produto10,
  },
  {
    cod: 11,
    nome: "Space Butterfly",
    valor: 110.0,
    img: produto11,
  },
  {
    cod: 12,
    nome: "One way",
    valor: 300.0,
    img: produto12,
  },
]
class App extends React.Component {
  state = {
    filtroMin: "",
    filtroMax: "",
    filtroNome: "",
    produtosNoCarrinho: []
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

  removeProdutoCarrinho = (codProduto) => {
    const novoProdutoNoCarrinho = this.state.produtosNoCarrinho.map((produto) => {
      if(produto.cod === codProduto) {
        return {
          ...produto,
          quantidade: produto.quantidade -1
        }
      }
      return produto
    }).filter((produto) => produto.quantidade > 0)

    this.setState({ produtosNoCarrinho: novoProdutoNoCarrinho })
    
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
          removeProdutoCarrinho={this.removeProdutoCarrinho}
        />
      </AppContainer>
    );
  }
}

export default App;
