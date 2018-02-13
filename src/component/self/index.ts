import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import * as view from './self.template.html';

export class MySelf extends GestureEventListeners(PolymerElement) {
    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();
    }

    transitionSectionTo(event) {
        const section = event.target.dataset.section;

        const element  = window.document.querySelector(`#${section}`);
        
        console.log('transitionSectionTo');
        if (element)
            element.scrollIntoView({
                behavior: 'smooth',
                block   : 'start',
                inline  : 'start',
            });
    }

    onSkillClick() {
        (this as any).dispatchEvent(new CustomEvent('skill-clicked'));
    }

    onProductClick() {
        (this as any).dispatchEvent(new CustomEvent('product-clicked'));
    }

    onContactClick() {
        (this as any).dispatchEvent(new CustomEvent('contact-clicked'));
    }

}
