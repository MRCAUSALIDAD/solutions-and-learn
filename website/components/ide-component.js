

class IDEComponente extends HTMLElement {

    connectedCallback(){
        const codeContent = this.querySelector('[slot="code"]')?.innerHTML || '';
        const filesContent = this.querySelector('[slot="files"]')?.innerHTML || '';

        this.innerHTML = `
        <frame-component>
            <div class="ide-frame">
                <div class="ide-content-code">
                    ${codeContent}
                </div>
                <div class="ide-content-files">
                    ${filesContent}
                </div>
            </div>
        </frame-component>

        `
    }


}

customElements.define('ide-component', IDEComponente);