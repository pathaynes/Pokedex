import Component from '../component.js';
import FilterPokemon from '../../FilterImages.js';
import pokemon from '../../../data/pokemon.js';
import PokemonList from '../../ImageList.js';
import Header from './header.js';

class App extends Component {

    onRender(dom) {

        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            pokemon: pokemon
        };

        const pokemonList = new PokemonList(props);
        const pokemonListDOM = pokemonList.renderDOM();
        const listArea = dom.querySelector('.list');
        listArea.appendChild(pokemonListDOM);
        
        const filterPokemonProps = {
            pokemon: pokemon,
            onFilter: (pokemonAttack) => {
                let filterPokemon;
                // eslint-disable-next-line 
                if(pokemonAttack == 'all') {
                    filterPokemon = pokemon;
                }
                else {
                    filterPokemon = pokemon.filter(poke => {
                      // eslint-disable-next-line 
                        return poke.attack == pokemonAttack;
                    });
                }  
                const updateProps = { pokemon: filterPokemon };
                pokemonList.update(updateProps);
            }
        };
        const filterPokemon = new FilterPokemon(filterPokemonProps);
        const filterPokemonDOM = filterPokemon.renderDOM();

        const selectSection = dom.querySelector('.select-container');
        selectSection.appendChild(filterPokemonDOM);
    }

    renderHTML() {
        return /*html*/`

    <div>
      <main class="grid-container">
        <div class="select-container"></div>
        <div class="list"></div> 
      </main>
    </div>
    `;
    }
}

export default App;