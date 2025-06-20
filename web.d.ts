declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    var $mol_dom: typeof globalThis;
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    class $mol_object2 {
        static $: $;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): any;
        static toString(): any;
        static toJSON(): any;
        destructor(): void;
        static destructor(): void;
        toString(): string;
    }
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    enum $mol_wire_cursor {
        stale = -1,
        doubt = -2,
        fresh = -3,
        final = -4
    }
}

declare namespace $ {
    class $mol_wire_pub extends Object {
        data: unknown[];
        static get [Symbol.species](): ArrayConstructor;
        protected sub_from: number;
        get sub_list(): readonly $mol_wire_sub[];
        get sub_empty(): boolean;
        sub_on(sub: $mol_wire_pub, pub_pos: number): number;
        sub_off(sub_pos: number): void;
        reap(): void;
        promote(): void;
        fresh(): void;
        complete(): void;
        get incompleted(): boolean;
        emit(quant?: $mol_wire_cursor): void;
        peer_move(from_pos: number, to_pos: number): void;
        peer_repos(peer_pos: number, self_pos: number): void;
    }
}

declare namespace $ {
    interface $mol_wire_sub extends $mol_wire_pub {
        temp: boolean;
        pub_list: $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        pub_off(pub_pos: number): void;
        track_cut(sub: $mol_wire_pub | null): void;
        track_off(sub: $mol_wire_pub | null): void;
        absorb(quant: $mol_wire_cursor): void;
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_wire_auto_sub: $mol_wire_sub | null;
    function $mol_wire_auto(next?: $mol_wire_sub | null): $mol_wire_sub | null;
    const $mol_wire_affected: ($mol_wire_sub | number)[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    const $mol_dev_format_head: unique symbol;
    const $mol_dev_format_body: unique symbol;
    function $mol_dev_format_native(obj: any): any[];
    function $mol_dev_format_auto(obj: any): any[];
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    function $mol_dev_format_span(style: object, ...content: any[]): any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    class $mol_wire_pub_sub extends $mol_wire_pub implements $mol_wire_sub {
        protected pub_from: number;
        protected cursor: $mol_wire_cursor;
        get temp(): boolean;
        get pub_list(): $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        promote(): void;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        track_off(sub: $mol_wire_sub | null): void;
        pub_off(sub_pos: number): void;
        destructor(): void;
        track_cut(): void;
        complete(): void;
        complete_pubs(): void;
        absorb(quant?: $mol_wire_cursor): void;
        [$mol_dev_format_head](): any[];
        get pub_empty(): boolean;
    }
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        static promise: Promise<void> | null;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_promise_like(val: any): val is Promise<any>;
}

declare namespace $ {
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_tick | null;
        static plan(): void;
        static sync(): void;
        [Symbol.toStringTag]: string;
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        get incompleted(): boolean;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, args?: Args);
        plan(): this;
        reap(): void;
        toString(): string;
        toJSON(): string;
        [$mol_dev_format_head](): any[];
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        fresh(): this | undefined;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        sync(): Awaited<Result>;
        async_raw(): Promise<Result>;
        async(): Promise<Result> & {
            destructor(): void;
        };
        step(): Promise<null>;
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    const $mol_key_store: WeakMap<object, string>;
    function $mol_key<Value>(value: Value): string;
}

declare namespace $ {
    class $mol_after_frame extends $mol_object2 {
        task: () => void;
        static _promise: Promise<void> | null;
        static get promise(): Promise<void>;
        cancelled: boolean;
        promise: Promise<void>;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    type $mol_log3_event<Fields> = {
        [key in string]: unknown;
    } & {
        time?: string;
        place: unknown;
        message: string;
    } & Fields;
    type $mol_log3_logger<Fields, Res = void> = (this: $, event: $mol_log3_event<Fields>) => Res;
    let $mol_log3_come: $mol_log3_logger<{}>;
    let $mol_log3_done: $mol_log3_logger<{}>;
    let $mol_log3_fail: $mol_log3_logger<{}>;
    let $mol_log3_warn: $mol_log3_logger<{
        hint: string;
    }>;
    let $mol_log3_rise: $mol_log3_logger<{}>;
    let $mol_log3_area: $mol_log3_logger<{}, () => void>;
    function $mol_log3_area_lazy(this: $, event: $mol_log3_event<{}>): () => void;
    let $mol_log3_stack: (() => void)[];
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper, Lower = never> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? [
            Lower
        ] extends [Input[Field]] ? Field : never : never;
    }[keyof Input];
}

declare namespace $ {
    function $mol_log3_web_make(level: $mol_type_keys_extract<Console, Function>, color: string): (this: $, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, Args, Result>;
        get temp(): boolean;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    function $mol_wire_method<Host extends object, Args extends readonly any[]>(host: Host, field: PropertyKey, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: Host, ...args: Args) => any;
        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
}

declare namespace $ {
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

declare namespace $ {
    class $mol_wire_atom<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static solo<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result): $mol_wire_atom<Host, Args, Result>;
        static plex<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result, key: Args[0]): $mol_wire_atom<Host, Args, Result>;
        static watching: Set<$mol_wire_atom<any, any, any>>;
        static watcher: $mol_after_frame | null;
        static watch(): void;
        watch(): void;
        resync(args: Args): Error | Result | Promise<Error | Result>;
        once(): Awaited<Result>;
        channel(): ((next?: $mol_type_foot<Args>) => Awaited<Result>) & {
            atom: $mol_wire_atom<Host, Args, Result>;
        };
        destructor(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    export function $mol_wire_solo<Args extends any[]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): TypedPropertyDescriptor<(...args: First_optional<Args>) => any>;
    type First_optional<Args extends any[]> = Args extends [] ? [] : [Args[0] | undefined, ...$mol_type_tail<Args>];
    export {};
}

declare namespace $ {
    function $mol_wire_plex<Args extends [any, ...any[]]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: typeof host, ...args: Args) => any;
        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    let $mol_mem: typeof $mol_wire_solo;
    let $mol_mem_key: typeof $mol_wire_plex;
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(): {
            width: number;
            height: number;
        };
        static resizes(next?: Event): Event | undefined;
    }
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], notify?: 'notify'): Element[];
    }
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): (obj: object, name: PropertyKey, descr: PropertyDescriptor) => PropertyDescriptor;
        static get field(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value) => Value | undefined;
    }
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_wire_probe<Value>(task: () => Value, def?: Value): Value | undefined;
}

declare namespace $ {
    function $mol_wire_watch(): void;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_wire_solid(): void;
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }, passive?: boolean): void;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    export function $mol_wire_async<Host extends object>(obj: Host): ObjectOrFunctionResultPromisify<Host>;
    type FunctionResultPromisify<Some> = Some extends (...args: infer Args) => infer Res ? Res extends PromiseLike<unknown> ? Some : (...args: Args) => Promise<Res> : Some;
    type MethodsResultPromisify<Host extends Object> = {
        [K in keyof Host]: FunctionResultPromisify<Host[K]>;
    };
    type ObjectOrFunctionResultPromisify<Some> = (Some extends (...args: any) => unknown ? FunctionResultPromisify<Some> : {}) & (Some extends Object ? MethodsResultPromisify<Some> : Some);
    export {};
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
    class $mol_promise<Result = void> extends Promise<Result> {
        done: (value: Result | PromiseLike<Result>) => void;
        fail: (reason?: any) => void;
        constructor(executor?: (done: (value: Result | PromiseLike<Result>) => void, fail: (reason?: any) => void) => void);
    }
}

declare namespace $ {
    class $mol_promise_blocker<Result> extends $mol_promise<Result> {
        static [Symbol.toStringTag]: string;
    }
}

declare namespace $ {
    class $mol_decor<Value> {
        readonly value: Value;
        constructor(value: Value);
        prefix(): string;
        valueOf(): Value;
        postfix(): string;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_style_unit_length = '%' | 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'cap' | 'ch' | 'em' | 'rem' | 'ex' | 'ic' | 'lh' | 'rlh' | 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
    type $mol_style_unit_angle = 'deg' | 'rad' | 'grad' | 'turn';
    type $mol_style_unit_time = 's' | 'ms';
    type $mol_style_unit_any = $mol_style_unit_length | $mol_style_unit_angle | $mol_style_unit_time;
    type $mol_style_unit_str<Quanity extends $mol_style_unit_any = $mol_style_unit_any> = `${number}${Quanity}`;
    class $mol_style_unit<Literal extends $mol_style_unit_any> extends $mol_decor<number> {
        readonly literal: Literal;
        constructor(value: number, literal: Literal);
        postfix(): Literal;
        static per(value: number): `${number}%`;
        static px(value: number): `${number}px`;
        static mm(value: number): `${number}mm`;
        static cm(value: number): `${number}cm`;
        static Q(value: number): `${number}Q`;
        static in(value: number): `${number}in`;
        static pc(value: number): `${number}pc`;
        static pt(value: number): `${number}pt`;
        static cap(value: number): `${number}cap`;
        static ch(value: number): `${number}ch`;
        static em(value: number): `${number}em`;
        static rem(value: number): `${number}rem`;
        static ex(value: number): `${number}ex`;
        static ic(value: number): `${number}ic`;
        static lh(value: number): `${number}lh`;
        static rlh(value: number): `${number}rlh`;
        static vh(value: number): `${number}vh`;
        static vw(value: number): `${number}vw`;
        static vi(value: number): `${number}vi`;
        static vb(value: number): `${number}vb`;
        static vmin(value: number): `${number}vmin`;
        static vmax(value: number): `${number}vmax`;
        static deg(value: number): `${number}deg`;
        static rad(value: number): `${number}rad`;
        static grad(value: number): `${number}grad`;
        static turn(value: number): `${number}turn`;
        static s(value: number): `${number}s`;
        static ms(value: number): `${number}ms`;
    }
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'clamp' | 'scale' | 'cubic-bezier' | 'linear' | 'steps' | $mol_style_func_image | $mol_style_func_filter;
    type $mol_style_func_image = 'url' | 'linear-gradient' | 'radial-gradient' | 'conic-gradient';
    type $mol_style_func_filter = 'blur' | 'brightness' | 'contrast' | 'drop-shadow' | 'grayscale' | 'hue-rotate' | 'invert' | 'opacity' | 'sepia' | 'saturate';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static linear_gradient<Value>(value: Value): $mol_style_func<"linear-gradient", Value>;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string, Value extends string>(name: Name, defaultValue?: Value): $mol_style_func<"var", Name | (Name | Value)[]>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | `${number}%`)[]>;
        static clamp(min: $mol_style_unit_str<any>, mid: $mol_style_unit_str<any>, max: $mol_style_unit_str<any>): $mol_style_func<"clamp", `${number}${any}`[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
        static scale(zoom: number): $mol_style_func<"scale", number[]>;
        static linear(...breakpoints: Array<number | [number, number | $mol_style_unit_str<'%'>]>): $mol_style_func<"linear", string[]>;
        static cubic_bezier(x1: number, y1: number, x2: number, y2: number): $mol_style_func<"cubic-bezier", number[]>;
        static steps(value: number, step_position: 'jump-start' | 'jump-end' | 'jump-none' | 'jump-both' | 'start' | 'end'): $mol_style_func<"steps", (number | "end" | "start" | "jump-start" | "jump-end" | "jump-none" | "jump-both")[]>;
        static blur(value?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"blur", string>;
        static brightness(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"brightness", string | number>;
        static contrast(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"contrast", string | number>;
        static drop_shadow(color: $mol_style_properties_color, x_offset: $mol_style_unit_str<$mol_style_unit_length>, y_offset: $mol_style_unit_str<$mol_style_unit_length>, blur_radius?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"drop-shadow", (`${number}%` | `${number}px` | `${number}mm` | `${number}cm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}pt` | `${number}cap` | `${number}ch` | `${number}em` | `${number}rem` | `${number}ex` | `${number}ic` | `${number}lh` | `${number}rlh` | `${number}vh` | `${number}vw` | `${number}vi` | `${number}vb` | `${number}vmin` | `${number}vmax` | $mol_style_properties_color)[]>;
        static grayscale(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"grayscale", string | number>;
        static hue_rotate(value?: 0 | $mol_style_unit_str<$mol_style_unit_angle>): $mol_style_func<"hue-rotate", string | 0>;
        static invert(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"invert", string | number>;
        static opacity(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"opacity", string | number>;
        static sepia(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"sepia", string | number>;
        static saturate(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"saturate", string | number>;
    }
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer' | 'none' | $mol_style_func<'var'>;
    export type $mol_style_properties_color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}`;
    type Length = 0 | `${number}${$mol_style_unit_length}` | $mol_style_func<'calc' | 'var' | 'clamp'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | readonly [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Single_animation_composition = 'replace' | 'add' | 'accumulate';
    type Single_animation_direction = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    type Single_animation_fill_mode = 'none' | 'forwards' | 'backwards' | 'both';
    type Single_animation_iteration_count = 'infinite' | number;
    type Single_animation_play_state = 'running' | 'paused';
    type Easing_function = Linear_easing_function | Cubic_bezier_easing_function | Step_easing_function;
    type Linear_easing_function = 'linear' | $mol_style_func<'linear'>;
    type Cubic_bezier_easing_function = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | $mol_style_func<'cubic-bezier'>;
    type Step_easing_function = 'step-start' | 'step-end' | $mol_style_func<'steps'>;
    type Compat_auto = 'searchfield' | 'textarea' | 'push-button' | 'slider-horizontal' | 'checkbox' | 'radio' | 'menulist' | 'listbox' | 'meter' | 'progress-bar' | 'button';
    type Compat_special = 'textfield' | 'menulist-button';
    type Mix_blend_mode = Blend_mode | 'plus-darker' | 'plus-lighter';
    type Blend_mode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
    type Box = 'border-box' | 'padding-box' | 'content-box';
    type Baseline_position = 'baseline' | `${'first' | 'last'} baseline`;
    type Content_distribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
    type Self_position = 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end';
    type Content_position = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
    type Span_align = 'none' | 'start' | 'end' | 'center' | $mol_style_func<'var'>;
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both' | $mol_style_func<'var'>;
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type Overflow_position = 'unsafe' | 'safe';
    type ContainRule = 'size' | 'layout' | 'style' | 'paint' | $mol_style_func<'var'>;
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat' | $mol_style_func<'var'>;
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        accentColor?: $mol_style_properties_color | Common;
        align?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        justify?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        all?: Common;
        animation?: {
            composition?: Single_animation_composition | Single_animation_composition[][] | Common;
            delay?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            direction?: Single_animation_direction | Single_animation_direction[][] | Common;
            duration?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            fillMode?: Single_animation_fill_mode | Single_animation_fill_mode[][] | Common;
            iterationCount?: Single_animation_iteration_count | Single_animation_iteration_count[][] | Common;
            name?: 'none' | string & {} | ('none' | string & {})[][] | Common;
            playState?: Single_animation_play_state | Single_animation_play_state[][] | Common;
            timingFunction?: Easing_function | Easing_function[][] | Common;
        };
        appearance?: 'none' | 'auto' | Compat_auto | Compat_special | Common;
        aspectRatio?: 'auto' | number | `${number} / ${number}`;
        backdropFilter: $mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'> | ($mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'>)[][] | 'none' | Common;
        backfaceVisibility: 'visible' | 'hidden' | Common;
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        gap?: Length;
        background?: 'none' | {
            attachment?: 'scroll' | 'fixed' | 'local' | ('scroll' | 'fixed' | 'local')[][] | Common;
            blendMode?: Mix_blend_mode | Mix_blend_mode[][] | Common;
            clip?: Box | Box[][] | Common;
            color?: $mol_style_properties_color | Common;
            image?: readonly (readonly [$mol_style_func<$mol_style_func_image> | string & {}])[] | 'none' | Common;
            repeat?: Repeat | [Repeat, Repeat] | Common;
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center' | Common;
            size?: (BG_size | [BG_size, BG_size])[];
        };
        box?: {
            shadow?: readonly ([
                ...[inset: 'inset'] | [],
                x: Length,
                y: Length,
                blur: Length,
                spread: Length,
                color: $mol_style_properties_color
            ] | {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: $mol_style_properties_color;
            })[] | 'none' | Common;
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: string & {} | 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: $mol_style_properties_color | Common;
        display?: 'block' | 'inline' | 'run-in' | 'list-item' | 'none' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'contents' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-column-group' | 'table-row' | 'table-cell' | 'table-column' | 'table-caption' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid' | 'ruby' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | Common;
        overflow?: Overflow | {
            x?: Overflow | Common;
            y?: Overflow | Common;
            anchor?: 'auto' | 'none' | Common;
        };
        contain?: 'none' | 'strict' | 'content' | ContainRule | readonly ContainRule[] | Common;
        whiteSpace?: 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-wrap' | 'pre-line' | Common;
        webkitOverflowScrolling?: 'auto' | 'touch' | Common;
        scrollbar?: {
            color?: readonly [$mol_style_properties_color, $mol_style_properties_color] | 'auto' | Common;
            width?: 'auto' | 'thin' | 'none' | Common;
        };
        scroll?: {
            snap?: {
                type: 'none' | Snap_axis | readonly [Snap_axis, 'mandatory' | 'proximity'] | Common;
                stop: 'normal' | 'always' | Common;
                align: Span_align | readonly [Span_align, Span_align] | Common;
            };
            padding?: Directions<Length | 'auto'>;
        };
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        height?: Size;
        minHeight?: Size;
        maxHeight?: Size;
        margin?: Directions<Length | 'auto'>;
        padding?: Directions<Length | 'auto'>;
        position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed' | Common;
        top?: Length | 'auto' | Common;
        right?: Length | 'auto' | Common;
        bottom?: Length | 'auto' | Common;
        left?: Length | 'auto' | Common;
        border?: Directions<{
            radius?: Length | [Length, Length];
            style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Common;
            color?: $mol_style_properties_color | Common;
            width?: Length | Common;
        }>;
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size | Common;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | Common;
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number | Common;
        opacity: number | Common;
    }
    export {};
}

declare namespace $ {
    function $mol_style_prop<Keys extends string[]>(prefix: string, keys: Keys): Record<Keys[number], $mol_style_func<"var", unknown>>;
}

declare namespace $ {
    const $mol_theme: Record<"image" | "line" | "text" | "focus" | "back" | "hover" | "card" | "current" | "special" | "control" | "shade" | "field" | "spirit", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    let $mol_gap: Record<"text" | "space" | "blur" | "block" | "round", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean | null;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        autorun(): void;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly $mol_view_content[];
        sub_visible(): readonly $mol_view_content[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | null;
        dom_id(): string;
        dom_node_external(next?: Element): Element;
        dom_node(next?: Element): Element;
        dom_final(): Element | undefined;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        auto(): any;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        static _view_names?: Map<string, string[]>;
        static view_names(suffix: string): string[];
        view_names_owned(): string[];
        view_names(): Set<string>;
        theme(next?: null | string): string | null;
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style_size(): {
            [key: string]: string | number;
        };
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [x: string]: (event: Event) => Promise<void>;
        };
        plugins(): readonly $mol_view[];
        [$mol_dev_format_head](): any[];
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        force_render(path: Set<$mol_view>): void;
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): void;
        bring(): void;
        destructor(): void;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

declare namespace $ {
}

interface Window {
    cordova: any;
}
declare namespace $ {
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node_external(next?: Element): Element;
        render(): void;
    }
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static task(precision: number, reset?: null): $mol_after_timeout | $mol_after_frame;
        static now(precision: number): number;
    }
}

declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): Record<string, any>;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {
    type $mol_type_enforce<Actual extends Expected, Expected> = Actual;
}

declare namespace $ {
}

declare namespace $ {

	type $mol_svg_path__geometry_mol_icon_1 = $mol_type_enforce<
		ReturnType< $mol_icon['path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $mol_icon extends $mol_svg_root {
		path( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		minimal_width( ): number
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_spider extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=spider.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_spider_web extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=web.view.tree.d.ts.map
declare namespace $ {

	export class $apxutechtop_samosbor_map_icon_stairs extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxutechtop_samosbor_map_icon_cleaner extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxutechtop_samosbor_map_icon_factory extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxutechtop_samosbor_map_icon_repairman extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxutechtop_samosbor_map_icon_sinking extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxutechtop_samosbor_map_icon_roof extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxutechtop_samosbor_map_icon_elevator extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxutechtop_samosbor_map_icon_abandoned extends $mol_icon_spider_web {
	}
	
	export class $apxutechtop_samosbor_map_icon_theatre extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	type $mol_svg_path__geometry_apxutechtop_samosbor_map_icon_luquidator_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_path__geometry_apxutechtop_samosbor_map_icon_luquidator_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $apxutechtop_samosbor_map_icon_luquidator extends $mol_icon {
		path1( ): $mol_svg_path
		path2( ): $mol_svg_path
		sub( ): readonly(any)[]
		view_box( ): string
	}
	
	export class $apxutechtop_samosbor_map_icon_ladder extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxutechtop_samosbor_map_icon_min_floor extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxutechtop_samosbor_map_icon_max_floor extends $apxutechtop_samosbor_map_icon_min_floor {
		style( ): ({ 
			'transform': string,
		}) 
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {
    let $mol_layer: Record<"focus" | "float" | "hover" | "speck" | "popup", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_speck extends $mol_view {
		theme( ): string
		value( ): any
		minimal_width( ): number
		attr( ): ({ 
			'mol_theme': ReturnType< $mol_speck['theme'] >,
		})  & ReturnType< $mol_view['attr'] >
		style( ): ({ 
			'minHeight': string,
		})  & ReturnType< $mol_view['style'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {

	type $mol_speck__value_mol_button_1 = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		event( ): ({ 
			click( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        status(next?: any[]): any[];
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
        error(): string;
        hint_safe(): string;
        sub_visible(): ($mol_view_content | $mol_speck)[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub_mol_check_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): readonly $mol_view_content[];
        label(): readonly any[];
        aria_checked(): string;
    }
}

declare namespace $ {

	type $mol_check__checked_mol_check_list_1 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__label_mol_check_list_2 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_label'] >
		,
		ReturnType< $mol_check['label'] >
	>
	type $mol_check__enabled_mol_check_list_3 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint_mol_check_list_4 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height_mol_check_list_5 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	export class $mol_check_list extends $mol_view {
		option_checked( id: any, next?: boolean ): boolean
		option_title( id: any): string
		option_label( id: any): readonly(any)[]
		enabled( ): boolean
		option_enabled( id: any): ReturnType< $mol_check_list['enabled'] >
		option_hint( id: any): string
		items( ): readonly($mol_check)[]
		dictionary( ): Record<string, any>
		Option( id: any): $mol_check
		options( ): Record<string, any>
		keys( ): readonly(string)[]
		sub( ): ReturnType< $mol_check_list['items'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check_list extends $.$mol_check_list {
        options(): {
            [key: string]: string;
        };
        dictionary(next?: Record<string, boolean>): Record<string, boolean>;
        option_checked(id: string, next?: boolean | null): boolean;
        keys(): readonly string[];
        items(): $.$mol_check[];
        option_title(key: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $ {

	export class $mol_switch extends $mol_check_list {
		value( next?: string ): string
	}
	
}

//# sourceMappingURL=switch.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_switch extends $.$mol_switch {
        value(next?: string): string;
        option_checked(key: string, next?: boolean): boolean;
    }
}

declare namespace $ {
    function $mol_support_css_overflow_anchor(this: $): boolean;
}

declare namespace $ {
    class $mol_dom_listener extends $mol_object {
        _node: any;
        _event: string;
        _handler: (event: any) => any;
        _config: boolean | {
            passive: boolean;
        };
        constructor(_node: any, _event: string, _handler: (event: any) => any, _config?: boolean | {
            passive: boolean;
        });
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_print extends $mol_object {
        static before(): $mol_dom_listener;
        static after(): $mol_dom_listener;
        static active(next?: boolean): boolean;
    }
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $ {

	type $mol_view__style_mol_list_1 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style_mol_list_2 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		rows( ): readonly($mol_view)[]
		gap_before( ): number
		gap_after( ): number
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		Empty( ): $mol_view
		Gap_before( ): $mol_view
		Gap_after( ): $mol_view
		item_height_min( id: any): number
		item_width_min( id: any): number
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly $mol_view[];
        render_visible_only(): boolean;
        view_window(next?: [number, number]): [number, number];
        item_height_min(index: number): number;
        row_width_min(index: number): number;
        gap_before(): number;
        gap_after(): number;
        sub_visible(): $mol_view[];
        minimal_height(): number;
        minimal_width(): number;
        force_render(path: Set<$mol_view>): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub_mol_card_1 = $mol_type_enforce<
		ReturnType< $mol_card['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_card_2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_card_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_card extends $mol_list {
		status( ): string
		content( ): readonly($mol_view_content)[]
		Content( ): $mol_view
		status_text( ): ReturnType< $mol_card['status'] >
		Status( ): $mol_view
		attr( ): ({ 
			'mol_card_status_type': ReturnType< $mol_card['status'] >,
		})  & ReturnType< $mol_list['attr'] >
		rows( ): readonly($mol_view)[]
	}
	
}

//# sourceMappingURL=card.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_card extends $.$mol_card {
        rows(): readonly $mol_view[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_hotkey extends $mol_plugin {
		keydown( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_hotkey['keydown'] > ): ReturnType< $mol_hotkey['keydown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		key( ): Record<string, any>
		mod_ctrl( ): boolean
		mod_alt( ): boolean
		mod_shift( ): boolean
	}
	
}

//# sourceMappingURL=hotkey.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_hotkey extends $.$mol_hotkey {
        key(): { [key in keyof typeof $mol_keyboard_code]?: (event: KeyboardEvent) => void; };
        keydown(event?: KeyboardEvent): void;
    }
}

declare namespace $ {
    let $mol_action: typeof $mol_wire_method;
}

declare namespace $ {

	type $mol_hotkey__mod_ctrl_mol_string_1 = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key_mol_string_2 = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_string['submit'] > ): ReturnType< $mol_string['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $mol_string extends $mol_view {
		selection_watcher( ): any
		error_report( ): any
		disabled( ): boolean
		value( next?: string ): string
		value_changed( next?: ReturnType< $mol_string['value'] > ): ReturnType< $mol_string['value'] >
		hint( ): string
		hint_visible( ): ReturnType< $mol_string['hint'] >
		spellcheck( ): boolean
		autocomplete_native( ): string
		selection_end( ): number
		selection_start( ): number
		keyboard( ): string
		enter( ): string
		length_max( ): number
		type( next?: string ): string
		event_change( next?: any ): any
		submit_with_ctrl( ): boolean
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		dom_name( ): string
		enabled( ): boolean
		minimal_height( ): number
		autocomplete( ): boolean
		selection( next?: readonly(number)[] ): readonly(number)[]
		auto( ): readonly(any)[]
		field( ): ({ 
			'disabled': ReturnType< $mol_string['disabled'] >,
			'value': ReturnType< $mol_string['value_changed'] >,
			'placeholder': ReturnType< $mol_string['hint_visible'] >,
			'spellcheck': ReturnType< $mol_string['spellcheck'] >,
			'autocomplete': ReturnType< $mol_string['autocomplete_native'] >,
			'selectionEnd': ReturnType< $mol_string['selection_end'] >,
			'selectionStart': ReturnType< $mol_string['selection_start'] >,
			'inputMode': ReturnType< $mol_string['keyboard'] >,
			'enterkeyhint': ReturnType< $mol_string['enter'] >,
		})  & ReturnType< $mol_view['field'] >
		attr( ): ({ 
			'maxlength': ReturnType< $mol_string['length_max'] >,
			'type': ReturnType< $mol_string['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			input( next?: ReturnType< $mol_string['event_change'] > ): ReturnType< $mol_string['event_change'] >,
		})  & ReturnType< $mol_view['event'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=string.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        error_report(): void;
        hint_visible(): string;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
        selection_watcher(): $mol_dom_listener;
        selection_change(event: Event): void;
        selection_start(): number;
        selection_end(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__minimal_height_mol_labeler_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_2 = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_labeler_3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_4 = $mol_type_enforce<
		ReturnType< $mol_labeler['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_labeler extends $mol_list {
		label( ): readonly($mol_view_content)[]
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_view
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=labeler.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=chevron.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron_left extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=left.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron_right extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=right.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_hotkey__key_mol_number_1 = $mol_type_enforce<
		({ 
			down( next?: ReturnType< $mol_number['event_dec'] > ): ReturnType< $mol_number['event_dec'] >,
			up( next?: ReturnType< $mol_number['event_inc'] > ): ReturnType< $mol_number['event_inc'] >,
			pageDown( next?: ReturnType< $mol_number['event_dec_boost'] > ): ReturnType< $mol_number['event_dec_boost'] >,
			pageUp( next?: ReturnType< $mol_number['event_inc_boost'] > ): ReturnType< $mol_number['event_inc_boost'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_button_minor__event_click_mol_number_2 = $mol_type_enforce<
		ReturnType< $mol_number['event_dec'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__enabled_mol_number_3 = $mol_type_enforce<
		ReturnType< $mol_number['dec_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub_mol_number_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_string__type_mol_number_5 = $mol_type_enforce<
		ReturnType< $mol_number['type'] >
		,
		ReturnType< $mol_string['type'] >
	>
	type $mol_string__keyboard_mol_number_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__value_mol_number_7 = $mol_type_enforce<
		ReturnType< $mol_number['value_string'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_mol_number_8 = $mol_type_enforce<
		ReturnType< $mol_number['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__enabled_mol_number_9 = $mol_type_enforce<
		ReturnType< $mol_number['string_enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__submit_mol_number_10 = $mol_type_enforce<
		ReturnType< $mol_number['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_button_minor__event_click_mol_number_11 = $mol_type_enforce<
		ReturnType< $mol_number['event_inc'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__enabled_mol_number_12 = $mol_type_enforce<
		ReturnType< $mol_number['inc_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub_mol_number_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_number extends $mol_view {
		precision( ): number
		event_dec( next?: any ): any
		event_inc( next?: any ): any
		event_dec_boost( next?: any ): any
		event_inc_boost( next?: any ): any
		Hotkey( ): $mol_hotkey
		dec_enabled( ): ReturnType< $mol_number['enabled'] >
		dec_icon( ): $mol_icon_chevron_left
		Dec( ): $mol_button_minor
		type( ): string
		value_string( next?: string ): string
		hint( ): string
		string_enabled( ): ReturnType< $mol_number['enabled'] >
		submit( next?: any ): any
		String( ): $mol_string
		inc_enabled( ): ReturnType< $mol_number['enabled'] >
		inc_icon( ): $mol_icon_chevron_right
		Inc( ): $mol_button_minor
		precision_view( ): ReturnType< $mol_number['precision'] >
		precision_change( ): ReturnType< $mol_number['precision'] >
		boost( ): number
		value_min( ): number
		value_max( ): number
		value( next?: number ): number
		enabled( ): boolean
		plugins( ): readonly(any)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=number.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_number extends $.$mol_number {
        value_limited(val?: number): number;
        event_dec(next?: Event): void;
        event_inc(next?: Event): void;
        event_dec_boost(next?: Event): void;
        event_inc_boost(next?: Event): void;
        round(val: number): string;
        value_string(next?: string): string;
        dec_enabled(): boolean;
        inc_enabled(): boolean;
    }
}

declare namespace $ {

	export class $mol_icon_tick extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=tick.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_check_box extends $mol_check {
		Icon( ): $mol_icon_tick
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__minimal_width_apxutechtop_samosbor_map_area_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_width'] >
	>
	type $mol_view__minimal_height_apxutechtop_samosbor_map_area_2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__style_apxutechtop_samosbor_map_area_3 = $mol_type_enforce<
		({ 
			'translate': ReturnType< $apxutechtop_samosbor_map_area['position_style'] >,
			'scale': ReturnType< $apxutechtop_samosbor_map_area['scale_style'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub_apxutechtop_samosbor_map_area_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $apxutechtop_samosbor_map_area extends $mol_view {
		isDragging( next?: boolean ): boolean
		event_wheel( next?: any ): any
		event_key( next?: any ): any
		event_mouse_down( next?: any ): any
		event_mouse_move( next?: any ): any
		event_mouse_up( next?: any ): any
		position_style( ): string
		scale_style( ): string
		items( ): readonly(any)[]
		Plane( ): $mol_view
		zoom( ): number
		attr( ): ({ 
			'dragging': ReturnType< $apxutechtop_samosbor_map_area['isDragging'] >,
		}) 
		event( ): ({ 
			wheel( next?: ReturnType< $apxutechtop_samosbor_map_area['event_wheel'] > ): ReturnType< $apxutechtop_samosbor_map_area['event_wheel'] >,
			keypress( next?: ReturnType< $apxutechtop_samosbor_map_area['event_key'] > ): ReturnType< $apxutechtop_samosbor_map_area['event_key'] >,
			mousedown( next?: ReturnType< $apxutechtop_samosbor_map_area['event_mouse_down'] > ): ReturnType< $apxutechtop_samosbor_map_area['event_mouse_down'] >,
			mousemove( next?: ReturnType< $apxutechtop_samosbor_map_area['event_mouse_move'] > ): ReturnType< $apxutechtop_samosbor_map_area['event_mouse_move'] >,
			mouseup( next?: ReturnType< $apxutechtop_samosbor_map_area['event_mouse_up'] > ): ReturnType< $apxutechtop_samosbor_map_area['event_mouse_up'] >,
		}) 
		sub( ): readonly($mol_view)[]
	}
	
}

//# sourceMappingURL=area.view.tree.d.ts.map
declare namespace $.$$ {
    class $apxutechtop_samosbor_map_area extends $.$apxutechtop_samosbor_map_area {
        constructor();
        position(next?: number[]): number[];
        pos_x(next?: string): string;
        pos_y(next?: string): string;
        position_style(): string;
        transform_style(): string;
        size(next?: any[]): any[];
        isDragging(next?: boolean): boolean;
        dragStartPos(next?: number[]): number[];
        center(): number[];
        zoom(next?: number): number;
        zoomLimits(next?: number[]): number[];
        scale_style(): string;
        zoom_at(new_zoom: number, offset?: {
            x: number;
            y: number;
        }): void;
        zoomIn(cursor_x: number, cursor_y: number): void;
        zoomOut(cursor_x: number, cursor_y: number): void;
        reset(): void;
        event_wheel(event: WheelEvent): void;
        event_mouse_down(event: MouseEvent): void;
        event_mouse_move(event: MouseEvent): void;
        event_mouse_up(event: MouseEvent): void;
        log(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    enum $hyoo_crus_part {
        land = 3,
        face = 11,
        pass = 255,
        gift = 247,
        sand = 8,
        rock = 5,
        root = 1,
        buck = 9
    }
}

declare namespace $ {
    function $mol_base64_encode(src: string | Uint8Array): string;
}

declare namespace $ {
    function $mol_base64_encode_web(str: string | Uint8Array): string;
}

declare namespace $ {
    function $mol_base64_decode(base64: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $mol_base64_decode_web(base64Str: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $mol_base64_ae_encode(buffer: Uint8Array): string;
    function $mol_base64_ae_decode(str: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    class $mol_buffer extends DataView<ArrayBuffer> {
        [Symbol.toStringTag]: string;
        static from<This extends typeof $mol_buffer>(this: This, array: number | string | ArrayBufferView<ArrayBuffer>): InstanceType<This>;
        static toString(): string;
        getUint48(offset: number, LE?: boolean): number;
        setUint48(offset: number, value: number, LE?: boolean): void;
        int8(offset: number, next?: number): number;
        uint8(offset: number, next?: number): number;
        int16(offset: number, next?: number): number;
        uint16(offset: number, next?: number): number;
        int32(offset: number, next?: number): number;
        uint32(offset: number, next?: number): number;
        uint48(offset: number, next?: number): number;
        int64(offset: number, next?: bigint): bigint;
        uint64(offset: number, next?: bigint): bigint;
        float32(offset: number, next?: number): number;
        float64(offset: number, next?: number): number;
        asArray(): Uint8Array<ArrayBuffer>;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_data_value<Input = any, Output = any> = (val: Input) => Output;
}

declare namespace $ {
    type $mol_data_tagged_type<Value, Tag extends PropertyKey> = Value & {
        [Key in Tag]: Value;
    };
    type $mol_data_tagged_parser<Input, Output> = {
        Value: Output;
    } & ((val: $mol_data_tagged_type<Input, never>) => Output);
    export function $mol_data_tagged<Config extends Record<string, $mol_data_value>>(config: Config): { [Type in keyof Config]: $mol_data_tagged_parser<Parameters<Config[Type]>[0], $mol_data_tagged_type<ReturnType<Config[Type]>, Type>>; };
    export {};
}

declare namespace $ {
    const $hyoo_crus_ref: {
        Value: symbol & {
            $hyoo_crus_ref: symbol;
        };
    } & ((val: (string | symbol) & {}) => symbol & {
        $hyoo_crus_ref: symbol;
    });
    type $hyoo_crus_ref = typeof $hyoo_crus_ref.Value;
    function $hyoo_crus_ref_check(val: string): string;
    function $hyoo_crus_ref_lord(ref: $hyoo_crus_ref): symbol & {
        $hyoo_crus_ref: symbol;
    };
    function $hyoo_crus_ref_land(ref: $hyoo_crus_ref): symbol & {
        $hyoo_crus_ref: symbol;
    };
    function $hyoo_crus_ref_peer(ref: $hyoo_crus_ref): string;
    function $hyoo_crus_ref_area(ref: $hyoo_crus_ref): string;
    function $hyoo_crus_ref_head(ref: $hyoo_crus_ref): string;
    function $hyoo_crus_ref_encode(ref: $hyoo_crus_ref): Uint8Array<ArrayBuffer>;
    function $hyoo_crus_ref_decode(bin: Uint8Array): symbol & {
        $hyoo_crus_ref: symbol;
    };
    function $hyoo_crus_ref_relate(base: $hyoo_crus_ref, ref: $hyoo_crus_ref): symbol & {
        $hyoo_crus_ref: symbol;
    };
    function $hyoo_crus_ref_resolve(base: $hyoo_crus_ref, ref: $hyoo_crus_ref): symbol & {
        $hyoo_crus_ref: symbol;
    };
}

declare namespace $ {
    type $mol_type_unary_func = ((param: any) => any);
    type $mol_type_unary_class = new (param: any) => any;
    type $mol_type_unary = $mol_type_unary_func | $mol_type_unary_class;
}

declare namespace $ {
    type $mol_type_param<Func, Index extends number> = Func extends (...params: infer Params) => any ? Params[Index] : Func extends new (...params: infer Params2) => any ? Params2[Index] : never;
}

declare namespace $ {
    function $mol_data_setup<Value extends $mol_data_value, Config = never>(value: Value, config: Config): Value & {
        config: Config;
        Value: ReturnType<Value>;
    };
}

declare namespace $ {
    function $mol_func_is_class<Func extends Function>(func: Func): func is Func & (new (...args: any[]) => any);
}

declare namespace $ {
    type $mol_type_result<Func> = Func extends (...params: any) => infer Result ? Result : Func extends new (...params: any) => infer Result ? Result : never;
}

declare namespace $ {
    type Guard_value<Funcs extends $mol_type_unary[], Index extends keyof Funcs> = $mol_type_param<Index extends keyof $mol_type_tail<Funcs> ? $mol_type_tail<Funcs>[Index] : any, 0>;
    type Guard<Funcs extends $mol_type_unary[]> = {
        [Index in keyof Funcs]: (Funcs[Index] extends $mol_type_unary_func ? (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index> : new (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index>);
    };
    export function $mol_data_pipe<Funcs extends $mol_type_unary[]>(...funcs: Funcs & Guard<Funcs>): ((this: any, input: $mol_type_param<Funcs[0], 0>) => $mol_type_result<$mol_type_foot<Funcs>>) & {
        config: {
            funcs: Funcs & Guard<Funcs>;
        };
        Value: $mol_type_result<$mol_type_foot<Funcs>>;
    };
    export {};
}

declare namespace $ {
    class $mol_error_mix<Cause extends {} = {}> extends AggregateError {
        readonly cause: Cause;
        name: string;
        constructor(message: string, cause?: Cause, ...errors: readonly Error[]);
        static [Symbol.toPrimitive](): string;
        static toString(): string;
        static make(...params: ConstructorParameters<typeof $mol_error_mix>): $mol_error_mix<{}>;
    }
}

declare namespace $ {
    class $mol_data_error extends $mol_error_mix {
    }
}

declare namespace $ {
    let $mol_data_number: (val: number) => number;
}

declare namespace $ {
    function $mol_data_integer(val: number): number;
}

declare namespace $ {
    const $hyoo_crus_rank: {
        Value: number & {
            $hyoo_crus_rank: number;
        };
    } & ((val: number & {}) => number & {
        $hyoo_crus_rank: number;
    });
    function $hyoo_crus_rank_make(tier: keyof typeof $hyoo_crus_rank_tier, fame: keyof typeof $hyoo_crus_rank_rate): typeof $hyoo_crus_rank.Value;
    enum $hyoo_crus_rank_tier {
        deny = 0,
        read = 16,
        join = 48,
        post = 112,
        rule = 240
    }
    enum $hyoo_crus_rank_rate {
        late = 0,
        long = 3,
        slow = 7,
        fast = 11,
        just = 15
    }
    const $hyoo_crus_rank_deny: number & {
        $hyoo_crus_rank: number;
    };
    const $hyoo_crus_rank_read: number & {
        $hyoo_crus_rank: number;
    };
    const $hyoo_crus_rank_rule: number & {
        $hyoo_crus_rank: number;
    };
    function $hyoo_crus_rank_join(rate: keyof typeof $hyoo_crus_rank_rate): number & {
        $hyoo_crus_rank: number;
    };
    function $hyoo_crus_rank_post(rate: keyof typeof $hyoo_crus_rank_rate): number & {
        $hyoo_crus_rank: number;
    };
    type $hyoo_crus_rank_preset = Record<string, typeof $hyoo_crus_rank.Value>;
}

declare namespace $ {
    function $mol_base64_url_encode(buffer: Uint8Array): string;
    function $mol_base64_url_decode(str: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    var $mol_crypto_native: Crypto;
}

declare namespace $ {
    function $mol_crypto_restack(error: any): never;
}

declare namespace $ {
    class $mol_crypto_key extends $mol_buffer {
        static from<This extends typeof $mol_crypto_key>(this: This, serial: number | string | ArrayBufferView<ArrayBuffer>): InstanceType<This>;
        toString(): string;
    }
    class $mol_crypto_key_public extends $mol_crypto_key {
        static size_str: number;
        static size_bin: number;
        native(): Promise<CryptoKey>;
        native_derive(): Promise<CryptoKey>;
        verify(data: BufferSource, sign: BufferSource): Promise<boolean>;
    }
    class $mol_crypto_key_private extends $mol_crypto_key {
        static size_str: number;
        static size_bin: number;
        static size_sign: number;
        static generate(): Promise<$mol_crypto_key_private>;
        native(): Promise<CryptoKey>;
        native_derive(): Promise<CryptoKey>;
        public(): $mol_crypto_key_public;
        sign(data: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
    }
}

declare namespace $ {
    let $mol_mem_persist: typeof $mol_wire_solid;
}

declare namespace $ {
    export function $mol_wire_sync<Host extends object>(obj: Host): ObjectOrFunctionResultAwaited<Host>;
    type FunctionResultAwaited<Some> = Some extends (...args: infer Args) => infer Res ? (...args: Args) => Awaited<Res> : Some;
    type ConstructorResultAwaited<Some> = Some extends new (...args: infer Args) => infer Res ? new (...args: Args) => Res : {};
    type MethodsResultAwaited<Host extends Object> = {
        [K in keyof Host]: FunctionResultAwaited<Host[K]>;
    };
    type ObjectOrFunctionResultAwaited<Some> = (Some extends (...args: any) => unknown ? FunctionResultAwaited<Some> : {}) & (Some extends Object ? MethodsResultAwaited<Some> & ConstructorResultAwaited<Some> : Some);
    export {};
}

declare namespace $ {
    class $mol_storage extends $mol_object2 {
        static native(): StorageManager;
        static persisted(next?: boolean, cache?: 'cache'): boolean;
        static estimate(): StorageEstimate;
        static dir(): FileSystemDirectoryHandle;
    }
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static changes(next?: StorageEvent): StorageEvent | undefined;
        static value<Value>(key: string, next?: Value | null): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value | null;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_crypto_salt(): Uint8Array<ArrayBuffer>;
    const $mol_crypto_salt_once: Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    class $mol_crypto_sacred extends $mol_buffer {
        static size: 16;
        static make(): $mol_crypto_sacred;
        static from<This extends typeof $mol_buffer>(this: This, serial: string | ArrayBufferView<ArrayBuffer>): InstanceType<This>;
        static from_native(native: CryptoKey): Promise<$mol_crypto_sacred>;
        constructor(buffer: ArrayBuffer, byteOffset?: number, byteLength?: number);
        toString(): string;
        _native: undefined | CryptoKey & {
            type: 'secret';
        };
        native(): Promise<CryptoKey & {
            type: "secret";
        }>;
        encrypt(open: BufferSource, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
        decrypt(closed: BufferSource, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
        close(sacred: $mol_crypto_sacred, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
        open(buf: Uint8Array, salt: BufferSource): Promise<$mol_crypto_sacred>;
    }
}

declare var $node: any;

declare namespace $ {
    function $mol_charset_encode(value: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    class $mol_crypto_secret extends Object {
        readonly native: CryptoKey & {
            type: 'secret';
        };
        static size: number;
        constructor(native: CryptoKey & {
            type: 'secret';
        });
        static generate(): Promise<$mol_crypto_secret>;
        static from(serial: BufferSource): Promise<$mol_crypto_secret>;
        static pass(pass: string, salt: Uint8Array): Promise<$mol_crypto_secret>;
        static derive(private_serial: string, public_serial: string): Promise<$mol_crypto_secret>;
        serial(): Promise<Uint8Array<ArrayBuffer>>;
        encrypt(open: BufferSource, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
        decrypt(closed: BufferSource, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
    }
}

declare namespace $ {
    class $hyoo_crus_auth extends $mol_crypto_key_private {
        static current(next?: $hyoo_crus_auth | null): $hyoo_crus_auth;
        static embryos: string[];
        static grab(): $hyoo_crus_auth;
        static generate(): Promise<$hyoo_crus_auth>;
        lord(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        peer(): string;
        secret_mutual(pub: string): $mol_crypto_secret;
    }
}

declare namespace $ {
    class $mol_time_base {
        static patterns: Record<string, (arg: any) => string>;
        static formatter(pattern: string): (arg: any) => string;
        toString(pattern: string): string;
    }
}

declare namespace $ {
    type $mol_time_duration_config = number | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
    };
    class $mol_time_duration extends $mol_time_base {
        constructor(config?: $mol_time_duration_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        get normal(): $mol_time_duration;
        summ(config: $mol_time_duration_config): $mol_time_duration;
        mult(numb: number): $mol_time_duration;
        count(config: $mol_time_duration_config): number;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        static patterns: {
            '#Y': (duration: $mol_time_duration) => string;
            '#M': (duration: $mol_time_duration) => string;
            '#D': (duration: $mol_time_duration) => string;
            '#h': (duration: $mol_time_duration) => string;
            '#m': (duration: $mol_time_duration) => string;
            '#s': (duration: $mol_time_duration) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    enum $mol_time_moment_weekdays {
        monday = 0,
        tuesday = 1,
        wednesday = 2,
        thursday = 3,
        friday = 4,
        saturday = 5,
        sunday = 6
    }
    type $mol_time_moment_config = number | Date | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        offset?: $mol_time_duration_config;
    };
    class $mol_time_moment extends $mol_time_base {
        constructor(config?: $mol_time_moment_config);
        readonly year: number | undefined;
        readonly month: number | undefined;
        readonly day: number | undefined;
        readonly hour: number | undefined;
        readonly minute: number | undefined;
        readonly second: number | undefined;
        readonly offset: $mol_time_duration | undefined;
        get weekday(): number;
        _native: Date | undefined;
        get native(): Date;
        _normal: $mol_time_moment | undefined;
        get normal(): $mol_time_moment;
        merge(config: $mol_time_moment_config): $mol_time_moment;
        shift(config: $mol_time_duration_config): $mol_time_moment;
        mask(config: $mol_time_moment_config): $mol_time_moment;
        toOffset(config?: $mol_time_duration_config): $mol_time_moment;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        [$mol_dev_format_head](): any[];
        static patterns: {
            YYYY: (moment: $mol_time_moment) => string;
            AD: (moment: $mol_time_moment) => string;
            YY: (moment: $mol_time_moment) => string;
            Month: (moment: $mol_time_moment) => string;
            'DD Month': (moment: $mol_time_moment) => string;
            'D Month': (moment: $mol_time_moment) => string;
            Mon: (moment: $mol_time_moment) => string;
            'DD Mon': (moment: $mol_time_moment) => string;
            'D Mon': (moment: $mol_time_moment) => string;
            '-MM': (moment: $mol_time_moment) => string;
            MM: (moment: $mol_time_moment) => string;
            M: (moment: $mol_time_moment) => string;
            WeekDay: (moment: $mol_time_moment) => string;
            WD: (moment: $mol_time_moment) => string;
            '-DD': (moment: $mol_time_moment) => string;
            DD: (moment: $mol_time_moment) => string;
            D: (moment: $mol_time_moment) => string;
            Thh: (moment: $mol_time_moment) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
            Z: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    function $hyoo_crus_time_moment(time: number): $mol_time_moment;
    function $hyoo_crus_time_tick(time: number): number;
    function $hyoo_crus_time_dump(time: number): string;
    function $hyoo_crus_time_now(): number;
    function $hyoo_crus_time_freeze(task: () => void): void;
}

declare namespace $ {
    type $hyoo_crus_face_data = Iterable<readonly [peer: string, time: number]>;
    class $hyoo_crus_face_map extends Map<string, number> {
        last_time: number;
        total: number;
        constructor(entries?: $hyoo_crus_face_data);
        sync(right: $hyoo_crus_face_data): void;
        time_max(peer: string, time: number): void;
        tick(): number;
        last_moment(): $mol_time_moment;
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    class $mol_wire_dict<Key, Value> extends Map<Key, Value> {
        pub: $mol_wire_pub;
        has(key: Key): boolean;
        get(key: Key): Value | undefined;
        entries(): MapIterator<[Key, Value]>;
        keys(): MapIterator<Key>;
        values(): MapIterator<Value>;
        forEach(task: (value: Value, key: Key, dict: Map<Key, Value>) => void, self?: any): void;
        [Symbol.iterator](): MapIterator<[Key, Value]>;
        get size(): number;
        set(key: Key, value: Value): this;
        delete(key: Key): boolean;
        clear(): void;
        item(key: Key, next?: Value | null): NonNullable<Value> | null;
    }
}

declare namespace $ {
    class $hyoo_crus_fund<Key, Node> extends $mol_object {
        readonly item_make: (head: Key) => Node;
        constructor(item_make: (head: Key) => Node);
        Item(head: Key): Node;
    }
}

declare namespace $ {
    class $mol_graph<Node, Edge> {
        nodes: Set<Node>;
        edges_out: Map<Node, Map<Node, Edge>>;
        edges_in: Map<Node, Map<Node, Edge>>;
        link(from: Node, to: Node, edge: Edge): void;
        unlink(from: Node, to: Node): void;
        link_out(from: Node, to: Node, edge: Edge): void;
        link_in(to: Node, from: Node, edge: Edge): void;
        edge(from: Node, to: Node): NonNullable<Edge> | null;
        edge_out(from: Node, to: Node): NonNullable<Edge> | null;
        edge_in(to: Node, from: Node): NonNullable<Edge> | null;
        acyclic(get_weight: (edge: Edge) => number): void;
        get sorted(): Set<Node>;
        get roots(): Node[];
        nodes_depth(select: (left: number, right: number) => number): Map<Node, number>;
        depth_nodes(select: (left: number, right: number) => number): Node[][];
    }
}

declare namespace $ {
    function $mol_crypto_hash(input: ArrayBufferView): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    type $hyoo_crus_pack_parts = {
        lands: Record<$hyoo_crus_ref, {
            faces: $hyoo_crus_face_map;
            units: $hyoo_crus_unit[];
        }>;
        rocks: [Uint8Array, null | Uint8Array][];
    };
    class $hyoo_crus_pack extends $mol_buffer {
        toBlob(): Blob;
        parts(land?: $hyoo_crus_ref | null): {
            lands: Record<symbol & {
                $hyoo_crus_ref: symbol;
            }, {
                faces: $hyoo_crus_face_map;
                units: $hyoo_crus_unit[];
            }>;
            rocks: [Uint8Array<ArrayBufferLike>, Uint8Array<ArrayBufferLike> | null][];
        };
        static make({ lands, rocks }: $hyoo_crus_pack_parts): $hyoo_crus_pack;
    }
}

declare namespace $ {
    type $mol_time_interval_config = string | {
        start?: $mol_time_moment_config;
        end?: $mol_time_moment_config;
        duration?: $mol_time_duration_config;
    };
    class $mol_time_interval extends $mol_time_base {
        constructor(config: $mol_time_interval_config);
        private _start;
        get start(): $mol_time_moment;
        private _end;
        get end(): $mol_time_moment;
        private _duration;
        get duration(): $mol_time_duration;
        toJSON(): string;
        toString(): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string;
    }
}

declare namespace $ {
    class $mol_span extends $mol_object2 {
        readonly uri: string;
        readonly source: string;
        readonly row: number;
        readonly col: number;
        readonly length: number;
        constructor(uri: string, source: string, row: number, col: number, length: number);
        static unknown: $mol_span;
        static begin(uri: string, source?: string): $mol_span;
        static end(uri: string, source: string): $mol_span;
        static entire(uri: string, source: string): $mol_span;
        toString(): string;
        toJSON(): {
            uri: string;
            row: number;
            col: number;
            length: number;
        };
        error(message: string, Class?: ErrorConstructor): Error;
        span(row: number, col: number, length: number): $mol_span;
        after(length?: number): $mol_span;
        slice(begin: number, end?: number): $mol_span;
    }
}

declare namespace $ {
    class $mol_error_syntax extends SyntaxError {
        reason: string;
        line: string;
        span: $mol_span;
        constructor(reason: string, line: string, span: $mol_span);
    }
}

declare namespace $ {
    function $mol_tree2_from_string(this: $, str: string, uri?: string): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_to_string(this: $, tree: $mol_tree2): string;
}

declare namespace $ {
    type $mol_tree2_path = Array<string | number | null>;
    type $mol_tree2_hack<Context> = (input: $mol_tree2, belt: $mol_tree2_belt<Context>, context: Context) => readonly $mol_tree2[];
    type $mol_tree2_belt<Context> = Record<string, $mol_tree2_hack<Context>>;
    class $mol_tree2 extends Object {
        readonly type: string;
        readonly value: string;
        readonly kids: readonly $mol_tree2[];
        readonly span: $mol_span;
        constructor(type: string, value: string, kids: readonly $mol_tree2[], span: $mol_span);
        static list(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        list(kids: readonly $mol_tree2[]): $mol_tree2;
        static data(value: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        data(value: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        static struct(type: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        struct(type: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        clone(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        text(): string;
        static fromString(str: string, uri?: string): $mol_tree2;
        toString(): string;
        insert(value: $mol_tree2 | null, ...path: $mol_tree2_path): $mol_tree2;
        update(value: readonly $mol_tree2[], ...path: $mol_tree2_path): readonly $mol_tree2[];
        select(...path: $mol_tree2_path): $mol_tree2;
        filter(path: string[], value?: string): $mol_tree2;
        hack_self<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): readonly $mol_tree2[];
        hack<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): $mol_tree2[];
        error(message: string, Class?: ErrorConstructor): Error;
    }
    class $mol_tree2_empty extends $mol_tree2 {
        constructor();
    }
}

declare namespace $ {
    function $mol_dom_serialize(node: Node): string;
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'utf-16le' | 'utf-16be' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
}

declare namespace $ {
    function $mol_charset_decode(buffer: BufferSource, encoding?: $mol_charset_encoding): string;
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
    type json = null | boolean | number | string | {
        [key in string]: json;
    } | readonly json[];
    export type $hyoo_crus_vary_type = Uint8Array | bigint | $hyoo_crus_ref | BigInt64Array | Float64Array | $mol_time_moment | $mol_time_duration | $mol_time_interval | $mol_tree2 | json | Node;
    export let $hyoo_crus_vary_mapping: {
        nil: null;
        bin: Uint8ArrayConstructor;
        bool: BooleanConstructor;
        int: BigIntConstructor;
        real: NumberConstructor;
        ints: BigInt64ArrayConstructor;
        reals: Float64ArrayConstructor;
        ref: SymbolConstructor;
        str: StringConstructor;
        time: typeof $mol_time_moment;
        dur: typeof $mol_time_duration;
        range: typeof $mol_time_interval;
        json: ObjectConstructor;
        jsan: ArrayConstructor;
        dom: {
            new (): Element;
            prototype: Element;
        };
        tree: typeof $mol_tree2;
    };
    export type $hyoo_crus_vary_classes = typeof $hyoo_crus_vary_mapping[keyof typeof $hyoo_crus_vary_mapping];
    export type $hyoo_crus_vary_pack = {
        tip: keyof typeof $hyoo_crus_vary_tip;
        bin: Uint8Array;
    };
    export enum $hyoo_crus_vary_tip {
        nil = 1,
        bin = 2,
        bool = 3,
        int = 4,
        real = 5,
        ints = 6,
        reals = 7,
        ref = 8,
        str = 16,
        time = 17,
        dur = 18,
        range = 19,
        json = 20,
        jsan = 21,
        dom = 22,
        tree = 23
    }
    export function $hyoo_crus_vary_switch<Ways extends {
        nil: (vary: null) => any;
        bin: (vary: Uint8Array<ArrayBuffer>) => any;
        bool: (vary: boolean) => any;
        int: (vary: bigint) => any;
        ints: (vary: BigInt64Array<ArrayBuffer>) => any;
        real: (vary: number) => any;
        reals: (vary: Float64Array<ArrayBuffer>) => any;
        ref: (vary: $hyoo_crus_ref) => any;
        str: (vary: string) => any;
        time: (vary: $mol_time_moment) => any;
        dur: (vary: $mol_time_duration) => any;
        range: (vary: $mol_time_interval) => any;
        json: (vary: {}) => any;
        jsan: (vary: any[]) => any;
        dom: (vary: Element) => any;
        tree: (vary: $mol_tree2) => any;
    }>(vary: $hyoo_crus_vary_type, ways: Ways): $mol_type_result<Ways[keyof Ways]>;
    export function $hyoo_crus_vary_encode(vary: $hyoo_crus_vary_type): $hyoo_crus_vary_pack;
    export function $hyoo_crus_vary_decode({ tip, bin }: $hyoo_crus_vary_pack): $hyoo_crus_vary_type;
    export {};
}

declare namespace $ {
    type $mol_type_partial_deep<Val> = Val extends object ? Val extends Function ? Val : {
        [field in keyof Val]?: $mol_type_partial_deep<Val[field]> | undefined;
    } : Val;
}

declare namespace $ {
    let $mol_jsx_prefix: string;
    let $mol_jsx_crumbs: string;
    let $mol_jsx_booked: null | Set<string>;
    let $mol_jsx_document: $mol_jsx.JSX.ElementClass['ownerDocument'];
    const $mol_jsx_frag = "";
    function $mol_jsx<Props extends $mol_jsx.JSX.IntrinsicAttributes, Children extends Array<Node | string>>(Elem: string | ((props: Props, ...children: Children) => Element), props: Props, ...childNodes: Children): Element | DocumentFragment;
    namespace $mol_jsx.JSX {
        interface Element extends HTMLElement {
            class?: string;
        }
        interface ElementClass {
            attributes: {};
            ownerDocument: Pick<Document, 'getElementById' | 'createElementNS' | 'createDocumentFragment'>;
            childNodes: Array<Node | string>;
            valueOf(): Element;
        }
        type OrString<Dict> = {
            [key in keyof Dict]: Dict[key] | string;
        };
        type IntrinsicElements = {
            [key in keyof ElementTagNameMap]?: $.$mol_type_partial_deep<OrString<Element & IntrinsicAttributes & ElementTagNameMap[key]>>;
        };
        interface IntrinsicAttributes {
            id?: string;
            xmlns?: string;
        }
        interface ElementAttributesProperty {
            attributes: {};
        }
        interface ElementChildrenAttribute {
        }
    }
}

declare namespace $ {
    function $mol_tree2_bin_to_bytes(tree: $mol_tree2): Uint8Array<ArrayBuffer>;
    function $mol_tree2_bin_from_bytes(bytes: ArrayLike<number>, span?: $mol_span): $mol_tree2;
    function $mol_tree2_bin_from_string(str: string, span?: $mol_span): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_from_json(json: any, span?: $mol_span): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_xml_from_dom(dom: Node): $mol_tree2;
}

declare namespace $ {
    function $hyoo_crus_vary_cast_bin(vary: $hyoo_crus_vary_type): Uint8Array | null;
    function $hyoo_crus_vary_cast_bool(vary: $hyoo_crus_vary_type): boolean | null;
    function $hyoo_crus_vary_cast_int(vary: $hyoo_crus_vary_type): bigint | null;
    function $hyoo_crus_vary_cast_real(vary: $hyoo_crus_vary_type): number | null;
    function $hyoo_crus_vary_cast_ints(vary: $hyoo_crus_vary_type): BigInt64Array | null;
    function $hyoo_crus_vary_cast_reals(vary: $hyoo_crus_vary_type): Float64Array | null;
    function $hyoo_crus_vary_cast_ref(vary: $hyoo_crus_vary_type): $hyoo_crus_ref | null;
    function $hyoo_crus_vary_cast_str(vary: $hyoo_crus_vary_type): string | null;
    function $hyoo_crus_vary_cast_time(vary: $hyoo_crus_vary_type): $mol_time_moment | null;
    function $hyoo_crus_vary_cast_dur(vary: $hyoo_crus_vary_type): $mol_time_duration | null;
    function $hyoo_crus_vary_cast_range(vary: $hyoo_crus_vary_type): $mol_time_interval | null;
    function $hyoo_crus_vary_cast_json(vary: $hyoo_crus_vary_type): {} | null;
    function $hyoo_crus_vary_cast_jsan(vary: $hyoo_crus_vary_type): any[] | null;
    function $hyoo_crus_vary_cast_dom(vary: $hyoo_crus_vary_type): Element | null;
    function $hyoo_crus_vary_cast_tree(vary: $hyoo_crus_vary_type): $mol_tree2 | null;
    const $hyoo_crus_vary_cast_funcs: {
        readonly nil: () => null;
        readonly bin: typeof $hyoo_crus_vary_cast_bin;
        readonly bool: typeof $hyoo_crus_vary_cast_bool;
        readonly int: typeof $hyoo_crus_vary_cast_int;
        readonly real: typeof $hyoo_crus_vary_cast_real;
        readonly ints: typeof $hyoo_crus_vary_cast_ints;
        readonly reals: typeof $hyoo_crus_vary_cast_reals;
        readonly ref: typeof $hyoo_crus_vary_cast_ref;
        readonly str: typeof $hyoo_crus_vary_cast_str;
        readonly time: typeof $hyoo_crus_vary_cast_time;
        readonly dur: typeof $hyoo_crus_vary_cast_dur;
        readonly range: typeof $hyoo_crus_vary_cast_range;
        readonly json: typeof $hyoo_crus_vary_cast_json;
        readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
        readonly dom: typeof $hyoo_crus_vary_cast_dom;
        readonly tree: typeof $hyoo_crus_vary_cast_tree;
    };
    function $hyoo_crus_vary_cast<Tip extends keyof typeof $hyoo_crus_vary_tip>(tip: Tip, vary: $hyoo_crus_vary_type): {} | null;
}

declare namespace $ {
    function $mol_guard_defined<T>(value: T): value is NonNullable<T>;
}

declare namespace $ {
    class $mol_bus<Data> extends $mol_object {
        readonly name: string;
        readonly handle: (data: Data) => void;
        readonly channel: BroadcastChannel;
        constructor(name: string, handle: (data: Data) => void);
        destructor(): void;
        send(data: Data): void;
    }
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string): string;
        static href_normal(): string;
        static href_absolute(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): Readonly<{
            [key: string]: string;
        }>;
        static dict_cut(except: string[]): {
            [key: string]: string;
        };
        static value(key: string, next?: string | null): string | null;
        static link(next: Record<string, string | null>): string;
        static prolog: string;
        static separator: string;
        static make_link(next: {
            [key: string]: string | null;
        }): string;
        static commit(): void;
        static go(next: {
            [key: string]: string | null;
        }): void;
        static encode(str: string): string;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: Record<string, string | null>): string;
    }
}

declare namespace $ {
    function $hyoo_crus_log(this: $): boolean;
}

declare namespace $ {
    function $mol_wire_race<Tasks extends ((...args: any) => any)[]>(...tasks: Tasks): {
        [index in keyof Tasks]: ReturnType<Tasks[index]>;
    };
}

declare namespace $ {
    enum $hyoo_crus_land_root {
        data = "",
        tine = "AQAAAAAA"
    }
    class $hyoo_crus_land extends $mol_object {
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        auth(): $hyoo_crus_auth;
        faces: $hyoo_crus_face_map;
        pass: $mol_wire_dict<string, $hyoo_crus_pass>;
        gift: $mol_wire_dict<symbol & {
            $hyoo_crus_ref: symbol;
        }, $hyoo_crus_gift>;
        sand: $mol_wire_dict<string, $mol_wire_dict<string, $mol_wire_dict<string, $hyoo_crus_sand>>>;
        self_all: $mol_wire_dict<string, $hyoo_crus_sand | null>;
        self_make(idea?: number): string;
        home(): $hyoo_crus_home;
        area_make(idea?: number): $hyoo_crus_land;
        Data<Node extends typeof $hyoo_crus_node>(Node: Node): InstanceType<Node>;
        Tine(): $hyoo_crus_list_ref;
        Node<Node extends typeof $hyoo_crus_node>(Node: Node): $hyoo_crus_fund<string, InstanceType<Node>>;
        total(): number;
        joined_list(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        key(): $hyoo_crus_auth | null;
        lord_rank(lord: $hyoo_crus_ref, next?: typeof $hyoo_crus_rank.Value): typeof $hyoo_crus_rank.Value;
        peer_rank(peer: string): number & {
            $hyoo_crus_rank: number;
        };
        unit_sort(units: readonly $hyoo_crus_unit[]): $hyoo_crus_unit[];
        delta_unit(face?: $hyoo_crus_face_map): $hyoo_crus_unit[];
        delta_pack(face?: $hyoo_crus_face_map): $hyoo_crus_pack | null;
        delta_parts(face?: $hyoo_crus_face_map): {
            lands: {
                [x: symbol]: {
                    faces: $hyoo_crus_face_map;
                    units: $hyoo_crus_unit[];
                };
            };
            rocks: [Uint8Array<ArrayBufferLike>, Uint8Array<ArrayBufferLike> | null][];
        } | null;
        faces_pack(): $hyoo_crus_pack;
        apply_unit(delta: readonly $hyoo_crus_unit[], skip_check?: 'skip_check'): string[];
        units_verify(units: readonly $hyoo_crus_unit[]): Promise<string[]>;
        apply_unit_trust(delta: readonly $hyoo_crus_unit[], skip_check?: 'skip_check'): ("" | "Need reg rank to join" | "Need law rank to change rank" | "Need mod rank to post data")[];
        apply_land(land: $hyoo_crus_land): string[];
        recheck(): void;
        fork(preset?: $hyoo_crus_rank_preset): $hyoo_crus_land;
        sand_ordered({ head, peer }: {
            head: string;
            peer: string | null;
        }): $hyoo_crus_sand[];
        join(): $hyoo_crus_pass;
        give(dest: $hyoo_crus_auth | $hyoo_crus_ref | null, rank: typeof $hyoo_crus_rank.Value): $hyoo_crus_gift;
        post(lead: string, head: string, self: string, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): $hyoo_crus_sand;
        sand_move(sand: $hyoo_crus_sand, head: string, seat: number, peer?: string | null): $hyoo_crus_sand | undefined;
        sand_wipe(sand: $hyoo_crus_sand, peer?: string | null): $hyoo_crus_sand;
        broadcast(): void;
        sync(): this;
        destructor(): void;
        sync_mine(): $mol_wire_atom<unknown, [], void> | undefined;
        sync_yard(): $mol_wire_atom<unknown, [], void> | undefined;
        bus(): $mol_bus<ArrayBuffer[]>;
        loading(): void;
        saving(): void;
        unit_sign(unit: $hyoo_crus_unit): void;
        sand_encode(sand: $hyoo_crus_sand): $hyoo_crus_sand;
        sand_decode(sand: $hyoo_crus_sand): $hyoo_crus_vary_type;
        sand_decode_raw(sand: $hyoo_crus_sand): $hyoo_crus_vary_type;
        key_public(peer: string): $mol_crypto_key_public | null;
        secret_mutual(key_public: string): $mol_crypto_secret;
        encryptable(): boolean;
        encrypted(next?: boolean): boolean;
        secret(): $mol_crypto_secret | null;
        dump(): {
            land: symbol & {
                $hyoo_crus_ref: symbol;
            };
            units: $hyoo_crus_unit[];
            rocks: [Uint8Array<ArrayBufferLike>, Uint8Array<ArrayBufferLike>][];
        };
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    enum $mol_rest_code {
        Continue = 100,
        Switching_Protocols = 101,
        Processing = 102,
        OK = 200,
        Created = 201,
        Accepted = 202,
        Non_Authoritative_Information = 203,
        No_Content = 204,
        Reset_Content = 205,
        Partial_Content = 206,
        Multi_Status = 207,
        Already_Reported = 208,
        IM_Used = 226,
        Multiple_Choices = 300,
        Moved_Permanently = 301,
        Found = 302,
        See_Other = 303,
        Not_Modified = 304,
        Use_Proxy = 305,
        Temporary_Redirect = 307,
        Bad_Request = 400,
        Unauthorized = 401,
        Payment_Required = 402,
        Forbidden = 403,
        Not_Found = 404,
        Method_Not_Allowed = 405,
        Not_Acceptable = 406,
        Proxy_Authentication_Required = 407,
        Request_Timeout = 408,
        Conflict = 409,
        Gone = 410,
        Length_Required = 411,
        Precondition_Failed = 412,
        Request_Entity_Too_Large = 413,
        Request_URI_Too_Long = 414,
        Unsupported_Media_Type = 415,
        Requested_Range_Not_Satisfiable = 416,
        Expectation_Failed = 417,
        Teapot = 418,
        Unprocessable_Entity = 422,
        Locked = 423,
        Failed_Dependency = 424,
        Upgrade_Required = 426,
        Precondition_Required = 428,
        Too_Many_Requests = 429,
        Request_Header_Fields_Too_Large = 431,
        Unavailable_For_Legal_Reasons = 451,
        Internal_Server_Error = 500,
        Not_Implemented = 501,
        Bad_Gateway = 502,
        Service_Unavailable = 503,
        Gateway_Timeout = 504,
        HTTP_Version_Not_Supported = 505,
        Insufficient_Storage = 507,
        Loop_Detected = 508,
        Not_Extended = 510,
        Network_Authentication_Required = 511,
        Network_Read_Timeout_Error = 598,
        Network_Connect_Timeout_Error = 599
    }
}

declare namespace $ {
    type $mol_rest_port_mime_hi = 'text' | 'application' | 'font' | 'audio' | 'video' | 'image' | 'model';
    type $mol_rest_port_mime = `${$mol_rest_port_mime_hi}/${string}`;
    class $mol_rest_port extends $mol_object {
        send_code(code: $mol_rest_code): void;
        send_type(mime: $mol_rest_port_mime): void;
        send_data(data: null | string | Uint8Array | Element | object): void;
        send_nil(): void;
        send_bin(data: Uint8Array): void;
        send_text(data: string): void;
        send_json(data: object): void;
        send_dom(data: Element): void;
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    class $mol_wire_set<Value> extends Set<Value> {
        pub: $mol_wire_pub;
        has(value: Value): boolean;
        entries(): SetIterator<[Value, Value]>;
        keys(): SetIterator<Value>;
        values(): SetIterator<Value>;
        forEach(task: (value: Value, value2: Value, set: Set<Value>) => void, self?: any): void;
        [Symbol.iterator](): SetIterator<Value>;
        get size(): number;
        add(value: Value): this;
        delete(value: Value): boolean;
        clear(): void;
        item(val: Value, next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_rest_port_ws extends $mol_rest_port {
    }
}

declare namespace $ {
    class $mol_rest_port_ws_std extends $mol_rest_port_ws {
        socket: WebSocket;
        send_nil(): void;
        send_bin(data: Uint8Array): void;
        send_text(data: string): void;
    }
}

declare namespace $ {
    class $hyoo_crus_yard extends $mol_object {
        glob(): $hyoo_crus_glob;
        lands_news: $mol_wire_set<symbol & {
            $hyoo_crus_ref: symbol;
        }>;
        static masters: string[];
        master_cursor(next?: number): number;
        master_current(): string;
        master_next(): void;
        reconnects(reset?: null): number;
        master(): $mol_rest_port | null;
        slaves: $mol_wire_set<$mol_rest_port>;
        sync(): void;
        sync_news(): void;
        sync_port(): void;
        sync_port_lands(port: $mol_rest_port): void;
        ports(): $mol_rest_port[];
        masters(): $mol_rest_port[];
        port_lands_active(port: $mol_rest_port): $mol_wire_set<symbol & {
            $hyoo_crus_ref: symbol;
        }>;
        port_lands_passive(port: $mol_rest_port): Set<symbol & {
            $hyoo_crus_ref: symbol;
        }>;
        port_income(port: $mol_rest_port, msg: Uint8Array<ArrayBuffer>): void;
        face_port_sync(port: $mol_rest_port, income: Record<$hyoo_crus_ref, {
            faces: $hyoo_crus_face_map;
            units: $hyoo_crus_unit[];
        }>): void;
        sync_land(land: $hyoo_crus_ref): void;
        forget_land(land: $hyoo_crus_land): void;
        sync_port_land([port, land]: [$mol_rest_port, $hyoo_crus_ref]): void;
        init_port_land([port, land]: [$mol_rest_port, $hyoo_crus_ref]): void;
        face_port_land([port, land]: [$mol_rest_port, $hyoo_crus_ref], next?: null | $hyoo_crus_face_map): $hyoo_crus_face_map | null;
    }
}

declare namespace $ {
}

declare namespace $ {
    enum $hyoo_crus_unit_kind {
        pass = 255,
        gift = 247,
        sand = 8
    }
    let $hyoo_crus_unit_trusted: WeakSet<$hyoo_crus_unit>;
    class $hyoo_crus_unit extends $mol_buffer {
        static size: 128;
        constructor(buffer?: ArrayBuffer, byteOffset?: number, byteLength?: number);
        kind(): keyof typeof $hyoo_crus_unit_kind;
        choose<Res>(ways: {
            pass: (unit: $hyoo_crus_pass) => Res;
            gift: (unit: $hyoo_crus_gift) => Res;
            sand: (unit: $hyoo_crus_sand) => Res;
        }): Res;
        narrow(): $hyoo_crus_sand | $hyoo_crus_pass | $hyoo_crus_gift;
        key(): string;
        id6(offset: number, next?: string): string;
        id12(offset: number, next?: $hyoo_crus_ref): symbol & {
            $hyoo_crus_ref: symbol;
        };
        _peer: string;
        peer(next?: string): string;
        salt(): Uint8Array<ArrayBuffer>;
        sens(next?: ArrayLike<number>): Uint8Array<ArrayBuffer>;
        mix(mixin: Uint8Array): void;
        sign(next?: ArrayLike<number>): Uint8Array<ArrayBuffer>;
        signed(): boolean;
        work(): number;
        rank_min(): number & {
            $hyoo_crus_rank: number;
        };
        _land: null | $hyoo_crus_land;
        dump(): {};
    }
}

declare namespace $ {
    class $hyoo_crus_pass extends $hyoo_crus_unit {
        _lord: $hyoo_crus_ref;
        lord(next?: $hyoo_crus_ref): symbol & {
            $hyoo_crus_ref: symbol;
        };
        key(): string;
        auth(next?: ArrayLike<number>): Uint8Array<ArrayBuffer>;
        dump(): {
            kind: "pass" | "gift" | "sand";
            lord: string;
        };
        rank_min(): number & {
            $hyoo_crus_rank: number;
        };
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    class $hyoo_crus_gift extends $hyoo_crus_unit {
        rank(next?: typeof $hyoo_crus_rank.Value): number & {
            $hyoo_crus_rank: number;
        };
        time(next?: number): number;
        free(): Uint8Array<ArrayBuffer>;
        _dest: $hyoo_crus_ref;
        dest(next?: $hyoo_crus_ref): symbol & {
            $hyoo_crus_ref: symbol;
        };
        key(): string;
        bill(): Uint8Array<ArrayBuffer>;
        static compare(left: $hyoo_crus_gift, right: $hyoo_crus_gift): number;
        dump(): {
            kind: "pass" | "gift" | "sand";
            peer: string;
            dest: string;
            tier: string;
            work: number;
            time: string;
        };
        rank_min(): number & {
            $hyoo_crus_rank: number;
        };
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    class $hyoo_crus_mine extends $mol_object {
        static unit_updates: number;
        static unit_appends: number;
        static rock_writes: number;
        static hash(blob: Uint8Array): Uint8Array<ArrayBuffer>;
        static rock(hash: Uint8Array, next?: Uint8Array): Uint8Array | null;
        static rock_save(blob: Uint8Array): Uint8Array<ArrayBuffer>;
        static units_persisted: WeakSet<$hyoo_crus_unit>;
        static units(land: $hyoo_crus_ref, next?: readonly $hyoo_crus_unit[]): readonly $hyoo_crus_unit[];
        static units_load(land: $hyoo_crus_ref): Promise<readonly $hyoo_crus_unit[]>;
        static units_save(land: $hyoo_crus_ref, units: readonly $hyoo_crus_unit[]): Promise<void>;
    }
}

declare namespace $ {
    function $mol_db_response<Result>(request: IDBRequest<Result>): Promise<Result>;
}

declare namespace $ {
    class $mol_db_store<Schema extends $mol_db_store_schema> {
        readonly native: IDBObjectStore;
        constructor(native: IDBObjectStore);
        get name(): string;
        get path(): string | string[];
        get incremental(): boolean;
        get indexes(): { [Name in keyof Schema["Indexes"]]: $mol_db_index<{
            Key: Schema["Indexes"][Name];
            Doc: Schema["Doc"];
        }>; };
        index_make(name: string, path?: string[], unique?: boolean, multiEntry?: boolean): IDBIndex;
        index_drop(name: string): this;
        get transaction(): $mol_db_transaction<$mol_db_schema>;
        get db(): $mol_db_database<$mol_db_schema>;
        clear(): Promise<undefined>;
        count(keys?: Schema['Key'] | IDBKeyRange): Promise<number>;
        put(doc: Schema['Doc'], key?: Schema['Key']): Promise<IDBValidKey>;
        get(key: Schema['Key']): Promise<Schema["Doc"] | undefined>;
        select(key?: Schema['Key'] | IDBKeyRange | null, count?: number): Promise<Schema["Doc"][]>;
        drop(keys: Schema['Key'] | IDBKeyRange): Promise<undefined>;
    }
}

declare namespace $ {
    type $mol_db_store_schema = {
        Key: IDBValidKey;
        Doc: unknown;
        Indexes: Record<string, IDBValidKey[]>;
    };
}

declare namespace $ {
    class $mol_db_index<Schema extends $mol_db_index_schema> {
        readonly native: IDBIndex;
        constructor(native: IDBIndex);
        get name(): string;
        get paths(): string[];
        get unique(): boolean;
        get multiple(): boolean;
        get store(): $mol_db_store<$mol_db_store_schema>;
        get transaction(): $mol_db_transaction<$mol_db_schema>;
        get db(): $mol_db_database<$mol_db_schema>;
        count(keys?: Schema['Key'] | IDBKeyRange): Promise<number>;
        get(key: Schema['Key']): Promise<Schema["Doc"] | undefined>;
        select(key?: Schema['Key'] | IDBKeyRange | null, count?: number): Promise<Schema["Doc"][]>;
    }
}

declare namespace $ {
    type $mol_db_index_schema = {
        Key: IDBValidKey[];
        Doc: unknown;
    };
}

declare namespace $ {
    function $mol_db<Schema extends $mol_db_schema>(this: $, name: string, ...migrations: ((transaction: $mol_db_transaction<$mol_db_schema>) => void)[]): Promise<$mol_db_database<Schema>>;
}

declare namespace $ {
    type $mol_db_schema = Record<string, $mol_db_store_schema>;
}

declare namespace $ {
    class $mol_db_database<Schema extends $mol_db_schema> {
        readonly native: IDBDatabase;
        constructor(native: IDBDatabase);
        get name(): string;
        get version(): number;
        get stores(): (keyof Schema)[];
        read<Names extends Exclude<keyof Schema, symbol | number>>(...names: Names[]): Pick<Schema, Names> extends infer T extends $mol_db_schema ? { [Name in keyof T]: $mol_db_store<Pick<Schema, Names>[Name]>; } : never;
        change<Names extends Exclude<keyof Schema, symbol | number>>(...names: Names[]): $mol_db_transaction<Pick<Schema, Names>>;
        kill(): Promise<IDBDatabase>;
        destructor(): void;
    }
}

interface IDBTransaction {
    commit(): void;
}
declare namespace $ {
    class $mol_db_transaction<Schema extends $mol_db_schema> {
        readonly native: IDBTransaction;
        constructor(native: IDBTransaction);
        get stores(): { [Name in keyof Schema]: $mol_db_store<Schema[Name]>; };
        store_make(name: string): IDBObjectStore;
        store_drop(name: string): this;
        abort(): void;
        commit(): Promise<void>;
        get db(): $mol_db_database<$mol_db_schema>;
    }
}

declare namespace $ {
    class $hyoo_crus_mine_idb extends $hyoo_crus_mine {
        static rock(hash: Uint8Array<ArrayBuffer>, next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer> | null;
        static rock_read(): $mol_db_store<{
            Key: [hash: Uint8Array<ArrayBuffer>];
            Doc: ArrayBuffer;
            Indexes: {};
        }>;
        static rock_change(): Promise<$mol_db_store<{
            Key: [hash: Uint8Array<ArrayBuffer>];
            Doc: ArrayBuffer;
            Indexes: {};
        }>>;
        static units_save(land: $hyoo_crus_ref, units: readonly $hyoo_crus_unit[]): Promise<void>;
        static units_load(land: $hyoo_crus_ref): Promise<($hyoo_crus_sand | $hyoo_crus_pass | $hyoo_crus_gift)[]>;
        static db_sync(): $mol_db_database<{
            Rock: {
                Key: [hash: Uint8Array<ArrayBuffer>];
                Doc: ArrayBuffer;
                Indexes: {};
            };
            Land: {
                Key: [land: string, path: string];
                Doc: ArrayBuffer;
                Indexes: {};
            };
        }>;
        static db(): Promise<$mol_db_database<{
            Rock: {
                Key: [hash: Uint8Array<ArrayBuffer>];
                Doc: ArrayBuffer;
                Indexes: {};
            };
            Land: {
                Key: [land: string, path: string];
                Doc: ArrayBuffer;
                Indexes: {};
            };
        }>>;
    }
}

declare namespace $ {
}

declare namespace $ {
    enum $hyoo_crus_sand_tag {
        term = 0,
        solo = 1,
        vals = 2,
        keys = 3
    }
    class $hyoo_crus_sand extends $hyoo_crus_unit {
        _vary: undefined | $hyoo_crus_vary_type;
        _open: null | Uint8Array;
        hint(tip?: keyof typeof $hyoo_crus_vary_tip, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        tag(): keyof typeof $hyoo_crus_sand_tag;
        tip(): keyof typeof $hyoo_crus_vary_tip;
        utf(): boolean;
        size(next?: number): number;
        time(next?: number): number;
        _head: string;
        head(next?: string): string;
        _self: string;
        self(next?: string): string;
        key(): string;
        _lead: string;
        lead(next?: string): string;
        hash(next?: Uint8Array, tip?: keyof typeof $hyoo_crus_vary_tip, tag?: keyof typeof $hyoo_crus_sand_tag): Uint8Array<ArrayBuffer>;
        meta(): Uint8Array<ArrayBuffer>;
        data(next?: Uint8Array, tip?: keyof typeof $hyoo_crus_vary_tip, tag?: keyof typeof $hyoo_crus_sand_tag): Uint8Array<ArrayBuffer>;
        idea(): number;
        static compare(left: $hyoo_crus_sand, right: $hyoo_crus_sand): number;
        dump(): {
            kind: "pass" | "gift" | "sand";
            peer: string;
            lead: string;
            head: string;
            self: string;
            tip: "ref" | "nil" | "bin" | "bool" | "int" | "real" | "ints" | "reals" | "str" | "time" | "dur" | "range" | "json" | "jsan" | "dom" | "tree";
            tag: "keys" | "term" | "solo" | "vals";
            size: number;
            time: string;
        };
        rank_min(): number & {
            $hyoo_crus_rank: number;
        };
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    class $hyoo_crus_node extends $mol_object {
        static tag: keyof typeof $hyoo_crus_sand_tag;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node extends typeof $hyoo_crus_node>(Node: Node): InstanceType<Node>;
        nodes<Node extends typeof $hyoo_crus_node>(Node: Node | null): readonly InstanceType<Node>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    function $mol_reconcile<Prev, Next>({ prev, from, to, next, equal, drop, insert, update, replace, }: {
        prev: readonly Prev[];
        from: number;
        to: number;
        next: ArrayLike<Next>;
        equal: (next: Next, prev: Prev) => boolean;
        drop: (prev: Prev, lead: Prev | null) => Prev | null;
        insert: (next: Next, lead: Prev | null) => Prev;
        update?: (next: Next, prev: Prev, lead: Prev | null) => Prev;
        replace?: (next: Next, prev: Prev, lead: Prev | null) => Prev;
    }): void;
}

declare namespace $ {
    export class $hyoo_crus_list_vary extends $hyoo_crus_node {
        static tag: keyof typeof $hyoo_crus_sand_tag;
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node extends typeof $hyoo_crus_node>(Node: Node, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node>;
        [$mol_dev_format_head](): any[];
    }
    export function $hyoo_crus_list<Parse extends $mol_data_value>(parse: Parse): (abstract new () => {
        items(next?: readonly ReturnType<Parse>[]): readonly ReturnType<Parse>[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: Parse;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    const $hyoo_crus_list_bin_base: (abstract new () => {
        items(next?: readonly (Uint8Array<ArrayBufferLike> | null)[] | undefined): readonly (Uint8Array<ArrayBufferLike> | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_bin;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_bin extends $hyoo_crus_list_bin_base {
    }
    const $hyoo_crus_list_bool_base: (abstract new () => {
        items(next?: readonly (boolean | null)[] | undefined): readonly (boolean | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_bool;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_bool extends $hyoo_crus_list_bool_base {
    }
    const $hyoo_crus_list_int_base: (abstract new () => {
        items(next?: readonly (bigint | null)[] | undefined): readonly (bigint | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_int;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_int extends $hyoo_crus_list_int_base {
    }
    const $hyoo_crus_list_real_base: (abstract new () => {
        items(next?: readonly (number | null)[] | undefined): readonly (number | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_real;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_real extends $hyoo_crus_list_real_base {
    }
    const $hyoo_crus_list_ints_base: (abstract new () => {
        items(next?: readonly (BigInt64Array<ArrayBufferLike> | null)[] | undefined): readonly (BigInt64Array<ArrayBufferLike> | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_ints;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_ints extends $hyoo_crus_list_ints_base {
    }
    const $hyoo_crus_list_reals_base: (abstract new () => {
        items(next?: readonly (Float64Array<ArrayBufferLike> | null)[] | undefined): readonly (Float64Array<ArrayBufferLike> | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_reals;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_reals extends $hyoo_crus_list_reals_base {
    }
    const $hyoo_crus_list_ref_base_1: (abstract new () => {
        items(next?: readonly ((symbol & {
            $hyoo_crus_ref: symbol;
        }) | null)[] | undefined): readonly ((symbol & {
            $hyoo_crus_ref: symbol;
        }) | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_ref;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_ref extends $hyoo_crus_list_ref_base_1 {
    }
    const $hyoo_crus_list_str_base: (abstract new () => {
        items(next?: readonly (string | null)[] | undefined): readonly (string | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_str;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_str extends $hyoo_crus_list_str_base {
    }
    const $hyoo_crus_list_time_base: (abstract new () => {
        items(next?: readonly ($mol_time_moment | null)[] | undefined): readonly ($mol_time_moment | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_time;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_time extends $hyoo_crus_list_time_base {
    }
    const $hyoo_crus_list_dur_base: (abstract new () => {
        items(next?: readonly ($mol_time_duration | null)[] | undefined): readonly ($mol_time_duration | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_dur;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_dur extends $hyoo_crus_list_dur_base {
    }
    const $hyoo_crus_list_range_base: (abstract new () => {
        items(next?: readonly ($mol_time_interval | null)[] | undefined): readonly ($mol_time_interval | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_range;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_range extends $hyoo_crus_list_range_base {
    }
    const $hyoo_crus_list_json_base: (abstract new () => {
        items(next?: readonly ({} | null)[] | undefined): readonly ({} | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_json;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_json extends $hyoo_crus_list_json_base {
    }
    const $hyoo_crus_list_jsan_base: (abstract new () => {
        items(next?: readonly (any[] | null)[] | undefined): readonly (any[] | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_jsan;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_jsan extends $hyoo_crus_list_jsan_base {
    }
    const $hyoo_crus_list_dom_base: (abstract new () => {
        items(next?: readonly (Element | null)[] | undefined): readonly (Element | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_dom;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_dom extends $hyoo_crus_list_dom_base {
    }
    const $hyoo_crus_list_tree_base: (abstract new () => {
        items(next?: readonly ($mol_tree2 | null)[] | undefined): readonly ($mol_tree2 | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_tree;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_tree extends $hyoo_crus_list_tree_base {
    }
    export class $hyoo_crus_list_ref_base extends $hyoo_crus_list_ref {
    }
    export function $hyoo_crus_list_ref_to<const Value extends any, Vals extends readonly any[] = readonly $mol_type_result<$mol_type_result<Value>>[]>(Value: Value): {
        new (): {
            remote_list(next?: Vals): Vals;
            remote_add(item: Vals[number]): void;
            make(config: null | number | $hyoo_crus_rank_preset | $hyoo_crus_land): Vals[number];
            remote_make(config: $hyoo_crus_rank_preset): Vals[number];
            local_make(idea?: number): Vals[number];
            items(next?: readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[] | undefined): readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[];
            items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
            [$mol_dev_format_head](): any[];
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        };
        Value: Value;
        toString(): any;
        parse: typeof $hyoo_crus_vary_cast_ref;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export {};
}

declare namespace $ {
    class $hyoo_crus_dict extends $hyoo_crus_list_vary {
        static tag: keyof typeof $hyoo_crus_sand_tag;
        keys(): readonly $hyoo_crus_vary_type[];
        dive<Node extends typeof $hyoo_crus_node>(key: $hyoo_crus_vary_type, Node: Node, auto?: any): InstanceType<Node> | null;
        static schema: Record<string, typeof $hyoo_crus_node>;
        static with<This extends typeof $hyoo_crus_dict, const Schema extends Record<string, {
            tag: keyof typeof $hyoo_crus_sand_tag;
            new (): {};
        }>>(this: This, schema: Schema): Omit<This, "prototype"> & (new (...args: any[]) => $mol_type_override<InstanceType<This>, { readonly [Key in keyof Schema]: (auto?: any) => InstanceType<Schema[Key]> | null; }>) & {
            schema: {
                [x: string]: typeof $hyoo_crus_node;
            } & Schema;
        };
        [$mol_dev_format_head](): any[];
    }
    function $hyoo_crus_dict_to<Value extends {
        tag: keyof typeof $hyoo_crus_sand_tag;
        new (): {};
    }>(Value: Value): {
        new (): {
            Value: Value;
            key(key: $hyoo_crus_vary_type, auto?: any): InstanceType<Value>;
            keys(): readonly $hyoo_crus_vary_type[];
            dive<Node_1 extends typeof $hyoo_crus_node>(key: $hyoo_crus_vary_type, Node: Node_1, auto?: any): InstanceType<Node_1> | null;
            [$mol_dev_format_head](): any[];
            items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        };
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        schema: Record<string, typeof $hyoo_crus_node>;
        with<This extends typeof $hyoo_crus_dict, const Schema extends Record<string, {
            tag: keyof typeof $hyoo_crus_sand_tag;
            new (): {};
        }>>(this: This, schema: Schema): Omit<This, "prototype"> & (new (...args: any[]) => $mol_type_override<InstanceType<This>, { readonly [Key in keyof Schema]: (auto?: any) => InstanceType<Schema[Key]> | null; }>) & {
            schema: {
                [x: string]: typeof $hyoo_crus_node;
            } & Schema;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
}

declare namespace $ {
    function $mol_hash_string(str: string, seed?: number): number;
}

declare namespace $ {
    export class $hyoo_crus_atom_vary extends $hyoo_crus_node {
        static tag: keyof typeof $hyoo_crus_sand_tag;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
    }
    export class $hyoo_crus_atom_enum_base extends $hyoo_crus_atom_vary {
        static options: readonly $hyoo_crus_vary_type[];
    }
    export function $hyoo_crus_atom_enum<const Options extends readonly $hyoo_crus_vary_type[]>(options: Options): (abstract new () => {
        val(next?: Options[number]): Options[number] | null;
        val_of(peer: string | null, next?: Options[number]): Options[number] | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        options: Options;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export function $hyoo_crus_atom<Parse extends $mol_data_value>(parse: Parse): (abstract new () => {
        val(next?: ReturnType<Parse>): ReturnType<Parse> | null;
        val_of(peer: string | null, next?: ReturnType<Parse>): ReturnType<Parse> | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: Parse;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    const $hyoo_crus_atom_bin_base: (abstract new () => {
        val(next?: Uint8Array<ArrayBufferLike> | null | undefined): Uint8Array<ArrayBufferLike> | null;
        val_of(peer: string | null, next?: Uint8Array<ArrayBufferLike> | null | undefined): Uint8Array<ArrayBufferLike> | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_bin;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_bin extends $hyoo_crus_atom_bin_base {
    }
    const $hyoo_crus_atom_bool_base: (abstract new () => {
        val(next?: boolean | null | undefined): boolean | null;
        val_of(peer: string | null, next?: boolean | null | undefined): boolean | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_bool;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_bool extends $hyoo_crus_atom_bool_base {
    }
    const $hyoo_crus_atom_int_base: (abstract new () => {
        val(next?: bigint | null | undefined): bigint | null;
        val_of(peer: string | null, next?: bigint | null | undefined): bigint | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_int;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_int extends $hyoo_crus_atom_int_base {
    }
    const $hyoo_crus_atom_real_base: (abstract new () => {
        val(next?: number | null | undefined): number | null;
        val_of(peer: string | null, next?: number | null | undefined): number | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_real;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_real extends $hyoo_crus_atom_real_base {
    }
    const $hyoo_crus_atom_ints_base: (abstract new () => {
        val(next?: BigInt64Array<ArrayBufferLike> | null | undefined): BigInt64Array<ArrayBufferLike> | null;
        val_of(peer: string | null, next?: BigInt64Array<ArrayBufferLike> | null | undefined): BigInt64Array<ArrayBufferLike> | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_ints;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_ints extends $hyoo_crus_atom_ints_base {
    }
    const $hyoo_crus_atom_reals_base: (abstract new () => {
        val(next?: Float64Array<ArrayBufferLike> | null | undefined): Float64Array<ArrayBufferLike> | null;
        val_of(peer: string | null, next?: Float64Array<ArrayBufferLike> | null | undefined): Float64Array<ArrayBufferLike> | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_reals;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_reals extends $hyoo_crus_atom_reals_base {
    }
    const $hyoo_crus_atom_ref_base_1: (abstract new () => {
        val(next?: (symbol & {
            $hyoo_crus_ref: symbol;
        }) | null | undefined): (symbol & {
            $hyoo_crus_ref: symbol;
        }) | null;
        val_of(peer: string | null, next?: (symbol & {
            $hyoo_crus_ref: symbol;
        }) | null | undefined): (symbol & {
            $hyoo_crus_ref: symbol;
        }) | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_ref;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_ref extends $hyoo_crus_atom_ref_base_1 {
    }
    const $hyoo_crus_atom_str_base: (abstract new () => {
        val(next?: string | null | undefined): string | null;
        val_of(peer: string | null, next?: string | null | undefined): string | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_str;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_str extends $hyoo_crus_atom_str_base {
    }
    const $hyoo_crus_atom_time_base: (abstract new () => {
        val(next?: $mol_time_moment | null | undefined): $mol_time_moment | null;
        val_of(peer: string | null, next?: $mol_time_moment | null | undefined): $mol_time_moment | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_time;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_time extends $hyoo_crus_atom_time_base {
    }
    const $hyoo_crus_atom_dur_base: (abstract new () => {
        val(next?: $mol_time_duration | null | undefined): $mol_time_duration | null;
        val_of(peer: string | null, next?: $mol_time_duration | null | undefined): $mol_time_duration | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_dur;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_dur extends $hyoo_crus_atom_dur_base {
    }
    const $hyoo_crus_atom_range_base: (abstract new () => {
        val(next?: $mol_time_interval | null | undefined): $mol_time_interval | null;
        val_of(peer: string | null, next?: $mol_time_interval | null | undefined): $mol_time_interval | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_range;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_range extends $hyoo_crus_atom_range_base {
    }
    const $hyoo_crus_atom_json_base: (abstract new () => {
        val(next?: {} | null | undefined): {} | null;
        val_of(peer: string | null, next?: {} | null | undefined): {} | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_json;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_json extends $hyoo_crus_atom_json_base {
    }
    const $hyoo_crus_atom_jsan_base: (abstract new () => {
        val(next?: any[] | null | undefined): any[] | null;
        val_of(peer: string | null, next?: any[] | null | undefined): any[] | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_jsan;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_jsan extends $hyoo_crus_atom_jsan_base {
    }
    const $hyoo_crus_atom_dom_base: (abstract new () => {
        val(next?: Element | null | undefined): Element | null;
        val_of(peer: string | null, next?: Element | null | undefined): Element | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_dom;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_dom extends $hyoo_crus_atom_dom_base {
    }
    const $hyoo_crus_atom_tree_base: (abstract new () => {
        val(next?: $mol_tree2 | null | undefined): $mol_tree2 | null;
        val_of(peer: string | null, next?: $mol_tree2 | null | undefined): $mol_tree2 | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_tree;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_tree extends $hyoo_crus_atom_tree_base {
    }
    export class $hyoo_crus_atom_ref_base extends $hyoo_crus_atom_ref {
        static Value: typeof $hyoo_crus_dict;
    }
    export function $hyoo_crus_atom_ref_to<const Value extends any>(Value: Value): {
        new (): {
            Value: Value;
            remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
            remote_of(peer: string | null, next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
            ensure(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $mol_type_result<$mol_type_result<Value>> | null;
            ensure_of(peer: string | null, config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $mol_type_result<$mol_type_result<Value>> | null;
            ensure_here(peer: string | null): void;
            ensure_area(peer: string | null, land: $hyoo_crus_land): void;
            ensure_lord(peer: string | null, preset: $hyoo_crus_rank_preset): void;
            remote_ensure(preset?: $hyoo_crus_rank_preset): $mol_type_result<$mol_type_result<Value>> | null;
            local_ensure(): $mol_type_result<$mol_type_result<Value>> | null;
            val(next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            val_of(peer: string | null, next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
            vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
            vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
            [$mol_dev_format_head](): any[];
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        };
        toString(): any;
        Value: typeof $hyoo_crus_dict;
        parse: typeof $hyoo_crus_vary_cast_ref;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export {};
}

declare namespace $ {
    const $hyoo_crus_entity_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Title: (auto?: any) => $hyoo_crus_atom_str | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Title: typeof $hyoo_crus_atom_str;
        };
    };
    export class $hyoo_crus_entity extends $hyoo_crus_entity_base {
        title(next?: string): string;
    }
    export {};
}

declare namespace $ {
    const $hyoo_crus_home_base: Omit<typeof $hyoo_crus_entity, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_entity, {
        readonly Selection: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Hall: (auto?: any) => {
            Value: Value;
            remote(next?: $hyoo_crus_dict | null | undefined): $hyoo_crus_dict | null;
            remote_of(peer: string | null, next?: $hyoo_crus_dict | null | undefined): $hyoo_crus_dict | null;
            ensure(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $hyoo_crus_dict | null;
            ensure_of(peer: string | null, config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $hyoo_crus_dict | null;
            ensure_here(peer: string | null): void;
            ensure_area(peer: string | null, land: $hyoo_crus_land): void;
            ensure_lord(peer: string | null, preset: $hyoo_crus_rank_preset): void;
            remote_ensure(preset?: $hyoo_crus_rank_preset): $hyoo_crus_dict | null;
            local_ensure(): $hyoo_crus_dict | null;
            val(next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            val_of(peer: string | null, next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
            vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
            vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
            [$mol_dev_format_head](): any[];
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Selection: typeof $hyoo_crus_atom_str;
            readonly Hall: {
                new (): {
                    Value: () => typeof $hyoo_crus_dict;
                    remote(next?: $hyoo_crus_dict | null | undefined): $hyoo_crus_dict | null;
                    remote_of(peer: string | null, next?: $hyoo_crus_dict | null | undefined): $hyoo_crus_dict | null;
                    ensure(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $hyoo_crus_dict | null;
                    ensure_of(peer: string | null, config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $hyoo_crus_dict | null;
                    ensure_here(peer: string | null): void;
                    ensure_area(peer: string | null, land: $hyoo_crus_land): void;
                    ensure_lord(peer: string | null, preset: $hyoo_crus_rank_preset): void;
                    remote_ensure(preset?: $hyoo_crus_rank_preset): $hyoo_crus_dict | null;
                    local_ensure(): $hyoo_crus_dict | null;
                    val(next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null | undefined): (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    val_of(peer: string | null, next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null | undefined): (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
                    vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
                    vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
                    [$mol_dev_format_head](): any[];
                    land(): $hyoo_crus_land;
                    head(): string;
                    land_ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    toJSON(): string | undefined;
                    cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
                    nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
                    units(): $hyoo_crus_sand[];
                    units_of(peer: string | null): $hyoo_crus_sand[];
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    author_peers(): string[];
                    author_lords(): (symbol & {
                        $hyoo_crus_ref: symbol;
                    })[];
                    $: $;
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                };
                toString(): any;
                Value: typeof $hyoo_crus_dict;
                parse: typeof $hyoo_crus_vary_cast_ref;
                tag: keyof typeof $hyoo_crus_sand_tag;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
            };
        };
    };
    export class $hyoo_crus_home extends $hyoo_crus_home_base {
        hall_by<Node extends typeof $hyoo_crus_dict>(Node: Node, preset?: $hyoo_crus_rank_preset): InstanceType<Node> | null;
    }
    export {};
}

declare namespace $ {
    class $hyoo_crus_glob extends $mol_object {
        static lands_touched: $mol_wire_set<symbol & {
            $hyoo_crus_ref: symbol;
        }>;
        lands_touched: $mol_wire_set<symbol & {
            $hyoo_crus_ref: symbol;
        }>;
        static yard(): $hyoo_crus_yard;
        yard(): $hyoo_crus_yard;
        static home<Node extends typeof $hyoo_crus_home = typeof $hyoo_crus_home>(Node?: Node): InstanceType<Node>;
        home(): $hyoo_crus_home;
        static king_grab(preset?: $hyoo_crus_rank_preset): $hyoo_crus_auth;
        king_grab(preset?: $hyoo_crus_rank_preset): $hyoo_crus_auth;
        static land_grab(preset?: $hyoo_crus_rank_preset): $hyoo_crus_land;
        land_grab(preset?: $hyoo_crus_rank_preset): $hyoo_crus_land;
        static Land(ref: $hyoo_crus_ref): $hyoo_crus_land;
        Land(ref: $hyoo_crus_ref): $hyoo_crus_land;
        static Node<Node extends typeof $hyoo_crus_node>(ref: $hyoo_crus_ref, Node: Node): InstanceType<Node>;
        Node<Node extends typeof $hyoo_crus_node>(ref: $hyoo_crus_ref, Node: Node): InstanceType<Node>;
        static apply_pack(pack: $hyoo_crus_pack): void;
        apply_pack(pack: $hyoo_crus_pack): void;
        static apply_parts(lands: Record<$hyoo_crus_ref, {
            faces: $hyoo_crus_face_map;
            units: $hyoo_crus_unit[];
        }>, rocks: [Uint8Array, Uint8Array | null][]): void;
        apply_parts(lands: Record<$hyoo_crus_ref, {
            faces: $hyoo_crus_face_map;
            units: $hyoo_crus_unit[];
        }>, rocks: [Uint8Array, Uint8Array | null][]): void;
    }
}

declare namespace $ {

	export class $apxutechtop_samosbor_map_block_row extends $mol_view {
		sub( ): readonly(any)[]
	}
	
	export class $apxutechtop_samosbor_map_block_part extends $mol_view {
		content( ): any
		sub( ): readonly(any)[]
	}
	
	export class $apxutechtop_samosbor_map_block_flight extends $apxutechtop_samosbor_map_block_part {
	}
	
	type $mol_view__sub_apxutechtop_samosbor_map_block_passage_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxutechtop_samosbor_map_block_passage_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $apxutechtop_samosbor_map_block_passage extends $mol_view {
		type( next?: string ): string
		flex_direction( ): string
		floor_inc_value( ): string
		floor_inc( ): $mol_view
		stairs( ): $apxutechtop_samosbor_map_icon_stairs
		content( ): any
		up( ): boolean
		right( ): boolean
		down( ): boolean
		left( ): boolean
		attr( ): ({ 
			'type': ReturnType< $apxutechtop_samosbor_map_block_passage['type'] >,
			'up': ReturnType< $apxutechtop_samosbor_map_block_passage['up'] >,
			'right': ReturnType< $apxutechtop_samosbor_map_block_passage['right'] >,
			'down': ReturnType< $apxutechtop_samosbor_map_block_passage['down'] >,
			'left': ReturnType< $apxutechtop_samosbor_map_block_passage['left'] >,
		}) 
		style( ): ({ 
			'flex-direction': ReturnType< $apxutechtop_samosbor_map_block_passage['flex_direction'] >,
		}) 
		InterFloor( ): $mol_view
		sub( ): readonly(any)[]
	}
	
	export class $apxutechtop_samosbor_map_block_middle_flight extends $mol_view {
	}
	
	type $mol_view__sub_apxutechtop_samosbor_map_block_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $apxutechtop_samosbor_map_block_flight__event_apxutechtop_samosbor_map_block_2 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxutechtop_samosbor_map_block['left_flight_click'] > ): ReturnType< $apxutechtop_samosbor_map_block['left_flight_click'] >,
		}) 
		,
		ReturnType< $apxutechtop_samosbor_map_block_flight['event'] >
	>
	type $apxutechtop_samosbor_map_block_flight__sub_apxutechtop_samosbor_map_block_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxutechtop_samosbor_map_block_flight['sub'] >
	>
	type $apxutechtop_samosbor_map_block_passage__type_apxutechtop_samosbor_map_block_4 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_block['up_left_passage_type'] >
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['type'] >
	>
	type $apxutechtop_samosbor_map_block_passage__event_apxutechtop_samosbor_map_block_5 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxutechtop_samosbor_map_block['up_left_passage_click'] > ): ReturnType< $apxutechtop_samosbor_map_block['up_left_passage_click'] >,
		}) 
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['event'] >
	>
	type $apxutechtop_samosbor_map_block_passage__up_apxutechtop_samosbor_map_block_6 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['up'] >
	>
	type $apxutechtop_samosbor_map_block_passage__left_apxutechtop_samosbor_map_block_7 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['left'] >
	>
	type $mol_view__sub_apxutechtop_samosbor_map_block_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxutechtop_samosbor_map_block_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $apxutechtop_samosbor_map_block_part__sub_apxutechtop_samosbor_map_block_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxutechtop_samosbor_map_block_part['sub'] >
	>
	type $apxutechtop_samosbor_map_block_passage__type_apxutechtop_samosbor_map_block_11 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_block['up_right_passage_type'] >
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['type'] >
	>
	type $apxutechtop_samosbor_map_block_passage__event_apxutechtop_samosbor_map_block_12 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxutechtop_samosbor_map_block['up_right_passage_click'] > ): ReturnType< $apxutechtop_samosbor_map_block['up_right_passage_click'] >,
		}) 
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['event'] >
	>
	type $apxutechtop_samosbor_map_block_passage__up_apxutechtop_samosbor_map_block_13 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['up'] >
	>
	type $apxutechtop_samosbor_map_block_passage__right_apxutechtop_samosbor_map_block_14 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['right'] >
	>
	type $apxutechtop_samosbor_map_block_flight__event_apxutechtop_samosbor_map_block_15 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxutechtop_samosbor_map_block['right_flight_click'] > ): ReturnType< $apxutechtop_samosbor_map_block['right_flight_click'] >,
		}) 
		,
		ReturnType< $apxutechtop_samosbor_map_block_flight['event'] >
	>
	type $apxutechtop_samosbor_map_block_flight__sub_apxutechtop_samosbor_map_block_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxutechtop_samosbor_map_block_flight['sub'] >
	>
	type $apxutechtop_samosbor_map_block_row__sub_apxutechtop_samosbor_map_block_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxutechtop_samosbor_map_block_row['sub'] >
	>
	type $apxutechtop_samosbor_map_block_passage__type_apxutechtop_samosbor_map_block_18 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_block['left_passage_type'] >
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['type'] >
	>
	type $apxutechtop_samosbor_map_block_passage__event_apxutechtop_samosbor_map_block_19 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxutechtop_samosbor_map_block['left_passage_click'] > ): ReturnType< $apxutechtop_samosbor_map_block['left_passage_click'] >,
		}) 
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['event'] >
	>
	type $apxutechtop_samosbor_map_block_passage__left_apxutechtop_samosbor_map_block_20 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['left'] >
	>
	type $apxutechtop_samosbor_map_block_passage__type_apxutechtop_samosbor_map_block_21 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_block['right_passage_type'] >
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['type'] >
	>
	type $apxutechtop_samosbor_map_block_passage__event_apxutechtop_samosbor_map_block_22 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxutechtop_samosbor_map_block['right_passage_click'] > ): ReturnType< $apxutechtop_samosbor_map_block['right_passage_click'] >,
		}) 
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['event'] >
	>
	type $apxutechtop_samosbor_map_block_passage__right_apxutechtop_samosbor_map_block_23 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['right'] >
	>
	type $mol_view__sub_apxutechtop_samosbor_map_block_24 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxutechtop_samosbor_map_block_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxutechtop_samosbor_map_block_26 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxutechtop_samosbor_map_block_27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxutechtop_samosbor_map_block_28 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $apxutechtop_samosbor_map_block_part__sub_apxutechtop_samosbor_map_block_29 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxutechtop_samosbor_map_block_part['sub'] >
	>
	type $apxutechtop_samosbor_map_block_passage__type_apxutechtop_samosbor_map_block_30 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_block['down_left_passage_type'] >
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['type'] >
	>
	type $apxutechtop_samosbor_map_block_passage__event_apxutechtop_samosbor_map_block_31 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxutechtop_samosbor_map_block['down_left_passage_click'] > ): ReturnType< $apxutechtop_samosbor_map_block['down_left_passage_click'] >,
		}) 
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['event'] >
	>
	type $apxutechtop_samosbor_map_block_passage__down_apxutechtop_samosbor_map_block_32 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['down'] >
	>
	type $apxutechtop_samosbor_map_block_passage__left_apxutechtop_samosbor_map_block_33 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['left'] >
	>
	type $apxutechtop_samosbor_map_block_passage__type_apxutechtop_samosbor_map_block_34 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_block['down_right_passage_type'] >
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['type'] >
	>
	type $apxutechtop_samosbor_map_block_passage__event_apxutechtop_samosbor_map_block_35 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxutechtop_samosbor_map_block['down_right_passage_click'] > ): ReturnType< $apxutechtop_samosbor_map_block['down_right_passage_click'] >,
		}) 
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['event'] >
	>
	type $apxutechtop_samosbor_map_block_passage__down_apxutechtop_samosbor_map_block_36 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['down'] >
	>
	type $apxutechtop_samosbor_map_block_passage__right_apxutechtop_samosbor_map_block_37 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['right'] >
	>
	type $apxutechtop_samosbor_map_block_row__sub_apxutechtop_samosbor_map_block_38 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxutechtop_samosbor_map_block_row['sub'] >
	>
	type $mol_view__sub_apxutechtop_samosbor_map_block_39 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__attr_apxutechtop_samosbor_map_block_40 = $mol_type_enforce<
		({ 
			'hidden': ReturnType< $apxutechtop_samosbor_map_block['connection_hidden'] >,
			'highlight': ReturnType< $apxutechtop_samosbor_map_block['connection_highlight'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__style_apxutechtop_samosbor_map_block_41 = $mol_type_enforce<
		({ 
			'left': ReturnType< $apxutechtop_samosbor_map_block['connection_left'] >,
			'top': ReturnType< $apxutechtop_samosbor_map_block['connection_top'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__event_apxutechtop_samosbor_map_block_42 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxutechtop_samosbor_map_block['connection_click'] > ): ReturnType< $apxutechtop_samosbor_map_block['connection_click'] >,
		}) 
		,
		ReturnType< $mol_view['event'] >
	>
	type $mol_view__attr_apxutechtop_samosbor_map_block_43 = $mol_type_enforce<
		({ 
			'hidden': ReturnType< $apxutechtop_samosbor_map_block['transition_hidden'] >,
			'direction': ReturnType< $apxutechtop_samosbor_map_block['transition_direction'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__style_apxutechtop_samosbor_map_block_44 = $mol_type_enforce<
		({ 
			'left': ReturnType< $apxutechtop_samosbor_map_block['transition_left'] >,
			'top': ReturnType< $apxutechtop_samosbor_map_block['transition_top'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $apxutechtop_samosbor_map_block_passage__type_apxutechtop_samosbor_map_block_45 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_block['up_middle_passage_type'] >
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['type'] >
	>
	type $apxutechtop_samosbor_map_block_passage__event_apxutechtop_samosbor_map_block_46 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxutechtop_samosbor_map_block['up_middle_passage_click'] > ): ReturnType< $apxutechtop_samosbor_map_block['up_middle_passage_click'] >,
		}) 
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['event'] >
	>
	type $apxutechtop_samosbor_map_block_passage__up_apxutechtop_samosbor_map_block_47 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['up'] >
	>
	type $apxutechtop_samosbor_map_block_passage__type_apxutechtop_samosbor_map_block_48 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_block['down_middle_passage_type'] >
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['type'] >
	>
	type $apxutechtop_samosbor_map_block_passage__event_apxutechtop_samosbor_map_block_49 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxutechtop_samosbor_map_block['down_middle_passage_click'] > ): ReturnType< $apxutechtop_samosbor_map_block['down_middle_passage_click'] >,
		}) 
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['event'] >
	>
	type $apxutechtop_samosbor_map_block_passage__down_apxutechtop_samosbor_map_block_50 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxutechtop_samosbor_map_block_passage['down'] >
	>
	type $apxutechtop_samosbor_map_block_middle_flight__sub_apxutechtop_samosbor_map_block_51 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxutechtop_samosbor_map_block_middle_flight['sub'] >
	>
	type $apxutechtop_samosbor_map_block_middle_flight__sub_apxutechtop_samosbor_map_block_52 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxutechtop_samosbor_map_block_middle_flight['sub'] >
	>
	export class $apxutechtop_samosbor_map_block extends $mol_view {
		block_direction( next?: string ): string
		visible( ): boolean
		selected( next?: boolean ): boolean
		color_letter( ): string
		block_type( next?: string ): string
		left( next?: number ): number
		top( next?: number ): number
		onclick( next?: any ): any
		connection_hidden( id: any): boolean
		connection_highlight( id: any): boolean
		connection_left( id: any): number
		connection_top( id: any): number
		connection_click( id: any, next?: any ): any
		transition_hidden( id: any): boolean
		transition_direction( id: any): string
		transition_left( id: any): number
		transition_top( id: any): number
		stairs_icon( id: any): $apxutechtop_samosbor_map_icon_stairs
		elevator_icon( id: any): $apxutechtop_samosbor_map_icon_elevator
		ladder_icon( id: any): $apxutechtop_samosbor_map_icon_ladder
		ladder_elevator( id: any): $mol_view
		up_middle_passage_type( ): string
		up_middle_passage_click( next?: any ): any
		down_middle_passage_type( ): string
		down_middle_passage_click( next?: any ): any
		up_flight_icon( ): $apxutechtop_samosbor_map_icon_stairs
		down_flight_icon( ): $apxutechtop_samosbor_map_icon_stairs
		connections( ): readonly(any)[]
		connections_list( ): ReturnType< $apxutechtop_samosbor_map_block['connections'] >
		transitions( ): readonly(any)[]
		transitions_list( ): ReturnType< $apxutechtop_samosbor_map_block['transitions'] >
		left_flight_click( next?: any ): any
		left_flight( ): $apxutechtop_samosbor_map_block_flight
		up_left_passage_type( ): string
		up_left_passage_click( next?: any ): any
		up_left_passage( ): $apxutechtop_samosbor_map_block_passage
		block_name( next?: string ): string
		BlockName( ): $mol_view
		display_floor( ): string
		CurrentFloor( ): $mol_view
		up_left_part( ): $apxutechtop_samosbor_map_block_part
		up_passage_or_flight( ): $mol_view
		up_right_part( ): $apxutechtop_samosbor_map_block_part
		up_right_passage_type( ): string
		up_right_passage_click( next?: any ): any
		up_right_passage( ): $apxutechtop_samosbor_map_block_passage
		right_flight_click( next?: any ): any
		right_flight( ): $apxutechtop_samosbor_map_block_flight
		up_row( ): $apxutechtop_samosbor_map_block_row
		left_passage_type( ): string
		left_passage_click( next?: any ): any
		left_passage( ): $apxutechtop_samosbor_map_block_passage
		left_hallway( ): $mol_view
		fence( ): $mol_view
		right_hallway( ): $mol_view
		right_passage_type( ): string
		right_passage_click( next?: any ): any
		right_passage( ): $apxutechtop_samosbor_map_block_passage
		middle_row( ): $mol_view
		max_floor_icon( ): $apxutechtop_samosbor_map_icon_max_floor
		max_floor( next?: number ): number
		max_floor_value( ): $mol_view
		max_floor_view( ): $mol_view
		min_floor_icon( ): $apxutechtop_samosbor_map_icon_min_floor
		min_floor( next?: number ): number
		min_floor_value( ): $mol_view
		min_floor_view( ): $mol_view
		floor_part( ): $apxutechtop_samosbor_map_block_part
		down_left_passage_type( ): string
		down_left_passage_click( next?: any ): any
		down_left_passage( ): $apxutechtop_samosbor_map_block_passage
		down_left_part( ): $apxutechtop_samosbor_map_block_part
		down_passage_or_flight( ): $mol_view
		down_right_part( ): $apxutechtop_samosbor_map_block_part
		down_right_passage_type( ): string
		down_right_passage_click( next?: any ): any
		down_right_passage( ): $apxutechtop_samosbor_map_block_passage
		block_effects_part( ): $apxutechtop_samosbor_map_block_part
		down_row( ): $apxutechtop_samosbor_map_block_row
		content( ): $mol_view
		edit_mode( next?: boolean ): boolean
		create_mode( next?: boolean ): boolean
		connect_mode( next?: boolean ): boolean
		block_data( next?: any ): any
		block_layer( next?: number ): number
		current_layer( next?: number ): number
		pos_x( next?: number ): number
		pos_y( next?: number ): number
		is_up_flight( next?: boolean ): boolean
		is_down_flight( next?: boolean ): boolean
		on_connection_select( next?: any ): any
		attr( ): ({ 
			'direction': ReturnType< $apxutechtop_samosbor_map_block['block_direction'] >,
			'visible': ReturnType< $apxutechtop_samosbor_map_block['visible'] >,
			'selected': ReturnType< $apxutechtop_samosbor_map_block['selected'] >,
			'editing': ReturnType< $apxutechtop_samosbor_map_block['edit_mode'] >,
			'color': ReturnType< $apxutechtop_samosbor_map_block['color_letter'] >,
			'block-type': ReturnType< $apxutechtop_samosbor_map_block['block_type'] >,
		}) 
		style( ): ({ 
			'left': ReturnType< $apxutechtop_samosbor_map_block['left'] >,
			'top': ReturnType< $apxutechtop_samosbor_map_block['top'] >,
		}) 
		event( ): ({ 
			click( next?: ReturnType< $apxutechtop_samosbor_map_block['onclick'] > ): ReturnType< $apxutechtop_samosbor_map_block['onclick'] >,
		}) 
		Connection( id: any): $mol_view
		Transition( id: any): $mol_view
		show_connections( next?: boolean ): boolean
		flight_icons( id: any): ({ 
			'stairs': ReturnType< $apxutechtop_samosbor_map_block['stairs_icon'] >,
			'elevator': ReturnType< $apxutechtop_samosbor_map_block['elevator_icon'] >,
			'ladder_elevator': ReturnType< $apxutechtop_samosbor_map_block['ladder_elevator'] >,
		}) 
		up_middle_passage( ): $apxutechtop_samosbor_map_block_passage
		down_middle_passage( ): $apxutechtop_samosbor_map_block_passage
		up_flight( ): $apxutechtop_samosbor_map_block_middle_flight
		down_flight( ): $apxutechtop_samosbor_map_block_middle_flight
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=block.view.tree.d.ts.map
declare namespace $.$$ {
    type DirectionType = "up" | "right" | "down" | "left";
    type TransitionPosition = "up_left" | "up_right" | "right" | "down_right" | "down_left" | "left";
    const BlockDirection_base: (abstract new () => {
        val(next?: "left" | "right" | "up" | "down" | undefined): "left" | "right" | "up" | "down" | null;
        val_of(peer: string | null, next?: "left" | "right" | "up" | "down" | undefined): "left" | "right" | "up" | "down" | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        options: readonly ["up", "right", "down", "left"];
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class BlockDirection extends BlockDirection_base {
    }
    const TransitionPositionData_base: (abstract new () => {
        val(next?: "left" | "right" | "up_left" | "up_right" | "down_right" | "down_left" | undefined): "left" | "right" | "up_left" | "up_right" | "down_right" | "down_left" | null;
        val_of(peer: string | null, next?: "left" | "right" | "up_left" | "up_right" | "down_right" | "down_left" | undefined): "left" | "right" | "up_left" | "up_right" | "down_right" | "down_left" | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        options: readonly ["up_left", "up_right", "right", "down_right", "down_left", "left"];
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class TransitionPositionData extends TransitionPositionData_base {
    }
    const TransitionPort_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Block: (auto?: any) => {
            Value: Value;
            remote(next?: $apxutechtop_samosbor_map_block_data | null | undefined): $apxutechtop_samosbor_map_block_data | null;
            remote_of(peer: string | null, next?: $apxutechtop_samosbor_map_block_data | null | undefined): $apxutechtop_samosbor_map_block_data | null;
            ensure(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxutechtop_samosbor_map_block_data | null;
            ensure_of(peer: string | null, config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxutechtop_samosbor_map_block_data | null;
            ensure_here(peer: string | null): void;
            ensure_area(peer: string | null, land: $hyoo_crus_land): void;
            ensure_lord(peer: string | null, preset: $hyoo_crus_rank_preset): void;
            remote_ensure(preset?: $hyoo_crus_rank_preset): $apxutechtop_samosbor_map_block_data | null;
            local_ensure(): $apxutechtop_samosbor_map_block_data | null;
            val(next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            val_of(peer: string | null, next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
            vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
            vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
            [$mol_dev_format_head](): any[];
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
        readonly Floor: (auto?: any) => $hyoo_crus_atom_int | null;
        readonly Position: (auto?: any) => TransitionPositionData | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Block: {
                new (): {
                    Value: () => typeof $apxutechtop_samosbor_map_block_data;
                    remote(next?: $apxutechtop_samosbor_map_block_data | null | undefined): $apxutechtop_samosbor_map_block_data | null;
                    remote_of(peer: string | null, next?: $apxutechtop_samosbor_map_block_data | null | undefined): $apxutechtop_samosbor_map_block_data | null;
                    ensure(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxutechtop_samosbor_map_block_data | null;
                    ensure_of(peer: string | null, config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxutechtop_samosbor_map_block_data | null;
                    ensure_here(peer: string | null): void;
                    ensure_area(peer: string | null, land: $hyoo_crus_land): void;
                    ensure_lord(peer: string | null, preset: $hyoo_crus_rank_preset): void;
                    remote_ensure(preset?: $hyoo_crus_rank_preset): $apxutechtop_samosbor_map_block_data | null;
                    local_ensure(): $apxutechtop_samosbor_map_block_data | null;
                    val(next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null | undefined): (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    val_of(peer: string | null, next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null | undefined): (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
                    vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
                    vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
                    [$mol_dev_format_head](): any[];
                    land(): $hyoo_crus_land;
                    head(): string;
                    land_ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    toJSON(): string | undefined;
                    cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
                    nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
                    units(): $hyoo_crus_sand[];
                    units_of(peer: string | null): $hyoo_crus_sand[];
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    author_peers(): string[];
                    author_lords(): (symbol & {
                        $hyoo_crus_ref: symbol;
                    })[];
                    $: $;
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                };
                toString(): any;
                Value: typeof $hyoo_crus_dict;
                parse: typeof $hyoo_crus_vary_cast_ref;
                tag: keyof typeof $hyoo_crus_sand_tag;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
            };
            readonly Floor: typeof $hyoo_crus_atom_int;
            readonly Position: typeof TransitionPositionData;
        };
    };
    export class TransitionPort extends TransitionPort_base {
        is_correct(floor: number, position: typeof TransitionPositionData.options[number]): boolean;
    }
    const TransitionData_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly From: (auto?: any) => TransitionPort | null;
        readonly To: (auto?: any) => TransitionPort | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly From: typeof TransitionPort;
            readonly To: typeof TransitionPort;
        };
    };
    export class TransitionData extends TransitionData_base {
        get_connected_block(ref: any): (symbol & {
            $hyoo_crus_ref: symbol;
        }) | null | undefined;
        remove_transition(): void;
    }
    const FlightType_base: (abstract new () => {
        val(next?: "stairs" | "elevator" | "ladder_elevator" | undefined): "stairs" | "elevator" | "ladder_elevator" | null;
        val_of(peer: string | null, next?: "stairs" | "elevator" | "ladder_elevator" | undefined): "stairs" | "elevator" | "ladder_elevator" | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        options: readonly ["stairs", "elevator", "ladder_elevator"];
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class FlightType extends FlightType_base {
    }
    const FlightStatus_base: (abstract new () => {
        val(next?: "free" | "blocked" | undefined): "free" | "blocked" | null;
        val_of(peer: string | null, next?: "free" | "blocked" | undefined): "free" | "blocked" | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        options: readonly ["free", "blocked"];
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class FlightStatus extends FlightStatus_base {
    }
    const FlightData_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Type: (auto?: any) => FlightType | null;
        readonly Status: (auto?: any) => FlightStatus | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Type: typeof FlightType;
            readonly Status: typeof FlightStatus;
        };
    };
    export class FlightData extends FlightData_base {
    }
    const PassageType_base: (abstract new () => {
        val(next?: "noway" | "normal" | "stairs_up" | "stairs_down" | undefined): "noway" | "normal" | "stairs_up" | "stairs_down" | null;
        val_of(peer: string | null, next?: "noway" | "normal" | "stairs_up" | "stairs_down" | undefined): "noway" | "normal" | "stairs_up" | "stairs_down" | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        options: readonly ["noway", "normal", "stairs_up", "stairs_down"];
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class PassageType extends PassageType_base {
    }
    const PassageStatus_base: (abstract new () => {
        val(next?: "free" | "blocked" | "danger" | undefined): "free" | "blocked" | "danger" | null;
        val_of(peer: string | null, next?: "free" | "blocked" | "danger" | undefined): "free" | "blocked" | "danger" | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        options: readonly ["free", "blocked", "danger"];
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class PassageStatus extends PassageStatus_base {
    }
    const PassageData_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Type: (auto?: any) => PassageType | null;
        readonly Status: (auto?: any) => PassageStatus | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Type: typeof PassageType;
            readonly Status: typeof PassageStatus;
        };
    };
    export class PassageData extends PassageData_base {
    }
    const FloorData_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly UpLeftPassage: (auto?: any) => PassageData | null;
        readonly UpMiddlePassage: (auto?: any) => PassageData | null;
        readonly UpRightPassage: (auto?: any) => PassageData | null;
        readonly LeftPassage: (auto?: any) => PassageData | null;
        readonly RightPassage: (auto?: any) => PassageData | null;
        readonly DownLeftPassage: (auto?: any) => PassageData | null;
        readonly DownMiddlePassage: (auto?: any) => PassageData | null;
        readonly DownRightPassage: (auto?: any) => PassageData | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly UpLeftPassage: typeof PassageData;
            readonly UpMiddlePassage: typeof PassageData;
            readonly UpRightPassage: typeof PassageData;
            readonly LeftPassage: typeof PassageData;
            readonly RightPassage: typeof PassageData;
            readonly DownLeftPassage: typeof PassageData;
            readonly DownMiddlePassage: typeof PassageData;
            readonly DownRightPassage: typeof PassageData;
        };
    };
    export class FloorData extends FloorData_base {
        is_passage_free(transition: TransitionPosition): boolean;
    }
    const FloorsData_base: {
        new (): {
            Value: typeof FloorData;
            key(key: $hyoo_crus_vary_type, auto?: any): FloorData;
            keys(): readonly $hyoo_crus_vary_type[];
            dive<Node_1 extends typeof $hyoo_crus_node>(key: $hyoo_crus_vary_type, Node: Node_1, auto?: any): InstanceType<Node_1> | null;
            [$mol_dev_format_head](): any[];
            items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        };
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        schema: Record<string, typeof $hyoo_crus_node>;
        with<This extends typeof $hyoo_crus_dict, const Schema extends Record<string, {
            tag: keyof typeof $hyoo_crus_sand_tag;
            new (): {};
        }>>(this: This, schema: Schema): Omit<This, "prototype"> & (new (...args: any[]) => $mol_type_override<InstanceType<This>, { readonly [Key in keyof Schema]: (auto?: any) => InstanceType<Schema[Key]> | null; }>) & {
            schema: {
                [x: string]: typeof $hyoo_crus_node;
            } & Schema;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class FloorsData extends FloorsData_base {
    }
    const BlockType_base: (abstract new () => {
        val(next?: "residential" | "abandoned" | "frozen" | "infected" | "destroyed" | undefined): "residential" | "abandoned" | "frozen" | "infected" | "destroyed" | null;
        val_of(peer: string | null, next?: "residential" | "abandoned" | "frozen" | "infected" | "destroyed" | undefined): "residential" | "abandoned" | "frozen" | "infected" | "destroyed" | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        options: readonly ["residential", "abandoned", "frozen", "infected", "destroyed"];
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class BlockType extends BlockType_base {
    }
    const $apxutechtop_samosbor_map_block_data_base: Omit<typeof $hyoo_crus_entity, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_entity, {
        readonly Name: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Direction: (auto?: any) => BlockDirection | null;
        readonly Type: (auto?: any) => BlockType | null;
        readonly Transitions: (auto?: any) => {
            remote_list(next?: readonly TransitionData[] | undefined): readonly TransitionData[];
            remote_add(item: TransitionData): void;
            make(config: null | number | $hyoo_crus_rank_preset | $hyoo_crus_land): TransitionData;
            remote_make(config: $hyoo_crus_rank_preset): TransitionData;
            local_make(idea?: number): TransitionData;
            items(next?: readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[] | undefined): readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[];
            items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
            [$mol_dev_format_head](): any[];
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
        readonly PositionX: (auto?: any) => $hyoo_crus_atom_int | null;
        readonly PositionY: (auto?: any) => $hyoo_crus_atom_int | null;
        readonly Layer: (auto?: any) => $hyoo_crus_atom_int | null;
        readonly MinFloor: (auto?: any) => $hyoo_crus_atom_int | null;
        readonly MaxFloor: (auto?: any) => $hyoo_crus_atom_int | null;
        readonly LeftFlight: (auto?: any) => FlightData | null;
        readonly RightFlight: (auto?: any) => FlightData | null;
        readonly FloorsData: (auto?: any) => FloorsData | null;
        readonly UpMiddleFlight: (auto?: any) => $hyoo_crus_atom_bool | null;
        readonly DownMiddleFlight: (auto?: any) => $hyoo_crus_atom_bool | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Name: typeof $hyoo_crus_atom_str;
            readonly Direction: typeof BlockDirection;
            readonly Type: typeof BlockType;
            readonly Transitions: {
                new (): {
                    remote_list(next?: readonly TransitionData[] | undefined): readonly TransitionData[];
                    remote_add(item: TransitionData): void;
                    make(config: null | number | $hyoo_crus_rank_preset | $hyoo_crus_land): TransitionData;
                    remote_make(config: $hyoo_crus_rank_preset): TransitionData;
                    local_make(idea?: number): TransitionData;
                    items(next?: readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[] | undefined): readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[];
                    items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
                    splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
                    has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
                    add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    cut(vary: $hyoo_crus_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
                    [$mol_dev_format_head](): any[];
                    land(): $hyoo_crus_land;
                    head(): string;
                    land_ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    toJSON(): string | undefined;
                    cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
                    nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
                    units(): $hyoo_crus_sand[];
                    units_of(peer: string | null): $hyoo_crus_sand[];
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    author_peers(): string[];
                    author_lords(): (symbol & {
                        $hyoo_crus_ref: symbol;
                    })[];
                    $: $;
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                };
                Value: Value;
                toString(): any;
                parse: typeof $hyoo_crus_vary_cast_ref;
                tag: keyof typeof $hyoo_crus_sand_tag;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
            };
            readonly PositionX: typeof $hyoo_crus_atom_int;
            readonly PositionY: typeof $hyoo_crus_atom_int;
            readonly Layer: typeof $hyoo_crus_atom_int;
            readonly MinFloor: typeof $hyoo_crus_atom_int;
            readonly MaxFloor: typeof $hyoo_crus_atom_int;
            readonly LeftFlight: typeof FlightData;
            readonly RightFlight: typeof FlightData;
            readonly FloorsData: typeof FloorsData;
            readonly UpMiddleFlight: typeof $hyoo_crus_atom_bool;
            readonly DownMiddleFlight: typeof $hyoo_crus_atom_bool;
        };
    };
    export class $apxutechtop_samosbor_map_block_data extends $apxutechtop_samosbor_map_block_data_base {
        name(next?: string): string;
        direction(next?: DirectionType): "left" | "right" | "up" | "down";
        block_type(next?: typeof BlockType.options[number]): "residential" | "abandoned" | "frozen" | "infected" | "destroyed";
        transitions(next?: TransitionData[]): readonly TransitionData[] | undefined;
        transition_by_position(floor: number, position: TransitionPosition): TransitionData | undefined;
        connect(my_floor: number, my_pos: TransitionPosition, block_node: $apxutechtop_samosbor_map_block_data, another_floor: number, another_pos: TransitionPosition): void;
        remove_transition(transition: TransitionData): void;
        pos_x(next?: number): number;
        pos_y(next?: number): number;
        layer(next?: number): number;
        min_floor(next?: number): number;
        max_floor(next?: number): number;
        left_flight_status(next?: typeof FlightStatus.options[number]): "free" | "blocked" | null | undefined;
        left_flight_type(next?: typeof FlightType.options[number]): "stairs" | "elevator" | "ladder_elevator";
        right_flight_status(next?: typeof FlightStatus.options[number]): "free" | "blocked" | null | undefined;
        right_flight_type(next?: typeof FlightType.options[number]): "stairs" | "elevator" | "ladder_elevator";
        up_left_passage_type(floor: number, next?: typeof PassageType.options[number]): "noway" | "normal" | "stairs_up" | "stairs_down";
        up_middle_passage_type(floor: number, next?: typeof PassageType.options[number]): "noway" | "normal" | "stairs_up" | "stairs_down";
        up_right_passage_type(floor: number, next?: typeof PassageType.options[number]): "noway" | "normal" | "stairs_up" | "stairs_down";
        down_left_passage_type(floor: number, next?: typeof PassageType.options[number]): "noway" | "normal" | "stairs_up" | "stairs_down";
        down_middle_passage_type(floor: number, next?: typeof PassageType.options[number]): "noway" | "normal" | "stairs_up" | "stairs_down";
        down_right_passage_type(floor: number, next?: typeof PassageType.options[number]): "noway" | "normal" | "stairs_up" | "stairs_down";
    }
    export const ru_to_eng: {
        [ru: string]: string;
    };
    export class $apxutechtop_samosbor_map_block_passage extends $.$apxutechtop_samosbor_map_block_passage {
        floor_inc_value(): string;
        is_interfloor(): boolean;
        content(): $mol_view | null;
    }
    export class $apxutechtop_samosbor_map_block extends $.$apxutechtop_samosbor_map_block {
        block_ref(next?: $apxutechtop_samosbor_map_block_data): $apxutechtop_samosbor_map_block_data;
        block_data(next?: $apxutechtop_samosbor_map_block_data): $apxutechtop_samosbor_map_block_data;
        block_direction(next?: DirectionType): "left" | "right" | "up" | "down";
        pos_x(next?: number): number;
        pos_y(next?: number): number;
        left(): number;
        top(): number;
        block_name(next?: string): string;
        current_floor(): number;
        display_floor(): string;
        block_layer(next?: number): number;
        min_floor(next?: number): number;
        max_floor(next?: number): number;
        visible(): boolean;
        color_letter(): string;
        block_type(next?: typeof BlockType.options[number]): typeof BlockType.options[number];
        transitions(): $mol_view[];
        transition_pos(position: TransitionPosition): {
            x: number;
            y: number;
        };
        transition_direction(ref: any): string;
        transition_hidden(ref: any): boolean;
        transition_left(ref: any): number;
        transition_top(ref: any): number;
        connections(): readonly (any)[];
        connection_hidden(position: TransitionPosition): boolean;
        connection_pos(position: TransitionPosition): {
            x: number;
            y: number;
        };
        connection_left(position: TransitionPosition): number;
        connection_top(position: TransitionPosition): number;
        connection_click(position: TransitionPosition, event?: PointerEvent): PointerEvent | undefined;
        static first_port(port?: {
            block_ref: any;
            floor: number;
            position: TransitionPosition;
        } | null): {
            block_ref: any;
            floor: number;
            position: TransitionPosition;
        } | undefined;
        select_connection(position: TransitionPosition): void;
        change_connection(position: TransitionPosition): void;
        connection_highlight(position: TransitionPosition): boolean;
        create_from_connection(position: TransitionPosition, event?: PointerEvent): PointerEvent | undefined;
        has_middle_flight(): boolean;
        left_flight_icon(): $mol_view | $apxutechtop_samosbor_map_icon_stairs | $apxutechtop_samosbor_map_icon_elevator | undefined;
        left_flight_click(event?: PointerEvent): void;
        right_flight_icon(): $mol_view | $apxutechtop_samosbor_map_icon_stairs | $apxutechtop_samosbor_map_icon_elevator | undefined;
        right_flight_click(event?: PointerEvent): void;
        next_passage_type(current_passage_type: typeof PassageType.options[number]): "noway" | "normal" | "stairs_up" | "stairs_down";
        up_left_passage_type(): string;
        up_left_passage_click(event: PointerEvent): void;
        up_middle_passage_type(): string;
        up_middle_passage_click(event: PointerEvent): void;
        up_right_passage_type(): string;
        up_right_passage_click(event: PointerEvent): void;
        down_left_passage_type(): string;
        down_left_passage_click(event: PointerEvent): void;
        down_middle_passage_type(): string;
        down_middle_passage_click(event: PointerEvent): void;
        down_right_passage_type(): string;
        down_right_passage_click(event: PointerEvent): void;
        is_up_flight(next?: boolean): boolean;
        up_passage_or_flight(): $.$apxutechtop_samosbor_map_block_passage | $apxutechtop_samosbor_map_block_middle_flight;
        is_down_flight(next?: boolean): boolean;
        down_passage_or_flight(): $.$apxutechtop_samosbor_map_block_passage | $apxutechtop_samosbor_map_block_middle_flight;
    }
    export {};
}

declare namespace $ {
}

declare namespace $ {

	export class $apxutechtop_samosbor_map_cluster extends $mol_view {
		pos_x( next?: number ): number
		pos_y( next?: number ): number
		floors( next?: readonly(any)[] ): readonly(any)[]
		style( ): ({ 
			'left': ReturnType< $apxutechtop_samosbor_map_cluster['pos_x'] >,
			'top': ReturnType< $apxutechtop_samosbor_map_cluster['pos_y'] >,
		}) 
		sub( ): readonly(any)[]
	}
	
	export class $apxutechtop_samosbor_map_app_floor extends $mol_view {
		floor_direction( ): string
		pos_x( next?: number ): number
		pos_y( next?: number ): number
		test( ): $mol_view
		lines( ): readonly(any)[]
		line( ): ReturnType< $apxutechtop_samosbor_map_app_floor['lines'] >
		block_name( ): string
		attr( ): ({ 
			'direction': ReturnType< $apxutechtop_samosbor_map_app_floor['floor_direction'] >,
		}) 
		style( ): ({ 
			'left': ReturnType< $apxutechtop_samosbor_map_app_floor['pos_x'] >,
			'top': ReturnType< $apxutechtop_samosbor_map_app_floor['pos_y'] >,
		}) 
		sub( ): readonly(any)[]
	}
	
	type $mol_switch__value_apxutechtop_samosbor_map_app_1 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['control_type'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options_apxutechtop_samosbor_map_app_2 = $mol_type_enforce<
		({ 
			'create': string,
			'connect': string,
			'configure': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_card__sub_apxutechtop_samosbor_map_app_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['sub'] >
	>
	type $mol_string__value_apxutechtop_samosbor_map_app_4 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['selected_block_name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_apxutechtop_samosbor_map_app_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_view__sub_apxutechtop_samosbor_map_app_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_switch__value_apxutechtop_samosbor_map_app_7 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['block_type_value'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options_apxutechtop_samosbor_map_app_8 = $mol_type_enforce<
		({ 
			'residential': string,
			'destroyed': string,
			'frozen': string,
			'abandoned': string,
			'infected': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_labeler__title_apxutechtop_samosbor_map_app_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_apxutechtop_samosbor_map_app_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value_apxutechtop_samosbor_map_app_11 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['min_floor'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_labeler__title_apxutechtop_samosbor_map_app_12 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_apxutechtop_samosbor_map_app_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value_apxutechtop_samosbor_map_app_14 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['max_floor'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_labeler__title_apxutechtop_samosbor_map_app_15 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_apxutechtop_samosbor_map_app_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value_apxutechtop_samosbor_map_app_17 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['layer_value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_labeler__title_apxutechtop_samosbor_map_app_18 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_apxutechtop_samosbor_map_app_19 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value_apxutechtop_samosbor_map_app_20 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['pos_x_value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_labeler__title_apxutechtop_samosbor_map_app_21 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_apxutechtop_samosbor_map_app_22 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_number__value_apxutechtop_samosbor_map_app_23 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['pos_y_value'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_labeler__title_apxutechtop_samosbor_map_app_24 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_apxutechtop_samosbor_map_app_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_switch__value_apxutechtop_samosbor_map_app_26 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['direction_value'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options_apxutechtop_samosbor_map_app_27 = $mol_type_enforce<
		({ 
			'up': string,
			'right': string,
			'down': string,
			'left': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_labeler__title_apxutechtop_samosbor_map_app_28 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_apxutechtop_samosbor_map_app_29 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_check_box__title_apxutechtop_samosbor_map_app_30 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked_apxutechtop_samosbor_map_app_31 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['up_flight_value'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title_apxutechtop_samosbor_map_app_32 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked_apxutechtop_samosbor_map_app_33 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['down_flight_value'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_button_minor__title_apxutechtop_samosbor_map_app_34 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_apxutechtop_samosbor_map_app_35 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['delete_block'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_card__sub_apxutechtop_samosbor_map_app_36 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['sub'] >
	>
	type $mol_number__value_apxutechtop_samosbor_map_app_37 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['current_layer'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $apxutechtop_samosbor_map_area__style_apxutechtop_samosbor_map_app_38 = $mol_type_enforce<
		({ 
			'width': string,
			'height': string,
		}) 
		,
		ReturnType< $apxutechtop_samosbor_map_area['style'] >
	>
	type $apxutechtop_samosbor_map_area__items_apxutechtop_samosbor_map_app_39 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxutechtop_samosbor_map_area['items'] >
	>
	type $mol_view__sub_apxutechtop_samosbor_map_app_40 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $apxutechtop_samosbor_map_cluster__pos_x_apxutechtop_samosbor_map_app_41 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['cluster_pos_x'] >
		,
		ReturnType< $apxutechtop_samosbor_map_cluster['pos_x'] >
	>
	type $apxutechtop_samosbor_map_cluster__pos_y_apxutechtop_samosbor_map_app_42 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['cluster_pos_y'] >
		,
		ReturnType< $apxutechtop_samosbor_map_cluster['pos_y'] >
	>
	type $mol_view__event_apxutechtop_samosbor_map_app_43 = $mol_type_enforce<
		({ 
			mousedown( next?: ReturnType< $apxutechtop_samosbor_map_app['event_key'] > ): ReturnType< $apxutechtop_samosbor_map_app['event_key'] >,
		}) 
		,
		ReturnType< $mol_view['event'] >
	>
	type $apxutechtop_samosbor_map_block__block_data_apxutechtop_samosbor_map_app_44 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['block'] >
		,
		ReturnType< $apxutechtop_samosbor_map_block['block_data'] >
	>
	type $apxutechtop_samosbor_map_block__current_layer_apxutechtop_samosbor_map_app_45 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['current_layer'] >
		,
		ReturnType< $apxutechtop_samosbor_map_block['current_layer'] >
	>
	type $apxutechtop_samosbor_map_block__onclick_apxutechtop_samosbor_map_app_46 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['block_clicked'] >
		,
		ReturnType< $apxutechtop_samosbor_map_block['onclick'] >
	>
	type $apxutechtop_samosbor_map_block__on_connection_select_apxutechtop_samosbor_map_app_47 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['connection_selected'] >
		,
		ReturnType< $apxutechtop_samosbor_map_block['on_connection_select'] >
	>
	type $apxutechtop_samosbor_map_block__show_connections_apxutechtop_samosbor_map_app_48 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxutechtop_samosbor_map_block['show_connections'] >
	>
	type $apxutechtop_samosbor_map_block__create_mode_apxutechtop_samosbor_map_app_49 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['is_create_mode'] >
		,
		ReturnType< $apxutechtop_samosbor_map_block['create_mode'] >
	>
	type $apxutechtop_samosbor_map_block__edit_mode_apxutechtop_samosbor_map_app_50 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['is_configure_mode'] >
		,
		ReturnType< $apxutechtop_samosbor_map_block['edit_mode'] >
	>
	type $apxutechtop_samosbor_map_block__connect_mode_apxutechtop_samosbor_map_app_51 = $mol_type_enforce<
		ReturnType< $apxutechtop_samosbor_map_app['is_connect_mode'] >
		,
		ReturnType< $apxutechtop_samosbor_map_block['connect_mode'] >
	>
	type $mol_view__attr_apxutechtop_samosbor_map_app_52 = $mol_type_enforce<
		({ 
			'direction': ReturnType< $apxutechtop_samosbor_map_app['transition_direction'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__style_apxutechtop_samosbor_map_app_53 = $mol_type_enforce<
		({ 
			'left': ReturnType< $apxutechtop_samosbor_map_app['transition_left'] >,
			'top': ReturnType< $apxutechtop_samosbor_map_app['transition_top'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $apxutechtop_samosbor_map_app extends $mol_view {
		cluster_pos_x( id: any, next?: number ): number
		cluster_pos_y( id: any, next?: number ): number
		event_key( id: any, next?: any ): any
		block( id: any): any
		current_layer( next?: number ): number
		block_clicked( id: any, next?: any ): any
		connection_selected( id: any, next?: any ): any
		is_create_mode( ): boolean
		is_configure_mode( ): boolean
		is_connect_mode( ): boolean
		transition_direction( id: any): string
		transition_left( id: any): number
		transition_top( id: any): number
		control_type( next?: string ): string
		Control_Switch( ): $mol_switch
		Control_Panel( ): $mol_card
		selected_block_name( next?: string ): string
		name_input( ): $mol_string
		name_setting( ): $mol_view
		block_type_value( next?: string ): string
		block_type_switch( ): $mol_switch
		type_setting( ): $mol_labeler
		min_floor( next?: number ): number
		min_setting_number( ): $mol_number
		min_floor_setting( ): $mol_labeler
		max_floor( next?: number ): number
		max_setting_number( ): $mol_number
		max_floor_setting( ): $mol_labeler
		layer_value( next?: number ): number
		layer_setting_number( ): $mol_number
		layer_setting( ): $mol_labeler
		pos_x_value( next?: number ): number
		pos_x_setting_number( ): $mol_number
		pos_x_setting( ): $mol_labeler
		pos_y_value( next?: number ): number
		pos_y_setting_number( ): $mol_number
		pos_y_setting( ): $mol_labeler
		direction_value( next?: string ): string
		direction_switch( ): $mol_switch
		direction_setting( ): $mol_labeler
		up_flight_value( next?: boolean ): boolean
		up_flight_setting( ): $mol_check_box
		down_flight_value( next?: boolean ): boolean
		down_flight_setting( ): $mol_check_box
		delete_block( next?: any ): any
		delete_block_button( ): $mol_button_minor
		Block_Form( ): $mol_card
		Layer_Bar( ): $mol_number
		Searcher( ): $mol_view
		blocks( ): readonly(any)[]
		Area( ): $apxutechtop_samosbor_map_area
		Canvas( ): $mol_view
		Cluster( id: any): $apxutechtop_samosbor_map_cluster
		floor_lines( id: any, next?: readonly(any)[] ): readonly(any)[]
		Line( id: any): $mol_view
		Block( id: any): $apxutechtop_samosbor_map_block
		Transition( id: any): $mol_view
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=app.view.tree.d.ts.map
declare namespace $.$$ {
    type DirectionType = "up" | "right" | "down" | "left";
    type TransitionPosition = "up_left" | "up_right" | "right" | "down_right" | "down_left" | "left";
    interface Transition {
        from: {
            block_name: string;
            floor: number;
            position: TransitionPosition;
        };
        to: {
            block_name: string;
            floor: number;
            position: TransitionPosition;
        };
    }
    interface Block {
        name: string;
        direction: "up" | "right" | "down" | "left";
        pos_x?: number;
        pos_y?: number;
        layer?: number;
        min_floor?: number;
        max_floor?: number;
    }
    const Gigacluster_base: Omit<typeof $hyoo_crus_home, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_home, {
        readonly Blocks: (auto?: any) => {
            remote_list(next?: readonly $apxutechtop_samosbor_map_block_data[] | undefined): readonly $apxutechtop_samosbor_map_block_data[];
            remote_add(item: $apxutechtop_samosbor_map_block_data): void;
            make(config: null | number | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxutechtop_samosbor_map_block_data;
            remote_make(config: $hyoo_crus_rank_preset): $apxutechtop_samosbor_map_block_data;
            local_make(idea?: number): $apxutechtop_samosbor_map_block_data;
            items(next?: readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[] | undefined): readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[];
            items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
            [$mol_dev_format_head](): any[];
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Blocks: {
                new (): {
                    remote_list(next?: readonly $apxutechtop_samosbor_map_block_data[] | undefined): readonly $apxutechtop_samosbor_map_block_data[];
                    remote_add(item: $apxutechtop_samosbor_map_block_data): void;
                    make(config: null | number | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxutechtop_samosbor_map_block_data;
                    remote_make(config: $hyoo_crus_rank_preset): $apxutechtop_samosbor_map_block_data;
                    local_make(idea?: number): $apxutechtop_samosbor_map_block_data;
                    items(next?: readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[] | undefined): readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[];
                    items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
                    splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
                    has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
                    add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    cut(vary: $hyoo_crus_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
                    [$mol_dev_format_head](): any[];
                    land(): $hyoo_crus_land;
                    head(): string;
                    land_ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    toJSON(): string | undefined;
                    cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
                    nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
                    units(): $hyoo_crus_sand[];
                    units_of(peer: string | null): $hyoo_crus_sand[];
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    author_peers(): string[];
                    author_lords(): (symbol & {
                        $hyoo_crus_ref: symbol;
                    })[];
                    $: $;
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                };
                Value: Value;
                toString(): any;
                parse: typeof $hyoo_crus_vary_cast_ref;
                tag: keyof typeof $hyoo_crus_sand_tag;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
            };
        };
    };
    export class Gigacluster extends Gigacluster_base {
        static global(): Gigacluster;
        static create_block(): $apxutechtop_samosbor_map_block_data | undefined;
        static delete_block(ref: any): void;
        static delete_all_blocks(): void;
        static blocks(): readonly $apxutechtop_samosbor_map_block_data[] | undefined;
        static block(block_name: string): $apxutechtop_samosbor_map_block_data | undefined;
        static transition(block_name: string, floor: number, position: TransitionPosition): TransitionData | undefined;
    }
    export class $apxutechtop_samosbor_map_storage extends $mol_object {
        static data(next?: {
            blocks: Block[];
            transitions: Transition[];
        }): {
            blocks: Block[];
            transitions: Transition[];
        };
        static blocks(next?: Block[]): Block[];
        static block(block_name: string, next?: Block): void;
        static block_direction(block_name: string): void;
        static transitions(next?: Transition[]): Transition[];
    }
    export class $apxutechtop_samosbor_map_app extends $.$apxutechtop_samosbor_map_app {
        map_land(): $hyoo_crus_land;
        static blocks_data(next?: Block[]): Block[];
        selected_block(next?: $.$apxutechtop_samosbor_map_block | null): $.$apxutechtop_samosbor_map_block | null | undefined;
        block_clicked(ref: any, event: any): void;
        min_floor(next?: number): number;
        max_floor(next?: number): number;
        layer_value(next?: number): number;
        pos_x_value(next?: number): number;
        pos_y_value(next?: number): number;
        direction_value(next?: DirectionType): string;
        block_type_value(next?: string): string;
        up_flight_value(next?: boolean): boolean;
        down_flight_value(next?: boolean): boolean;
        delete_block(): void;
        selected_block_name(next?: string): string;
        static block(name: string, next?: Block): $apxutechtop_samosbor_map_block_data | Block | undefined;
        block(ref: any, next?: Block): $apxutechtop_samosbor_map_block_data;
        block_transitions(block_name: string): {
            from: {
                block_name: string;
                floor: number;
                position: TransitionPosition;
            };
            to: {
                block_name: string;
                floor: number;
                position: TransitionPosition;
            };
        }[];
        static all_transitions(next?: Transition[]): Transition[];
        static transition(trans_id: string, next?: Transition): Transition | undefined;
        transitions(): $mol_view[];
        transition_direction(ref: any): string;
        transition_left(ref: any): number;
        transition_top(ref: any): number;
        static next_direction(dir: DirectionType): DirectionType;
        static prev_direction(dir: DirectionType): DirectionType;
        static next_position(pos: TransitionPosition): TransitionPosition;
        show_connections(): boolean;
        control_type(next?: string): string;
        is_create_mode(): boolean;
        is_configure_mode(): boolean;
        is_connect_mode(): boolean;
        static rotate_block(block_name: string): DirectionType;
        static rotate_transition(transition: Transition): {
            transition: Transition;
            direction: DirectionType;
            offset: {
                x: number;
                y: number;
            };
        };
        parseFloor(floorId: string): {
            block_name: string;
            floor_num: number;
        } | null;
        static parseTrans(transId: string): {
            block_name: string;
            floor_num: number;
            position: TransitionPosition;
        } | null;
        block_name(floorId: string): string;
        floor_num(floorId: string): number;
        static direction(block_name: string, next?: DirectionType): DirectionType;
        floor_direction(floorId: string): DirectionType;
        floor_cluster(floorId: string, cluster?: any): void;
        static getOffset(pos: string, dir: string): {
            x: number;
            y: number;
        };
        static rotateOffset({ x, y }: {
            x: number;
            y: number;
        }, dir: string): {
            x: number;
            y: number;
        };
        static getPositionOffset(pos: TransitionPosition, dir: DirectionType): {
            x: number;
            y: number;
        };
        calculateOffset(transition: Transition, floor_direction: string): {
            x: number;
            y: number;
        };
        set_position(view: $mol_view, pos: {
            left: number;
            top: number;
        }): void;
        set_size(view: $mol_view, width: number, height: number): void;
        get_size(cluster: $mol_view): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | null;
        event_key(transId: string, event: any): void;
        floor_lines(floorId: any, next?: readonly (any)[]): readonly (any)[];
        get_floor_id(block_name: string, floor_num: number): string;
        static get_trans_id({ block_name, floor, position }: {
            block_name?: string | undefined;
            floor?: number | undefined;
            position?: string | undefined;
        }): string;
        static absolute_direction(direction: DirectionType, position: TransitionPosition): DirectionType;
        blocks(): $mol_view[];
    }
    export {};
}

declare namespace $ {
}

export = $;
//# sourceMappingURL=web.d.ts.map
