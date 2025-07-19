

class IDEComponente extends HTMLElement {

    connectedCallback(){
        const content = this.innerHTML;

        this.innerHTML = `
        <!-- HTML and styles -->
        ${content}

        `
    }


}