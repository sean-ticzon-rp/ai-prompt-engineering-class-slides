        const { createApp } = Vue;
        
        createApp({
            data() {
                return {
                    currentSlide: 0,
                    slides: Array(15).fill(null)
                }
            },
            methods: {
                nextSlide() {
                    if (this.currentSlide < this.slides.length - 1) {
                        this.currentSlide++;
                    }
                },
                prevSlide() {
                    if (this.currentSlide > 0) {
                        this.currentSlide--;
                    }
                },
                handleKeyPress(e) {
                    if (e.key === 'ArrowRight' || e.key === ' ') {
                        e.preventDefault();
                        this.nextSlide();
                    }
                    if (e.key === 'ArrowLeft') {
                        e.preventDefault();
                        this.prevSlide();
                    }
                }
            },
            mounted() {
                window.addEventListener('keydown', this.handleKeyPress);
            },
            beforeUnmount() {
                window.removeEventListener('keydown', this.handleKeyPress);
            }
        }).mount('#app');