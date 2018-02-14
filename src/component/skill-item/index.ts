import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './skill-item.template.html';

export class MySkillItem extends PolymerElement {
    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();
    }

    static get properties() {
        return {
            url: {
                type: String,
            }
        };
    }

}
