import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import * as view from './self.template.html';

export class MySelf extends GestureEventListeners(PolymerElement) {
    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();
    }

    onActivitiesClick() {
        (this as any).dispatchEvent(new CustomEvent('activities-clicked'));
    }

}
