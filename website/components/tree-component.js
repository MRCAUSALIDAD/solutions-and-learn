class TreeComponent extends HTMLElement {

    set data(value) {
        this._data = value;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (!this._data) {
            this.innerHTML = '<p>Sin datos</p>';
            return;
        }
        this.innerHTML = '';
        const tree = this.createList(this._data);
        this.appendChild(tree);
    }

    createList(nodes) {
        const ul = document.createElement('ul');

        nodes.forEach(node => {
            const li = document.createElement('li');

            const iconSpan = document.createElement('span');
            iconSpan.textContent = node.children && node.children.length > 0 ? '📁' : '📄';
            iconSpan.style.marginRight = '4px';

            const labelSpan = document.createElement('span');
            labelSpan.textContent = node.label;

            labelSpan.addEventListener('click', (e) => {
                e.stopPropagation();
                this.clearSelection();
                labelSpan.classList.add('selected');

                if (node.children && node.children.length > 0) {
                    const isCollapsed = li.classList.toggle('collapsed');
                    iconSpan.textContent = isCollapsed ? '📁' : '📂';
                }
            });

            li.appendChild(iconSpan);
            li.appendChild(labelSpan);

            if (node.children && node.children.length > 0) {
                li.classList.add('folder', 'collapsed');
                const childUl = this.createList(node.children);
                li.appendChild(childUl);

            } else {
                li.classList.add('file');

                labelSpan.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.clearSelection();
                    labelSpan.classList.add('selected');

                    this.dispatchEvent(new CustomEvent('file-selected', {
                        bubbles: true,
                        detail: {
                            label: node.label,
                            content: node.content || '(archivo vacío)'
                        }
                    }));
                });
            }


            ul.appendChild(li);
        });

        return ul;
    }


    clearSelection() {
        this.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
    }

}

customElements.define('tree-component', TreeComponent);
