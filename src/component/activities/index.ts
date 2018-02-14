import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import * as view from './activities.template.html';
import items from './items';

export class MyActivities extends PolymerElement {

    items = items;
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
