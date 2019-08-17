import Component from './components/components.js';

class PokemonItems extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;
        console.log(pokemon);
        
        return /*html*/`
        <li>
        <img src="${pokemon.image}">
        <h1>Name: ${pokemon.pokemon}</h1>
        <h2>Type: ${pokemon.type_1}</h2>
        <h2>Attack: ${pokemon.attack}</h2>
      </li>
  `;
    }
}
export default PokemonItems;