import { treeData } from "../data/treeData.js";

class VideoComponent extends HTMLElement {

    connectedCallback(){
        const content = this.innerHTML;
        this.innerHTML = `
            <div>
            <p>List of videos</p>
            <tree-component id="videoTree"></tree-component>
            </div>
        `;

         Promise.resolve().then(() => {
            const tree = this.querySelector('#videoTree');
            if (tree) {
                tree.data = treeData; //<-- TODO: Change for link of videos

                tree.addEventListener('file-selected', (e) => {
                    const content = e.detail.content;
                    console.log(content)
                });
            }
        });
    }

}

customElements.define('video-component', VideoComponent);