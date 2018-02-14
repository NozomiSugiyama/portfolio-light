import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './list.template.html';

export class MyList extends PolymerElement {
    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    static get properties() {
        return {
            orientation: {
                type: String,
                value: 'vertical'
            },
            listType: {
                type: String,
                value: ''
            }
        };
    }
}
