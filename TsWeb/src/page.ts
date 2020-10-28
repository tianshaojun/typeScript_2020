// namespace Home {
//     export class Page {
//         constructor() {
//             new Components.Header();
//             new Components.Content();
//             new Components.Footer();
//         }
//     }
// }

import { Header, Content, Footer } from './components';
export default class Page {
    constructor() {
        new Header();
        new Content();
        new Footer();
    }
}