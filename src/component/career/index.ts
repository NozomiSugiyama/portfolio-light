import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import * as view from './career.template.html';

export class MyCareer extends PolymerElement {

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
