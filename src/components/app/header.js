import Component from '../components.js';

class Header extends Component {
    renderHTML () {
        return /*html*/ `
        <header>
         <img src="./data/assets/pokedexlogo(transparent).png" id="logo">
       </header>
        `;
    }
}

export default Header;