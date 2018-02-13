import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './button.template.html';

export class MyButton extends PolymerElement {
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
