import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import * as view from './products.template.html';

export class MyProducts extends PolymerElement {

    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();
    }

}
