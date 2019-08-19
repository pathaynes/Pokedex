import Component from '../component.js';

class Footer extends Component {
    renderHTML() {
        return /*html*/ `
    <footer>
       <div class="flex">
       <section class="options-sections">
                     <!-- options go here -->
                </section>
         <img src="./data/assets/pokeball(transparent).png" id="pokeball">
        </div>
    </footer>
        `;
    }
}

export default Footer;