import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './technology.template.html';

export class MyTechnology extends PolymerElement {
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
            link: {
                type: String,
            },
            url: {
                type: String,
            }
        };
    }

}
