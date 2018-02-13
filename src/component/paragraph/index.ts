import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './paragraph.template.html';

export class MyParagraph extends PolymerElement {
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
