import { treeData } from "../data/treeData.js";

class IDEComponent extends HTMLElement {

    connectedCallback() {
        const codeContent = this.querySelector('[slot="code"]')?.innerHTML || '';

        this.innerHTML = `
        <frame-component>
            <div class="ide-frame">
                <div class="ide-content-code">
                    <div class="line-numbers"></div>
                    <pre class="code-content">${codeContent}</pre>
                </div>
                <div class="ide-content-files">
                    <tree-component id="miTree"></tree-component>
                </div>
            </div>
        </frame-component>
        `;

        this.updateLineNumbers(codeContent);

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

    updateLineNumbers(content) {
        const lines = content.split('\n').length || 1;
        const lineNumbersDiv = this.querySelector('.line-numbers');
        if (lineNumbersDiv) {
            lineNumbersDiv.innerHTML = '';
            for (let i = 1; i <= lines; i++) {
                lineNumbersDiv.innerHTML += i + '<br>';
            }
        }
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
