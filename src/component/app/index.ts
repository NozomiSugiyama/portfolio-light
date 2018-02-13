import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './app.template.html';

export class MyApp extends PolymerElement {

    [x: string]: any;
    // Define a string template instead of a `<template>` element.
    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();
        console.log(this.$);
    }

    toSkillSection() {
        console.log(this.$.skill);
        this.$.skill.scrollIntoView({
            behavior: 'smooth',
            block   : 'start',
            inline  : 'start',
        });
    }

    toProductSection() {
        (this as any).dispatchEvent(new CustomEvent('product-clicked'));
    }

    toContactSection() {
        (this as any).dispatchEvent(new CustomEvent('contact-clicked'));
    }
}
