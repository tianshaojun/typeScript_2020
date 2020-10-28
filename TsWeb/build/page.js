// namespace Components {
//     export namespace SubComponents {
//         export class Test {}
//     }
define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //     export class Header {
    //         constructor() {
    //             const elem = document.createElement('div');
    //             elem.innerText = 'This is Header';
    //             document.body.appendChild(elem);
    //         }
    //     }
    //     export class Content {
    //         constructor() {
    //             const elem = document.createElement('div');
    //             elem.innerText = 'This is Content';
    //             document.body.appendChild(elem);
    //         }
    //     }
    //     export class Footer {
    //         constructor() {
    //             const elem = document.createElement('div');
    //             elem.innerText = 'This is Footer';
    //             document.body.appendChild(elem);
    //         }
    //     }
    // }
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Header';
            document.body.appendChild(elem);
        }
        return Header;
    }());
    exports.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Content';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    exports.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
// namespace Home {
//     export class Page {
//         constructor() {
//             new Components.Header();
//             new Components.Content();
//             new Components.Footer();
//         }
//     }
// }
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = /** @class */ (function () {
        function Page() {
            new components_1.Header();
            new components_1.Content();
            new components_1.Footer();
        }
        return Page;
    }());
    exports.default = Page;
});
