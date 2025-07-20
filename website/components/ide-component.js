import { treeData } from "../data/treeData.js";

class IDEComponent extends HTMLElement {

    connectedCallback() {
        const codeContent = this.querySelector('[slot="code"]')?.innerHTML || '';

        this.innerHTML = `
        <div class="ide-content">
        <frame-component>
            <div class="ide-frame">
                <div class="ide-content-code">
                    <pre class="code-content">${codeContent}</pre>
                </div>
                <div class="ide-content-files">
                    <tree-component id="miTree"></tree-component>
                </div>
            </div>
        </frame-component>
        </div>
        `;

        Promise.resolve().then(() => {
            const tree = this.querySelector('#miTree');
            if (tree) {
                console.log(treeData)
                tree.data = treeData;

                tree.addEventListener('file-selected', (e) => {
                    const content = e.detail.content;
                    this.loadCode(content);
                });
            }
        });
    }

    loadCode(content) {
        const codeElement = this.querySelector('.code-content');
        if (codeElement) {
            codeElement.textContent = content;
            this.updateLineNumbers(content);
        }
    }


}

customElements.define('ide-component', IDEComponent);
