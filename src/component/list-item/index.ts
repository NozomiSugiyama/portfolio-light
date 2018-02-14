import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './list-item.template.html';

export class MyListItem extends PolymerElement {
    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    static get properties() {
        return {
        };
    }
}
