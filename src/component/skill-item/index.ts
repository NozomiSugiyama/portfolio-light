import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './skill-item.template.html';

export class MySkillItem extends PolymerElement {
    class    : String = '';

    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();

        window.addEventListener(
            'scroll',
            () => {
                if ((this as any).offsetTop - window.innerHeight < window.pageYOffset)
                    this.class = 'view';
                else 
                    this.class = '';
            }
        );
    }

    static get properties() {
        return {
            url: {
                type: String,
            }
        };
    }

}
