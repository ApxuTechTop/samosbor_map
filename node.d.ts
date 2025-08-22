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
    function $mol_base64_encode(src: string | Uint8Array<ArrayBuffer>): string;
}

declare namespace $ {
    function $mol_base64_encode_node(str: string | Uint8Array<ArrayBuffer>): string;
}

declare namespace $ {
    function $mol_base64_decode(base64: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $mol_base64_decode_node(base64Str: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $mol_base64_ae_encode(buffer: Uint8Array<ArrayBuffer>): string;
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
        int64(offset: number, next?: bigint): bigint;
        uint48(offset: number, next?: number): number;
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
    function $hyoo_crus_ref_decode(bin: Uint8Array<ArrayBuffer>): symbol & {
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
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
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
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
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
    function $mol_base64_url_encode(buffer: Uint8Array<ArrayBuffer>): string;
    function $mol_base64_url_decode(str: string): Uint8Array<ArrayBuffer>;
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
    function $mol_promise_like(val: any): val is Promise<any>;
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_try<Result>(handler: () => Result): Result | Error;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

interface $node {
    [key: string]: any;
}
declare var $node: $node;
declare const cache: Map<string, any>;

declare namespace $ {
    function $mol_env(): Record<string, string | undefined>;
}

declare namespace $ {
}

declare namespace $ {
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
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
        constructor(id?: string);
        [Symbol.toStringTag]: string;
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
        absorb(quant: $mol_wire_cursor, pos: number): void;
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
        absorb(quant?: $mol_wire_cursor, pos?: number): void;
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
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_tick | null;
        static plan(): void;
        static sync(): void;
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
    function $mol_tree2_to_string(this: $, tree: $mol_tree2): string;
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
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
    function $mol_tree2_from_json(json: any, span?: $mol_span): $mol_tree2;
}

declare namespace $ {
    class $mol_term_color {
        static reset: (str: string) => string;
        static bold: (str: string) => string;
        static italic: (str: string) => string;
        static underline: (str: string) => string;
        static inverse: (str: string) => string;
        static hidden: (str: string) => string;
        static strike: (str: string) => string;
        static gray: (str: string) => string;
        static red: (str: string) => string;
        static green: (str: string) => string;
        static yellow: (str: string) => string;
        static blue: (str: string) => string;
        static magenta: (str: string) => string;
        static cyan: (str: string) => string;
        static Gray: (str: string) => string;
        static Red: (str: string) => string;
        static Green: (str: string) => string;
        static Yellow: (str: string) => string;
        static Blue: (str: string) => string;
        static Magenta: (str: string) => string;
        static Cyan: (str: string) => string;
        static ansi(open: number, close: number): (str: string) => string;
    }
}

declare namespace $ {
    function $mol_log3_node_make(level: keyof Console, output: 'stdout' | 'stderr', type: string, color: (str: string) => string): (this: $, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, Args, Result>;
        get temp(): boolean;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
    }
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
    type $mol_run_error_context = {
        pid?: number;
        stdout: Buffer | string;
        stderr: Buffer | string;
    };
    class $mol_run_error extends $mol_error_mix<{
        timeout_kill?: boolean;
        pid?: number;
        signal?: NodeJS.Signals | null;
        status?: number | null;
        command: string;
        dir: string;
    }> {
    }
    const $mol_run_spawn: (...args: Parameters<(typeof $node)["child_process"]["spawn"]>) => import("child_process").ChildProcess;
    const $mol_run_spawn_sync: (...args: Parameters<(typeof $node)["child_process"]["spawnSync"]>) => import("child_process").SpawnSyncReturns<string | Buffer<ArrayBufferLike>>;
    type $mol_run_options = {
        command: readonly string[] | string;
        dir: string;
        timeout?: number;
        env?: Record<string, string | undefined>;
    };
    class $mol_run extends $mol_object {
        static async_enabled(): boolean;
        static spawn(options: $mol_run_options): import("child_process").SpawnSyncReturns<string | Buffer<ArrayBufferLike>> | $mol_run_error_context;
        static spawn_async({ dir, sync, timeout, command, env }: $mol_run_options & {
            sync?: boolean;
        }): import("child_process").SpawnSyncReturns<string | Buffer<ArrayBufferLike>> | (Promise<$mol_run_error_context> & {
            destructor: () => void;
        });
        static error_message(res?: $mol_run_error_context): string;
    }
}

declare namespace $ {
    function $mol_exec(this: $, dir: string, command: string, ...args: readonly string[]): import("child_process").SpawnSyncReturns<string | Buffer<ArrayBufferLike>> | $mol_run_error_context;
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
    const $mol_key_store: WeakMap<object, string>;
    function $mol_key<Value>(value: Value): string;
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
    class $mol_after_frame extends $mol_after_timeout {
        task: () => void;
        constructor(task: () => void);
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
    function $mol_wire_solid(): void;
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    let $mol_mem_persist: typeof $mol_wire_solid;
}

declare namespace $ {
    function $mol_wire_probe<Value>(task: () => Value, def?: Value): Value | undefined;
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
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
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    let $mol_action: typeof $mol_wire_method;
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
    class $mol_lock extends $mol_object {
        protected promise: null | Promise<void>;
        wait(): Promise<() => void>;
        grab(): () => void;
    }
}

declare namespace $ {
    function $mol_compare_array<Value extends ArrayLike<unknown>>(a: Value, b: Value): boolean;
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'utf-16le' | 'utf-16be' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
}

declare namespace $ {
    function $mol_charset_decode(buffer: BufferSource, encoding?: $mol_charset_encoding): string;
}

declare namespace $ {
    function $mol_charset_encode(value: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    type $mol_file_transaction_mode = 'create' | 'exists_truncate' | 'exists_fail' | 'read_only' | 'write_only' | 'read_write' | 'append';
    type $mol_file_transaction_buffer = ArrayBufferView;
    class $mol_file_transaction extends $mol_object {
        path(): string;
        modes(): readonly $mol_file_transaction_mode[];
        write(options: {
            buffer: ArrayBufferView | string | readonly ArrayBufferView[];
            offset?: number | null;
            length?: number | null;
            position?: number | null;
        }): number;
        read(): Uint8Array<ArrayBuffer>;
        truncate(size: number): void;
        close(): void;
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_file_transaction_node extends $mol_file_transaction {
        protected descr(): number;
        write({ buffer, offset, length, position }: {
            buffer: ArrayBufferView | string | readonly ArrayBufferView[];
            offset?: number | null;
            length?: number | null;
            position?: number | null;
        }): number;
        truncate(size: number): void;
        read(): Uint8Array<ArrayBuffer>;
        close(): void;
    }
}

declare namespace $ {
    class $mol_file_base extends $mol_object {
        static absolute<This extends typeof $mol_file_base>(this: This, path: string): InstanceType<This>;
        static relative<This extends typeof $mol_file_base>(this: This, path: string): InstanceType<This>;
        static base: string;
        path(): string;
        parent(): this;
        exists_cut(): boolean;
        protected root(): boolean;
        protected stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        protected static changed: Set<$mol_file_base>;
        protected static frame: null | $mol_after_timeout;
        protected static changed_add(type: 'change' | 'rename', path: string): void;
        static watch_debounce(): number;
        static flush(): void;
        protected static watching: boolean;
        protected static lock: $mol_lock;
        protected static watch_off(path: string): void;
        static unwatched<Result>(side_effect: () => Result, affected_dir: string): Result;
        reset(): void;
        modified(): Date | null;
        version(): string;
        protected info(path: string): null | $mol_file_stat;
        protected ensure(): void;
        protected drop(): void;
        protected copy(to: string): void;
        protected read(): Uint8Array<ArrayBuffer>;
        protected write(buffer: Uint8Array<ArrayBuffer>): void;
        protected kids(): readonly this[];
        readable(opts: {
            start?: number;
            end?: number;
        }): ReadableStream<Uint8Array<ArrayBuffer>>;
        writable(opts: {
            start?: number;
        }): WritableStream<Uint8Array<ArrayBuffer>>;
        buffer(next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;
        stat_make(size: number): {
            readonly type: "file";
            readonly size: number;
            readonly atime: Date;
            readonly mtime: Date;
            readonly ctime: Date;
        };
        clone(to: string): this | null;
        watcher(): {
            destructor(): void;
        };
        exists(next?: boolean): boolean;
        type(): "" | $mol_file_type;
        name(): string;
        ext(): string;
        text(next?: string, virt?: 'virt'): string;
        text_int(next?: string, virt?: 'virt'): string;
        sub(reset?: null): this[];
        resolve(path: string): this;
        relate(base?: $mol_file_base): string;
        find(include?: RegExp, exclude?: RegExp): this[];
        size(): number;
        toJSON(): string;
        open(...modes: readonly $mol_file_transaction_mode[]): $mol_file_transaction;
    }
}

declare namespace $ {
    type $mol_file_type = 'file' | 'dir' | 'link';
    interface $mol_file_stat {
        type: $mol_file_type;
        size: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }
    class $mol_file extends $mol_file_base {
    }
}

declare namespace $ {
    function $mol_file_node_buffer_normalize(buf: Buffer<ArrayBuffer>): Uint8Array<ArrayBuffer>;
    class $mol_file_node extends $mol_file {
        static relative<This extends typeof $mol_file>(this: This, path: string): InstanceType<This>;
        watcher(reset?: null): {
            destructor(): void;
        };
        protected info(path: string): $mol_file_stat | null;
        protected ensure(): null | undefined;
        protected copy(to: string): void;
        protected drop(): void;
        protected read(): Uint8Array<ArrayBuffer>;
        protected write(buffer: Uint8Array<ArrayBuffer>): undefined;
        protected kids(): this[];
        resolve(path: string): this;
        relate(base?: $mol_file): string;
        readable(opts: {
            start?: number;
            end?: number;
        }): ReadableStream<Uint8Array<ArrayBuffer>>;
        writable(opts?: {
            start?: number;
        }): WritableStream<Uint8Array<ArrayBuffer>>;
    }
}

declare namespace $ {
    var $mol_dom: typeof globalThis;
}

declare namespace $ {
    class $mol_state_local_node<Value> extends $mol_state_local<Value> {
        static dir(): $mol_file;
        static value<Value>(key: string, next?: Value | null): Value | null;
    }
}

declare namespace $ {
    function $mol_crypto_salt(): Uint8Array<ArrayBuffer>;
    const $mol_crypto_salt_once: Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    type BufferSource = ArrayBufferView<ArrayBuffer> | ArrayBuffer;
    export class $mol_crypto_sacred extends $mol_buffer {
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
        close(sacred: DataView<ArrayBuffer>, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
        open(buf: Uint8Array<ArrayBuffer>, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
    }
    export {};
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
        static pass(pass: string, salt: Uint8Array<ArrayBuffer>): Promise<$mol_crypto_secret>;
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
        rocks: [Uint8Array<ArrayBuffer>, null | Uint8Array<ArrayBuffer>][];
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
            rocks: [Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer> | null][];
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
    function $mol_dom_serialize(node: Node): string;
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
    type json = null | boolean | number | string | {
        [key in string]: json;
    } | readonly json[];
    export type $hyoo_crus_vary_type = Uint8Array<ArrayBuffer> | bigint | $hyoo_crus_ref | BigInt64Array | Float64Array | $mol_time_moment | $mol_time_duration | $mol_time_interval | $mol_tree2 | json | Node;
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
        bin: Uint8Array<ArrayBuffer>;
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
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
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
        static prolog: string;
        static separator: string;
        static href(next?: string): string;
        static href_normal(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): Readonly<{
            [key: string]: string;
        }>;
        static value(key: string, next?: string | null): string | null;
        static link(next: Record<string, string | null>): string;
        static make_link(next: Record<string, string | null>): string;
        static go(next: {
            [key: string]: string | null;
        }): void;
        static commit(): void;
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
            rocks: [Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer> | null][];
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
            rocks: [Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer>][];
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
        send_data(data: null | string | Uint8Array<ArrayBuffer> | Element | object): void;
        send_nil(): void;
        send_bin(data: Uint8Array<ArrayBuffer>): void;
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
    enum $mol_websocket_frame_op {
        con = 0,
        txt = 1,
        bin = 2,
        stop = 8,
        ping = 9,
        pong = 10
    }
    class $mol_websocket_frame extends $mol_buffer {
        kind(next?: {
            op: keyof typeof $mol_websocket_frame_op;
            fin: boolean;
        }): {
            op: keyof typeof $mol_websocket_frame_op;
            fin: boolean;
        } | {
            op: "stop" | "bin" | "con" | "txt" | "ping" | "pong";
            fin: number;
        };
        data(next?: {
            size: number;
            mask: boolean;
        }): {
            size: number;
            mask: boolean;
        } | {
            size: number;
            mask: number;
        };
        size(): number;
        mask(): Uint8Array<ArrayBuffer>;
        toString(): string;
        static make(op: keyof typeof $mol_websocket_frame_op, size?: number, mask?: boolean, fin?: boolean): $mol_websocket_frame;
    }
}

declare namespace $ {
    class $mol_rest_port_ws_std extends $mol_rest_port_ws {
        socket: WebSocket;
        send_nil(): void;
        send_bin(data: Uint8Array<ArrayBuffer>): void;
        send_text(data: string): void;
    }
}

declare namespace $ {
    class $mol_rest_port_ws_node extends $mol_rest_port_ws {
        socket: InstanceType<$node['stream']['Duplex']>;
        send_nil(): void;
        send_bin(data: Uint8Array<ArrayBuffer>): void;
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
        static hash(blob: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;
        static rock(hash: Uint8Array<ArrayBuffer>, next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer> | null;
        static rock_save(blob: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;
        static units_persisted: WeakSet<$hyoo_crus_unit>;
        static units(land: $hyoo_crus_ref, next?: readonly $hyoo_crus_unit[]): readonly $hyoo_crus_unit[];
        static units_load(land: $hyoo_crus_ref): Promise<readonly $hyoo_crus_unit[]>;
        static units_save(land: $hyoo_crus_ref, units: readonly $hyoo_crus_unit[]): Promise<void>;
    }
}

declare namespace $ {
    class $hyoo_crus_mine_pg extends $hyoo_crus_mine {
        static urn(): string | null;
        static url(): URL;
        static rock(hash: Uint8Array<ArrayBuffer>, next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer> | null;
        static rock_load(hash: Uint8Array<ArrayBuffer>): Promise<Uint8Array<ArrayBuffer> | null>;
        static units_save(land: $hyoo_crus_ref, units: readonly $hyoo_crus_unit[]): Promise<void>;
        static units_load(land: $hyoo_crus_ref): Promise<($hyoo_crus_sand | $hyoo_crus_pass | $hyoo_crus_gift)[]>;
        static db_sync(): import("pg").Pool | null;
        static db(): Promise<import("pg").Pool | null>;
    }
}

declare namespace $ {
    class $hyoo_crus_mine_fs extends $hyoo_crus_mine {
        static root(): $mol_file;
        static rock_file(hash: Uint8Array<ArrayBuffer>): $mol_file;
        static rock(hash: Uint8Array<ArrayBuffer>, next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer> | null;
        static units_file(land: $hyoo_crus_ref): $mol_file;
        static units_offsets(land: $hyoo_crus_ref): Map<string, number>;
        static units_sizes: Map<symbol & {
            $hyoo_crus_ref: symbol;
        }, number>;
        static units_save(land: $hyoo_crus_ref, units: readonly $hyoo_crus_unit[]): any;
        static units_load(land: $hyoo_crus_ref): Promise<$hyoo_crus_unit[]>;
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
        _open: null | Uint8Array<ArrayBuffer>;
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
        hash(next?: Uint8Array<ArrayBuffer>, tip?: keyof typeof $hyoo_crus_vary_tip, tag?: keyof typeof $hyoo_crus_sand_tag): Uint8Array<ArrayBuffer>;
        meta(): Uint8Array<ArrayBuffer>;
        data(next?: Uint8Array<ArrayBuffer>, tip?: keyof typeof $hyoo_crus_vary_tip, tag?: keyof typeof $hyoo_crus_sand_tag): Uint8Array<ArrayBuffer>;
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
            get $(): $;
            set $(next: $);
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
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
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
            get $(): $;
            set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
            get $(): $;
            set $(next: $);
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
    class $mol_window extends $mol_object {
        static size(): {
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], notify?: 'notify'): Element[];
    }
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_wire_watch(): void;
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
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper, Lower = never> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? [
            Lower
        ] extends [Input[Field]] ? Field : never : never;
    }[keyof Input];
}

declare namespace $ {
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
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
        static radial_gradient<Value>(value: Value): $mol_style_func<"radial-gradient", Value>;
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
            size?: (BG_size | [BG_size] | [BG_size, BG_size])[];
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
    const $mol_theme: Record<"image" | "line" | "text" | "current" | "field" | "focus" | "back" | "hover" | "card" | "special" | "control" | "shade" | "spirit", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    let $mol_gap: Record<"text" | "space" | "block" | "blur" | "round", $mol_style_func<"var", unknown>>;
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

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node_external(next?: Element): Element;
        render(): void;
    }
}

declare namespace $ {

	export class $apxu_hover extends $mol_plugin {
		event_show( next?: any ): any
		event_hide( next?: any ): any
		hovered( next?: boolean ): boolean
		event( ): ({ 
			mouseenter( next?: ReturnType< $apxu_hover['event_show'] > ): ReturnType< $apxu_hover['event_show'] >,
			mouseleave( next?: ReturnType< $apxu_hover['event_hide'] > ): ReturnType< $apxu_hover['event_hide'] >,
		}) 
	}
	
}

//# sourceMappingURL=hover.view.tree.d.ts.map
declare namespace $.$$ {
    class $apxu_hover extends $.$apxu_hover {
        event_show(event?: MouseEvent): void;
        event_hide(event?: MouseEvent): void;
    }
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
            get $(): $;
            set $(next: $);
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
                    get $(): $;
                    set $(next: $);
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
        }>, rocks: [Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer> | null][]): void;
        apply_parts(lands: Record<$hyoo_crus_ref, {
            faces: $hyoo_crus_face_map;
            units: $hyoo_crus_unit[];
        }>, rocks: [Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer> | null][]): void;
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
    export function num_to_bigint(num?: number): bigint | undefined;
    export type DirectionType = "up" | "right" | "down" | "left";
    export type TransitionPosition = "up_left" | "up_middle" | "up_right" | "right" | "down_right" | "down_middle" | "down_left" | "left";
    export const TransitionPositions: TransitionPosition[];
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
        get $(): $;
        set $(next: $);
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
        val(next?: TransitionPosition | undefined): TransitionPosition | null;
        val_of(peer: string | null, next?: TransitionPosition | undefined): TransitionPosition | null;
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
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        options: TransitionPosition[];
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
            remote(next?: $apxu_samosbor_map_block_data | null | undefined): $apxu_samosbor_map_block_data | null;
            remote_of(peer: string | null, next?: $apxu_samosbor_map_block_data | null | undefined): $apxu_samosbor_map_block_data | null;
            ensure(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxu_samosbor_map_block_data | null;
            ensure_of(peer: string | null, config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxu_samosbor_map_block_data | null;
            ensure_here(peer: string | null): void;
            ensure_area(peer: string | null, land: $hyoo_crus_land): void;
            ensure_lord(peer: string | null, preset: $hyoo_crus_rank_preset): void;
            remote_ensure(preset?: $hyoo_crus_rank_preset): $apxu_samosbor_map_block_data | null;
            local_ensure(): $apxu_samosbor_map_block_data | null;
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
            get $(): $;
            set $(next: $);
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
                    Value: () => typeof $apxu_samosbor_map_block_data;
                    remote(next?: $apxu_samosbor_map_block_data | null | undefined): $apxu_samosbor_map_block_data | null;
                    remote_of(peer: string | null, next?: $apxu_samosbor_map_block_data | null | undefined): $apxu_samosbor_map_block_data | null;
                    ensure(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxu_samosbor_map_block_data | null;
                    ensure_of(peer: string | null, config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxu_samosbor_map_block_data | null;
                    ensure_here(peer: string | null): void;
                    ensure_area(peer: string | null, land: $hyoo_crus_land): void;
                    ensure_lord(peer: string | null, preset: $hyoo_crus_rank_preset): void;
                    remote_ensure(preset?: $hyoo_crus_rank_preset): $apxu_samosbor_map_block_data | null;
                    local_ensure(): $apxu_samosbor_map_block_data | null;
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
                    get $(): $;
                    set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
        get $(): $;
        set $(next: $);
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
    const PassageDirections: {
        UpLeftPassage: typeof PassageData;
        UpMiddlePassage: typeof PassageData;
        UpRightPassage: typeof PassageData;
        LeftPassage: typeof PassageData;
        RightPassage: typeof PassageData;
        DownLeftPassage: typeof PassageData;
        DownMiddlePassage: typeof PassageData;
        DownRightPassage: typeof PassageData;
    };
    const FenceData_base: (abstract new () => {
        val(next?: "missing" | "hole" | "solid" | undefined): "missing" | "hole" | "solid" | null;
        val_of(peer: string | null, next?: "missing" | "hole" | "solid" | undefined): "missing" | "hole" | "solid" | null;
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
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        options: readonly ["missing", "hole", "solid"];
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class FenceData extends FenceData_base {
    }
    const FloorData_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Fence: (auto?: any) => FenceData | null;
        readonly LeftFlight: (auto?: any) => FlightStatus | null;
        readonly RightFlight: (auto?: any) => FlightStatus | null;
        readonly IsDouble: (auto?: any) => $hyoo_crus_atom_bool | null;
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
            readonly Fence: typeof FenceData;
            readonly LeftFlight: typeof FlightStatus;
            readonly RightFlight: typeof FlightStatus;
            readonly IsDouble: typeof $hyoo_crus_atom_bool;
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
        static readonly positions_map: {
            [pos in TransitionPosition]: keyof typeof PassageDirections;
        };
        static get_passage_type(transition: TransitionPosition, floor_data?: FloorData, next?: typeof PassageType.options[number]): "noway" | "normal" | "stairs_up" | "stairs_down";
        static is_passage_free(transition: TransitionPosition, floor_data?: FloorData): boolean;
        get_passage_type(transition: TransitionPosition): typeof PassageType.options[number];
        is_passage_free(transition: TransitionPosition): boolean;
        fence_type(next?: typeof FenceData.options[number]): "missing" | "hole" | "solid";
        set_next_fence_type(): void;
        flight_status(what: "left" | "right", next?: typeof FlightStatus.options[number]): "free" | "blocked";
        next_flight_status(what: "left" | "right"): void;
        all_passages(): ("noway" | "normal" | "stairs_up" | "stairs_down")[];
        is_double_floor(next?: boolean): boolean;
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
            get $(): $;
            set $(next: $);
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
        val(next?: "residential" | "frozen" | "infected" | "destroyed" | undefined): "residential" | "frozen" | "infected" | "destroyed" | null;
        val_of(peer: string | null, next?: "residential" | "frozen" | "infected" | "destroyed" | undefined): "residential" | "frozen" | "infected" | "destroyed" | null;
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
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        options: readonly ["residential", "frozen", "infected", "destroyed"];
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
    const ProfessionType_base: (abstract new () => {
        val(next?: "liquidator" | "repairman" | "cleaner" | "plumber" | undefined): "liquidator" | "repairman" | "cleaner" | "plumber" | null;
        val_of(peer: string | null, next?: "liquidator" | "repairman" | "cleaner" | "plumber" | undefined): "liquidator" | "repairman" | "cleaner" | "plumber" | null;
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
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        options: readonly ["liquidator", "repairman", "cleaner", "plumber"];
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class ProfessionType extends ProfessionType_base {
    }
    const ProfessionData_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Type: (auto?: any) => ProfessionType | null;
        readonly Floor: (auto?: any) => $hyoo_crus_atom_int | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Type: typeof ProfessionType;
            readonly Floor: typeof $hyoo_crus_atom_int;
        };
    };
    export class ProfessionData extends ProfessionData_base {
    }
    const PlaceType_base: (abstract new () => {
        val(next?: "theatre" | "hospital" | "party" | "gym" | "laundry" | "postal" | "overview" | "racing" | "hockey" | "spleef" | "pool" | "warehouse" | "shower" | "toilet" | "gallery" | undefined): "theatre" | "hospital" | "party" | "gym" | "laundry" | "postal" | "overview" | "racing" | "hockey" | "spleef" | "pool" | "warehouse" | "shower" | "toilet" | "gallery" | null;
        val_of(peer: string | null, next?: "theatre" | "hospital" | "party" | "gym" | "laundry" | "postal" | "overview" | "racing" | "hockey" | "spleef" | "pool" | "warehouse" | "shower" | "toilet" | "gallery" | undefined): "theatre" | "hospital" | "party" | "gym" | "laundry" | "postal" | "overview" | "racing" | "hockey" | "spleef" | "pool" | "warehouse" | "shower" | "toilet" | "gallery" | null;
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
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        options: readonly ["theatre", "hospital", "party", "gym", "laundry", "postal", "overview", "racing", "hockey", "spleef", "pool", "warehouse", "shower", "toilet", "gallery"];
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class PlaceType extends PlaceType_base {
    }
    const PlaceData_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Type: (auto?: any) => PlaceType | null;
        readonly Floor: (auto?: any) => $hyoo_crus_atom_int | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Type: typeof PlaceType;
            readonly Floor: typeof $hyoo_crus_atom_int;
        };
    };
    export class PlaceData extends PlaceData_base {
    }
    const $apxu_samosbor_map_block_data_base: Omit<typeof $hyoo_crus_entity, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_entity, {
        readonly IsPipe: (auto?: any) => $hyoo_crus_atom_bool | null;
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
            get $(): $;
            set $(next: $);
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
        readonly PositionX: (auto?: any) => $hyoo_crus_atom_int | null;
        readonly PositionY: (auto?: any) => $hyoo_crus_atom_int | null;
        readonly Layer: (auto?: any) => $hyoo_crus_atom_int | null;
        readonly Generator: (auto?: any) => $hyoo_crus_atom_int | null;
        readonly BoardFloor: (auto?: any) => $hyoo_crus_atom_int | null;
        readonly MailFloor: (auto?: any) => $hyoo_crus_atom_int | null;
        readonly RoofFloor: (auto?: any) => $hyoo_crus_atom_int | null;
        readonly FloodFloor: (auto?: any) => $hyoo_crus_atom_int | null;
        readonly MinFloor: (auto?: any) => $hyoo_crus_atom_int | null;
        readonly MaxFloor: (auto?: any) => $hyoo_crus_atom_int | null;
        readonly LeftFlight: (auto?: any) => FlightData | null;
        readonly RightFlight: (auto?: any) => FlightData | null;
        readonly FloorsData: (auto?: any) => FloorsData | null;
        readonly IsMiddleFlight: (auto?: any) => $hyoo_crus_atom_bool | null;
        readonly MiddleFlight: (auto?: any) => FlightData | null;
        readonly HasBalcony: (auto?: any) => $hyoo_crus_atom_bool | null;
        readonly Professions: (auto?: any) => {
            remote_list(next?: readonly ProfessionData[] | undefined): readonly ProfessionData[];
            remote_add(item: ProfessionData): void;
            make(config: null | number | $hyoo_crus_rank_preset | $hyoo_crus_land): ProfessionData;
            remote_make(config: $hyoo_crus_rank_preset): ProfessionData;
            local_make(idea?: number): ProfessionData;
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
            get $(): $;
            set $(next: $);
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
        readonly Places: (auto?: any) => {
            remote_list(next?: readonly PlaceData[] | undefined): readonly PlaceData[];
            remote_add(item: PlaceData): void;
            make(config: null | number | $hyoo_crus_rank_preset | $hyoo_crus_land): PlaceData;
            remote_make(config: $hyoo_crus_rank_preset): PlaceData;
            local_make(idea?: number): PlaceData;
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
            get $(): $;
            set $(next: $);
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly IsPipe: typeof $hyoo_crus_atom_bool;
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
                    get $(): $;
                    set $(next: $);
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
            readonly Generator: typeof $hyoo_crus_atom_int;
            readonly BoardFloor: typeof $hyoo_crus_atom_int;
            readonly MailFloor: typeof $hyoo_crus_atom_int;
            readonly RoofFloor: typeof $hyoo_crus_atom_int;
            readonly FloodFloor: typeof $hyoo_crus_atom_int;
            readonly MinFloor: typeof $hyoo_crus_atom_int;
            readonly MaxFloor: typeof $hyoo_crus_atom_int;
            readonly LeftFlight: typeof FlightData;
            readonly RightFlight: typeof FlightData;
            readonly FloorsData: typeof FloorsData;
            readonly IsMiddleFlight: typeof $hyoo_crus_atom_bool;
            readonly MiddleFlight: typeof FlightData;
            readonly HasBalcony: typeof $hyoo_crus_atom_bool;
            readonly Professions: {
                new (): {
                    remote_list(next?: readonly ProfessionData[] | undefined): readonly ProfessionData[];
                    remote_add(item: ProfessionData): void;
                    make(config: null | number | $hyoo_crus_rank_preset | $hyoo_crus_land): ProfessionData;
                    remote_make(config: $hyoo_crus_rank_preset): ProfessionData;
                    local_make(idea?: number): ProfessionData;
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
                    get $(): $;
                    set $(next: $);
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
            readonly Places: {
                new (): {
                    remote_list(next?: readonly PlaceData[] | undefined): readonly PlaceData[];
                    remote_add(item: PlaceData): void;
                    make(config: null | number | $hyoo_crus_rank_preset | $hyoo_crus_land): PlaceData;
                    remote_make(config: $hyoo_crus_rank_preset): PlaceData;
                    local_make(idea?: number): PlaceData;
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
                    get $(): $;
                    set $(next: $);
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
    export class $apxu_samosbor_map_block_data extends $apxu_samosbor_map_block_data_base {
        name(next?: string): string;
        direction(next?: DirectionType): "left" | "right" | "up" | "down";
        block_type(next?: typeof BlockType.options[number]): "residential" | "frozen" | "infected" | "destroyed";
        transitions(next?: TransitionData[]): readonly TransitionData[];
        transition_by_position(floor: number, position: TransitionPosition): TransitionData | undefined;
        connect(my_floor: number, my_pos: TransitionPosition, block_node: $apxu_samosbor_map_block_data, another_floor: number, another_pos: TransitionPosition): void;
        remove_transition(transition: TransitionData): void;
        pos_x(next?: number): number;
        pos_y(next?: number): number;
        layer(next?: number): number;
        min_floor(next?: number): number;
        max_floor(next?: number): number;
        generator_floor(next?: number): number;
        left_flight_status(next?: typeof FlightStatus.options[number]): "free" | "blocked" | null | undefined;
        left_flight_type(next?: typeof FlightType.options[number]): "stairs" | "elevator" | "ladder_elevator";
        right_flight_status(next?: typeof FlightStatus.options[number]): "free" | "blocked" | null | undefined;
        right_flight_type(next?: typeof FlightType.options[number]): "stairs" | "elevator" | "ladder_elevator";
        middle_flight_type(next?: typeof FlightType.options[number]): "stairs" | "elevator" | "ladder_elevator";
        passage_type([floor, what]: [number, TransitionPosition], next?: typeof PassageType.options[number]): "noway" | "normal" | "stairs_up" | "stairs_down";
        flight_status({ floor, what }: {
            floor: number;
            what: "left" | "right";
        }): "free" | "blocked";
        next_flight_status(floor: number, what: "left" | "right"): void;
        board_floor(next?: number): bigint | null;
        mail_floor(next?: number): bigint | null;
        roof_floor(next?: number): bigint | null;
        flood_floor(next?: number): bigint | null;
        profession_floors(what: typeof ProfessionType.options[number]): ProfessionData[];
        add_profession(what: typeof ProfessionType.options[number]): ProfessionData | undefined;
        remove_profession(node: $hyoo_crus_vary_type): void;
        place_floors(what: typeof PlaceType.options[number]): PlaceData[];
        safe_floors(): (ProfessionData | PlaceData)[];
        add_place(what: typeof PlaceType.options[number]): PlaceData | undefined;
        remove_place(node: $hyoo_crus_vary_type): void;
        all_passages(floor: number): ("noway" | "normal" | "stairs_up" | "stairs_down")[];
        double_floors_count(floor: number): number;
        is_double_floor(floor: number, next?: boolean): boolean;
    }
    const $apxu_samosbor_map_block_pipe_data_base: Omit<typeof $apxu_samosbor_map_block_data, "prototype"> & (new (...args: any[]) => $mol_type_override<$apxu_samosbor_map_block_data, {}>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        };
    };
    export class $apxu_samosbor_map_block_pipe_data extends $apxu_samosbor_map_block_pipe_data_base {
    }
    export {};
}

declare namespace $ {

	export class $apxu_samosbor_map_block_row extends $mol_view {
		sub( ): readonly(any)[]
	}
	
	export class $apxu_samosbor_map_block_part extends $mol_view {
		content( ): any
		sub( ): readonly(any)[]
	}
	
	export class $apxu_samosbor_map_block_flight extends $apxu_samosbor_map_block_part {
		status( next?: string ): string
		attr( ): ({ 
			'status': ReturnType< $apxu_samosbor_map_block_flight['status'] >,
		})  & ReturnType< $apxu_samosbor_map_block_part['attr'] >
	}
	
	type $mol_view__sub_apxu_samosbor_map_block_passage_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_passage_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $apxu_samosbor_map_block_passage extends $mol_view {
		type( next?: string ): string
		flex_direction( ): string
		floor_inc_value( ): string
		floor_inc( ): $mol_view
		stairs( ): $apxu_samosbor_map_icon_stairs
		content( ): any
		up( ): boolean
		right( ): boolean
		down( ): boolean
		left( ): boolean
		attr( ): ({ 
			'type': ReturnType< $apxu_samosbor_map_block_passage['type'] >,
			'up': ReturnType< $apxu_samosbor_map_block_passage['up'] >,
			'right': ReturnType< $apxu_samosbor_map_block_passage['right'] >,
			'down': ReturnType< $apxu_samosbor_map_block_passage['down'] >,
			'left': ReturnType< $apxu_samosbor_map_block_passage['left'] >,
		}) 
		style( ): ({ 
			'flex-direction': ReturnType< $apxu_samosbor_map_block_passage['flex_direction'] >,
		}) 
		InterFloor( ): $mol_view
		sub( ): readonly(any)[]
	}
	
	export class $apxu_samosbor_map_block_middle_flight extends $mol_view {
	}
	
	type $mol_view__sub_apxu_samosbor_map_block_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $apxu_samosbor_map_block_passage__type_apxu_samosbor_map_block_17 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block['passage_type'] >
		,
		ReturnType< $apxu_samosbor_map_block_passage['type'] >
	>
	type $apxu_samosbor_map_block_passage__event_apxu_samosbor_map_block_18 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxu_samosbor_map_block['passage_click'] > ): ReturnType< $apxu_samosbor_map_block['passage_click'] >,
		}) 
		,
		ReturnType< $apxu_samosbor_map_block_passage['event'] >
	>
	type $apxu_samosbor_map_block_passage__up_apxu_samosbor_map_block_19 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxu_samosbor_map_block_passage['up'] >
	>
	type $apxu_samosbor_map_block_passage__left_apxu_samosbor_map_block_20 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxu_samosbor_map_block_passage['left'] >
	>
	type $apxu_samosbor_map_block_passage__type_apxu_samosbor_map_block_21 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block['passage_type'] >
		,
		ReturnType< $apxu_samosbor_map_block_passage['type'] >
	>
	type $apxu_samosbor_map_block_passage__event_apxu_samosbor_map_block_22 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxu_samosbor_map_block['passage_click'] > ): ReturnType< $apxu_samosbor_map_block['passage_click'] >,
		}) 
		,
		ReturnType< $apxu_samosbor_map_block_passage['event'] >
	>
	type $apxu_samosbor_map_block_passage__up_apxu_samosbor_map_block_23 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxu_samosbor_map_block_passage['up'] >
	>
	type $apxu_samosbor_map_block_passage__right_apxu_samosbor_map_block_24 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxu_samosbor_map_block_passage['right'] >
	>
	type $apxu_samosbor_map_block_row__sub_apxu_samosbor_map_block_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxu_samosbor_map_block_row['sub'] >
	>
	type $apxu_samosbor_map_block_passage__type_apxu_samosbor_map_block_26 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block['left_passage_type'] >
		,
		ReturnType< $apxu_samosbor_map_block_passage['type'] >
	>
	type $apxu_samosbor_map_block_passage__event_apxu_samosbor_map_block_27 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxu_samosbor_map_block['passage_click'] > ): ReturnType< $apxu_samosbor_map_block['passage_click'] >,
		}) 
		,
		ReturnType< $apxu_samosbor_map_block_passage['event'] >
	>
	type $apxu_samosbor_map_block_passage__left_apxu_samosbor_map_block_28 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxu_samosbor_map_block_passage['left'] >
	>
	type $mol_view__attr_apxu_samosbor_map_block_29 = $mol_type_enforce<
		({ 
			'type': ReturnType< $apxu_samosbor_map_block['fence_type'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__event_apxu_samosbor_map_block_30 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxu_samosbor_map_block['fence_click'] > ): ReturnType< $apxu_samosbor_map_block['fence_click'] >,
		}) 
		,
		ReturnType< $mol_view['event'] >
	>
	type $apxu_samosbor_map_block_passage__type_apxu_samosbor_map_block_31 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block['right_passage_type'] >
		,
		ReturnType< $apxu_samosbor_map_block_passage['type'] >
	>
	type $apxu_samosbor_map_block_passage__event_apxu_samosbor_map_block_32 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxu_samosbor_map_block['right_passage_click'] > ): ReturnType< $apxu_samosbor_map_block['right_passage_click'] >,
		}) 
		,
		ReturnType< $apxu_samosbor_map_block_passage['event'] >
	>
	type $apxu_samosbor_map_block_passage__right_apxu_samosbor_map_block_33 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxu_samosbor_map_block_passage['right'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_34 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $apxu_samosbor_map_block_passage__type_apxu_samosbor_map_block_35 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block['passage_type'] >
		,
		ReturnType< $apxu_samosbor_map_block_passage['type'] >
	>
	type $apxu_samosbor_map_block_passage__event_apxu_samosbor_map_block_36 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxu_samosbor_map_block['passage_click'] > ): ReturnType< $apxu_samosbor_map_block['passage_click'] >,
		}) 
		,
		ReturnType< $apxu_samosbor_map_block_passage['event'] >
	>
	type $apxu_samosbor_map_block_passage__down_apxu_samosbor_map_block_37 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxu_samosbor_map_block_passage['down'] >
	>
	type $apxu_samosbor_map_block_passage__left_apxu_samosbor_map_block_38 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxu_samosbor_map_block_passage['left'] >
	>
	type $apxu_samosbor_map_block_passage__type_apxu_samosbor_map_block_39 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block['passage_type'] >
		,
		ReturnType< $apxu_samosbor_map_block_passage['type'] >
	>
	type $apxu_samosbor_map_block_passage__event_apxu_samosbor_map_block_40 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxu_samosbor_map_block['passage_click'] > ): ReturnType< $apxu_samosbor_map_block['passage_click'] >,
		}) 
		,
		ReturnType< $apxu_samosbor_map_block_passage['event'] >
	>
	type $apxu_samosbor_map_block_passage__down_apxu_samosbor_map_block_41 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxu_samosbor_map_block_passage['down'] >
	>
	type $apxu_samosbor_map_block_passage__right_apxu_samosbor_map_block_42 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxu_samosbor_map_block_passage['right'] >
	>
	type $apxu_samosbor_map_block_row__sub_apxu_samosbor_map_block_43 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxu_samosbor_map_block_row['sub'] >
	>
	type $mol_view__attr_apxu_samosbor_map_block_44 = $mol_type_enforce<
		({ 
			'interfloor': ReturnType< $apxu_samosbor_map_block['has_interfloor'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_45 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__attr_apxu_samosbor_map_block_46 = $mol_type_enforce<
		({ 
			'hidden': ReturnType< $apxu_samosbor_map_block['connection_hidden'] >,
			'highlight': ReturnType< $apxu_samosbor_map_block['connection_highlight'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__style_apxu_samosbor_map_block_47 = $mol_type_enforce<
		({ 
			'left': ReturnType< $apxu_samosbor_map_block['connection_left'] >,
			'top': ReturnType< $apxu_samosbor_map_block['connection_top'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__event_apxu_samosbor_map_block_48 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxu_samosbor_map_block['connection_click'] > ): ReturnType< $apxu_samosbor_map_block['connection_click'] >,
		}) 
		,
		ReturnType< $mol_view['event'] >
	>
	type $mol_view__attr_apxu_samosbor_map_block_49 = $mol_type_enforce<
		({ 
			'hidden': ReturnType< $apxu_samosbor_map_block['transition_hidden'] >,
			'direction': ReturnType< $apxu_samosbor_map_block['transition_direction'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__style_apxu_samosbor_map_block_50 = $mol_type_enforce<
		({ 
			'left': ReturnType< $apxu_samosbor_map_block['transition_left'] >,
			'top': ReturnType< $apxu_samosbor_map_block['transition_top'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $apxu_samosbor_map_block_passage__type_apxu_samosbor_map_block_51 = $mol_type_enforce<
		string
		,
		ReturnType< $apxu_samosbor_map_block_passage['type'] >
	>
	type $apxu_samosbor_map_block_passage__up_apxu_samosbor_map_block_52 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxu_samosbor_map_block_passage['up'] >
	>
	type $apxu_samosbor_map_block_passage__type_apxu_samosbor_map_block_53 = $mol_type_enforce<
		string
		,
		ReturnType< $apxu_samosbor_map_block_passage['type'] >
	>
	type $apxu_samosbor_map_block_passage__down_apxu_samosbor_map_block_54 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxu_samosbor_map_block_passage['down'] >
	>
	type $apxu_samosbor_map_block_middle_flight__sub_apxu_samosbor_map_block_55 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxu_samosbor_map_block_middle_flight['sub'] >
	>
	type $apxu_samosbor_map_block_middle_flight__sub_apxu_samosbor_map_block_56 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxu_samosbor_map_block_middle_flight['sub'] >
	>
	type $apxu_samosbor_map_block_part__attr_apxu_samosbor_map_block_57 = $mol_type_enforce<
		({ 
			'semi-floor': ReturnType< $apxu_samosbor_map_block['is_part_of_double_floor'] >,
		}) 
		,
		ReturnType< $apxu_samosbor_map_block_part['attr'] >
	>
	type $apxu_samosbor_map_block_part__sub_apxu_samosbor_map_block_58 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxu_samosbor_map_block_part['sub'] >
	>
	type $apxu_samosbor_map_block_part__sub_apxu_samosbor_map_block_59 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxu_samosbor_map_block_part['sub'] >
	>
	type $apxu_samosbor_map_block_part__sub_apxu_samosbor_map_block_60 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxu_samosbor_map_block_part['sub'] >
	>
	type $apxu_samosbor_map_block_part__sub_apxu_samosbor_map_block_61 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxu_samosbor_map_block_part['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_62 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_63 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $apxu_samosbor_map_block_part__sub_apxu_samosbor_map_block_64 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxu_samosbor_map_block_part['sub'] >
	>
	type $apxu_samosbor_map_block_flight__event_apxu_samosbor_map_block_65 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxu_samosbor_map_block['left_flight_click'] > ): ReturnType< $apxu_samosbor_map_block['left_flight_click'] >,
		}) 
		,
		ReturnType< $apxu_samosbor_map_block_flight['event'] >
	>
	type $apxu_samosbor_map_block_flight__status_apxu_samosbor_map_block_66 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block['flight_status'] >
		,
		ReturnType< $apxu_samosbor_map_block_flight['status'] >
	>
	type $apxu_samosbor_map_block_flight__sub_apxu_samosbor_map_block_67 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxu_samosbor_map_block_flight['sub'] >
	>
	type $apxu_samosbor_map_block_flight__event_apxu_samosbor_map_block_68 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxu_samosbor_map_block['right_flight_click'] > ): ReturnType< $apxu_samosbor_map_block['right_flight_click'] >,
		}) 
		,
		ReturnType< $apxu_samosbor_map_block_flight['event'] >
	>
	type $apxu_samosbor_map_block_flight__status_apxu_samosbor_map_block_69 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block['flight_status'] >
		,
		ReturnType< $apxu_samosbor_map_block_flight['status'] >
	>
	type $apxu_samosbor_map_block_flight__sub_apxu_samosbor_map_block_70 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxu_samosbor_map_block_flight['sub'] >
	>
	type $apxu_samosbor_map_block_part__sub_apxu_samosbor_map_block_71 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxu_samosbor_map_block_part['sub'] >
	>
	export class $apxu_samosbor_map_block extends $mol_view {
		hovered( ): ReturnType< ReturnType< $apxu_samosbor_map_block['Hover'] >['hovered'] >
		Hover( ): $apxu_hover
		block_direction( next?: string ): string
		selected( ): boolean
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
		stairs_icon( id: any): $apxu_samosbor_map_icon_stairs
		elevator_icon( id: any): $apxu_samosbor_map_icon_elevator
		ladder_icon( id: any): $apxu_samosbor_map_icon_ladder
		ladder_elevator( id: any): $mol_view
		up_flight_icon( ): $apxu_samosbor_map_icon_stairs
		middle_flight_icons( ): readonly(any)[]
		down_flight_icon( ): $apxu_samosbor_map_icon_stairs
		is_part_of_double_floor( ): boolean
		block_name( next?: string ): string
		BlockName( ): $mol_view
		display_floor( ): string
		CurrentFloor( ): $mol_view
		gen_icon( ): $apxu_samosbor_map_icon_generator
		generator_floor_value( next?: number ): number
		generator_floor( ): $mol_view
		Generator( ): $mol_view
		mail_icon( ): $apxu_samosbor_map_icon_mail
		mail_floor_value( next?: number | null ): number | null
		mail_floor( ): $mol_view
		Mail( ): $mol_view
		mail_visible( ): readonly(any)[]
		liquidator_profession( ): any
		repairman_profession( ): any
		cleaner_profession( ): any
		plumber_profession( ): any
		profession_wrapper( ): $mol_view
		safe_place( ): any
		theatre_place( ): any
		hospital_place( ): any
		party_place( ): any
		places_wrapper( ): $mol_view
		flooded_icon( ): $apxu_samosbor_map_icon_sinking
		flooded_floor_view( ): $mol_view
		roof_icon( ): $apxu_samosbor_map_icon_roof
		roof_floor_view( ): $mol_view
		flooded( ): any
		roof( ): any
		left_flight_click( next?: any ): any
		flight_status( id: any): string
		right_flight_click( next?: any ): any
		max_floor_icon( ): $apxu_samosbor_map_icon_max_floor
		max_floor( next?: number ): number
		max_floor_value( ): $mol_view
		max_floor_view( ): $mol_view
		min_floor_icon( ): $apxu_samosbor_map_icon_min_floor
		min_floor( next?: number ): number
		min_floor_value( ): $mol_view
		min_floor_view( ): $mol_view
		has_interfloor( ): boolean
		connections( ): readonly(any)[]
		transitions( ): readonly(any)[]
		transitions_list( ): ReturnType< $apxu_samosbor_map_block['transitions'] >
		pipe_name( ): $mol_view
		pipe_name_visible( ): readonly(any)[]
		up_left_angle_part( ): $apxu_samosbor_map_block_part
		up_left_angle_visible( ): ReturnType< $apxu_samosbor_map_block['up_left_angle_part'] >
		passage_type( id: any): string
		passage_click( id: any, next?: any ): any
		up_left_passage( ): $apxu_samosbor_map_block_passage
		up_left_part_empty( ): $apxu_samosbor_map_block_part
		up_left_part( ): ReturnType< $apxu_samosbor_map_block['up_left_part_empty'] >
		up_left_part_visible( ): ReturnType< $apxu_samosbor_map_block['up_left_part'] >
		up_passage_or_flight( ): $mol_view
		up_right_part_empty( ): $apxu_samosbor_map_block_part
		up_right_part( ): ReturnType< $apxu_samosbor_map_block['up_right_part_empty'] >
		up_right_part_visible( ): ReturnType< $apxu_samosbor_map_block['up_right_part'] >
		up_right_passage( ): $apxu_samosbor_map_block_passage
		up_right_angle_part( ): $apxu_samosbor_map_block_part
		up_right_angle_visible( ): ReturnType< $apxu_samosbor_map_block['up_right_angle_part'] >
		up_row( ): $apxu_samosbor_map_block_row
		left_passage_type( ): ReturnType< $apxu_samosbor_map_block['passage_type'] >
		left_passage( ): $apxu_samosbor_map_block_passage
		left_crossroad( ): $mol_view
		left_hallway( ): $mol_view
		fence_type( next?: string ): string
		fence_click( next?: any ): any
		fence( ): $mol_view
		right_hallway( ): $mol_view
		right_crossroad( ): $mol_view
		right_passage_type( ): ReturnType< $apxu_samosbor_map_block['passage_type'] >
		right_passage_click( next?: ReturnType< $apxu_samosbor_map_block['passage_click'] > ): ReturnType< $apxu_samosbor_map_block['passage_click'] >
		right_passage( ): $apxu_samosbor_map_block_passage
		middle_row( ): $mol_view
		down_left_angle_part( ): $apxu_samosbor_map_block_part
		down_left_angle_visible( ): ReturnType< $apxu_samosbor_map_block['down_left_angle_part'] >
		down_left_passage( ): $apxu_samosbor_map_block_passage
		down_left_part_empty( ): $apxu_samosbor_map_block_part
		down_left_part( ): ReturnType< $apxu_samosbor_map_block['down_left_part_empty'] >
		down_left_part_visible( ): ReturnType< $apxu_samosbor_map_block['down_left_part'] >
		down_right_part_empty( ): $apxu_samosbor_map_block_part
		down_right_part( ): ReturnType< $apxu_samosbor_map_block['down_right_part_empty'] >
		down_right_part_visible( ): ReturnType< $apxu_samosbor_map_block['down_right_part'] >
		down_right_passage( ): $apxu_samosbor_map_block_passage
		down_right_angle_part( ): $apxu_samosbor_map_block_part
		down_right_angle_visible( ): ReturnType< $apxu_samosbor_map_block['down_right_angle_part'] >
		down_row( ): $apxu_samosbor_map_block_row
		content( ): $mol_view
		plugins( ): readonly(any)[]
		map( ): $apxu_samosbor_map
		gigacluster( ): $apxu_samosbor_map_gigacluster
		block_data( next?: $apxu_samosbor_map_block_data ): $apxu_samosbor_map_block_data
		edit_mode( next?: boolean ): boolean
		create_block_mode( next?: boolean ): boolean
		connect_mode( next?: boolean ): boolean
		is_doubled( next?: boolean ): boolean
		is_pipe( next?: boolean ): boolean
		block_layer( next?: number ): number
		current_layer( next?: number ): number
		current_floor( ): number
		board_floor_value( next?: number | null ): number | null
		roof_floor_value( next?: number | null ): number | null
		flood_floor_value( next?: number | null ): number | null
		profession_floors( id: any): readonly(any)[]
		place_floors( id: any): readonly(any)[]
		safe_floors( ): readonly(any)[]
		inverted( next?: boolean ): boolean
		pos_x( next?: number ): number
		pos_y( next?: number ): number
		is_up_flight( next?: boolean ): boolean
		on_connection_select( next?: any ): any
		visible( ): boolean
		attr( ): ({ 
			'direction': ReturnType< $apxu_samosbor_map_block['block_direction'] >,
			'visible': boolean,
			'selected': ReturnType< $apxu_samosbor_map_block['selected'] >,
			'editing': ReturnType< $apxu_samosbor_map_block['edit_mode'] >,
			'color': ReturnType< $apxu_samosbor_map_block['color_letter'] >,
			'block-type': ReturnType< $apxu_samosbor_map_block['block_type'] >,
		}) 
		style( ): ({ 
			'left': ReturnType< $apxu_samosbor_map_block['left'] >,
			'top': ReturnType< $apxu_samosbor_map_block['top'] >,
		}) 
		event( ): ({ 
			click( next?: ReturnType< $apxu_samosbor_map_block['onclick'] > ): ReturnType< $apxu_samosbor_map_block['onclick'] >,
		}) 
		Connection( id: any): $mol_view
		Transition( id: any): $mol_view
		show_connections( next?: boolean ): boolean
		flight_icons( id: any): ({ 
			'stairs': ReturnType< $apxu_samosbor_map_block['stairs_icon'] >,
			'elevator': ReturnType< $apxu_samosbor_map_block['elevator_icon'] >,
			'ladder_elevator': ReturnType< $apxu_samosbor_map_block['ladder_elevator'] >,
		}) 
		up_middle_passage( ): $apxu_samosbor_map_block_passage
		down_middle_passage( ): $apxu_samosbor_map_block_passage
		up_flight( ): $apxu_samosbor_map_block_middle_flight
		down_flight( ): $apxu_samosbor_map_block_middle_flight
		name_part( ): $apxu_samosbor_map_block_part
		info_part( ): $apxu_samosbor_map_block_part
		liquidator_icon( ): $apxu_samosbor_map_icon_liquidator
		repairman_icon( ): $apxu_samosbor_map_icon_repairman
		cleaner_icon( ): $apxu_samosbor_map_icon_cleaner
		factory_icon( ): $apxu_samosbor_map_icon_factory
		party_icon( ): $apxu_samosbor_map_icon_party
		theatre_icon( ): $apxu_samosbor_map_icon_theatre
		hospital_icon( ): $apxu_samosbor_map_icon_hospital
		house_icon( ): $apxu_samosbor_map_icon_house
		profession_part( ): $apxu_samosbor_map_block_part
		places_part( ): $apxu_samosbor_map_block_part
		flooded_effect( ): $mol_view
		roof_effect( ): $mol_view
		effects_part( ): $apxu_samosbor_map_block_part
		left_flight( ): $apxu_samosbor_map_block_flight
		right_flight( ): $apxu_samosbor_map_block_flight
		floor_part( ): $apxu_samosbor_map_block_part
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=block.view.tree.d.ts.map
declare namespace $.$$ {
    export const block_full_cell = 380;
    export const ru_to_eng: {
        [ru: string]: string;
    };
    export class $apxu_samosbor_map_block_passage extends $.$apxu_samosbor_map_block_passage {
        floor_inc_value(): string;
        is_interfloor(): boolean;
        content(): $mol_view | null;
    }
    type ConnectionPort = {
        block_ref: $hyoo_crus_ref;
        floor: number;
        position: TransitionPosition;
    };
    export class $apxu_samosbor_map_block extends $.$apxu_samosbor_map_block {
        block_ref(next?: $apxu_samosbor_map_block_data): $apxu_samosbor_map_block_data;
        block_data(next?: $apxu_samosbor_map_block_data): $apxu_samosbor_map_block_data;
        block_direction(next?: DirectionType): DirectionType;
        pos_x(next?: number): number;
        pos_y(next?: number): number;
        left(): number;
        top(): number;
        block_name(next?: string): string;
        current_floor(): number;
        numerical_floor(): number;
        display_floor(): string;
        is_part_of_double_floor(): boolean;
        is_doubled(): boolean;
        generator_floor_value(next?: number): number;
        board_floor_value(next?: number): number | null;
        mail_visible(): readonly (any)[];
        mail_floor_value(next?: number): number | null;
        roof_floor_value(next?: number): number | null;
        flood_floor_value(next?: number): number | null;
        profession_floors(what: typeof ProfessionType.options[number]): ProfessionData[];
        safe_floors(): (ProfessionData | PlaceData)[];
        place_floors(what: typeof PlaceType.options[number]): PlaceData[];
        block_layer(next?: number): number;
        min_floor(next?: number): number;
        max_floor(next?: number): number;
        visible(): boolean;
        has_interfloor(): boolean;
        color_letter(): string;
        block_type(next?: typeof BlockType.options[number]): typeof BlockType.options[number];
        transitions(): $mol_view[];
        transition_pos(position: TransitionPosition): {
            x: number;
            y: number;
        };
        transition_direction(node: TransitionData): string;
        transition_hidden(node: TransitionData): boolean;
        transition_left(node: TransitionData): number;
        transition_top(node: TransitionData): number;
        connections(): $mol_view[];
        connection_hidden(position: TransitionPosition): boolean;
        connection_pos(position: TransitionPosition): {
            x: number;
            y: number;
        };
        connection_left(position: TransitionPosition): number;
        connection_top(position: TransitionPosition): number;
        connection_click(position: TransitionPosition, event?: PointerEvent): $apxu_samosbor_map_block_data | undefined;
        static first_port(port?: ConnectionPort | null): ConnectionPort | undefined;
        static is_same_ports(port1: ConnectionPort, port2: ConnectionPort): boolean;
        select_connection(position: TransitionPosition): void;
        change_connection(position: TransitionPosition): void;
        connection_highlight(position: TransitionPosition): boolean;
        create_from_connection(position: TransitionPosition, event?: PointerEvent): $apxu_samosbor_map_block_data | undefined;
        has_middle_flight(): boolean;
        left_flight_icon(): $mol_view | $apxu_samosbor_map_icon_stairs | $apxu_samosbor_map_icon_elevator | undefined;
        left_flight_click(event?: PointerEvent): void;
        flight_status(what: "left" | "right"): "free" | "blocked";
        right_flight_icon(): $mol_view | $apxu_samosbor_map_icon_stairs | $apxu_samosbor_map_icon_elevator | undefined;
        middle_flight_icons(): readonly (any)[];
        right_flight_click(event?: PointerEvent): void;
        next_passage_type(current_passage_type: typeof PassageType.options[number]): "noway" | "normal" | "stairs_up" | "stairs_down";
        passage_type(what: TransitionPosition): "noway" | "normal" | "stairs_up" | "stairs_down";
        passage_click(what: TransitionPosition, event: PointerEvent): void;
        is_up_flight(next?: boolean): boolean;
        up_passage_or_flight(): $.$apxu_samosbor_map_block_passage | $apxu_samosbor_map_block_middle_flight;
        readonly parts: $apxu_samosbor_map_block_part[];
        readonly dir_shift: {
            [dir in DirectionType]: number;
        };
        up_left_part(): $apxu_samosbor_map_block_part;
        up_right_part(): $apxu_samosbor_map_block_part;
        down_right_part(): $apxu_samosbor_map_block_part;
        down_left_part(): $apxu_samosbor_map_block_part;
        has_profession(what: typeof ProfessionType.options[number]): boolean;
        liquidator_profession(): ReturnType<$.$apxu_samosbor_map_block["liquidator_icon"]> | null;
        repairman_profession(): $apxu_samosbor_map_icon_repairman | null;
        cleaner_profession(): $apxu_samosbor_map_icon_cleaner | null;
        plumber_profession(): $apxu_samosbor_map_icon_factory | null;
        has_place(what: typeof PlaceType.options[number]): boolean;
        has_safe_place(): boolean;
        party_place(): $apxu_samosbor_map_icon_party | null;
        theatre_place(): $apxu_samosbor_map_icon_theatre | null;
        hospital_place(): $apxu_samosbor_map_icon_hospital | null;
        safe_place(): $apxu_samosbor_map_icon_house | null;
        flooded(): $mol_view | null;
        roof(): $mol_view | null;
        fence_type(next?: typeof FenceData.options[number]): string;
        fence_click(event?: PointerEvent): void;
        is_pipe(next?: boolean): boolean;
        up_left_angle_visible(): $apxu_samosbor_map_block_part;
        up_right_angle_visible(): $apxu_samosbor_map_block_part;
        down_left_angle_visible(): ReturnType<$.$apxu_samosbor_map_block["down_left_angle_part"]>;
        down_right_angle_visible(): ReturnType<$.$apxu_samosbor_map_block["down_left_angle_part"]>;
        up_left_part_visible(): $apxu_samosbor_map_block_part;
        up_right_part_visible(): $apxu_samosbor_map_block_part;
        down_left_part_visible(): ReturnType<$.$apxu_samosbor_map_block["down_left_part"]>;
        down_right_part_visible(): ReturnType<$.$apxu_samosbor_map_block["down_right_part"]>;
        pipe_name_visible(): readonly (any)[];
    }
    export {};
}

declare namespace $ {
}

declare namespace $ {
    const $apxu_samosbor_map_gigacluster_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Blocks: (auto?: any) => {
            remote_list(next?: readonly $apxu_samosbor_map_block_data[] | undefined): readonly $apxu_samosbor_map_block_data[];
            remote_add(item: $apxu_samosbor_map_block_data): void;
            make(config: null | number | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxu_samosbor_map_block_data;
            remote_make(config: $hyoo_crus_rank_preset): $apxu_samosbor_map_block_data;
            local_make(idea?: number): $apxu_samosbor_map_block_data;
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
            get $(): $;
            set $(next: $);
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
                    remote_list(next?: readonly $apxu_samosbor_map_block_data[] | undefined): readonly $apxu_samosbor_map_block_data[];
                    remote_add(item: $apxu_samosbor_map_block_data): void;
                    make(config: null | number | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxu_samosbor_map_block_data;
                    remote_make(config: $hyoo_crus_rank_preset): $apxu_samosbor_map_block_data;
                    local_make(idea?: number): $apxu_samosbor_map_block_data;
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
                    get $(): $;
                    set $(next: $);
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
    export class $apxu_samosbor_map_gigacluster extends $apxu_samosbor_map_gigacluster_base {
        delete_block(ref: any): void;
        create_block(): $apxu_samosbor_map_block_data;
        delete_all_blocks(): void;
        blocks(): readonly $apxu_samosbor_map_block_data[] | undefined;
        block_by_name(block_name: string): $apxu_samosbor_map_block_data | undefined;
        transition(block: $apxu_samosbor_map_block_data, floor: number, position: TransitionPosition): TransitionData | undefined;
    }
    export {};
}

declare namespace $ {
    export function bigint_to_rank(val: bigint | undefined | null, def?: typeof $hyoo_crus_rank.Value): typeof $hyoo_crus_rank.Value;
    export function rank_to_bigint(rank: typeof $hyoo_crus_rank.Value): bigint;
    const $apxu_samosbor_map_role_base: (abstract new () => {
        val(next?: "cartographer" | "researcher" | "traveler" | undefined): "cartographer" | "researcher" | "traveler" | null;
        val_of(peer: string | null, next?: "cartographer" | "researcher" | "traveler" | undefined): "cartographer" | "researcher" | "traveler" | null;
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
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        options: readonly ["cartographer", "researcher", "traveler"];
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $apxu_samosbor_map_role extends $apxu_samosbor_map_role_base {
    }
    const $apxu_samosbor_map_role_right_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Key: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Description: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Role: (auto?: any) => $apxu_samosbor_map_role | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Key: typeof $hyoo_crus_atom_str;
            readonly Description: typeof $hyoo_crus_atom_str;
            readonly Role: typeof $apxu_samosbor_map_role;
        };
    };
    export class $apxu_samosbor_map_role_right extends $apxu_samosbor_map_role_right_base {
        key(next?: string): string;
        description(next?: string): string;
        role(next?: typeof $apxu_samosbor_map_role.options[number]): "cartographer" | "researcher" | "traveler" | "no_role";
    }
    const $apxu_samosbor_map_role_infos_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Rights: (auto?: any) => {
            remote_list(next?: readonly $apxu_samosbor_map_role_right[] | undefined): readonly $apxu_samosbor_map_role_right[];
            remote_add(item: $apxu_samosbor_map_role_right): void;
            make(config: null | number | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxu_samosbor_map_role_right;
            remote_make(config: $hyoo_crus_rank_preset): $apxu_samosbor_map_role_right;
            local_make(idea?: number): $apxu_samosbor_map_role_right;
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
            get $(): $;
            set $(next: $);
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
        readonly Ruler: (auto?: any) => $hyoo_crus_atom_str | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Rights: {
                new (): {
                    remote_list(next?: readonly $apxu_samosbor_map_role_right[] | undefined): readonly $apxu_samosbor_map_role_right[];
                    remote_add(item: $apxu_samosbor_map_role_right): void;
                    make(config: null | number | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxu_samosbor_map_role_right;
                    remote_make(config: $hyoo_crus_rank_preset): $apxu_samosbor_map_role_right;
                    local_make(idea?: number): $apxu_samosbor_map_role_right;
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
                    get $(): $;
                    set $(next: $);
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
            readonly Ruler: typeof $hyoo_crus_atom_str;
        };
    };
    export class $apxu_samosbor_map_role_infos extends $apxu_samosbor_map_role_infos_base {
        get_rights(): readonly $apxu_samosbor_map_role_right[] | undefined;
        ruler_key(): string;
        add_key(key: string): $apxu_samosbor_map_role_right | undefined;
        lord_rights(key: string): $apxu_samosbor_map_role_right | undefined;
        lord_role(key: string, next?: typeof $apxu_samosbor_map_role.options[number] | "no_role"): "cartographer" | "researcher" | "traveler" | "no_role" | undefined;
        rank_for_role(current_role: typeof $apxu_samosbor_map_role.options[number] | "no_role", needed_role: typeof $apxu_samosbor_map_role.options[number]): number & {
            $hyoo_crus_rank: number;
        };
        preset(role: typeof $apxu_samosbor_map_role.options[number]): {
            [key: string]: number & {
                $hyoo_crus_rank: number;
            };
        };
        preset_no_current(role: typeof $apxu_samosbor_map_role.options[number]): {
            [key: string]: number & {
                $hyoo_crus_rank: number;
            };
        };
    }
    export {};
}

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
    const $apxu_samosbor_map_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Gigacluster: (auto?: any) => {
            Value: Value;
            remote(next?: $apxu_samosbor_map_gigacluster | null | undefined): $apxu_samosbor_map_gigacluster | null;
            remote_of(peer: string | null, next?: $apxu_samosbor_map_gigacluster | null | undefined): $apxu_samosbor_map_gigacluster | null;
            ensure(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxu_samosbor_map_gigacluster | null;
            ensure_of(peer: string | null, config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxu_samosbor_map_gigacluster | null;
            ensure_here(peer: string | null): void;
            ensure_area(peer: string | null, land: $hyoo_crus_land): void;
            ensure_lord(peer: string | null, preset: $hyoo_crus_rank_preset): void;
            remote_ensure(preset?: $hyoo_crus_rank_preset): $apxu_samosbor_map_gigacluster | null;
            local_ensure(): $apxu_samosbor_map_gigacluster | null;
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
            get $(): $;
            set $(next: $);
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
        readonly Version: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Roles: (auto?: any) => {
            Value: Value;
            remote(next?: $apxu_samosbor_map_role_infos | null | undefined): $apxu_samosbor_map_role_infos | null;
            remote_of(peer: string | null, next?: $apxu_samosbor_map_role_infos | null | undefined): $apxu_samosbor_map_role_infos | null;
            ensure(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxu_samosbor_map_role_infos | null;
            ensure_of(peer: string | null, config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxu_samosbor_map_role_infos | null;
            ensure_here(peer: string | null): void;
            ensure_area(peer: string | null, land: $hyoo_crus_land): void;
            ensure_lord(peer: string | null, preset: $hyoo_crus_rank_preset): void;
            remote_ensure(preset?: $hyoo_crus_rank_preset): $apxu_samosbor_map_role_infos | null;
            local_ensure(): $apxu_samosbor_map_role_infos | null;
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
            get $(): $;
            set $(next: $);
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Gigacluster: {
                new (): {
                    Value: () => typeof $apxu_samosbor_map_gigacluster;
                    remote(next?: $apxu_samosbor_map_gigacluster | null | undefined): $apxu_samosbor_map_gigacluster | null;
                    remote_of(peer: string | null, next?: $apxu_samosbor_map_gigacluster | null | undefined): $apxu_samosbor_map_gigacluster | null;
                    ensure(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxu_samosbor_map_gigacluster | null;
                    ensure_of(peer: string | null, config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxu_samosbor_map_gigacluster | null;
                    ensure_here(peer: string | null): void;
                    ensure_area(peer: string | null, land: $hyoo_crus_land): void;
                    ensure_lord(peer: string | null, preset: $hyoo_crus_rank_preset): void;
                    remote_ensure(preset?: $hyoo_crus_rank_preset): $apxu_samosbor_map_gigacluster | null;
                    local_ensure(): $apxu_samosbor_map_gigacluster | null;
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
                    get $(): $;
                    set $(next: $);
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
            readonly Version: typeof $hyoo_crus_atom_str;
            readonly Roles: {
                new (): {
                    Value: () => typeof $apxu_samosbor_map_role_infos;
                    remote(next?: $apxu_samosbor_map_role_infos | null | undefined): $apxu_samosbor_map_role_infos | null;
                    remote_of(peer: string | null, next?: $apxu_samosbor_map_role_infos | null | undefined): $apxu_samosbor_map_role_infos | null;
                    ensure(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxu_samosbor_map_role_infos | null;
                    ensure_of(peer: string | null, config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxu_samosbor_map_role_infos | null;
                    ensure_here(peer: string | null): void;
                    ensure_area(peer: string | null, land: $hyoo_crus_land): void;
                    ensure_lord(peer: string | null, preset: $hyoo_crus_rank_preset): void;
                    remote_ensure(preset?: $hyoo_crus_rank_preset): $apxu_samosbor_map_role_infos | null;
                    local_ensure(): $apxu_samosbor_map_role_infos | null;
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
                    get $(): $;
                    set $(next: $);
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
    export class $apxu_samosbor_map extends $apxu_samosbor_map_base {
        roles(): $apxu_samosbor_map_role_infos;
        gigacluster(): $apxu_samosbor_map_gigacluster | null | undefined;
        create_block(): $apxu_samosbor_map_block_data;
        blocks(): readonly $apxu_samosbor_map_block_data[] | undefined;
    }
    export {};
}

declare namespace $ {

	export class $apxu_samosbor_map_icon_stairs extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_cleaner extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_factory extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_repairman extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_sinking extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_roof extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_elevator extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_abandoned extends $mol_icon_spider_web {
	}
	
	export class $apxu_samosbor_map_icon_theatre extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_party extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_hospital extends $mol_icon {
		view_box( ): string
		path( ): string
	}
	
	export class $apxu_samosbor_map_icon_house extends $mol_icon {
		view_box( ): string
		path( ): string
	}
	
	type $mol_svg_path__geometry_apxu_samosbor_map_icon_liquidator_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_path__geometry_apxu_samosbor_map_icon_liquidator_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $apxu_samosbor_map_icon_liquidator extends $mol_icon {
		path1( ): $mol_svg_path
		path2( ): $mol_svg_path
		sub( ): readonly(any)[]
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_ladder extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_arrow_down extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_arrow_left extends $apxu_samosbor_map_icon_arrow_down {
		style( ): ({ 
			'transform': string,
		}) 
	}
	
	export class $apxu_samosbor_map_icon_arrow_right extends $apxu_samosbor_map_icon_arrow_down {
		style( ): ({ 
			'transform': string,
		}) 
	}
	
	export class $apxu_samosbor_map_icon_arrow_up extends $apxu_samosbor_map_icon_arrow_down {
		style( ): ({ 
			'transform': string,
		}) 
	}
	
	export class $apxu_samosbor_map_icon_min_floor extends $apxu_samosbor_map_icon_arrow_down {
	}
	
	export class $apxu_samosbor_map_icon_max_floor extends $apxu_samosbor_map_icon_min_floor {
		style( ): ({ 
			'transform': string,
		}) 
	}
	
	export class $apxu_samosbor_map_icon_generator extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_trash extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_shop extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_direction extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_pipe extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	type $mol_svg_path__geometry_apxu_samosbor_map_icon_board_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_path__geometry_apxu_samosbor_map_icon_board_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $apxu_samosbor_map_icon_board extends $mol_icon {
		path1( ): $mol_svg_path
		path2( ): $mol_svg_path
		sub( ): readonly(any)[]
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_mail extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_balcony extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_laundry extends $mol_icon {
		path( ): string
		view_box( ): string
		style( ): ({ 
			'fill': string,
			'stroke': string,
			'stroke-width': string,
			'stroke-linecap': string,
			'stroke-linejoin': string,
		}) 
	}
	
	export class $apxu_samosbor_map_icon_postal extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_gym extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_overview extends $mol_icon {
		path( ): string
		view_box( ): string
		style( ): ({ 
			'fill': string,
			'stroke': string,
			'stroke-width': string,
			'stroke-linecap': string,
			'stroke-linejoin': string,
		}) 
	}
	
	export class $apxu_samosbor_map_icon_racing extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_hockey extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_spleef extends $mol_icon {
		path( ): string
		view_box( ): string
		style( ): ({ 
			'fill': string,
			'stroke': string,
			'stroke-width': string,
			'stroke-linecap': string,
			'stroke-linejoin': string,
		}) 
	}
	
	export class $apxu_samosbor_map_icon_pool extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_warehouse extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_shower extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_toilet extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_gallery extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
	export class $apxu_samosbor_map_icon_double_floor extends $mol_icon {
		path( ): string
		view_box( ): string
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
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
    let $mol_layer: Record<"focus" | "float" | "hover" | "speck" | "popup", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
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
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
        static warn(key: string): null;
    }
}

declare namespace $ {

	export class $mol_icon_plus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=plus.view.tree.d.ts.map
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

	export class $mol_avatar extends $mol_icon {
		view_box( ): string
		id( ): string
		path( ): string
	}
	
}

//# sourceMappingURL=avatar.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_avatar extends $.$mol_avatar {
        path(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_paragraph extends $mol_view {
		line_height( ): number
		letter_width( ): number
		width_limit( ): number
		row_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paragraph.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_paragraph extends $.$mol_paragraph {
        maximal_width(): number;
        width_limit(): number;
        minimal_width(): number;
        row_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':focus-visible' | ':focus-within' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | ':not()' | ':nth-child(even)' | ':nth-child(odd)' | ':nth-last-child(even)' | ':nth-last-child(odd)' | ':nth-of-type(even)' | ':nth-of-type(odd)' | ':nth-last-of-type(even)' | ':nth-last-of-type(odd)' | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':placeholder-shown' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type Attrs<View extends $mol_view, Config, Attrs = ReturnType<View['attr']>> = {
        [name in keyof Attrs]?: {
            [val in keyof Config[Extract<name, keyof Config>]]: $mol_style_guard<View, Config[Extract<name, keyof Config>][val]>;
        };
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    type Keys<View extends $mol_view> = '>' | '@' | keyof $mol_style_properties | $mol_style_pseudo_element | $mol_style_pseudo_class | $mol_type_keys_extract<View, () => $mol_view> | `$${string}`;
    export type $mol_style_guard<View extends $mol_view, Config> = {
        [key in Keys<View>]?: unknown;
    } & $mol_style_properties & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? $mol_style_properties[key] : key extends '>' | $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends `[${string}]` ? {
            [val in keyof Config[key]]: $mol_style_guard<View, Config[key][val]>;
        } : key extends `--${string}` ? any : key extends keyof $ ? $mol_style_guard<InstanceType<Extract<$[key], typeof $mol_view>>, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : key extends `$${string}` ? $mol_type_error<'Unknown View Class'> : $mol_type_error<'Unknown CSS Property'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
}

declare namespace $ {
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
}

declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		attr( ): ({ 
			'tabindex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_scroll extends $.$mol_scroll {
        scroll_top(next?: number, cache?: 'cache'): number;
        scroll_left(next?: number, cache?: 'cache'): number;
        event_scroll(next?: Event): void;
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_pop_bubble__align_mol_pop_1 = $mol_type_enforce<
		ReturnType< $mol_pop['align'] >
		,
		ReturnType< $mol_pop_bubble['align'] >
	>
	type $mol_pop_bubble__content_mol_pop_2 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max_mol_pop_3 = $mol_type_enforce<
		ReturnType< $mol_pop['height_max'] >
		,
		ReturnType< $mol_pop_bubble['height_max'] >
	>
	export class $mol_pop extends $mol_view {
		Anchor( ): any
		align( ): string
		bubble_content( ): readonly($mol_view_content)[]
		height_max( ): number
		Bubble( ): $mol_pop_bubble
		showed( next?: boolean ): boolean
		align_vert( ): string
		align_hor( ): string
		prefer( ): string
		sub( ): readonly(any)[]
		sub_visible( ): readonly(any)[]
	}
	
	export class $mol_pop_bubble extends $mol_view {
		content( ): readonly($mol_view_content)[]
		height_max( ): number
		align( ): string
		sub( ): ReturnType< $mol_pop_bubble['content'] >
		style( ): ({ 
			'maxHeight': ReturnType< $mol_pop_bubble['height_max'] >,
		})  & ReturnType< $mol_view['style'] >
		attr( ): ({ 
			'mol_pop_align': ReturnType< $mol_pop_bubble['align'] >,
			'tabindex': number,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=pop.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        showed(next?: boolean): boolean;
        sub_visible(): any[];
        height_max(): number;
        align(): string;
        align_vert(): "suspense" | "top" | "bottom";
        align_hor(): "right" | "left" | "suspense";
        View_port(): $mol_view;
        view_port(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | {
            left: number;
            top: number;
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
}

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

	type $mol_check__minimal_width_mol_pick_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height_mol_pick_2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled_mol_pick_3 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked_mol_pick_4 = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks_mol_pick_5 = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub_mol_pick_6 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint_mol_pick_7 = $mol_type_enforce<
		ReturnType< $mol_pick['hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	export class $mol_pick extends $mol_pop {
		keydown( next?: any ): any
		trigger_enabled( ): boolean
		clicks( next?: any ): any
		trigger_content( ): readonly($mol_view_content)[]
		hint( ): string
		Trigger( ): $mol_check
		event( ): ({ 
			keydown( next?: ReturnType< $mol_pick['keydown'] > ): ReturnType< $mol_pick['keydown'] >,
		})  & ReturnType< $mol_pop['event'] >
		Anchor( ): ReturnType< $mol_pick['Trigger'] >
	}
	
}

//# sourceMappingURL=pick.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pick extends $.$mol_pick {
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    type $mol_type_equals<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? unknown : never;
}

declare namespace $ {
    type $mol_type_merge<Intersection> = Intersection extends (...a: any[]) => any ? Intersection : Intersection extends new (...a: any[]) => any ? Intersection : Intersection extends object ? $mol_type_merge_object<Intersection> extends Intersection ? unknown extends $mol_type_equals<{
        [Key in keyof Intersection]: Intersection[Key];
    }, Intersection> ? Intersection : {
        [Key in keyof Intersection]: $mol_type_merge<Intersection[Key]>;
    } : Intersection : Intersection;
    type $mol_type_merge_object<Intersection> = {
        [Key in keyof Intersection]: Intersection[Key];
    };
}

declare namespace $ {
    type $mol_type_intersect<Union> = (Union extends any ? (_: Union) => void : never) extends ((_: infer Intersection) => void) ? Intersection : never;
}

declare namespace $ {
    type $mol_unicode_category = [$mol_unicode_category_binary] | ['General_Category', $mol_char_category_general] | ['Script', $mol_unicode_category_script] | ['Script_Extensions', $mol_unicode_category_script];
    type $mol_unicode_category_binary = 'ASCII' | 'ASCII_Hex_Digit' | 'Alphabetic' | 'Any' | 'Assigned' | 'Bidi_Control' | 'Bidi_Mirrored' | 'Case_Ignorable' | 'Cased' | 'Changes_When_Casefolded' | 'Changes_When_Casemapped' | 'Changes_When_Lowercased' | 'Changes_When_NFKC_Casefolded' | 'Changes_When_Titlecased' | 'Changes_When_Uppercased' | 'Dash' | 'Default_Ignorable_Code_Point' | 'Deprecated' | 'Diacritic' | 'Emoji' | 'Emoji_Component' | 'Emoji_Modifier' | 'Emoji_Modifier_Base' | 'Emoji_Presentation' | 'Extended_Pictographic' | 'Extender' | 'Grapheme_Base' | 'Grapheme_Extend' | 'Hex_Digit' | 'IDS_Binary_Operator' | 'IDS_Trinary_Operator' | 'ID_Continue' | 'ID_Start' | 'Ideographic' | 'Join_Control' | 'Logical_Order_Exception' | 'Lowercase' | 'Math' | 'Noncharacter_Code_Point' | 'Pattern_Syntax' | 'Pattern_White_Space' | 'Quotation_Mark' | 'Radical' | 'Regional_Indicator' | 'Sentence_Terminal' | 'Soft_Dotted' | 'Terminal_Punctuation' | 'Unified_Ideograph' | 'Uppercase' | 'Variation_Selector' | 'White_Space' | 'XID_Continue' | 'XID_Start';
    type $mol_char_category_general = 'Cased_Letter' | 'Close_Punctuation' | 'Connector_Punctuation' | 'Control' | 'Currency_Symbol' | 'Dash_Punctuation' | 'Decimal_Number' | 'Enclosing_Mark' | 'Final_Punctuation' | 'Format' | 'Initial_Punctuation' | 'Letter' | 'Letter_Number' | 'Line_Separator' | 'Lowercase_Letter' | 'Mark' | 'Math_Symbol' | 'Modifier_Letter' | 'Modifier_Symbol' | 'Nonspacing_Mark' | 'Number' | 'Open_Punctuation' | 'Other' | 'Other_Letter' | 'Other_Number' | 'Other_Punctuation' | 'Other_Symbol' | 'Paragraph_Separator' | 'Private_Use' | 'Punctuation' | 'Separator' | 'Space_Separator' | 'Spacing_Mark' | 'Surrogate' | 'Symbol' | 'Titlecase_Letter' | 'Unassigned' | 'Uppercase_Letter';
    type $mol_unicode_category_script = 'Adlam' | 'Ahom' | 'Anatolian_Hieroglyphs' | 'Arabic' | 'Armenian' | 'Avestan' | 'Balinese' | 'Bamum' | 'Bassa_Vah' | 'Batak' | 'Bengali' | 'Bhaiksuki' | 'Bopomofo' | 'Brahmi' | 'Braille' | 'Buginese' | 'Buhid' | 'Canadian_Aboriginal' | 'Carian' | 'Caucasian_Albanian' | 'Chakma' | 'Cham' | 'Chorasmian' | 'Cherokee' | 'Common' | 'Coptic' | 'Cuneiform' | 'Cypriot' | 'Cyrillic' | 'Deseret' | 'Devanagari' | 'Dives_Akuru' | 'Dogra' | 'Duployan' | 'Egyptian_Hieroglyphs' | 'Elbasan' | 'Elymaic' | 'Ethiopic' | 'Georgian' | 'Glagolitic' | 'Gothic' | 'Grantha' | 'Greek' | 'Gujarati' | 'Gunjala_Gondi' | 'Gurmukhi' | 'Han' | 'Hangul' | 'Hanifi_Rohingya' | 'Hanunoo' | 'Hatran' | 'Hebrew' | 'Hiragana' | 'Imperial_Aramaic' | 'Inherited' | 'Inscriptional_Pahlavi' | 'Inscriptional_Parthian' | 'Javanese' | 'Kaithi' | 'Kannada' | 'Katakana' | 'Kayah_Li' | 'Kharoshthi' | 'Khitan_Small_Script' | 'Khmer' | 'Khojki' | 'Khudawadi' | 'Lao' | 'Latin' | 'Lepcha' | 'Limbu' | 'Linear_A' | 'Linear_B' | 'Lisu' | 'Lycian' | 'Lydian' | 'Mahajani' | 'Makasar' | 'Malayalam' | 'Mandaic' | 'Manichaean' | 'Marchen' | 'Medefaidrin' | 'Masaram_Gondi' | 'Meetei_Mayek' | 'Mende_Kikakui' | 'Meroitic_Cursive' | 'Meroitic_Hieroglyphs' | 'Miao' | 'Modi' | 'Mongolian' | 'Mro' | 'Multani' | 'Myanmar' | 'Nabataean' | 'Nandinagari' | 'New_Tai_Lue' | 'Newa' | 'Nko' | 'Nushu' | 'Nyiakeng_Puachue_Hmong' | 'Ogham' | 'Ol_Chiki' | 'Old_Hungarian' | 'Old_Italic' | 'Old_North_Arabian' | 'Old_Permic' | 'Old_Persian' | 'Old_Sogdian' | 'Old_South_Arabian' | 'Old_Turkic' | 'Oriya' | 'Osage' | 'Osmanya' | 'Pahawh_Hmong' | 'Palmyrene' | 'Pau_Cin_Hau' | 'Phags_Pa' | 'Phoenician' | 'Psalter_Pahlavi' | 'Rejang' | 'Runic' | 'Samaritan' | 'Saurashtra' | 'Sharada' | 'Shavian' | 'Siddham' | 'SignWriting' | 'Sinhala' | 'Sogdian' | 'Sora_Sompeng' | 'Soyombo' | 'Sundanese' | 'Syloti_Nagri' | 'Syriac' | 'Tagalog' | 'Tagbanwa' | 'Tai_Le' | 'Tai_Tham' | 'Tai_Viet' | 'Takri' | 'Tamil' | 'Tangut' | 'Telugu' | 'Thaana' | 'Thai' | 'Tibetan' | 'Tifinagh' | 'Tirhuta' | 'Ugaritic' | 'Vai' | 'Wancho' | 'Warang_Citi' | 'Yezidi' | 'Yi' | 'Zanabazar_Square';
}

interface String {
    match<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.match]>;
    matchAll<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.matchAll]>;
}
declare namespace $ {
    type Groups_to_params<T> = {
        [P in keyof T]?: T[P] | boolean | undefined;
    };
    export type $mol_regexp_source = number | string | RegExp | {
        [key in string]: $mol_regexp_source;
    } | readonly [$mol_regexp_source, ...$mol_regexp_source[]];
    export type $mol_regexp_groups<Source extends $mol_regexp_source> = Source extends number ? {} : Source extends string ? {} : Source extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{
        [key in Extract<keyof Source, number>]: $mol_regexp_groups<Source[key]>;
    }[Extract<keyof Source, number>]>> : Source extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> ? {} : NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> : Source extends {
        readonly [key in string]: $mol_regexp_source;
    } ? $mol_type_merge<$mol_type_intersect<{
        [key in keyof Source]: $mol_type_merge<$mol_type_override<{
            readonly [k in Extract<keyof Source, string>]: string;
        }, {
            readonly [k in key]: Source[key] extends string ? Source[key] : string;
        }> & $mol_regexp_groups<Source[key]>>;
    }[keyof Source]>> : never;
    export class $mol_regexp<Groups extends Record<string, string>> extends RegExp {
        readonly groups: (Extract<keyof Groups, string>)[];
        constructor(source: string, flags?: string, groups?: (Extract<keyof Groups, string>)[]);
        [Symbol.matchAll](str: string): RegExpStringIterator<RegExpMatchArray & $mol_type_override<RegExpMatchArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }>>;
        [Symbol.match](str: string): null | RegExpMatchArray;
        [Symbol.split](str: string): string[];
        test(str: string): boolean;
        exec(str: string): RegExpExecArray & $mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }> | null;
        generate(params: Groups_to_params<Groups>): string | null;
        get native(): RegExp;
        static repeat<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static repeat_greedy<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static vary<Sources extends readonly $mol_regexp_source[]>(sources: Sources): $mol_regexp<$mol_regexp_groups<Sources[number]>>;
        static optional<Source extends $mol_regexp_source>(source: Source): $mol_regexp<$mol_regexp_groups<Source>>;
        static force_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static forbid_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static from<Source extends $mol_regexp_source>(source: Source, { ignoreCase, multiline }?: Partial<Pick<RegExp, 'ignoreCase' | 'multiline'>>): $mol_regexp<$mol_regexp_groups<Source>>;
        static unicode_only(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static unicode_except(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static char_range(from: number, to: number): $mol_regexp<{}>;
        static char_only(...allowed: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static char_except(...forbidden: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static decimal_only: $mol_regexp<{}>;
        static decimal_except: $mol_regexp<{}>;
        static latin_only: $mol_regexp<{}>;
        static latin_except: $mol_regexp<{}>;
        static space_only: $mol_regexp<{}>;
        static space_except: $mol_regexp<{}>;
        static word_break_only: $mol_regexp<{}>;
        static word_break_except: $mol_regexp<{}>;
        static tab: $mol_regexp<{}>;
        static slash_back: $mol_regexp<{}>;
        static nul: $mol_regexp<{}>;
        static char_any: $mol_regexp<{}>;
        static begin: $mol_regexp<{}>;
        static end: $mol_regexp<{}>;
        static or: $mol_regexp<{}>;
        static line_end: $mol_regexp<{
            readonly win_end: string;
            readonly mac_end: string;
        }>;
    }
    export {};
}

declare namespace $ {

	type $mol_paragraph__sub_mol_dimmer_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub_mol_dimmer_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $mol_dimmer extends $mol_paragraph {
		parts( ): readonly($mol_view_content)[]
		string( id: any): string
		haystack( ): string
		needle( ): string
		sub( ): ReturnType< $mol_dimmer['parts'] >
		Low( id: any): $mol_paragraph
		High( id: any): $mol_paragraph
	}
	
}

//# sourceMappingURL=dimmer.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_nav extends $mol_plugin {
		event_key( next?: any ): any
		cycle( next?: boolean ): boolean
		mod_ctrl( ): boolean
		mod_shift( ): boolean
		mod_alt( ): boolean
		keys_x( next?: readonly(any)[] ): readonly(any)[]
		keys_y( next?: readonly(any)[] ): readonly(any)[]
		current_x( next?: any ): any
		current_y( next?: any ): any
		event_up( next?: any ): any
		event_down( next?: any ): any
		event_left( next?: any ): any
		event_right( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_nav['event_key'] > ): ReturnType< $mol_nav['event_key'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=nav.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): undefined;
        event_up(event?: KeyboardEvent): undefined;
        event_down(event?: KeyboardEvent): undefined;
        event_left(event?: KeyboardEvent): undefined;
        event_right(event?: KeyboardEvent): undefined;
        index_y(): number | null;
        index_x(): number | null;
    }
}

declare namespace $ {

	export class $mol_icon_close extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=close.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__key_mol_search_1 = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y_mol_search_2 = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_search_3 = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value_mol_search_4 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_mol_search_5 = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit_mol_search_6 = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled_mol_search_7 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard_mol_search_8 = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter_mol_search_9 = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint_mol_search_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled_mol_search_11 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_mol_search_12 = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows_mol_search_14 = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_search_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_dimmer__haystack_mol_search_16 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_search_17 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__18 = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub_mol_search_19 = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_mol_search_20 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_21 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_search extends $mol_pop {
		clear( next?: any ): any
		Hotkey( ): $mol_hotkey
		nav_components( ): readonly($mol_view)[]
		nav_focused( next?: any ): any
		Nav( ): $mol_nav
		suggests_showed( next?: boolean ): boolean
		query( next?: string ): string
		hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		keyboard( ): string
		enter( ): string
		bring( ): ReturnType< ReturnType< $mol_search['Query'] >['bring'] >
		Query( ): $mol_string
		Clear_icon( ): $mol_icon_close
		Clear( ): $mol_button_minor
		anchor_content( ): readonly(any)[]
		menu_items( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		suggest_select( id: any, next?: any ): any
		suggest_label( id: any): string
		Suggest_label( id: any): $mol_dimmer
		suggest_content( id: any): readonly($mol_view_content)[]
		suggests( ): readonly(string)[]
		plugins( ): readonly($mol_plugin)[]
		showed( next?: ReturnType< $mol_search['suggests_showed'] > ): ReturnType< $mol_search['suggests_showed'] >
		align_hor( ): string
		Anchor( ): $mol_view
		bubble_content( ): readonly($mol_view_content)[]
		Suggest( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        anchor_content(): ($.$mol_string | $mol_button_minor)[];
        suggests_showed(next?: boolean): boolean;
        suggest_selected(next?: string): void;
        nav_components(): ($.$mol_string | $mol_button_minor)[];
        nav_focused(component?: $mol_view): $mol_view | $.$mol_string | null;
        suggest_label(key: string): string;
        menu_items(): $mol_button_minor[];
        suggest_select(id: string, event?: MouseEvent): void;
        clear(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_dots_vertical extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=vertical.view.tree.d.ts.map
declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => readonly string[]): (variant: Variant) => boolean;
}

declare namespace $ {

	type $mol_dimmer__haystack_mol_select_1 = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_select_2 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y_mol_select_3 = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_select_4 = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle_mol_select_5 = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows_mol_select_6 = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_select_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__enabled_mol_select_8 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__event_click_mol_select_9 = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub_mol_select_10 = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_mol_select_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query_mol_select_12 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint_mol_select_13 = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit_mol_select_14 = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled_mol_select_15 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	export class $mol_select extends $mol_pick {
		enabled( ): boolean
		event_select( id: any, next?: any ): any
		option_label( id: any): string
		filter_pattern( next?: string ): string
		Option_label( id: any): $mol_dimmer
		option_content( id: any): readonly(any)[]
		no_options_message( ): string
		nav_components( ): readonly($mol_view)[]
		option_focused( next?: any ): any
		nav_cycle( next?: boolean ): boolean
		Nav( ): $mol_nav
		menu_content( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		filter_hint( ): string
		submit( next?: any ): any
		dictionary( next?: Record<string, any> ): Record<string, any>
		options( ): readonly(string)[]
		value( next?: string ): string
		option_label_default( ): string
		Option_row( id: any): $mol_button_minor
		No_options( ): $mol_view
		plugins( ): readonly(any)[]
		hint( ): string
		bubble_content( ): readonly(any)[]
		Filter( ): $mol_search
		Trigger_icon( ): $mol_icon_dots_vertical
	}
	
}

//# sourceMappingURL=select.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options(): readonly string[];
        options_filtered(): readonly string[];
        option_label(id: string): any;
        option_rows(): $mol_button_minor[];
        option_focused(component?: $mol_view): $mol_view | $.$mol_search | null;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($mol_button_minor | $.$mol_search)[];
        trigger_content(): readonly $mol_view_content[];
        menu_content(): $mol_view[];
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_string__hint_hyoo_crus_land_rights_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_hyoo_crus_land_rights_2 = $mol_type_enforce<
		ReturnType< $hyoo_crus_land_rights['add_key'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__submit_hyoo_crus_land_rights_3 = $mol_type_enforce<
		ReturnType< $hyoo_crus_land_rights['add_commit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_button_minor__click_hyoo_crus_land_rights_4 = $mol_type_enforce<
		ReturnType< $hyoo_crus_land_rights['add_commit'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_hyoo_crus_land_rights_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_hyoo_crus_land_rights_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_avatar__id_hyoo_crus_land_rights_7 = $mol_type_enforce<
		ReturnType< $hyoo_crus_land_rights['peer_id'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_paragraph__title_hyoo_crus_land_rights_8 = $mol_type_enforce<
		ReturnType< $hyoo_crus_land_rights['peer_name'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_view__sub_hyoo_crus_land_rights_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_select__value_hyoo_crus_land_rights_10 = $mol_type_enforce<
		ReturnType< $hyoo_crus_land_rights['gift_rank'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary_hyoo_crus_land_rights_11 = $mol_type_enforce<
		({ 
			'deny': string,
			'read': string,
			'join': string,
			'post': string,
			'rule': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_view__sub_hyoo_crus_land_rights_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $hyoo_crus_land_rights extends $mol_list {
		add_key( next?: string ): string
		add_commit( next?: any ): any
		Add_key( ): $mol_string
		Add_commit_icon( ): $mol_icon_plus
		Add_commit( ): $mol_button_minor
		Add( ): $mol_view
		peer_id( id: any): string
		Gift_avatar( id: any): $mol_avatar
		peer_name( id: any): string
		Gift_name( id: any): $mol_paragraph
		Gift_peer( id: any): $mol_view
		gift_rank( id: any, next?: string ): string
		Gift_rank( id: any): $mol_select
		Gift( id: any): $mol_view
		gifts( ): readonly(any)[]
		land( ): $hyoo_crus_land
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=rights.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_crus_land_rights extends $.$hyoo_crus_land_rights {
        gifts(): $mol_view[];
        peer_id(id: string): string;
        peer_name(id: string): string;
        gift_rank(id: string, next?: keyof typeof $hyoo_crus_rank_tier): string;
        add_commit(): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_bar extends $mol_view {
	}
	
}

//# sourceMappingURL=bar.view.tree.d.ts.map
declare namespace $ {
    type $mol_blob = Blob;
    let $mol_blob: {
        prototype: Blob;
        new (blobParts?: readonly BlobPart[], options?: BlobPropertyBag): Blob;
    };
}

declare namespace $ {

	export class $mol_icon_clipboard extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=clipboard.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clipboard_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {
    function $mol_html_encode(text: string): string;
}

declare namespace $ {

	type $mol_blob__mol_button_copy_1 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	type $mol_blob__mol_button_copy_2 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	export class $mol_button_copy extends $mol_button_minor {
		text( ): ReturnType< $mol_button_copy['title'] >
		text_blob( next?: $mol_blob ): $mol_blob
		html( ): string
		html_blob( next?: $mol_blob ): $mol_blob
		Icon( ): $mol_icon_clipboard_outline
		title( ): string
		blobs( ): readonly($mol_blob)[]
		data( ): Record<string, any>
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=copy.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button_copy extends $.$mol_button_copy {
        data(): {
            [k: string]: Blob;
        };
        html(): string;
        attachments(): ClipboardItem[];
        click(event?: Event): void;
    }
}

declare namespace $ {

	export class $mol_icon_chevron extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=chevron.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_expand extends $mol_check {
		level_style( ): string
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		Icon( ): $mol_icon_chevron
		level( ): number
		style( ): ({ 
			'paddingLeft': ReturnType< $mol_check_expand['level_style'] >,
		})  & ReturnType< $mol_check['style'] >
		checked( next?: ReturnType< $mol_check_expand['expanded'] > ): ReturnType< $mol_check_expand['expanded'] >
		enabled( ): ReturnType< $mol_check_expand['expandable'] >
	}
	
}

//# sourceMappingURL=expand.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check_expand extends $.$mol_check_expand {
        level_style(): string;
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_check_expand__checked_mol_expander_1 = $mol_type_enforce<
		ReturnType< $mol_expander['expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	type $mol_check_expand__expandable_mol_expander_2 = $mol_type_enforce<
		ReturnType< $mol_expander['expandable'] >
		,
		ReturnType< $mol_check_expand['expandable'] >
	>
	type $mol_check_expand__label_mol_expander_3 = $mol_type_enforce<
		ReturnType< $mol_expander['label'] >
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_view__sub_mol_expander_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_mol_expander_5 = $mol_type_enforce<
		ReturnType< $mol_expander['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_expander extends $mol_list {
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		label( ): readonly(any)[]
		Trigger( ): $mol_check_expand
		Tools( ): any
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_list
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=expander.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_expander extends $.$mol_expander {
        rows(): $mol_view[];
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_repeat extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=repeat.view.tree.d.ts.map
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

declare namespace $.$$ {
    class $apxu_samosbor_map_slider_input extends $.$apxu_samosbor_map_slider_input {
        delta_x(val?: number): number;
        delta_y(val?: number): number;
        start_event?: PointerEvent;
        start_pos?: {
            x: number;
            y: number;
        };
        drag_start(event: PointerEvent): void;
        drag(event: PointerEvent): void;
        drag_end(event: PointerEvent): void;
        pointerdown(event: PointerEvent): void;
    }
}

declare namespace $ {

	export class $apxu_samosbor_map_slider_input extends $mol_plugin {
		pointerdown( next?: any ): any
		moving( next?: boolean ): boolean
		x( next?: number ): number
		y( next?: number ): number
		delta_x( next?: number ): number
		delta_y( next?: number ): number
		on_drag( next?: any ): any
		on_drag_start( next?: any ): any
		on_drag_end( next?: any ): any
		drag( next?: any ): any
		drag_start( next?: any ): any
		drag_end( next?: any ): any
		event( ): ({ 
			pointerdown( next?: ReturnType< $apxu_samosbor_map_slider_input['pointerdown'] > ): ReturnType< $apxu_samosbor_map_slider_input['pointerdown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		attr( ): ({ 
			'moving': ReturnType< $apxu_samosbor_map_slider_input['moving'] >,
		})  & ReturnType< $mol_plugin['attr'] >
	}
	
	type $mol_view__sub_apxu_samosbor_map_slider_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type __apxu_samosbor_map_slider_2 = $mol_type_enforce<
		Parameters< $apxu_samosbor_map_slider['delta_x'] >[0]
		,
		Parameters< ReturnType< $apxu_samosbor_map_slider['input_plugin'] >['delta_x'] >[0]
	>
	type $apxu_samosbor_map_slider_input__delta_y_apxu_samosbor_map_slider_3 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_slider['delta_y'] >
		,
		ReturnType< $apxu_samosbor_map_slider_input['delta_y'] >
	>
	type $apxu_samosbor_map_slider_input__on_drag_start_apxu_samosbor_map_slider_4 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_slider['drag_start'] >
		,
		ReturnType< $apxu_samosbor_map_slider_input['on_drag_start'] >
	>
	type $mol_view__plugins_apxu_samosbor_map_slider_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['plugins'] >
	>
	type $mol_view__style_apxu_samosbor_map_slider_6 = $mol_type_enforce<
		({ 
			'top': ReturnType< $apxu_samosbor_map_slider['thumb_top'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__event_apxu_samosbor_map_slider_7 = $mol_type_enforce<
		({ 
			pointerdown( next?: ReturnType< $apxu_samosbor_map_slider['event_mouse_down'] > ): ReturnType< $apxu_samosbor_map_slider['event_mouse_down'] >,
			pointermove( next?: ReturnType< $apxu_samosbor_map_slider['event_mouse_move'] > ): ReturnType< $apxu_samosbor_map_slider['event_mouse_move'] >,
			pointerup( next?: ReturnType< $apxu_samosbor_map_slider['event_mouse_up'] > ): ReturnType< $apxu_samosbor_map_slider['event_mouse_up'] >,
			touchstart( next?: ReturnType< $apxu_samosbor_map_slider['event_touch_start'] > ): ReturnType< $apxu_samosbor_map_slider['event_touch_start'] >,
			touchmove( next?: ReturnType< $apxu_samosbor_map_slider['event_touch_move'] > ): ReturnType< $apxu_samosbor_map_slider['event_touch_move'] >,
			touchend( next?: ReturnType< $apxu_samosbor_map_slider['event_touch_end'] > ): ReturnType< $apxu_samosbor_map_slider['event_touch_end'] >,
		}) 
		,
		ReturnType< $mol_view['event'] >
	>
	type $mol_view__sub_apxu_samosbor_map_slider_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__event_apxu_samosbor_map_slider_9 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxu_samosbor_map_slider['bar_click'] > ): ReturnType< $apxu_samosbor_map_slider['bar_click'] >,
		}) 
		,
		ReturnType< $mol_view['event'] >
	>
	type $mol_view__sub_apxu_samosbor_map_slider_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__attr_apxu_samosbor_map_slider_11 = $mol_type_enforce<
		({ 
			'direction': ReturnType< $apxu_samosbor_map_slider['direction'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	export class $apxu_samosbor_map_slider extends $mol_view {
		all_slots( ): readonly($mol_view)[]
		visible_slots( ): ReturnType< $apxu_samosbor_map_slider['all_slots'] >
		Slots( ): $mol_view
		bar_click( next?: any ): any
		delta_x( next?: ReturnType< ReturnType< $apxu_samosbor_map_slider['input_plugin'] >['delta_x'] > ): ReturnType< ReturnType< $apxu_samosbor_map_slider['input_plugin'] >['delta_x'] >
		delta_y( next?: number ): number
		drag_start( next?: any ): any
		input_plugin( ): $apxu_samosbor_map_slider_input
		thumb_top( ): string
		event_mouse_down( next?: any ): any
		event_mouse_move( next?: any ): any
		event_mouse_up( next?: any ): any
		event_touch_start( next?: any ): any
		event_touch_move( next?: any ): any
		event_touch_end( next?: any ): any
		thumb_content( ): ReturnType< $apxu_samosbor_map_slider['value_limited'] >
		Thumb( ): $mol_view
		Bar( ): $mol_view
		min_value( next?: number ): number
		max_value( next?: number ): number
		value( next?: number ): number
		value_limited( next?: number ): number
		step( next?: number ): number
		direction( next?: string ): string
		Slot( id: any): $mol_view
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=slider.view.tree.d.ts.map
declare namespace $.$$ {
    class $apxu_samosbor_map_slider extends $.$apxu_samosbor_map_slider {
        slot_count(): number;
        slot_size(): number;
        thumb_top(): string;
        value_limited(next?: number): number;
        all_slots(): readonly ($mol_view)[];
        first_value: number;
        drag_start(event?: PointerEvent): void;
        delta_y(next?: number): number;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_selection extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=selection.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_selection_search extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map
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
    class $mol_vector<Value, Length extends number> extends Array<Value> {
        get length(): Length;
        constructor(...values: Value[] & {
            length: Length;
        });
        map<Res>(convert: (value: Value, index: number, array: this) => Res, self?: any): $mol_vector<Res, Length>;
        merged<Patch>(patches: readonly Patch[] & {
            length: Length;
        }, combine: (value: Value, patch: Patch) => Value): this;
        limited(this: $mol_vector<number, Length>, limits: readonly (readonly [number, number])[] & {
            length: Length;
        }): this;
        added0(this: $mol_vector<number, Length>, diff: number): this;
        added1(this: $mol_vector<number, Length>, diff: readonly number[] & {
            length: Length;
        }): this;
        substracted1(this: $mol_vector<number, Length>, diff: readonly number[] & {
            length: Length;
        }): this;
        multed0(this: $mol_vector<number, Length>, mult: number): this;
        multed1(this: $mol_vector<number, Length>, mults: readonly number[] & {
            length: Length;
        }): this;
        divided1(this: $mol_vector<number, Length>, mults: readonly number[] & {
            length: Length;
        }): this;
        powered0(this: $mol_vector<number, Length>, mult: number): this;
        expanded1(this: $mol_vector<$mol_vector_range<number>, Length>, point: readonly number[] & {
            length: Length;
        }): this;
        expanded2(this: $mol_vector<$mol_vector_range<number>, Length>, point: readonly (readonly [number, number])[] & {
            length: Length;
        }): this;
        center<Item extends $mol_vector<number, number>>(this: $mol_vector<Item, Length>): Item;
        distance(this: $mol_vector<$mol_vector<number, number>, Length>): number;
        transponed(this: $mol_vector<$mol_vector<number, number>, Length>): $mol_vector<$mol_vector<number, Length>, typeof this[0]['length']>;
        get x(): Value;
        set x(next: Value);
        get y(): Value;
        set y(next: Value);
        get z(): Value;
        set z(next: Value);
    }
    class $mol_vector_1d<Value> extends $mol_vector<Value, 1> {
    }
    class $mol_vector_2d<Value> extends $mol_vector<Value, 2> {
    }
    class $mol_vector_3d<Value> extends $mol_vector<Value, 3> {
    }
    class $mol_vector_range<Value> extends $mol_vector<Value, 2> {
        0: Value;
        1: Value;
        constructor(min: Value, max?: Value);
        get min(): Value;
        set min(next: Value);
        get max(): Value;
        set max(next: Value);
        get inversed(): $mol_vector_range<Value>;
        expanded0(value: Value): $mol_vector_range<Value>;
    }
    let $mol_vector_range_full: $mol_vector_range<number>;
    class $mol_vector_matrix<Width extends number, Height extends number> extends $mol_vector<readonly number[] & {
        length: Width;
    }, Height> {
        added2(diff: readonly (readonly number[] & {
            length: Width;
        })[] & {
            length: Height;
        }): this;
        multed2(diff: readonly (readonly number[] & {
            length: Width;
        })[] & {
            length: Height;
        }): this;
    }
}

declare namespace $ {

	type $mol_vector_2d__mol_touch_1 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_touch_2 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_touch_3 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	export class $mol_touch extends $mol_plugin {
		event_start( next?: any ): any
		event_move( next?: any ): any
		event_end( next?: any ): any
		event_leave( next?: any ): any
		event_wheel( next?: any ): any
		start_zoom( next?: number ): number
		start_distance( next?: number ): number
		zoom( next?: number ): number
		allow_draw( ): boolean
		allow_pan( ): boolean
		allow_zoom( ): boolean
		action_type( next?: string ): string
		action_point( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		start_pan( next?: readonly(any)[] ): readonly(any)[]
		pan( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		pointer_center( ): $mol_vector_2d<number>
		start_pos( next?: any ): any
		swipe_precision( ): number
		swipe_right( next?: any ): any
		swipe_bottom( next?: any ): any
		swipe_left( next?: any ): any
		swipe_top( next?: any ): any
		swipe_from_right( next?: any ): any
		swipe_from_bottom( next?: any ): any
		swipe_from_left( next?: any ): any
		swipe_from_top( next?: any ): any
		swipe_to_right( next?: any ): any
		swipe_to_bottom( next?: any ): any
		swipe_to_left( next?: any ): any
		swipe_to_top( next?: any ): any
		draw_start( next?: any ): any
		draw( next?: any ): any
		draw_end( next?: any ): any
		style( ): ({ 
			'touch-action': string,
			'overscroll-behavior': string,
		})  & ReturnType< $mol_plugin['style'] >
		event( ): ({ 
			pointerdown( next?: ReturnType< $mol_touch['event_start'] > ): ReturnType< $mol_touch['event_start'] >,
			pointermove( next?: ReturnType< $mol_touch['event_move'] > ): ReturnType< $mol_touch['event_move'] >,
			pointerup( next?: ReturnType< $mol_touch['event_end'] > ): ReturnType< $mol_touch['event_end'] >,
			pointerleave( next?: ReturnType< $mol_touch['event_leave'] > ): ReturnType< $mol_touch['event_leave'] >,
			wheel( next?: ReturnType< $mol_touch['event_wheel'] > ): ReturnType< $mol_touch['event_wheel'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=touch.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_touch extends $.$mol_touch {
        auto(): void;
        pointer_events(next?: readonly PointerEvent[]): readonly PointerEvent[];
        pointer_coords(): $mol_vector<$mol_vector_2d<number>, number>;
        pointer_center(): $mol_vector_2d<number>;
        event_coords(event: PointerEvent | WheelEvent): $mol_vector_2d<number>;
        action_point(): $mol_vector_2d<number>;
        event_eat(event: PointerEvent | WheelEvent): string;
        event_start(event: PointerEvent): void;
        event_move(event: PointerEvent): void;
        event_end(event: PointerEvent): void;
        event_leave(event: PointerEvent): void;
        swipe_left(event: PointerEvent): void;
        swipe_right(event: PointerEvent): void;
        swipe_top(event: PointerEvent): void;
        swipe_bottom(event: PointerEvent): void;
        event_wheel(event: WheelEvent): void;
    }
}

declare namespace $ {

	type $mol_vector_2d__apxu_samosbor_map_area_1 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_touch__allow_draw_apxu_samosbor_map_area_2 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_touch['allow_draw'] >
	>
	type $mol_touch__zoom_apxu_samosbor_map_area_3 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_area['cur_zoom'] >
		,
		ReturnType< $mol_touch['zoom'] >
	>
	type $mol_touch__pan_apxu_samosbor_map_area_4 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_area['cur_pan'] >
		,
		ReturnType< $mol_touch['pan'] >
	>
	type $mol_view__minimal_width_apxu_samosbor_map_area_5 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_width'] >
	>
	type $mol_view__minimal_height_apxu_samosbor_map_area_6 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__style_apxu_samosbor_map_area_7 = $mol_type_enforce<
		({ 
			'translate': ReturnType< $apxu_samosbor_map_area['position_style'] >,
			'scale': ReturnType< $apxu_samosbor_map_area['scale_style'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub_apxu_samosbor_map_area_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $apxu_samosbor_map_area extends $mol_view {
		isDragging( next?: boolean ): boolean
		cur_zoom( next?: number ): number
		cur_pan( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		mover( ): $mol_touch
		position_style( ): string
		scale_style( ): string
		items( ): readonly(any)[]
		Plane( ): $mol_view
		zoom( ): number
		attr( ): ({ 
			'dragging': ReturnType< $apxu_samosbor_map_area['isDragging'] >,
		}) 
		plugins( ): readonly(any)[]
		sub( ): readonly($mol_view)[]
	}
	
}

//# sourceMappingURL=area.view.tree.d.ts.map
declare namespace $.$$ {
    class $apxu_samosbor_map_area extends $.$apxu_samosbor_map_area {
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
        event_mouse_down(event: PointerEvent): void;
        event_mouse_move(event: MouseEvent): void;
        event_mouse_up(event: PointerEvent): void;
        log(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_major extends $mol_button_minor {
		theme( ): string
	}
	
}

//# sourceMappingURL=major.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_pencil extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=pencil.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_check_icon extends $mol_check {
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_trash_can extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=can.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_trash_can_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_content_copy extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=copy.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_map extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=map.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_map_marker extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=marker.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_map_marker_path extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_triangle extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=triangle.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_triangle_down extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=down.view.tree.d.ts.map
declare namespace $ {

	export class $apxu_samosbor_map_block_card_number_input extends $mol_number {
		unfocus( next?: any ): any
		event( ): ({ 
			focusout( next?: ReturnType< $apxu_samosbor_map_block_card_number_input['unfocus'] > ): ReturnType< $apxu_samosbor_map_block_card_number_input['unfocus'] >,
		})  & ReturnType< $mol_number['event'] >
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
	export class $apxu_samosbor_map_block_card_floor_input extends $mol_string {
		unfocus( next?: any ): any
		event( ): ({ 
			focusout( next?: ReturnType< $apxu_samosbor_map_block_card_floor_input['unfocus'] > ): ReturnType< $apxu_samosbor_map_block_card_floor_input['unfocus'] >,
		})  & ReturnType< $mol_string['event'] >
		minimal_height( ): number
	}
	
	export class $apxu_samosbor_map_block_card_position_input extends $apxu_samosbor_map_block_card_number_input {
		sub( ): readonly(any)[]
	}
	
	export class $apxu_samosbor_map_block_card_flight_button extends $mol_button_major {
		edit_mode( next?: boolean ): boolean
		attr( ): ({ 
			'edit-mode': ReturnType< $apxu_samosbor_map_block_card_flight_button['edit_mode'] >,
		})  & ReturnType< $mol_button_major['attr'] >
	}
	
	type $mol_button_minor__click_apxu_samosbor_map_block_card_place_1 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card_place['add_floor'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__title_apxu_samosbor_map_block_card_place_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $apxu_samosbor_map_block_card_floor_input__enabled_apxu_samosbor_map_block_card_place_3 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card_place['enabled'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_floor_input['enabled'] >
	>
	type $apxu_samosbor_map_block_card_floor_input__value_apxu_samosbor_map_block_card_place_4 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card_place['floor_string'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_floor_input['value'] >
	>
	type $apxu_samosbor_map_block_card_floor_input__unfocus_apxu_samosbor_map_block_card_place_5 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card_place['unfocus'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_floor_input['unfocus'] >
	>
	export class $apxu_samosbor_map_block_card_place extends $mol_view {
		floor_string( id: any, next?: string ): string
		unfocus( id: any, next?: any ): any
		icon( ): $mol_icon
		floors_list( ): readonly(any)[]
		add_floor( next?: any ): any
		add_input( ): $mol_button_minor
		minimal_width( ): number
		floors( next?: readonly(any)[] ): readonly(any)[]
		enabled( next?: boolean ): boolean
		attr( ): ({ 
			'enabled': ReturnType< $apxu_samosbor_map_block_card_place['enabled'] >,
		}) 
		floor_value( id: any, next?: number ): number
		block( ): $apxu_samosbor_map_block
		floor_input( id: any): $apxu_samosbor_map_block_card_floor_input
		remove_floor( id: any): any
		sub( ): readonly(any)[]
	}
	
	type $apxu_samosbor_map_block_card_number_input__enabled_apxu_samosbor_map_block_card_floor_1 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card_floor['enabled'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_number_input['enabled'] >
	>
	type $apxu_samosbor_map_block_card_number_input__value_apxu_samosbor_map_block_card_floor_2 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card_floor['floor_value'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_number_input['value'] >
	>
	export class $apxu_samosbor_map_block_card_floor extends $mol_view {
		icon( ): $mol_icon
		enabled( ): boolean
		floor_value( next?: number ): number
		input( ): $apxu_samosbor_map_block_card_number_input
		sub( ): readonly(any)[]
	}
	
	export class $apxu_samosbor_map_block_card_touch extends $mol_touch {
	}
	
	type __apxu_samosbor_map_block_card_1 = $mol_type_enforce<
		Parameters< $apxu_samosbor_map_block_card['pan'] >[0]
		,
		Parameters< ReturnType< $apxu_samosbor_map_block_card['mover'] >['pan'] >[0]
	>
	type $apxu_samosbor_map_block_card_touch__allow_draw_apxu_samosbor_map_block_card_2 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxu_samosbor_map_block_card_touch['allow_draw'] >
	>
	type $apxu_samosbor_map_block_card_touch__allow_zoom_apxu_samosbor_map_block_card_3 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxu_samosbor_map_block_card_touch['allow_zoom'] >
	>
	type __apxu_samosbor_map_block_card_4 = $mol_type_enforce<
		Parameters< $apxu_samosbor_map_block_card['board_floor_value'] >[0]
		,
		Parameters< ReturnType< $apxu_samosbor_map_block_card['block'] >['board_floor_value'] >[0]
	>
	type __apxu_samosbor_map_block_card_5 = $mol_type_enforce<
		Parameters< $apxu_samosbor_map_block_card['mail_floor_value'] >[0]
		,
		Parameters< ReturnType< $apxu_samosbor_map_block_card['block'] >['mail_floor_value'] >[0]
	>
	type __apxu_samosbor_map_block_card_6 = $mol_type_enforce<
		Parameters< $apxu_samosbor_map_block_card['roof_floor_value'] >[0]
		,
		Parameters< ReturnType< $apxu_samosbor_map_block_card['block'] >['roof_floor_value'] >[0]
	>
	type __apxu_samosbor_map_block_card_7 = $mol_type_enforce<
		Parameters< $apxu_samosbor_map_block_card['flood_floor_value'] >[0]
		,
		Parameters< ReturnType< $apxu_samosbor_map_block_card['block'] >['flood_floor_value'] >[0]
	>
	type $apxu_samosbor_map_block_card_floor__enabled_apxu_samosbor_map_block_card_8 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['edit_mode'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_floor['enabled'] >
	>
	type $apxu_samosbor_map_block_card_floor__floor_value_apxu_samosbor_map_block_card_9 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['floor_value'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_floor['floor_value'] >
	>
	type $apxu_samosbor_map_block_card_floor__icon_apxu_samosbor_map_block_card_10 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['floor_icon'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_floor['icon'] >
	>
	type $apxu_samosbor_map_block_card_number_input__enabled_apxu_samosbor_map_block_card_11 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['edit_mode'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_number_input['enabled'] >
	>
	type $apxu_samosbor_map_block_card_number_input__value_apxu_samosbor_map_block_card_12 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['max_floor'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_number_input['value'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $apxu_samosbor_map_block_card_number_input__enabled_apxu_samosbor_map_block_card_14 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['edit_mode'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_number_input['enabled'] >
	>
	type $apxu_samosbor_map_block_card_number_input__value_apxu_samosbor_map_block_card_15 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['min_floor'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_number_input['value'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $apxu_samosbor_map_block_card_flight_button__minimal_width_apxu_samosbor_map_block_card_17 = $mol_type_enforce<
		number
		,
		ReturnType< $apxu_samosbor_map_block_card_flight_button['minimal_width'] >
	>
	type $apxu_samosbor_map_block_card_flight_button__minimal_height_apxu_samosbor_map_block_card_18 = $mol_type_enforce<
		number
		,
		ReturnType< $apxu_samosbor_map_block_card_flight_button['minimal_height'] >
	>
	type $apxu_samosbor_map_block_card_flight_button__edit_mode_apxu_samosbor_map_block_card_19 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['edit_mode'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_flight_button['edit_mode'] >
	>
	type $apxu_samosbor_map_block_card_flight_button__sub_apxu_samosbor_map_block_card_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxu_samosbor_map_block_card_flight_button['sub'] >
	>
	type $apxu_samosbor_map_block_card_flight_button__click_apxu_samosbor_map_block_card_21 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['change_flight_click'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_flight_button['click'] >
	>
	type $mol_view__attr_apxu_samosbor_map_block_card_22 = $mol_type_enforce<
		({ 
			'middle': ReturnType< $apxu_samosbor_map_block_card['is_middle_flight'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_23 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $apxu_samosbor_map_block_card_flight_button__minimal_width_apxu_samosbor_map_block_card_24 = $mol_type_enforce<
		number
		,
		ReturnType< $apxu_samosbor_map_block_card_flight_button['minimal_width'] >
	>
	type $apxu_samosbor_map_block_card_flight_button__minimal_height_apxu_samosbor_map_block_card_25 = $mol_type_enforce<
		number
		,
		ReturnType< $apxu_samosbor_map_block_card_flight_button['minimal_height'] >
	>
	type $apxu_samosbor_map_block_card_flight_button__edit_mode_apxu_samosbor_map_block_card_26 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['edit_mode'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_flight_button['edit_mode'] >
	>
	type $apxu_samosbor_map_block_card_flight_button__sub_apxu_samosbor_map_block_card_27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxu_samosbor_map_block_card_flight_button['sub'] >
	>
	type $apxu_samosbor_map_block_card_flight_button__click_apxu_samosbor_map_block_card_28 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['change_flight_click'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_flight_button['click'] >
	>
	type $apxu_samosbor_map_block_card_floor__enabled_apxu_samosbor_map_block_card_29 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['edit_mode'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_floor['enabled'] >
	>
	type $apxu_samosbor_map_block_card_floor__floor_value_apxu_samosbor_map_block_card_30 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['gen_floor'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_floor['floor_value'] >
	>
	type $apxu_samosbor_map_block_card_floor__icon_apxu_samosbor_map_block_card_31 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['gen_icon'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_floor['icon'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_32 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__sub_apxu_samosbor_map_block_card_33 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_34 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__sub_apxu_samosbor_map_block_card_35 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_apxu_samosbor_map_block_card_36 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['close_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_check_icon__Icon_apxu_samosbor_map_block_card_37 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['edit_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked_apxu_samosbor_map_block_card_38 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['edit_mode'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_button_minor__click_apxu_samosbor_map_block_card_39 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['delete_block'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_apxu_samosbor_map_block_card_40 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_41 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_string__enabled_apxu_samosbor_map_block_card_42 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['edit_mode'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__value_apxu_samosbor_map_block_card_43 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['block_name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_44 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_45 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_copy__enabled_apxu_samosbor_map_block_card_46 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_button_copy['enabled'] >
	>
	type $mol_button_copy__sub_apxu_samosbor_map_block_card_47 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_copy['sub'] >
	>
	type $mol_button_copy__title_apxu_samosbor_map_block_card_48 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['block_link'] >
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_major__enabled_apxu_samosbor_map_block_card_49 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_button_major['enabled'] >
	>
	type $mol_button_major__sub_apxu_samosbor_map_block_card_50 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_button_major__click_apxu_samosbor_map_block_card_51 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['path_click'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_52 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_53 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $apxu_samosbor_map_block_card_position_input__value_apxu_samosbor_map_block_card_54 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['pos_x'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_position_input['value'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_55 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $apxu_samosbor_map_block_card_position_input__value_apxu_samosbor_map_block_card_56 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['pos_y'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_position_input['value'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_57 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $apxu_samosbor_map_block_card_position_input__value_apxu_samosbor_map_block_card_58 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['block_layer'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_position_input['value'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_59 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_60 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__sub_apxu_samosbor_map_block_card_61 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_apxu_samosbor_map_block_card_62 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['move_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__minimal_height_apxu_samosbor_map_block_card_63 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_height'] >
	>
	type $mol_button_minor__minimal_width_apxu_samosbor_map_block_card_64 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_width'] >
	>
	type $mol_button_minor__sub_apxu_samosbor_map_block_card_65 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_apxu_samosbor_map_block_card_66 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['move_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__minimal_height_apxu_samosbor_map_block_card_67 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_height'] >
	>
	type $mol_button_minor__minimal_width_apxu_samosbor_map_block_card_68 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_width'] >
	>
	type $mol_button_minor__sub_apxu_samosbor_map_block_card_69 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_apxu_samosbor_map_block_card_70 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['move_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__minimal_height_apxu_samosbor_map_block_card_71 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_height'] >
	>
	type $mol_button_minor__minimal_width_apxu_samosbor_map_block_card_72 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_width'] >
	>
	type $mol_button_minor__sub_apxu_samosbor_map_block_card_73 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_apxu_samosbor_map_block_card_74 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['move_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__minimal_height_apxu_samosbor_map_block_card_75 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_height'] >
	>
	type $mol_button_minor__minimal_width_apxu_samosbor_map_block_card_76 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_width'] >
	>
	type $apxu_samosbor_map_icon_direction__style_apxu_samosbor_map_block_card_77 = $mol_type_enforce<
		({ 
			'transform': ReturnType< $apxu_samosbor_map_block_card['rotation'] >,
		}) 
		,
		ReturnType< $apxu_samosbor_map_icon_direction['style'] >
	>
	type $mol_button_minor__click_apxu_samosbor_map_block_card_78 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['rotate_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__minimal_height_apxu_samosbor_map_block_card_79 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_height'] >
	>
	type $mol_button_minor__minimal_width_apxu_samosbor_map_block_card_80 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_width'] >
	>
	type $mol_button_minor__sub_apxu_samosbor_map_block_card_81 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_82 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_check_box__checked_apxu_samosbor_map_block_card_83 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['is_doubled_floor'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_84 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_check_box__checked_apxu_samosbor_map_block_card_85 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['is_pipe_block'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_86 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_87 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__attr_apxu_samosbor_map_block_card_88 = $mol_type_enforce<
		({ 
			'edit-mode': ReturnType< $apxu_samosbor_map_block_card['edit_mode'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_89 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_select__trigger_enabled_apxu_samosbor_map_block_card_90 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['edit_mode'] >
		,
		ReturnType< $mol_select['trigger_enabled'] >
	>
	type $mol_select__enabled_apxu_samosbor_map_block_card_91 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['edit_mode'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_select__value_apxu_samosbor_map_block_card_92 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['block_type_value'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary_apxu_samosbor_map_block_card_93 = $mol_type_enforce<
		({ 
			'residential': string,
			'destroyed': string,
			'frozen': string,
			'infected': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_select__Trigger_icon_apxu_samosbor_map_block_card_94 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['current_type_select_icon'] >
		,
		ReturnType< $mol_select['Trigger_icon'] >
	>
	type $mol_select__Filter_apxu_samosbor_map_block_card_95 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_select['Filter'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_96 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_check_box__enabled_apxu_samosbor_map_block_card_97 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['edit_mode'] >
		,
		ReturnType< $mol_check_box['enabled'] >
	>
	type $mol_check_box__checked_apxu_samosbor_map_block_card_98 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['has_balcony'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__Icon_apxu_samosbor_map_block_card_99 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['balcony_icon'] >
		,
		ReturnType< $mol_check_box['Icon'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_100 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_101 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $apxu_samosbor_map_block_card_place__floors_apxu_samosbor_map_block_card_102 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['safe_floors'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_place['floors'] >
	>
	type $apxu_samosbor_map_block_card_place__icon_apxu_samosbor_map_block_card_103 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['house_icon'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_place['icon'] >
	>
	type $apxu_samosbor_map_block_card_place__enabled_apxu_samosbor_map_block_card_104 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxu_samosbor_map_block_card_place['enabled'] >
	>
	type $apxu_samosbor_map_block_card_place__remove_floor_apxu_samosbor_map_block_card_105 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['remove_floor'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_place['remove_floor'] >
	>
	type $apxu_samosbor_map_block_card_place__block_apxu_samosbor_map_block_card_106 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['block'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_place['block'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_107 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_108 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_109 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $hyoo_crus_land_rights__land_apxu_samosbor_map_block_card_110 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['block_land'] >
		,
		ReturnType< $hyoo_crus_land_rights['land'] >
	>
	type $mol_view__event_apxu_samosbor_map_block_card_111 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxu_samosbor_map_block_card['left_flight_click'] > ): ReturnType< $apxu_samosbor_map_block_card['left_flight_click'] >,
		}) 
		,
		ReturnType< $mol_view['event'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_112 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__event_apxu_samosbor_map_block_card_113 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxu_samosbor_map_block_card['middle_flight_click'] > ): ReturnType< $apxu_samosbor_map_block_card['middle_flight_click'] >,
		}) 
		,
		ReturnType< $mol_view['event'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_114 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__event_apxu_samosbor_map_block_card_115 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $apxu_samosbor_map_block_card['right_flight_click'] > ): ReturnType< $apxu_samosbor_map_block_card['right_flight_click'] >,
		}) 
		,
		ReturnType< $mol_view['event'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_116 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $apxu_samosbor_map_block_card_place__floors_apxu_samosbor_map_block_card_117 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['place_floors'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_place['floors'] >
	>
	type $apxu_samosbor_map_block_card_place__icon_apxu_samosbor_map_block_card_118 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['place_icon'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_place['icon'] >
	>
	type $apxu_samosbor_map_block_card_place__enabled_apxu_samosbor_map_block_card_119 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['edit_mode'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_place['enabled'] >
	>
	type $apxu_samosbor_map_block_card_place__add_floor_apxu_samosbor_map_block_card_120 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['add_place'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_place['add_floor'] >
	>
	type $apxu_samosbor_map_block_card_place__remove_floor_apxu_samosbor_map_block_card_121 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['remove_place'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_place['remove_floor'] >
	>
	type $apxu_samosbor_map_block_card_place__block_apxu_samosbor_map_block_card_122 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['block'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_place['block'] >
	>
	type $apxu_samosbor_map_block_card_place__floors_apxu_samosbor_map_block_card_123 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['profession_floors'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_place['floors'] >
	>
	type $apxu_samosbor_map_block_card_place__icon_apxu_samosbor_map_block_card_124 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['place_icon'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_place['icon'] >
	>
	type $apxu_samosbor_map_block_card_place__enabled_apxu_samosbor_map_block_card_125 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['edit_mode'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_place['enabled'] >
	>
	type $apxu_samosbor_map_block_card_place__add_floor_apxu_samosbor_map_block_card_126 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['add_profession'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_place['add_floor'] >
	>
	type $apxu_samosbor_map_block_card_place__remove_floor_apxu_samosbor_map_block_card_127 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['remove_floor'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_place['remove_floor'] >
	>
	type $apxu_samosbor_map_block_card_place__block_apxu_samosbor_map_block_card_128 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_block_card['block'] >
		,
		ReturnType< $apxu_samosbor_map_block_card_place['block'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_129 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_130 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_apxu_samosbor_map_block_card_131 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $apxu_samosbor_map_block_card extends $mol_view {
		pan( next?: ReturnType< ReturnType< $apxu_samosbor_map_block_card['mover'] >['pan'] > ): ReturnType< ReturnType< $apxu_samosbor_map_block_card['mover'] >['pan'] >
		mover( ): $apxu_samosbor_map_block_card_touch
		position_style( ): string
		board_floor_value( next?: ReturnType< ReturnType< $apxu_samosbor_map_block_card['block'] >['board_floor_value'] > ): ReturnType< ReturnType< $apxu_samosbor_map_block_card['block'] >['board_floor_value'] >
		mail_floor_value( next?: ReturnType< ReturnType< $apxu_samosbor_map_block_card['block'] >['mail_floor_value'] > ): ReturnType< ReturnType< $apxu_samosbor_map_block_card['block'] >['mail_floor_value'] >
		roof_floor_value( next?: ReturnType< ReturnType< $apxu_samosbor_map_block_card['block'] >['roof_floor_value'] > ): ReturnType< ReturnType< $apxu_samosbor_map_block_card['block'] >['roof_floor_value'] >
		flood_floor_value( next?: ReturnType< ReturnType< $apxu_samosbor_map_block_card['block'] >['flood_floor_value'] > ): ReturnType< ReturnType< $apxu_samosbor_map_block_card['block'] >['flood_floor_value'] >
		stairs_icon( id: any): $apxu_samosbor_map_icon_stairs
		elevator_icon( id: any): $apxu_samosbor_map_icon_elevator
		ladder_icon( id: any): $apxu_samosbor_map_icon_ladder
		left_flight_click( next?: any ): any
		left_flight_arrow( ): $apxu_samosbor_map_icon_arrow_left
		left_flight_icons( ): readonly(any)[]
		middle_flight_click( next?: any ): any
		middle_stairs_icon( ): $apxu_samosbor_map_icon_stairs
		middle_flight_icons( ): readonly(any)[]
		right_flight_click( next?: any ): any
		right_flight_icons( ): readonly(any)[]
		right_flight_arrow( ): $apxu_samosbor_map_icon_arrow_right
		board_icon( ): $apxu_samosbor_map_icon_board
		mail_icon( ): $apxu_samosbor_map_icon_mail
		roof_icon( ): $apxu_samosbor_map_icon_roof
		flood_icon( ): $apxu_samosbor_map_icon_sinking
		floor_value( id: any, next?: number ): number
		floor_icon( id: any): $mol_icon
		floor_simple( id: any): $apxu_samosbor_map_block_card_floor
		icon_theatre( ): $apxu_samosbor_map_icon_theatre
		icon_hospital( ): $apxu_samosbor_map_icon_hospital
		icon_party( ): $apxu_samosbor_map_icon_party
		icon_gym( ): $apxu_samosbor_map_icon_gym
		icon_overview( ): $apxu_samosbor_map_icon_overview
		icon_racing( ): $apxu_samosbor_map_icon_racing
		icon_hockey( ): $apxu_samosbor_map_icon_hockey
		icon_spleef( ): $apxu_samosbor_map_icon_spleef
		icon_pool( ): $apxu_samosbor_map_icon_pool
		icon_warehouse( ): $apxu_samosbor_map_icon_warehouse
		icon_postal( ): $apxu_samosbor_map_icon_postal
		icon_laundry( ): $apxu_samosbor_map_icon_laundry
		icon_shower( ): $apxu_samosbor_map_icon_shower
		icon_toilet( ): $apxu_samosbor_map_icon_toilet
		icon_gallery( ): $apxu_samosbor_map_icon_gallery
		icon_liquidator( ): $apxu_samosbor_map_icon_liquidator
		icon_repairman( ): $apxu_samosbor_map_icon_repairman
		icon_cleaner( ): $apxu_samosbor_map_icon_cleaner
		icon_plumber( ): $apxu_samosbor_map_icon_factory
		place_floors( id: any): readonly(any)[]
		place_icon( id: any): $mol_icon
		add_place( id: any, next?: any ): any
		remove_place( id: any): any
		profession_floors( id: any): readonly(any)[]
		add_profession( id: any, next?: any ): any
		remove_floor( id: any): any
		max_floor_icon( ): $apxu_samosbor_map_icon_max_floor
		max_floor( next?: number ): number
		max_floor_value( ): $apxu_samosbor_map_block_card_number_input
		max_floor_view( ): $mol_view
		min_floor_icon( ): $apxu_samosbor_map_icon_min_floor
		min_floor( next?: number ): number
		min_floor_value( ): $apxu_samosbor_map_block_card_number_input
		min_floor_view( ): $mol_view
		flight_left_icon( ): $mol_icon_chevron_left
		change_flight_click( next?: any ): any
		flight_left_button( ): $apxu_samosbor_map_block_card_flight_button
		is_middle_flight( next?: boolean ): boolean
		current_flight( ): readonly(any)[]
		flight_view( ): $mol_view
		flight_right_icon( ): $mol_icon_chevron_right
		flight_right_button( ): $apxu_samosbor_map_block_card_flight_button
		gen_floor( next?: number ): number
		gen_icon( ): $apxu_samosbor_map_icon_generator
		gen( ): $apxu_samosbor_map_block_card_floor
		gen_floor_view( ): $mol_view
		shop_icon( ): $apxu_samosbor_map_icon_shop
		shop_button( ): $mol_button_minor
		misc_buttons( ): $mol_view
		close_icon( ): $mol_icon_close
		close_click( next?: any ): any
		close_button( ): $mol_button_minor
		edit_icon( ): $mol_icon_pencil
		edit_button( ): $mol_check_icon
		edit_button_visible( ): readonly(any)[]
		delete_block( next?: any ): any
		delete_icon( ): $mol_icon_trash_can_outline
		delete_button( ): $mol_button_minor
		delete_button_visible( ): readonly(any)[]
		control_buttons( ): $mol_view
		block_name( next?: string ): string
		block_name_input( ): $mol_string
		name_size( ): $mol_view
		block_info( ): $mol_view
		copy_icon( ): $mol_icon_content_copy
		block_link( ): string
		copy_button( ): $mol_button_copy
		path_icon( ): $mol_icon_map_marker_path
		path_click( next?: any ): any
		path_button( ): $mol_button_major
		block_buttons( ): $mol_view
		header( ): $mol_view
		pos_x( next?: number ): number
		pos_x_input( ): $apxu_samosbor_map_block_card_position_input
		pos_x_view( ): $mol_view
		pos_y( next?: number ): number
		pos_y_input( ): $apxu_samosbor_map_block_card_position_input
		pos_y_view( ): $mol_view
		block_layer( next?: number ): number
		pos_z_input( ): $apxu_samosbor_map_block_card_position_input
		pos_z_view( ): $mol_view
		coordinates( ): $mol_view
		up_icon( ): $apxu_samosbor_map_icon_arrow_up
		move_click( id: any, next?: any ): any
		up_button( ): $mol_button_minor
		right_icon( ): $apxu_samosbor_map_icon_arrow_right
		right_button( ): $mol_button_minor
		down_icon( ): $apxu_samosbor_map_icon_arrow_down
		down_button( ): $mol_button_minor
		left_icon( ): $apxu_samosbor_map_icon_arrow_left
		left_button( ): $mol_button_minor
		rotate_click( next?: any ): any
		rotation( ): string
		rotation_icon( ): $apxu_samosbor_map_icon_direction
		rotate_button( ): $mol_button_minor
		pos_controller( ): $mol_view
		double_floor_icon( ): $apxu_samosbor_map_icon_double_floor
		is_doubled_floor( next?: boolean ): boolean
		double_floor_checkbox( ): $mol_check_box
		double_floor( ): $mol_view
		pipe_block_icon( ): $apxu_samosbor_map_icon_pipe
		is_pipe_block( next?: boolean ): boolean
		pipe_block_checkbox( ): $mol_check_box
		pipe_block( ): $mol_view
		checkboxes( ): $mol_view
		position_info( ): $mol_view
		block_type_value( next?: string ): string
		current_type_select_icon( ): any
		block_type_select( ): $mol_select
		block_type_view( ): $mol_view
		has_balcony( next?: boolean ): boolean
		balcony_icon( ): $apxu_samosbor_map_icon_balcony
		balcony_checkbox( ): $mol_check_box
		balcony_view( ): readonly(any)[]
		effects_info( ): $mol_view
		effects_info_visible( ): readonly(any)[]
		profession_places( ): readonly(any)[]
		professions( ): $mol_view
		professions_visible( ): readonly(any)[]
		safe_floors( ): readonly(any)[]
		house_icon( ): $apxu_samosbor_map_icon_house
		safes( ): $apxu_samosbor_map_block_card_place
		important_places( ): readonly(any)[]
		places( ): $mol_view
		places_visible( ): readonly(any)[]
		other_places( ): readonly(any)[]
		features( ): $mol_view
		features_visible( ): readonly(any)[]
		content( ): $mol_view
		block_land( ): $hyoo_crus_land
		rights( ): $hyoo_crus_land_rights
		rights_visible( ): readonly(any)[]
		plugins( ): readonly(any)[]
		style( ): ({ 
			'translate': ReturnType< $apxu_samosbor_map_block_card['position_style'] >,
		}) 
		block( ): $apxu_samosbor_map_block
		edit_mode( next?: boolean ): boolean
		gigacluster( ): $apxu_samosbor_map_gigacluster
		is_admin( next?: boolean ): boolean
		is_editor( next?: boolean ): boolean
		flight_icons( id: any): ({ 
			'stairs': ReturnType< $apxu_samosbor_map_block_card['stairs_icon'] >,
			'elevator': ReturnType< $apxu_samosbor_map_block_card['elevator_icon'] >,
			'ladder_icon': ReturnType< $apxu_samosbor_map_block_card['ladder_icon'] >,
		}) 
		block_direction( next?: string ): string
		left_flight_view( ): $mol_view
		middle_flight_view( ): $mol_view
		right_flight_view( ): $mol_view
		type_select_icon( ): $mol_icon_triangle_down
		some_floor( ): ({ 
			'board': ({ 
				'icon': ReturnType< $apxu_samosbor_map_block_card['board_icon'] >,
				value( next?: ReturnType< $apxu_samosbor_map_block_card['board_floor_value'] > ): ReturnType< $apxu_samosbor_map_block_card['board_floor_value'] >,
			}) ,
			'mail': ({ 
				'icon': ReturnType< $apxu_samosbor_map_block_card['mail_icon'] >,
				value( next?: ReturnType< $apxu_samosbor_map_block_card['mail_floor_value'] > ): ReturnType< $apxu_samosbor_map_block_card['mail_floor_value'] >,
			}) ,
			'roof': ({ 
				'icon': ReturnType< $apxu_samosbor_map_block_card['roof_icon'] >,
				value( next?: ReturnType< $apxu_samosbor_map_block_card['roof_floor_value'] > ): ReturnType< $apxu_samosbor_map_block_card['roof_floor_value'] >,
			}) ,
			'flood': ({ 
				'icon': ReturnType< $apxu_samosbor_map_block_card['flood_icon'] >,
				value( next?: ReturnType< $apxu_samosbor_map_block_card['flood_floor_value'] > ): ReturnType< $apxu_samosbor_map_block_card['flood_floor_value'] >,
			}) ,
		}) 
		floor_view( id: any): $apxu_samosbor_map_block_card_floor | null
		place_icons( ): ({ 
			'theatre': ReturnType< $apxu_samosbor_map_block_card['icon_theatre'] >,
			'hospital': ReturnType< $apxu_samosbor_map_block_card['icon_hospital'] >,
			'party': ReturnType< $apxu_samosbor_map_block_card['icon_party'] >,
			'gym': ReturnType< $apxu_samosbor_map_block_card['icon_gym'] >,
			'overview': ReturnType< $apxu_samosbor_map_block_card['icon_overview'] >,
			'racing': ReturnType< $apxu_samosbor_map_block_card['icon_racing'] >,
			'hockey': ReturnType< $apxu_samosbor_map_block_card['icon_hockey'] >,
			'spleef': ReturnType< $apxu_samosbor_map_block_card['icon_spleef'] >,
			'pool': ReturnType< $apxu_samosbor_map_block_card['icon_pool'] >,
			'warehouse': ReturnType< $apxu_samosbor_map_block_card['icon_warehouse'] >,
			'postal': ReturnType< $apxu_samosbor_map_block_card['icon_postal'] >,
			'laundry': ReturnType< $apxu_samosbor_map_block_card['icon_laundry'] >,
			'shower': ReturnType< $apxu_samosbor_map_block_card['icon_shower'] >,
			'toilet': ReturnType< $apxu_samosbor_map_block_card['icon_toilet'] >,
			'gallery': ReturnType< $apxu_samosbor_map_block_card['icon_gallery'] >,
			'liquidator': ReturnType< $apxu_samosbor_map_block_card['icon_liquidator'] >,
			'repairman': ReturnType< $apxu_samosbor_map_block_card['icon_repairman'] >,
			'cleaner': ReturnType< $apxu_samosbor_map_block_card['icon_cleaner'] >,
			'plumber': ReturnType< $apxu_samosbor_map_block_card['icon_plumber'] >,
		}) 
		place_floor( id: any): $apxu_samosbor_map_block_card_place
		profession_floor( id: any): $apxu_samosbor_map_block_card_place
		block_size( ): $mol_view
		flights( ): $mol_view
		floors_info( ): $mol_view
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=card.view.tree.d.ts.map
declare namespace $.$$ {
    class $apxu_samosbor_map_block_card_touch extends $.$apxu_samosbor_map_block_card_touch {
        event_coords(event: PointerEvent | WheelEvent): $mol_vector_2d<number>;
        event_move(event: PointerEvent): void;
    }
    class $apxu_samosbor_map_block_card_place extends $.$apxu_samosbor_map_block_card_place {
        floors_list(): readonly (any)[];
        floor_value(node: ProfessionData, next?: number): number;
        floor_string(node: ProfessionData, next?: string): string;
        unfocus(node: ProfessionData, e: any): any;
    }
    class $apxu_samosbor_map_block_card extends $.$apxu_samosbor_map_block_card {
        delete_block(next?: any): void;
        edit_button_visible(): $mol_check_icon[];
        delete_button_visible(): $mol_button_minor[];
        block_land(): $hyoo_crus_land;
        rights_visible(): readonly (any)[];
        position_style(): string;
        left_flight_icons(): readonly (any)[];
        left_flight_click(): void;
        right_flight_icons(): readonly (any)[];
        middle_flight_icons(): readonly (any)[];
        right_flight_click(): void;
        middle_flight_click(): void;
        is_middle_flight(next?: boolean): boolean;
        change_flight_click(): void;
        current_flight(): readonly (any)[];
        profession_floors(what: string): readonly any[];
        add_profession(what: typeof ProfessionType.options[number], event?: any): void;
        remove_floor(node: ProfessionData): void;
        safe_floors(): readonly any[];
        place_floors(what: string): readonly any[];
        add_place(what: typeof PlaceType.options[number], event?: any): PlaceData | undefined;
        remove_place(node: PlaceData): void;
        rotation(): string;
        rotate_click(event: any): void;
        move_click(dir: DirectionType, event?: any): void;
        current_type_select_icon(): $mol_icon_triangle_down | null;
        gen_floor(next?: number): number;
        floor_value(what: keyof ReturnType<typeof this.some_floor>, next?: number): number;
        floor_icon(what: keyof ReturnType<typeof this.some_floor>): $mol_icon;
        floor_view(what: any): $apxu_samosbor_map_block_card_floor | null;
        balcony_view(): ($mol_check_box | null)[];
        place_icon(id: typeof PlaceType.options[number]): $apxu_samosbor_map_icon_theatre | $apxu_samosbor_map_icon_hospital | $apxu_samosbor_map_icon_party | $apxu_samosbor_map_icon_gym | $apxu_samosbor_map_icon_laundry | $apxu_samosbor_map_icon_postal | $apxu_samosbor_map_icon_overview | $apxu_samosbor_map_icon_racing | $apxu_samosbor_map_icon_hockey | $apxu_samosbor_map_icon_spleef | $apxu_samosbor_map_icon_pool | $apxu_samosbor_map_icon_warehouse | $apxu_samosbor_map_icon_shower | $apxu_samosbor_map_icon_toilet | $apxu_samosbor_map_icon_gallery;
        block_type_value(next?: typeof BlockType.options[number]): string;
        other_places(): $mol_view[];
        effects_info_visible(): readonly (any)[];
        profession_places(): readonly (any)[];
        professions_visible(): $mol_view[];
        important_places(): readonly (any)[];
        places_visible(): readonly (any)[];
        features_visible(): $mol_view[];
        is_doubled_floor(next?: boolean): boolean;
        is_pipe_block(next?: boolean): boolean;
        by_pipe_visible(id: keyof $apxu_samosbor_map_block_card): any;
        block_link(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    const $apxu_samosbor_map_storage_base: Omit<typeof $hyoo_crus_home, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_home, {
        readonly Maps: (auto?: any) => {
            remote_list(next?: readonly $apxu_samosbor_map[] | undefined): readonly $apxu_samosbor_map[];
            remote_add(item: $apxu_samosbor_map): void;
            make(config: null | number | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxu_samosbor_map;
            remote_make(config: $hyoo_crus_rank_preset): $apxu_samosbor_map;
            local_make(idea?: number): $apxu_samosbor_map;
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
            get $(): $;
            set $(next: $);
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Maps: {
                new (): {
                    remote_list(next?: readonly $apxu_samosbor_map[] | undefined): readonly $apxu_samosbor_map[];
                    remote_add(item: $apxu_samosbor_map): void;
                    make(config: null | number | $hyoo_crus_rank_preset | $hyoo_crus_land): $apxu_samosbor_map;
                    remote_make(config: $hyoo_crus_rank_preset): $apxu_samosbor_map;
                    local_make(idea?: number): $apxu_samosbor_map;
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
                    get $(): $;
                    set $(next: $);
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
    export class $apxu_samosbor_map_storage extends $apxu_samosbor_map_storage_base {
        static global(): $apxu_samosbor_map_storage;
        static active_map(next?: number): number;
        static current(): $apxu_samosbor_map | undefined;
    }
    export {};
}

declare namespace $ {
    let $apxu_samosbor_map_app_storage_ref: string;
    let $apxu_samosbor_map_app_my_public_key: string;
}

declare namespace $ {

	type $mol_view__style_apxu_samosbor_map_app_1 = $mol_type_enforce<
		({ 
			'display': string,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub_apxu_samosbor_map_app_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $hyoo_crus_land_rights__land_apxu_samosbor_map_app_3 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['gigacluster_land'] >
		,
		ReturnType< $hyoo_crus_land_rights['land'] >
	>
	type $mol_string__value_apxu_samosbor_map_app_4 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['pub_key_value'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_button_minor__click_apxu_samosbor_map_app_5 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['add_public_key'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_apxu_samosbor_map_app_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_bar__sub_apxu_samosbor_map_app_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_bar['sub'] >
	>
	type $mol_string__hint_apxu_samosbor_map_app_8 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['lord_ref_value'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_apxu_samosbor_map_app_9 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['lord_description'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_button_copy__text_apxu_samosbor_map_app_10 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['lord_ref_value'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	type $mol_select__value_apxu_samosbor_map_app_11 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['lord_role_value'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary_apxu_samosbor_map_app_12 = $mol_type_enforce<
		({ 
			'no_role': string,
			'cartographer': string,
			'researcher': string,
			'traveler': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_bar__sub_apxu_samosbor_map_app_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_bar['sub'] >
	>
	type $mol_list__rows_apxu_samosbor_map_app_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_expander__label_apxu_samosbor_map_app_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['label'] >
	>
	type $mol_expander__content_apxu_samosbor_map_app_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['content'] >
	>
	type $mol_button_copy__text_apxu_samosbor_map_app_17 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['public_key'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	type $mol_check_box__checked_apxu_samosbor_map_app_18 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['inverted'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__Icon_apxu_samosbor_map_app_19 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['invert_icon'] >
		,
		ReturnType< $mol_check_box['Icon'] >
	>
	type $mol_switch__value_apxu_samosbor_map_app_20 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['control_type'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options_apxu_samosbor_map_app_21 = $mol_type_enforce<
		({ 
			'create': string,
			'connect': string,
			'configure': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_card__sub_apxu_samosbor_map_app_22 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_card['sub'] >
	>
	type $mol_number__value_apxu_samosbor_map_app_23 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['current_layer'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $apxu_samosbor_map_slider__min_value_apxu_samosbor_map_app_24 = $mol_type_enforce<
		number
		,
		ReturnType< $apxu_samosbor_map_slider['min_value'] >
	>
	type $apxu_samosbor_map_slider__max_value_apxu_samosbor_map_app_25 = $mol_type_enforce<
		number
		,
		ReturnType< $apxu_samosbor_map_slider['max_value'] >
	>
	type $apxu_samosbor_map_slider__value_apxu_samosbor_map_app_26 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['current_layer'] >
		,
		ReturnType< $apxu_samosbor_map_slider['value'] >
	>
	type $mol_view__sub_apxu_samosbor_map_app_27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_string__value_apxu_samosbor_map_app_28 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['search_value'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__submit_apxu_samosbor_map_app_29 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['do_search'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_button_minor__sub_apxu_samosbor_map_app_30 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_apxu_samosbor_map_app_31 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['do_search'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_bar__sub_apxu_samosbor_map_app_32 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_bar['sub'] >
	>
	type $mol_labeler__title_apxu_samosbor_map_app_33 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_apxu_samosbor_map_app_34 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_view__sub_apxu_samosbor_map_app_35 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_vector_2d__apxu_samosbor_map_app_36 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $apxu_samosbor_map_area__cur_pan_apxu_samosbor_map_app_37 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['canvas_pos'] >
		,
		ReturnType< $apxu_samosbor_map_area['cur_pan'] >
	>
	type $apxu_samosbor_map_area__cur_zoom_apxu_samosbor_map_app_38 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['canvas_zoom'] >
		,
		ReturnType< $apxu_samosbor_map_area['cur_zoom'] >
	>
	type $apxu_samosbor_map_area__style_apxu_samosbor_map_app_39 = $mol_type_enforce<
		({ 
			'width': string,
			'height': string,
		}) 
		,
		ReturnType< $apxu_samosbor_map_area['style'] >
	>
	type $apxu_samosbor_map_area__items_apxu_samosbor_map_app_40 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $apxu_samosbor_map_area['items'] >
	>
	type $mol_view__sub_apxu_samosbor_map_app_41 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $apxu_samosbor_map_block__block_data_apxu_samosbor_map_app_42 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['block'] >
		,
		ReturnType< $apxu_samosbor_map_block['block_data'] >
	>
	type $apxu_samosbor_map_block__current_layer_apxu_samosbor_map_app_43 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['current_layer'] >
		,
		ReturnType< $apxu_samosbor_map_block['current_layer'] >
	>
	type $apxu_samosbor_map_block__onclick_apxu_samosbor_map_app_44 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['block_clicked'] >
		,
		ReturnType< $apxu_samosbor_map_block['onclick'] >
	>
	type $apxu_samosbor_map_block__on_connection_select_apxu_samosbor_map_app_45 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['connection_selected'] >
		,
		ReturnType< $apxu_samosbor_map_block['on_connection_select'] >
	>
	type $apxu_samosbor_map_block__show_connections_apxu_samosbor_map_app_46 = $mol_type_enforce<
		boolean
		,
		ReturnType< $apxu_samosbor_map_block['show_connections'] >
	>
	type $apxu_samosbor_map_block__create_block_mode_apxu_samosbor_map_app_47 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['is_create_block_mode'] >
		,
		ReturnType< $apxu_samosbor_map_block['create_block_mode'] >
	>
	type $apxu_samosbor_map_block__edit_mode_apxu_samosbor_map_app_48 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['is_configure_mode'] >
		,
		ReturnType< $apxu_samosbor_map_block['edit_mode'] >
	>
	type $apxu_samosbor_map_block__selected_apxu_samosbor_map_app_49 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['block_selected'] >
		,
		ReturnType< $apxu_samosbor_map_block['selected'] >
	>
	type $apxu_samosbor_map_block__connect_mode_apxu_samosbor_map_app_50 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['is_connect_mode'] >
		,
		ReturnType< $apxu_samosbor_map_block['connect_mode'] >
	>
	type $apxu_samosbor_map_block__inverted_apxu_samosbor_map_app_51 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['inverted'] >
		,
		ReturnType< $apxu_samosbor_map_block['inverted'] >
	>
	type $apxu_samosbor_map_block__gigacluster_apxu_samosbor_map_app_52 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['gigacluster'] >
		,
		ReturnType< $apxu_samosbor_map_block['gigacluster'] >
	>
	type $apxu_samosbor_map_block_card__block_name_apxu_samosbor_map_app_53 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['selected_block_name'] >
		,
		ReturnType< $apxu_samosbor_map_block_card['block_name'] >
	>
	type $apxu_samosbor_map_block_card__max_floor_apxu_samosbor_map_app_54 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['max_floor'] >
		,
		ReturnType< $apxu_samosbor_map_block_card['max_floor'] >
	>
	type $apxu_samosbor_map_block_card__min_floor_apxu_samosbor_map_app_55 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['min_floor'] >
		,
		ReturnType< $apxu_samosbor_map_block_card['min_floor'] >
	>
	type $apxu_samosbor_map_block_card__close_click_apxu_samosbor_map_app_56 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['close_click'] >
		,
		ReturnType< $apxu_samosbor_map_block_card['close_click'] >
	>
	type $apxu_samosbor_map_block_card__pos_x_apxu_samosbor_map_app_57 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['pos_x_value'] >
		,
		ReturnType< $apxu_samosbor_map_block_card['pos_x'] >
	>
	type $apxu_samosbor_map_block_card__pos_y_apxu_samosbor_map_app_58 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['pos_y_value'] >
		,
		ReturnType< $apxu_samosbor_map_block_card['pos_y'] >
	>
	type $apxu_samosbor_map_block_card__block_layer_apxu_samosbor_map_app_59 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['layer_value'] >
		,
		ReturnType< $apxu_samosbor_map_block_card['block_layer'] >
	>
	type $apxu_samosbor_map_block_card__block_apxu_samosbor_map_app_60 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['Block'] >
		,
		ReturnType< $apxu_samosbor_map_block_card['block'] >
	>
	type $apxu_samosbor_map_block_card__is_admin_apxu_samosbor_map_app_61 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['is_admin'] >
		,
		ReturnType< $apxu_samosbor_map_block_card['is_admin'] >
	>
	type $apxu_samosbor_map_block_card__is_editor_apxu_samosbor_map_app_62 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['is_editor'] >
		,
		ReturnType< $apxu_samosbor_map_block_card['is_editor'] >
	>
	type $apxu_samosbor_map_block_card__gigacluster_apxu_samosbor_map_app_63 = $mol_type_enforce<
		ReturnType< $apxu_samosbor_map_app['gigacluster'] >
		,
		ReturnType< $apxu_samosbor_map_block_card['gigacluster'] >
	>
	type $mol_view__attr_apxu_samosbor_map_app_64 = $mol_type_enforce<
		({ 
			'direction': ReturnType< $apxu_samosbor_map_app['transition_direction'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__style_apxu_samosbor_map_app_65 = $mol_type_enforce<
		({ 
			'left': ReturnType< $apxu_samosbor_map_app['transition_left'] >,
			'top': ReturnType< $apxu_samosbor_map_app['transition_top'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $apxu_samosbor_map_app extends $mol_view {
		block( id: any): any
		current_layer( next?: number ): number
		block_clicked( id: any, next?: any ): any
		connection_selected( id: any, next?: any ): any
		is_create_block_mode( ): boolean
		is_configure_mode( ): boolean
		block_selected( id: any): boolean
		is_connect_mode( ): boolean
		gigacluster( ): $apxu_samosbor_map_gigacluster
		selected_block_name( id: any, next?: string ): string
		max_floor( id: any, next?: number ): number
		min_floor( id: any, next?: number ): number
		close_click( id: any, next?: any ): any
		pos_x_value( id: any, next?: number ): number
		pos_y_value( id: any, next?: number ): number
		layer_value( id: any, next?: number ): number
		is_admin( ): boolean
		is_editor( ): boolean
		transition_direction( id: any): string
		transition_left( id: any): number
		transition_top( id: any): number
		concentrated_block( ): any
		trick( ): $mol_view
		gigacluster_land( ): any
		Right( ): $hyoo_crus_land_rights
		pub_key_value( next?: string ): string
		pub_key_string( ): $mol_string
		add_public_key( next?: any ): any
		sumbit_icon( ): $mol_icon_plus
		submit_key( ): $mol_button_minor
		key_input( ): $mol_bar
		lord_ref_value( id: any): string
		lord_description( id: any, next?: string ): string
		lord_name( id: any): $mol_string
		lord_ref_copy( id: any): $mol_button_copy
		lord_role_value( id: any, next?: string ): string
		role_select( id: any): $mol_select
		LordRole( id: any): $mol_bar
		lord_selects( ): readonly(any)[]
		LordsList( ): $mol_list
		RolesController( ): $mol_expander
		role_controller_visible( ): readonly(any)[]
		public_key( ): string
		PubKey( ): $mol_button_copy
		invert_icon( ): $mol_icon_repeat
		Invert( ): $mol_check_box
		control_type( next?: string ): string
		Control_Switch( ): $mol_switch
		Control_Panel( ): $mol_card
		control_panel_visible( ): readonly(any)[]
		block_cards( ): readonly(any)[]
		Layer_Bar( ): $mol_number
		Layer_Slider( ): $apxu_samosbor_map_slider
		Slider_Container( ): $mol_view
		search_value( next?: string ): string
		do_search( next?: any ): any
		SearchInput( ): $mol_string
		search_icon( ): $mol_icon_selection_search
		SearchSubmit( ): $mol_button_minor
		SearchBar( ): $mol_bar
		SearchLabel( ): $mol_labeler
		Searcher( ): $mol_view
		canvas_pos( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		canvas_zoom( next?: number ): number
		blocks_visible( ): readonly(any)[]
		Area( ): $apxu_samosbor_map_area
		Canvas( ): $mol_view
		title( ): string
		inverted( next?: boolean ): boolean
		Block( id: any): $apxu_samosbor_map_block
		BlockCard( id: any): $apxu_samosbor_map_block_card
		Transition( id: any): $mol_view
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=app.view.tree.d.ts.map
declare namespace $.$$ {
    class $apxu_samosbor_map_app extends $.$apxu_samosbor_map_app {
        current_map(): $apxu_samosbor_map | undefined;
        gigacluster(): $apxu_samosbor_map_gigacluster;
        gigacluster_land(): $hyoo_crus_land;
        is_editor(): boolean;
        role_controller_visible(): readonly (any)[];
        control_panel_visible(): readonly (any)[];
        is_admin(): boolean;
        add_public_key(e?: any): void;
        lord_selects(): $mol_bar[];
        lord_role_value(pub_key: string, next?: typeof $apxu_samosbor_map_role.options[number]): string;
        lord_ref_value(pub_key: string): string;
        lord_description(pub_key: string, next?: string): string;
        public_key(): string;
        selected_block(next?: $.$apxu_samosbor_map_block | null): $.$apxu_samosbor_map_block | null | undefined;
        selected_blocks(next?: symbol[]): symbol[];
        block_selected(ref: symbol): boolean;
        block_clicked(ref: symbol, event: any): void;
        block_cards(): $.$apxu_samosbor_map_block_card[];
        gen_floor(next?: number): number;
        min_floor(ref: symbol, next?: number): number;
        max_floor(ref: symbol, next?: number): number;
        close_click(ref: symbol, event?: any): void;
        layer_value(ref: symbol, next?: number): number;
        pos_x_value(ref: symbol, next?: number): number;
        pos_y_value(ref: symbol, next?: number): number;
        direction_value(next?: DirectionType): string;
        block_type_value(next?: string): string;
        up_flight_value(next?: boolean): boolean;
        delete_block(): void;
        selected_block_name(ref: symbol, next?: string): string;
        static block(ref: any): $apxu_samosbor_map_block_data;
        block(ref: any): $apxu_samosbor_map_block_data;
        transitions(): $mol_view[];
        transition_direction(ref: any): string;
        transition_left(ref: any): number;
        transition_top(ref: any): number;
        static next_direction(dir: DirectionType, next?: number): DirectionType;
        static prev_direction(dir: DirectionType): DirectionType;
        static next_position(pos: TransitionPosition): TransitionPosition;
        show_connections(): boolean;
        control_type(next?: string): string;
        is_create_block_mode(): boolean;
        is_configure_mode(): boolean;
        is_connect_mode(): boolean;
        static getOffset(pos: TransitionPosition, dir: string): {
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
        static absolute_direction(direction: DirectionType, position: TransitionPosition): DirectionType;
        block_view(ref: symbol): $.$apxu_samosbor_map_block;
        blocks(): $.$apxu_samosbor_map_block[];
        blocks_visible(): $.$apxu_samosbor_map_block[];
        current_layer(next?: number): number;
        concentrated_block(): void;
        canvas_pos(next?: $mol_vector_2d<number>): $mol_vector_2d<number>;
        zoom_to_block(block: $apxu_samosbor_map_block_data): void;
        do_search(next?: any): void;
    }
}

declare namespace $ {
}

export = $;
//# sourceMappingURL=node.d.ts.map
