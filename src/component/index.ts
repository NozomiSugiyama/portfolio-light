import * as kebabCase from 'lodash/fp/kebabCase';
import { MyActivities } from './activities';
import { MyApp }        from './app';
import { MyAvatar }     from './avatar';
import { MyButton }     from './button';
import { MyContact }    from './contact';
import { MyFooter }     from './footer';
import { MyHeader }     from './header';
import { MyInview }     from './inview';
import { MyList }       from './list';
import { MyListItem }   from './list-item';
import { MyParagraph }  from './paragraph';
import { MyProducts }   from './products';
import { MySelf }       from './self';
import { MySkills }     from './skills';
import { MyTechnology } from './technology';
import { MyTitle }      from './title';

// add custom elements here
const elements = {
    MyActivities,
    MyApp,
    MyAvatar,
    MyButton,
    MyContact,
    MyHeader,
    MyFooter,
    MyInview,
    MyList,
    MyListItem,
    MyParagraph,
    MyProducts,
    MyTechnology,
    MySelf,
    MySkills,
    MyTitle,
};

// register all components as kebab case
Object.keys(elements)
    .forEach(key => {
        customElements.define(kebabCase(key), elements[key]);
    });
