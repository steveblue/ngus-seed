// Type definitions for ngus
// Project: http://ngus.io
// Definitions by: Steve Belovarich

declare module "ngus/ngus" {

    export class $famous {
        static instance: $famous;
        static created: Boolean;
        engine: any;
        scene: any;
        camera: any;
        constructor();
        static get(): $famous;
    }

    export class FaNode {
        node: any;
        component: Object;
        _component: Object;
        mountpoint: Array<number>[];
        origin: Array<number>[];
        align: Array<number>[];
        position: Array<number>[];
        rotate: Array<number>[];
        scale: Array<number>[];
        sizemode: Array<number>[];
        absolutesize: Array<number>[];
        proportionalsize: Array<number>[];
        differentialsize: Array<number>[];
        opacity: number;
        constructor();
        setMountPoint(arr: any): void;
        setOrigin(arr: any): void;
        setAlign(arr: any): void;
        setPosition(arr: any): void;
        setRotation(arr: any): void;
        setScale(arr: any): void;
        setSizeMode(arr: any): void;
        setAbsoluteSize(arr: any): void;
        setProportionalSize(arr: any): void;
        setDifferentialSize(arr: any): void;
        setOpacity(o: any): void;
        onInit(): void;
        onChange(change: any): void;
    }

    export class FaDomElement {
        id: String;
        classes: Array<String>[];
        element: any;
        properties: Object;
        attributes: Object;
        content: String;
        constructor(parent: FaNode);
        setClasses(classes: any): void;
        setProperties(prop: any): void;
        setAttributes(attr: any): void;
        onInit(): void;
        onChange(changes: any): void;
    }

    export class FaMesh {
        mesh: any;
        geometry: String;
        color: String;
        detail: Number;
        constructor(parent: FaNode);
        onInit(): void;
    }

}
