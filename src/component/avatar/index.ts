import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './avatar.template.html';

export class MyAvatar extends PolymerElement {
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
