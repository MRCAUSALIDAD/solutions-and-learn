class FrameComponent extends HTMLElement {
    connectedCallback() {
        const content = this.innerHTML;

        this.innerHTML = `
        <div class="frame">
            <div class="bar">
                <div class="content-btns">
                    <div class="btn"></div>
                    <div class="btn"></div>
                    <div class="btn"></div>
                </div>
            </div>
            <div class="content-frame">
                ${content}
            </div>
        </div>
        `;
    }
}

customElements.define('frame-component', FrameComponent);