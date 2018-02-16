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
            inline  : 'start'
        });
    }

    toTop() {
        this.scroll((this as any).$.host);
    }
    
    toActivitiesSection() {
        this.scroll((this as any).$.activities);
    }

    toSkillsSection() {
        this.scroll((this as any).$.skills);
    }

    toProductsSection() {
        this.scroll((this as any).$.products);
    }

    toContactSection() {
        this.scroll((this as any).$.contact);
    }
}
