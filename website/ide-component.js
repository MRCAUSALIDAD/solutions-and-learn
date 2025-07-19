

class IDEComponente extends HTMLElement {

    connectedCallback(){

        this.innerHTML = `
        <frame-component>
            <div class="ide-frame">
                <div class="ide-content-code">
                    content code
                </div>
                <div class="ide-content-files">
                    tree list files and folders...
                </div>
            </div>
        </frame-component>

        `
    }


}

customElements.define('ide-component', IDEComponente);