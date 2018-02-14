import * as kebabCase from 'lodash/fp/kebabCase';
import { MyApp }       from './app';
import { MyAvatar }    from './avatar';
import { MyButton }    from './button';
import { MyCareer }    from './career';
import { MyContact }   from './contact';
import { MyHeader }    from './header';
import { MyParagraph } from './paragraph';
import { MyProduct }   from './product';
import { MySelf }      from './self';
import { MySkill }     from './skill';
import { MySkillItem } from './skill-item';
import { MyTitle }     from './title';

// add custom elements here
const elements = {
    MyApp,
    MyAvatar,
    MyButton,
    MyCareer,
    MyContact,
    MyHeader,
    MyParagraph,
    MyProduct,
    MySelf,
    MySkill,
    MySkillItem,
    MyTitle,
};

// register all components as kebab case
Object.keys(elements)
    .forEach(key => {
        customElements.define(kebabCase(key), elements[key]);
    });
