

class TreeComponent {

    constructor(container, data){
        this.container = container;
        this.data = data;
        this.render();
    }

    render() {
        this.container.innerHTML = '';
    }

}