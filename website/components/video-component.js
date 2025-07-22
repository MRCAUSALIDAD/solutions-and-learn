class VideoComponent extends HTMLElement {

    videos = [1,2,3,4,5,6,7,8,9,10,11];

    connectedCallback(){
        this.innerHTML = `
            <div>
                <div class="carrousel-wrapper">
                    <button class="btn-arrow left">&#9664;</button>
                    <div class="carrousel-track">
                        <div class="carrousel-track-inner"></div>
                    </div>
                    <button class="btn-arrow right">&#9654;</button>
                </div>
            </div>
        `;

        Promise.resolve().then(() => {
            const trackInner = this.querySelector('.carrousel-track-inner');
            const btnLeft = this.querySelector('.btn-arrow.left');
            const btnRight = this.querySelector('.btn-arrow.right');

            const cardWidth = 120 + 10;  // ancho tarjeta + gap

            const videos = this.videos.map((v) => {
                const video = document.createElement('div');
                video.className = 'content-video';
                video.style.backgroundImage = `url('https://via.placeholder.com/120x180?text=Video+${v}')`;
                return video;
            });

            trackInner.append(...videos);

            let scrollX = 0;

            const scrollMax = () => {
                return trackInner.scrollWidth - trackInner.parentElement.clientWidth;
            };

            const updateScroll = () => {
                trackInner.style.transform = `translateX(${-scrollX}px)`;
            };

            btnLeft.addEventListener('click', () => {
                scrollX = Math.max(0, scrollX - cardWidth * 3);
                updateScroll();
            });

            btnRight.addEventListener('click', () => {
                scrollX = Math.min(scrollMax(), scrollX + cardWidth * 3);
                updateScroll();
            });
        });
    }
}

customElements.define('video-component', VideoComponent);
