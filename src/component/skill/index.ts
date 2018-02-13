import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './skill.template.html';

export class MySkill extends PolymerElement {
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
