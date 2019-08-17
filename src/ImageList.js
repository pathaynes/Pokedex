import PokemonItems from './ImageItem.js';
import Component from './component/component.js';

class PokemonList extends Component {
    onRender(dom) {
        const pokemonImages = this.props.pokemonImages;
        pokemonImages.forEach(pokemonImages => {
            const props = { pokemonImages: pokemonImages };
            const pokeItem = new PokemonItems(props);
            const pokeItemDOM = pokeItem.renderDOM();
            dom.appendChild(pokeItemDOM);
        });
    }
    renderHTML() {
        return /*html*/`
            <ul class="pokemon"></ul>
        `;
    }
}


export default PokemonList;