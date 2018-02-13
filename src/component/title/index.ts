import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './title.template.html';

export class MyTitle extends PolymerElement {
    static get template() {
        return view;
    }

    constructor() {
        super();
    }
}
