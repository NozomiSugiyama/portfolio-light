import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './app.template.html';

export class MyApp extends PolymerElement {

    // Define a string template instead of a `<template>` element.
    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();
    }

    scroll (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block   : 'start',
            inline  : 'start',
        });
    }

    toTop() {
        this.scroll((this as any).$.host);
    }
    
    toCareerSection() {
        this.scroll((this as any).$.career);
    }

    toSkillSection() {
        this.scroll((this as any).$.skill);
    }

    toProductSection() {
        this.scroll((this as any).$.product);
    }

    toContactSection() {
        this.scroll((this as any).$.contact);
    }
}
