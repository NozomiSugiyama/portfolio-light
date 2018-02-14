import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import * as view from './header.template.html';

export class MyHeader extends GestureEventListeners(PolymerElement) {
    headerClass: string = 'top';
    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    static get properties() {
        return {
            headerClass : {
                type  : String,
                value : ''
            }
        };
    }

    ready() {
        super.ready();

        const checkHeaderPosition = () => {
            if (window.pageYOffset > 64 && this.headerClass === 'top')
                this.headerClass = 'middle';
            else if (window.pageYOffset < 30 && this.headerClass === 'middle')
                this.headerClass = 'top';
    
            setTimeout(checkHeaderPosition, 10);
        };
    
        checkHeaderPosition();
    }

    onHomeClick() {
        (this as any).dispatchEvent(new CustomEvent('home-clicked'));
    }

    onActivitiesClick() {
        (this as any).dispatchEvent(new CustomEvent('activities-clicked'));
    }

    onProductsClick() {
        (this as any).dispatchEvent(new CustomEvent('products-clicked'));
    }

    onSkillsClick() {
        (this as any).dispatchEvent(new CustomEvent('skills-clicked'));
    }

    onContactClick() {
        (this as any).dispatchEvent(new CustomEvent('contact-clicked'));
    }
}
