# ngus seed

#### A seed project for ngus projects.

v0.0.2

![alt text](screenshots/ngus.gif "Famo.us DOMElement and Mesh in a Mixed Mode Scene")

ngus gives Angular 2 developers access to Famo.us DOMElement and Mesh inside of templates. This seed project sets up the very minimal needed to develop ngus projects.

ngus allows developers to declare Famous Components like DOMElement and Mesh in Angular 2 template syntax. Bind properties on `fa-node`, `fa-element`, and `fa-mesh` to Angular Components.  


```
    <fa-node [origin]="[0.5,0.5,0.0]"
             [align]="[0.25,0.25,0.0]"
             [sizeMode]="['absolute','absolute', 'absolute']"
             [absoluteSize]="[200,200,200]"
             [opacity]="0.25"
             [component]="famousComponent">
             <fa-element [properties]="{backgroundColor:'cyan', textAlign:'center', paddingTop: '40%'}"
                         [content]="'<h5>Hello World</h5>'">
             </fa-element>
    </fa-node>

```

Create your own Famous Components inside ES6 Classes. In the example below, `famousComponent` is a property on the Class `App` bound to the `[component]` property in the template above.

```
class App {
  famousComponent: Object;
  constructor() {

      this.famousComponent = {
        id: null,
        node: null,
        onMount: function (node) {
            this.id = node.addComponent(this);
            node.requestUpdate(this.id);
            this.node = node;
        },
        onUpdate: function (time) {
            this.node.setRotation(0,time / 832,0);
            this.node.requestUpdateOnNextTick(this.id);
        }
      };
  }
}
```

ngus is written in Typescript, however you can choose to write your Angular 2 apps in ES5 or ES6. `npm install ngus` will install the latest version of the ngus library. ngus is transpiled into amd, commonjs, systemjs, and ES6 modules. You can find these variants nside the `/dist` folder. If you prefer Typescript,
a definition file is provided in this repo at `/typings/ngus/ngus.d.ts`.

* NOTE: ngus and Angular 2 are very early in development and not ready for deployment to a Production environment.

##Demo

A demo of ngus is running at [ngus.io](http://ngus.io). This demo is also found in the root folder of this repo in `app.js`.


###Getting Started

Fork the repo and then clone it.

Use the following command if you wish to write and compile Typescript.

```
npm install -g typescript

```

To quickly create a development environment, install live-server.

```
npm install -g live-server

```

### Start the dev server

In the project directory, use the `live-server` command.


### Listen for changes

To watch for changes to typescript and compile on every save, run `tsc --watch` in the project directory.


###ngus Needs Your Help!

ngus needs the help of the Famo.us and Angular 2 Developer Communities to be an invaluable next-gen tool for Web Developers.

ngus still has a long way to go before it is ready for a Production environment. If you are interested in contributing to the project and helping to build out Angular 2 Components that interface with the Famo.us Engine contact <admin@ngus.io>.
