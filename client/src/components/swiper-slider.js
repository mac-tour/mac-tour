import { html, render } from 'lit-html'
import i18next from 'i18next'
import { css, injectGlobal } from 'emotion'

export class SwiperSlider extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		render(this.render(), this)		
	}

	render() {
		return html`
        <div class="swiper-wrap ${styles}">
            <div data-pagination='{"el": ".swiper-pagination"}' data-space-between="50" class="swiper-container swiper-init demo-swiper">
                <div class="swiper-pagination"></div>
                <div class="swiper-wrapper">
                    <div class="swiper-slide">${i18next.t(`PICTURE_1`)}</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                </div>
            </div>
        </div>		
        `
	}
}

injectGlobal`
swiper-slider {
    overflow: hidden;
}
`

const styles = css`
& {
    height: 150px;
    margin: 1px;
    position: relative;

    margin: 5px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 15px;
    overflow: hidden;

    & .swiper-container {
        width: 100%;
        height: 100%;
    }

    & .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .swiper-slide:nth-child(1) {
        background-image: url(https://storage.googleapis.com/mac-tour-251517.appspot.com/breweries/seoul-brewery1.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
}
`

customElements.define(`swiper-slider`, SwiperSlider)
