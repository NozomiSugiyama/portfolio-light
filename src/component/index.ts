import * as kebabCase from 'lodash/fp/kebabCase';
import { MyApp }    from './app';
import { MyAvatar } from './avatar';
import { MyButton } from './button';
import { MyHeader } from './header';
import { MyParagraph } from './paragraph';
import { MySelf }   from './self';
import { MySkill }   from './skill';
import { MyTitle }   from './title';

// add custom elements here
const elements = {
    MyApp,
    MyAvatar,
    MyButton,
    MyHeader,
    MyParagraph,
    MySelf,
    MySkill,
    MyTitle
};

// register all components as kebab case
Object.keys(elements)
    .forEach(key => {
        customElements.define(kebabCase(key), elements[key]);
    });
