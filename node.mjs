#!/usr/bin/env node
"use strict";
var exports = void 0;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;

;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_promise_like(val) {
        try {
            return val && typeof val === 'object' && 'then' in val && typeof val.then === 'function';
        }
        catch {
            return false;
        }
    }
    $.$mol_promise_like = $mol_promise_like;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const catched = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if ($mol_promise_like(error))
            $mol_fail_hidden(error);
        if (catched.get(error))
            return false;
        catched.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if ($mol_promise_like(error))
            return false;
        if (!$mol_fail_catch(error))
            return false;
        console.error(error);
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));

;
"use strict";
var $node = new Proxy({ require }, {
    get(target, name, wrapper) {
        if (target[name])
            return target[name];
        if (name.startsWith('node:'))
            return target.require(name);
        if (name[0] === '.')
            return target.require(name);
        const mod = target.require('module');
        if (mod.builtinModules.indexOf(name) >= 0)
            return target.require(name);
        try {
            target.require.resolve(name);
        }
        catch {
            const $$ = $;
            $$.$mol_exec('.', 'npm', 'install', '--omit=dev', name);
            try {
                $$.$mol_exec('.', 'npm', 'install', '--omit=dev', '@types/' + name);
            }
            catch (e) {
                if ($$.$mol_fail_catch(e)) {
                    $$.$mol_fail_log(e);
                }
            }
        }
        try {
            return target.require(name);
        }
        catch (error) {
            if ($.$mol_fail_catch(error) && error.code === 'ERR_REQUIRE_ESM') {
                const module = cache.get(name);
                if (module)
                    return module;
                throw import(name).then(module => cache.set(name, module));
            }
            $.$mol_fail_log(error);
            return null;
        }
    },
    set(target, name, value) {
        target[name] = value;
        return true;
    },
});
const cache = new Map();
require = (req => Object.assign(function require(name) {
    return $node[name];
}, req))(require);

;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function cause_serialize(cause) {
        return JSON.stringify(cause, null, '  ')
            .replace(/\(/, '<')
            .replace(/\)/, ' >');
    }
    function frame_normalize(frame) {
        return (typeof frame === 'string' ? frame : cause_serialize(frame))
            .trim()
            .replace(/at /gm, '   at ')
            .replace(/^(?!    +at )(.*)/gm, '    at | $1 (#)');
    }
    class $mol_error_mix extends AggregateError {
        cause;
        name = $$.$mol_func_name(this.constructor).replace(/^\$/, '') + '_Error';
        constructor(message, cause = {}, ...errors) {
            super(errors, message, { cause });
            this.cause = cause;
            const desc = Object.getOwnPropertyDescriptor(this, 'stack');
            const stack_get = () => desc?.get?.() ?? super.stack ?? desc?.value ?? this.message;
            Object.defineProperty(this, 'stack', {
                get: () => stack_get() + '\n' + [
                    this.cause ?? 'no cause',
                    ...this.errors.flatMap(e => [
                        e.stack,
                        ...e instanceof $mol_error_mix || !e.cause ? [] : [e.cause]
                    ])
                ].map(frame_normalize).join('\n')
            });
            Object.defineProperty(this, 'cause', {
                get: () => cause
            });
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            return $$.$mol_func_name(this);
        }
        static make(...params) {
            return new this(...params);
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object' && typeof having !== 'function')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [Symbol.toStringTag];
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            return this[Symbol.toStringTag] || this.$.$mol_func_name(this);
        }
        static toJSON() {
            return this.toString();
        }
        destructor() { }
        static destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '<>';
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_env() {
        return {};
    }
    $.$mol_env = $mol_env;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_env = function $mol_env() {
        return this.process.env;
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.length = end;
            if (end === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        get incompleted() {
            return false;
        }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_wire_auto_sub = null;
    function $mol_wire_auto(next = $.$mol_wire_auto_sub) {
        return $.$mol_wire_auto_sub = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] ||= [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                try {
                    return val[$.$mol_dev_format_head]();
                }
                catch (error) {
                    return $.$mol_dev_format_accent($mol_dev_format_native(val), '💨', $mol_dev_format_native(error), '');
                }
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            if (Symbol.toStringTag in val) {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get temp() {
            return false;
        }
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
            }
            this.data.length = this.sub_from;
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let end = this.data.length;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                end -= 2;
                if (this.sub_from <= end)
                    this.peer_move(end, cursor);
            }
            this.data.length = end;
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                if (pub?.incompleted)
                    return;
            }
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        static promise = null;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            if (!$mol_after_tick.promise)
                $mol_after_tick.promise = Promise.resolve().then(() => {
                    $mol_after_tick.promise = null;
                });
            $mol_after_tick.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const wrappers = new WeakMap();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_tick(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        [Symbol.toStringTag];
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if ($mol_promise_like(this.cache))
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        get incompleted() {
            return $mol_promise_like(this.cache);
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super();
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
            this[Symbol.toStringTag] = id;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
            return this;
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_owning_check(this, this.cache)
                ? $mol_dev_format_auto({
                    [$mol_dev_format_head]: () => $mol_dev_format_shade(cursor),
                    [$mol_dev_format_body]: () => $mol_dev_format_native(this),
                })
                : $mol_dev_format_shade($mol_dev_format_native(this), cursor), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if ($mol_promise_like(result)) {
                    if (wrappers.has(result)) {
                        result = wrappers.get(result).then(a => a);
                    }
                    else {
                        const put = (res) => {
                            if (this.cache === result)
                                this.put(res);
                            return res;
                        };
                        wrappers.set(result, result = Object.assign(result.then(put, put), { destructor: result.destructor || (() => { }) }));
                        wrappers.set(result, result);
                        const error = new Error(`Promise in ${this}`);
                        Object.defineProperty(result, 'stack', { get: () => error.stack });
                    }
                }
            }
            catch (error) {
                if (error instanceof Error || $mol_promise_like(error)) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if ($mol_promise_like(result)) {
                    if (wrappers.has(result)) {
                        result = wrappers.get(result);
                    }
                    else {
                        wrappers.set(result, result = Object.assign(result.finally(() => {
                            if (this.cache === result)
                                this.absorb();
                        }), { destructor: result.destructor || (() => { }) }));
                        const error = new Error(`Promise in ${this}`);
                        Object.defineProperty(result, 'stack', { get: () => error.stack });
                    }
                }
            }
            if (!$mol_promise_like(result)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
            return this;
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if ($mol_promise_like(this.cache)) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async_raw() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                await Promise.race([this.cache, this.step()]);
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
        async() {
            const promise = this.async_raw();
            if (!promise.destructor)
                promise.destructor = () => this.destructor();
            return promise;
        }
        step() {
            return new Promise(done => {
                const sub = new $mol_wire_pub_sub;
                const prev = sub.track_on();
                sub.track_next(this);
                sub.track_off(prev);
                sub.absorb = () => {
                    done(null);
                    setTimeout(() => sub.destructor());
                };
            });
        }
        destructor() {
            super.destructor();
            if (!$mol_owning_check(this, this.cache))
                return;
            try {
                this.cache.destructor();
            }
            catch (result) {
                if ($mol_promise_like(result)) {
                    const error = new Error(`Promise in ${this}.destructor()`);
                    Object.defineProperty(result, 'stack', { get: () => error.stack });
                }
                $mol_fail_hidden(result);
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right.source && left.flags === right.flags;
        if (left instanceof Error)
            return left.message === right.message && left.stack === right.stack;
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap();
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        left_cache.set(right, true);
        let result;
        try {
            if (!left_proto)
                result = compare_pojo(left, right);
            else if (!Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.iterator in left)
                result = compare_iterator(left[Symbol.iterator](), right[Symbol.iterator]());
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        if (left instanceof DataView)
            return compare_buffer(new Uint8Array(left.buffer, left.byteOffset, left.byteLength), new Uint8Array(right.buffer, right.byteOffset, right.byteLength));
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (!compare_array(left_keys, right_keys))
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        const left_syms = Object.getOwnPropertySymbols(left);
        const right_syms = Object.getOwnPropertySymbols(right);
        if (!compare_array(left_syms, right_syms))
            return false;
        for (let key of left_syms) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_span extends $mol_object2 {
        uri;
        source;
        row;
        col;
        length;
        constructor(uri, source, row, col, length) {
            super();
            this.uri = uri;
            this.source = source;
            this.row = row;
            this.col = col;
            this.length = length;
            this[Symbol.toStringTag] = this.uri + ('#' + this.row + ':' + this.col + '/' + this.length);
        }
        static unknown = $mol_span.begin('?');
        static begin(uri, source = '') {
            return new $mol_span(uri, source, 1, 1, 0);
        }
        static end(uri, source) {
            return new $mol_span(uri, source, 1, source.length + 1, 0);
        }
        static entire(uri, source) {
            return new $mol_span(uri, source, 1, 1, source.length);
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return {
                uri: this.uri,
                row: this.row,
                col: this.col,
                length: this.length
            };
        }
        error(message, Class = Error) {
            return new Class(`${message} (${this})`);
        }
        span(row, col, length) {
            return new $mol_span(this.uri, this.source, row, col, length);
        }
        after(length = 0) {
            return new $mol_span(this.uri, this.source, this.row, this.col + this.length, length);
        }
        slice(begin, end = -1) {
            let len = this.length;
            if (begin < 0)
                begin += len;
            if (end < 0)
                end += len;
            if (begin < 0 || begin > len)
                this.$.$mol_fail(this.error(`Begin value '${begin}' out of range`, RangeError));
            if (end < 0 || end > len)
                this.$.$mol_fail(this.error(`End value '${end}' out of range`, RangeError));
            if (end < begin)
                this.$.$mol_fail(this.error(`End value '${end}' can't be less than begin value`, RangeError));
            return this.span(this.row, this.col + begin, end - begin);
        }
    }
    $.$mol_span = $mol_span;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_to_string(tree) {
        let output = [];
        function dump(tree, prefix = '') {
            if (tree.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output.push(tree.type);
                if (tree.kids.length == 1) {
                    output.push(' ');
                    dump(tree.kids[0], prefix);
                    return;
                }
                output.push("\n");
            }
            else if (tree.value.length || prefix.length) {
                output.push("\\" + tree.value + "\n");
            }
            for (const kid of tree.kids) {
                output.push(prefix);
                dump(kid, prefix + "\t");
            }
        }
        dump(tree);
        return output.join('');
    }
    $.$mol_tree2_to_string = $mol_tree2_to_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_tree2 extends Object {
        type;
        value;
        kids;
        span;
        constructor(type, value, kids, span) {
            super();
            this.type = type;
            this.value = value;
            this.kids = kids;
            this.span = span;
            this[Symbol.toStringTag] = type || '\\' + value;
        }
        static list(kids, span = $mol_span.unknown) {
            return new $mol_tree2('', '', kids, span);
        }
        list(kids) {
            return $mol_tree2.list(kids, this.span);
        }
        static data(value, kids = [], span = $mol_span.unknown) {
            const chunks = value.split('\n');
            if (chunks.length > 1) {
                let kid_span = span.span(span.row, span.col, 0);
                const data = chunks.map(chunk => {
                    kid_span = kid_span.after(chunk.length);
                    return new $mol_tree2('', chunk, [], kid_span);
                });
                kids = [...data, ...kids];
                value = '';
            }
            return new $mol_tree2('', value, kids, span);
        }
        data(value, kids = []) {
            return $mol_tree2.data(value, kids, this.span);
        }
        static struct(type, kids = [], span = $mol_span.unknown) {
            if (/[ \n\t\\]/.test(type)) {
                $$.$mol_fail(span.error(`Wrong type ${JSON.stringify(type)}`));
            }
            return new $mol_tree2(type, '', kids, span);
        }
        struct(type, kids = []) {
            return $mol_tree2.struct(type, kids, this.span);
        }
        clone(kids, span = this.span) {
            return new $mol_tree2(this.type, this.value, kids, span);
        }
        text() {
            var values = [];
            for (var kid of this.kids) {
                if (kid.type)
                    continue;
                values.push(kid.value);
            }
            return this.value + values.join('\n');
        }
        static fromString(str, uri = 'unknown') {
            return $$.$mol_tree2_from_string(str, uri);
        }
        toString() {
            return $$.$mol_tree2_to_string(this);
        }
        insert(value, ...path) {
            return this.update($mol_maybe(value), ...path)[0];
        }
        update(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.kids.flatMap((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.update(value, ...path.slice(1));
                }).filter(Boolean);
                if (!replaced && value) {
                    sub.push(...this.struct(type, []).update(value, ...path.slice(1)));
                }
                return [this.clone(sub)];
            }
            else if (typeof type === 'number') {
                const ins = (this.kids[type] || this.list([]))
                    .update(value, ...path.slice(1));
                return [this.clone([
                        ...this.kids.slice(0, type),
                        ...ins,
                        ...this.kids.slice(type + 1),
                    ])];
            }
            else {
                const kids = ((this.kids.length === 0) ? [this.list([])] : this.kids)
                    .flatMap(item => item.update(value, ...path.slice(1)));
                return [this.clone(kids)];
            }
        }
        select(...path) {
            let next = [this];
            for (const type of path) {
                if (!next.length)
                    break;
                const prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.kids) {
                                if (child.type == type) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.kids.length)
                                next.push(item.kids[type]);
                            break;
                        default: next.push(...item.kids);
                    }
                }
            }
            return this.list(next);
        }
        filter(path, value) {
            const sub = this.kids.filter(item => {
                var found = item.select(...path);
                if (value === undefined) {
                    return Boolean(found.kids.length);
                }
                else {
                    return found.kids.some(child => child.value == value);
                }
            });
            return this.clone(sub);
        }
        hack_self(belt, context = {}) {
            let handle = belt[this.type] || belt[''];
            if (!handle || handle === Object.prototype[this.type]) {
                handle = (input, belt, context) => [
                    input.clone(input.hack(belt, context), context.span)
                ];
            }
            try {
                return handle(this, belt, context);
            }
            catch (error) {
                error.message += `\n${this.clone([])}${this.span}`;
                $mol_fail_hidden(error);
            }
        }
        hack(belt, context = {}) {
            return [].concat(...this.kids.map(child => child.hack_self(belt, context)));
        }
        error(message, Class = Error) {
            return this.span.error(`${message}\n${this.clone([])}`, Class);
        }
    }
    $.$mol_tree2 = $mol_tree2;
    class $mol_tree2_empty extends $mol_tree2 {
        constructor() {
            super('', '', [], $mol_span.unknown);
        }
    }
    $.$mol_tree2_empty = $mol_tree2_empty;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_error_syntax extends SyntaxError {
        reason;
        line;
        span;
        constructor(reason, line, span) {
            super(`${reason}\n${span}\n${line.substring(0, span.col - 1).replace(/\S/g, ' ')}${''.padEnd(span.length, '!')}\n${line}`);
            this.reason = reason;
            this.line = line;
            this.span = span;
        }
    }
    $.$mol_error_syntax = $mol_error_syntax;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_string(str, uri = '?') {
        const span = $mol_span.entire(uri, str);
        var root = $mol_tree2.list([], span);
        var stack = [root];
        var pos = 0, row = 0, min_indent = 0;
        while (str.length > pos) {
            var indent = 0;
            var line_start = pos;
            row++;
            while (str.length > pos && str[pos] == '\t') {
                indent++;
                pos++;
            }
            if (!root.kids.length) {
                min_indent = indent;
            }
            indent -= min_indent;
            if (indent < 0 || indent >= stack.length) {
                const sp = span.span(row, 1, pos - line_start);
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                if (indent < 0) {
                    if (str.length > pos) {
                        this.$mol_fail(new this.$mol_error_syntax(`Too few tabs`, str.substring(line_start, pos), sp));
                    }
                }
                else {
                    this.$mol_fail(new this.$mol_error_syntax(`Too many tabs`, str.substring(line_start, pos), sp));
                }
            }
            stack.length = indent + 1;
            var parent = stack[indent];
            while (str.length > pos && str[pos] != '\\' && str[pos] != '\n') {
                var error_start = pos;
                while (str.length > pos && (str[pos] == ' ' || str[pos] == '\t')) {
                    pos++;
                }
                if (pos > error_start) {
                    let line_end = str.indexOf('\n', pos);
                    if (line_end === -1)
                        line_end = str.length;
                    const sp = span.span(row, error_start - line_start + 1, pos - error_start);
                    this.$mol_fail(new this.$mol_error_syntax(`Wrong nodes separator`, str.substring(line_start, line_end), sp));
                }
                var type_start = pos;
                while (str.length > pos &&
                    str[pos] != '\\' &&
                    str[pos] != ' ' &&
                    str[pos] != '\t' &&
                    str[pos] != '\n') {
                    pos++;
                }
                if (pos > type_start) {
                    let next = new $mol_tree2(str.slice(type_start, pos), '', [], span.span(row, type_start - line_start + 1, pos - type_start));
                    const parent_kids = parent.kids;
                    parent_kids.push(next);
                    parent = next;
                }
                if (str.length > pos && str[pos] == ' ') {
                    pos++;
                }
            }
            if (str.length > pos && str[pos] == '\\') {
                var data_start = pos;
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                let next = new $mol_tree2('', str.slice(data_start + 1, pos), [], span.span(row, data_start - line_start + 2, pos - data_start - 1));
                const parent_kids = parent.kids;
                parent_kids.push(next);
                parent = next;
            }
            if (str.length === pos && stack.length > 0) {
                const sp = span.span(row, pos - line_start + 1, 1);
                this.$mol_fail(new this.$mol_error_syntax(`Unexpected EOF, LF required`, str.substring(line_start, str.length), sp));
            }
            stack.push(parent);
            pos++;
        }
        return root;
    }
    $.$mol_tree2_from_string = $mol_tree2_from_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_json(json, span = $mol_span.unknown) {
        if (typeof json === 'boolean' || typeof json === 'number' || json === null) {
            return new $mol_tree2(String(json), '', [], span);
        }
        if (typeof json === 'string') {
            return $mol_tree2.data(json, [], span);
        }
        if (typeof json.toJSON === 'function') {
            return $mol_tree2_from_json(json.toJSON());
        }
        if (Array.isArray(json)) {
            const sub = json.map(json => $mol_tree2_from_json(json, span));
            return new $mol_tree2('/', '', sub, span);
        }
        if (ArrayBuffer.isView(json)) {
            const buf = new Uint8Array(json.buffer, json.byteOffset, json.byteLength);
            return $mol_tree2.data(String.fromCharCode(...buf), [], span);
        }
        if (json instanceof Date) {
            return new $mol_tree2('', json.toISOString(), [], span);
        }
        if (json.toString !== Object.prototype.toString) {
            return $mol_tree2.data(json.toString(), [], span);
        }
        if (json instanceof Error) {
            const { name, message, stack } = json;
            json = { ...json, name, message, stack };
        }
        const sub = [];
        for (var key in json) {
            const val = json[key];
            if (val === undefined)
                continue;
            const subsub = $mol_tree2_from_json(val, span);
            if (/^[^\n\t\\ ]+$/.test(key)) {
                sub.push(new $mol_tree2(key, '', [subsub], span));
            }
            else {
                sub.push($mol_tree2.data(key, [subsub], span));
            }
        }
        return new $mol_tree2('*', '', sub, span);
    }
    $.$mol_tree2_from_json = $mol_tree2_from_json;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_term_color {
        static reset = this.ansi(0, 0);
        static bold = this.ansi(1, 22);
        static italic = this.ansi(3, 23);
        static underline = this.ansi(4, 24);
        static inverse = this.ansi(7, 27);
        static hidden = this.ansi(8, 28);
        static strike = this.ansi(9, 29);
        static gray = this.ansi(90, 39);
        static red = this.ansi(91, 39);
        static green = this.ansi(92, 39);
        static yellow = this.ansi(93, 39);
        static blue = this.ansi(94, 39);
        static magenta = this.ansi(95, 39);
        static cyan = this.ansi(96, 39);
        static Gray = (str) => this.inverse(this.gray(str));
        static Red = (str) => this.inverse(this.red(str));
        static Green = (str) => this.inverse(this.green(str));
        static Yellow = (str) => this.inverse(this.yellow(str));
        static Blue = (str) => this.inverse(this.blue(str));
        static Magenta = (str) => this.inverse(this.magenta(str));
        static Cyan = (str) => this.inverse(this.cyan(str));
        static ansi(open, close) {
            if (typeof process === 'undefined')
                return String;
            if (!process.stdout.isTTY)
                return String;
            const prefix = `\x1b[${open}m`;
            const postfix = `\x1b[${close}m`;
            const suffix_regexp = new RegExp(postfix.replace('[', '\\['), 'g');
            return function colorer(str) {
                str = String(str);
                if (str === '')
                    return str;
                const suffix = str.replace(suffix_regexp, prefix);
                return prefix + suffix + postfix;
            };
        }
    }
    $.$mol_term_color = $mol_term_color;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_log3_node_make(level, output, type, color) {
        return function $mol_log3_logger(event) {
            if (!event.time)
                event = { time: new Date().toISOString(), ...event };
            let tree = this.$mol_tree2_from_json(event);
            tree = tree.struct(type, tree.kids);
            let str = color(tree.toString());
            this.console[level](str);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_node_make = $mol_log3_node_make;
    $.$mol_log3_come = $mol_log3_node_make('info', 'stdout', 'come', $mol_term_color.blue);
    $.$mol_log3_done = $mol_log3_node_make('info', 'stdout', 'done', $mol_term_color.green);
    $.$mol_log3_fail = $mol_log3_node_make('error', 'stderr', 'fail', $mol_term_color.red);
    $.$mol_log3_warn = $mol_log3_node_make('warn', 'stderr', 'warn', $mol_term_color.yellow);
    $.$mol_log3_rise = $mol_log3_node_make('log', 'stdout', 'rise', $mol_term_color.magenta);
    $.$mol_log3_area = $mol_log3_node_make('log', 'stdout', 'area', $mol_term_color.cyan);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                reuse: if (existen) {
                    if (!existen.temp)
                        break reuse;
                    if (existen.host !== host)
                        break reuse;
                    if (existen.task !== task)
                        break reuse;
                    if (!$mol_compare_deep(existen.args, args))
                        break reuse;
                    return existen;
                }
                const key = (host?.[Symbol.toStringTag] ?? host) + ('.' + task.name + '<#>');
                const next = new $mol_wire_task(key, task, host, args);
                if (existen?.temp) {
                    $$.$mol_log3_warn({
                        place: '$mol_wire_task',
                        message: `Non idempotency`,
                        sub,
                        pubs: [...sub?.pub_list ?? [], existen],
                        next,
                        hint: 'Ignore it',
                    });
                }
                return next;
            };
        }
        get temp() {
            return true;
        }
        complete() {
            if ($mol_promise_like(this.cache))
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if ($mol_promise_like(next)) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const factories = new WeakMap();
    function factory(val) {
        let make = factories.get(val);
        if (make)
            return make;
        make = $mol_func_name_from((...args) => new val(...args), val);
        factories.set(val, make);
        return make;
    }
    const getters = new WeakMap();
    function get_prop(host, field) {
        let props = getters.get(host);
        let get_val = props?.[field];
        if (get_val)
            return get_val;
        get_val = (next) => {
            if (next !== undefined)
                host[field] = next;
            return host[field];
        };
        Object.defineProperty(get_val, 'name', { value: field });
        if (!props) {
            props = {};
            getters.set(host, props);
        }
        props[field] = get_val;
        return get_val;
    }
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                let val = obj[field];
                const temp = $mol_wire_task.getter(typeof val === 'function' ? val : get_prop(obj, field));
                if (typeof val !== 'function')
                    return temp(obj, []).sync();
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            set(obj, field, next) {
                const temp = $mol_wire_task.getter(get_prop(obj, field));
                temp(obj, [next]).sync();
                return true;
            },
            construct(obj, args) {
                const temp = $mol_wire_task.getter(factory(obj));
                return temp(obj, args).sync();
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                return temp(self, args).sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_run_error extends $mol_error_mix {
    }
    $.$mol_run_error = $mol_run_error;
    $.$mol_run_spawn = (...args) => $node['child_process'].spawn(...args);
    $.$mol_run_spawn_sync = (...args) => $node['child_process'].spawnSync(...args);
    class $mol_run extends $mol_object {
        static async_enabled() {
            return Boolean(this.$.$mol_env()['MOL_RUN_ASYNC']);
        }
        static spawn(options) {
            const sync = !this.async_enabled() || !Boolean($mol_wire_auto());
            const env = options.env ?? this.$.$mol_env();
            return $mol_wire_sync(this).spawn_async({ ...options, sync, env });
        }
        static spawn_async({ dir, sync, timeout, command, env }) {
            const args_raw = typeof command === 'string' ? command.split(' ') : command;
            const [app, ...args] = args_raw;
            const opts = { shell: true, cwd: dir, env };
            const log_object = {
                place: `${this}.spawn()`,
                message: 'Run',
                command: args_raw.join(' '),
                dir: $node.path.relative('', dir),
            };
            if (sync) {
                this.$.$mol_log3_come({
                    hint: 'Run inside fiber',
                    ...log_object
                });
                let error;
                let res;
                try {
                    res = this.$.$mol_run_spawn_sync(app, args, opts);
                    error = res.error;
                }
                catch (err) {
                    error = err;
                }
                if (!res || error || res.status) {
                    throw new $mol_run_error(this.error_message(res), { ...log_object, status: res?.status, signal: res?.signal }, ...(error ? [error] : []));
                }
                return res;
            }
            let sub;
            try {
                sub = this.$.$mol_run_spawn(app, args, {
                    ...opts,
                    stdio: ['pipe', 'inherit', 'inherit'],
                });
            }
            catch (error) {
                throw new $mol_run_error(this.error_message(undefined), log_object, error);
            }
            const pid = sub.pid ?? 0;
            this.$.$mol_log3_come({
                ...log_object,
                pid,
            });
            let timeout_kill = false;
            let timer;
            const std_data = [];
            const error_data = [];
            const add = (std_chunk, error_chunk) => {
                if (std_chunk)
                    std_data.push(std_chunk);
                if (error_chunk)
                    error_data.push(error_chunk);
                if (!timeout)
                    return;
                clearTimeout(timer);
                timer = setTimeout(() => {
                    const signal = timeout_kill ? 'SIGKILL' : 'SIGTERM';
                    timeout_kill = true;
                    add();
                    sub.kill(signal);
                }, timeout);
            };
            add();
            sub.stdout?.on('data', data => add(data));
            sub.stderr?.on('data', data => add(undefined, data));
            const result_promise = new Promise((done, fail) => {
                const close = (error, status = null, signal = null) => {
                    if (!timer && timeout)
                        return;
                    clearTimeout(timer);
                    timer = undefined;
                    const res = {
                        pid,
                        signal,
                        get stdout() { return Buffer.concat(std_data); },
                        get stderr() { return Buffer.concat(error_data); }
                    };
                    if (error || status || timeout_kill)
                        return fail(new $mol_run_error(this.error_message(res) + (timeout_kill ? ', timeout' : ''), { ...log_object, pid, status, signal, timeout_kill }, ...error ? [error] : []));
                    this.$.$mol_log3_done({
                        ...log_object,
                        pid,
                    });
                    done(res);
                };
                sub.on('disconnect', () => close(new Error('Disconnected')));
                sub.on('error', err => close(err));
                sub.on('exit', (status, signal) => close(null, status, signal));
            });
            return Object.assign(result_promise, { destructor: () => {
                    clearTimeout(timer);
                    sub.kill('SIGKILL');
                } });
        }
        static error_message(res) {
            return res?.stderr.toString() || res?.stdout.toString() || 'Run error';
        }
    }
    $.$mol_run = $mol_run;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_exec(dir, command, ...args) {
        return this.$mol_run.spawn({ command: [command, ...args], dir });
    }
    $.$mol_exec = $mol_exec;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: 'https://localhost/' }).window;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom = $mol_dom_context;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_style_attach(id, text) {
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        const elid = `$mol_style_attach:${id}`;
        let el = doc.getElementById(elid);
        if (!el) {
            el = doc.createElement('style');
            el.id = elid;
            doc.head.appendChild(el);
        }
        if (el.innerHTML != text)
            el.innerHTML = text;
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            return {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    const TypedArray = Object.getPrototypeOf(Uint8Array);
    function $mol_key(value) {
        if (typeof value === 'bigint')
            return value.toString() + 'n';
        if (typeof value === 'symbol')
            return value.description;
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (typeof value === 'bigint')
                return value.toString() + 'n';
            if (typeof value === 'symbol')
                return value.description;
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            if (value instanceof TypedArray)
                return [...value];
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_after_timeout {
        task;
        constructor(task) {
            super(16, task);
            this.task = task;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = prefix + ('.' + task.name + '<>');
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key_str = $mol_key(key);
            if (dict) {
                const existen = dict.get(key_str);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const id = prefix + ('.' + task.name) + ('<' + key_str.replace(/^"|"$/g, "'") + '>');
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(key_str, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto()?.temp) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete($mol_key(this.args[0]));
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if ($mol_promise_like(next))
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element?.shadowRoot) {
                element = element.shadowRoot.activeElement;
            }
            while (element) {
                parents.push(element);
                const parent = element.parentNode;
                if (parent instanceof ShadowRoot)
                    element = parent.host;
                else
                    element = parent;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            const fun = function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
            Reflect.defineProperty(fun, 'name', { value: task.name + ' ' });
            return fun;
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, def) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            const res = task();
            if (res === undefined)
                return def;
            return res;
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        const getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        getter[$mol_dev_format_head] = () => $mol_dev_format_span({}, '()=> ', $mol_dev_format_auto(value));
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        let current = $mol_wire_auto();
        if (current.temp)
            current = current.host;
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === undefined) {
                continue;
            }
            else if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
            if (typeof val === 'number') {
                style.setProperty(kebab(name), `${val}px`);
            }
            else {
                style.setProperty(kebab(name), val);
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            if (val === el[key])
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_promise extends Promise {
        done;
        fail;
        constructor(executor) {
            let done;
            let fail;
            super((d, f) => {
                done = d;
                fail = f;
                executor?.(d, f);
            });
            this.done = done;
            this.fail = fail;
        }
    }
    $.$mol_promise = $mol_promise;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_promise_blocker extends $mol_promise {
        static [Symbol.toStringTag] = '$mol_promise_blocker';
    }
    $.$mol_promise_blocker = $mol_promise_blocker;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return `${value}%`; }
        static px(value) { return `${value}px`; }
        static mm(value) { return `${value}mm`; }
        static cm(value) { return `${value}cm`; }
        static Q(value) { return `${value}Q`; }
        static in(value) { return `${value}in`; }
        static pc(value) { return `${value}pc`; }
        static pt(value) { return `${value}pt`; }
        static cap(value) { return `${value}cap`; }
        static ch(value) { return `${value}ch`; }
        static em(value) { return `${value}em`; }
        static rem(value) { return `${value}rem`; }
        static ex(value) { return `${value}ex`; }
        static ic(value) { return `${value}ic`; }
        static lh(value) { return `${value}lh`; }
        static rlh(value) { return `${value}rlh`; }
        static vh(value) { return `${value}vh`; }
        static vw(value) { return `${value}vw`; }
        static vi(value) { return `${value}vi`; }
        static vb(value) { return `${value}vb`; }
        static vmin(value) { return `${value}vmin`; }
        static vmax(value) { return `${value}vmax`; }
        static deg(value) { return `${value}deg`; }
        static rad(value) { return `${value}rad`; }
        static grad(value) { return `${value}grad`; }
        static turn(value) { return `${value}turn`; }
        static s(value) { return `${value}s`; }
        static ms(value) { return `${value}ms`; }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static linear_gradient(value) {
            return new $mol_style_func('linear-gradient', value);
        }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name, defaultValue) {
            return new $mol_style_func('var', defaultValue ? [name, defaultValue] : name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
        static linear(...breakpoints) {
            return new $mol_style_func("linear", breakpoints.map((e) => Array.isArray(e)
                ? String(e[0]) +
                    " " +
                    (typeof e[1] === "number" ? e[1] + "%" : e[1].toString())
                : String(e)));
        }
        static cubic_bezier(x1, y1, x2, y2) {
            return new $mol_style_func('cubic-bezier', [x1, y1, x2, y2]);
        }
        static steps(value, step_position) {
            return new $mol_style_func('steps', [value, step_position]);
        }
        static blur(value) {
            return new $mol_style_func('blur', value ?? "");
        }
        static brightness(value) {
            return new $mol_style_func('brightness', value ?? "");
        }
        static contrast(value) {
            return new $mol_style_func('contrast', value ?? "");
        }
        static drop_shadow(color, x_offset, y_offset, blur_radius) {
            return new $mol_style_func("drop-shadow", blur_radius
                ? [color, x_offset, y_offset, blur_radius]
                : [color, x_offset, y_offset]);
        }
        static grayscale(value) {
            return new $mol_style_func('grayscale', value ?? "");
        }
        static hue_rotate(value) {
            return new $mol_style_func('hue-rotate', value ?? "");
        }
        static invert(value) {
            return new $mol_style_func('invert', value ?? "");
        }
        static opacity(value) {
            return new $mol_style_func('opacity', value ?? "");
        }
        static sepia(value) {
            return new $mol_style_func('sepia', value ?? "");
        }
        static saturate(value) {
            return new $mol_style_func('saturate', value ?? "");
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_style_prop(prefix, keys) {
        const record = keys.reduce((rec, key) => {
            rec[key] = $mol_style_func.vary(`--${prefix}_${key}`);
            return rec;
        }, {});
        return record;
    }
    $.$mol_style_prop = $mol_style_prop;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_theme = $mol_style_prop('mol_theme', [
        'back',
        'hover',
        'card',
        'current',
        'special',
        'text',
        'control',
        'shade',
        'line',
        'focus',
        'field',
        'image',
        'spirit',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 240deg;\n\t--mol_theme_hue_spread: 90deg;\n}\n\n:where([mol_theme]) {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme=\"$mol_theme_dark\"], :where([mol_theme=\"$mol_theme_dark\"]) [mol_theme]  {\n\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n\t--mol_theme_spirit: hsl( 0deg, 0%, 0%, .75 );\n\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 20%, 10% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 50%, 20%, .25 );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, 8%, .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, 80% );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 60%, 1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, 65% );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 60%, 65% );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 60%, 65% );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 60%, 65% );\n\n} @supports( color: oklch( 0% 0 0deg ) ) {\n:root, [mol_theme=\"$mol_theme_dark\"], :where([mol_theme=\"$mol_theme_dark\"]) [mol_theme]  {\n\t\n\t--mol_theme_back: oklch( 20% .03 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 30% .05 var(--mol_theme_hue) / .25 );\n\t--mol_theme_field: oklch( 15% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_hover: oklch( 70% 0 var(--mol_theme_hue) / .1 );\n\t\n\t--mol_theme_text: oklch( 80% 0 var(--mol_theme_hue) );\n\t--mol_theme_shade: oklch( 60% 0 var(--mol_theme_hue) );\n\t--mol_theme_line: oklch( 60% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_focus: oklch( 80% .2 calc( var(--mol_theme_hue) + 180deg ) );\n\t\n\t--mol_theme_control: oklch( 70% .1 var(--mol_theme_hue) );\n\t--mol_theme_current: oklch( 70% .2 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_special: oklch( 70% .2 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\n} }\n\n[mol_theme=\"$mol_theme_light\"], :where([mol_theme=\"$mol_theme_light\"]) [mol_theme] {\n\t\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n\t--mol_theme_spirit: hsl( 0deg, 0%, 100%, .75 );\n\t\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 20%, 92% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 50%, 100%, .5 );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, 100%, .75 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, 0% );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 40%, 1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, 40% );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 80%, 30% );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 80%, 30% );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 80%, 30% );\n\n} @supports( color: oklch( 0% 0 0deg ) ) {\n[mol_theme=\"$mol_theme_light\"], :where([mol_theme=\"$mol_theme_light\"]) [mol_theme] {\n\t--mol_theme_back: oklch( 92% .01 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 99% .01 var(--mol_theme_hue) / .5 );\n\t--mol_theme_field: oklch( 100% 0 var(--mol_theme_hue) / .5 );\n\t--mol_theme_hover: oklch( 70% 0 var(--mol_theme_hue) / .1 );\n\t\n\t--mol_theme_text: oklch( 20% 0 var(--mol_theme_hue) );\n\t--mol_theme_shade: oklch( 60% 0 var(--mol_theme_hue) );\n\t--mol_theme_line: oklch( 50% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_focus: oklch( 60% .2 calc( var(--mol_theme_hue) + 180deg ) );\n\t\n\t--mol_theme_control: oklch( 40% .15 var(--mol_theme_hue) );\n\t--mol_theme_current: oklch( 50% .2 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_special: oklch( 50% .2 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\n} }\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: oklch( 25% .075 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 35% .1 var(--mol_theme_hue) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: oklch( 85% .075 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 98% .03 var(--mol_theme_hue) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: oklch( 25% .05 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 35% .1 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: oklch( 85% .05 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: oklch( 25% .05 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 35% .1 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: oklch( 85% .05 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: oklch( 35% .1 calc( var(--mol_theme_hue) + 180deg ) );\n\t--mol_theme_card: oklch( 45% .15 calc( var(--mol_theme_hue) + 180deg ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: oklch( 83% .1 calc( var(--mol_theme_hue) + 180deg ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) + 180deg ) / .25 );\n}\n\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_gap = $mol_style_prop('mol_gap', [
        'block',
        'text',
        'round',
        'space',
        'blur',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString().replace(/</g, '(').replace(/>/g, ')').replaceAll(/"/g, "'");
        }
        dom_node_external(next) {
            const node = next ?? $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            return node;
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = this.dom_node_external(next);
            $mol_dom_render_attributes(node, this.attr_static());
            const events = this.event_async();
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                const mol_view_error = $mol_promise_like(error)
                    ? error.constructor[Symbol.toStringTag] ?? 'Promise'
                    : error.name || error.constructor.name;
                $mol_dom_render_attributes(node, { mol_view_error });
                if ($mol_promise_like(error))
                    break render;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
            }
            return names;
        }
        theme(next = null) {
            return next;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                mol_theme: this.theme() ?? undefined,
            };
        }
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return { ...$mol_wire_async(this.event()) };
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (path.length === 0 && check(this))
                return yield [this];
            try {
                const checked = new Set();
                const sub = this.sub();
                for (const item of sub) {
                    if (!(item instanceof $mol_view))
                        continue;
                    if (!check(item))
                        continue;
                    checked.add(item);
                    yield [...path, this, item];
                }
                for (const item of sub) {
                    if (!(item instanceof $mol_view))
                        continue;
                    if (checked.has(item))
                        continue;
                    yield* item.view_find(check, [...path, this]);
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            try {
                this.dom_final();
            }
            catch (err) {
                $mol_fail_log(err);
            }
            view.dom_node().scrollIntoView({ block: align });
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            new this.$.$mol_after_timeout(0, () => {
                this.focused(true);
            });
        }
        destructor() {
            const node = $mol_wire_probe(() => this.dom_node());
            if (!node)
                return;
            const events = $mol_wire_probe(() => this.event_async());
            if (!events)
                return;
            for (let event_name in events) {
                node.removeEventListener(event_name, events[event_name]);
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_id", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "theme", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n\toverscroll-behavior: contain; /** Disable navigation gestures **/\n}\n\n@media print {\n\t[mol_view_root] {\n\t\theight: auto;\n\t}\n}\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"], [mol_view_error=\"$mol_promise_blocker\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@keyframes mol_view_wait {\n\tfrom {\n\t\topacity: .25;\n\t}\n\t20% {\n\t\topacity: .75;\n\t}\n\tto {\n\t\topacity: .25;\n\t}\n}\n\n:where([mol_view][mol_view_error=\"$mol_promise_blocker\"]),\n:where([mol_view][mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait 1s steps(20,end) infinite;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node_external(next) {
            return next ?? $mol_owning_get(this).host.dom_node();
        }
        render() {
            this.dom_node_actual();
        }
    }
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));

;
	($.$mol_svg) = class $mol_svg extends ($.$mol_view) {
		dom_name(){
			return "svg";
		}
		dom_name_space(){
			return "http://www.w3.org/2000/svg";
		}
		font_size(){
			return 16;
		}
		font_family(){
			return "";
		}
		style_size(){
			return {};
		}
	};


;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_svg_root) = class $mol_svg_root extends ($.$mol_svg) {
		view_box(){
			return "0 0 100 100";
		}
		aspect(){
			return "xMidYMid";
		}
		dom_name(){
			return "svg";
		}
		attr(){
			return {
				...(super.attr()), 
				"viewBox": (this.view_box()), 
				"preserveAspectRatio": (this.aspect())
			};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_svg_path) = class $mol_svg_path extends ($.$mol_svg) {
		geometry(){
			return "";
		}
		dom_name(){
			return "path";
		}
		attr(){
			return {...(super.attr()), "d": (this.geometry())};
		}
	};


;
"use strict";

;
	($.$mol_icon) = class $mol_icon extends ($.$mol_svg_root) {
		path(){
			return "";
		}
		Path(){
			const obj = new this.$.$mol_svg_path();
			(obj.geometry) = () => ((this.path()));
			return obj;
		}
		view_box(){
			return "0 0 24 24";
		}
		minimal_width(){
			return 16;
		}
		minimal_height(){
			return 16;
		}
		sub(){
			return [(this.Path())];
		}
	};
	($mol_mem(($.$mol_icon.prototype), "Path"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1.5em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_spider) = class $mol_icon_spider extends ($.$mol_icon) {
		path(){
			return "M21.29 16.71L22.71 15.29L19.5 12.11L16.5 11.26L18.41 11L22.6 7.8L21.4 6.2L17.59 9.05L14.91 9.5L18.11 6.31L17 1.76L15 2.24L15.86 5.69L14.76 6.83A3 3 0 0 0 9.24 6.83L8.11 5.69L9 2.24L7 1.76L5.89 6.31L9.09 9.5L6.4 9.05L2.6 6.2L1.4 7.8L5.6 11L7.46 11.31L4.46 12.16L1.29 15.29L2.71 16.71L5.5 13.89L7.87 13.22L4 16.54V22H6V17.46L7.56 16.12A4.5 4.5 0 0 0 16.44 16.12L18 17.46V22H20V16.54L16.13 13.22L18.5 13.89Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_spider_web) = class $mol_icon_spider_web extends ($.$mol_icon) {
		path(){
			return "M13.62,13.28L15.26,15.54C15.29,15 15.38,14.47 15.56,13.93C15.74,13.37 16,12.86 16.3,12.41L13.62,13.28M17.77,19C17.75,17.68 17.95,16.27 18.41,14.85C18.88,13.42 19.56,12.14 20.36,11.09L18.32,11.75C17.54,12.26 16.87,13.14 16.5,14.23C16.17,15.29 16.18,16.36 16.5,17.22L17.77,19M19.25,21C18.75,21.46 18.21,21.86 17.63,22.2L17.31,21.76C15.9,21 14.04,20.5 12,20.5C9.96,20.5 8.1,21 6.69,21.76L6.37,22.2C5.79,21.86 5.25,21.46 4.75,21L5,20.69C5.33,19.08 5.22,17.12 4.58,15.14C3.94,13.19 2.9,11.56 1.71,10.46L1.27,10.32C1.42,9.66 1.63,9 1.89,8.41L2.29,8.54C3.92,8.37 5.74,7.65 7.43,6.43C9.09,5.22 10.32,3.73 11,2.26V1.79L12,1.75L13,1.79V2.21C13.67,3.71 14.91,5.23 16.6,6.45C18.26,7.66 20.06,8.37 21.67,8.56L22.11,8.41C22.37,9 22.58,9.66 22.73,10.32L22.23,10.5C21.04,11.58 20,13.21 19.37,15.16C18.74,17.09 18.62,19 18.92,20.57L19.25,21M11,11.37V8.5C10.66,8.92 10.26,9.32 9.78,9.67C9.29,10 8.77,10.29 8.25,10.5L11,11.37M11,4.22C10.25,5.31 9.24,6.35 8,7.24C6.78,8.14 5.46,8.78 4.18,9.16L6.15,9.8C7.11,9.88 8.22,9.56 9.19,8.86C10.13,8.18 10.76,7.27 11,6.36V4.22M13,11.37L15.74,10.5C15.23,10.3 14.72,10.03 14.25,9.69C13.76,9.33 13.34,8.92 13,8.5V11.37M19.8,9.16C18.53,8.78 17.23,8.15 16,7.26C14.77,6.36 13.76,5.31 13,4.2V6.27C13.22,7.21 13.86,8.17 14.84,8.88C15.77,9.56 16.83,9.87 17.77,9.82L19.8,9.16M10.38,13.28L7.64,12.39C7.95,12.84 8.2,13.35 8.38,13.91C8.57,14.5 8.66,15.06 8.68,15.62L10.38,13.28M3.58,11.07C4.38,12.12 5.06,13.4 5.53,14.83C6,16.29 6.2,17.74 6.17,19.08L7.38,17.41C7.76,16.5 7.8,15.36 7.43,14.22C7.07,13.12 6.4,12.24 5.61,11.73L3.58,11.07M12,14.45L10.35,16.72C10.87,16.58 11.42,16.5 12,16.5C12.58,16.5 13.13,16.58 13.65,16.72L12,14.45M7.84,20.18C9.08,19.75 10.5,19.5 12,19.5C13.5,19.5 14.92,19.75 16.16,20.18L14.88,18.42C14.16,17.85 13.13,17.5 12,17.5C10.87,17.5 9.84,17.85 9.12,18.42L7.84,20.18Z";
		}
	};


;
"use strict";

;
	($.$apxutechtop_samosbor_map_icon_stairs) = class $apxutechtop_samosbor_map_icon_stairs extends ($.$mol_icon) {
		path(){
			return "M0.5 40.5V36.2895H7.86842V26.8158H17.3421V17.3421H26.8158V7.86842H36.2895V0.5H40.5V12.0789H31.0263V21.5526H21.5526V31.0263H12.0789V40.5H0.5Z";
		}
		view_box(){
			return "0 0 41 41";
		}
	};
	($.$apxutechtop_samosbor_map_icon_cleaner) = class $apxutechtop_samosbor_map_icon_cleaner extends ($.$mol_icon) {
		path(){
			return "M27.5929 0.817734L17.5955 11.1809L20.2004 13.7705L30.2711 3.38228C31.1598 1.42513 29.2897 -0.212085 27.5929 0.817734ZM13.6941 12.2007C13.7918 12.1232 13.8919 12.0558 13.992 11.9983L14.0286 11.9783C14.6023 11.6583 15.2029 11.6683 15.8328 12.1107L17.5833 13.8554L17.6101 13.8829L19.2214 15.4876C19.8879 16.1825 20.0368 16.9574 19.6682 17.8147L14.9441 30.5C6.36507 28.7428 0.417851 22.4814 0.500858 12.9306C5.19565 14.3354 9.7171 14.7953 13.6941 12.2007Z";
		}
		view_box(){
			return "0 0 31 31";
		}
	};
	($.$apxutechtop_samosbor_map_icon_factory) = class $apxutechtop_samosbor_map_icon_factory extends ($.$mol_icon) {
		path(){
			return "M28.4689 6.50021L19.657 13.4819V6.50021L10.4615 13.7857L9.69547 0.5H2.03205L0.5 30.5H30.5L28.4689 6.50021ZM11.9053 22.9416H8.28594V18.8926H11.9053V22.9416ZM22.186 22.9416H18.5656V18.8926H22.186V22.9416Z";
		}
		view_box(){
			return "0 0 31 31";
		}
	};
	($.$apxutechtop_samosbor_map_icon_repairman) = class $apxutechtop_samosbor_map_icon_repairman extends ($.$mol_icon) {
		path(){
			return "M27.8449 12.418C30.4201 10.1558 30.8504 7.585 30.2745 5.41791C30.2575 5.24576 30.215 5.10115 30.0598 4.99217L29.5415 4.58107C29.4517 4.50051 29.3307 4.4602 29.2096 4.47215C29.0876 4.48316 28.9769 4.54445 28.9051 4.63967L25.9241 8.39148C25.8409 8.50228 25.7066 8.56544 25.5657 8.56087L24.4838 8.63781C24.3911 8.63505 24.3012 8.603 24.2284 8.54622L22.1384 6.83142C22.0533 6.76457 21.9975 6.66935 21.9832 6.56406L21.8536 5.61555C21.8385 5.51119 21.8659 5.40496 21.9303 5.31982L24.7211 1.64946C24.8478 1.48006 24.8233 1.24663 24.6663 1.10471L23.9891 0.592955C23.8567 0.473014 23.7063 0.490416 23.5011 0.527975C21.5736 0.896939 18.2825 2.70326 17.4474 5.20082C16.7116 7.39902 16.9679 8.949 16.9679 8.949C16.9679 10.1877 16.5471 11.3816 16.0297 11.8833L1.48825 25.3975C1.45986 25.4231 1.43244 25.4478 1.40502 25.4744C0.203926 26.6371 0.205802 28.525 1.36623 29.6474C2.52665 30.7707 4.50509 30.801 5.70619 29.6373C5.762 29.5833 5.81593 29.5274 5.86604 29.4698L19.8885 14.7957C21.6135 13.3098 25.0285 14.8936 27.8449 12.418Z";
		}
		view_box(){
			return "0 0 31 31";
		}
	};
	($.$apxutechtop_samosbor_map_icon_sinking) = class $apxutechtop_samosbor_map_icon_sinking extends ($.$mol_icon) {
		path(){
			return "M0.5 30.5V27.5C1.45 27.5 2.15625 27.25 2.61875 26.75C3.08125 26.25 4.05 26 5.525 26C7 26 7.9625 26.25 8.4125 26.75C8.8625 27.25 9.5625 27.5 10.5125 27.5C11.4625 27.5 12.1625 27.25 12.6125 26.75C13.0625 26.25 14.025 26 15.5 26C16.925 26 17.8938 26.25 18.4062 26.75C18.9188 27.25 19.625 27.5 20.525 27.5C21.475 27.5 22.175 27.25 22.625 26.75C23.075 26.25 24.0375 26 25.5125 26C26.9875 26 27.95 26.25 28.4 26.75C28.85 27.25 29.55 27.5 30.5 27.5V30.5C29.05 30.5 28.0875 30.25 27.6125 29.75C27.1375 29.25 26.4375 29 25.5125 29C24.5875 29 23.8875 29.25 23.4125 29.75C22.9375 30.25 21.975 30.5 20.525 30.5C19.075 30.5 18.1063 30.25 17.6188 29.75C17.1313 29.25 16.425 29 15.5 29C14.55 29 13.85 29.25 13.4 29.75C12.95 30.25 11.9875 30.5 10.5125 30.5C9.0375 30.5 8.075 30.25 7.625 29.75C7.175 29.25 6.475 29 5.525 29C4.6 29 3.9 29.25 3.425 29.75C2.95 30.25 1.975 30.5 0.5 30.5ZM10.5125 23.75C9.0875 23.75 8.125 23.5 7.625 23C7.125 22.5 6.425 22.25 5.525 22.25C4.65 22.25 3.95 22.5 3.425 23C2.9 23.5 1.925 23.75 0.5 23.75V20.75C1.45 20.75 2.15 20.5 2.6 20C3.05 19.5 4.0125 19.25 5.4875 19.25C5.6375 19.25 5.7875 19.2563 5.9375 19.2688C6.0875 19.2812 6.225 19.3 6.35 19.325L4.925 14.075L2.8625 16.775L0.5 14.9L12.1625 0.5L29.45 7.1L28.3625 9.9125L25.2125 8.6375L28.25 19.925C28.6 20.125 28.9438 20.3125 29.2813 20.4875C29.6188 20.6625 30.025 20.75 30.5 20.75V23.75C29.075 23.725 28.1125 23.4688 27.6125 22.9813C27.1125 22.4938 26.4125 22.25 25.5125 22.25C24.5625 22.25 23.8625 22.5 23.4125 23C22.9625 23.5 22 23.75 20.525 23.75C19.1 23.75 18.1313 23.5 17.6188 23C17.1063 22.5 16.4 22.25 15.5 22.25C14.55 22.25 13.85 22.5 13.4 23C12.95 23.5 11.9875 23.75 10.5125 23.75ZM10.5125 20.75C11.2625 20.75 11.8438 20.575 12.2563 20.225C12.6688 19.875 13.3 19.6 14.15 19.4L12.7625 14.3L18.575 12.7625L20.675 20.7125C21.45 20.6625 22.0625 20.4313 22.5125 20.0188C22.9625 19.6063 23.775 19.3625 24.95 19.2875L21.725 7.25L13.1375 4.1L7.25 11.15L9.8375 20.675C9.9375 20.7 10.0438 20.7188 10.1562 20.7313C10.2688 20.7438 10.3875 20.75 10.5125 20.75Z";
		}
		view_box(){
			return "0 0 31 31";
		}
	};
	($.$apxutechtop_samosbor_map_icon_roof) = class $apxutechtop_samosbor_map_icon_roof extends ($.$mol_icon) {
		path(){
			return "M11.4091 25.5V16.6765H19.5909V25.5H11.4091ZM14.1364 22.5588H16.8636V19.6176H14.1364V22.5588ZM2.13636 15.2059L0.5 12.8529L15.5 0.5L20.9545 4.98529V1.97059H25.0455V8.36765L30.5 12.8529L28.8636 15.2059L15.5 4.21324L2.13636 15.2059Z";
		}
		view_box(){
			return "0 0 31 26";
		}
	};
	($.$apxutechtop_samosbor_map_icon_elevator) = class $apxutechtop_samosbor_map_icon_elevator extends ($.$mol_icon) {
		path(){
			return "M9.62131 33.3646H16.288V24.4757H18.5102V18.9201C18.5102 17.6979 18.075 16.6516 17.2046 15.7812C16.3343 14.9109 15.288 14.4757 14.0658 14.4757H11.8435C10.6213 14.4757 9.57501 14.9109 8.70464 15.7812C7.83427 16.6516 7.39909 17.6979 7.39909 18.9201V24.4757H9.62131V33.3646ZM12.9546 12.2535C13.7324 12.2535 14.3898 11.985 14.9269 11.4479C15.4639 10.9109 15.7324 10.2535 15.7324 9.47569C15.7324 8.69792 15.4639 8.04051 14.9269 7.50347C14.3898 6.96644 13.7324 6.69792 12.9546 6.69792C12.1769 6.69792 11.5195 6.96644 10.9824 7.50347C10.4454 8.04051 10.1769 8.69792 10.1769 9.47569C10.1769 10.2535 10.4454 10.9109 10.9824 11.4479C11.5195 11.985 12.1769 12.2535 12.9546 12.2535ZM22.9546 17.809H34.0658L28.5102 8.92014L22.9546 17.809ZM28.5102 31.1424L34.0658 22.2535H22.9546L28.5102 31.1424ZM5.17687 40.0312C3.95464 40.0312 2.90835 39.5961 2.03798 38.7257C1.16761 37.8553 0.732422 36.809 0.732422 35.5868V4.47569C0.732422 3.25347 1.16761 2.20718 2.03798 1.33681C2.90835 0.466435 3.95464 0.03125 5.17687 0.03125H36.288C37.5102 0.03125 38.5565 0.466435 39.4269 1.33681C40.2972 2.20718 40.7324 3.25347 40.7324 4.47569V35.5868C40.7324 36.809 40.2972 37.8553 39.4269 38.7257C38.5565 39.5961 37.5102 40.0312 36.288 40.0312H5.17687ZM5.17687 35.5868H36.288V4.47569H5.17687V35.5868Z";
		}
		view_box(){
			return "0 0 41 41";
		}
	};
	($.$apxutechtop_samosbor_map_icon_abandoned) = class $apxutechtop_samosbor_map_icon_abandoned extends ($.$mol_icon_spider_web) {};
	($.$apxutechtop_samosbor_map_icon_theatre) = class $apxutechtop_samosbor_map_icon_theatre extends ($.$mol_icon) {
		path(){
			return "M25.0455 8.75C25.4318 8.75 25.7557 8.60625 26.017 8.31875C26.2784 8.03125 26.4091 7.675 26.4091 7.25C26.4091 6.825 26.2784 6.46875 26.017 6.18125C25.7557 5.89375 25.4318 5.75 25.0455 5.75C24.6591 5.75 24.3352 5.89375 24.0739 6.18125C23.8125 6.46875 23.6818 6.825 23.6818 7.25C23.6818 7.675 23.8125 8.03125 24.0739 8.31875C24.3352 8.60625 24.6591 8.75 25.0455 8.75ZM19.5909 8.75C19.9773 8.75 20.3011 8.60625 20.5625 8.31875C20.8239 8.03125 20.9545 7.675 20.9545 7.25C20.9545 6.825 20.8239 6.46875 20.5625 6.18125C20.3011 5.89375 19.9773 5.75 19.5909 5.75C19.2045 5.75 18.8807 5.89375 18.6193 6.18125C18.358 6.46875 18.2273 6.825 18.2273 7.25C18.2273 7.675 18.358 8.03125 18.6193 8.31875C18.8807 8.60625 19.2045 8.75 19.5909 8.75ZM18.9091 13.85H25.7273C25.7273 12.975 25.3807 12.2812 24.6875 11.7688C23.9943 11.2563 23.2045 11 22.3182 11C21.4318 11 20.642 11.2563 19.9489 11.7688C19.2557 12.2812 18.9091 12.975 18.9091 13.85ZM8.68182 30.5C6.40909 30.5 4.47727 29.625 2.88636 27.875C1.29545 26.125 0.5 24 0.5 21.5V11H16.8636V21.5C16.8636 24 16.0682 26.125 14.4773 27.875C12.8864 29.625 10.9545 30.5 8.68182 30.5ZM8.68182 27.5C10.1818 27.5 11.4659 26.9125 12.5341 25.7375C13.6023 24.5625 14.1364 23.15 14.1364 21.5V14H3.22727V21.5C3.22727 23.15 3.76136 24.5625 4.82955 25.7375C5.89773 26.9125 7.18182 27.5 8.68182 27.5ZM22.3182 20C21.7273 20 21.142 19.9312 20.5625 19.7938C19.983 19.6562 19.4318 19.45 18.9091 19.175V15.65C19.4091 16.075 19.9489 16.4062 20.5284 16.6437C21.108 16.8813 21.7045 17 22.3182 17C23.8182 17 25.1023 16.4125 26.1705 15.2375C27.2386 14.0625 27.7727 12.65 27.7727 11V3.5H16.8636V8.75H14.1364V0.5H30.5V11C30.5 13.5 29.7045 15.625 28.1136 17.375C26.5227 19.125 24.5909 20 22.3182 20ZM5.95455 19.25C6.34091 19.25 6.66477 19.1063 6.92614 18.8188C7.1875 18.5312 7.31818 18.175 7.31818 17.75C7.31818 17.325 7.1875 16.9688 6.92614 16.6813C6.66477 16.3938 6.34091 16.25 5.95455 16.25C5.56818 16.25 5.24432 16.3938 4.98295 16.6813C4.72159 16.9688 4.59091 17.325 4.59091 17.75C4.59091 18.175 4.72159 18.5312 4.98295 18.8188C5.24432 19.1063 5.56818 19.25 5.95455 19.25ZM11.4091 19.25C11.7955 19.25 12.1193 19.1063 12.3807 18.8188C12.642 18.5312 12.7727 18.175 12.7727 17.75C12.7727 17.325 12.642 16.9688 12.3807 16.6813C12.1193 16.3938 11.7955 16.25 11.4091 16.25C11.0227 16.25 10.6989 16.3938 10.4375 16.6813C10.1761 16.9688 10.0455 17.325 10.0455 17.75C10.0455 18.175 10.1761 18.5312 10.4375 18.8188C10.6989 19.1063 11.0227 19.25 11.4091 19.25ZM8.68182 24.35C9.56818 24.35 10.358 24.0938 11.0511 23.5812C11.7443 23.0688 12.0909 22.375 12.0909 21.5H5.27273C5.27273 22.375 5.61932 23.0688 6.3125 23.5812C7.00568 24.0938 7.79545 24.35 8.68182 24.35Z";
		}
		view_box(){
			return "0 0 31 31";
		}
	};
	($.$apxutechtop_samosbor_map_icon_luquidator) = class $apxutechtop_samosbor_map_icon_luquidator extends ($.$mol_icon) {
		path1(){
			const obj = new this.$.$mol_svg_path();
			(obj.geometry) = () => ("M8.72648 15.4518C8.41396 15.139 7.99001 14.9632 7.54789 14.9631C7.10577 14.9629 6.6817 15.1384 6.36896 15.451C6.05622 15.7635 5.88044 16.1875 5.88028 16.6297C5.88013 17.0718 6.05561 17.496 6.36813 17.8087L6.9898 18.4288L0.999746 24.4195C0.67976 24.7396 0.5 25.1737 0.5 25.6263C0.5 26.079 0.67976 26.5131 0.999746 26.8332L4.16644 30.0002C4.48649 30.3202 4.92054 30.5 5.37312 30.5C5.82569 30.5 6.25974 30.3202 6.57979 30.0002L12.5682 24.0111L13.1882 24.6312C13.343 24.786 13.5269 24.9087 13.7291 24.9924C13.9314 25.0762 14.1482 25.1192 14.3671 25.1191C14.586 25.119 14.8028 25.0758 15.005 24.992C15.2072 24.9081 15.391 24.7853 15.5457 24.6304C15.7004 24.4755 15.8232 24.2917 15.9069 24.0894C15.9906 23.8871 16.0336 23.6703 16.0335 23.4513C16.0335 23.2324 15.9903 23.0156 15.9064 22.8134C15.8226 22.6111 15.6997 22.4274 15.5449 22.2726L8.72648 15.4518Z");
			return obj;
		}
		path2(){
			const obj = new this.$.$mol_svg_path();
			(obj.geometry) = () => ("M19.3332 0.5L10.5248 13.7149L17.2849 20.4774L30.5 11.668V0.5H19.3332Z");
			return obj;
		}
		sub(){
			return [(this.path1()), (this.path2())];
		}
		view_box(){
			return "0 0 31 31";
		}
	};
	($mol_mem(($.$apxutechtop_samosbor_map_icon_luquidator.prototype), "path1"));
	($mol_mem(($.$apxutechtop_samosbor_map_icon_luquidator.prototype), "path2"));
	($.$apxutechtop_samosbor_map_icon_ladder) = class $apxutechtop_samosbor_map_icon_ladder extends ($.$mol_icon) {
		path(){
			return "M2.01543 30C1.33579 30 0.79924 29.7847 0.405768 29.3542C0.012296 28.9236 -0.0950145 28.4583 0.0838364 27.9583L9.63447 1.16667C9.77755 0.805556 10.0279 0.520833 10.3856 0.3125C10.7433 0.104167 11.1547 0 11.6197 0C12.3351 0 12.8896 0.215278 13.283 0.645833C13.6765 1.07639 13.7838 1.54167 13.605 2.04167L12.5319 5H24.6043L25.9457 1.16667C26.0888 0.805556 26.3481 0.520833 26.7237 0.3125C27.0993 0.104167 27.5196 0 27.9846 0C28.6642 0 29.2008 0.215278 29.5942 0.645833C29.9877 1.07639 30.095 1.54167 29.9162 2.04167L20.3655 28.8333C20.2224 29.1944 19.9721 29.4792 19.6144 29.6875C19.2567 29.8958 18.8453 30 18.3803 30C17.6649 30 17.1104 29.7847 16.717 29.3542C16.3235 28.9236 16.2162 28.4583 16.395 27.9583L17.4681 25H5.39571L4.05433 28.8333C3.91125 29.1944 3.65191 29.4792 3.27632 29.6875C2.90074 29.8958 2.48044 30 2.01543 30ZM9.58082 13.3333H21.5996L23.3702 8.33333H11.3514L9.58082 13.3333ZM6.62978 21.6667H18.6486L20.4192 16.6667H8.4004L6.62978 21.6667Z";
		}
		view_box(){
			return "0 0 30 30";
		}
	};
	($.$apxutechtop_samosbor_map_icon_min_floor) = class $apxutechtop_samosbor_map_icon_min_floor extends ($.$mol_icon) {
		path(){
			return "M17 23.45L24.65 15.8L22.2275 13.42L17 18.6475L11.7725 13.42L9.35 15.8L17 23.45ZM17 34.5C14.6483 34.5 12.4383 34.0537 10.37 33.1613C8.30167 32.2688 6.5025 31.0575 4.9725 29.5275C3.4425 27.9975 2.23125 26.1983 1.33875 24.13C0.44625 22.0617 0 19.8517 0 17.5C0 15.1483 0.44625 12.9383 1.33875 10.87C2.23125 8.80167 3.4425 7.0025 4.9725 5.4725C6.5025 3.9425 8.30167 2.73125 10.37 1.83875C12.4383 0.94625 14.6483 0.5 17 0.5C19.3517 0.5 21.5617 0.94625 23.63 1.83875C25.6983 2.73125 27.4975 3.9425 29.0275 5.4725C30.5575 7.0025 31.7688 8.80167 32.6613 10.87C33.5537 12.9383 34 15.1483 34 17.5C34 19.8517 33.5537 22.0617 32.6613 24.13C31.7688 26.1983 30.5575 27.9975 29.0275 29.5275C27.4975 31.0575 25.6983 32.2688 23.63 33.1613C21.5617 34.0537 19.3517 34.5 17 34.5ZM17 31.1C20.7967 31.1 24.0125 29.7825 26.6475 27.1475C29.2825 24.5125 30.6 21.2967 30.6 17.5C30.6 13.7033 29.2825 10.4875 26.6475 7.8525C24.0125 5.2175 20.7967 3.9 17 3.9C13.2033 3.9 9.9875 5.2175 7.3525 7.8525C4.7175 10.4875 3.4 13.7033 3.4 17.5C3.4 21.2967 4.7175 24.5125 7.3525 27.1475C9.9875 29.7825 13.2033 31.1 17 31.1Z";
		}
		view_box(){
			return "0 0 34 35";
		}
	};
	($.$apxutechtop_samosbor_map_icon_max_floor) = class $apxutechtop_samosbor_map_icon_max_floor extends ($.$apxutechtop_samosbor_map_icon_min_floor) {
		style(){
			return {"transform": "rotate(180deg)"};
		}
	};
	($.$apxutechtop_samosbor_map_icon_generator) = class $apxutechtop_samosbor_map_icon_generator extends ($.$mol_icon) {
		path(){
			return "M7 36.5L8.75 23.9H0L15.75 0.5H19.25L17.5 14.9H28L10.5 36.5H7Z";
		}
		view_box(){
			return "0 0 28 37";
		}
	};


;
"use strict";

;
	($.$mol_speck) = class $mol_speck extends ($.$mol_view) {
		theme(){
			return "$mol_theme_accent";
		}
		value(){
			return null;
		}
		minimal_width(){
			return 12;
		}
		attr(){
			return {...(super.attr()), "mol_theme": (this.theme())};
		}
		style(){
			return {...(super.style()), "minHeight": "1em"};
		}
		sub(){
			return [(this.value())];
		}
	};


;
"use strict";
var $;
(function ($) {
    $.$mol_layer = $mol_style_prop('mol_layer', [
        'hover',
        'focus',
        'speck',
        'float',
        'popup',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .75rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.2rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tvertical-align: sub;\n\tpadding: 0 .2rem;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: .9;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n\tbox-shadow: 0 0 3px rgba(0,0,0,.5);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_button) = class $mol_button extends ($.$mol_view) {
		event_activate(next){
			if(next !== undefined) return next;
			return null;
		}
		clicks(next){
			if(next !== undefined) return next;
			return null;
		}
		event_key_press(next){
			if(next !== undefined) return next;
			return null;
		}
		disabled(){
			return false;
		}
		tab_index(){
			return 0;
		}
		hint(){
			return "";
		}
		hint_safe(){
			return (this.hint());
		}
		error(){
			return "";
		}
		enabled(){
			return true;
		}
		click(next){
			if(next !== undefined) return next;
			return null;
		}
		event_click(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {
				...(super.event()), 
				"click": (next) => (this.event_activate(next)), 
				"dblclick": (next) => (this.clicks(next)), 
				"keydown": (next) => (this.event_key_press(next))
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"disabled": (this.disabled()), 
				"role": "button", 
				"tabindex": (this.tab_index()), 
				"title": (this.hint_safe())
			};
		}
		sub(){
			return [(this.title())];
		}
		Speck(){
			const obj = new this.$.$mol_speck();
			(obj.value) = () => ((this.error()));
			return obj;
		}
	};
	($mol_mem(($.$mol_button.prototype), "event_activate"));
	($mol_mem(($.$mol_button.prototype), "clicks"));
	($mol_mem(($.$mol_button.prototype), "event_key_press"));
	($mol_mem(($.$mol_button.prototype), "click"));
	($mol_mem(($.$mol_button.prototype), "event_click"));
	($mol_mem(($.$mol_button.prototype), "Speck"));


;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    Promise.resolve().then(() => this.status([error]));
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n\tbackground: transparent;\n\tcolor: inherit;\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));

;
	($.$mol_button_typed) = class $mol_button_typed extends ($.$mol_button) {
		minimal_height(){
			return 40;
		}
		minimal_width(){
			return 40;
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tbox-shadow: inset 0 0 0 10rem var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_button_minor) = class $mol_button_minor extends ($.$mol_button_typed) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_check) = class $mol_check extends ($.$mol_button_minor) {
		checked(next){
			if(next !== undefined) return next;
			return false;
		}
		aria_checked(){
			return "false";
		}
		aria_role(){
			return "checkbox";
		}
		Icon(){
			return null;
		}
		title(){
			return "";
		}
		Title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.title())]);
			return obj;
		}
		label(){
			return [(this.Title())];
		}
		attr(){
			return {
				...(super.attr()), 
				"mol_check_checked": (this.checked()), 
				"aria-checked": (this.aria_checked()), 
				"role": (this.aria_role())
			};
		}
		sub(){
			return [(this.Icon()), (this.label())];
		}
	};
	($mol_mem(($.$mol_check.prototype), "checked"));
	($mol_mem(($.$mol_check.prototype), "Title"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\t/* align-items: flex-start; */\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
            aria_checked() {
                return String(this.checked());
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_check_list) = class $mol_check_list extends ($.$mol_view) {
		option_checked(id, next){
			if(next !== undefined) return next;
			return false;
		}
		option_title(id){
			return "";
		}
		option_label(id){
			return [(this.option_title(id))];
		}
		enabled(){
			return true;
		}
		option_enabled(id){
			return (this.enabled());
		}
		option_hint(id){
			return "";
		}
		items(){
			return [];
		}
		dictionary(){
			return {};
		}
		Option(id){
			const obj = new this.$.$mol_check();
			(obj.checked) = (next) => ((this.option_checked(id, next)));
			(obj.label) = () => ((this.option_label(id)));
			(obj.enabled) = () => ((this.option_enabled(id)));
			(obj.hint) = () => ((this.option_hint(id)));
			(obj.minimal_height) = () => (24);
			return obj;
		}
		options(){
			return {};
		}
		keys(){
			return [];
		}
		sub(){
			return (this.items());
		}
	};
	($mol_mem_key(($.$mol_check_list.prototype), "option_checked"));
	($mol_mem_key(($.$mol_check_list.prototype), "Option"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_list extends $.$mol_check_list {
            options() {
                return {};
            }
            dictionary(next) {
                return next ?? {};
            }
            option_checked(id, next) {
                const prev = this.dictionary();
                if (next === undefined)
                    return prev[id] ?? null;
                const next_rec = { ...prev, [id]: next };
                if (next === null)
                    delete next_rec[id];
                return this.dictionary(next_rec)[id] ?? null;
            }
            keys() {
                return Object.keys(this.options());
            }
            items() {
                return this.keys().map(key => this.Option(key));
            }
            option_title(key) {
                return this.options()[key] || key;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "keys", null);
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "items", null);
        $$.$mol_check_list = $mol_check_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/list/list.view.css", "[mol_check_list] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex: 1 1 auto;\n\tborder-radius: var(--mol_gap_round);\n\tgap: 1px;\n}\n\n[mol_check_list_option] {\n\tflex: 0 1 auto;\n}\n\n[mol_check_list_option]:where([mol_check_checked=\"true\"]) {\n\ttext-shadow: 0 0;\n\tcolor: var(--mol_theme_current);\n}\n\n[mol_check_list_option]:where([mol_check_checked=\"true\"][disabled]) {\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));

;
	($.$mol_switch) = class $mol_switch extends ($.$mol_check_list) {
		value(next){
			if(next !== undefined) return next;
			return "";
		}
	};
	($mol_mem(($.$mol_switch.prototype), "value"));


;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_switch extends $.$mol_switch {
            value(next) {
                return $mol_state_session.value(`${this}.value()`, next) ?? '';
            }
            option_checked(key, next) {
                if (next === undefined)
                    return this.value() == key;
                this.value(next ? key : '');
                return next;
            }
        }
        $$.$mol_switch = $mol_switch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_list) = class $mol_list extends ($.$mol_view) {
		rows(){
			return [];
		}
		gap_before(){
			return 0;
		}
		gap_after(){
			return 0;
		}
		render_visible_only(){
			return true;
		}
		render_over(){
			return 0;
		}
		sub(){
			return (this.rows());
		}
		Empty(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		Gap_before(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({"paddingTop": (this.gap_before())});
			return obj;
		}
		Gap_after(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({"paddingTop": (this.gap_after())});
			return obj;
		}
		item_height_min(id){
			return 1;
		}
		item_width_min(id){
			return 1;
		}
		view_window(){
			return [0, 0];
		}
	};
	($mol_mem(($.$mol_list.prototype), "Empty"));
	($mol_mem(($.$mol_list.prototype), "Gap_before"));
	($mol_mem(($.$mol_list.prototype), "Gap_after"));


;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = this.$mol_dom_context.CSS?.supports('overflow-anchor:auto') ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = this.item_height_min(min);
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top < limit_top) && (bottom < limit_bottom) && (max < kids.length)) {
                    min2 = max;
                    top2 = bottom;
                }
                if ((bottom > limit_bottom) && (top > limit_top) && (min > 0)) {
                    max2 = min;
                    bottom2 = top;
                }
                while (anchoring && ((top2 > limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= this.item_height_min(min2);
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += this.item_height_min(max2);
                    ++max2;
                }
                return [min2, max2];
            }
            item_height_min(index) {
                try {
                    return this.sub()[index]?.minimal_height() ?? 0;
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 0;
                }
            }
            row_width_min(index) {
                try {
                    return this.sub()[index]?.minimal_width() ?? 0;
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 0;
                }
            }
            gap_before() {
                let gap = 0;
                const skipped = this.view_window()[0];
                for (let i = 0; i < skipped; ++i)
                    gap += this.item_height_min(i);
                return gap;
            }
            gap_after() {
                let gap = 0;
                const from = this.view_window()[1];
                const to = this.sub().length;
                for (let i = from; i < to; ++i)
                    gap += this.item_height_min(i);
                return gap;
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                let height = 0;
                const len = this.sub().length;
                for (let i = 0; i < len; ++i)
                    height += this.item_height_min(i);
                return height;
            }
            minimal_width() {
                let width = 0;
                const len = this.sub().length;
                for (let i = 0; i < len; ++i)
                    width = Math.max(width, this.item_width_min(i));
                return width;
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_width", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: 1.5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_card) = class $mol_card extends ($.$mol_list) {
		status(){
			return "";
		}
		content(){
			return [(this.title())];
		}
		Content(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.content()));
			return obj;
		}
		status_text(){
			return (this.status());
		}
		Status(){
			const obj = new this.$.$mol_view();
			(obj.minimal_height) = () => (30);
			(obj.sub) = () => ([(this.status_text())]);
			return obj;
		}
		attr(){
			return {...(super.attr()), "mol_card_status_type": (this.status())};
		}
		rows(){
			return [(this.Content()), (this.Status())];
		}
	};
	($mol_mem(($.$mol_card.prototype), "Content"));
	($mol_mem(($.$mol_card.prototype), "Status"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_card extends $.$mol_card {
            rows() {
                return [
                    this.Content(),
                    ...this.status_text() ? [this.Status()] : [],
                ];
            }
        }
        $$.$mol_card = $mol_card;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/card/card.view.css", "[mol_card] {\n\tbackground: var(--mol_theme_card);\n\tcolor: var(--mol_theme_text);\n\tborder-radius: var(--mol_gap_round);\n\tdisplay: flex;\n\tflex: 0 1 auto;\n\tflex-direction: column;\n\tposition: relative;\n\tbox-shadow: 0 0 0.5rem 0rem hsla(0,0%,0%,.125);\n\t/* overflow: hidden; */\n}\n\n[mol_card_content] {\n\tflex: 1 1 auto;\n\tborder-radius: var(--mol_gap_round);\n\tmargin: 0;\n\tpadding: var(--mol_gap_block);\n}\n\n[mol_card_status] {\n\tbackground: var(--mol_theme_line);\n\tpadding: var(--mol_gap_text);\n\tmargin: 0;\n}\n\n[mol_card_status] {\n\tbackground: var(--mol_theme_line);\n}\n");
})($ || ($ = {}));

;
	($.$mol_hotkey) = class $mol_hotkey extends ($.$mol_plugin) {
		keydown(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.keydown(next))};
		}
		key(){
			return {};
		}
		mod_ctrl(){
			return false;
		}
		mod_alt(){
			return false;
		}
		mod_shift(){
			return false;
		}
	};
	($mol_mem(($.$mol_hotkey.prototype), "keydown"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== (event.ctrlKey || event.metaKey))
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_string) = class $mol_string extends ($.$mol_view) {
		selection_watcher(){
			return null;
		}
		error_report(){
			return null;
		}
		disabled(){
			return false;
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		value_changed(next){
			return (this.value(next));
		}
		hint(){
			return "";
		}
		hint_visible(){
			return (this.hint());
		}
		spellcheck(){
			return true;
		}
		autocomplete_native(){
			return "";
		}
		selection_end(){
			return 0;
		}
		selection_start(){
			return 0;
		}
		keyboard(){
			return "text";
		}
		enter(){
			return "go";
		}
		length_max(){
			return +Infinity;
		}
		type(next){
			if(next !== undefined) return next;
			return "text";
		}
		event_change(next){
			if(next !== undefined) return next;
			return null;
		}
		submit_with_ctrl(){
			return false;
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		Submit(){
			const obj = new this.$.$mol_hotkey();
			(obj.mod_ctrl) = () => ((this.submit_with_ctrl()));
			(obj.key) = () => ({"enter": (next) => (this.submit(next))});
			return obj;
		}
		dom_name(){
			return "input";
		}
		enabled(){
			return true;
		}
		minimal_height(){
			return 40;
		}
		autocomplete(){
			return false;
		}
		selection(next){
			if(next !== undefined) return next;
			return [0, 0];
		}
		auto(){
			return [(this.selection_watcher()), (this.error_report())];
		}
		field(){
			return {
				...(super.field()), 
				"disabled": (this.disabled()), 
				"value": (this.value_changed()), 
				"placeholder": (this.hint_visible()), 
				"spellcheck": (this.spellcheck()), 
				"autocomplete": (this.autocomplete_native()), 
				"selectionEnd": (this.selection_end()), 
				"selectionStart": (this.selection_start()), 
				"inputMode": (this.keyboard()), 
				"enterkeyhint": (this.enter())
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"maxlength": (this.length_max()), 
				"type": (this.type())
			};
		}
		event(){
			return {...(super.event()), "input": (next) => (this.event_change(next))};
		}
		plugins(){
			return [(this.Submit())];
		}
	};
	($mol_mem(($.$mol_string.prototype), "value"));
	($mol_mem(($.$mol_string.prototype), "type"));
	($mol_mem(($.$mol_string.prototype), "event_change"));
	($mol_mem(($.$mol_string.prototype), "submit"));
	($mol_mem(($.$mol_string.prototype), "Submit"));
	($mol_mem(($.$mol_string.prototype), "selection"));


;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                const el = this.dom_node();
                const from = el.selectionStart;
                const to = el.selectionEnd;
                try {
                    el.value = this.value_changed(el.value);
                }
                catch (error) {
                    const el = this.dom_node();
                    if (error instanceof Error) {
                        el.setCustomValidity(error.message);
                        el.reportValidity();
                    }
                    $mol_fail_hidden(error);
                }
                if (to === null)
                    return;
                el.selectionEnd = to;
                el.selectionStart = from;
                this.selection_change(next);
            }
            error_report() {
                try {
                    if (this.focused())
                        this.value();
                }
                catch (error) {
                    const el = this.dom_node();
                    if (error instanceof Error) {
                        el.setCustomValidity(error.message);
                        el.reportValidity();
                    }
                }
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', $mol_wire_async(event => this.selection_change(event)));
            }
            selection_change(event) {
                const el = this.dom_node();
                if (el !== this.$.$mol_dom_context.document.activeElement)
                    return;
                const [from, to] = this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
                el.selectionEnd = to;
                el.selectionStart = from;
                if (to !== from && el.selectionEnd === el.selectionStart) {
                    el.selectionEnd = to;
                }
            }
            selection_start() {
                const el = this.dom_node();
                if (!this.focused())
                    return undefined;
                if (el.selectionStart == null)
                    return undefined;
                return this.selection()[0];
            }
            selection_end() {
                const el = this.dom_node();
                if (!this.focused())
                    return undefined;
                if (el.selectionEnd == null)
                    return undefined;
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_action
        ], $mol_string.prototype, "event_change", null);
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "error_report", null);
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:where(:not(:disabled)) {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:where(:not(:disabled)):hover {\n\tbox-shadow: inset 0 0 0 2px var(--mol_theme_line);\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::placeholder {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_labeler) = class $mol_labeler extends ($.$mol_list) {
		label(){
			return [(this.title())];
		}
		Label(){
			const obj = new this.$.$mol_view();
			(obj.minimal_height) = () => (32);
			(obj.sub) = () => ((this.label()));
			return obj;
		}
		content(){
			return [];
		}
		Content(){
			const obj = new this.$.$mol_view();
			(obj.minimal_height) = () => (24);
			(obj.sub) = () => ((this.content()));
			return obj;
		}
		rows(){
			return [(this.Label()), (this.Content())];
		}
	};
	($mol_mem(($.$mol_labeler.prototype), "Label"));
	($mol_mem(($.$mol_labeler.prototype), "Content"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tmin-height: 2rem;\n\tcolor: var(--mol_theme_shade);\n\tpadding: .5rem .75rem 0;\n\tgap: 0 var(--mol_gap_block);\n\tflex-wrap: wrap;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n\tpadding: var(--mol_gap_text);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_chevron) = class $mol_icon_chevron extends ($.$mol_icon) {
		path(){
			return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
		}
	};


;
"use strict";

;
	($.$mol_icon_chevron_left) = class $mol_icon_chevron_left extends ($.$mol_icon) {
		path(){
			return "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_chevron_right) = class $mol_icon_chevron_right extends ($.$mol_icon) {
		path(){
			return "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
		}
	};


;
"use strict";

;
	($.$mol_number) = class $mol_number extends ($.$mol_view) {
		precision(){
			return 1;
		}
		event_dec(next){
			if(next !== undefined) return next;
			return null;
		}
		event_inc(next){
			if(next !== undefined) return next;
			return null;
		}
		event_dec_boost(next){
			if(next !== undefined) return next;
			return null;
		}
		event_inc_boost(next){
			if(next !== undefined) return next;
			return null;
		}
		Hotkey(){
			const obj = new this.$.$mol_hotkey();
			(obj.key) = () => ({
				"down": (next) => (this.event_dec(next)), 
				"up": (next) => (this.event_inc(next)), 
				"pageDown": (next) => (this.event_dec_boost(next)), 
				"pageUp": (next) => (this.event_inc_boost(next))
			});
			return obj;
		}
		dec_enabled(){
			return (this.enabled());
		}
		dec_icon(){
			const obj = new this.$.$mol_icon_chevron_left();
			return obj;
		}
		Dec(){
			const obj = new this.$.$mol_button_minor();
			(obj.event_click) = (next) => ((this.event_dec(next)));
			(obj.enabled) = () => ((this.dec_enabled()));
			(obj.sub) = () => ([(this.dec_icon())]);
			return obj;
		}
		type(){
			return "text";
		}
		value_string(next){
			if(next !== undefined) return next;
			return "";
		}
		hint(){
			return " ";
		}
		string_enabled(){
			return (this.enabled());
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		String(){
			const obj = new this.$.$mol_string();
			(obj.type) = () => ((this.type()));
			(obj.keyboard) = () => ("decimal");
			(obj.value) = (next) => ((this.value_string(next)));
			(obj.hint) = () => ((this.hint()));
			(obj.enabled) = () => ((this.string_enabled()));
			(obj.submit) = (next) => ((this.submit(next)));
			return obj;
		}
		inc_enabled(){
			return (this.enabled());
		}
		inc_icon(){
			const obj = new this.$.$mol_icon_chevron_right();
			return obj;
		}
		Inc(){
			const obj = new this.$.$mol_button_minor();
			(obj.event_click) = (next) => ((this.event_inc(next)));
			(obj.enabled) = () => ((this.inc_enabled()));
			(obj.sub) = () => ([(this.inc_icon())]);
			return obj;
		}
		precision_view(){
			return (this.precision());
		}
		precision_change(){
			return (this.precision());
		}
		boost(){
			return 10;
		}
		value_min(){
			return -Infinity;
		}
		value_max(){
			return +Infinity;
		}
		value(next){
			if(next !== undefined) return next;
			return +NaN;
		}
		enabled(){
			return true;
		}
		plugins(){
			return [(this.Hotkey())];
		}
		sub(){
			return [
				(this.Dec()), 
				(this.String()), 
				(this.Inc())
			];
		}
	};
	($mol_mem(($.$mol_number.prototype), "event_dec"));
	($mol_mem(($.$mol_number.prototype), "event_inc"));
	($mol_mem(($.$mol_number.prototype), "event_dec_boost"));
	($mol_mem(($.$mol_number.prototype), "event_inc_boost"));
	($mol_mem(($.$mol_number.prototype), "Hotkey"));
	($mol_mem(($.$mol_number.prototype), "dec_icon"));
	($mol_mem(($.$mol_number.prototype), "Dec"));
	($mol_mem(($.$mol_number.prototype), "value_string"));
	($mol_mem(($.$mol_number.prototype), "submit"));
	($mol_mem(($.$mol_number.prototype), "String"));
	($mol_mem(($.$mol_number.prototype), "inc_icon"));
	($mol_mem(($.$mol_number.prototype), "Inc"));
	($mol_mem(($.$mol_number.prototype), "value"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/number/number.css", "[mol_number] {\n\tdisplay: flex;\n\tflex: 0 1 auto;\n\tposition: relative;\n\talign-items: stretch;\n\tmax-width: 100%;\n}\n\n[mol_number_string] {\n\tappearance: textfield;\n\tflex: 1 1 7rem;\n\twidth: 7rem;\n}\n\n[mol_number_string]::-webkit-inner-spin-button {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_number extends $.$mol_number {
            value_limited(val) {
                if (Number.isNaN(val))
                    return this.value(val);
                if (val === undefined)
                    return this.value();
                const min = this.value_min();
                const max = this.value_max();
                if (val < min)
                    return this.value(min);
                if (val > max)
                    return this.value(max);
                return this.value(val);
            }
            event_dec(next) {
                this.value_limited((this.value_limited() || 0) - this.precision_change());
                next?.preventDefault();
            }
            event_inc(next) {
                this.value_limited((this.value_limited() || 0) + this.precision_change());
                next?.preventDefault();
            }
            event_dec_boost(next) {
                this.value_limited((this.value_limited() || 0) - this.precision_change() * this.boost());
                next?.preventDefault();
            }
            event_inc_boost(next) {
                this.value_limited((this.value_limited() || 0) + this.precision_change() * this.boost());
                next?.preventDefault();
            }
            round(val) {
                if (Number.isNaN(val))
                    return '';
                if (val === 0)
                    return '0';
                if (!val)
                    return '';
                const precision_view = this.precision_view();
                if (!precision_view)
                    return val.toFixed();
                if (precision_view >= 1) {
                    return (val / precision_view).toFixed();
                }
                else {
                    const fixed_number = Math.log10(1 / precision_view);
                    return val.toFixed(Math.ceil(fixed_number));
                }
            }
            value_string(next) {
                const current = this.round(this.value_limited());
                if (next === undefined)
                    return current;
                const precision = this.precision_view();
                if (precision - Math.floor(precision) === 0)
                    next = next.replace(/[.,]/g, '');
                next = (this.value_min() < 0 && next.startsWith('-') ? '-' : '')
                    + next.replace(/,/g, '.').replace(/[^\d\.]/g, '').replace(/^0{2,}/, '0');
                let dot_pos = next.indexOf('.');
                if (dot_pos !== -1) {
                    const prev = $mol_wire_probe(() => this.value_string()) ?? '';
                    const dot_pos_prev = prev.indexOf('.');
                    if (dot_pos_prev === dot_pos)
                        dot_pos = next.lastIndexOf('.');
                    const frac = next.slice(dot_pos + 1).replace(/\./g, '');
                    next = (next.slice(0, dot_pos) || '0').replace(/\./g, '') + '.' + frac;
                }
                if (Number.isNaN(Number(next)))
                    return next;
                if (next.endsWith('.'))
                    return next;
                if (next.endsWith('-'))
                    return next;
                this.value_limited(Number(next || Number.NaN));
                return next;
            }
            dec_enabled() {
                return this.enabled() && (!((this.value() || 0) <= this.value_min()));
            }
            inc_enabled() {
                return this.enabled() && (!((this.value() || 0) >= this.value_max()));
            }
        }
        __decorate([
            $mol_mem
        ], $mol_number.prototype, "value_string", null);
        __decorate([
            $mol_mem
        ], $mol_number.prototype, "dec_enabled", null);
        __decorate([
            $mol_mem
        ], $mol_number.prototype, "inc_enabled", null);
        $$.$mol_number = $mol_number;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_icon_tick) = class $mol_icon_tick extends ($.$mol_icon) {
		path(){
			return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
		}
	};


;
"use strict";

;
	($.$mol_check_box) = class $mol_check_box extends ($.$mol_check) {
		Icon(){
			const obj = new this.$.$mol_icon_tick();
			return obj;
		}
	};
	($mol_mem(($.$mol_check_box.prototype), "Icon"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/box/box.view.css", "[mol_check_box_icon] {\n\tborder-radius: var(--mol_gap_round);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n\tcolor: var(--mol_theme_shade);\n\theight: 1rem;\n\talign-self: center;\n}\n\n[mol_check]:not([mol_check_checked]) > [mol_check_box_icon] {\n\tfill: transparent;\n}\n\n[mol_check]:not([disabled]) > [mol_check_box_icon] {\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$apxutechtop_samosbor_map_area) = class $apxutechtop_samosbor_map_area extends ($.$mol_view) {
		isDragging(next){
			if(next !== undefined) return next;
			return false;
		}
		event_wheel(next){
			if(next !== undefined) return next;
			return null;
		}
		event_key(next){
			if(next !== undefined) return next;
			return null;
		}
		event_mouse_down(next){
			if(next !== undefined) return next;
			return null;
		}
		event_mouse_move(next){
			if(next !== undefined) return next;
			return null;
		}
		event_mouse_up(next){
			if(next !== undefined) return next;
			return null;
		}
		position_style(){
			return "";
		}
		scale_style(){
			return "";
		}
		items(){
			return [];
		}
		Plane(){
			const obj = new this.$.$mol_view();
			(obj.minimal_width) = () => (0);
			(obj.minimal_height) = () => (0);
			(obj.style) = () => ({"translate": (this.position_style()), "scale": (this.scale_style())});
			(obj.sub) = () => ([...(this.items())]);
			return obj;
		}
		zoom(){
			return 1;
		}
		attr(){
			return {"dragging": (this.isDragging())};
		}
		event(){
			return {
				"wheel": (next) => (this.event_wheel(next)), 
				"keypress": (next) => (this.event_key(next)), 
				"mousedown": (next) => (this.event_mouse_down(next)), 
				"mousemove": (next) => (this.event_mouse_move(next)), 
				"mouseup": (next) => (this.event_mouse_up(next))
			};
		}
		sub(){
			return [(this.Plane())];
		}
	};
	($mol_mem(($.$apxutechtop_samosbor_map_area.prototype), "isDragging"));
	($mol_mem(($.$apxutechtop_samosbor_map_area.prototype), "event_wheel"));
	($mol_mem(($.$apxutechtop_samosbor_map_area.prototype), "event_key"));
	($mol_mem(($.$apxutechtop_samosbor_map_area.prototype), "event_mouse_down"));
	($mol_mem(($.$apxutechtop_samosbor_map_area.prototype), "event_mouse_move"));
	($mol_mem(($.$apxutechtop_samosbor_map_area.prototype), "event_mouse_up"));
	($mol_mem(($.$apxutechtop_samosbor_map_area.prototype), "Plane"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $apxutechtop_samosbor_map_area extends $.$apxutechtop_samosbor_map_area {
            constructor() {
                super();
                this.log();
            }
            position(next = [0, 0]) {
                return next;
            }
            pos_x(next) {
                return this.position()[0] + "px";
            }
            pos_y(next) {
                return this.position()[1] + "px";
            }
            position_style() {
                return `${this.pos_x()} ${this.pos_y()}`;
            }
            transform_style() {
                const transform = `${this.position_style()} ${this.scale_style()}`;
                return transform;
            }
            size(next = [
                this.dom_node_actual().offsetWidth,
                this.dom_node_actual().offsetHeight,
            ]) {
                return next;
            }
            isDragging(next = false) {
                return next;
            }
            dragStartPos(next = [0, 0]) {
                return next;
            }
            center() {
                return [
                    this.size()[0] / 2,
                    this.size()[1] / 2
                ];
            }
            zoom(next = 1) {
                return next;
            }
            zoomLimits(next = [0.1, 6]) {
                return next;
            }
            scale_style() {
                return `${this.zoom()}`;
            }
            zoom_at(new_zoom, offset = { x: this.position()[0], y: this.position()[1] }) {
                const current_zoom = this.zoom();
                const zoom_delta = new_zoom - current_zoom;
                const [area_pos_x, area_pos_y] = this.position();
                const plane_x = (offset.x - area_pos_x) / current_zoom;
                const plane_y = (offset.y - area_pos_y) / current_zoom;
                const dx = plane_x * zoom_delta;
                const dy = plane_y * zoom_delta;
                this.zoom(new_zoom);
                this.position([area_pos_x - dx, area_pos_y - dy]);
            }
            zoomIn(cursor_x, cursor_y) {
                const [min, max] = this.zoomLimits();
                const currentZoom = this.zoom();
                const newZoom = Math.min(max, currentZoom * 1.2);
                this.zoom_at(newZoom, { x: cursor_x, y: cursor_y });
            }
            zoomOut(cursor_x, cursor_y) {
                const [min, max] = this.zoomLimits();
                const currentZoom = this.zoom();
                const newZoom = Math.max(min, currentZoom / 1.2);
                this.zoom_at(newZoom, { x: cursor_x, y: cursor_y });
            }
            reset() {
                this.position([0, 0]);
                this.zoom(1);
            }
            event_wheel(event) {
                if (event.defaultPrevented)
                    return;
                console.log(event);
                const zoom_position_x = event.offsetX;
                const zoom_position_y = event.offsetY;
                if (event.deltaY >= 0) {
                    this.zoomOut(event.pageX, event.pageY);
                }
                else {
                    this.zoomIn(event.pageX, event.pageY);
                }
            }
            event_mouse_down(event) {
                console.log(event);
                if (event.button === 1) {
                    this.isDragging(true);
                    this.dragStartPos([event.clientX, event.clientY]);
                    event.stopPropagation();
                    event.preventDefault();
                }
            }
            event_mouse_move(event) {
                if (!this.isDragging())
                    return;
                const currentPos = this.position();
                this.position([
                    currentPos[0] + event.movementX,
                    currentPos[1] + event.movementY
                ]);
                event.preventDefault();
            }
            event_mouse_up(event) {
                if (event.button === 1) {
                    this.isDragging(false);
                    event.preventDefault();
                }
            }
            log() {
                console.log(this.zoom());
                console.log(this.isDragging());
            }
        }
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_area.prototype, "position", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_area.prototype, "pos_x", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_area.prototype, "pos_y", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_area.prototype, "position_style", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_area.prototype, "transform_style", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_area.prototype, "size", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_area.prototype, "isDragging", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_area.prototype, "dragStartPos", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_area.prototype, "center", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_area.prototype, "zoom", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_area.prototype, "zoomLimits", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_area.prototype, "scale_style", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_area.prototype, "zoom_at", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_area.prototype, "zoomIn", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_area.prototype, "zoomOut", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_area.prototype, "reset", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_area.prototype, "event_wheel", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_area.prototype, "event_mouse_down", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_area.prototype, "event_mouse_move", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_area.prototype, "event_mouse_up", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_area.prototype, "log", null);
        $$.$apxutechtop_samosbor_map_area = $apxutechtop_samosbor_map_area;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("apxutechtop/samosbor/map/area/area.view.css", "[apxutechtop_samosbor_map_area] {\n\twidth: 300px;\n\theight: 300px;\n\toverflow: hidden;\n\tborder: 2px solid seagreen;\n\tcursor: grab;\n\t&[dragging] {\n\t\tcursor: grabbing;\n\t}\n\tdisplay: block;\n}\n[apxutechtop_samosbor_map_area_plane] {\n\tposition: relative;\n\twidth: 0px;\n\theight: 0px;\n\t/* transition: translate 0.2s ease, scale 0.2s ease-out; */\n}\n");
})($ || ($ = {}));

;
	($.$apxutechtop_samosbor_map_block_row) = class $apxutechtop_samosbor_map_block_row extends ($.$mol_view) {
		sub(){
			return [null];
		}
	};
	($.$apxutechtop_samosbor_map_block_part) = class $apxutechtop_samosbor_map_block_part extends ($.$mol_view) {
		content(){
			return null;
		}
		sub(){
			return [(this.content())];
		}
	};
	($.$apxutechtop_samosbor_map_block_flight) = class $apxutechtop_samosbor_map_block_flight extends ($.$apxutechtop_samosbor_map_block_part) {};
	($.$apxutechtop_samosbor_map_block_passage) = class $apxutechtop_samosbor_map_block_passage extends ($.$mol_view) {
		type(next){
			if(next !== undefined) return next;
			return "normal";
		}
		flex_direction(){
			return "column";
		}
		floor_inc_value(){
			return "0";
		}
		floor_inc(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.floor_inc_value())]);
			return obj;
		}
		stairs(){
			const obj = new this.$.$apxutechtop_samosbor_map_icon_stairs();
			return obj;
		}
		content(){
			return null;
		}
		up(){
			return false;
		}
		right(){
			return false;
		}
		down(){
			return false;
		}
		left(){
			return false;
		}
		attr(){
			return {
				"type": (this.type()), 
				"up": (this.up()), 
				"right": (this.right()), 
				"down": (this.down()), 
				"left": (this.left())
			};
		}
		style(){
			return {"flex-direction": (this.flex_direction())};
		}
		InterFloor(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.floor_inc()), (this.stairs())]);
			return obj;
		}
		sub(){
			return [(this.content())];
		}
	};
	($mol_mem(($.$apxutechtop_samosbor_map_block_passage.prototype), "type"));
	($mol_mem(($.$apxutechtop_samosbor_map_block_passage.prototype), "floor_inc"));
	($mol_mem(($.$apxutechtop_samosbor_map_block_passage.prototype), "stairs"));
	($mol_mem(($.$apxutechtop_samosbor_map_block_passage.prototype), "InterFloor"));
	($.$apxutechtop_samosbor_map_block_middle_flight) = class $apxutechtop_samosbor_map_block_middle_flight extends ($.$mol_view) {};
	($.$apxutechtop_samosbor_map_block) = class $apxutechtop_samosbor_map_block extends ($.$mol_view) {
		block_direction(next){
			if(next !== undefined) return next;
			return "up";
		}
		visible(){
			return true;
		}
		selected(next){
			if(next !== undefined) return next;
			return false;
		}
		color_letter(){
			return "b";
		}
		block_type(next){
			if(next !== undefined) return next;
			return "destroyed";
		}
		left(next){
			if(next !== undefined) return next;
			return 0;
		}
		top(next){
			if(next !== undefined) return next;
			return 0;
		}
		onclick(next){
			if(next !== undefined) return next;
			return null;
		}
		connection_hidden(id){
			return false;
		}
		connection_highlight(id){
			return false;
		}
		connection_left(id){
			return 0;
		}
		connection_top(id){
			return 0;
		}
		connection_click(id, next){
			if(next !== undefined) return next;
			return null;
		}
		transition_hidden(id){
			return false;
		}
		transition_direction(id){
			return "vertical";
		}
		transition_left(id){
			return 0;
		}
		transition_top(id){
			return 0;
		}
		stairs_icon(id){
			const obj = new this.$.$apxutechtop_samosbor_map_icon_stairs();
			return obj;
		}
		elevator_icon(id){
			const obj = new this.$.$apxutechtop_samosbor_map_icon_elevator();
			return obj;
		}
		ladder_icon(id){
			const obj = new this.$.$apxutechtop_samosbor_map_icon_ladder();
			return obj;
		}
		ladder_elevator(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.ladder_icon(id)), (this.elevator_icon(id))]);
			return obj;
		}
		up_middle_passage_type(){
			return "noway";
		}
		up_middle_passage_click(next){
			if(next !== undefined) return next;
			return null;
		}
		down_middle_passage_type(){
			return "noway";
		}
		down_middle_passage_click(next){
			if(next !== undefined) return next;
			return null;
		}
		up_flight_icon(){
			const obj = new this.$.$apxutechtop_samosbor_map_icon_stairs();
			return obj;
		}
		down_flight_icon(){
			const obj = new this.$.$apxutechtop_samosbor_map_icon_stairs();
			return obj;
		}
		block_name(next){
			if(next !== undefined) return next;
			return "А-00";
		}
		BlockName(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.block_name())]);
			return obj;
		}
		display_floor(){
			return "?";
		}
		CurrentFloor(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Эт. ", (this.display_floor())]);
			return obj;
		}
		gen_icon(){
			const obj = new this.$.$apxutechtop_samosbor_map_icon_generator();
			return obj;
		}
		generator_floor_value(next){
			if(next !== undefined) return next;
			return 0;
		}
		generator_floor(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.generator_floor_value())]);
			return obj;
		}
		Generator(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.gen_icon()), (this.generator_floor())]);
			return obj;
		}
		connections(){
			return [];
		}
		connections_list(){
			return (this.connections());
		}
		transitions(){
			return [];
		}
		transitions_list(){
			return (this.transitions());
		}
		left_flight_click(next){
			if(next !== undefined) return next;
			return null;
		}
		left_flight(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_flight();
			(obj.event) = () => ({"click": (next) => (this.left_flight_click(next))});
			(obj.sub) = () => ([(this.left_flight_icon())]);
			return obj;
		}
		up_left_passage_type(){
			return "noway";
		}
		up_left_passage_click(next){
			if(next !== undefined) return next;
			return null;
		}
		up_left_passage(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_passage();
			(obj.type) = (next) => ((this.up_left_passage_type()));
			(obj.event) = () => ({"click": (next) => (this.up_left_passage_click(next))});
			(obj.up) = () => (true);
			(obj.left) = () => (true);
			return obj;
		}
		up_left_part(){
			return (this.name_part());
		}
		up_passage_or_flight(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		up_right_part(){
			return (this.info_part());
		}
		up_right_passage_type(){
			return "noway";
		}
		up_right_passage_click(next){
			if(next !== undefined) return next;
			return null;
		}
		up_right_passage(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_passage();
			(obj.type) = () => ((this.up_right_passage_type()));
			(obj.event) = () => ({"click": (next) => (this.up_right_passage_click(next))});
			(obj.up) = () => (true);
			(obj.right) = () => (true);
			return obj;
		}
		right_flight_click(next){
			if(next !== undefined) return next;
			return null;
		}
		right_flight(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_flight();
			(obj.event) = () => ({"click": (next) => (this.right_flight_click(next))});
			(obj.sub) = () => ([(this.right_flight_icon())]);
			return obj;
		}
		up_row(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_row();
			(obj.sub) = () => ([
				(this.left_flight()), 
				(this.up_left_passage()), 
				(this.up_left_part()), 
				(this.up_passage_or_flight()), 
				(this.up_right_part()), 
				(this.up_right_passage()), 
				(this.right_flight())
			]);
			return obj;
		}
		left_passage_type(){
			return "normal";
		}
		left_passage_click(next){
			if(next !== undefined) return next;
			return null;
		}
		left_passage(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_passage();
			(obj.type) = () => ((this.left_passage_type()));
			(obj.event) = () => ({"click": (next) => (this.left_passage_click(next))});
			(obj.left) = () => (true);
			return obj;
		}
		left_hallway(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		fence(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		right_hallway(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		right_passage_type(){
			return "normal";
		}
		right_passage_click(next){
			if(next !== undefined) return next;
			return null;
		}
		right_passage(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_passage();
			(obj.type) = () => ((this.right_passage_type()));
			(obj.event) = () => ({"click": (next) => (this.right_passage_click(next))});
			(obj.right) = () => (true);
			return obj;
		}
		middle_row(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.left_passage()), 
				(this.left_hallway()), 
				(this.fence()), 
				(this.right_hallway()), 
				(this.right_passage())
			]);
			return obj;
		}
		max_floor_icon(){
			const obj = new this.$.$apxutechtop_samosbor_map_icon_max_floor();
			return obj;
		}
		max_floor(next){
			if(next !== undefined) return next;
			return 0;
		}
		max_floor_value(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.max_floor())]);
			return obj;
		}
		max_floor_view(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.max_floor_icon()), (this.max_floor_value())]);
			return obj;
		}
		min_floor_icon(){
			const obj = new this.$.$apxutechtop_samosbor_map_icon_min_floor();
			return obj;
		}
		min_floor(next){
			if(next !== undefined) return next;
			return 0;
		}
		min_floor_value(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.min_floor())]);
			return obj;
		}
		min_floor_view(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.min_floor_icon()), (this.min_floor_value())]);
			return obj;
		}
		floor_part(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_part();
			(obj.sub) = () => ([(this.max_floor_view()), (this.min_floor_view())]);
			return obj;
		}
		down_left_passage_type(){
			return "noway";
		}
		down_left_passage_click(next){
			if(next !== undefined) return next;
			return null;
		}
		down_left_passage(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_passage();
			(obj.type) = () => ((this.down_left_passage_type()));
			(obj.event) = () => ({"click": (next) => (this.down_left_passage_click(next))});
			(obj.down) = () => (true);
			(obj.left) = () => (true);
			return obj;
		}
		down_left_part(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_part();
			return obj;
		}
		down_passage_or_flight(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		down_right_part(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_part();
			return obj;
		}
		down_right_passage_type(){
			return "noway";
		}
		down_right_passage_click(next){
			if(next !== undefined) return next;
			return null;
		}
		down_right_passage(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_passage();
			(obj.type) = () => ((this.down_right_passage_type()));
			(obj.event) = () => ({"click": (next) => (this.down_right_passage_click(next))});
			(obj.down) = () => (true);
			(obj.right) = () => (true);
			return obj;
		}
		block_effects_part(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_part();
			return obj;
		}
		down_row(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_row();
			(obj.sub) = () => ([
				(this.floor_part()), 
				(this.down_left_passage()), 
				(this.down_left_part()), 
				(this.down_passage_or_flight()), 
				(this.down_right_part()), 
				(this.down_right_passage()), 
				(this.block_effects_part())
			]);
			return obj;
		}
		content(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				...(this.connections_list()), 
				...(this.transitions_list()), 
				(this.up_row()), 
				(this.middle_row()), 
				(this.down_row())
			]);
			return obj;
		}
		edit_mode(next){
			if(next !== undefined) return next;
			return false;
		}
		create_mode(next){
			if(next !== undefined) return next;
			return false;
		}
		connect_mode(next){
			if(next !== undefined) return next;
			return false;
		}
		block_data(next){
			if(next !== undefined) return next;
			return null;
		}
		block_layer(next){
			if(next !== undefined) return next;
			return 0;
		}
		current_layer(next){
			if(next !== undefined) return next;
			return 0;
		}
		pos_x(next){
			if(next !== undefined) return next;
			return 0;
		}
		pos_y(next){
			if(next !== undefined) return next;
			return 0;
		}
		is_up_flight(next){
			if(next !== undefined) return next;
			return false;
		}
		is_down_flight(next){
			if(next !== undefined) return next;
			return false;
		}
		on_connection_select(next){
			if(next !== undefined) return next;
			return null;
		}
		attr(){
			return {
				"direction": (this.block_direction()), 
				"visible": (this.visible()), 
				"selected": (this.selected()), 
				"editing": (this.edit_mode()), 
				"color": (this.color_letter()), 
				"block-type": (this.block_type())
			};
		}
		style(){
			return {"left": (this.left()), "top": (this.top())};
		}
		event(){
			return {"click": (next) => (this.onclick(next))};
		}
		Connection(id){
			const obj = new this.$.$mol_view();
			(obj.attr) = () => ({"hidden": (this.connection_hidden(id)), "highlight": (this.connection_highlight(id))});
			(obj.style) = () => ({"left": (this.connection_left(id)), "top": (this.connection_top(id))});
			(obj.event) = () => ({"click": (next) => (this.connection_click(id, next))});
			return obj;
		}
		Transition(id){
			const obj = new this.$.$mol_view();
			(obj.attr) = () => ({"hidden": (this.transition_hidden(id)), "direction": (this.transition_direction(id))});
			(obj.style) = () => ({"left": (this.transition_left(id)), "top": (this.transition_top(id))});
			return obj;
		}
		show_connections(next){
			if(next !== undefined) return next;
			return false;
		}
		flight_icons(id){
			return {
				"stairs": (this.stairs_icon(id)), 
				"elevator": (this.elevator_icon(id)), 
				"ladder_elevator": (this.ladder_elevator(id))
			};
		}
		up_middle_passage(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_passage();
			(obj.type) = (next) => ((this.up_middle_passage_type()));
			(obj.event) = () => ({"click": (next) => (this.up_middle_passage_click(next))});
			(obj.up) = () => (true);
			return obj;
		}
		down_middle_passage(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_passage();
			(obj.type) = (next) => ((this.down_middle_passage_type()));
			(obj.event) = () => ({"click": (next) => (this.down_middle_passage_click(next))});
			(obj.down) = () => (true);
			return obj;
		}
		up_flight(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_middle_flight();
			(obj.sub) = () => ([(this.up_flight_icon())]);
			return obj;
		}
		down_flight(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_middle_flight();
			(obj.sub) = () => ([(this.down_flight_icon())]);
			return obj;
		}
		name_part(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_part();
			(obj.sub) = () => ([(this.BlockName()), (this.CurrentFloor())]);
			return obj;
		}
		info_part(){
			const obj = new this.$.$apxutechtop_samosbor_map_block_part();
			(obj.sub) = () => ([(this.Generator())]);
			return obj;
		}
		sub(){
			return [(this.content())];
		}
	};
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "block_direction"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "selected"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "block_type"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "left"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "top"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "onclick"));
	($mol_mem_key(($.$apxutechtop_samosbor_map_block.prototype), "connection_click"));
	($mol_mem_key(($.$apxutechtop_samosbor_map_block.prototype), "stairs_icon"));
	($mol_mem_key(($.$apxutechtop_samosbor_map_block.prototype), "elevator_icon"));
	($mol_mem_key(($.$apxutechtop_samosbor_map_block.prototype), "ladder_icon"));
	($mol_mem_key(($.$apxutechtop_samosbor_map_block.prototype), "ladder_elevator"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "up_middle_passage_click"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "down_middle_passage_click"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "up_flight_icon"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "down_flight_icon"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "block_name"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "BlockName"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "CurrentFloor"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "gen_icon"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "generator_floor_value"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "generator_floor"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "Generator"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "left_flight_click"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "left_flight"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "up_left_passage_click"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "up_left_passage"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "up_passage_or_flight"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "up_right_passage_click"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "up_right_passage"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "right_flight_click"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "right_flight"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "up_row"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "left_passage_click"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "left_passage"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "left_hallway"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "fence"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "right_hallway"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "right_passage_click"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "right_passage"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "middle_row"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "max_floor_icon"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "max_floor"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "max_floor_value"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "max_floor_view"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "min_floor_icon"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "min_floor"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "min_floor_value"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "min_floor_view"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "floor_part"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "down_left_passage_click"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "down_left_passage"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "down_left_part"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "down_passage_or_flight"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "down_right_part"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "down_right_passage_click"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "down_right_passage"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "block_effects_part"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "down_row"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "content"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "edit_mode"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "create_mode"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "connect_mode"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "block_data"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "block_layer"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "current_layer"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "pos_x"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "pos_y"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "is_up_flight"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "is_down_flight"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "on_connection_select"));
	($mol_mem_key(($.$apxutechtop_samosbor_map_block.prototype), "Connection"));
	($mol_mem_key(($.$apxutechtop_samosbor_map_block.prototype), "Transition"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "show_connections"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "up_middle_passage"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "down_middle_passage"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "up_flight"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "down_flight"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "name_part"));
	($mol_mem(($.$apxutechtop_samosbor_map_block.prototype), "info_part"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    let $hyoo_crus_part;
    (function ($hyoo_crus_part) {
        $hyoo_crus_part[$hyoo_crus_part["land"] = 3] = "land";
        $hyoo_crus_part[$hyoo_crus_part["face"] = 11] = "face";
        $hyoo_crus_part[$hyoo_crus_part["pass"] = 255] = "pass";
        $hyoo_crus_part[$hyoo_crus_part["gift"] = 247] = "gift";
        $hyoo_crus_part[$hyoo_crus_part["sand"] = 8] = "sand";
        $hyoo_crus_part[$hyoo_crus_part["rock"] = 5] = "rock";
        $hyoo_crus_part[$hyoo_crus_part["root"] = 1] = "root";
        $hyoo_crus_part[$hyoo_crus_part["buck"] = 9] = "buck";
    })($hyoo_crus_part = $.$hyoo_crus_part || ($.$hyoo_crus_part = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode(src) {
        throw new Error('Not implemented');
    }
    $.$mol_base64_encode = $mol_base64_encode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode_node(str) {
        if (!str)
            return '';
        if (Buffer.isBuffer(str))
            return str.toString('base64');
        return Buffer.from(str).toString('base64');
    }
    $.$mol_base64_encode_node = $mol_base64_encode_node;
    $.$mol_base64_encode = $mol_base64_encode_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode(base64) {
        throw new Error('Not implemented');
    }
    $.$mol_base64_decode = $mol_base64_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode_node(base64Str) {
        base64Str = base64Str.replace(/-/g, '+').replace(/_/g, '/');
        const buffer = Buffer.from(base64Str, 'base64');
        return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    $.$mol_base64_decode_node = $mol_base64_decode_node;
    $.$mol_base64_decode = $mol_base64_decode_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_ae_encode(buffer) {
        return $mol_base64_encode(buffer).replace(/\+/g, 'æ').replace(/\//g, 'Æ').replace(/=/g, '');
    }
    $.$mol_base64_ae_encode = $mol_base64_ae_encode;
    function $mol_base64_ae_decode(str) {
        return $mol_base64_decode(str.replace(/æ/g, '+').replace(/Æ/g, '/'));
    }
    $.$mol_base64_ae_decode = $mol_base64_ae_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_buffer extends DataView {
        [Symbol.toStringTag] = this.constructor.name + '<>';
        static from(array) {
            if (typeof array === 'number')
                array = new Uint8Array(array);
            if (typeof array === 'string')
                array = $mol_base64_ae_decode(array);
            return new this(array.buffer, array.byteOffset, array.byteLength);
        }
        static toString() {
            return $$.$mol_func_name(this);
        }
        getUint48(offset, LE = false) {
            if (offset % 4) {
                return this.getUint16(offset, LE) + this.getUint32(offset + 2, LE) * 2 ** 16;
            }
            else {
                return this.getUint32(offset, LE) + this.getUint16(offset + 4, LE) * 2 ** 32;
            }
        }
        setUint48(offset, value, LE = false) {
            if (offset % 4) {
                this.setUint16(offset, value & ((1 << 16) - 1), LE);
                this.setUint32(offset + 2, (value / 2 ** 16) | 0, LE);
            }
            else {
                this.setUint32(offset, value | 0, LE);
                this.setUint16(offset + 4, (value / 2 ** 32) | 0, LE);
            }
        }
        int8(offset, next) {
            if (next === undefined)
                return this.getInt8(offset);
            if (next >= -(2 ** 7) && next < 2 ** 7)
                return this.setInt8(offset, next), next;
            $mol_fail(new Error(`Wrong int8 value ${next}`));
        }
        uint8(offset, next) {
            if (next === undefined)
                return this.getUint8(offset);
            if (next >= 0 && next < 2 ** 8)
                return this.setUint8(offset, next), next;
            $mol_fail(new Error(`Wrong uint8 value ${next}`));
        }
        int16(offset, next) {
            if (next === undefined)
                return this.getInt16(offset, true);
            if (next >= -(2 ** 15) && next < 2 ** 15)
                return this.setInt16(offset, next, true), next;
            $mol_fail(new Error(`Wrong int16 value ${next}`));
        }
        uint16(offset, next) {
            if (next === undefined)
                return this.getUint16(offset, true);
            if (next >= 0 && next < 2 ** 16)
                return this.setUint16(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint16 value ${next}`));
        }
        int32(offset, next) {
            if (next === undefined)
                return this.getInt32(offset, true);
            if (next >= -(2 ** 31) && next < 2 ** 31)
                return this.setInt32(offset, next, true), next;
            $mol_fail(new Error(`Wrong int32 value ${next}`));
        }
        uint32(offset, next) {
            if (next === undefined)
                return this.getUint32(offset, true);
            if (next >= 0 && next < 2 ** 32)
                return this.setUint32(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint32 value ${next}`));
        }
        uint48(offset, next) {
            if (next === undefined)
                return this.getUint48(offset, true);
            if (next >= 0 && next < 2 ** 48)
                return this.setUint48(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint48 value ${next}`));
        }
        int64(offset, next) {
            if (next === undefined)
                return this.getBigInt64(offset, true);
            if (next >= -(2 ** 63) && next < 2 ** 63)
                return this.setBigInt64(offset, next, true), next;
            $mol_fail(new Error(`Wrong int64 value ${next}`));
        }
        uint64(offset, next) {
            if (next === undefined)
                return this.getBigUint64(offset, true);
            if (next >= 0 && next < 2 ** 64)
                return this.setBigUint64(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint64 value ${next}`));
        }
        float32(offset, next) {
            if (next !== undefined)
                this.setFloat32(offset, next, true);
            return this.getFloat32(offset, true);
        }
        float64(offset, next) {
            if (next !== undefined)
                this.setFloat64(offset, next, true);
            return this.getFloat64(offset, true);
        }
        asArray() {
            return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
        }
        toString() {
            return $mol_base64_ae_encode(this.asArray());
        }
    }
    $.$mol_buffer = $mol_buffer;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_data_tagged(config) {
        return config;
    }
    $.$mol_data_tagged = $mol_data_tagged;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$hyoo_crus_ref = $mol_data_tagged({ $hyoo_crus_ref: (val) => {
            if (typeof val === 'string')
                val = Symbol.for(val.replace(/_+$/, ''));
            if (/^(([a-zæA-ZÆ0-9]{8})?_){0,3}([a-zæA-ZÆ0-9]{8})?$/.test(val.description))
                return val;
            $mol_fail(new Error(`Wrong ref (${val.description})`));
        } }).$hyoo_crus_ref;
    function $hyoo_crus_ref_check(val) {
        try {
            $.$hyoo_crus_ref(val);
            return val;
        }
        catch {
            return '';
        }
    }
    $.$hyoo_crus_ref_check = $hyoo_crus_ref_check;
    function $hyoo_crus_ref_lord(ref) {
        return $.$hyoo_crus_ref(ref.description.split('_').slice(0, 2).join('_'));
    }
    $.$hyoo_crus_ref_lord = $hyoo_crus_ref_lord;
    function $hyoo_crus_ref_land(ref) {
        return $.$hyoo_crus_ref(ref.description.split('_').slice(0, 3).join('_').replace(/_$/, ''));
    }
    $.$hyoo_crus_ref_land = $hyoo_crus_ref_land;
    function $hyoo_crus_ref_peer(ref) {
        return ref.description.split('_')[0] ?? '';
    }
    $.$hyoo_crus_ref_peer = $hyoo_crus_ref_peer;
    function $hyoo_crus_ref_area(ref) {
        return ref.description.split('_')[2] ?? '';
    }
    $.$hyoo_crus_ref_area = $hyoo_crus_ref_area;
    function $hyoo_crus_ref_head(ref) {
        return ref.description.split('_')[3] ?? '';
    }
    $.$hyoo_crus_ref_head = $hyoo_crus_ref_head;
    function $hyoo_crus_ref_encode(ref) {
        return $mol_base64_ae_decode((ref.description || '_')
            .split('_')
            .map(numb => numb || 'AAAAAAAA')
            .join(''));
    }
    $.$hyoo_crus_ref_encode = $hyoo_crus_ref_encode;
    function $hyoo_crus_ref_decode(bin) {
        return $.$hyoo_crus_ref([...$mol_base64_ae_encode(bin).match(/(.{8})/g) ?? []]
            .map(numb => numb === 'AAAAAAAA' ? '' : numb)
            .join('_').replace(/_+$/, ''));
    }
    $.$hyoo_crus_ref_decode = $hyoo_crus_ref_decode;
    function $hyoo_crus_ref_relate(base, ref) {
        base = $hyoo_crus_ref_land(base);
        if ($hyoo_crus_ref_land(ref) !== base)
            return ref;
        const head = $hyoo_crus_ref_head(ref);
        return $.$hyoo_crus_ref(head ? '___' + head : '');
    }
    $.$hyoo_crus_ref_relate = $hyoo_crus_ref_relate;
    function $hyoo_crus_ref_resolve(base, ref) {
        if (!ref.description)
            return $hyoo_crus_ref_land(base);
        if (!ref.description.startsWith('___'))
            return ref;
        const parts = base.description.split('_').slice(0, 3);
        while (parts.length < 3)
            parts.push('');
        parts.push(ref.description.slice(3));
        return $.$hyoo_crus_ref(parts.join('_'));
    }
    $.$hyoo_crus_ref_resolve = $hyoo_crus_ref_resolve;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_data_setup(value, config) {
        return Object.assign(value, {
            config,
            Value: null
        });
    }
    $.$mol_data_setup = $mol_data_setup;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_func_is_class(func) {
        return Object.getOwnPropertyDescriptor(func, 'prototype')?.writable === false;
    }
    $.$mol_func_is_class = $mol_func_is_class;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_data_pipe(...funcs) {
        return $mol_data_setup(function (input) {
            let value = input;
            for (const func of funcs)
                value = $mol_func_is_class(func) ? new func(value) : func.call(this, value);
            return value;
        }, { funcs });
    }
    $.$mol_data_pipe = $mol_data_pipe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_data_error extends $mol_error_mix {
    }
    $.$mol_data_error = $mol_data_error;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_data_number = (val) => {
        if (typeof val === 'number')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a number`));
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_data_integer(val) {
        const val2 = $mol_data_number(val);
        if (Math.floor(val2) === val2)
            return val2;
        return $mol_fail(new $mol_data_error(`${val} is not an integer`));
    }
    $.$mol_data_integer = $mol_data_integer;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$hyoo_crus_rank = $mol_data_tagged({
        $hyoo_crus_rank: $mol_data_pipe($mol_data_integer, (rank) => {
            if (rank >= $.$hyoo_crus_rank_deny && rank <= $.$hyoo_crus_rank_rule)
                return rank;
            $mol_fail(new $mol_data_error(`${rank} is out of Ran range`));
        }),
    }).$hyoo_crus_rank;
    function $hyoo_crus_rank_make(tier, fame) {
        return ($hyoo_crus_rank_tier[tier] | $hyoo_crus_rank_rate[fame]);
    }
    $.$hyoo_crus_rank_make = $hyoo_crus_rank_make;
    let $hyoo_crus_rank_tier;
    (function ($hyoo_crus_rank_tier) {
        $hyoo_crus_rank_tier[$hyoo_crus_rank_tier["deny"] = 0] = "deny";
        $hyoo_crus_rank_tier[$hyoo_crus_rank_tier["read"] = 16] = "read";
        $hyoo_crus_rank_tier[$hyoo_crus_rank_tier["join"] = 48] = "join";
        $hyoo_crus_rank_tier[$hyoo_crus_rank_tier["post"] = 112] = "post";
        $hyoo_crus_rank_tier[$hyoo_crus_rank_tier["rule"] = 240] = "rule";
    })($hyoo_crus_rank_tier = $.$hyoo_crus_rank_tier || ($.$hyoo_crus_rank_tier = {}));
    let $hyoo_crus_rank_rate;
    (function ($hyoo_crus_rank_rate) {
        $hyoo_crus_rank_rate[$hyoo_crus_rank_rate["late"] = 0] = "late";
        $hyoo_crus_rank_rate[$hyoo_crus_rank_rate["long"] = 3] = "long";
        $hyoo_crus_rank_rate[$hyoo_crus_rank_rate["slow"] = 7] = "slow";
        $hyoo_crus_rank_rate[$hyoo_crus_rank_rate["fast"] = 11] = "fast";
        $hyoo_crus_rank_rate[$hyoo_crus_rank_rate["just"] = 15] = "just";
    })($hyoo_crus_rank_rate = $.$hyoo_crus_rank_rate || ($.$hyoo_crus_rank_rate = {}));
    $.$hyoo_crus_rank_deny = $hyoo_crus_rank_make('deny', 'late');
    $.$hyoo_crus_rank_read = $hyoo_crus_rank_make('read', 'late');
    $.$hyoo_crus_rank_rule = $hyoo_crus_rank_make('rule', 'just');
    function $hyoo_crus_rank_join(rate) {
        return $hyoo_crus_rank_make('join', rate);
    }
    $.$hyoo_crus_rank_join = $hyoo_crus_rank_join;
    function $hyoo_crus_rank_post(rate) {
        return $hyoo_crus_rank_make('post', rate);
    }
    $.$hyoo_crus_rank_post = $hyoo_crus_rank_post;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_url_encode(buffer) {
        return $mol_base64_encode(buffer).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    }
    $.$mol_base64_url_encode = $mol_base64_url_encode;
    function $mol_base64_url_decode(str) {
        return $mol_base64_decode(str.replace(/-/g, '+').replace(/_/g, '/'));
    }
    $.$mol_base64_url_decode = $mol_base64_url_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_crypto_native = $node.crypto.webcrypto;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_crypto_restack(error) {
        error = new Error(error instanceof Error ? error.message : String(error), { cause: error });
        $mol_fail_hidden(error);
    }
    $.$mol_crypto_restack = $mol_crypto_restack;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const ecdsa = {
        name: 'ECDSA',
        hash: 'SHA-1',
        namedCurve: "P-256",
    };
    const ecdh = { name: "ECDH", namedCurve: "P-256" };
    const jwk = { crv: 'P-256', ext: true, kty: 'EC' };
    class $mol_crypto_key extends $mol_buffer {
        static from(serial) {
            if (typeof serial === 'string') {
                serial = new Uint8Array([
                    ...$mol_base64_url_decode(serial.slice(0, 43)),
                    ...$mol_base64_url_decode(serial.slice(43, 86)),
                    ...$mol_base64_url_decode(serial.slice(86, 129)),
                ]);
            }
            return super.from(serial);
        }
        toString() {
            const arr = this.asArray();
            return $mol_base64_url_encode(arr.subarray(0, 32))
                + $mol_base64_url_encode(arr.subarray(32, 64))
                + $mol_base64_url_encode(arr.subarray(64));
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto_key.prototype, "toString", null);
    $.$mol_crypto_key = $mol_crypto_key;
    class $mol_crypto_key_public extends $mol_crypto_key {
        static size_str = 86;
        static size_bin = 64;
        async native() {
            const str = this.toString();
            return $mol_crypto_native.subtle.importKey('jwk', {
                crv: "P-256",
                ext: true,
                key_ops: ['verify'],
                kty: "EC",
                x: str.slice(0, 43),
                y: str.slice(43, 86),
            }, ecdsa, Boolean('extractable'), ['verify']).catch($mol_crypto_restack);
        }
        async native_derive() {
            const serial = this.toString();
            return await $mol_crypto_native.subtle.importKey('jwk', {
                ...jwk,
                key_ops: [],
                x: serial.slice(0, 43),
                y: serial.slice(43, 86),
            }, ecdh, true, []).catch($mol_crypto_restack);
        }
        async verify(data, sign) {
            return await $mol_crypto_native.subtle.verify(ecdsa, await this.native(), sign, data).catch($mol_crypto_restack);
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto_key_public.prototype, "native", null);
    __decorate([
        $mol_memo.method
    ], $mol_crypto_key_public.prototype, "native_derive", null);
    $.$mol_crypto_key_public = $mol_crypto_key_public;
    class $mol_crypto_key_private extends $mol_crypto_key {
        static size_str = 129;
        static size_bin = 96;
        static size_sign = 64;
        static async generate() {
            const pair = await $mol_crypto_native.subtle.generateKey(ecdsa, Boolean('extractable'), ['sign', 'verify']).catch($mol_crypto_restack);
            const { x, y, d } = await $mol_crypto_native.subtle.exportKey('jwk', pair.privateKey).catch($mol_crypto_restack);
            return this.from(x + y + d);
        }
        async native() {
            const str = this.toString();
            return await $mol_crypto_native.subtle.importKey('jwk', {
                crv: "P-256",
                ext: true,
                key_ops: ['sign'],
                kty: "EC",
                x: str.slice(0, 43),
                y: str.slice(43, 86),
                d: str.slice(86, 129),
            }, ecdsa, Boolean('extractable'), ['sign']).catch($mol_crypto_restack);
        }
        async native_derive() {
            const serial = this.toString();
            return $mol_crypto_native.subtle.importKey('jwk', {
                ...jwk,
                key_ops: ['deriveKey', 'deriveBits'],
                x: serial.slice(0, 43),
                y: serial.slice(43, 86),
                d: serial.slice(86, 129),
            }, ecdh, Boolean('extractable'), ['deriveKey', 'deriveBits']).catch($mol_crypto_restack);
        }
        public() {
            return new $mol_crypto_key_public(this.asArray().slice(0, 64).buffer);
        }
        async sign(data) {
            return new Uint8Array(await $mol_crypto_native.subtle.sign(ecdsa, await this.native(), data).catch($mol_crypto_restack));
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto_key_private.prototype, "native", null);
    __decorate([
        $mol_memo.method
    ], $mol_crypto_key_private.prototype, "native_derive", null);
    __decorate([
        $mol_memo.method
    ], $mol_crypto_key_private.prototype, "public", null);
    $.$mol_crypto_key_private = $mol_crypto_key_private;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem_persist = $mol_wire_solid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_storage extends $mol_object2 {
        static native() {
            return this.$.$mol_dom_context.navigator.storage ?? {
                persisted: async () => false,
                persist: async () => false,
                estimate: async () => ({}),
                getDirectory: async () => null,
            };
        }
        static persisted(next, cache) {
            $mol_mem_persist();
            if (cache)
                return Boolean(next);
            const native = this.native();
            if (next && !$mol_mem_cached(() => this.persisted())) {
                native.persist().then(actual => {
                    setTimeout(() => this.persisted(actual, 'cache'), 5000);
                    if (actual)
                        this.$.$mol_log3_done({ place: `$mol_storage`, message: `Persist: Yes` });
                    else
                        this.$.$mol_log3_fail({ place: `$mol_storage`, message: `Persist: No` });
                });
            }
            return next ?? $mol_wire_sync(native).persisted();
        }
        static estimate() {
            return $mol_wire_sync(this.native() ?? {}).estimate();
        }
        static dir() {
            return $mol_wire_sync(this.native()).getDirectory();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_storage, "native", null);
    __decorate([
        $mol_mem
    ], $mol_storage, "persisted", null);
    $.$mol_storage = $mol_storage;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null) {
                this.native().removeItem(key);
            }
            else {
                this.native().setItem(key, JSON.stringify(next));
                this.$.$mol_storage.persisted(true);
            }
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_lock extends $mol_object {
        promise = null;
        async wait() {
            let next = () => { };
            let destructed = false;
            const task = $mol_wire_auto();
            if (!task)
                return next;
            const destructor = task.destructor.bind(task);
            task.destructor = () => {
                destructor();
                destructed = true;
                next();
            };
            let promise;
            do {
                promise = this.promise;
                await promise;
                if (destructed)
                    return next;
            } while (promise !== this.promise);
            this.promise = new Promise(done => { next = done; });
            return next;
        }
        grab() { return $mol_wire_sync(this).wait(); }
    }
    $.$mol_lock = $mol_lock;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_compare_array(a, b) {
        if (a === b)
            return true;
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
            return false;
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i])
                return false;
        return true;
    }
    $.$mol_compare_array = $mol_compare_array;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_transaction extends $mol_object {
        path() { return ''; }
        modes() { return []; }
        write(options) {
            return 0;
        }
        read() {
            return new Uint8Array();
        }
        truncate(size) { }
        close() { }
        destructor() {
            this.close();
        }
    }
    $.$mol_file_transaction = $mol_file_transaction;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let file_modes;
    (function (file_modes) {
        file_modes[file_modes["create"] = $node.fs.constants.O_CREAT] = "create";
        file_modes[file_modes["exists_truncate"] = $node.fs.constants.O_TRUNC] = "exists_truncate";
        file_modes[file_modes["exists_fail"] = $node.fs.constants.O_EXCL] = "exists_fail";
        file_modes[file_modes["read_only"] = $node.fs.constants.O_RDONLY] = "read_only";
        file_modes[file_modes["write_only"] = $node.fs.constants.O_WRONLY] = "write_only";
        file_modes[file_modes["read_write"] = $node.fs.constants.O_RDWR] = "read_write";
        file_modes[file_modes["append"] = $node.fs.constants.O_APPEND] = "append";
    })(file_modes || (file_modes = {}));
    function mode_mask(modes) {
        return modes.reduce((res, mode) => res | file_modes[mode], 0);
    }
    class $mol_file_transaction_node extends $mol_file_transaction {
        descr() {
            $mol_wire_solid();
            return $node.fs.openSync(this.path(), mode_mask(this.modes()));
        }
        write({ buffer, offset = 0, length, position = null }) {
            if (Array.isArray(buffer)) {
                return $node.fs.writevSync(this.descr(), buffer, position ?? undefined);
            }
            if (typeof buffer === 'string') {
                return $node.fs.writeSync(this.descr(), buffer, position);
            }
            length = length ?? buffer.byteLength;
            return $node.fs.writeSync(this.descr(), buffer, offset, length, position);
        }
        truncate(size) {
            $node.fs.ftruncateSync(this.descr());
        }
        read() {
            return $mol_file_node_buffer_normalize($node.fs.readFileSync(this.descr()));
        }
        close() {
            $node.fs.closeSync(this.descr());
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_transaction_node.prototype, "descr", null);
    $.$mol_file_transaction_node = $mol_file_transaction_node;
    $.$mol_file_transaction = $mol_file_transaction_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_base extends $mol_object {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        exists_cut() { return this.exists(); }
        root() {
            const path = this.path();
            const base = this.constructor.base;
            return base.startsWith(path) || this == this.parent();
        }
        stat(next, virt) {
            const path = this.path();
            const parent = this.parent();
            if (!this.root()) {
                parent.version();
            }
            parent.watcher();
            if (virt)
                return next ?? null;
            return next ?? this.info(path);
        }
        static changed = new Set;
        static frame = null;
        static changed_add(type, path) {
            if (/([\/\\]\.|___$)/.test(path))
                return;
            const file = this.relative(path.at(-1) === '/' ? path.slice(0, -1) : path);
            this.changed.add(file);
            if (!this.watching)
                return;
            this.frame?.destructor();
            this.frame = new this.$.$mol_after_timeout(this.watch_debounce(), () => {
                if (!this.watching)
                    return;
                this.watching = false;
                $mol_wire_async(this).flush();
            });
        }
        static watch_debounce() { return 500; }
        static flush() {
            for (const file of this.changed) {
                const parent = file.parent();
                try {
                    if ($mol_wire_probe(() => parent.sub()))
                        parent.sub(null);
                    file.reset();
                }
                catch (error) {
                    if ($mol_fail_catch(error))
                        $mol_fail_log(error);
                }
            }
            this.changed.clear();
            this.watching = true;
        }
        static watching = true;
        static lock = new $mol_lock;
        static watch_off(path) {
            this.watching = false;
            this.flush();
            this.watching = false;
            this.changed.add(this.absolute(path));
        }
        static unwatched(side_effect, affected_dir) {
            const unlock = this.lock.grab();
            this.watch_off(affected_dir);
            try {
                const result = side_effect();
                this.flush();
                unlock();
                return result;
            }
            catch (e) {
                if (!$mol_promise_like(e)) {
                    this.flush();
                    unlock();
                }
                $mol_fail_hidden(e);
            }
        }
        reset() {
            this.stat(null);
        }
        modified() { return this.stat()?.mtime ?? null; }
        version() {
            const next = this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
            return next;
        }
        info(path) { return null; }
        ensure() { }
        drop() { }
        copy(to) { }
        read() { return new Uint8Array; }
        write(buffer) { }
        kids() {
            return [];
        }
        readable(opts) {
            return new ReadableStream;
        }
        writable(opts) {
            return new WritableStream;
        }
        buffer(next) {
            let readed = new Uint8Array();
            if (next === undefined) {
                if (this.version())
                    readed = this.read();
            }
            const prev = $mol_mem_cached(() => this.buffer());
            const changed = prev === undefined || !$mol_compare_array(prev, next ?? readed);
            if (prev !== undefined && changed) {
                this.$.$mol_log3_rise({
                    place: `$mol_file_node.buffer()`,
                    message: 'Changed',
                    path: this.relate(),
                });
            }
            if (next === undefined)
                return changed ? readed : prev;
            if (!changed && this.exists())
                return prev;
            this.parent().exists(true);
            this.stat(this.stat_make(next.length), 'virt');
            this.write(next);
            return next;
        }
        stat_make(size) {
            const now = new Date();
            return {
                type: 'file',
                size,
                atime: now,
                mtime: now,
                ctime: now,
            };
        }
        clone(to) {
            if (!this.exists())
                return null;
            const target = this.constructor.absolute(to);
            try {
                this.version();
                target.parent().exists(true);
                this.copy(to);
                target.reset();
                return target;
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    console.error(error);
                }
            }
            return null;
        }
        watcher() {
            return {
                destructor() { }
            };
        }
        exists(next) {
            const exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next) {
                this.parent().exists(true);
                this.ensure();
            }
            else {
                this.drop();
            }
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (next !== undefined)
                this.exists();
            return this.text_int(next, virt);
        }
        text_int(next, virt) {
            if (virt) {
                this.stat(this.stat_make(0), 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer());
            }
            else {
                const buffer = $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        sub(reset) {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            this.version();
            return this.kids().filter(file => file.exists());
        }
        resolve(path) {
            throw new Error('implement');
        }
        relate(base = this.constructor.relative('.')) {
            const base_path = base.path();
            const path = this.path();
            return path.startsWith(base_path) ? path.slice(base_path.length) : path;
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
        toJSON() {
            return this.path();
        }
        open(...modes) {
            return this.$.$mol_file_transaction.make({
                path: () => this.path(),
                modes: () => modes
            });
        }
    }
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "exists_cut", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "modified", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "version", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "readable", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "writable", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "stat_make", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "clone", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "text_int", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "sub", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "size", null);
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "open", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base, "absolute", null);
    __decorate([
        $mol_action
    ], $mol_file_base, "flush", null);
    __decorate([
        $mol_action
    ], $mol_file_base, "watch_off", null);
    $.$mol_file_base = $mol_file_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file extends $mol_file_base {
    }
    $.$mol_file = $mol_file;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function stat_convert(stat) {
        if (!stat)
            return null;
        let type;
        if (stat.isDirectory())
            type = 'dir';
        if (stat.isFile())
            type = 'file';
        if (stat.isSymbolicLink())
            type = 'link';
        if (!type)
            return $mol_fail(new Error(`Unsupported file type`));
        return {
            type,
            size: Number(stat.size),
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime
        };
    }
    function $mol_file_node_buffer_normalize(buf) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    $.$mol_file_node_buffer_normalize = $mol_file_node_buffer_normalize;
    class $mol_file_node extends $mol_file {
        static relative(path) {
            return this.absolute($node.path.resolve(this.base, path).replace(/\\/g, '/'));
        }
        watcher(reset) {
            const path = this.path();
            const root = this.root();
            if (!root && !this.exists())
                return super.watcher();
            let watcher;
            try {
                watcher = $node.fs.watch(path);
            }
            catch (error) {
                if (!(error instanceof Error))
                    error = new Error('Unknown watch error', { cause: error });
                error.message += '\n' + path;
                if (root || error.code !== 'ENOENT') {
                    this.$.$mol_fail_log(error);
                }
                return super.watcher();
            }
            watcher.on('change', (type, name) => {
                if (!name)
                    return;
                const path = $node.path.join(this.path(), name.toString());
                this.constructor.changed_add(type, path);
            });
            watcher.on('error', e => this.$.$mol_fail_log(e));
            let destructed = false;
            watcher.on('close', () => {
                if (!destructed)
                    setTimeout(() => $mol_wire_async(this).watcher(null), 500);
            });
            return {
                destructor() {
                    destructed = true;
                    watcher.close();
                }
            };
        }
        info(path) {
            try {
                return stat_convert($node.fs.statSync(path));
            }
            catch (error) {
                if (this.$.$mol_fail_catch(error)) {
                    if (error.code === 'ENOENT')
                        return null;
                    error.message += '\n' + path;
                    this.$.$mol_fail_hidden(error);
                }
            }
            return null;
        }
        ensure() {
            const path = this.path();
            try {
                $node.fs.mkdirSync(path, { recursive: true });
                return null;
            }
            catch (e) {
                if (this.$.$mol_fail_catch(e)) {
                    if (e.code === 'EEXIST')
                        return null;
                    e.message += '\n' + path;
                    this.$.$mol_fail_hidden(e);
                }
            }
        }
        copy(to) {
            $node.fs.copyFileSync(this.path(), to);
        }
        drop() {
            $node.fs.unlinkSync(this.path());
        }
        read() {
            const path = this.path();
            try {
                return $mol_file_node_buffer_normalize($node.fs.readFileSync(path));
            }
            catch (error) {
                if (!$mol_promise_like(error)) {
                    error.message += '\n' + path;
                }
                $mol_fail_hidden(error);
            }
        }
        write(buffer) {
            const path = this.path();
            try {
                $node.fs.writeFileSync(path, buffer);
            }
            catch (error) {
                if (this.$.$mol_fail_catch(error)) {
                    error.message += '\n' + path;
                }
                return this.$.$mol_fail_hidden(error);
            }
        }
        kids() {
            const path = this.path();
            try {
                const kids = $node.fs.readdirSync(path)
                    .filter(name => !/^\.+$/.test(name))
                    .map(name => this.resolve(name));
                return kids;
            }
            catch (e) {
                if (this.$.$mol_fail_catch(e)) {
                    if (e.code === 'ENOENT')
                        return [];
                    e.message += '\n' + path;
                }
                $mol_fail_hidden(e);
            }
        }
        resolve(path) {
            return this.constructor
                .relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        readable(opts) {
            const { Readable } = $node['node:stream'];
            const stream = $node.fs.createReadStream(this.path(), {
                flags: 'r',
                autoClose: true,
                start: opts?.start,
                end: opts?.end,
                encoding: 'binary',
            });
            return Readable.toWeb(stream);
        }
        writable(opts) {
            const { Writable } = $node['node:stream'];
            const stream = $node.fs.createWriteStream(this.path(), {
                flags: 'w+',
                autoClose: true,
                start: opts?.start,
                encoding: 'binary',
            });
            return Writable.toWeb(stream);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "watcher", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "info", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "ensure", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "copy", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "drop", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "read", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "write", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_node.prototype, "readable", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "writable", null);
    $.$mol_file_node = $mol_file_node;
    $.$mol_file = $mol_file_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_local_node extends $mol_state_local {
        static dir() {
            const base = process.env.XDG_DATA_HOME || ($node.os.homedir() + '/.local/share');
            return $mol_file.absolute(base).resolve('./mol_state_local');
        }
        static value(key, next) {
            const file = this.dir().resolve(encodeURIComponent(key) + '.json');
            if (next === null) {
                file.exists(false);
                return null;
            }
            const arg = next === undefined ? undefined : JSON.stringify(next);
            return JSON.parse(file.text(arg) || 'null');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local_node, "dir", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local_node, "value", null);
    $.$mol_state_local_node = $mol_state_local_node;
    $.$mol_state_local = $mol_state_local_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_crypto_salt() {
        return $mol_crypto_native.getRandomValues(new Uint8Array(16));
    }
    $.$mol_crypto_salt = $mol_crypto_salt;
    $.$mol_crypto_salt_once = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_crypto_sacred extends $mol_buffer {
        static size = 16;
        static make() {
            return this.from($mol_crypto_salt());
        }
        static from(serial) {
            if (typeof serial === 'string') {
                serial = new Uint8Array([
                    ...$mol_base64_url_decode(serial),
                ]);
            }
            if (!(serial instanceof Uint8Array)) {
                serial = new Uint8Array(serial.buffer, serial.byteOffset, serial.byteLength);
            }
            ;
            serial[0] = 0;
            const sacred = super.from(serial);
            return sacred;
        }
        static async from_native(native) {
            const buf = await $mol_crypto_native.subtle.exportKey('raw', native).catch($mol_crypto_restack);
            const sacred = this.from(new Uint8Array(buf));
            sacred._native = native;
            return sacred;
        }
        constructor(buffer, byteOffset, byteLength) {
            super(buffer, byteOffset, byteLength);
            if (this.getUint8(0) !== 0)
                $mol_fail(new Error('Buffer should starts with 0 byte'));
        }
        toString() {
            return $mol_base64_url_encode(this.asArray());
        }
        _native;
        async native() {
            return this._native ?? (this._native = await $mol_crypto_native.subtle.importKey('raw', this, {
                name: 'AES-CBC',
                length: 128,
            }, true, ['encrypt', 'decrypt']).catch($mol_crypto_restack));
        }
        async encrypt(open, salt) {
            return new Uint8Array(await $mol_crypto_native.subtle.encrypt({
                name: 'AES-CBC',
                length: 128,
                tagLength: 32,
                iv: salt,
            }, await this.native(), open).catch($mol_crypto_restack));
        }
        async decrypt(closed, salt) {
            return new Uint8Array(await $mol_crypto_native.subtle.decrypt({
                name: 'AES-CBC',
                length: 128,
                tagLength: 32,
                iv: salt,
            }, await this.native(), closed).catch($mol_crypto_restack));
        }
        async close(sacred, salt) {
            const buf = new Uint8Array(sacred.buffer, sacred.byteOffset + 1, sacred.byteLength - 1);
            return this.encrypt(buf, salt);
        }
        async open(buf, salt) {
            const buf2 = new Uint8Array(16);
            buf2.set(await this.decrypt(buf, salt), 1);
            return new $mol_crypto_sacred(buf2.buffer);
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto_sacred.prototype, "toString", null);
    $.$mol_crypto_sacred = $mol_crypto_sacred;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const algorithm = {
        name: 'AES-CBC',
        length: 128,
        tagLength: 32,
    };
    class $mol_crypto_secret extends Object {
        native;
        static size = 16;
        constructor(native) {
            super();
            this.native = native;
        }
        static async generate() {
            return new this(await $mol_crypto_native.subtle.generateKey(algorithm, true, ['encrypt', 'decrypt']));
        }
        static async from(serial) {
            return new this(await $mol_crypto_native.subtle.importKey('raw', serial, algorithm, true, ['encrypt', 'decrypt']));
        }
        static async pass(pass, salt) {
            return new this(await $mol_crypto_native.subtle.deriveKey({
                name: "PBKDF2",
                salt,
                iterations: 10_000,
                hash: "SHA-256",
            }, await $mol_crypto_native.subtle.importKey("raw", $mol_charset_encode(pass), "PBKDF2", false, ["deriveKey"]), algorithm, true, ['encrypt', 'decrypt']));
        }
        static async derive(private_serial, public_serial) {
            const ecdh = { name: "ECDH", namedCurve: "P-256" };
            const jwk = { crv: 'P-256', ext: true, kty: 'EC' };
            const private_key = await $mol_crypto_native.subtle.importKey('jwk', {
                ...jwk,
                key_ops: ['deriveKey'],
                x: private_serial.slice(0, 43),
                y: private_serial.slice(43, 86),
                d: private_serial.slice(86, 129),
            }, ecdh, true, ['deriveKey']);
            const public_key = await $mol_crypto_native.subtle.importKey('jwk', {
                ...jwk,
                key_ops: [],
                x: public_serial.slice(0, 43),
                y: public_serial.slice(43, 86),
            }, ecdh, true, []);
            const secret = await $mol_crypto_native.subtle.deriveKey({
                name: "ECDH",
                public: public_key,
            }, private_key, algorithm, true, ["encrypt", "decrypt"]);
            return new this(secret);
        }
        async serial() {
            return new Uint8Array(await $mol_crypto_native.subtle.exportKey('raw', this.native));
        }
        async encrypt(open, salt) {
            return new Uint8Array(await $mol_crypto_native.subtle.encrypt({
                ...algorithm,
                iv: salt,
            }, this.native, open));
        }
        async decrypt(closed, salt) {
            return new Uint8Array(await $mol_crypto_native.subtle.decrypt({
                ...algorithm,
                iv: salt,
            }, this.native, closed));
        }
    }
    $.$mol_crypto_secret = $mol_crypto_secret;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crus_auth extends $mol_crypto_key_private {
        static current(next) {
            $mol_wire_solid();
            if (next === undefined) {
                const key = String($mol_state_local.value('$hyoo_crus_auth') ?? '');
                if (key)
                    return $hyoo_crus_auth.from(key);
            }
            if (!next)
                next = this.grab();
            $mol_state_local.value('$hyoo_crus_auth', next.toString());
            return next;
        }
        static embryos = [];
        static grab() {
            if (this.embryos.length)
                return this.from(this.embryos.pop());
            return $mol_wire_sync(this).generate();
        }
        static async generate() {
            for (let i = 0; i < 4096; ++i) {
                const auth = await super.generate();
                if (auth.uint8(0) !== $hyoo_crus_unit_kind.pass)
                    continue;
                return this.from(auth);
            }
            $mol_fail(new Error(`Too long key generation`));
        }
        lord() {
            return $hyoo_crus_ref_decode(new Uint8Array(this.buffer, 2, 12));
        }
        peer() {
            return $mol_base64_ae_encode(new Uint8Array(this.buffer, 2, 6));
        }
        secret_mutual(pub) {
            return $mol_wire_sync($mol_crypto_secret).derive(this.toString(), pub.toString());
        }
    }
    __decorate([
        $mol_memo.method
    ], $hyoo_crus_auth.prototype, "lord", null);
    __decorate([
        $mol_memo.method
    ], $hyoo_crus_auth.prototype, "peer", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_auth.prototype, "secret_mutual", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_auth, "current", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_auth, "grab", null);
    $.$hyoo_crus_auth = $hyoo_crus_auth;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static patterns = {};
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            const Base = this.constructor;
            const formatter = Base.formatter(pattern);
            return formatter(this);
        }
    }
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $mol_time_base {
        constructor(config = 0) {
            super();
            if (typeof config === 'number') {
                if (!Number.isFinite(config))
                    throw new RangeError(`Wrong ms count`);
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^(-?)P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    const sign = found[1] ? -1 : 1;
                    if (found[2])
                        this.year = sign * Number(found[2]);
                    if (found[3])
                        this.month = sign * Number(found[3]);
                    if (found[4])
                        this.day = sign * Number(found[4]);
                    if (found[5])
                        this.hour = sign * Number(found[5]);
                    if (found[6])
                        this.minute = sign * Number(found[6]);
                    if (found[7])
                        this.second = sign * Number(found[7]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        year = 0;
        month = 0;
        day = 0;
        hour = 0;
        minute = 0;
        second = 0;
        get normal() {
            let second = this.second ?? 0;
            let minute = this.minute ?? 0;
            let hour = this.hour ?? 0;
            let day = this.day ?? 0;
            minute += Math.floor(second / 60);
            second = second % 60;
            hour += Math.floor(minute / 60);
            minute = minute % 60;
            day += Math.floor(hour / 24);
            hour = hour % 24;
            return new $mol_time_duration({
                year: this.year,
                month: this.month,
                day: day,
                hour: hour,
                minute: minute,
                second: second,
            });
        }
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
            '#Y': (duration) => {
                if (!duration.year)
                    return '';
                return duration.year + 'Y';
            },
            '#M': (duration) => {
                if (!duration.month)
                    return '';
                return duration.month + 'M';
            },
            '#D': (duration) => {
                if (!duration.day)
                    return '';
                return duration.day + 'D';
            },
            '#h': (duration) => {
                if (!duration.hour)
                    return '';
                return duration.hour + 'H';
            },
            '#m': (duration) => {
                if (!duration.minute)
                    return '';
                return duration.minute + 'M';
            },
            '#s': (duration) => {
                if (!duration.second)
                    return '';
                return duration.second + 'S';
            },
            'hh': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(100 + moment.hour).slice(1);
            },
            'h': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(moment.hour);
            },
            ':mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return ':' + $mol_time_moment.patterns['mm'](moment);
            },
            'mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(100 + moment.minute).slice(1);
            },
            'm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(moment.minute);
            },
            ':ss': (moment) => {
                if (moment.second == null)
                    return '';
                return ':' + $mol_time_moment.patterns['ss'](moment);
            },
            'ss': (moment) => {
                if (moment.second == null)
                    return '';
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = (moment.second - Math.trunc(moment.second)).toFixed(3);
                return millisecond.slice(2);
            },
        };
    }
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_time_moment_weekdays;
    (function ($mol_time_moment_weekdays) {
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["monday"] = 0] = "monday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["tuesday"] = 1] = "tuesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["wednesday"] = 2] = "wednesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["thursday"] = 3] = "thursday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["friday"] = 4] = "friday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["saturday"] = 5] = "saturday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["sunday"] = 6] = "sunday";
    })($mol_time_moment_weekdays = $.$mol_time_moment_weekdays || ($.$mol_time_moment_weekdays = {}));
    function numb(str, max) {
        const numb = Number(str);
        if (numb < max)
            return numb;
        $mol_fail(new Error(`Wrong time component ${str}`));
    }
    class $mol_time_moment extends $mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number') {
                config = new Date(config);
                if (Number.isNaN(config.valueOf()))
                    throw new RangeError(`Wrong ms count`);
            }
            if (typeof config === 'string') {
                const parsed = /^(?:(\d\d?\d?\d?)(?:-?(\d\d?)(?:-?(\d\d?))?)?)?(?:[T ](?:(\d\d?)(?::?(\d\d?)(?::?(\d\d?(?:\.\d+)?))?)?)?(Z|[\+\-]\d\d?(?::?(?:\d\d?)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = numb(parsed[1], 9999);
                if (parsed[2])
                    this.month = numb(parsed[2], 13) - 1;
                if (parsed[3])
                    this.day = numb(parsed[3], 32) - 1;
                if (parsed[4])
                    this.hour = numb(parsed[4], 60);
                if (parsed[5])
                    this.minute = numb(parsed[5], 60);
                if (parsed[6])
                    this.second = numb(parsed[6], 60);
                if (parsed[7])
                    this.offset = new $mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                const offset = -config.getTimezoneOffset();
                this.offset = new $mol_time_duration({
                    hour: (offset < 0) ? Math.ceil(offset / 60) : Math.floor(offset / 60),
                    minute: offset % 60
                });
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            this.offset = config.offset == null ? config.offset : new $mol_time_duration(config.offset);
        }
        year;
        month;
        day;
        hour;
        minute;
        second;
        offset;
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        _native;
        get native() {
            if (this._native)
                return this._native;
            const second = Math.floor(this.second ?? 0);
            const current = new Date();
            const native = new Date(this.year ?? current.getFullYear(), this.month ?? (this.year === undefined ? current.getMonth() : 0), (this.day ?? (this.year === undefined && this.month === undefined ? current.getDate() - 1 : 0)) + 1, this.hour ?? 0, this.minute ?? 0, second, Math.floor(((this.second ?? 0) - second) * 1000));
            const offset = -native.getTimezoneOffset();
            shift: if (this.offset) {
                const target = this.offset.count('PT1m');
                if (target === offset)
                    break shift;
                native.setMinutes(native.getMinutes() + offset - target);
            }
            return this._native = native;
        }
        _normal;
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native).toOffset(this.offset);
            return this._normal = new $mol_time_moment({
                year: this.year === undefined ? undefined : moment.year,
                month: this.month === undefined ? undefined : moment.month,
                day: this.day === undefined ? undefined : moment.day,
                hour: this.hour === undefined ? undefined : moment.hour,
                minute: this.minute === undefined ? undefined : moment.minute,
                second: this.second === undefined ? undefined : moment.second,
                offset: this.offset === undefined ? undefined : moment.offset,
            });
        }
        merge(config) {
            const moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: moment.year === undefined ? this.year : moment.year,
                month: moment.month === undefined ? this.month : moment.month,
                day: moment.day === undefined ? this.day : moment.day,
                hour: moment.hour === undefined ? this.hour : moment.hour,
                minute: moment.minute === undefined ? this.minute : moment.minute,
                second: moment.second === undefined ? this.second : moment.second,
                offset: moment.offset === undefined ? this.offset : moment.offset,
            });
        }
        shift(config) {
            const duration = new $mol_time_duration(config);
            const moment = new $mol_time_moment().merge({
                year: this.year ?? 0,
                month: this.month ?? 0,
                day: this.day ?? 0,
                hour: this.hour ?? 0,
                minute: this.minute ?? 0,
                second: this.second ?? 0,
                offset: this.offset ?? 0
            });
            const second = moment.second + (duration.second ?? 0);
            const native = new Date(moment.year + (duration.year ?? 0), moment.month + (duration.month ?? 0), moment.day + 1 + (duration.day ?? 0), moment.hour + (duration.hour ?? 0), moment.minute + (duration.minute ?? 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: this.year === undefined ? undefined : native.getFullYear(),
                month: this.month === undefined ? undefined : native.getMonth(),
                day: this.day === undefined ? undefined : native.getDate() - 1,
                hour: this.hour === undefined ? undefined : native.getHours(),
                minute: this.minute === undefined ? undefined : native.getMinutes(),
                second: this.second === undefined ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        mask(config) {
            const mask = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: mask.year === undefined ? undefined : this.year,
                month: mask.month === undefined ? undefined : this.month,
                day: mask.day === undefined ? undefined : this.day,
                hour: mask.hour === undefined ? undefined : this.hour,
                minute: mask.minute === undefined ? undefined : this.minute,
                second: mask.second === undefined ? undefined : this.second,
                offset: mask.offset === undefined ? undefined : this.offset,
            });
        }
        toOffset(config = new $mol_time_moment().offset) {
            const duration = new $mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            let with_time = new $mol_time_moment('0001-01-01T00:00:00').merge(this);
            const moment = with_time.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', $mol_dev_format_accent(this.toString('YYYY-MM-DD hh:mm:ss.sss Z')));
        }
        static patterns = {
            'YYYY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year);
            },
            'AD': (moment) => {
                if (moment.year == null)
                    return '';
                return String(Math.floor(moment.year / 100) + 1);
            },
            'YY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year % 100);
            },
            'Month': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'long' })),
            'DD Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'long' })),
            'D Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' })),
            'Mon': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'short' })),
            'DD Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'short' })),
            'D Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' })),
            '-MM': (moment) => {
                if (moment.month == null)
                    return '';
                return '-' + $mol_time_moment.patterns['MM'](moment);
            },
            'MM': (moment) => {
                if (moment.month == null)
                    return '';
                return String(100 + moment.month + 1).slice(1);
            },
            'M': (moment) => {
                if (moment.month == null)
                    return '';
                return String(moment.month + 1);
            },
            'WeekDay': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'long' })),
            'WD': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'short' })),
            '-DD': (moment) => {
                if (moment.day == null)
                    return '';
                return '-' + $mol_time_moment.patterns['DD'](moment);
            },
            'DD': (moment) => {
                if (moment.day == null)
                    return '';
                return String(100 + moment.day + 1).slice(1);
            },
            'D': (moment) => {
                if (moment.day == null)
                    return '';
                return String(moment.day + 1);
            },
            'Thh': (moment) => {
                if (moment.hour == null)
                    return '';
                return 'T' + $mol_time_moment.patterns['hh'](moment);
            },
            'hh': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(100 + moment.hour).slice(1);
            },
            'h': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(moment.hour);
            },
            ':mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return ':' + $mol_time_moment.patterns['mm'](moment);
            },
            'mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(100 + moment.minute).slice(1);
            },
            'm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(moment.minute);
            },
            ':ss': (moment) => {
                if (moment.second == null)
                    return '';
                return ':' + $mol_time_moment.patterns['ss'](moment);
            },
            'ss': (moment) => {
                if (moment.second == null)
                    return '';
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                if (moment.second === (moment.second | 0))
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = (moment.second - Math.trunc(moment.second)).toFixed(3);
                return millisecond.slice(2);
            },
            'Z': (moment) => {
                const offset = moment.offset;
                if (!offset)
                    return '';
                let hour = offset.hour;
                let sign = '+';
                if (hour < 0) {
                    sign = '-';
                    hour = -hour;
                }
                return sign + String(100 + hour).slice(1) + ':' + String(100 + offset.minute).slice(1);
            }
        };
    }
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $hyoo_crus_time_moment(time) {
        const stamp = Math.floor(time / 65536) * 1000;
        return new $mol_time_moment(stamp);
    }
    $.$hyoo_crus_time_moment = $hyoo_crus_time_moment;
    function $hyoo_crus_time_tick(time) {
        return time % 65536;
    }
    $.$hyoo_crus_time_tick = $hyoo_crus_time_tick;
    function $hyoo_crus_time_dump(time) {
        return $hyoo_crus_time_moment(time).toString('YYYY-MM-DD hh:mm:ss')
            + ' @' + $hyoo_crus_time_tick(time);
    }
    $.$hyoo_crus_time_dump = $hyoo_crus_time_dump;
    function $hyoo_crus_time_now() {
        return now || Math.floor(Date.now() / 1000) * 65536;
    }
    $.$hyoo_crus_time_now = $hyoo_crus_time_now;
    let now = 0;
    function $hyoo_crus_time_freeze(task) {
        if (now)
            return task();
        now = $hyoo_crus_time_now();
        try {
            return task();
        }
        finally {
            now = 0;
        }
    }
    $.$hyoo_crus_time_freeze = $hyoo_crus_time_freeze;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crus_face_map extends Map {
        last_time = 0;
        total = 0;
        constructor(entries) {
            super();
            if (entries)
                this.sync(entries);
        }
        sync(right) {
            if (right instanceof $hyoo_crus_face_map)
                this.total = right.total;
            for (const [peer, time] of right)
                this.time_max(peer, time);
        }
        time_max(peer, time) {
            if (this.last_time < time)
                this.last_time = time;
            let prev = this.get(peer) ?? 0;
            if (prev < time)
                this.set(peer, time);
        }
        tick() {
            return this.last_time = Math.max(this.last_time + 1, $hyoo_crus_time_now());
        }
        last_moment() {
            return $hyoo_crus_time_moment(this.last_time);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), $mol_dev_format_shade(' ', $hyoo_crus_time_dump(this.last_time)), $mol_dev_format_shade(' #', this.total));
        }
    }
    __decorate([
        $mol_action
    ], $hyoo_crus_face_map.prototype, "tick", null);
    $.$hyoo_crus_face_map = $hyoo_crus_face_map;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_dict extends Map {
        pub = new $mol_wire_pub;
        has(key) {
            this.pub.promote();
            return super.has(key);
        }
        get(key) {
            this.pub.promote();
            return super.get(key);
        }
        entries() {
            this.pub.promote();
            return super.entries();
        }
        keys() {
            this.pub.promote();
            return super.keys();
        }
        values() {
            this.pub.promote();
            return super.values();
        }
        forEach(task, self) {
            this.pub.promote();
            super.forEach(task, self);
        }
        [Symbol.iterator]() {
            this.pub.promote();
            return super[Symbol.iterator]();
        }
        get size() {
            this.pub.promote();
            return super.size;
        }
        set(key, value) {
            if (super.get(key) === value)
                return this;
            super.set(key, value);
            this.pub?.emit();
            return this;
        }
        delete(key) {
            const res = super.delete(key);
            if (res)
                this.pub.emit();
            return res;
        }
        clear() {
            if (!super.size)
                return;
            super.clear();
            this.pub.emit();
        }
        item(key, next) {
            if (next === undefined)
                return this.get(key) ?? null;
            if (next === null)
                this.delete(key);
            else
                this.set(key, next);
            return next;
        }
    }
    $.$mol_wire_dict = $mol_wire_dict;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crus_fund extends $mol_object {
        item_make;
        constructor(item_make) {
            super();
            this.item_make = item_make;
        }
        Item(head) {
            return this.item_make(head);
        }
    }
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_fund.prototype, "Item", null);
    $.$hyoo_crus_fund = $hyoo_crus_fund;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_graph {
        nodes = new Set();
        edges_out = new Map();
        edges_in = new Map();
        link(from, to, edge) {
            this.link_out(from, to, edge);
            this.link_in(to, from, edge);
        }
        unlink(from, to) {
            this.edges_in.get(to)?.delete(from);
            this.edges_out.get(from)?.delete(to);
        }
        link_out(from, to, edge) {
            let pair = this.edges_out.get(from);
            if (!pair) {
                pair = new Map();
                this.edges_out.set(from, pair);
                this.nodes.add(from);
            }
            pair.set(to, edge);
            this.nodes.add(to);
        }
        link_in(to, from, edge) {
            let pair = this.edges_in.get(to);
            if (!pair) {
                pair = new Map();
                this.edges_in.set(to, pair);
                this.nodes.add(to);
            }
            pair.set(from, edge);
            this.nodes.add(to);
        }
        edge(from, to) {
            return this.edge_out(from, to) ?? this.edge_in(to, from);
        }
        edge_out(from, to) {
            return this.edges_out.get(from)?.get(to) ?? null;
        }
        edge_in(to, from) {
            return this.edges_in.get(to)?.get(from) ?? null;
        }
        acyclic(get_weight) {
            const checked = [];
            for (const start of this.nodes) {
                const path = [];
                const visit = (from) => {
                    if (checked.includes(from))
                        return Number.MAX_SAFE_INTEGER;
                    const index = path.lastIndexOf(from);
                    if (index > -1) {
                        const cycle = path.slice(index);
                        return cycle.reduce((weight, node, index) => Math.min(weight, get_weight(this.edge_out(node, cycle[(index + 1) % cycle.length]))), Number.MAX_SAFE_INTEGER);
                    }
                    path.push(from);
                    dive: try {
                        const deps = this.edges_out.get(from);
                        if (!deps)
                            break dive;
                        for (const [to, edge] of deps) {
                            if (to === from) {
                                this.unlink(from, to);
                                continue;
                            }
                            const weight_out = get_weight(edge);
                            const min = visit(to);
                            if (weight_out > min)
                                return min;
                            if (weight_out === min) {
                                this.unlink(from, to);
                                if (path.length > 1) {
                                    const enter = path[path.length - 2];
                                    this.link(enter, to, edge);
                                }
                            }
                        }
                    }
                    finally {
                        path.pop();
                    }
                    checked.push(from);
                    return Number.MAX_SAFE_INTEGER;
                };
                visit(start);
            }
        }
        get sorted() {
            const sorted = new Set();
            const visit = (node) => {
                if (sorted.has(node))
                    return;
                const deps = this.edges_out.get(node);
                if (deps) {
                    for (const [dep] of deps)
                        visit(dep);
                }
                sorted.add(node);
            };
            for (const node of this.nodes) {
                visit(node);
            }
            return sorted;
        }
        get roots() {
            const roots = [];
            for (const node of this.nodes) {
                if (this.edges_in.get(node)?.size)
                    continue;
                roots.push(node);
            }
            return roots;
        }
        nodes_depth(select) {
            const stat = new Map();
            const visit = (node, depth = 0) => {
                if (stat.has(node))
                    stat.set(node, select(depth, stat.get(node)));
                else
                    stat.set(node, depth);
                for (const kid of this.edges_out.get(node)?.keys() ?? [])
                    visit(kid, depth + 1);
            };
            for (const root of this.roots)
                visit(root);
            return stat;
        }
        depth_nodes(select) {
            const groups = [];
            for (const [node, depth] of this.nodes_depth(select).entries()) {
                if (groups[depth])
                    groups[depth].push(node);
                else
                    groups[depth] = [node];
            }
            return groups;
        }
    }
    $.$mol_graph = $mol_graph;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let sponge = new Uint32Array(80);
    function $mol_crypto_hash(input) {
        const data = input instanceof Uint8Array
            ? input
            : new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
        const bits = data.byteLength << 3;
        const kbits = bits >> 5;
        const kword = 0x80 << (24 - bits & 0b11111);
        const bytes = 16 + (bits + 64 >>> 9 << 4);
        const klens = bytes - 1;
        const words = new Int32Array(data.buffer, data.byteOffset, data.byteLength >> 2);
        let tail = 0;
        for (let i = words.length * 4; i < data.length; ++i) {
            tail |= data[i] << (i << 3 & 0b11000);
        }
        const hash = new Int32Array([1732584193, -271733879, -1732584194, 271733878, -1009589776]);
        for (let i = 0; i < bytes; i += 16) {
            let h0 = hash[0];
            let h1 = hash[1];
            let h2 = hash[2];
            let h3 = hash[3];
            let h4 = hash[4];
            for (let j = 0; j < 16; ++j) {
                const k = i + j;
                if (k === klens) {
                    sponge[j] = bits;
                }
                else {
                    let word = k === words.length ? tail :
                        k > words.length ? 0 :
                            words[k];
                    word = word << 24 | word << 8 & 0xFF0000 | word >>> 8 & 0xFF00 | word >>> 24 & 0xFF;
                    if (k === kbits)
                        word |= kword;
                    sponge[j] = word;
                }
                const next = ((h1 & h2 | ~h1 & h3) + 1518500249 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 16; j < 20; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 & h2 | ~h1 & h3) + 1518500249 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 20; j < 40; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 ^ h2 ^ h3) + 1859775393 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 40; j < 60; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 & h2 | h1 & h3 | h2 & h3) - 1894007588 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 60; j < 80; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 ^ h2 ^ h3) - 899497514 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            hash[0] += h0;
            hash[1] += h1;
            hash[2] += h2;
            hash[3] += h3;
            hash[4] += h4;
        }
        for (let i = 0; i < 20; ++i) {
            const word = hash[i];
            hash[i] = word << 24 | word << 8 & 0xFF0000 | word >>> 8 & 0xFF00 | word >>> 24 & 0xFF;
        }
        return new Uint8Array(hash.buffer);
    }
    $.$mol_crypto_hash = $mol_crypto_hash;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crus_pack extends $mol_buffer {
        toBlob() {
            return new Blob([this], { type: 'application/vnd.hyoo_crus_pack' });
        }
        parts(land = null) {
            const lands = {};
            if (land)
                lands[land] = { faces: new $hyoo_crus_face_map, units: [] };
            let total = 0;
            const rocks = [];
            const buf = this.asArray();
            for (let offset = 0; offset < this.byteLength;) {
                const kind = this.uint8(offset);
                if (!kind)
                    break;
                if (kind % 2) {
                    switch (kind) {
                        case $hyoo_crus_part.land: {
                            const faces = new $hyoo_crus_face_map;
                            faces.total = this.uint32(offset) >> 8;
                            offset += 4;
                            land = $hyoo_crus_ref_decode(new Uint8Array(buf.buffer, buf.byteOffset + offset, 18));
                            offset += 20;
                            lands[land] = { faces, units: [] };
                            continue;
                        }
                        case $hyoo_crus_part.face: {
                            if (!land)
                                $mol_fail(new Error('Land is undefined'));
                            const count = this.uint32(offset) >> 8;
                            offset += 4;
                            const faces = lands[land].faces;
                            for (let i = 0; i < count; ++i) {
                                const peer = $mol_base64_ae_encode(new Uint8Array(buf.buffer, buf.byteOffset + offset, 6));
                                const time = this.uint48(offset + 6);
                                faces.time_max(peer, time);
                                offset += 12;
                            }
                            offset = Math.ceil(offset / 8) * 8;
                            continue;
                        }
                        case $hyoo_crus_part.pass: {
                            if (!land)
                                $mol_fail(new Error('Land is undefined'));
                            const unit = new $hyoo_crus_pass(buf.slice(offset, offset += $hyoo_crus_unit.size).buffer);
                            lands[land].units ||= [];
                            lands[land].units.push(unit);
                            continue;
                        }
                        case $hyoo_crus_part.gift: {
                            if (!land)
                                $mol_fail(new Error('Land is undefined'));
                            const unit = new $hyoo_crus_gift(buf.slice(offset, offset += $hyoo_crus_unit.size).buffer);
                            lands[land].units ||= [];
                            lands[land].units.push(unit);
                            continue;
                        }
                        case $hyoo_crus_part.rock: {
                            const size = this.uint32(offset) >> 8;
                            if (size === 0) {
                                const hash = buf.slice(offset + 4, offset + 4 + 24);
                                rocks.push([hash, null]);
                                offset += 4 + 24;
                            }
                            else {
                                const rock = buf.slice(offset + 4, offset + 4 + size);
                                const hash = $mol_crypto_hash(rock);
                                rocks.push([hash, rock]);
                                offset += Math.ceil(size / 8 + .5) * 8;
                            }
                            continue;
                        }
                        case $hyoo_crus_part.root:
                        case $hyoo_crus_part.buck: {
                            offset += 128;
                            continue;
                        }
                        default: $mol_fail(new Error(`Unknown CRUS Pack Part (${kind.toString(2)}) at (${offset.toString(16)})`));
                    }
                }
                else {
                    if (!land)
                        $mol_fail(new Error('Land is undefined'));
                    const unit = $hyoo_crus_sand.from(buf.slice(offset, offset += $hyoo_crus_unit.size));
                    lands[land].units ||= [];
                    lands[land].units.push(unit);
                    continue;
                }
            }
            return { lands, rocks };
        }
        static make({ lands, rocks }) {
            let size = 0;
            for (const land of Reflect.ownKeys(lands)) {
                size += 24;
                size += Math.ceil(lands[land].faces.size * 12 / 8 + .5) * 8;
                size += lands[land].units.length * $hyoo_crus_unit.size;
            }
            for (const [hash, rock] of rocks) {
                size += rock ? Math.ceil(rock.length / 8 + .5) * 8 : 24;
            }
            if (size === 0)
                return null;
            const buff = new Uint8Array(size);
            const pack = new $hyoo_crus_pack(buff.buffer);
            let offset = 0;
            for (const land of Reflect.ownKeys(lands)) {
                const faces = lands[land].faces;
                pack.uint32(offset, $hyoo_crus_part.land | (faces.total << 8));
                buff.set($hyoo_crus_ref_encode(land), offset + 4);
                offset += 24;
                pack.uint32(offset, $hyoo_crus_part.face | (faces.size << 8));
                offset += 4;
                for (const [peer, time] of faces) {
                    buff.set($mol_base64_ae_decode(peer), offset);
                    pack.uint48(offset + 6, time);
                    offset += 12;
                }
                offset = Math.ceil(offset / 8) * 8;
                for (const unit of lands[land].units) {
                    buff.set(unit.asArray(), offset);
                    offset += unit.byteLength;
                }
            }
            for (const [hash, rock] of rocks) {
                const len = rock?.length ?? 0;
                pack.uint32(offset, $hyoo_crus_part.rock | (len << 8));
                if (rock)
                    buff.set(rock, offset + 4);
                else
                    buff.set(hash, offset + 4);
                offset += rock ? Math.ceil(len / 8 + .5) * 8 : 24;
            }
            return pack;
        }
    }
    $.$hyoo_crus_pack = $hyoo_crus_pack;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_time_interval extends $mol_time_base {
        constructor(config) {
            super();
            if (typeof config === 'string') {
                var chunks = config.split('/');
                if (chunks[0]) {
                    if (chunks[0][0].toUpperCase() === 'P') {
                        this._duration = new $mol_time_duration(chunks[0]);
                    }
                    else {
                        this._start = new $mol_time_moment(chunks[0]);
                    }
                }
                else {
                    this._start = new $mol_time_moment();
                }
                if (chunks[1]) {
                    if (chunks[1][0].toUpperCase() === 'P') {
                        this._duration = new $mol_time_duration(chunks[1]);
                    }
                    else {
                        this._end = new $mol_time_moment(chunks[1]);
                    }
                }
                else {
                    this._end = new $mol_time_moment();
                }
                return;
            }
            if (config.start !== undefined)
                this._start = new $mol_time_moment(config.start);
            if (config.end !== undefined)
                this._end = new $mol_time_moment(config.end);
            if (config.duration !== undefined)
                this._duration = new $mol_time_duration(config.duration);
        }
        _start;
        get start() {
            if (this._start)
                return this._start;
            return this._start = this._end.shift(this._duration.mult(-1));
        }
        _end;
        get end() {
            if (this._end)
                return this._end;
            return this._end = this._start.shift(this._duration);
        }
        _duration;
        get duration() {
            if (this._duration)
                return this._duration;
            return this._duration = new $mol_time_duration(this._end.valueOf() - this._start.valueOf());
        }
        toJSON() { return this.toString(); }
        toString() {
            return (this._start || this._duration || '').toString() + '/' + (this._end || this._duration || '').toString();
        }
        [Symbol.toPrimitive](mode) {
            return this.toString();
        }
    }
    $.$mol_time_interval = $mol_time_interval;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_serialize(node) {
        const serializer = new $mol_dom_context.XMLSerializer;
        return serializer.serializeToString(node);
    }
    $.$mol_dom_serialize = $mol_dom_serialize;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$hyoo_crus_vary_mapping = {
        nil: null,
        bin: Uint8Array,
        bool: Boolean,
        int: BigInt,
        real: Number,
        ints: BigInt64Array,
        reals: Float64Array,
        ref: Symbol,
        str: String,
        time: $mol_time_moment,
        dur: $mol_time_duration,
        range: $mol_time_interval,
        json: Object,
        jsan: Array,
        dom: $mol_dom_context.Element,
        tree: $mol_tree2,
    };
    let $hyoo_crus_vary_tip;
    (function ($hyoo_crus_vary_tip) {
        $hyoo_crus_vary_tip[$hyoo_crus_vary_tip["nil"] = 1] = "nil";
        $hyoo_crus_vary_tip[$hyoo_crus_vary_tip["bin"] = 2] = "bin";
        $hyoo_crus_vary_tip[$hyoo_crus_vary_tip["bool"] = 3] = "bool";
        $hyoo_crus_vary_tip[$hyoo_crus_vary_tip["int"] = 4] = "int";
        $hyoo_crus_vary_tip[$hyoo_crus_vary_tip["real"] = 5] = "real";
        $hyoo_crus_vary_tip[$hyoo_crus_vary_tip["ints"] = 6] = "ints";
        $hyoo_crus_vary_tip[$hyoo_crus_vary_tip["reals"] = 7] = "reals";
        $hyoo_crus_vary_tip[$hyoo_crus_vary_tip["ref"] = 8] = "ref";
        $hyoo_crus_vary_tip[$hyoo_crus_vary_tip["str"] = 16] = "str";
        $hyoo_crus_vary_tip[$hyoo_crus_vary_tip["time"] = 17] = "time";
        $hyoo_crus_vary_tip[$hyoo_crus_vary_tip["dur"] = 18] = "dur";
        $hyoo_crus_vary_tip[$hyoo_crus_vary_tip["range"] = 19] = "range";
        $hyoo_crus_vary_tip[$hyoo_crus_vary_tip["json"] = 20] = "json";
        $hyoo_crus_vary_tip[$hyoo_crus_vary_tip["jsan"] = 21] = "jsan";
        $hyoo_crus_vary_tip[$hyoo_crus_vary_tip["dom"] = 22] = "dom";
        $hyoo_crus_vary_tip[$hyoo_crus_vary_tip["tree"] = 23] = "tree";
    })($hyoo_crus_vary_tip = $.$hyoo_crus_vary_tip || ($.$hyoo_crus_vary_tip = {}));
    function $hyoo_crus_vary_switch(vary, ways) {
        if (vary === null)
            return ways.nil(vary);
        switch (typeof vary) {
            case "boolean": return ways.bool(vary);
            case "bigint": return ways.int(vary);
            case "number": return ways.real(vary);
            case "string": return ways.str(vary);
            case 'symbol': return ways.ref(vary);
        }
        switch (Reflect.getPrototypeOf(vary)) {
            case Object.prototype: return ways.json(vary);
            case Array.prototype: return ways.jsan(vary);
            case Uint8Array.prototype: return ways.bin(vary);
            case BigInt64Array.prototype: return ways.ints(vary);
            case Float64Array.prototype: return ways.reals(vary);
            case $mol_time_moment.prototype: return ways.time(vary);
            case $mol_time_duration.prototype: return ways.dur(vary);
            case $mol_time_interval.prototype: return ways.range(vary);
            case $mol_tree2.prototype: return ways.tree(vary);
        }
        if (vary instanceof $mol_dom_context.Element)
            return ways.dom(vary);
        return $mol_fail(new TypeError(`Unsupported vary type`));
    }
    $.$hyoo_crus_vary_switch = $hyoo_crus_vary_switch;
    function $hyoo_crus_vary_encode(vary) {
        return $hyoo_crus_vary_switch(vary, {
            nil: vary => ({ tip: 'nil', bin: new Uint8Array([]) }),
            bin: vary => ({ tip: 'bin', bin: vary }),
            bool: vary => ({ tip: 'bool', bin: new Uint8Array([Number(vary)]) }),
            int: vary => ({ tip: 'int', bin: new Uint8Array(new BigInt64Array([vary]).buffer) }),
            ints: vary => ({ tip: 'ints', bin: new Uint8Array(vary.buffer, vary.byteLength, vary.byteLength) }),
            real: vary => ({ tip: 'real', bin: new Uint8Array(new Float64Array([vary]).buffer) }),
            reals: vary => ({ tip: 'reals', bin: new Uint8Array(vary.buffer, vary.byteLength, vary.byteLength) }),
            ref: vary => ({ tip: 'ref', bin: $hyoo_crus_ref_encode(vary) }),
            str: vary => ({ tip: 'str', bin: $mol_charset_encode(vary) }),
            time: vary => ({ tip: 'time', bin: $mol_charset_encode(String(vary)) }),
            dur: vary => ({ tip: 'dur', bin: $mol_charset_encode(String(vary)) }),
            range: vary => ({ tip: 'range', bin: $mol_charset_encode(String(vary)) }),
            json: vary => ({ tip: 'json', bin: $mol_charset_encode(JSON.stringify(vary)) }),
            jsan: vary => ({ tip: 'jsan', bin: $mol_charset_encode(JSON.stringify(vary)) }),
            dom: vary => ({ tip: 'dom', bin: $mol_charset_encode($mol_dom_serialize(vary)) }),
            tree: vary => ({ tip: 'tree', bin: $mol_charset_encode(String(vary)) }),
        });
    }
    $.$hyoo_crus_vary_encode = $hyoo_crus_vary_encode;
    function $hyoo_crus_vary_decode({ tip, bin }) {
        switch (tip) {
            case 'nil': return null;
            case 'bin': return bin;
            case 'bool': return Boolean(bin[0]);
            case 'int': return new BigInt64Array(bin.buffer, bin.byteOffset, bin.byteLength / 8)[0];
            case 'ints': return new BigInt64Array(bin.buffer, bin.byteOffset, bin.byteLength / 8);
            case 'real': return new Float64Array(bin.buffer, bin.byteOffset, bin.byteLength / 8)[0];
            case 'reals': return new Float64Array(bin.buffer, bin.byteOffset, bin.byteLength / 8);
            case 'ref': return $hyoo_crus_ref_decode(bin);
            case 'str': return $mol_charset_decode(bin);
            case 'time': return new $mol_time_moment($mol_charset_decode(bin));
            case 'dur': return new $mol_time_duration($mol_charset_decode(bin));
            case 'range': return new $mol_time_interval($mol_charset_decode(bin));
            case 'json': return JSON.parse($mol_charset_decode(bin));
            case 'jsan': return JSON.parse($mol_charset_decode(bin));
            case 'dom': return $mol_dom_parse($mol_charset_decode(bin)).documentElement;
            case 'tree': return $$.$mol_tree2_from_string($mol_charset_decode(bin));
        }
    }
    $.$hyoo_crus_vary_decode = $hyoo_crus_vary_decode;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_crumbs = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElementNS: (space, name) => $mol_dom_context.document.createElementNS(space, name),
        createDocumentFragment: () => $mol_dom_context.document.createDocumentFragment(),
    };
    $.$mol_jsx_frag = '';
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        const guid = id ? $.$mol_jsx_prefix ? $.$mol_jsx_prefix + '/' + id : id : $.$mol_jsx_prefix;
        const crumbs_self = id ? $.$mol_jsx_crumbs.replace(/(\S+)/g, `$1_${id.replace(/\/.*/i, '')}`) : $.$mol_jsx_crumbs;
        if (Elem && $.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(guid)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        let node = guid ? $.$mol_jsx_document.getElementById(guid) : null;
        if ($.$mol_jsx_prefix) {
            const prefix_ext = $.$mol_jsx_prefix;
            const booked_ext = $.$mol_jsx_booked;
            const crumbs_ext = $.$mol_jsx_crumbs;
            for (const field in props) {
                const func = props[field];
                if (typeof func !== 'function')
                    continue;
                const wrapper = function (...args) {
                    const prefix = $.$mol_jsx_prefix;
                    const booked = $.$mol_jsx_booked;
                    const crumbs = $.$mol_jsx_crumbs;
                    try {
                        $.$mol_jsx_prefix = prefix_ext;
                        $.$mol_jsx_booked = booked_ext;
                        $.$mol_jsx_crumbs = crumbs_ext;
                        return func.call(this, ...args);
                    }
                    finally {
                        $.$mol_jsx_prefix = prefix;
                        $.$mol_jsx_booked = booked;
                        $.$mol_jsx_crumbs = crumbs;
                    }
                };
                $mol_func_name_from(wrapper, func);
                props[field] = wrapper;
            }
        }
        if (typeof Elem !== 'string') {
            if ('prototype' in Elem) {
                const view = node && node[String(Elem)] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                view.className = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                node = view.valueOf();
                node[String(Elem)] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                const crumbs = $.$mol_jsx_crumbs;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    $.$mol_jsx_crumbs = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                    $.$mol_jsx_crumbs = crumbs;
                }
            }
        }
        if (!node) {
            node = Elem
                ? $.$mol_jsx_document.createElementNS(props?.xmlns ?? 'http://www.w3.org/1999/xhtml', Elem)
                : $.$mol_jsx_document.createDocumentFragment();
        }
        $mol_dom_render_children(node, [].concat(...childNodes));
        if (!Elem)
            return node;
        if (guid)
            node.id = guid;
        for (const key in props) {
            if (key === 'id')
                continue;
            if (typeof props[key] === 'string') {
                if (typeof node[key] === 'string')
                    node[key] = props[key];
                node.setAttribute(key, props[key]);
            }
            else if (props[key] &&
                typeof props[key] === 'object' &&
                Reflect.getPrototypeOf(props[key]) === Reflect.getPrototypeOf({})) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            else {
                node[key] = props[key];
            }
        }
        if ($.$mol_jsx_crumbs)
            node.className = (props?.['class'] ? props['class'] + ' ' : '') + crumbs_self;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_bin_to_bytes(tree) {
        return Uint8Array.from(tree.kids, kid => parseInt(kid.value, 16));
    }
    $.$mol_tree2_bin_to_bytes = $mol_tree2_bin_to_bytes;
    function $mol_tree2_bin_from_bytes(bytes, span = $mol_span.unknown) {
        return $mol_tree2.list(Array.from(bytes, code => {
            return $mol_tree2.data(code.toString(16).padStart(2, '0'), [], span);
        }), span);
    }
    $.$mol_tree2_bin_from_bytes = $mol_tree2_bin_from_bytes;
    function $mol_tree2_bin_from_string(str, span = $mol_span.unknown) {
        return $mol_tree2_bin_from_bytes([...new TextEncoder().encode(str)], span);
    }
    $.$mol_tree2_bin_from_string = $mol_tree2_bin_from_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_xml_from_dom(dom) {
        switch (dom.nodeType) {
            case dom.DOCUMENT_NODE: {
                let kids = [];
                for (const kid of dom.childNodes) {
                    kids.push($mol_tree2_xml_from_dom(kid));
                }
                return $mol_tree2.list(kids);
            }
            case dom.PROCESSING_INSTRUCTION_NODE: {
                return $mol_tree2.struct('?', [
                    $mol_tree2.struct(dom.nodeName, dom.nodeValue.split(' ').map(chunk => {
                        const [, name, value] = /^(.*?)(?:="(.*?)")?$/.exec(chunk);
                        const kids = value ? [$mol_tree2.data(value)] : [];
                        return $mol_tree2.struct(name, kids);
                    }))
                ]);
            }
            case dom.DOCUMENT_TYPE_NODE: {
                const dom2 = dom;
                return $mol_tree2.struct('!', [
                    $mol_tree2.struct('DOCTYPE', [
                        $mol_tree2.struct(dom2.name)
                    ])
                ]);
            }
            case dom.ELEMENT_NODE: {
                let kids = [];
                for (const attr of dom.attributes) {
                    kids.push($mol_tree2.struct('@', [
                        $mol_tree2.struct(attr.nodeName, [
                            $mol_tree2.data(attr.nodeValue)
                        ])
                    ]));
                }
                for (const kid of dom.childNodes) {
                    const k = $mol_tree2_xml_from_dom(kid);
                    if (k.type || k.value)
                        kids.push(k);
                }
                return $mol_tree2.struct(dom.nodeName, kids);
            }
            case dom.COMMENT_NODE: {
                return $mol_tree2.struct('--', [
                    $mol_tree2.data(dom.nodeValue)
                ]);
            }
            case dom.TEXT_NODE: {
                if (!dom.nodeValue.trim())
                    return $mol_tree2.list([]);
                return $mol_tree2.data(dom.nodeValue.replace(/\s+/g, ' '));
            }
        }
        return $mol_fail(new Error(`Unsupported node ${dom.nodeName}`));
    }
    $.$mol_tree2_xml_from_dom = $mol_tree2_xml_from_dom;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $hyoo_crus_vary_cast_bin(vary) {
        return vary === null || vary === '' ? null : $hyoo_crus_vary_encode(vary).bin;
    }
    $.$hyoo_crus_vary_cast_bin = $hyoo_crus_vary_cast_bin;
    function $hyoo_crus_vary_cast_bool(vary) {
        return $hyoo_crus_vary_switch(vary, {
            nil: vary => null,
            bin: vary => Boolean(vary.length),
            bool: vary => vary,
            int: vary => Boolean(vary),
            real: vary => Boolean(vary),
            ints: vary => Boolean(vary.length),
            reals: vary => Boolean(vary.length),
            ref: vary => Boolean(vary.description),
            str: vary => Boolean(vary),
            time: vary => Boolean(vary.valueOf()),
            dur: vary => Boolean(vary.valueOf()),
            range: vary => Boolean(vary.duration.valueOf()),
            json: vary => Boolean(Reflect.ownKeys(vary).length),
            jsan: vary => Boolean(vary.length),
            dom: vary => Boolean(vary.attributes.length + vary.childNodes.length),
            tree: vary => Boolean(vary.value || vary.kids.length),
        });
    }
    $.$hyoo_crus_vary_cast_bool = $hyoo_crus_vary_cast_bool;
    function $hyoo_crus_vary_cast_int(vary) {
        return $hyoo_crus_vary_switch(vary, {
            nil: vary => null,
            bin: vary => BigInt(vary.length),
            bool: vary => BigInt(vary),
            int: vary => vary,
            real: vary => Number.isFinite(vary) ? BigInt(Math.trunc(vary)) : null,
            ints: vary => BigInt(vary.length),
            reals: vary => BigInt(vary.length),
            ref: vary => null,
            str: vary => {
                try {
                    return vary ? BigInt(vary) : null;
                }
                catch {
                    return null;
                }
            },
            time: vary => BigInt(vary.valueOf()),
            dur: vary => BigInt(vary.valueOf()),
            range: vary => BigInt(vary.duration.valueOf()),
            json: vary => BigInt(Reflect.ownKeys(vary).length),
            jsan: vary => BigInt(vary.length),
            dom: vary => BigInt(vary.attributes.length + vary.childNodes.length),
            tree: vary => {
                try {
                    return BigInt(vary.value);
                }
                catch {
                    return BigInt(vary.kids.length);
                }
            },
        });
    }
    $.$hyoo_crus_vary_cast_int = $hyoo_crus_vary_cast_int;
    function $hyoo_crus_vary_cast_real(vary) {
        return $hyoo_crus_vary_switch(vary, {
            nil: vary => null,
            bin: vary => vary.length,
            bool: vary => Number(vary),
            int: vary => Number(vary),
            real: vary => vary,
            ints: vary => vary.length,
            reals: vary => vary.length,
            ref: vary => null,
            str: vary => vary ? Number(vary) : null,
            time: vary => vary.valueOf(),
            dur: vary => vary.valueOf(),
            range: vary => vary.duration.valueOf(),
            json: vary => Reflect.ownKeys(vary).length,
            jsan: vary => vary.length,
            dom: vary => Number(vary.attributes.length + vary.childNodes.length),
            tree: vary => Number(vary.value || vary.kids.length),
        });
    }
    $.$hyoo_crus_vary_cast_real = $hyoo_crus_vary_cast_real;
    function $hyoo_crus_vary_cast_ints(vary) {
        return $hyoo_crus_vary_switch(vary, {
            nil: vary => null,
            bin: vary => new BigInt64Array([...vary].map(BigInt)),
            bool: vary => vary ? new BigInt64Array([1n]) : null,
            int: vary => new BigInt64Array([vary]),
            real: vary => Number.isFinite(vary) ? new BigInt64Array([BigInt(vary)]) : null,
            ints: vary => vary,
            reals: vary => new BigInt64Array([...vary].map(BigInt)),
            ref: vary => null,
            str: vary => {
                if (!vary)
                    return null;
                return new BigInt64Array(vary.split(',').map(v => BigInt(v) || 0n));
            },
            time: vary => new BigInt64Array([BigInt(vary.valueOf())]),
            dur: vary => new BigInt64Array([BigInt(vary.valueOf())]),
            range: vary => null,
            json: vary => null,
            jsan: vary => null,
            dom: vary => null,
            tree: vary => null,
        });
    }
    $.$hyoo_crus_vary_cast_ints = $hyoo_crus_vary_cast_ints;
    function $hyoo_crus_vary_cast_reals(vary) {
        return $hyoo_crus_vary_switch(vary, {
            nil: vary => null,
            bin: vary => new Float64Array([...vary]),
            bool: vary => vary ? new Float64Array([1]) : null,
            int: vary => new Float64Array([Number(vary)]),
            real: vary => (vary && Number.isFinite(vary)) ? new Float64Array([vary]) : null,
            ints: vary => new Float64Array([...vary].map(Number)),
            reals: vary => vary,
            ref: vary => null,
            str: vary => {
                if (!vary)
                    return null;
                return new Float64Array(vary.split(',').map(v => Number(v) || 0));
            },
            time: vary => new Float64Array([vary.valueOf()]),
            dur: vary => new Float64Array([vary.valueOf()]),
            range: vary => null,
            json: vary => null,
            jsan: vary => null,
            dom: vary => null,
            tree: vary => null,
        });
    }
    $.$hyoo_crus_vary_cast_reals = $hyoo_crus_vary_cast_reals;
    function $hyoo_crus_vary_cast_ref(vary) {
        return $hyoo_crus_vary_switch(vary, {
            nil: vary => null,
            bin: vary => (!vary.length || vary.length % 6) ? null : $hyoo_crus_ref_decode(vary),
            bool: vary => null,
            int: vary => null,
            real: vary => null,
            ints: vary => null,
            reals: vary => null,
            ref: vary => vary,
            str: vary => {
                try {
                    return $hyoo_crus_ref(vary);
                }
                catch {
                    return null;
                }
            },
            time: vary => null,
            dur: vary => null,
            range: vary => null,
            json: vary => null,
            jsan: vary => null,
            dom: vary => null,
            tree: vary => {
                try {
                    return $hyoo_crus_ref(vary.type);
                }
                catch {
                    return null;
                }
            },
        });
    }
    $.$hyoo_crus_vary_cast_ref = $hyoo_crus_vary_cast_ref;
    function $hyoo_crus_vary_cast_str(vary) {
        return $hyoo_crus_vary_switch(vary, {
            nil: vary => null,
            bin: vary => [...vary].map(n => n.toString(16).padStart(2, '0')).join(''),
            bool: vary => String(vary),
            int: vary => String(vary),
            real: vary => String(vary),
            ints: vary => vary.join(','),
            reals: vary => vary.join(','),
            ref: vary => vary.description,
            str: vary => vary,
            time: vary => String(vary),
            dur: vary => String(vary),
            range: vary => String(vary),
            json: vary => JSON.stringify(vary),
            jsan: vary => JSON.stringify(vary),
            dom: vary => $mol_dom_serialize(vary),
            tree: vary => String(vary),
        });
    }
    $.$hyoo_crus_vary_cast_str = $hyoo_crus_vary_cast_str;
    function $hyoo_crus_vary_cast_time(vary) {
        return $hyoo_crus_vary_switch(vary, {
            nil: vary => null,
            bin: vary => null,
            bool: vary => null,
            int: vary => new $mol_time_moment(Number(vary & 0xffffffffffffn)),
            real: vary => {
                try {
                    return new $mol_time_moment(vary);
                }
                catch {
                    return null;
                }
            },
            ints: vary => null,
            reals: vary => null,
            ref: vary => null,
            str: vary => {
                try {
                    return vary ? new $mol_time_moment(vary) : null;
                }
                catch {
                    return null;
                }
            },
            time: vary => vary,
            dur: vary => null,
            range: vary => null,
            json: vary => {
                try {
                    return new $mol_time_moment(vary);
                }
                catch {
                    return null;
                }
            },
            jsan: vary => null,
            dom: vary => null,
            tree: vary => null,
        });
    }
    $.$hyoo_crus_vary_cast_time = $hyoo_crus_vary_cast_time;
    function $hyoo_crus_vary_cast_dur(vary) {
        return $hyoo_crus_vary_switch(vary, {
            nil: vary => null,
            bin: vary => null,
            bool: vary => null,
            int: vary => new $mol_time_duration(Number(vary & 0xffffffffffffn)),
            real: vary => {
                try {
                    return new $mol_time_duration(vary);
                }
                catch {
                    return null;
                }
            },
            ints: vary => null,
            reals: vary => null,
            ref: vary => null,
            str: vary => {
                try {
                    return new $mol_time_duration(vary);
                }
                catch {
                    return null;
                }
            },
            time: vary => null,
            dur: vary => vary,
            range: vary => null,
            json: vary => new $mol_time_duration(vary),
            jsan: vary => null,
            dom: vary => null,
            tree: vary => null,
        });
    }
    $.$hyoo_crus_vary_cast_dur = $hyoo_crus_vary_cast_dur;
    function $hyoo_crus_vary_cast_range(vary) {
        return $hyoo_crus_vary_switch(vary, {
            nil: vary => null,
            bin: vary => null,
            bool: vary => null,
            int: vary => null,
            real: vary => null,
            ints: vary => null,
            reals: vary => null,
            ref: vary => null,
            str: vary => {
                try {
                    return vary ? new $mol_time_interval(vary) : null;
                }
                catch {
                    return null;
                }
            },
            time: vary => new $mol_time_interval({ start: vary, duration: 0 }),
            dur: vary => null,
            range: vary => vary,
            json: vary => {
                try {
                    return new $mol_time_interval(vary);
                }
                catch {
                    return null;
                }
            },
            jsan: vary => null,
            dom: vary => null,
            tree: vary => null,
        });
    }
    $.$hyoo_crus_vary_cast_range = $hyoo_crus_vary_cast_range;
    function $hyoo_crus_vary_cast_json(vary) {
        return $hyoo_crus_vary_switch(vary, {
            nil: vary => null,
            bin: vary => null,
            bool: vary => null,
            int: vary => null,
            real: vary => null,
            ints: vary => null,
            reals: vary => null,
            ref: vary => null,
            str: vary => {
                if (!vary)
                    return null;
                try {
                    const res = JSON.parse(vary);
                    if (typeof res === 'object')
                        return res;
                    return null;
                }
                catch {
                    return null;
                }
            },
            time: vary => ({ ...vary }),
            dur: vary => ({ ...vary }),
            range: vary => ({ ...vary }),
            json: vary => vary,
            jsan: vary => Object(vary[0]),
            dom: vary => null,
            tree: vary => null,
        });
    }
    $.$hyoo_crus_vary_cast_json = $hyoo_crus_vary_cast_json;
    function $hyoo_crus_vary_cast_jsan(vary) {
        return $hyoo_crus_vary_switch(vary, {
            nil: vary => null,
            bin: vary => [...vary],
            bool: vary => [vary],
            int: vary => [vary.toString()],
            real: vary => Number.isFinite(vary) ? [vary] : null,
            ints: vary => [...vary].map(v => Number(v)),
            reals: vary => [...vary],
            ref: vary => [vary.description],
            str: vary => {
                if (!vary)
                    return null;
                try {
                    return [].concat(JSON.parse(vary));
                }
                catch {
                    return [vary];
                }
            },
            time: vary => [vary.toJSON()],
            dur: vary => [vary.toJSON()],
            range: vary => [vary.toJSON()],
            json: vary => [vary],
            jsan: vary => vary,
            dom: vary => [$mol_dom_serialize(vary)],
            tree: vary => [vary.toString()],
        });
    }
    $.$hyoo_crus_vary_cast_jsan = $hyoo_crus_vary_cast_jsan;
    function $hyoo_crus_vary_cast_dom(vary) {
        return $hyoo_crus_vary_switch(vary, {
            nil: vary => null,
            bin: vary => $mol_jsx("body", null, vary && $mol_base64_ae_encode(vary)),
            bool: vary => $mol_jsx("body", null, vary),
            int: vary => $mol_jsx("body", null, vary),
            real: vary => $mol_jsx("body", null, vary),
            ints: vary => $mol_jsx("body", null, vary.join(',')),
            reals: vary => $mol_jsx("body", null, vary.join(',')),
            ref: vary => $mol_jsx("body", null, vary.description),
            str: vary => {
                if (!vary)
                    return null;
                try {
                    return vary ? $mol_dom_parse(vary, 'application/xhtml+xml').documentElement : null;
                }
                catch {
                    return $mol_jsx("body", null, vary);
                }
            },
            time: vary => $mol_jsx("body", null, vary),
            dur: vary => $mol_jsx("body", null, vary),
            range: vary => $mol_jsx("body", null, vary),
            json: vary => $mol_jsx("body", null, JSON.stringify(vary)),
            jsan: vary => $mol_jsx("body", null, JSON.stringify(vary)),
            dom: vary => vary,
            tree: vary => $mol_jsx("body", null, vary),
        });
    }
    $.$hyoo_crus_vary_cast_dom = $hyoo_crus_vary_cast_dom;
    function $hyoo_crus_vary_cast_tree(vary) {
        return $hyoo_crus_vary_switch(vary, {
            nil: vary => null,
            bin: vary => $mol_tree2_bin_from_bytes(vary),
            bool: vary => $mol_tree2.struct(vary.toString()),
            int: vary => $mol_tree2.struct(vary.toString()),
            real: vary => $mol_tree2.struct(vary.toString()),
            ints: vary => $mol_tree2.list([...vary].map(v => $mol_tree2.struct(v.toString()))),
            reals: vary => $mol_tree2.list([...vary].map(v => $mol_tree2.struct(v.toString()))),
            ref: vary => $mol_tree2.struct(vary.description),
            str: vary => {
                if (!vary)
                    return null;
                try {
                    return $$.$mol_tree2_from_string(vary);
                }
                catch {
                    return $$.$mol_tree2.data(vary);
                }
            },
            time: vary => $mol_tree2.struct(vary.toString()),
            dur: vary => $mol_tree2.struct(vary.toString()),
            range: vary => $mol_tree2.struct(vary.toString()),
            json: vary => $$.$mol_tree2_from_json(vary),
            jsan: vary => $$.$mol_tree2_from_json(vary),
            dom: vary => $$.$mol_tree2_xml_from_dom(vary),
            tree: vary => vary,
        });
    }
    $.$hyoo_crus_vary_cast_tree = $hyoo_crus_vary_cast_tree;
    $.$hyoo_crus_vary_cast_funcs = {
        nil: () => null,
        bin: $hyoo_crus_vary_cast_bin,
        bool: $hyoo_crus_vary_cast_bool,
        int: $hyoo_crus_vary_cast_int,
        real: $hyoo_crus_vary_cast_real,
        ints: $hyoo_crus_vary_cast_ints,
        reals: $hyoo_crus_vary_cast_reals,
        ref: $hyoo_crus_vary_cast_ref,
        str: $hyoo_crus_vary_cast_str,
        time: $hyoo_crus_vary_cast_time,
        dur: $hyoo_crus_vary_cast_dur,
        range: $hyoo_crus_vary_cast_range,
        json: $hyoo_crus_vary_cast_json,
        jsan: $hyoo_crus_vary_cast_jsan,
        dom: $hyoo_crus_vary_cast_dom,
        tree: $hyoo_crus_vary_cast_tree,
    };
    function $hyoo_crus_vary_cast(tip, vary) {
        return $.$hyoo_crus_vary_cast_funcs[tip](vary);
    }
    $.$hyoo_crus_vary_cast = $hyoo_crus_vary_cast;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_guard_defined(value) {
        return value !== null && value !== undefined;
    }
    $.$mol_guard_defined = $mol_guard_defined;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_bus extends $mol_object {
        name;
        handle;
        channel;
        constructor(name, handle) {
            super();
            this.name = name;
            this.handle = handle;
            const channel = new BroadcastChannel(name);
            channel.onmessage = (event) => this.handle(event.data);
            this.channel = channel;
        }
        destructor() {
            this.channel.close();
        }
        send(data) {
            this.channel.postMessage(data);
        }
    }
    $.$mol_bus = $mol_bus;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static prolog = '';
        static separator = ' ';
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static href_normal() {
            return this.link({});
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] ?? null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            const params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            const chunks = [];
            for (const key in next) {
                if (next[key] !== null) {
                    chunks.push([key, next[key]].map(encodeURIComponent).join('='));
                }
            }
            return chunks.join(' ');
        }
        static go(next) {
            this.href(this.link(next));
        }
        static commit() { }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            const prefix = this.prefix;
            const dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $hyoo_crus_log() {
        return this.$mol_state_arg.value('hyoo_crus_log') !== null;
    }
    $.$hyoo_crus_log = $hyoo_crus_log;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_race(...tasks) {
        const results = tasks.map(task => {
            try {
                return task();
            }
            catch (error) {
                return error;
            }
        });
        const promises = results.filter(res => $mol_promise_like(res));
        if (promises.length)
            $mol_fail(Promise.race(promises));
        const error = results.find(res => res instanceof Error);
        if (error)
            $mol_fail(error);
        return results;
    }
    $.$mol_wire_race = $mol_wire_race;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $hyoo_crus_land_root;
    (function ($hyoo_crus_land_root) {
        $hyoo_crus_land_root["data"] = "";
        $hyoo_crus_land_root["tine"] = "AQAAAAAA";
    })($hyoo_crus_land_root = $.$hyoo_crus_land_root || ($.$hyoo_crus_land_root = {}));
    class $hyoo_crus_land extends $mol_object {
        ref() {
            return this.auth().lord();
        }
        auth() {
            return this.$.$hyoo_crus_auth.current();
        }
        faces = new $hyoo_crus_face_map;
        pass = new $mol_wire_dict();
        gift = new $mol_wire_dict();
        sand = new $mol_wire_dict();
        self_all = new $mol_wire_dict();
        self_make(idea = Math.floor(Math.random() * 2 ** 48)) {
            const auth = this.auth();
            const rank = this.lord_rank(auth.lord());
            if (rank < $hyoo_crus_rank_tier.post)
                $mol_fail(new Error(`Rank too low (${rank})`));
            for (let i = 0; i < 4096; ++i) {
                idea = (idea + 1) % 2 ** 48;
                if (!idea)
                    continue;
                const idea_str = $mol_base64_ae_encode(new Uint8Array(new BigUint64Array([BigInt(idea)]).buffer, 0, 6));
                if (this.self_all.has(idea_str))
                    continue;
                this.self_all.set(idea_str, null);
                return idea_str;
            }
            $mol_fail(new Error(`Too long self generation`));
        }
        home() {
            return this.Data($hyoo_crus_home);
        }
        area_make(idea = Math.floor(Math.random() * 2 ** 48)) {
            this.loading();
            const id = $mol_base64_ae_encode(new Uint8Array(new BigUint64Array([BigInt(idea)]).buffer, 0, 6));
            const ref = $hyoo_crus_ref($hyoo_crus_ref_lord(this.ref()).description + '_' + id);
            const area = this.$.$hyoo_crus_glob.Land(ref);
            const units = this.unit_sort([...this.pass.values(), ...this.gift.values()]).map(unit => {
                const clone = $hyoo_crus_unit.from(unit).narrow();
                clone._land = area;
                $hyoo_crus_unit_trusted.add(clone);
                return clone;
            });
            const errors = area.apply_unit(units, 'skip_check').filter(Boolean);
            for (const error of errors)
                this.$.$mol_log3_warn({
                    place: `${this}.area_make()`,
                    message: error,
                    hint: 'Send it to developer',
                });
            area.bus();
            area.sync_mine();
            area.sync_yard();
            return area;
        }
        Data(Node) {
            return this.Node(Node).Item($hyoo_crus_land_root.data);
        }
        Tine() {
            return this.Node($hyoo_crus_list_ref).Item($hyoo_crus_land_root.tine);
        }
        Node(Node) {
            return new $hyoo_crus_fund((head) => {
                if (head === 'AAAAAAAA')
                    return this.Node(Node).Item($hyoo_crus_land_root.data);
                return Node.make({
                    land: () => this.sync(),
                    head: $mol_const(head),
                });
            });
        }
        total() {
            let total = this.pass.size + this.gift.size;
            for (const peers of this.sand.values()) {
                for (const units of peers.values()) {
                    total += units.size;
                }
            }
            return total;
        }
        joined_list() {
            return [...this.pass.values()].map(unit => unit.lord());
        }
        key() {
            const pass = this.pass.get($hyoo_crus_ref_peer(this.ref()));
            if (!pass)
                return null;
            return $hyoo_crus_auth.from(pass.auth());
        }
        lord_rank(lord, next) {
            if (lord === $hyoo_crus_ref_lord(this.ref()))
                return $hyoo_crus_rank_rule;
            const prev = this.gift.get(lord)?.rank()
                ?? this.gift.get($hyoo_crus_ref(''))?.rank()
                ?? (this.encrypted() ? $hyoo_crus_rank_deny : $hyoo_crus_rank_read);
            if (next === undefined)
                return prev;
            if (next === prev)
                return prev;
            this.give(lord, next);
            return next;
        }
        peer_rank(peer) {
            const auth = this.pass.get(peer);
            if (auth)
                return this.lord_rank(auth.lord());
            return this.encrypted() ? $hyoo_crus_rank_deny : $hyoo_crus_rank_read;
        }
        unit_sort(units) {
            const dict = new Map();
            for (const unit of units)
                dict.set(unit.key(), unit);
            const lord = $hyoo_crus_ref_lord(this.ref());
            const graph = new $mol_graph();
            for (const unit of units) {
                unit.choose({
                    pass: pass => {
                        if (pass.lord() === lord)
                            return;
                        graph.link(pass.key(), 'gift:');
                    },
                    gift: gift => {
                        graph.link('pass:' + $hyoo_crus_ref_peer(gift.dest()), gift.key());
                        graph.link(gift.key(), 'pass:' + gift.peer());
                    },
                    sand: sand => {
                        graph.link(sand.key(), 'pass:' + sand.peer());
                    },
                });
            }
            graph.acyclic(() => 1);
            return [...graph.sorted].map(key => dict.get(key)).filter(Boolean);
        }
        delta_unit(face = new $hyoo_crus_face_map) {
            this.loading();
            const delta = [];
            const passed = new Set();
            const auth = (peer) => {
                if (passed.has(peer))
                    return;
                if (face.get(peer))
                    return;
                const pass = this.pass.get(peer);
                if (!pass)
                    $mol_fail(new Error(`No pass for Peer (${peer})`));
                delta.push(pass);
                passed.add(peer);
            };
            for (const [lord, unit] of this.gift) {
                const time = face.get(unit.peer()) ?? 0;
                if (time >= unit.time())
                    continue;
                auth(unit.peer());
                delta.push(unit);
            }
            for (const kids of this.sand.values()) {
                for (const peers of kids.values()) {
                    for (const unit of peers.values()) {
                        const time = face.get(unit.peer()) ?? 0;
                        if (time >= unit.time())
                            continue;
                        auth(unit.peer());
                        delta.push(unit);
                    }
                }
            }
            for (const [peer, unit] of this.pass) {
                if (passed.has(peer))
                    continue;
                if (face.has(unit.peer()))
                    continue;
                delta.push(unit);
                passed.add(peer);
            }
            if (delta.length || this.faces.total <= this.faces.total)
                return delta;
            this.$.$mol_log3_warn({
                place: this,
                message: 'Unit Absent',
                hint: 'Relax, Delta contains all Units to restore',
                face,
            });
            return this.delta_unit();
        }
        delta_pack(face = new $hyoo_crus_face_map) {
            const parts = this.delta_parts(face);
            if (!parts)
                return null;
            const pack = $hyoo_crus_pack.make(parts);
            return pack;
        }
        delta_parts(face = new $hyoo_crus_face_map) {
            const units = this.delta_unit(face);
            if (!units.length)
                return null;
            const rocks = [];
            for (let unit of units) {
                if (unit.kind() !== 'sand')
                    continue;
                const sand = unit.narrow();
                if (sand.size() <= 32)
                    continue;
                const rock = this.$.$hyoo_crus_mine.rock(sand.hash()) ?? null;
                rocks.push([sand.hash(), rock]);
            }
            return {
                lands: {
                    [this.ref()]: {
                        faces: new $hyoo_crus_face_map,
                        units,
                    },
                },
                rocks,
            };
        }
        faces_pack() {
            const pack = $hyoo_crus_pack.make({
                lands: {
                    [this.ref()]: { faces: this.faces, units: [] },
                },
                rocks: [],
            });
            return pack;
        }
        apply_unit(delta, skip_check) {
            if (!delta.length)
                return [];
            if (!skip_check)
                this.loading();
            const doubt = delta.filter(unit => !$hyoo_crus_unit_trusted.has(unit));
            if (doubt.length) {
                const errors = $mol_wire_sync(this).units_verify(doubt);
                if (errors.some(v => v))
                    return errors;
            }
            const errors = this.apply_unit_trust(delta, skip_check);
            for (const unit of doubt)
                $hyoo_crus_unit_trusted.add(unit);
            return errors;
        }
        async units_verify(units) {
            const passes = units.filter(unit => unit.kind() === 'pass');
            const auth = new Map(passes.map((unit) => [
                unit.peer(),
                $mol_crypto_key_public.from(unit.auth()),
            ]));
            const mixin = $hyoo_crus_ref_encode(this.ref());
            const mixin_lord = $hyoo_crus_ref_encode($hyoo_crus_ref_lord(this.ref()));
            return await Promise.all(units.map(async (unit) => {
                let key_public = this.key_public(unit.peer());
                if (!key_public)
                    key_public = auth.get(unit.peer()) ?? null;
                if (!key_public)
                    return `No public key for peer (${unit.peer()})`;
                const sign = unit.sign();
                let sens = unit.sens().slice();
                for (let i = 0; i < mixin.length; ++i)
                    sens[i + 2] ^= mixin[i];
                if (await key_public.verify(sens, sign))
                    return '';
                sens = unit.sens().slice();
                for (let i = 0; i < mixin_lord.length; ++i)
                    sens[i + 2] ^= mixin_lord[i];
                if (await key_public.verify(sens, sign))
                    return '';
                return `Wrong unit sign`;
            }));
        }
        apply_unit_trust(delta, skip_check) {
            return delta.map(unit => {
                let need_recheck = false;
                const res = unit.choose({
                    pass: next => {
                        const lord = next.lord();
                        const peer = next.peer();
                        if (!skip_check && this.lord_rank(lord) < next.rank_min())
                            return 'Need reg rank to join';
                        const exists = this.pass.get(peer);
                        if (exists)
                            return '';
                        this.pass.set(peer, next);
                        this.faces.time_max(peer, 0);
                        this.faces.total++;
                    },
                    gift: next => {
                        const peer = next.peer();
                        const dest = next.dest();
                        if (!skip_check && this.peer_rank(peer) < next.rank_min())
                            return 'Need law rank to change rank';
                        const prev = this.gift.get(dest);
                        if (prev && $hyoo_crus_gift.compare(prev, next) <= 0)
                            return '';
                        this.gift.set(dest, next);
                        this.faces.time_max(peer, next.time());
                        if (!prev)
                            this.faces.total++;
                        if ((prev?.rank() ?? $hyoo_crus_rank_deny) > next.rank())
                            need_recheck = true;
                    },
                    sand: next => {
                        const head = next.head();
                        const peer = next.peer();
                        const self = next.self();
                        if (!skip_check && this.peer_rank(peer) < next.rank_min())
                            return 'Need mod rank to post data';
                        let peers = this.sand.get(head);
                        if (!peers)
                            this.sand.set(head, peers = new $mol_wire_dict);
                        let units = peers.get(peer);
                        if (!units)
                            peers.set(peer, units = new $mol_wire_dict);
                        const prev = units.get(self);
                        if (prev && $hyoo_crus_sand.compare(prev, next) <= 0)
                            return '';
                        units.set(self, next);
                        this.self_all.set(self, next);
                        this.faces.time_max(peer, next.time());
                        if (!prev)
                            this.faces.total++;
                    },
                });
                if (need_recheck)
                    this.recheck();
                return res ?? '';
            });
        }
        apply_land(land) {
            return this.apply_unit(land.delta_unit());
        }
        recheck() {
            for (const [peer, pass] of this.pass) {
                if (this.lord_rank(pass.lord()) >= pass.rank_min())
                    continue;
                this.pass.delete(peer);
                this.faces.total--;
            }
            for (const [lord, gift] of this.gift) {
                if (this.peer_rank(gift.peer()) >= gift.rank_min())
                    continue;
                this.gift.delete(lord);
                this.faces.total--;
            }
            for (const [head, peers] of this.sand) {
                for (const [peer, sands] of peers) {
                    const rank = this.peer_rank(peer);
                    for (const [self, sand] of sands) {
                        if (rank >= sand.rank_min())
                            continue;
                        sands.delete(self);
                        this.faces.total--;
                    }
                }
            }
        }
        fork(preset = { '': $hyoo_crus_rank_read }) {
            const land = this.$.$hyoo_crus_glob.land_grab(preset);
            land.Tine().items_vary([this.ref()]);
            return land;
        }
        sand_ordered({ head, peer }) {
            this.sync();
            const queue = peer
                ? [...this.sand.get(head)?.get(peer)?.values() ?? []]
                : [...this.sand.get(head)?.values() ?? []].flatMap(units => [...units.values()]);
            const slices = new Map;
            for (const sand of queue)
                slices.set(sand, 0);
            merge: if (head !== $hyoo_crus_land_root.tine) {
                const tines = (this.Tine()?.items_vary().slice().reverse() ?? [])
                    .map($hyoo_crus_vary_cast_ref)
                    .filter($mol_guard_defined);
                if (!tines.length)
                    break merge;
                const exists = new Set(queue.map(sand => sand.self()));
                const glob = this.$.$hyoo_crus_glob;
                let slice = 0;
                for (const ref of tines) {
                    ++slice;
                    const land = glob.Land(ref);
                    for (const sand of land.sand_ordered({ head, peer })) {
                        if (exists.has(sand.self()))
                            continue;
                        queue.push(sand);
                        exists.add(sand.self());
                        slices.set(sand, slice);
                    }
                }
            }
            if (queue.length < 2)
                return queue;
            const compare = (left, right) => {
                return (slices.get(left) - slices.get(right)) || $hyoo_crus_sand.compare(left, right);
            };
            queue.sort(compare);
            let entry = {
                sand: null,
                next: '',
                prev: '',
            };
            const key = peer === null ? (sand) => sand.key() : (sand) => sand.self();
            const by_key = new Map([['', entry]]);
            const by_self = new Map([['', entry]]);
            while (queue.length) {
                const last = queue.pop();
                by_key.get(entry.prev).next = key(last);
                const item = { sand: last, next: '', prev: entry.prev };
                by_key.set(key(last), item);
                const exists = by_self.get(last.self());
                if (!exists || compare(exists.sand, last) < 0) {
                    by_self.set(last.self(), item);
                }
                entry.prev = key(last);
                for (let cursor = queue.length - 1; cursor >= 0; --cursor) {
                    const kid = queue[cursor];
                    let lead = by_self.get(kid.lead());
                    if (!lead)
                        continue;
                    while (lead.next && (compare(by_key.get(lead.next).sand, kid) < 0))
                        lead = by_key.get(lead.next);
                    const exists1 = by_key.get(key(kid));
                    if (exists1) {
                        if ((lead.sand ? key(lead.sand) : '') === exists1.prev) {
                            exists1.sand = kid;
                            if (cursor === queue.length - 1)
                                queue.pop();
                            continue;
                        }
                        by_key.get(exists1.prev).next = exists1.next;
                        by_key.get(exists1.next).prev = exists1.prev;
                    }
                    const follower = by_key.get(lead.next);
                    follower.prev = key(kid);
                    const item = { sand: kid, next: lead.next, prev: lead.sand ? key(lead.sand) : '' };
                    by_key.set(key(kid), item);
                    const exists2 = by_self.get(kid.self());
                    if (!exists2 || compare(exists2.sand, kid) < 0) {
                        by_self.set(kid.self(), item);
                    }
                    lead.next = key(kid);
                    if (cursor === queue.length - 1)
                        queue.pop();
                    cursor = queue.length;
                }
            }
            const res = [];
            while (entry.next) {
                entry = by_key.get(entry.next);
                res.push(entry.sand);
            }
            return res;
        }
        join() {
            const auth = this.auth();
            const prev = this.pass.get(auth.peer());
            if (prev)
                return prev;
            const next = new $hyoo_crus_pass;
            $hyoo_crus_unit_trusted.add(next);
            next.auth(auth.public().asArray());
            next._land = this;
            const error = this.apply_unit([next])[0];
            if (error)
                $mol_fail(new Error(error));
            this.broadcast();
            return next;
        }
        give(dest, rank) {
            this.join();
            const auth = this.auth();
            const unit = new $hyoo_crus_gift;
            $hyoo_crus_unit_trusted.add(unit);
            unit.rank(rank);
            unit.time(this.faces.tick());
            unit.peer(auth.peer());
            unit.dest(dest ? dest instanceof $hyoo_crus_auth ? dest.lord() : dest : $hyoo_crus_ref(''));
            unit._land = this;
            if (rank >= $hyoo_crus_rank_read) {
                const secret_land = this.secret();
                if (secret_land) {
                    if (!dest)
                        $mol_fail(new Error(`Encrypted land can't be shared to everyone`));
                    if (typeof dest === 'symbol') {
                        $mol_fail(new Error(`No pub key for lord (${dest.description})`));
                    }
                    const secret_mutual = this.secret_mutual(dest.toString());
                    if (secret_mutual) {
                        const secret_bin = $mol_wire_sync(secret_land).serial();
                        const bill = $mol_wire_sync(secret_mutual).encrypt(secret_bin, unit.salt());
                        unit.bill().set(bill);
                    }
                }
            }
            const error = this.apply_unit([unit])[0];
            if (error)
                $mol_fail(new Error(error));
            this.broadcast();
            return unit;
        }
        post(lead, head, self, vary, tag = 'term') {
            if (typeof vary === 'symbol')
                vary = $hyoo_crus_ref_relate(this.ref(), vary);
            this.join();
            const auth = this.auth();
            const unit = new $hyoo_crus_sand;
            $hyoo_crus_unit_trusted.add(unit);
            unit.time(this.faces.tick());
            unit.peer(auth.peer());
            unit.lead(lead);
            unit.head(head);
            unit._vary = vary;
            unit._land = this;
            let { tip, bin } = $hyoo_crus_vary_encode(vary);
            unit._open = bin;
            if (vary !== null && this.encrypted()) {
                unit.hash($mol_crypto_hash(bin), tip, tag);
            }
            else {
                if (bin.byteLength > 32)
                    unit.hash(this.$.$hyoo_crus_mine.hash(bin), tip, tag);
                else
                    unit.data(bin, tip, tag);
            }
            unit.self(self || this.self_make(unit.idea()));
            const error = this.apply_unit([unit])[0];
            if (error)
                $mol_fail(new Error(error));
            this.broadcast();
            return unit;
        }
        sand_move(sand, head, seat, peer = '') {
            if (sand.tip() === 'nil')
                $mol_fail(new RangeError(`Can't move wiped sand`));
            const units = this.sand_ordered({ head, peer }).filter(unit => unit.tip() !== 'nil');
            if (seat > units.length)
                $mol_fail(new RangeError(`Seat (${seat}) out of units length (${units.length})`));
            const lead = seat ? units[seat - 1].self() : '';
            const vary = this.sand_decode(sand);
            if (sand.head() === head) {
                const seat_prev = units.indexOf(sand);
                if (seat === seat_prev)
                    return;
                if (seat === seat_prev + 1)
                    return;
                const prev = seat_prev ? units[seat_prev - 1].self() : '';
                const next = units[seat_prev + 1];
                if (next)
                    this.post(prev, head, next.self(), this.sand_decode(next), next.tag());
            }
            else {
                this.sand_wipe(sand);
            }
            return this.post(lead, head, sand.self(), vary, sand.tag());
        }
        sand_wipe(sand, peer = '') {
            const head = sand.head();
            const units = this.sand_ordered({ head, peer }).filter(unit => unit.tip() !== 'nil');
            const seat = units.indexOf(sand);
            if (seat < 0)
                return sand;
            return this.post(seat ? units[seat - 1].self() : '', head, sand.self(), null, 'term');
        }
        broadcast() {
            this.$.$hyoo_crus_glob.yard().lands_news.add(this.ref());
        }
        sync() {
            this.loading();
            this.bus();
            this.sync_mine();
            this.sync_yard();
            return this;
        }
        destructor() {
            this.$.$hyoo_crus_glob.yard().forget_land(this);
        }
        sync_mine() {
            return new $mol_wire_atom('', () => this.saving()).fresh();
        }
        sync_yard() {
            return new $mol_wire_atom('', () => this.$.$hyoo_crus_glob.yard().sync_land(this.ref())).fresh();
        }
        bus() {
            return new this.$.$mol_bus(`$hyoo_crus_land:${this.ref().description}`, $mol_wire_async(bins => {
                this.apply_unit(bins.map(bin => {
                    const unit = new $hyoo_crus_unit(bin).narrow();
                    $hyoo_crus_unit_trusted.add(unit);
                    this.$.$hyoo_crus_mine.units_persisted.add(unit);
                    return unit;
                }));
            }));
        }
        loading() {
            let units = this.unit_sort(this.$.$hyoo_crus_mine.units(this.ref()) ?? []);
            if (this.$.$hyoo_crus_log())
                $mol_wire_sync(this.$).$mol_log3_rise({
                    place: this,
                    message: 'Load Unit',
                    units: units.length,
                });
            const errors = this.apply_unit(units, 'skip_check').filter(Boolean);
            if (errors.length)
                this.$.$mol_log3_fail({
                    place: this,
                    message: errors.join('\n'),
                });
        }
        saving() {
            const mine = this.$.$hyoo_crus_mine;
            if (!mine)
                return;
            this.loading();
            const encoding = [];
            const signing = [];
            const persisting = [];
            for (const pass of this.pass.values()) {
                if (!pass.signed())
                    signing.push(pass);
                if (!mine.units_persisted.has(pass))
                    persisting.push(pass);
            }
            for (const gift of this.gift.values()) {
                if (!gift.signed())
                    signing.push(gift);
                if (!mine.units_persisted.has(gift))
                    persisting.push(gift);
            }
            for (const kids of this.sand.values()) {
                for (const units of kids.values()) {
                    for (const sand of units.values()) {
                        if (!sand.signed()) {
                            encoding.push(sand);
                            signing.push(sand);
                        }
                        if (!mine.units_persisted.has(sand))
                            persisting.push(sand);
                    }
                }
            }
            $mol_wire_race(...encoding.map(unit => () => this.sand_encode(unit)));
            $mol_wire_race(...signing.map(unit => () => this.unit_sign(unit)));
            if (persisting.length) {
                this.bus().send(persisting.map(unit => unit.buffer));
                mine.units(this.ref(), persisting);
                if (this.$.$hyoo_crus_log())
                    $mol_wire_sync(this.$).$mol_log3_done({
                        place: this,
                        message: 'Saved Units',
                        units: persisting.length,
                    });
            }
        }
        unit_sign(unit) {
            if (unit.signed())
                return;
            const key = $mol_wire_sync(unit._land.auth());
            const mixin = $hyoo_crus_ref_encode(unit._land.ref());
            const sens = unit.sens().slice();
            for (let i = 0; i < mixin.length; ++i)
                sens[i + 2] ^= mixin[i];
            while (true) {
                const sign = key.sign(sens);
                unit.sign(sign.slice(0, 2));
                const rank = unit instanceof $hyoo_crus_pass
                    ? this.lord_rank(unit.lord())
                    : this.peer_rank(unit.peer());
                if (rank >= unit.rank_min()) {
                    unit.sign(sign);
                    return;
                }
                else {
                    unit.sign(new Uint8Array([0, 0]));
                }
            }
        }
        sand_encode(sand) {
            if (sand._open === null)
                return sand;
            if (sand.tip() === 'nil')
                return sand;
            let bin = sand._open;
            const secret = sand._land.secret();
            if (secret)
                bin = $mol_wire_sync(secret).encrypt(bin, sand.salt());
            if (bin.byteLength > 32)
                sand.hash(this.$.$hyoo_crus_mine.rock_save(bin), sand.tip(), sand.tag());
            else
                sand.data(bin, sand.tip(), sand.tag());
            return sand;
        }
        sand_decode(sand) {
            try {
                let vary = this.sand_decode_raw(sand);
                if (typeof vary === 'symbol')
                    vary = $hyoo_crus_ref_resolve(this.ref(), vary);
                return vary;
            }
            catch (error) {
                if (error instanceof Promise)
                    return $mol_fail_hidden(error);
                this.$.$mol_fail_log(error);
                return null;
            }
        }
        sand_decode_raw(sand) {
            if (this.sand.get(sand.head())?.get(sand.peer())?.get(sand.self()) !== sand) {
                for (const id of this.Tine().items_vary() ?? []) {
                    const vary = this.$.$hyoo_crus_glob.Land($hyoo_crus_vary_cast_ref(id)).sand_decode_raw(sand);
                    if (vary !== undefined)
                        return vary;
                }
                return undefined;
            }
            const secret = this.secret();
            if (sand._vary !== undefined)
                return sand._vary;
            if (sand._open !== null)
                return sand._vary = $hyoo_crus_vary_decode({ tip: sand.tip(), bin: sand._open });
            let bin = sand.size() > 32 ? this.$.$hyoo_crus_mine.rock(sand.hash()) : sand.data();
            if (secret && bin && sand.tip() !== 'nil') {
                try {
                    bin = $mol_wire_sync(secret).decrypt(bin, sand.salt());
                }
                catch (error) {
                    if ($mol_fail_catch(error)) {
                        if (error.message)
                            $mol_fail_hidden(error);
                        else
                            $mol_fail_hidden(new Error(`Can't decrypt`, { cause: error }));
                    }
                }
            }
            sand._open = bin;
            return sand._vary = (bin ? $hyoo_crus_vary_decode({ tip: sand.tip(), bin }) : null);
        }
        key_public(peer) {
            const key = this.pass.get(peer)?.auth();
            return key ? $mol_crypto_key_public.from(key) : null;
        }
        secret_mutual(key_public) {
            return $mol_wire_sync($mol_crypto_secret).derive(this.auth().toString(), key_public);
        }
        encryptable() {
            return !this.sand.size;
        }
        encrypted(next) {
            const gift = this.gift.get(this.ref());
            const prev = gift?.bill().some(b => b) ?? false;
            if (next === undefined)
                return prev;
            if (prev === next)
                return prev;
            if (!this.encryptable())
                $mol_fail(new Error(`Non empty Land never encrypted`));
            this.join();
            const auth = this.auth();
            const secret = $mol_wire_sync($mol_crypto_secret).generate();
            const secret_land = $mol_wire_sync(secret).serial();
            const secret_mutual = auth.secret_mutual(auth.public().toString());
            const unit = new $hyoo_crus_gift;
            $hyoo_crus_unit_trusted.add(unit);
            unit.rank($hyoo_crus_rank_rule);
            unit.time(this.faces.tick());
            unit.peer(auth.peer());
            unit.dest(auth.lord());
            unit._land = this;
            const secret_closed = $mol_wire_sync(secret_mutual).encrypt(secret_land, unit.salt());
            unit.bill().set(secret_closed);
            const error = this.apply_unit([unit])[0];
            if (error)
                $mol_fail(new Error(error));
            return next;
        }
        secret() {
            if (!this.encrypted())
                return null;
            const auth = this.auth();
            const gift = this.gift.get(auth.lord());
            if (!gift)
                return $mol_fail(new Error(`Access denied`));
            const bill = gift.bill();
            if (!bill.some(b => b))
                return $mol_fail(new Error(`No key to decrypt`));
            const secret_mutual = auth.secret_mutual(this.key_public(gift.peer()).toString());
            if (!secret_mutual)
                return $mol_fail(new Error(`Can't decrypt secret`));
            const secret_land = $mol_wire_sync(secret_mutual).decrypt(bill, gift.salt());
            return $mol_wire_sync($mol_crypto_secret).from(secret_land);
        }
        dump() {
            this.saving();
            const units = [];
            const rocks = [];
            for (const pass of this.pass.values())
                units.push(pass);
            for (const gift of this.gift.values())
                units.push(gift);
            for (const heads of this.sand.values()) {
                for (const sands of heads.values()) {
                    for (const sand of sands.values()) {
                        units.push(sand);
                        if (sand.size() <= 32)
                            continue;
                        const rock = this.$.$hyoo_crus_mine.rock(sand.hash());
                        if (!rock)
                            continue;
                        rocks.push([sand.hash(), rock]);
                    }
                }
            }
            return {
                land: this.ref(),
                units, rocks,
            };
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', $mol_dev_format_auto(this.faces.total));
        }
    }
    __decorate([
        $mol_action
    ], $hyoo_crus_land.prototype, "self_make", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_land.prototype, "area_make", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_land.prototype, "Data", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_land.prototype, "Tine", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_land.prototype, "Node", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_land.prototype, "total", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_land.prototype, "joined_list", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_land.prototype, "key", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_land.prototype, "lord_rank", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_land.prototype, "faces_pack", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_land.prototype, "apply_unit", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_land.prototype, "apply_unit_trust", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_land.prototype, "fork", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_land.prototype, "sand_ordered", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_land.prototype, "join", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_land.prototype, "give", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_land.prototype, "post", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_land.prototype, "sand_move", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_land.prototype, "sand_wipe", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_land.prototype, "sync", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_land.prototype, "sync_mine", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_land.prototype, "sync_yard", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_land.prototype, "bus", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_land.prototype, "loading", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_land.prototype, "saving", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_land.prototype, "unit_sign", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_land.prototype, "sand_encode", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_land.prototype, "sand_decode", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_land.prototype, "sand_decode_raw", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_land.prototype, "key_public", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_land.prototype, "secret_mutual", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_land.prototype, "encryptable", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_land.prototype, "encrypted", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_land.prototype, "secret", null);
    $.$hyoo_crus_land = $hyoo_crus_land;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_rest_code;
    (function ($mol_rest_code) {
        $mol_rest_code[$mol_rest_code["Continue"] = 100] = "Continue";
        $mol_rest_code[$mol_rest_code["Switching_Protocols"] = 101] = "Switching_Protocols";
        $mol_rest_code[$mol_rest_code["Processing"] = 102] = "Processing";
        $mol_rest_code[$mol_rest_code["OK"] = 200] = "OK";
        $mol_rest_code[$mol_rest_code["Created"] = 201] = "Created";
        $mol_rest_code[$mol_rest_code["Accepted"] = 202] = "Accepted";
        $mol_rest_code[$mol_rest_code["Non_Authoritative_Information"] = 203] = "Non_Authoritative_Information";
        $mol_rest_code[$mol_rest_code["No_Content"] = 204] = "No_Content";
        $mol_rest_code[$mol_rest_code["Reset_Content"] = 205] = "Reset_Content";
        $mol_rest_code[$mol_rest_code["Partial_Content"] = 206] = "Partial_Content";
        $mol_rest_code[$mol_rest_code["Multi_Status"] = 207] = "Multi_Status";
        $mol_rest_code[$mol_rest_code["Already_Reported"] = 208] = "Already_Reported";
        $mol_rest_code[$mol_rest_code["IM_Used"] = 226] = "IM_Used";
        $mol_rest_code[$mol_rest_code["Multiple_Choices"] = 300] = "Multiple_Choices";
        $mol_rest_code[$mol_rest_code["Moved_Permanently"] = 301] = "Moved_Permanently";
        $mol_rest_code[$mol_rest_code["Found"] = 302] = "Found";
        $mol_rest_code[$mol_rest_code["See_Other"] = 303] = "See_Other";
        $mol_rest_code[$mol_rest_code["Not_Modified"] = 304] = "Not_Modified";
        $mol_rest_code[$mol_rest_code["Use_Proxy"] = 305] = "Use_Proxy";
        $mol_rest_code[$mol_rest_code["Temporary_Redirect"] = 307] = "Temporary_Redirect";
        $mol_rest_code[$mol_rest_code["Bad_Request"] = 400] = "Bad_Request";
        $mol_rest_code[$mol_rest_code["Unauthorized"] = 401] = "Unauthorized";
        $mol_rest_code[$mol_rest_code["Payment_Required"] = 402] = "Payment_Required";
        $mol_rest_code[$mol_rest_code["Forbidden"] = 403] = "Forbidden";
        $mol_rest_code[$mol_rest_code["Not_Found"] = 404] = "Not_Found";
        $mol_rest_code[$mol_rest_code["Method_Not_Allowed"] = 405] = "Method_Not_Allowed";
        $mol_rest_code[$mol_rest_code["Not_Acceptable"] = 406] = "Not_Acceptable";
        $mol_rest_code[$mol_rest_code["Proxy_Authentication_Required"] = 407] = "Proxy_Authentication_Required";
        $mol_rest_code[$mol_rest_code["Request_Timeout"] = 408] = "Request_Timeout";
        $mol_rest_code[$mol_rest_code["Conflict"] = 409] = "Conflict";
        $mol_rest_code[$mol_rest_code["Gone"] = 410] = "Gone";
        $mol_rest_code[$mol_rest_code["Length_Required"] = 411] = "Length_Required";
        $mol_rest_code[$mol_rest_code["Precondition_Failed"] = 412] = "Precondition_Failed";
        $mol_rest_code[$mol_rest_code["Request_Entity_Too_Large"] = 413] = "Request_Entity_Too_Large";
        $mol_rest_code[$mol_rest_code["Request_URI_Too_Long"] = 414] = "Request_URI_Too_Long";
        $mol_rest_code[$mol_rest_code["Unsupported_Media_Type"] = 415] = "Unsupported_Media_Type";
        $mol_rest_code[$mol_rest_code["Requested_Range_Not_Satisfiable"] = 416] = "Requested_Range_Not_Satisfiable";
        $mol_rest_code[$mol_rest_code["Expectation_Failed"] = 417] = "Expectation_Failed";
        $mol_rest_code[$mol_rest_code["Teapot"] = 418] = "Teapot";
        $mol_rest_code[$mol_rest_code["Unprocessable_Entity"] = 422] = "Unprocessable_Entity";
        $mol_rest_code[$mol_rest_code["Locked"] = 423] = "Locked";
        $mol_rest_code[$mol_rest_code["Failed_Dependency"] = 424] = "Failed_Dependency";
        $mol_rest_code[$mol_rest_code["Upgrade_Required"] = 426] = "Upgrade_Required";
        $mol_rest_code[$mol_rest_code["Precondition_Required"] = 428] = "Precondition_Required";
        $mol_rest_code[$mol_rest_code["Too_Many_Requests"] = 429] = "Too_Many_Requests";
        $mol_rest_code[$mol_rest_code["Request_Header_Fields_Too_Large"] = 431] = "Request_Header_Fields_Too_Large";
        $mol_rest_code[$mol_rest_code["Unavailable_For_Legal_Reasons"] = 451] = "Unavailable_For_Legal_Reasons";
        $mol_rest_code[$mol_rest_code["Internal_Server_Error"] = 500] = "Internal_Server_Error";
        $mol_rest_code[$mol_rest_code["Not_Implemented"] = 501] = "Not_Implemented";
        $mol_rest_code[$mol_rest_code["Bad_Gateway"] = 502] = "Bad_Gateway";
        $mol_rest_code[$mol_rest_code["Service_Unavailable"] = 503] = "Service_Unavailable";
        $mol_rest_code[$mol_rest_code["Gateway_Timeout"] = 504] = "Gateway_Timeout";
        $mol_rest_code[$mol_rest_code["HTTP_Version_Not_Supported"] = 505] = "HTTP_Version_Not_Supported";
        $mol_rest_code[$mol_rest_code["Insufficient_Storage"] = 507] = "Insufficient_Storage";
        $mol_rest_code[$mol_rest_code["Loop_Detected"] = 508] = "Loop_Detected";
        $mol_rest_code[$mol_rest_code["Not_Extended"] = 510] = "Not_Extended";
        $mol_rest_code[$mol_rest_code["Network_Authentication_Required"] = 511] = "Network_Authentication_Required";
        $mol_rest_code[$mol_rest_code["Network_Read_Timeout_Error"] = 598] = "Network_Read_Timeout_Error";
        $mol_rest_code[$mol_rest_code["Network_Connect_Timeout_Error"] = 599] = "Network_Connect_Timeout_Error";
    })($mol_rest_code = $.$mol_rest_code || ($.$mol_rest_code = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_port extends $mol_object {
        send_code(code) { }
        send_type(mime) { }
        send_data(data) {
            if (data === null)
                return this.send_nil();
            if (typeof data === 'string')
                return this.send_text(data);
            if (data instanceof Uint8Array)
                return this.send_bin(data);
            if (data instanceof $mol_dom_context.Element)
                return this.send_dom(data);
            return this.send_json(data);
        }
        send_nil() {
            this.send_code(204);
        }
        send_bin(data) {
            this.send_code(200);
            this.send_type('application/octet-stream');
        }
        send_text(data) {
            this.send_code(200);
            this.send_type('text/plain;charset=utf-8');
            this.send_bin($mol_charset_encode(data));
        }
        send_json(data) {
            this.send_code(200);
            this.send_type('application/json');
            this.send_text(JSON.stringify(data));
        }
        send_dom(data) {
            this.send_code(200);
            this.send_type('text/html;charset=utf-8');
            this.send_text($mol_dom_serialize(data));
        }
        static make(config) {
            return super.make(config);
        }
    }
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_data", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_nil", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_bin", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_text", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_json", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_dom", null);
    __decorate([
        ($mol_action)
    ], $mol_rest_port, "make", null);
    $.$mol_rest_port = $mol_rest_port;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_set extends Set {
        pub = new $mol_wire_pub;
        has(value) {
            this.pub.promote();
            return super.has(value);
        }
        entries() {
            this.pub.promote();
            return super.entries();
        }
        keys() {
            this.pub.promote();
            return super.keys();
        }
        values() {
            this.pub.promote();
            return super.values();
        }
        forEach(task, self) {
            this.pub.promote();
            super.forEach(task, self);
        }
        [Symbol.iterator]() {
            this.pub.promote();
            return super[Symbol.iterator]();
        }
        get size() {
            this.pub.promote();
            return super.size;
        }
        add(value) {
            if (super.has(value))
                return this;
            super.add(value);
            this.pub.emit();
            return this;
        }
        delete(value) {
            const res = super.delete(value);
            if (res)
                this.pub.emit();
            return res;
        }
        clear() {
            if (!super.size)
                return;
            super.clear();
            this.pub.emit();
        }
        item(val, next) {
            if (next === undefined)
                return this.has(val);
            if (next)
                this.add(val);
            else
                this.delete(val);
            return next;
        }
    }
    $.$mol_wire_set = $mol_wire_set;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_port_ws extends $mol_rest_port {
    }
    $.$mol_rest_port_ws = $mol_rest_port_ws;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_websocket_frame_op;
    (function ($mol_websocket_frame_op) {
        $mol_websocket_frame_op[$mol_websocket_frame_op["con"] = 0] = "con";
        $mol_websocket_frame_op[$mol_websocket_frame_op["txt"] = 1] = "txt";
        $mol_websocket_frame_op[$mol_websocket_frame_op["bin"] = 2] = "bin";
        $mol_websocket_frame_op[$mol_websocket_frame_op["stop"] = 8] = "stop";
        $mol_websocket_frame_op[$mol_websocket_frame_op["ping"] = 9] = "ping";
        $mol_websocket_frame_op[$mol_websocket_frame_op["pong"] = 10] = "pong";
    })($mol_websocket_frame_op = $.$mol_websocket_frame_op || ($.$mol_websocket_frame_op = {}));
    class $mol_websocket_frame extends $mol_buffer {
        kind(next) {
            if (next) {
                this.setUint8(0, Number(next.fin) << 7 | $mol_websocket_frame_op[next.op]);
                return next;
            }
            else {
                const state = this.getUint8(0);
                const fin = state >> 7;
                const op = $mol_websocket_frame_op[state & 0b1111];
                if (op === undefined)
                    $mol_fail(new Error(`Wrong op (${state.toString(2)})`));
                return { op, fin };
            }
        }
        data(next) {
            if (next === undefined) {
                const state = this.getUint8(1);
                const mask = state >> 7;
                let size = state & 0b0111_1111;
                if (size === 126)
                    size = this.getUint16(2);
                else if (size === 127)
                    size = this.getUint32(6);
                return { size, mask };
            }
            else {
                if (next.size >= 2 ** 16) {
                    this.setUint8(1, 127 | Number(next.mask) << 7);
                    this.setUint32(6, next.size);
                }
                else if (next.size >= 126) {
                    this.setUint8(1, 126 | Number(next.mask) << 7);
                    this.setUint16(2, next.size);
                }
                else {
                    this.setUint8(1, next.size | Number(next.mask) << 7);
                }
                return next;
            }
        }
        size() {
            const short = this.getUint8(1) & 0b0111_1111;
            const mask = this.getUint8(1) >> 7;
            return (short === 127 ? 10 : short === 126 ? 4 : 2) + (mask ? 4 : 0);
        }
        mask() {
            return new Uint8Array(this.buffer, this.byteOffset + this.size() - 4, 4);
        }
        toString() {
            const { op, fin } = this.kind();
            const { size, mask } = this.data();
            return `${op}${fin ? '!' : '+'}${size}${mask ? '@' : '#'}`;
        }
        static make(op, size = 0, mask = false, fin = true) {
            const head = (size >= 2 ** 16 ? 10 : size >= 126 ? 4 : 2) + (mask ? 4 : 0);
            const frame = $mol_websocket_frame.from(head);
            frame.kind({ op, fin });
            frame.data({ size, mask });
            return frame;
        }
    }
    $.$mol_websocket_frame = $mol_websocket_frame;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_port_ws_std extends $mol_rest_port_ws {
        socket;
        send_nil() {
            if (this.socket.readyState !== this.socket.OPEN)
                return;
            this.socket.send('');
        }
        send_bin(data) {
            if (this.socket.readyState !== this.socket.OPEN)
                return;
            this.socket.send(data);
        }
        send_text(data) {
            if (this.socket.readyState !== this.socket.OPEN)
                return;
            const bin = $mol_charset_encode(data);
            this.socket.send(bin);
        }
    }
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_std.prototype, "send_nil", null);
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_std.prototype, "send_bin", null);
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_std.prototype, "send_text", null);
    $.$mol_rest_port_ws_std = $mol_rest_port_ws_std;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_port_ws_node extends $mol_rest_port_ws {
        socket;
        send_nil() {
            if (this.socket.writableEnded)
                return;
            this.socket.write($mol_websocket_frame.make('pong', 0).asArray());
        }
        send_bin(data) {
            if (this.socket.writableEnded)
                return;
            this.socket.write($mol_websocket_frame.make('bin', data.byteLength).asArray());
            this.socket.write(data);
        }
        send_text(data) {
            if (this.socket.writableEnded)
                return;
            const bin = $mol_charset_encode(data);
            this.socket.write($mol_websocket_frame.make('txt', bin.byteLength).asArray());
            this.socket.write(bin);
        }
    }
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_node.prototype, "send_nil", null);
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_node.prototype, "send_bin", null);
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_node.prototype, "send_text", null);
    $.$mol_rest_port_ws_node = $mol_rest_port_ws_node;
    $.$mol_rest_port_ws = $mol_rest_port_ws_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const Passives = new WeakMap();
    class $hyoo_crus_yard extends $mol_object {
        glob() {
            return null;
        }
        lands_news = new $mol_wire_set();
        static masters = [];
        master_cursor(next = 0) {
            return next;
        }
        master_current() {
            return this.$.$hyoo_crus_yard.masters[this.master_cursor()];
        }
        master_next() {
            this.master_cursor((this.master_cursor() + 1) % this.$.$hyoo_crus_yard.masters.length);
        }
        reconnects(reset) {
            return ($mol_wire_probe(() => this.reconnects()) ?? 0) + 1;
        }
        master() {
            this.reconnects();
            const link = this.master_current();
            if (!link)
                return null;
            const socket = new $mol_dom_context.WebSocket(link.replace(/^http/, 'ws'));
            socket.binaryType = 'arraybuffer';
            const port = $mol_rest_port_ws_std.make({ socket });
            socket.onmessage = async (event) => {
                if (event.data instanceof ArrayBuffer) {
                    if (!event.data.byteLength)
                        return;
                    await $mol_wire_async(this).port_income(port, new Uint8Array(event.data));
                }
                else {
                    this.$.$mol_log3_fail({
                        place: this,
                        message: 'Wrong data',
                        data: event.data
                    });
                }
            };
            let interval;
            socket.onclose = () => {
                clearInterval(interval);
                setTimeout(() => this.reconnects(null), 1000);
            };
            Object.assign(socket, {
                destructor: () => {
                    socket.onclose = () => { };
                    clearInterval(interval);
                    socket.close();
                }
            });
            return new Promise((done, fail) => {
                socket.onopen = () => {
                    this.$.$mol_log3_come({
                        place: this,
                        message: 'Connected',
                        port: $mol_key(port),
                        server: link,
                    });
                    interval = setInterval(() => socket.send(new Uint8Array), 30000);
                    done(port);
                };
                socket.onerror = () => {
                    socket.onclose = event => {
                        fail(new Error(`Master (${link}) is unavailable (${event.code})`));
                        clearInterval(interval);
                        interval = setTimeout(() => {
                            this.master_next();
                            this.reconnects(null);
                        }, 1000);
                    };
                };
            });
        }
        slaves = new $mol_wire_set();
        sync() {
            this.sync_news();
            this.sync_port();
        }
        sync_news() {
            const glob = this.$.$hyoo_crus_glob;
            const lands = [...this.lands_news].map(ref => glob.Land(ref));
            try {
                for (const port of this.masters()) {
                    for (const land of lands) {
                        this.sync_port_land([port, land.ref()]);
                    }
                }
                for (const land of lands)
                    land.saving();
                this.lands_news.clear();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        sync_port() {
            for (const port of this.ports())
                this.sync_port_lands(port);
        }
        sync_port_lands(port) {
            for (const land of this.port_lands_active(port)) {
                this.sync_port_land([port, land]);
            }
        }
        ports() {
            return [...this.masters(), ...this.slaves];
        }
        masters() {
            try {
                return [this.master()].filter($mol_guard_defined);
            }
            catch (error) {
                $mol_fail_log(error);
                return [];
            }
        }
        port_lands_active(port) {
            return new $mol_wire_set();
        }
        port_lands_passive(port) {
            let passives = Passives.get(port);
            if (!passives)
                Passives.set(port, passives = new Set);
            return passives;
        }
        port_income(port, msg) {
            const pack = $mol_wire_sync($hyoo_crus_pack).from(msg);
            const parts = $mol_wire_sync(pack).parts();
            if (this.$.$hyoo_crus_log())
                $mol_wire_sync(this.$).$mol_log3_rise({
                    place: this,
                    message: 'Gain Pack',
                    port: $mol_key(port),
                    lands: parts.lands,
                    rocks: parts.rocks.length,
                });
            forget: {
                if (parts.rocks.length)
                    break forget;
                const lands = Object.getOwnPropertySymbols(parts.lands);
                for (const land of lands) {
                    if (parts.lands[land].units.length)
                        break forget;
                    if (parts.lands[land].faces.size)
                        break forget;
                    if (!this.port_lands_active(port).has(land))
                        break forget;
                    this.port_lands_active(port).delete(land);
                    return;
                }
            }
            this.face_port_sync(port, parts.lands);
            this.$.$hyoo_crus_glob.apply_parts(parts.lands, parts.rocks);
        }
        face_port_sync(port, income) {
            const actives = this.port_lands_active(port);
            const passives = this.port_lands_passive(port);
            for (const land of Reflect.ownKeys(income)) {
                if (!passives.has(land))
                    actives.add(land);
                const faces = income[land].faces;
                let port_faces = this.face_port_land([port, land]);
                if (!port_faces)
                    this.face_port_land([port, land], port_faces = $mol_mem_cached(() => this.face_port_land([port, land]))
                        || new $hyoo_crus_face_map);
                port_faces.sync(faces);
                const units = income[land].units;
                for (let unit of units) {
                    const unit2 = unit.narrow();
                    if (unit2 instanceof $hyoo_crus_pass)
                        continue;
                    port_faces.time_max(unit2.peer(), unit2.time());
                }
            }
        }
        sync_land(land) {
            for (const port of this.masters()) {
                this.port_lands_passive(port).add(land);
                this.sync_port_land([port, land]);
            }
            this.sync();
        }
        forget_land(land) {
            const faces = new $hyoo_crus_face_map;
            faces.total = land.faces.total;
            const pack = $hyoo_crus_pack.make({
                lands: { [land.ref()]: { faces, units: [] } },
                rocks: [],
            }).asArray();
            for (const port of this.ports()) {
                if (!this.port_lands_passive(port).has(land.ref()))
                    continue;
                this.port_lands_passive(port).delete(land.ref());
                if (this.$.$hyoo_crus_log())
                    this.$.$mol_log3_rise({
                        place: this,
                        message: 'Forget Land',
                        port: $mol_key(port),
                        land: land.ref(),
                    });
                port.send_bin(pack);
            }
        }
        sync_port_land([port, land]) {
            try {
                this.init_port_land([port, land]);
                const faces = this.face_port_land([port, land]);
                if (!faces)
                    return;
                const Land = this.$.$hyoo_crus_glob.Land(land);
                Land.saving();
                const parts = Land.delta_parts(faces);
                if (!parts)
                    return;
                if (this.$.$hyoo_crus_log())
                    this.$.$mol_log3_rise({
                        place: this,
                        message: 'Send Unit',
                        port: $mol_key(port),
                        lands: parts.lands,
                        rocks: parts.rocks.length,
                    });
                port.send_bin($hyoo_crus_pack.make(parts).asArray());
                faces.sync(Land.faces);
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        init_port_land([port, land]) {
            const Land = this.$.$hyoo_crus_glob.Land(land);
            Land.loading();
            if (this.$.$hyoo_crus_log())
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Send Face',
                    port: $mol_key(port),
                    land: land,
                    faces: Land.faces,
                });
            port.send_bin(Land.faces_pack().asArray());
        }
        face_port_land([port, land], next = null) {
            $mol_wire_solid();
            return next;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_crus_yard.prototype, "glob", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_yard.prototype, "master_cursor", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_yard.prototype, "master_current", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_yard.prototype, "master_next", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_yard.prototype, "reconnects", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_yard.prototype, "master", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_yard.prototype, "sync", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_yard.prototype, "sync_news", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_yard.prototype, "sync_port", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_yard.prototype, "sync_port_lands", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_yard.prototype, "ports", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_yard.prototype, "masters", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_yard.prototype, "port_lands_active", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_yard.prototype, "port_income", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_yard.prototype, "face_port_sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_yard.prototype, "sync_land", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_yard.prototype, "forget_land", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_yard.prototype, "sync_port_land", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_yard.prototype, "init_port_land", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_yard.prototype, "face_port_land", null);
    $.$hyoo_crus_yard = $hyoo_crus_yard;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $hyoo_crus_unit_kind;
    (function ($hyoo_crus_unit_kind) {
        $hyoo_crus_unit_kind[$hyoo_crus_unit_kind["pass"] = $hyoo_crus_part.pass] = "pass";
        $hyoo_crus_unit_kind[$hyoo_crus_unit_kind["gift"] = $hyoo_crus_part.gift] = "gift";
        $hyoo_crus_unit_kind[$hyoo_crus_unit_kind["sand"] = $hyoo_crus_part.sand] = "sand";
    })($hyoo_crus_unit_kind = $.$hyoo_crus_unit_kind || ($.$hyoo_crus_unit_kind = {}));
    $.$hyoo_crus_unit_trusted = new WeakSet();
    class $hyoo_crus_unit extends $mol_buffer {
        static size = 128;
        constructor(buffer = new ArrayBuffer($hyoo_crus_unit.size), byteOffset = 0, byteLength = buffer.byteLength) {
            super(buffer, byteOffset, byteLength);
        }
        kind() {
            const val = this.uint8(0);
            if (!val)
                $mol_fail(new Error(`Empty unit`));
            if ((val & 1) === 0)
                return 'sand';
            const kind = $hyoo_crus_unit_kind[val];
            if (kind)
                return kind;
            $mol_fail(new Error(`Unknown unit kind (${val})`));
        }
        choose(ways) {
            const way = this.kind();
            const Unit = {
                pass: $hyoo_crus_pass,
                gift: $hyoo_crus_gift,
                sand: $hyoo_crus_sand,
            }[way];
            if (this instanceof Unit)
                return ways[way](this);
            const unit = new Unit(this.buffer, this.byteOffset, this.byteLength);
            return ways[way](unit);
        }
        narrow() {
            return this.choose({
                sand: unit => unit,
                pass: unit => unit,
                gift: unit => unit,
            });
        }
        key() {
            return this.narrow().key();
        }
        id6(offset, next) {
            if (next === undefined) {
                const str = $mol_base64_ae_encode(new Uint8Array(this.buffer, this.byteOffset + offset, 6));
                return str === 'AAAAAAAA' ? '' : str;
            }
            else {
                this.asArray().set($mol_base64_ae_decode(next || 'AAAAAAAA'), this.byteOffset + offset);
                return next;
            }
        }
        id12(offset, next) {
            if (next === undefined) {
                return $hyoo_crus_ref_decode(new Uint8Array(this.buffer, this.byteOffset + offset, 12));
            }
            else {
                this.asArray().set($hyoo_crus_ref_encode(next), this.byteOffset + offset);
                return next;
            }
        }
        _peer;
        peer(next) {
            if (next === undefined && this._peer !== undefined)
                return this._peer;
            else
                return this._peer = this.id6(2, next);
        }
        salt() {
            return new Uint8Array(this.buffer, this.byteOffset + 2, 16);
        }
        sens(next) {
            const prev = new Uint8Array(this.buffer, this.byteOffset, 64);
            if (next)
                prev.set(next);
            return prev;
        }
        mix(mixin) {
            for (let i = 0; i < mixin.length; ++i) {
                this.uint8(2 + i, this.uint8(2 + i) ^ mixin[i]);
            }
        }
        sign(next) {
            const prev = new Uint8Array(this.buffer, this.byteOffset + 64, 64);
            if (next)
                prev.set(next);
            return prev;
        }
        signed() {
            return this.sign().some(b => b);
        }
        work() {
            if (!this.signed()) {
                return $hyoo_crus_rank_rate.just;
            }
            const sign = this.sign();
            let int = sign[0] | (sign[1] << 8);
            let count = 0;
            while (int & 1) {
                int >>>= 1;
                ++count;
            }
            return count;
        }
        rank_min() {
            return $hyoo_crus_rank_rule;
        }
        _land = null;
        dump() {
            return {};
        }
    }
    $.$hyoo_crus_unit = $hyoo_crus_unit;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crus_pass extends $hyoo_crus_unit {
        _lord;
        lord(next) {
            if (next === undefined && this._lord !== undefined)
                return this._lord;
            else
                return this._lord = this.id12(2, next);
        }
        key() {
            return `pass:${this.id6(2)}`;
        }
        auth(next) {
            const prev = new Uint8Array(this.buffer, this.byteOffset, 64);
            if (next)
                prev.set(next);
            return prev;
        }
        dump() {
            return {
                kind: this.kind(),
                lord: this.lord().description,
            };
        }
        rank_min() {
            return $hyoo_crus_rank($hyoo_crus_rank_tier.join | ($hyoo_crus_rank_rate.just - this.work()));
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.peer(), ' 🔑 ', $mol_dev_format_span({}, this.lord().description));
        }
    }
    $.$hyoo_crus_pass = $hyoo_crus_pass;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crus_gift extends $hyoo_crus_unit {
        rank(next) {
            if (next !== undefined)
                this.uint8(0, $hyoo_crus_unit_kind.gift);
            const res = this.uint8(1, next);
            if (res < $hyoo_crus_rank_deny || res > $hyoo_crus_rank_rule) {
                $mol_fail(new RangeError(`Wrong rank ${res}`));
            }
            return res;
        }
        time(next) {
            return this.uint48(8, next);
        }
        free() {
            return new Uint8Array(this.buffer, this.byteOffset + 26, 6);
        }
        _dest;
        dest(next) {
            if (next === undefined && this._dest !== undefined)
                return this._dest;
            else
                return this._dest = this.id12(14, next);
        }
        key() {
            return `gift:${this.dest().description}`;
        }
        bill() {
            return new Uint8Array(this.buffer, this.byteOffset + 32, 32);
        }
        static compare(left, right) {
            return (right.time() - left.time()) || (right.peer() > left.peer() ? 1 : right.peer() < left.peer() ? -1 : 0);
        }
        dump() {
            return {
                kind: this.kind(),
                peer: this.peer(),
                dest: this.dest().description,
                tier: $hyoo_crus_rank_tier[this.rank() & ~$hyoo_crus_rank_rate.just],
                work: this.work(),
                time: $hyoo_crus_time_dump(this.time()),
            };
        }
        rank_min() {
            return $hyoo_crus_rank($hyoo_crus_rank_rule | ($hyoo_crus_rank_rate.just - this.work()));
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.peer(), ' 🏅 ', $mol_dev_format_span({}, this.dest().description || '_'), this.bill().some(v => v) ? ' 🔐' : ' 👀', $hyoo_crus_rank_tier[this.rank() & ~$hyoo_crus_rank_rate.just], ':', this.rank() & $hyoo_crus_rank_rate.just, ' ', $mol_dev_format_shade($hyoo_crus_time_dump(this.time())));
        }
    }
    $.$hyoo_crus_gift = $hyoo_crus_gift;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crus_mine extends $mol_object {
        static unit_updates = 0;
        static unit_appends = 0;
        static rock_writes = 0;
        static hash(blob) {
            return $mol_crypto_hash(blob);
        }
        static rock(hash, next) {
            $mol_wire_solid();
            return next ?? null;
        }
        static rock_save(blob) {
            const hash = this.hash(blob);
            this.rock(hash, blob);
            this.rock(hash);
            return hash;
        }
        static units_persisted = new WeakSet();
        static units(land, next) {
            if (next)
                return $mol_wire_sync(this).units_save(land, next), next;
            else
                return $mol_wire_sync(this).units_load(land);
        }
        static async units_load(land) {
            return [];
        }
        static async units_save(land, units) {
        }
    }
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_mine, "hash", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_mine, "rock", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_mine, "rock_save", null);
    $.$hyoo_crus_mine = $hyoo_crus_mine;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crus_mine_pg extends $hyoo_crus_mine {
        static urn() {
            return $mol_state_arg.value('db');
        }
        static url() {
            return new URL(this.urn());
        }
        static rock(hash, next) {
            if (next) {
                $mol_wire_sync(this).db_sync()?.query(`
						INSERT INTO Rock( hash, rock )
						VALUES( $1::bytea, $2::bytea )
						ON CONFLICT( hash ) DO NOTHING
					`, [hash, next]);
                return next;
            }
            return $mol_wire_sync(this).rock_load(hash);
        }
        static async rock_load(hash) {
            const db = await this.db();
            if (!db)
                return null;
            const res = await db.query(`SELECT rock FROM Rock WHERE hash = $1::bytea`, [hash]);
            return res.rows[0]?.rock ?? null;
        }
        static async units_save(land, units) {
            $hyoo_crus_land;
            const db = await this.db();
            if (!db)
                return;
            const tasks = units.map(unit => {
                const ref = land.description;
                const buf = Buffer.from(unit.buffer, unit.byteOffset, unit.byteLength);
                return db.query(`
						INSERT INTO Land( land, path, unit )
						VALUES( $1::varchar(17), $2::varchar(17), $3::bytea )
						ON CONFLICT( land, path ) DO UPDATE SET unit = $3::bytea;
					`, [ref, unit.key(), buf]);
            });
            await Promise.all(tasks);
            for (const unit of units)
                this.units_persisted.add(unit);
        }
        static async units_load(land) {
            const db = await this.db();
            if (!db)
                return [];
            const res = await db.query(`SELECT unit FROM Land WHERE land = $1::varchar(17)`, [land.description]);
            const units = res.rows.map(row => {
                const unit = new $hyoo_crus_unit(row.unit.buffer, row.unit.byteOffset, row.unit.byteLength).narrow();
                this.units_persisted.add(unit);
                $hyoo_crus_unit_trusted.add(unit);
                return unit;
            });
            return units;
        }
        static db_sync() {
            $mol_wire_solid();
            return $mol_wire_sync(this).db();
        }
        static async db() {
            const urn = this.urn();
            if (!urn)
                return null;
            const db = new $node.pg.Pool({
                connectionString: urn,
                ssl: { rejectUnauthorized: false },
            });
            db.on('error', error => {
                this.$.$mol_log3_fail({
                    place: this,
                    message: error?.message,
                });
            });
            await db.query(`
				CREATE TABLE IF NOT EXISTS Land (
					land varchar(17) NOT NULL,
					path varchar(17) NOT NULL,
					unit bytea NOT NULL,
					primary key( land, path )
				);
			`);
            await db.query(`
				CREATE TABLE IF NOT EXISTS Rock (
					hash bytea NOT NULL,
					rock bytea NOT NULL,
					primary key( hash )
				);
			`);
            this.$.$mol_log3_rise({
                place: this,
                message: 'Data Base Ready',
                type: this.url().protocol,
                host: this.url().host,
                name: this.url().pathname,
            });
            return db;
        }
    }
    __decorate([
        $mol_memo.method
    ], $hyoo_crus_mine_pg, "urn", null);
    __decorate([
        $mol_memo.method
    ], $hyoo_crus_mine_pg, "url", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_mine_pg, "rock", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_mine_pg, "units_load", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_mine_pg, "db_sync", null);
    __decorate([
        $mol_memo.method
    ], $hyoo_crus_mine_pg, "db", null);
    $.$hyoo_crus_mine_pg = $hyoo_crus_mine_pg;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crus_mine_fs extends $hyoo_crus_mine {
        static root() {
            const root = this.$.$mol_file.relative('.crus');
            this.$.$mol_log3_rise({
                place: this,
                message: 'File Storage Ready',
                path: root.path()
            });
            return root;
        }
        static rock_file(hash) {
            const id = $mol_base64_ae_encode(hash);
            return this.root().resolve(`rock/${id.slice(0, 2)}/${id}.blob`);
        }
        static rock(hash, next) {
            const buf = this.rock_file(hash).buffer(next);
            if (next)
                return buf;
            if ($mol_compare_deep(hash, this.hash(buf)))
                return buf;
            return null;
        }
        static units_file(land) {
            $hyoo_crus_land;
            const id = land.description;
            const dir = this.root().resolve(`unit/${id.slice(0, 2)}`);
            dir.exists(true);
            return dir.resolve(`${id}.crus`);
        }
        static units_offsets(land) {
            $mol_wire_solid();
            return new Map();
        }
        static units_sizes = new Map();
        static units_save(land, units) {
            const descr = this.units_file(land).open('create', 'read_write');
            try {
                const offsets = this.units_offsets(land);
                const append = [];
                for (const unit of units) {
                    const off = offsets.get(unit.key());
                    if (off === undefined) {
                        append.push(unit);
                    }
                    else {
                        descr.write({ buffer: unit, position: off });
                        this.units_persisted.add(unit);
                    }
                }
                if (!append.length)
                    return;
                let size = this.units_sizes.get(land) ?? 0;
                let offset = size;
                size += append.length * $hyoo_crus_unit.size;
                descr.truncate(size);
                this.units_sizes.set(land, size);
                for (const unit of append) {
                    descr.write({ buffer: unit, position: offset });
                    offsets.set(unit.key(), offset);
                    this.units_persisted.add(unit);
                    offset += unit.byteLength;
                }
            }
            finally {
                descr.close();
            }
            return undefined;
        }
        static async units_load(land) {
            const descr = this.units_file(land).open('create', 'read_write');
            try {
                const buf = descr.read();
                if (!buf.length)
                    return [];
                this.units_sizes.set(land, buf.length);
                const pack = $hyoo_crus_pack.from(buf);
                const { lands, rocks } = pack.parts(land);
                const units = lands[land]?.units ?? [];
                const offsets = this.units_offsets(land);
                for (let i = 0; i < units.length; ++i) {
                    offsets.set(units[i].key(), i * $hyoo_crus_unit.size);
                    this.units_persisted.add(units[i]);
                }
                return units;
            }
            finally {
                descr.close();
            }
        }
    }
    __decorate([
        $mol_memo.method
    ], $hyoo_crus_mine_fs, "root", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_mine_fs, "rock_file", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_mine_fs, "rock", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_mine_fs, "units_file", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_mine_fs, "units_offsets", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_mine_fs, "units_load", null);
    $.$hyoo_crus_mine_fs = $hyoo_crus_mine_fs;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$hyoo_crus_mine = $hyoo_crus_mine_pg.urn() ? $hyoo_crus_mine_pg : $hyoo_crus_mine_fs;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $hyoo_crus_sand_tag;
    (function ($hyoo_crus_sand_tag) {
        $hyoo_crus_sand_tag[$hyoo_crus_sand_tag["term"] = 0] = "term";
        $hyoo_crus_sand_tag[$hyoo_crus_sand_tag["solo"] = 1] = "solo";
        $hyoo_crus_sand_tag[$hyoo_crus_sand_tag["vals"] = 2] = "vals";
        $hyoo_crus_sand_tag[$hyoo_crus_sand_tag["keys"] = 3] = "keys";
    })($hyoo_crus_sand_tag = $.$hyoo_crus_sand_tag || ($.$hyoo_crus_sand_tag = {}));
    class $hyoo_crus_sand extends $hyoo_crus_unit {
        _vary = undefined;
        _open = null;
        hint(tip = 'nil', tag = 'term') {
            this.uint8(0, ($hyoo_crus_sand_tag[tag] << 1) | ($hyoo_crus_vary_tip[tip] << 3));
        }
        tag() {
            return $hyoo_crus_sand_tag[(this.uint8(0) >> 1) & 0b11];
        }
        tip() {
            const tip = $hyoo_crus_vary_tip[this.uint8(0) >> 3] || $hyoo_crus_vary_tip.nil;
            return tip;
        }
        utf() {
            return Boolean(this.uint8(0) & 0b10000000);
        }
        size(next) {
            return this.uint8(1, next);
        }
        time(next) {
            return this.uint48(8, next);
        }
        _head;
        head(next) {
            if (next === undefined && this._head !== undefined)
                return this._head;
            else
                return this._head = this.id6(14, next);
        }
        _self;
        self(next) {
            if (next === undefined && this._self !== undefined)
                return this._self;
            else
                return this._self = this.id6(20, next);
        }
        key() {
            return `sand:${this.head()}/${this.peer()}/${this.self()}`;
        }
        _lead;
        lead(next) {
            if (next === undefined && this._lead !== undefined)
                return this._lead;
            else
                return this._lead = this.id6(26, next);
        }
        hash(next, tip = 'nil', tag = 'term') {
            const bin = new Uint8Array(this.buffer, this.byteOffset + 32, 20);
            if (next !== undefined) {
                this.hint(tip, tag);
                this.size(255);
                bin.set(next);
            }
            if (this.size() > 32)
                return bin;
            $mol_fail(new Error('No stored hash'));
        }
        meta() {
            return new Uint8Array(this.buffer, this.byteOffset + 42, 12);
        }
        data(next, tip = 'nil', tag = 'term') {
            if (next === undefined) {
                const size = this.size();
                if (size > 32)
                    $mol_fail(new Error('Too long data'));
                return new Uint8Array(this.buffer, this.byteOffset + 32, size);
            }
            else {
                this.hint(tip, tag);
                if (next.byteLength > 32)
                    $mol_fail(new Error('Too long data'));
                this.uint8(1, next.byteLength);
                const bin = new Uint8Array(this.buffer, this.byteOffset + 32, next.byteLength);
                bin.set(next);
                new Uint8Array(this.buffer, this.byteOffset + 32 + next.length, 32 - next.length).fill(0);
                return bin;
            }
        }
        idea() {
            const bin = new Uint8Array(this.buffer, this.byteOffset + 20, 44);
            const hash = $mol_crypto_hash(bin);
            const buf = new $mol_buffer(hash.buffer);
            return buf.uint48(0);
        }
        static compare(left, right) {
            return (Math.floor(right.time() / 65536) - Math.floor(left.time() / 65536))
                || (right.peer() > left.peer() ? 1 : right.peer() < left.peer() ? -1 : 0)
                || (right.time() - left.time());
        }
        dump() {
            return {
                kind: this.kind(),
                peer: this.peer(),
                lead: this.lead(),
                head: this.head(),
                self: this.self(),
                tip: this.tip(),
                tag: this.tag(),
                size: this.size(),
                time: $hyoo_crus_time_dump(this.time()),
            };
        }
        rank_min() {
            return $hyoo_crus_rank($hyoo_crus_rank_tier.post | ($hyoo_crus_rank_rate.just - this.work()));
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.peer(), ' ', this.lead() || 'AAAAAAAA', $mol_dev_format_shade('\\'), $mol_dev_format_accent(this.head() || 'AAAAAAAA'), $mol_dev_format_shade('/'), this.self() || 'AAAAAAAA', ' ', $mol_dev_format_shade($hyoo_crus_time_dump(this.time())), ' ', {
                term: '💼',
                solo: '1️⃣',
                vals: '🎹',
                keys: '🔑',
            }[this.tag()], this.tip(), ' ', $mol_dev_format_native(this._vary));
        }
    }
    $.$hyoo_crus_sand = $hyoo_crus_sand;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crus_node extends $mol_object {
        static tag = 'vals';
        land() {
            return null;
        }
        head() {
            return '';
        }
        land_ref() {
            return this.land()?.ref() ?? this.$.$hyoo_crus_auth.current().lord();
        }
        ref() {
            return $hyoo_crus_ref_resolve(this.land_ref(), $hyoo_crus_ref('___' + this.head()));
        }
        toJSON() {
            return this.ref().description;
        }
        cast(Node) {
            return this.land().Node(Node).Item(this.head());
        }
        nodes(Node) {
            const land = this.land();
            const map = {
                term: () => land.Node(Node || $hyoo_crus_atom_vary),
                solo: () => land.Node(Node || $hyoo_crus_atom_vary),
                vals: () => land.Node(Node || $hyoo_crus_list_vary),
                keys: () => land.Node(Node || $hyoo_crus_dict),
            };
            return this.units().map(unit => map[unit.tag()]().Item(unit.self()));
        }
        units() {
            return this.units_of('');
        }
        units_of(peer) {
            return this.land().sand_ordered({ head: this.head(), peer }).filter(unit => unit.tip() !== 'nil');
        }
        filled() {
            return this.units().length > 0;
        }
        can_change() {
            return this.land().lord_rank(this.land().auth().lord()) >= $hyoo_crus_rank_tier.join;
        }
        last_change() {
            const land = this.land();
            let last = 0;
            const visit = (sand) => {
                if (sand.time() > last)
                    last = sand.time();
                if (sand.tag() === 'term')
                    return;
                land.Node($hyoo_crus_node).Item(sand.self()).units().forEach(visit);
            };
            this.units().forEach(visit);
            return last ? $hyoo_crus_time_moment(last) : null;
        }
        author_peers() {
            const land = this.land();
            const peers = new Set();
            const visit = (sand) => {
                peers.add(sand.peer());
                if (sand.tag() === 'term')
                    return;
                land.Node($hyoo_crus_node).Item(sand.self()).units_of(null).forEach(visit);
            };
            this.units_of(null).forEach(visit);
            return [...peers];
        }
        author_lords() {
            const land = this.land();
            return this.author_peers()
                .map(peer => land.pass.get(peer)?.lord())
                .filter($mol_guard_defined);
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.head());
        }
    }
    __decorate([
        $mol_memo.method
    ], $hyoo_crus_node.prototype, "ref", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_node.prototype, "cast", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_node.prototype, "nodes", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_node.prototype, "units_of", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_node.prototype, "last_change", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_node.prototype, "author_peers", null);
    __decorate([
        $mol_mem
    ], $hyoo_crus_node.prototype, "author_lords", null);
    $.$hyoo_crus_node = $hyoo_crus_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_reconcile({ prev, from, to, next, equal, drop, insert, update, replace, }) {
        if (!update)
            update = (next, prev, lead) => prev;
        if (!replace)
            replace = (next, prev, lead) => insert(next, drop(prev, lead));
        if (to > prev.length)
            to = prev.length;
        if (from > to)
            from = to;
        let p = from;
        let n = 0;
        let lead = p ? prev[p - 1] : null;
        while (p < to || n < next.length) {
            if (p < to && n < next.length && equal(next[n], prev[p])) {
                lead = update(next[n], prev[p], lead);
                ++p;
                ++n;
            }
            else if (next.length - n > to - p) {
                lead = insert(next[n], lead);
                ++n;
            }
            else if (next.length - n < to - p) {
                lead = drop(prev[p], lead);
                ++p;
            }
            else {
                lead = replace(next[n], prev[p], lead);
                ++p;
                ++n;
            }
        }
    }
    $.$mol_reconcile = $mol_reconcile;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crus_list_vary extends $hyoo_crus_node {
        static tag = $hyoo_crus_sand_tag[$hyoo_crus_sand_tag.vals];
        items_vary(next, tag = 'term') {
            const units = this.units();
            if (next === undefined)
                return units.map(unit => this.land().sand_decode(unit));
            this.splice(next, 0, units.length, tag);
            return this.items_vary();
        }
        splice(next, from = this.units().length, to = from, tag = 'term') {
            const land = this.land();
            $mol_reconcile({
                prev: this.units(),
                from,
                to,
                next,
                equal: (next, prev) => $mol_compare_deep(this.land().sand_decode(prev), next),
                drop: (prev, lead) => this.land().post(lead?.self() ?? '', prev.head(), prev.self(), null),
                insert: (next, lead) => this.land().post(lead?.self() ?? '', this.head(), land.self_make(), next, tag),
                replace: (next, prev, lead) => this.land().post(lead?.self() ?? '', prev.head(), prev.self(), next, prev.tag()),
            });
        }
        find(vary) {
            for (const unit of this.units()) {
                if ($mol_compare_deep(this.land().sand_decode(unit), vary))
                    return unit;
            }
            return null;
        }
        has(vary, next, tag = 'term') {
            if (next === undefined)
                return Boolean(this.find(vary));
            if (next)
                this.add(vary, tag);
            else
                this.cut(vary);
            return next;
        }
        add(vary, tag = 'term') {
            if (this.has(vary))
                return;
            this.land().post('', this.head(), '', vary, tag);
        }
        cut(vary) {
            const units = [...this.units()];
            for (let i = 0; i < units.length; ++i) {
                if (!$mol_compare_deep(this.land().sand_decode(units[i]), vary))
                    continue;
                this.land().post(units[i - 1]?.self() ?? 0, units[i].head(), units[i].self(), null);
                units.splice(i, 1);
                --i;
            }
        }
        move(from, to) {
            this.land().sand_move(this.units()[from], this.head(), to);
        }
        wipe(seat) {
            this.land().sand_wipe(this.units()[seat]);
        }
        node_make(Node, vary, tag = 'term') {
            this.splice([vary], undefined, undefined, tag);
            return this.land().Node(Node).Item(this.units().at(-1).self());
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.head(), ' ', $mol_dev_format_auto(this.items_vary()));
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_crus_list_vary.prototype, "items_vary", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_list_vary.prototype, "splice", null);
    $.$hyoo_crus_list_vary = $hyoo_crus_list_vary;
    function $hyoo_crus_list(parse) {
        class $hyoo_crus_list extends $hyoo_crus_list_vary {
            static parse = parse;
            items(next) {
                return this.items_vary(next?.map(parse)).map(parse);
            }
            static toString() {
                return this === $hyoo_crus_list ? '$hyoo_crus_list<' + this.$.$mol_func_name(parse) + '>' : super.toString();
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_crus_list.prototype, "items", null);
        return $hyoo_crus_list;
    }
    $.$hyoo_crus_list = $hyoo_crus_list;
    class $hyoo_crus_list_bin extends $hyoo_crus_list($hyoo_crus_vary_cast_bin) {
    }
    $.$hyoo_crus_list_bin = $hyoo_crus_list_bin;
    class $hyoo_crus_list_bool extends $hyoo_crus_list($hyoo_crus_vary_cast_bool) {
    }
    $.$hyoo_crus_list_bool = $hyoo_crus_list_bool;
    class $hyoo_crus_list_int extends $hyoo_crus_list($hyoo_crus_vary_cast_int) {
    }
    $.$hyoo_crus_list_int = $hyoo_crus_list_int;
    class $hyoo_crus_list_real extends $hyoo_crus_list($hyoo_crus_vary_cast_real) {
    }
    $.$hyoo_crus_list_real = $hyoo_crus_list_real;
    class $hyoo_crus_list_ints extends $hyoo_crus_list($hyoo_crus_vary_cast_ints) {
    }
    $.$hyoo_crus_list_ints = $hyoo_crus_list_ints;
    class $hyoo_crus_list_reals extends $hyoo_crus_list($hyoo_crus_vary_cast_reals) {
    }
    $.$hyoo_crus_list_reals = $hyoo_crus_list_reals;
    class $hyoo_crus_list_ref extends $hyoo_crus_list($hyoo_crus_vary_cast_ref) {
    }
    $.$hyoo_crus_list_ref = $hyoo_crus_list_ref;
    class $hyoo_crus_list_str extends $hyoo_crus_list($hyoo_crus_vary_cast_str) {
    }
    $.$hyoo_crus_list_str = $hyoo_crus_list_str;
    class $hyoo_crus_list_time extends $hyoo_crus_list($hyoo_crus_vary_cast_time) {
    }
    $.$hyoo_crus_list_time = $hyoo_crus_list_time;
    class $hyoo_crus_list_dur extends $hyoo_crus_list($hyoo_crus_vary_cast_dur) {
    }
    $.$hyoo_crus_list_dur = $hyoo_crus_list_dur;
    class $hyoo_crus_list_range extends $hyoo_crus_list($hyoo_crus_vary_cast_range) {
    }
    $.$hyoo_crus_list_range = $hyoo_crus_list_range;
    class $hyoo_crus_list_json extends $hyoo_crus_list($hyoo_crus_vary_cast_json) {
    }
    $.$hyoo_crus_list_json = $hyoo_crus_list_json;
    class $hyoo_crus_list_jsan extends $hyoo_crus_list($hyoo_crus_vary_cast_jsan) {
    }
    $.$hyoo_crus_list_jsan = $hyoo_crus_list_jsan;
    class $hyoo_crus_list_dom extends $hyoo_crus_list($hyoo_crus_vary_cast_dom) {
    }
    $.$hyoo_crus_list_dom = $hyoo_crus_list_dom;
    class $hyoo_crus_list_tree extends $hyoo_crus_list($hyoo_crus_vary_cast_tree) {
    }
    $.$hyoo_crus_list_tree = $hyoo_crus_list_tree;
    class $hyoo_crus_list_ref_base extends $hyoo_crus_list_ref {
    }
    $.$hyoo_crus_list_ref_base = $hyoo_crus_list_ref_base;
    function $hyoo_crus_list_ref_to(Value) {
        class $hyoo_crus_list_ref_to extends $hyoo_crus_list_ref_base {
            static Value = $mol_memo.func(Value);
            static toString() {
                return this === $hyoo_crus_list_ref_to ? '$hyoo_crus_list_ref_to<' + Value() + '>' : super.toString();
            }
            remote_list(next) {
                const glob = this.$.$hyoo_crus_glob;
                const Node = Value();
                return this.items_vary(next?.map(item => item.ref()))
                    .map($hyoo_crus_vary_cast_ref)
                    .filter($mol_guard_defined)
                    .map(ref => glob.Node(ref, Node));
            }
            remote_add(item) {
                this.add(item.ref());
            }
            make(config) {
                if (config === null || typeof config === 'number') {
                    const self = this.land().self_make(config || undefined);
                    const node = this.land().Node(Value()).Item(self);
                    this.splice([node.ref()]);
                    return node;
                }
                else if (config instanceof $hyoo_crus_land) {
                    const land = config.area_make();
                    this.splice([land.ref()]);
                    return land.Node(Value()).Item('');
                }
                else if (config) {
                    const land = this.$.$hyoo_crus_glob.land_grab(config);
                    this.splice([land.ref()]);
                    return land.Node(Value()).Item('');
                }
            }
            remote_make(config) {
                return this.make(config);
            }
            local_make(idea) {
                const self = this.land().self_make(idea);
                const node = this.land().Node(Value()).Item(self);
                this.splice([node.ref()]);
                return node;
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_crus_list_ref_to.prototype, "remote_list", null);
        __decorate([
            $mol_action
        ], $hyoo_crus_list_ref_to.prototype, "remote_add", null);
        __decorate([
            $mol_action
        ], $hyoo_crus_list_ref_to.prototype, "make", null);
        __decorate([
            $mol_action
        ], $hyoo_crus_list_ref_to.prototype, "local_make", null);
        return $hyoo_crus_list_ref_to;
    }
    $.$hyoo_crus_list_ref_to = $hyoo_crus_list_ref_to;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crus_dict extends $hyoo_crus_list_vary {
        static tag = $hyoo_crus_sand_tag[$hyoo_crus_sand_tag.keys];
        keys() {
            return this.items_vary();
        }
        dive(key, Node, auto) {
            if (this.can_change() && auto !== undefined)
                this.has(key, true, Node.tag);
            const unit = this.find(key);
            return unit ? this.land().Node(Node).Item(unit.self()) : null;
        }
        static schema = {};
        static with(schema) {
            const $hyoo_crus_dict_with = class $hyoo_crus_dict_with extends this {
                static toString() {
                    if (this !== $hyoo_crus_dict_with)
                        return super.toString();
                    const params = Object.entries(schema).map(([name, type]) => `${name}: ${type}`);
                    return '$hyoo_crus_dict.with<{' + params.join(', ') + '}>';
                }
            };
            for (const Field in schema) {
                Object.defineProperty($hyoo_crus_dict_with.prototype, Field, {
                    value: function (auto) {
                        return this.dive(Field, schema[Field], auto);
                    }
                });
            }
            return Object.assign($hyoo_crus_dict_with, { schema: { ...this.schema, ...schema } });
        }
        ;
        [$mol_dev_format_head]() {
            const keys = $mol_wire_probe(() => this.keys());
            const nodes = $mol_wire_probe(() => this.nodes(null)) ?? [];
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.head(), ' ', $mol_dev_format_auto(keys?.map((key, index) => new Pair(key, nodes[index]))));
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_crus_dict.prototype, "keys", null);
    $.$hyoo_crus_dict = $hyoo_crus_dict;
    class Pair {
        key;
        val;
        constructor(key, val) {
            this.key = key;
            this.val = val;
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_tr({}, $mol_dev_format_td({}, $mol_dev_format_auto(this.key)), $mol_dev_format_td({}, ': '), $mol_dev_format_td({}, $mol_dev_format_auto(this.val)));
        }
    }
    function $hyoo_crus_dict_to(Value) {
        return class $hyoo_crus_dict_to extends $hyoo_crus_dict {
            Value = Value;
            key(key, auto) {
                return this.dive(key, this.Value, auto);
            }
            static toString() {
                return this === $hyoo_crus_dict_to ? '$hyoo_crus_dict_to<' + Value + '>' : super.toString();
            }
        };
    }
    $.$hyoo_crus_dict_to = $hyoo_crus_dict_to;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_hash_string(str, seed = 0) {
        let h1 = 0xdeadbeef ^ seed;
        let h2 = 0x41c6ce57 ^ seed;
        for (let i = 0; i < str.length; i++) {
            const ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return 4294967296 * (((1 << 16) - 1) & h2) + (h1 >>> 0);
    }
    $.$mol_hash_string = $mol_hash_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crus_atom_vary extends $hyoo_crus_node {
        static tag = $hyoo_crus_sand_tag[$hyoo_crus_sand_tag.solo];
        pick_unit(peer) {
            return this.units_of(peer).at(0);
        }
        vary(next) {
            return this.vary_of('', next);
        }
        vary_of(peer, next) {
            let unit_prev = this.pick_unit(peer);
            let prev = unit_prev ? this.land().sand_decode(unit_prev) : null;
            if (next === undefined)
                return prev;
            if ($mol_compare_deep(prev, next))
                return next;
            this.land().post('', unit_prev?.head() ?? this.head(), unit_prev?.self() ?? '', next);
            return this.vary_of(peer);
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.head(), ' ', $mol_dev_format_auto(this.vary()));
        }
    }
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_atom_vary.prototype, "vary_of", null);
    $.$hyoo_crus_atom_vary = $hyoo_crus_atom_vary;
    class $hyoo_crus_atom_enum_base extends $hyoo_crus_atom_vary {
        static options = [];
    }
    $.$hyoo_crus_atom_enum_base = $hyoo_crus_atom_enum_base;
    function $hyoo_crus_atom_enum(options) {
        class $hyoo_crus_atom_enum extends $hyoo_crus_atom_enum_base {
            static options = options;
            static toString() {
                return this === $hyoo_crus_atom_enum ? '$hyoo_crus_atom_enum<' + options.map($hyoo_crus_vary_cast_str) + '>' : super.toString();
            }
            val(next) {
                return this.val_of('', next);
            }
            val_of(peer, next) {
                validate: if (next !== undefined) {
                    for (const option of options) {
                        if ($mol_compare_deep(option, next))
                            break validate;
                    }
                    $mol_fail(new Error(`Wrong value (${$hyoo_crus_vary_cast_str(next)})`));
                }
                const val = this.vary_of(peer, next);
                for (const option of options) {
                    if ($mol_compare_deep(option, val))
                        return val;
                }
                return null;
            }
        }
        __decorate([
            $mol_mem_key
        ], $hyoo_crus_atom_enum.prototype, "val_of", null);
        return $hyoo_crus_atom_enum;
    }
    $.$hyoo_crus_atom_enum = $hyoo_crus_atom_enum;
    function $hyoo_crus_atom(parse) {
        class $hyoo_crus_atom extends $hyoo_crus_atom_vary {
            static parse = parse;
            val(next) {
                return this.val_of('', next);
            }
            val_of(peer, next) {
                if (next !== undefined)
                    parse(next);
                const res = this.vary_of(peer, next);
                try {
                    return parse(res);
                }
                catch {
                    return null;
                }
            }
            static toString() {
                return this === $hyoo_crus_atom ? '$hyoo_crus_atom<' + this.$.$mol_func_name(parse) + '>' : super.toString();
            }
        }
        return $hyoo_crus_atom;
    }
    $.$hyoo_crus_atom = $hyoo_crus_atom;
    class $hyoo_crus_atom_bin extends $hyoo_crus_atom($hyoo_crus_vary_cast_bin) {
    }
    $.$hyoo_crus_atom_bin = $hyoo_crus_atom_bin;
    class $hyoo_crus_atom_bool extends $hyoo_crus_atom($hyoo_crus_vary_cast_bool) {
    }
    $.$hyoo_crus_atom_bool = $hyoo_crus_atom_bool;
    class $hyoo_crus_atom_int extends $hyoo_crus_atom($hyoo_crus_vary_cast_int) {
    }
    $.$hyoo_crus_atom_int = $hyoo_crus_atom_int;
    class $hyoo_crus_atom_real extends $hyoo_crus_atom($hyoo_crus_vary_cast_real) {
    }
    $.$hyoo_crus_atom_real = $hyoo_crus_atom_real;
    class $hyoo_crus_atom_ints extends $hyoo_crus_atom($hyoo_crus_vary_cast_ints) {
    }
    $.$hyoo_crus_atom_ints = $hyoo_crus_atom_ints;
    class $hyoo_crus_atom_reals extends $hyoo_crus_atom($hyoo_crus_vary_cast_reals) {
    }
    $.$hyoo_crus_atom_reals = $hyoo_crus_atom_reals;
    class $hyoo_crus_atom_ref extends $hyoo_crus_atom($hyoo_crus_vary_cast_ref) {
    }
    $.$hyoo_crus_atom_ref = $hyoo_crus_atom_ref;
    class $hyoo_crus_atom_str extends $hyoo_crus_atom($hyoo_crus_vary_cast_str) {
    }
    $.$hyoo_crus_atom_str = $hyoo_crus_atom_str;
    class $hyoo_crus_atom_time extends $hyoo_crus_atom($hyoo_crus_vary_cast_time) {
    }
    $.$hyoo_crus_atom_time = $hyoo_crus_atom_time;
    class $hyoo_crus_atom_dur extends $hyoo_crus_atom($hyoo_crus_vary_cast_dur) {
    }
    $.$hyoo_crus_atom_dur = $hyoo_crus_atom_dur;
    class $hyoo_crus_atom_range extends $hyoo_crus_atom($hyoo_crus_vary_cast_range) {
    }
    $.$hyoo_crus_atom_range = $hyoo_crus_atom_range;
    class $hyoo_crus_atom_json extends $hyoo_crus_atom($hyoo_crus_vary_cast_json) {
    }
    $.$hyoo_crus_atom_json = $hyoo_crus_atom_json;
    class $hyoo_crus_atom_jsan extends $hyoo_crus_atom($hyoo_crus_vary_cast_jsan) {
    }
    $.$hyoo_crus_atom_jsan = $hyoo_crus_atom_jsan;
    class $hyoo_crus_atom_dom extends $hyoo_crus_atom($hyoo_crus_vary_cast_dom) {
    }
    $.$hyoo_crus_atom_dom = $hyoo_crus_atom_dom;
    class $hyoo_crus_atom_tree extends $hyoo_crus_atom($hyoo_crus_vary_cast_tree) {
    }
    $.$hyoo_crus_atom_tree = $hyoo_crus_atom_tree;
    class $hyoo_crus_atom_ref_base extends $hyoo_crus_atom_ref {
        static Value = $hyoo_crus_dict;
    }
    $.$hyoo_crus_atom_ref_base = $hyoo_crus_atom_ref_base;
    function $hyoo_crus_atom_ref_to(Value) {
        class $hyoo_crus_atom_ref_to extends $hyoo_crus_atom_ref_base {
            Value = $mol_memo.func(Value);
            static toString() {
                return this === $hyoo_crus_atom_ref_to ? '$hyoo_crus_atom_ref_to<' + Value() + '>' : super.toString();
            }
            remote(next) {
                return this.remote_of('', next);
            }
            remote_of(peer, next) {
                let ref = next?.ref() ?? next;
                ref = $hyoo_crus_vary_cast_ref(this.vary_of(peer, ref));
                if (!ref)
                    return null;
                return this.$.$hyoo_crus_glob.Node(ref, Value());
            }
            ensure(config) {
                return this.ensure_of('', config);
            }
            ensure_of(peer, config) {
                if (!this.val_of(peer)) {
                    if (config === null)
                        this.ensure_here(peer);
                    else if (config instanceof $hyoo_crus_land)
                        this.ensure_area(peer, config);
                    else if (config)
                        this.ensure_lord(peer, config);
                    else
                        return null;
                }
                return this.remote_of(peer);
            }
            ensure_here(peer) {
                const idea = $mol_hash_string(this.ref().description);
                const head = this.land().self_make(idea);
                const node = this.land().Node(Value()).Item(head);
                this.remote_of(peer, node);
            }
            ensure_area(peer, land) {
                const idea = $mol_hash_string(this.ref().description);
                const area = land.area_make(idea);
                this.val_of(peer, area.ref());
            }
            ensure_lord(peer, preset) {
                const land = this.$.$hyoo_crus_glob.land_grab(preset);
                this.val_of(peer, land.ref());
            }
            remote_ensure(preset) {
                return this.ensure(preset);
            }
            local_ensure() {
                return this.ensure(null);
            }
        }
        __decorate([
            $mol_mem_key
        ], $hyoo_crus_atom_ref_to.prototype, "remote_of", null);
        __decorate([
            $mol_action
        ], $hyoo_crus_atom_ref_to.prototype, "ensure_here", null);
        __decorate([
            $mol_action
        ], $hyoo_crus_atom_ref_to.prototype, "ensure_area", null);
        __decorate([
            $mol_action
        ], $hyoo_crus_atom_ref_to.prototype, "ensure_lord", null);
        return $hyoo_crus_atom_ref_to;
    }
    $.$hyoo_crus_atom_ref_to = $hyoo_crus_atom_ref_to;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crus_entity extends $hyoo_crus_dict.with({
        Title: $hyoo_crus_atom_str,
    }) {
        title(next) {
            return this.Title(next)?.val(next) ?? '';
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_crus_entity.prototype, "title", null);
    $.$hyoo_crus_entity = $hyoo_crus_entity;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crus_home extends $hyoo_crus_entity.with({
        Selection: $hyoo_crus_atom_str,
        Hall: $hyoo_crus_atom_ref_to(() => $hyoo_crus_dict),
    }) {
        hall_by(Node, preset) {
            return this.Hall(null)?.ensure(preset)?.cast(Node) ?? null;
        }
    }
    $.$hyoo_crus_home = $hyoo_crus_home;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crus_glob extends $mol_object {
        static lands_touched = new $mol_wire_set();
        lands_touched = this.constructor.lands_touched;
        static yard() {
            return new this.$.$hyoo_crus_yard;
        }
        yard() {
            return this.$.$hyoo_crus_glob.yard();
        }
        static home(Node) {
            return this.Land(this.$.$hyoo_crus_auth.current().lord()).Data(Node ?? $hyoo_crus_home);
        }
        home() {
            return this.$.$hyoo_crus_glob.home();
        }
        static king_grab(preset = { '': $hyoo_crus_rank_read }) {
            const king = this.$.$hyoo_crus_auth.grab();
            const colony = $mol_wire_sync($hyoo_crus_land).make({ $: this.$ });
            colony.auth = $mol_const(king);
            if ((preset[''] ?? $hyoo_crus_rank_deny) === $hyoo_crus_rank_deny) {
                colony.encrypted(true);
            }
            const self = this.$.$hyoo_crus_auth.current();
            colony.give(self, $hyoo_crus_rank_rule);
            for (const key in preset)
                colony.give(key ? $hyoo_crus_auth.from(key) : null, preset[key]);
            this.Land(colony.ref()).apply_unit(colony.delta_unit());
            return king;
        }
        king_grab(preset = { '': $hyoo_crus_rank_read }) {
            return this.$.$hyoo_crus_glob.king_grab(preset);
        }
        static land_grab(preset = { '': $hyoo_crus_rank_read }) {
            return this.Land(this.king_grab(preset).lord());
        }
        land_grab(preset = { '': $hyoo_crus_rank_read }) {
            return this.$.$hyoo_crus_glob.land_grab(preset);
        }
        static Land(ref) {
            this.lands_touched.add(ref);
            return $hyoo_crus_land.make({
                ref: $mol_const(ref),
            });
        }
        Land(ref) {
            return this.$.$hyoo_crus_glob.Land(ref);
        }
        static Node(ref, Node) {
            const land = this.Land($hyoo_crus_ref_land(ref));
            return land.Node(Node).Item($hyoo_crus_ref_head(ref));
        }
        Node(ref, Node) {
            return this.$.$hyoo_crus_glob.Node(ref, Node);
        }
        static apply_pack(pack) {
            const { lands, rocks } = pack.parts();
            return this.apply_parts(lands, rocks);
        }
        apply_pack(pack) {
            return this.$.$hyoo_crus_glob.apply_pack(pack);
        }
        static apply_parts(lands, rocks) {
            for (const land of Reflect.ownKeys(lands)) {
                const errors = this.Land(land).apply_unit(lands[land].units).filter(Boolean);
                for (const error of errors)
                    this.$.$mol_log3_warn({
                        place: `${this}.apply_pack()`,
                        message: error,
                        hint: 'Send it to developer',
                    });
            }
            for (const [hash, rock] of rocks) {
                if (!rock)
                    continue;
                this.$.$hyoo_crus_mine.rock_save(rock);
            }
        }
        apply_parts(lands, rocks) {
            return this.$.$hyoo_crus_glob.apply_parts(lands, rocks);
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_crus_glob, "yard", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_glob, "king_grab", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_glob, "land_grab", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crus_glob, "Land", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_glob, "apply_pack", null);
    __decorate([
        $mol_action
    ], $hyoo_crus_glob, "apply_parts", null);
    $.$hyoo_crus_glob = $hyoo_crus_glob;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.TransitionPositions = ["up_left", "up_middle", "up_right", "right", "down_right", "down_middle", "down_left", "left"];
        class BlockDirection extends $hyoo_crus_atom_enum(["up", "right", "down", "left"]) {
        }
        $$.BlockDirection = BlockDirection;
        class TransitionPositionData extends $hyoo_crus_atom_enum($$.TransitionPositions) {
        }
        $$.TransitionPositionData = TransitionPositionData;
        class TransitionPort extends $hyoo_crus_dict.with({
            Block: $hyoo_crus_atom_ref_to(() => $apxutechtop_samosbor_map_block_data),
            Floor: $hyoo_crus_atom_int,
            Position: TransitionPositionData,
        }) {
            is_correct(floor, position) {
                return this.Floor(null)?.val() === BigInt(floor) && this.Position(null)?.val() === position;
            }
        }
        $$.TransitionPort = TransitionPort;
        class TransitionData extends $hyoo_crus_dict.with({
            From: TransitionPort,
            To: TransitionPort
        }) {
            get_connected_block(ref) {
                if (this.From(null)?.Block(null)?.val() === ref) {
                    return this.To(null)?.Block()?.val();
                }
                return this.From(null)?.Block(null)?.val();
            }
            remove_transition() {
                const from_block_ref = this.From(null)?.Block(null)?.val();
                const from_block = from_block_ref && $hyoo_crus_glob.Node(from_block_ref, $apxutechtop_samosbor_map_block_data);
                const to_block_ref = this.To(null)?.Block(null)?.val();
                const to_block = to_block_ref && $hyoo_crus_glob.Node(to_block_ref, $apxutechtop_samosbor_map_block_data);
                to_block?.Transitions(null)?.cut(this.ref());
                from_block?.Transitions(null)?.cut(this.ref());
            }
        }
        __decorate([
            $mol_mem
        ], TransitionData.prototype, "get_connected_block", null);
        __decorate([
            $mol_action
        ], TransitionData.prototype, "remove_transition", null);
        $$.TransitionData = TransitionData;
        class FlightType extends $hyoo_crus_atom_enum(["stairs", "elevator", "ladder_elevator"]) {
        }
        $$.FlightType = FlightType;
        class FlightStatus extends $hyoo_crus_atom_enum(["free", "blocked"]) {
        }
        $$.FlightStatus = FlightStatus;
        class FlightData extends $hyoo_crus_dict.with({
            Type: FlightType,
            Status: FlightStatus,
        }) {
        }
        $$.FlightData = FlightData;
        class PassageType extends $hyoo_crus_atom_enum(["noway", "normal", "stairs_up", "stairs_down"]) {
        }
        $$.PassageType = PassageType;
        class PassageStatus extends $hyoo_crus_atom_enum(["free", "blocked", "danger"]) {
        }
        $$.PassageStatus = PassageStatus;
        class PassageData extends $hyoo_crus_dict.with({
            Type: PassageType,
            Status: PassageStatus,
        }) {
        }
        $$.PassageData = PassageData;
        const PassageDirections = {
            UpLeftPassage: PassageData,
            UpMiddlePassage: PassageData,
            UpRightPassage: PassageData,
            LeftPassage: PassageData,
            RightPassage: PassageData,
            DownLeftPassage: PassageData,
            DownMiddlePassage: PassageData,
            DownRightPassage: PassageData,
        };
        class FloorData extends $hyoo_crus_dict.with(PassageDirections) {
            static positions_map = {
                up_left: "UpLeftPassage",
                up_middle: "UpMiddlePassage",
                up_right: "UpRightPassage",
                right: "RightPassage",
                down_right: "DownRightPassage",
                down_middle: "DownMiddlePassage",
                down_left: "DownLeftPassage",
                left: "LeftPassage"
            };
            get_passage_type(transition) {
                if (transition === "right" || transition === "left") {
                    return "normal";
                }
                const property_name = FloorData.positions_map[transition];
                const passage_type = this[property_name](null)?.Type(null)?.val();
                return passage_type ?? "noway";
            }
            is_passage_free(transition) {
                const passage_type = this.get_passage_type(transition);
                if (!passage_type)
                    return false;
                if (passage_type === "noway")
                    return false;
                return true;
            }
        }
        __decorate([
            $mol_mem_key
        ], FloorData.prototype, "get_passage_type", null);
        __decorate([
            $mol_mem_key
        ], FloorData.prototype, "is_passage_free", null);
        $$.FloorData = FloorData;
        class FloorsData extends $hyoo_crus_dict_to(FloorData) {
        }
        $$.FloorsData = FloorsData;
        class BlockType extends $hyoo_crus_atom_enum(["residential", "abandoned", "frozen", "infected", "destroyed"]) {
        }
        $$.BlockType = BlockType;
        class ProfessionType extends $hyoo_crus_atom_enum(["luquidator", "repairman", "cleaner", "plumber"]) {
        }
        $$.ProfessionType = ProfessionType;
        class ProfessionData extends $hyoo_crus_dict.with({
            Type: ProfessionType,
            Floor: $hyoo_crus_atom_int,
        }) {
        }
        $$.ProfessionData = ProfessionData;
        class PlaceType extends $hyoo_crus_atom_enum(["theatre", "hospital", "party", "warehouse"]) {
        }
        $$.PlaceType = PlaceType;
        class PlaceData extends $hyoo_crus_dict.with({
            Type: PlaceType,
            Floor: $hyoo_crus_atom_int,
        }) {
        }
        $$.PlaceData = PlaceData;
        class $apxutechtop_samosbor_map_block_data extends $hyoo_crus_entity.with({
            Name: $hyoo_crus_atom_str,
            Direction: BlockDirection,
            Type: BlockType,
            Transitions: $hyoo_crus_list_ref_to(() => TransitionData),
            PositionX: $hyoo_crus_atom_int,
            PositionY: $hyoo_crus_atom_int,
            Layer: $hyoo_crus_atom_int,
            Generator: $hyoo_crus_atom_int,
            MinFloor: $hyoo_crus_atom_int,
            MaxFloor: $hyoo_crus_atom_int,
            LeftFlight: FlightData,
            RightFlight: FlightData,
            FloorsData: FloorsData,
            UpMiddleFlight: $hyoo_crus_atom_bool,
            DownMiddleFlight: $hyoo_crus_atom_bool,
            Professions: $hyoo_crus_list_ref_to(() => ProfessionData),
        }) {
            name(next) {
                return this.Name(null)?.val(next) ?? "N-00";
            }
            direction(next) {
                return this.Direction(null)?.val(next) ?? "up";
            }
            block_type(next) {
                return this.Type(null)?.val(next) ?? "residential";
            }
            transitions(next) {
                return this.Transitions(null)?.remote_list(next);
            }
            transition_by_position(floor, position) {
                return this.transitions()?.find((transition) => {
                    return (transition.From(null)?.Block(null)?.val() === this.ref() && transition.From(null)?.is_correct(floor, position)) || transition.To(null)?.Block(null)?.val() === this.ref() && transition.To(null)?.is_correct(floor, position);
                });
            }
            connect(my_floor, my_pos, block_node, another_floor, another_pos) {
                const trans = this.Transitions(null)?.make({ '': $hyoo_crus_rank_read });
                if (!trans)
                    return;
                block_node.Transitions(null)?.add(trans.ref());
                trans.From(null)?.Floor(null)?.val(BigInt(my_floor));
                trans.From(null)?.Position(null)?.val(my_pos);
                trans.From(null)?.Block(null)?.val(this.ref());
                trans.To(null)?.Floor(null)?.val(BigInt(another_floor));
                trans.To(null)?.Position(null)?.val(another_pos);
                trans.To(null)?.Block(null)?.val(block_node.ref());
            }
            remove_transition(transition) {
            }
            pos_x(next) {
                return Number(this.PositionX(null)?.val(next !== undefined ? BigInt(next) : undefined) ?? 0);
            }
            pos_y(next) {
                return Number(this.PositionY(null)?.val(next !== undefined ? BigInt(next) : undefined) ?? 0);
            }
            layer(next) {
                return Number(this.Layer(null)?.val(next !== undefined ? BigInt(next) : undefined) ?? 0);
            }
            min_floor(next) {
                return Number(this.MinFloor(null)?.val(next !== undefined ? BigInt(next) : undefined) ?? 0);
            }
            max_floor(next) {
                return Number(this.MaxFloor(null)?.val(next !== undefined ? BigInt(next) : undefined) ?? 0);
            }
            generator_floor(next) {
                return Number(this.Generator(null)?.val(next !== undefined ? BigInt(next) : undefined) ?? 0);
            }
            left_flight_status(next) {
                return this.LeftFlight(null)?.Status(null)?.val(next);
            }
            left_flight_type(next) {
                return this.LeftFlight(null)?.Type(null)?.val(next) ?? "stairs";
            }
            right_flight_status(next) {
                return this.RightFlight(null)?.Status(null)?.val(next);
            }
            right_flight_type(next) {
                return this.RightFlight(null)?.Type(null)?.val(next) ?? "stairs";
            }
            up_left_passage_type(floor, next) {
                return this.FloorsData(null)?.key(floor, null).UpLeftPassage(null)?.Type(null)?.val(next) ?? "noway";
            }
            up_middle_passage_type(floor, next) {
                return this.FloorsData(null)?.key(floor, null).UpMiddlePassage(null)?.Type(null)?.val(next) ?? "noway";
            }
            up_right_passage_type(floor, next) {
                return this.FloorsData(null)?.key(floor, null).UpRightPassage(null)?.Type(null)?.val(next) ?? "noway";
            }
            down_left_passage_type(floor, next) {
                return this.FloorsData(null)?.key(floor, null).DownLeftPassage(null)?.Type(null)?.val(next) ?? "noway";
            }
            down_middle_passage_type(floor, next) {
                return this.FloorsData(null)?.key(floor, null).DownMiddlePassage(null)?.Type(null)?.val(next) ?? "noway";
            }
            down_right_passage_type(floor, next) {
                return this.FloorsData(null)?.key(floor, null).DownRightPassage(null)?.Type(null)?.val(next) ?? "noway";
            }
            get_passage_type(floor, position) {
            }
        }
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block_data.prototype, "name", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block_data.prototype, "direction", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block_data.prototype, "block_type", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block_data.prototype, "transitions", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_block_data.prototype, "connect", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_block_data.prototype, "remove_transition", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block_data.prototype, "pos_x", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block_data.prototype, "pos_y", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block_data.prototype, "layer", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block_data.prototype, "min_floor", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block_data.prototype, "max_floor", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block_data.prototype, "generator_floor", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block_data.prototype, "left_flight_status", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block_data.prototype, "left_flight_type", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block_data.prototype, "right_flight_status", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block_data.prototype, "right_flight_type", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_block_data.prototype, "up_left_passage_type", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_block_data.prototype, "up_middle_passage_type", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_block_data.prototype, "up_right_passage_type", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_block_data.prototype, "down_left_passage_type", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_block_data.prototype, "down_middle_passage_type", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_block_data.prototype, "down_right_passage_type", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_block_data.prototype, "get_passage_type", null);
        $$.$apxutechtop_samosbor_map_block_data = $apxutechtop_samosbor_map_block_data;
        const block_full_cell = 380;
        $$.ru_to_eng = {
            "А": "a",
            "Б": "b",
            "В": "v",
            "Г": "g",
            "Д": "d",
            "Е": "e",
            "Ж": "j",
            "З": "z",
            "И": "i",
            "К": "k",
            "Л": "l",
            "М": "m",
            "Н": "n",
            "О": "o",
            "П": "p",
            "Р": "r",
            "С": "s",
            "Т": "t",
            "У": "u",
            "Ф": "f",
            "Х": "h",
            "Ц": "c",
            "Ч": "ch",
            "Ш": "sh",
            "Щ": "shch",
            "Ы": "y",
            "Ю": "yu",
            "Э": "je",
            "Я": "ya",
        };
        class $apxutechtop_samosbor_map_block_passage extends $.$apxutechtop_samosbor_map_block_passage {
            floor_inc_value() {
                if (this.type() === "stairs_up") {
                    return "+1";
                }
                if (this.type() === "stairs_down") {
                    return "-1";
                }
                return "0";
            }
            is_interfloor() {
                return this.type() === "stairs_up" || this.type() === "stairs_down";
            }
            content() {
                return this.is_interfloor() ? this.InterFloor() : null;
            }
        }
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block_passage.prototype, "is_interfloor", null);
        $$.$apxutechtop_samosbor_map_block_passage = $apxutechtop_samosbor_map_block_passage;
        class $apxutechtop_samosbor_map_block extends $.$apxutechtop_samosbor_map_block {
            block_ref(next) {
                return next;
            }
            block_data(next) {
                return next;
            }
            block_direction(next) {
                return this.block_data().direction(next);
            }
            pos_x(next) {
                return this.block_data().pos_x(next) ?? 0;
            }
            pos_y(next) {
                return this.block_data().pos_y(next) ?? 0;
            }
            left() {
                return this.pos_x() * block_full_cell;
            }
            top() {
                return this.pos_y() * block_full_cell;
            }
            block_name(next) {
                return this.block_data().name(next) ?? "";
            }
            current_floor() {
                return this.current_layer() - this.block_layer();
            }
            display_floor() {
                return (this.current_floor() <= this.max_floor() && this.current_floor() >= this.min_floor()) ? `${this.current_floor()}` : "?";
            }
            generator_floor_value(next) {
                return this.block_data().generator_floor(next);
            }
            block_layer(next) {
                return this.block_data().layer(next);
            }
            min_floor(next) {
                return this.block_data().min_floor(next);
            }
            max_floor(next) {
                return this.block_data().max_floor(next);
            }
            visible() {
                return (this.min_floor() <= this.current_floor()) && (this.current_floor() <= this.max_floor());
            }
            color_letter() {
                const block_letter = this.block_name()[0];
                return $$.ru_to_eng[block_letter];
            }
            block_type(next) {
                return this.block_data().block_type(next);
            }
            transitions() {
                const transition_views = [];
                for (const transition of this.block_data().transitions() ?? []) {
                    const from_block_ref = transition.From(null)?.Block(null)?.val();
                    if (!from_block_ref)
                        continue;
                    const block_data = $hyoo_crus_glob.Node(from_block_ref, $apxutechtop_samosbor_map_block_data);
                    if (this.block_data() === block_data) {
                        transition_views.push(this.Transition(transition.ref()));
                    }
                }
                return transition_views;
            }
            transition_pos(position) {
                const padding = 0;
                const adjustments = {
                    up: { x: 0, y: padding },
                    down: { x: 0, y: -padding },
                    left: { x: padding, y: 0 },
                    right: { x: -padding, y: 0 },
                };
                const transition_offset = $apxutechtop_samosbor_map_app.getOffset(position, this.block_direction());
                const abs_dir = $apxutechtop_samosbor_map_app.absolute_direction(this.block_direction(), position);
                const adjustment = adjustments[abs_dir] ?? { x: 0, y: 0 };
                const adjusted_offset = {
                    x: transition_offset.x - 50,
                    y: transition_offset.y - 50
                };
                return adjusted_offset;
            }
            transition_direction(ref) {
                const node = $hyoo_crus_glob.Node(ref, TransitionData);
                const block_ref = node.From(null)?.Block(null)?.val();
                const block = this.block_data();
                const absolute_direction = $apxutechtop_samosbor_map_app.absolute_direction(block.direction(), node.From(null)?.Position(null)?.val());
                if (absolute_direction === "down" || absolute_direction === "up") {
                    return "horizontal";
                }
                else {
                    return "vertical";
                }
            }
            transition_hidden(ref) {
                const node = $hyoo_crus_glob.Node(ref, TransitionData);
                const transition_floor = Number(node.From(null)?.Floor(null)?.val());
                const current_floor = this.current_floor();
                this.block_data().FloorsData(null);
                return transition_floor !== current_floor;
            }
            transition_left(ref) {
                const transition = $hyoo_crus_glob.Node(ref, TransitionData);
                const position = transition.From(null)?.Position(null)?.val();
                if (!position)
                    return 0;
                return this.transition_pos(position).x;
            }
            transition_top(ref) {
                const transition = $hyoo_crus_glob.Node(ref, TransitionData);
                const position = transition.From(null)?.Position(null)?.val();
                if (!position)
                    return 0;
                return this.transition_pos(position).y;
            }
            connections() {
                if (!this.show_connections()) {
                    return [];
                }
                const connections = [];
                for (const position of $$.TransitionPositions) {
                    const connection = this.Connection(position);
                    connections.push(connection);
                }
                return connections;
            }
            connection_hidden(position) {
                if (this.create_mode() || this.connect_mode()) {
                    const floor = this.current_floor();
                    const is_passage_free = this.block_data().FloorsData(null)?.key(floor, null)?.is_passage_free(position);
                    return !(is_passage_free ?? false);
                }
                return true;
            }
            connection_pos(position) {
                const padding = 30;
                const adjustments = {
                    up: { x: 0, y: padding },
                    down: { x: 0, y: -padding },
                    left: { x: padding, y: 0 },
                    right: { x: -padding, y: 0 },
                };
                const connectionOffset = $apxutechtop_samosbor_map_app.getOffset(position, this.block_direction());
                const abs_dir = $apxutechtop_samosbor_map_app.absolute_direction(this.block_direction(), position);
                const adjustment = adjustments[abs_dir] ?? { x: 0, y: 0 };
                const adjustedOffset = {
                    x: connectionOffset.x + adjustment.x,
                    y: connectionOffset.y + adjustment.y
                };
                return adjustedOffset;
            }
            connection_left(position) {
                return this.connection_pos(position).x;
            }
            connection_top(position) {
                return this.connection_pos(position).y;
            }
            connection_click(position, event) {
                console.log(event);
                event?.stopImmediatePropagation();
                event?.stopPropagation();
                if (this.create_mode()) {
                    return this.create_from_connection(position, event);
                }
                if (this.connect_mode()) {
                    console.log("select");
                    this.select_connection(position);
                }
            }
            static first_port(port) {
                return port ?? undefined;
            }
            select_connection(position) {
                const first_port = $apxutechtop_samosbor_map_block.first_port();
                const is_same_port = (port) => {
                    return port.block_ref.description == this.block_data().ref().description && port.floor == this.current_floor() && port.position == position;
                };
                if (first_port && is_same_port(first_port)) {
                    $apxutechtop_samosbor_map_block.first_port(null);
                    return;
                }
                if (this.block_data().ref() === first_port?.block_ref)
                    return;
                if (!first_port) {
                    $apxutechtop_samosbor_map_block.first_port({ block_ref: this.block_data().ref(), floor: this.current_floor(), position: position });
                    return;
                }
                this.change_connection(position);
            }
            change_connection(position) {
                const first_port = $apxutechtop_samosbor_map_block.first_port();
                console.log("first port: ", first_port);
                if (!first_port)
                    return;
                const first_block = $hyoo_crus_glob.Node(first_port.block_ref, $apxutechtop_samosbor_map_block_data);
                const transition = this.block_data().transition_by_position(this.current_floor(), position);
                if (transition) {
                    if (first_block.transition_by_position(first_port.floor, first_port.position) !== transition) {
                        return;
                    }
                    console.log(transition.From(null)?.Block(null)?.val(), transition.To(null)?.Block(null)?.val(), transition.From(null)?.Position(null)?.val(), transition.To(null)?.Position(null)?.val());
                    transition.remove_transition();
                }
                else {
                    const another_block = $hyoo_crus_glob.Node(first_port.block_ref, $apxutechtop_samosbor_map_block_data);
                    const another_floor = first_port.floor;
                    const another_position = first_port.position;
                    this.block_data().connect(this.current_floor(), position, another_block, another_floor, another_position);
                }
                $apxutechtop_samosbor_map_block.first_port(null);
            }
            connection_highlight(position) {
                const first_port = $apxutechtop_samosbor_map_block.first_port();
                if (!first_port) {
                    return false;
                }
                const current_block = this.block_data().ref();
                const current_floor = this.current_floor();
                const current_position = position;
                const is_same_port = ({ block_ref, floor, position }) => {
                    if (current_block === block_ref &&
                        current_floor === floor &&
                        current_position === position) {
                        return true;
                    }
                };
                if (is_same_port(first_port)) {
                    console.log("pressed myself");
                    return true;
                }
                const first_block = $hyoo_crus_glob.Node(first_port.block_ref, $apxutechtop_samosbor_map_block_data);
                const transition = first_block.transition_by_position(first_port.floor, first_port.position);
                const current_port = (transition?.From(null)?.Block(null)?.val() === first_block.ref()) ? transition.To(null) : transition?.From(null);
                if (!current_port) {
                    return false;
                }
                const second_port = {
                    block_ref: current_port.Block(null)?.val(),
                    floor: Number(current_port.Floor(null)?.val()),
                    position: current_port.Position(null)?.val(),
                };
                if (is_same_port(second_port)) {
                    return true;
                }
                return false;
            }
            create_from_connection(position, event) {
                event?.stopPropagation();
                const new_block_name = `N-${Math.floor(Math.random() * 100)}`;
                const block_name = this.block_name();
                const floor_num = this.current_floor();
                const trans = Gigacluster.transition(block_name, floor_num, position);
                if (this.connect_mode()) {
                    this.on_connection_select(position);
                }
                if (trans) {
                    return;
                }
                if (this.connect_mode())
                    return;
                const offset = $apxutechtop_samosbor_map_app.getPositionOffset(position, this.block_direction());
                const new_block_direction = $apxutechtop_samosbor_map_app.next_direction($apxutechtop_samosbor_map_app.next_direction($apxutechtop_samosbor_map_app.absolute_direction(this.block_direction(), position)));
                const new_offset = $apxutechtop_samosbor_map_app.getPositionOffset("up_left", new_block_direction);
                console.log(offset);
                const pos_x = Math.round((this.pos_x() + offset.x - new_offset.x));
                const pos_y = Math.round((this.pos_y() + offset.y - new_offset.y));
                const new_block = {
                    name: new_block_name,
                    direction: new_block_direction,
                    pos_x: pos_x,
                    pos_y: pos_y,
                };
                const new_block_node = Gigacluster.create_block();
                if (!new_block_node)
                    return;
                new_block_node.up_left_passage_type(0, "normal");
                this.block_data().connect(this.current_floor(), position, new_block_node, 0, "up_left");
                new_block_node.name(new_block_name);
                new_block_node.direction(new_block_direction);
                new_block_node.pos_x(pos_x);
                new_block_node.pos_y(pos_y);
                return event;
            }
            has_middle_flight() {
                return this.is_up_flight() || this.is_down_flight();
            }
            left_flight_icon() {
                const flight_type = this.block_data().left_flight_type();
                if (!flight_type || this.has_middle_flight()) {
                    return;
                }
                return this.flight_icons("left")[flight_type];
            }
            left_flight_click(event) {
                if (!this.edit_mode())
                    return;
                event?.stopImmediatePropagation();
                const current_flight_type = this.block_data().left_flight_type();
                const flight_type_map = { stairs: "elevator", elevator: "ladder_elevator", ladder_elevator: "stairs" };
                const next_flight_type = flight_type_map[current_flight_type];
                this.block_data().left_flight_type(next_flight_type);
            }
            right_flight_icon() {
                const flight_type = this.block_data().right_flight_type();
                if (!flight_type || this.has_middle_flight()) {
                    return;
                }
                return this.flight_icons("right")[flight_type];
            }
            right_flight_click(event) {
                if (!this.edit_mode())
                    return;
                event?.stopImmediatePropagation();
                const current_flight_type = this.block_data().right_flight_type();
                const flight_type_map = { stairs: "elevator", elevator: "ladder_elevator", ladder_elevator: "stairs" };
                const next_flight_type = flight_type_map[current_flight_type];
                this.block_data().right_flight_type(next_flight_type);
            }
            next_passage_type(current_passage_type) {
                const passage_type_map = {};
                PassageType.options.forEach((t, i) => {
                    const next_passage_type = PassageType.options[(i + 1) % PassageType.options.length];
                    passage_type_map[t] = next_passage_type;
                });
                return passage_type_map[current_passage_type];
            }
            up_left_passage_type() {
                const floor = this.current_floor();
                return this.block_data().up_left_passage_type(floor);
            }
            up_left_passage_click(event) {
                if (!this.edit_mode())
                    return;
                event?.stopImmediatePropagation();
                const floor = this.current_floor();
                const current_passage_type = this.block_data().up_left_passage_type(floor);
                const next_passage_type = this.next_passage_type(current_passage_type);
                this.block_data().up_left_passage_type(floor, next_passage_type);
            }
            up_middle_passage_type() {
                const floor = this.current_floor();
                return this.block_data().up_middle_passage_type(floor);
            }
            up_middle_passage_click(event) {
                if (!this.edit_mode())
                    return;
                event?.stopImmediatePropagation();
                const floor = this.current_floor();
                const current_passage_type = this.block_data().up_middle_passage_type(floor);
                const next_passage_type = this.next_passage_type(current_passage_type);
                this.block_data().up_middle_passage_type(floor, next_passage_type);
            }
            up_right_passage_type() {
                const floor = this.current_floor();
                return this.block_data().up_right_passage_type(floor);
            }
            up_right_passage_click(event) {
                if (!this.edit_mode())
                    return;
                event?.stopImmediatePropagation();
                const floor = this.current_floor();
                const current_passage_type = this.block_data().up_right_passage_type(floor);
                const next_passage_type = this.next_passage_type(current_passage_type);
                this.block_data().up_right_passage_type(floor, next_passage_type);
            }
            down_left_passage_type() {
                const floor = this.current_floor();
                return this.block_data().down_left_passage_type(floor);
            }
            down_left_passage_click(event) {
                if (!this.edit_mode())
                    return;
                event?.stopImmediatePropagation();
                const floor = this.current_floor();
                const current_passage_type = this.block_data().down_left_passage_type(floor);
                const next_passage_type = this.next_passage_type(current_passage_type);
                this.block_data().down_left_passage_type(floor, next_passage_type);
            }
            down_middle_passage_type() {
                const floor = this.current_floor();
                return this.block_data().down_middle_passage_type(floor);
            }
            down_middle_passage_click(event) {
                if (!this.edit_mode())
                    return;
                event?.stopImmediatePropagation();
                const floor = this.current_floor();
                const current_passage_type = this.block_data().down_middle_passage_type(floor);
                const next_passage_type = this.next_passage_type(current_passage_type);
                this.block_data().down_middle_passage_type(floor, next_passage_type);
            }
            down_right_passage_type() {
                const floor = this.current_floor();
                return this.block_data().down_right_passage_type(floor);
            }
            down_right_passage_click(event) {
                if (!this.edit_mode())
                    return;
                event?.stopImmediatePropagation();
                const floor = this.current_floor();
                const current_passage_type = this.block_data().down_right_passage_type(floor);
                const next_passage_type = this.next_passage_type(current_passage_type);
                this.block_data().down_right_passage_type(floor, next_passage_type);
            }
            is_up_flight(next) {
                return this.block_data().UpMiddleFlight(null)?.val(next) ?? false;
            }
            up_passage_or_flight() {
                if (this.is_up_flight()) {
                    return this.up_flight();
                }
                else {
                    return this.up_middle_passage();
                }
            }
            is_down_flight(next) {
                return this.block_data().DownMiddleFlight(null)?.val(next) ?? false;
            }
            down_passage_or_flight() {
                if (this.is_down_flight()) {
                    return this.down_flight();
                }
                else {
                    return this.down_middle_passage();
                }
            }
        }
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "block_ref", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "block_data", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "block_direction", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "pos_x", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "pos_y", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "left", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "top", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "block_name", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "current_floor", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "display_floor", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "generator_floor_value", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "block_layer", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "min_floor", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "max_floor", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "visible", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "color_letter", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "block_type", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "transitions", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_block.prototype, "transition_pos", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_block.prototype, "transition_direction", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_block.prototype, "transition_hidden", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_block.prototype, "transition_left", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_block.prototype, "transition_top", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "connections", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_block.prototype, "connection_hidden", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_block.prototype, "connection_pos", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_block.prototype, "connection_left", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_block.prototype, "connection_top", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_block.prototype, "connection_click", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_block.prototype, "select_connection", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_block.prototype, "change_connection", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_block.prototype, "connection_highlight", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_block.prototype, "create_from_connection", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "has_middle_flight", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "left_flight_icon", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_block.prototype, "left_flight_click", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "right_flight_icon", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_block.prototype, "right_flight_click", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "up_left_passage_type", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_block.prototype, "up_left_passage_click", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "up_middle_passage_type", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_block.prototype, "up_middle_passage_click", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "up_right_passage_type", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_block.prototype, "up_right_passage_click", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "down_left_passage_type", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_block.prototype, "down_left_passage_click", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "down_middle_passage_type", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_block.prototype, "down_middle_passage_click", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "down_right_passage_type", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_block.prototype, "down_right_passage_click", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "is_up_flight", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "up_passage_or_flight", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "is_down_flight", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block.prototype, "down_passage_or_flight", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_block, "first_port", null);
        $$.$apxutechtop_samosbor_map_block = $apxutechtop_samosbor_map_block;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("apxutechtop/samosbor/map/block/block.view.css", "@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,700&display=swap');\n\n@font-face {\n\tfont-family: \"Roboto\";\n\tsrc: url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,700&display=swap\");\n\tfont-weight: 700;\n\tfont-style: normal;\n}\n\n@keyframes blink-edit {\n\n\t0%,\n\t100% {\n\t\toutline-color: black;\n\t\t/* Цвет обводки в начале и конце цикла */\n\t}\n\n\t50% {\n\t\toutline-color: transparent;\n\t\t/* Обводка исчезает посередине цикла */\n\t}\n}\n\n[apxutechtop_samosbor_map_cluster]>*,\n[apxutechtop_samosbor_map_block] {\n\n\t[mol_view] {\n\t\ttransition: none;\n\t}\n\n\t[mol_icon] {\n\t\tfill: white;\n\t\tfilter: unset;\n\t\tz-index: 100;\n\t}\n\n\t--block-type-stroke-color: #00000000;\n\n\t&[block-type=residential] {}\n\n\t&[block-type=destroyed] {\n\t\t--block-type-stroke-color: black;\n\t}\n\n\t&[block-type=infected] {\n\t\t--block-type-stroke-color: red;\n\t}\n\n\t&[block-type=abandoned] {\n\t\t--block-type-stroke-color: yellow;\n\t}\n\n\t&[block-type=frozen] {\n\t\t--block-type-stroke-color: blue;\n\t}\n\n\tpadding: calc(var(--transition-length) / 2);\n\n\t&:not([visible]) {\n\t\t[apxutechtop_samosbor_map_block_content] {\n\t\t\topacity: 0.2;\n\t\t}\n\t}\n\n\t&[selected] {\n\t\toutline: 5px solid rgb(14, 211, 237);\n\t\t/* Размер и цвет границы */\n\t\tanimation: blink-border 2s infinite;\n\t\t/* Запуск анимации бесконечно */\n\t}\n\n\ttop: 0px;\n\tleft: 0px;\n\tposition: absolute;\n\n\t[apxutechtop_samosbor_map_block_transition] {\n\t\t--transition-width: 50px;\n\t\t--transition-height: 50px;\n\t\tbox-sizing: content-box;\n\t\tz-index: 4000;\n\n\t\t&[hidden] {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t&[direction=vertical] {\n\t\t\theight: var(--transition-width);\n\t\t\twidth: var(--transition-length);\n\n\t\t\tborder-bottom: 10px solid white;\n\t\t\tborder-top: 10px solid white;\n\t\t\ttranslate: 0px -10px;\n\t\t}\n\n\t\t&[direction=horizontal] {\n\t\t\theight: var(--transition-length);\n\t\t\twidth: var(--transition-width);\n\t\t\tborder-left: 10px solid white;\n\t\t\tborder-right: 10px solid white;\n\t\t\ttranslate: -10px;\n\t\t}\n\n\t\tposition: absolute;\n\t\t/* transform: translate(-50%, -50%); */\n\t\t/* border: 5px solid white; */\n\t\tbackground-color: #FFFFFF80;\n\t\tz-index: 100;\n\t}\n\n\t[apxutechtop_samosbor_map_block_part] {\n\t\twidth: var(--part-width);\n\t\theight: var(--part-width);\n\n\t\t&::before {\n\t\t\tbackground-color: var(--main);\n\t\t}\n\t}\n\n\t[apxutechtop_samosbor_map_block_floor_part] {\n\t\tpadding-top: 50px;\n\t\tpadding-right: 11px;\n\t\tpadding-bottom: 50px;\n\t\tpadding-left: 11px;\n\t\tgap: 15px;\n\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tflex-wrap: nowrap;\n\n\t\t&>* {\n\t\t\tdisplay: flex;\n\t\t\tz-index: 10;\n\t\t\tfont-family: \"Roboto\";\n\t\t\tfont-weight: 700;\n\t\t\tfont-size: 32px;\n\t\t\tline-height: 20px;\n\t\t\tletter-spacing: 0;\n\t\t\ttext-align: center;\n\t\t\tcolor: white;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\tjustify-content: space-around;\n\t\t\tflex-wrap: wrap;\n\t\t\talign-self: stretch;\n\t\t\tjustify-items: stretch;\n\n\t\t\t&>* {\n\t\t\t\twidth: 34px;\n\t\t\t\theight: 34px;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t}\n\n\t\t}\n\t}\n\n\t[apxutechtop_samosbor_map_block_flight] {\n\t\t[mol_icon] {\n\t\t\twidth: var(--duo-icon-size);\n\t\t\theight: var(--duo-icon-size);\n\n\t\t\t&:only-child {\n\t\t\t\twidth: var(--solo-icon-size);\n\t\t\t\theight: var(--solo-icon-size);\n\t\t\t}\n\t\t}\n\t}\n\n\t&[editing] {\n\n\t\t[apxutechtop_samosbor_map_block_flight],\n\t\t[apxutechtop_samosbor_map_block_passage] {\n\t\t\tz-index: 2000;\n\n\t\t\t&::after {\n\t\t\t\tcontent: \"\";\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tposition: absolute;\n\t\t\t\toutline: 3px solid black;\n\t\t\t\tanimation: blink-edit 2s infinite;\n\t\t\t}\n\n\t\t}\n\t}\n\n\t[apxutechtop_samosbor_map_block_passage] {\n\t\t&::before {\n\t\t\tbackground-color: var(--main);\n\t\t}\n\n\t\t&[type=normal],\n\t\t&[type=stairs_up],\n\t\t&[type=stairs_down] {\n\t\t\t&::before {\n\t\t\t\tbackground-color: var(--bg);\n\t\t\t}\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_passage_interfloor] {\n\t\t\tdisplay: flex;\n\t\t\tgap: 10px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_passage_floor_inc] {\n\t\t\tz-index: 2000;\n\t\t\tfont-family: \"Roboto\";\n\t\t\tfont-weight: 700;\n\t\t\tfont-size: 26px;\n\t\t\tline-height: 20px;\n\t\t\tletter-spacing: 0;\n\t\t\ttext-align: center;\n\t\t\tcolor: white;\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_passage_stairs] {\n\t\t\twidth: 30px;\n\t\t\theight: 30px;\n\t\t}\n\t}\n\n\t[apxutechtop_samosbor_map_block_middle_flight] {\n\t\t&::before {\n\t\t\tbackground-color: var(--main);\n\t\t}\n\n\t}\n\n\t[apxutechtop_samosbor_map_block_blockname] {\n\t\tz-index: 10;\n\t\talign-items: center;\n\t}\n\n\t[apxutechtop_samosbor_map_block_currentfloor] {\n\t\tz-index: 10;\n\t\talign-items: center;\n\t}\n\n\n\t[apxutechtop_samosbor_map_block_content] {\n\t\t--stroke-length-left: 85px;\n\t\t/* Длина штриха ВЕРТИКАЛЬНЫХ линий */\n\t\t--empty-length-left: 85px;\n\t\t/* Длина пропуска ВЕРТИКАЛЬНЫХ линий */\n\t\t--stroke-length-top: 90px;\n\t\t/* Длина штриха ГОРИЗОНТАЛЬНЫХ линий */\n\t\t--empty-length-top: 90px;\n\t\t/* Длина пропуска ГОРИЗОНТАЛЬНЫХ линий */\n\t\tbox-sizing: border-box;\n\t\tbackground-color: white;\n\t\tcursor: pointer;\n\t\tuser-select: none;\n\t\tdisplay: flex;\n\t\tgap: 10px;\n\t\tflex-wrap: wrap;\n\t\tcolor: black;\n\t\tfont-size: 40px;\n\t\tdisplay: flex;\n\t\tposition: relative;\n\t\tpadding: 10px;\n\t\t--stroke-color: var(--block-type-stroke-color);\n\t\tborder-radius: 10px;\n\n\t\t&::after {\n\t\t\tposition: absolute;\n\t\t\tinset: 0px;\n\t\t\tcontent: \"\";\n\t\t\tz-index: 100;\n\t\t\t/* Разные значения для вертикальных/горизонтальных линий */\n\t\t\t/* --stroke-length-vertical: 85px;\n\t\t\t--empty-length-vertical: 85px;\n\t\t\t--stroke-length-horizontal: 90px;\n\t\t\t--empty-length-horizontal: 90px; */\n\t\t\t--stroke-width: 10px;\n\t\t\tborder-radius: 10px;\n\n\t\t\t/* Толщина линии */\n\n\t\t\twidth: calc(100% - 0px);\n\t\t\theight: calc(100% - 0px);\n\n\t\t\t/* Рассчитываем половины значений */\n\t\t\t--half-dash-h: calc(var(--stroke-length-horizontal) / 2);\n\t\t\t--half-dash-v: calc(var(--stroke-length-vertical) / 2);\n\n\t\t\tbackground:\n\t\t\t\t/* Верхняя граница (горизонтальная) */\n\t\t\t\tlinear-gradient(90deg,\n\t\t\t\t\tvar(--stroke-color) 0 var(--half-dash-h),\n\t\t\t\t\ttransparent var(--half-dash-h) calc(var(--half-dash-h) + var(--empty-length-horizontal)),\n\t\t\t\t\tvar(--stroke-color) calc(var(--half-dash-h) + var(--empty-length-horizontal)) calc(var(--stroke-length-horizontal) + var(--empty-length-horizontal))) 0 0 / calc(var(--stroke-length-horizontal) + var(--empty-length-horizontal)) var(--stroke-width) repeat-x,\n\n\t\t\t\t/* Правая граница (вертикальная) */\n\t\t\t\tlinear-gradient(180deg,\n\t\t\t\t\tvar(--stroke-color) 0 var(--half-dash-v),\n\t\t\t\t\ttransparent var(--half-dash-v) calc(var(--half-dash-v) + var(--empty-length-vertical)),\n\t\t\t\t\tvar(--stroke-color) calc(var(--half-dash-v) + var(--empty-length-vertical)) calc(var(--stroke-length-vertical) + var(--empty-length-vertical))) 100% 0 / var(--stroke-width) calc(var(--stroke-length-vertical) + var(--empty-length-vertical)) repeat-y,\n\n\t\t\t\t/* Нижняя граница (горизонтальная) */\n\t\t\t\tlinear-gradient(270deg,\n\t\t\t\t\tvar(--stroke-color) 0 var(--half-dash-h),\n\t\t\t\t\ttransparent var(--half-dash-h) calc(var(--half-dash-h) + var(--empty-length-horizontal)),\n\t\t\t\t\tvar(--stroke-color) calc(var(--half-dash-h) + var(--empty-length-horizontal)) calc(var(--stroke-length-horizontal) + var(--empty-length-horizontal))) 0 100% / calc(var(--stroke-length-horizontal) + var(--empty-length-horizontal)) var(--stroke-width) repeat-x,\n\n\t\t\t\t/* Левая граница (вертикальная) */\n\t\t\t\tlinear-gradient(0deg,\n\t\t\t\t\tvar(--stroke-color) 0 var(--half-dash-v),\n\t\t\t\t\ttransparent var(--half-dash-v) calc(var(--half-dash-v) + var(--empty-length-vertical)),\n\t\t\t\t\tvar(--stroke-color) calc(var(--half-dash-v) + var(--empty-length-vertical)) calc(var(--stroke-length-vertical) + var(--empty-length-vertical))) 0 0 / var(--stroke-width) calc(var(--stroke-length-vertical) + var(--empty-length-vertical)) repeat-y;\n\t\t\tbackground: unset;\n\t\t\t/* border: 10px solid var(--stroke-color); */\n\t\t\tbox-shadow: 0 0 10px 10px var(--stroke-color);\n\t\t\t/* blur = 20px, spread = 5px */\n\n\t\t}\n\n\t\t/* filter: drop-shadow(0 0 20px var(--stroke-color)); */\n\n\n\t}\n\n\t[apxutechtop_samosbor_map_block_middle_row] {\n\t\tdisplay: flex;\n\n\t\t[apxutechtop_samosbor_map_block_hallway] {\n\t\t\tbackground-color: var(--bg);\n\t\t}\n\n\t\t&>* {\n\t\t\tbackground-color: var(--bg);\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_passage] {\n\t\t\tposition: relative;\n\n\t\t\t&::before {\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tcontent: \"\";\n\t\t\t\twidth: 100% !important;\n\t\t\t\theight: 100% !important;\n\t\t\t\tbackground-color: var(--bg);\n\t\t\t\tposition: absolute;\n\t\t\t\t/* background-color: var(--main); */\n\t\t\t}\n\t\t}\n\n\t}\n\n\t[apxutechtop_samosbor_map_block_row] {\n\t\tdisplay: flex;\n\t\tgap: 10px;\n\n\t\t&>* {\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tbackground-color: unset !important;\n\t\t\tposition: relative;\n\n\t\t\t&::before {\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tcontent: \"\";\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tposition: absolute;\n\t\t\t\t/* background-color: var(--main); */\n\t\t\t}\n\t\t}\n\t}\n\n\t[apxutechtop_samosbor_map_block_left_flight] {\n\t\t[mol_icon] {\n\t\t\twidth: var(--duo-icon-size);\n\t\t\theight: var(--duo-icon-size);\n\n\t\t\t&:only-child {\n\t\t\t\twidth: var(--solo-icon-size);\n\t\t\t\theight: var(--solo-icon-size);\n\t\t\t}\n\n\t\t\tfill: white;\n\t\t}\n\t}\n\n\t[apxutechtop_samosbor_map_block_name_part] {\n\t\tpadding-top: 50px;\n\t\tpadding-right: 11px;\n\t\tpadding-bottom: 50px;\n\t\tpadding-left: 11px;\n\t\tgap: 15px;\n\t\tflex-direction: column;\n\t\tflex-wrap: nowrap;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\n\t\t[apxutechtop_samosbor_map_block_blockname] {\n\t\t\tcolor: white;\n\t\t\tfont-family: \"Roboto\";\n\t\t\tfont-weight: 700;\n\t\t\tfont-size: 36px;\n\t\t\tline-height: 100%;\n\t\t\tletter-spacing: 0;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_currentfloor] {\n\t\t\tcolor: white;\n\t\t\tfont-family: \"Roboto\";\n\t\t\tfont-weight: 700;\n\t\t\tfont-size: 28px;\n\t\t\tline-height: 100%;\n\t\t\tletter-spacing: 0;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t&>* {\n\t\t\t/* height: 50%; */\n\t\t\twidth: 100%;\n\t\t\ttext-align: center;\n\t\t\tvertical-align: middle;\n\t\t\tline-height: 100%;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t}\n\t}\n\n\t[apxutechtop_samosbor_map_block_info_part] {\n\t\tpadding-top: 50px;\n\t\tpadding-right: 11px;\n\t\tpadding-bottom: 50px;\n\t\tpadding-left: 11px;\n\t\tgap: 15px;\n\t\tflex-direction: column;\n\t\tflex-wrap: nowrap;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\n\t\t&>* {\n\t\t\tgap: 10px;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\twidth: 100%;\n\t\t\ttext-align: center;\n\t\t\tvertical-align: middle;\n\t\t\tline-height: 100%;\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_gen_icon] {\n\t\t\twidth: 28px;\n\t\t\theight: 36px;\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_generator_floor] {\n\t\t\tz-index: 1000;\n\t\t\tcolor: white;\n\t\t\tfont-family: \"Roboto\";\n\t\t\tfont-weight: 700;\n\t\t\tfont-size: 28px;\n\t\t\tline-height: 100%;\n\t\t\tletter-spacing: 0;\n\t\t\ttext-align: center;\n\t\t\talign-items: center;\n\t\t}\n\t}\n\n\t&[direction=up],\n\t&[direction=down] {\n\t\t[apxutechtop_samosbor_map_block_row] {\n\t\t\twidth: 100%;\n\t\t\theight: var(--part-width);\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_content] {\n\t\t\twidth: var(--width);\n\t\t\theight: var(--height);\n\n\n\n\t\t\t--stroke-length-vertical: var(--stroke-length-left);\n\t\t\t/* Длина штриха ВЕРТИКАЛЬНЫХ линий */\n\t\t\t--empty-length-vertical: var(--empty-length-left);\n\t\t\t/* Длина пропуска ВЕРТИКАЛЬНЫХ линий */\n\t\t\t--stroke-length-horizontal: var(--stroke-length-top);\n\t\t\t/* Длина штриха ГОРИЗОНТАЛЬНЫХ линий */\n\t\t\t--empty-length-horizontal: var(--empty-length-top);\n\t\t\t/* Длина пропуска ГОРИЗОНТАЛЬНЫХ линий */\n\n\t\t}\n\n\t\t;\n\n\t\t[apxutechtop_samosbor_map_block_hallway] {\n\t\t\twidth: 100%;\n\t\t\theight: var(--passage-width);\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_passage] {\n\t\t\twidth: var(--passage-width);\n\t\t\theight: var(--part-width);\n\n\t\t\t&[type=normal],\n\t\t\t&[type=stairs_up],\n\t\t\t&[type=stairs_down] {\n\t\t\t\t&::before {\n\t\t\t\t\theight: calc(var(--part-width) + 25px);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&[type=noway] {\n\t\t\t\t&::before {\n\t\t\t\t\twidth: calc(var(--passage-width) + 25px);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_middle_flight] {\n\t\t\twidth: var(--passage-width);\n\t\t\theight: var(--part-width);\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_middle_row] {\n\t\t\t[apxutechtop_samosbor_map_block_passage] {\n\t\t\t\twidth: var(--part-width);\n\t\t\t\theight: var(--passage-width);\n\t\t\t}\n\n\t\t\t[apxutechtop_samosbor_map_block_left_hallway],\n\t\t\t[apxutechtop_samosbor_map_block_right_hallway] {\n\t\t\t\twidth: calc((100% - 2 * var(--part-width)) / 2);\n\t\t\t}\n\t\t}\n\t}\n\n\t;\n\n\t&[direction=left],\n\t&[direction=right] {\n\t\t[apxutechtop_samosbor_map_block_row] {\n\t\t\twidth: var(--part-width);\n\t\t\theight: 100%;\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_content] {\n\t\t\twidth: var(--height);\n\t\t\theight: var(--width);\n\n\t\t\t--stroke-length-vertical: var(--stroke-length-top);\n\t\t\t/* Длина штриха ВЕРТИКАЛЬНЫХ линий */\n\t\t\t--empty-length-vertical: var(--empty-length-top);\n\t\t\t/* Длина пропуска ВЕРТИКАЛЬНЫХ линий */\n\t\t\t--stroke-length-horizontal: var(--stroke-length-left);\n\t\t\t/* Длина штриха ГОРИЗОНТАЛЬНЫХ линий */\n\t\t\t--empty-length-horizontal: var(--empty-length-left);\n\t\t\t/* Длина пропуска ГОРИЗОНТАЛЬНЫХ линий */\n\t\t}\n\n\t\t;\n\n\t\t[apxutechtop_samosbor_map_block_hallway] {\n\t\t\twidth: var(--passage-width);\n\t\t\theight: 100%;\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_passage] {\n\t\t\twidth: var(--part-width);\n\t\t\theight: var(--passage-width);\n\n\t\t\t&[type=normal],\n\t\t\t&[type=stairs_up],\n\t\t\t&[type=stairs_down] {\n\t\t\t\t&::before {\n\t\t\t\t\twidth: calc(var(--part-width) + 25px);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&[type=noway] {\n\t\t\t\t&::before {\n\t\t\t\t\theight: calc(var(--passage-width) + 25px);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_middle_flight] {\n\t\t\theight: var(--passage-width);\n\t\t\twidth: var(--part-width);\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_middle_row] {\n\t\t\t[apxutechtop_samosbor_map_block_passage] {\n\t\t\t\theight: var(--part-width);\n\t\t\t\twidth: var(--passage-width);\n\t\t\t}\n\n\t\t\t[apxutechtop_samosbor_map_block_left_hallway],\n\t\t\t[apxutechtop_samosbor_map_block_right_hallway] {\n\t\t\t\theight: calc((100% - 2 * var(--part-width)) / 2);\n\t\t\t}\n\t\t}\n\t}\n\n\t&[direction=up] {\n\t\t[apxutechtop_samosbor_map_block_content] {\n\t\t\tflex-direction: column;\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_row] {\n\t\t\tflex-direction: row;\n\t\t\t/* left: 0px;\n\t\t\ttop: 0px; */\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_passage] {\n\t\t\t&[left] {\n\t\t\t\t&::before {\n\t\t\t\t\tleft: 0px;\n\t\t\t\t}\n\n\t\t\t\t[apxutechtop_samosbor_map_block_passage_interfloor] {\n\t\t\t\t\tflex-direction: row;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&[right] {\n\t\t\t\t&::before {\n\t\t\t\t\tright: 0px;\n\t\t\t\t}\n\n\t\t\t\t[apxutechtop_samosbor_map_block_passage_interfloor] {\n\t\t\t\t\tflex-direction: row-reverse;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&[up] {\n\t\t\t\t&::before {\n\t\t\t\t\ttop: 0px;\n\t\t\t\t}\n\n\t\t\t\t[apxutechtop_samosbor_map_block_passage_interfloor] {\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&[down] {\n\t\t\t\t&::before {\n\t\t\t\t\tbottom: 0px;\n\t\t\t\t}\n\n\t\t\t\t[apxutechtop_samosbor_map_block_passage_interfloor] {\n\t\t\t\t\tflex-direction: column-reverse;\n\t\t\t\t}\n\t\t\t}\n\n\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_name_part] {\n\t\t\tleft: var(--pos);\n\t\t\ttop: 0px;\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_middle_row] {\n\t\t\tflex-direction: row;\n\t\t}\n\t}\n\n\t&[direction=down] {\n\t\t[apxutechtop_samosbor_map_block_content] {\n\t\t\tflex-direction: column-reverse;\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_row] {\n\t\t\tflex-direction: row-reverse;\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_passage] {\n\t\t\t&[left] {\n\t\t\t\t&::before {\n\t\t\t\t\tright: 0px;\n\t\t\t\t}\n\n\t\t\t\t[apxutechtop_samosbor_map_block_passage_interfloor] {\n\t\t\t\t\tflex-direction: row-reverse;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&[right] {\n\t\t\t\t&::before {\n\t\t\t\t\tleft: 0px;\n\t\t\t\t}\n\n\t\t\t\t[apxutechtop_samosbor_map_block_passage_interfloor] {\n\t\t\t\t\tflex-direction: row;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&[up] {\n\t\t\t\t&::before {\n\t\t\t\t\tbottom: 0px;\n\t\t\t\t}\n\n\t\t\t\t[apxutechtop_samosbor_map_block_passage_interfloor] {\n\t\t\t\t\tflex-direction: column-reverse;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&[down] {\n\t\t\t\t&::before {\n\t\t\t\t\ttop: 0px;\n\t\t\t\t}\n\n\t\t\t\t[apxutechtop_samosbor_map_block_passage_interfloor] {\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_middle_row] {\n\t\t\tflex-direction: row-reverse;\n\t\t}\n\t}\n\n\t&[direction=left] {\n\t\t[apxutechtop_samosbor_map_block_content] {\n\t\t\tflex-direction: row;\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_row] {\n\t\t\tflex-direction: column-reverse;\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_passage] {\n\t\t\t&[left] {\n\t\t\t\t&::before {\n\t\t\t\t\tbottom: 0px;\n\t\t\t\t}\n\n\t\t\t\t[apxutechtop_samosbor_map_block_passage_interfloor] {\n\t\t\t\t\tflex-direction: column-reverse;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&[right] {\n\t\t\t\t&::before {\n\t\t\t\t\ttop: 0px;\n\t\t\t\t}\n\n\t\t\t\t[apxutechtop_samosbor_map_block_passage_interfloor] {\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&[up] {\n\t\t\t\t&::before {\n\t\t\t\t\tleft: 0px;\n\t\t\t\t}\n\n\t\t\t\t[apxutechtop_samosbor_map_block_passage_interfloor] {\n\t\t\t\t\tflex-direction: row;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&[down] {\n\t\t\t\t&::before {\n\t\t\t\t\tright: 0px;\n\t\t\t\t}\n\n\t\t\t\t[apxutechtop_samosbor_map_block_passage_interfloor] {\n\t\t\t\t\tflex-direction: row-reverse;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_middle_row] {\n\t\t\tflex-direction: column-reverse;\n\t\t}\n\t}\n\n\t&[direction=right] {\n\t\t[apxutechtop_samosbor_map_block_content] {\n\t\t\tflex-direction: row-reverse;\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_row] {\n\t\t\tflex-direction: column;\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_passage] {\n\t\t\t&[left] {\n\t\t\t\t&::before {\n\t\t\t\t\ttop: 0px;\n\t\t\t\t}\n\n\t\t\t\t[apxutechtop_samosbor_map_block_passage_interfloor] {\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&[right] {\n\t\t\t\t&::before {\n\t\t\t\t\tbottom: 0px;\n\t\t\t\t}\n\n\t\t\t\t[apxutechtop_samosbor_map_block_passage_interfloor] {\n\t\t\t\t\tflex-direction: column-reverse;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&[up] {\n\t\t\t\t&::before {\n\t\t\t\t\tright: 0px;\n\t\t\t\t}\n\n\t\t\t\t[apxutechtop_samosbor_map_block_passage_interfloor] {\n\t\t\t\t\tflex-direction: row-reverse;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&[down] {\n\t\t\t\t&::before {\n\t\t\t\t\tleft: 0px;\n\t\t\t\t}\n\n\t\t\t\t[apxutechtop_samosbor_map_block_passage_interfloor] {\n\t\t\t\t\tflex-direction: row;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t[apxutechtop_samosbor_map_block_passage_interfloor] {\n\t\t\t\tflex-direction: inherit;\n\t\t\t}\n\t\t}\n\n\t\t[apxutechtop_samosbor_map_block_middle_row] {\n\t\t\tflex-direction: column;\n\t\t}\n\t}\n}\n");
})($ || ($ = {}));

;
	($.$apxutechtop_samosbor_map_cluster) = class $apxutechtop_samosbor_map_cluster extends ($.$mol_view) {
		pos_x(next){
			if(next !== undefined) return next;
			return 0;
		}
		pos_y(next){
			if(next !== undefined) return next;
			return 0;
		}
		floors(next){
			if(next !== undefined) return next;
			return [];
		}
		style(){
			return {"left": (this.pos_x()), "top": (this.pos_y())};
		}
		sub(){
			return [...(this.floors())];
		}
	};
	($mol_mem(($.$apxutechtop_samosbor_map_cluster.prototype), "pos_x"));
	($mol_mem(($.$apxutechtop_samosbor_map_cluster.prototype), "pos_y"));
	($mol_mem(($.$apxutechtop_samosbor_map_cluster.prototype), "floors"));
	($.$apxutechtop_samosbor_map_app_floor) = class $apxutechtop_samosbor_map_app_floor extends ($.$mol_view) {
		floor_direction(){
			return "up";
		}
		pos_x(next){
			if(next !== undefined) return next;
			return 0;
		}
		pos_y(next){
			if(next !== undefined) return next;
			return 0;
		}
		test(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		lines(){
			return [(this.test())];
		}
		line(){
			return (this.lines());
		}
		block_name(){
			return "!-00";
		}
		attr(){
			return {"direction": (this.floor_direction())};
		}
		style(){
			return {"left": (this.pos_x()), "top": (this.pos_y())};
		}
		sub(){
			return [...(this.line()), (this.block_name())];
		}
	};
	($mol_mem(($.$apxutechtop_samosbor_map_app_floor.prototype), "pos_x"));
	($mol_mem(($.$apxutechtop_samosbor_map_app_floor.prototype), "pos_y"));
	($mol_mem(($.$apxutechtop_samosbor_map_app_floor.prototype), "test"));
	($.$apxutechtop_samosbor_map_app) = class $apxutechtop_samosbor_map_app extends ($.$mol_view) {
		cluster_pos_x(id, next){
			if(next !== undefined) return next;
			return 0;
		}
		cluster_pos_y(id, next){
			if(next !== undefined) return next;
			return 0;
		}
		event_key(id, next){
			if(next !== undefined) return next;
			return null;
		}
		block(id){
			return null;
		}
		current_layer(next){
			if(next !== undefined) return next;
			return 0;
		}
		block_clicked(id, next){
			if(next !== undefined) return next;
			return null;
		}
		connection_selected(id, next){
			if(next !== undefined) return next;
			return null;
		}
		is_create_mode(){
			return false;
		}
		is_configure_mode(){
			return false;
		}
		is_connect_mode(){
			return false;
		}
		transition_direction(id){
			return "vertical";
		}
		transition_left(id){
			return 0;
		}
		transition_top(id){
			return 0;
		}
		control_type(next){
			if(next !== undefined) return next;
			return "";
		}
		Control_Switch(){
			const obj = new this.$.$mol_switch();
			(obj.value) = (next) => ((this.control_type(next)));
			(obj.options) = () => ({
				"create": "Create Block", 
				"connect": "Connect Blocks", 
				"configure": "Configure Block"
			});
			return obj;
		}
		Control_Panel(){
			const obj = new this.$.$mol_card();
			(obj.sub) = () => ([(this.Control_Switch())]);
			return obj;
		}
		selected_block_name(next){
			if(next !== undefined) return next;
			return "";
		}
		name_input(){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.selected_block_name(next)));
			(obj.hint) = () => ("Block name");
			return obj;
		}
		name_setting(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.name_input())]);
			return obj;
		}
		block_type_value(next){
			if(next !== undefined) return next;
			return "residential";
		}
		block_type_switch(){
			const obj = new this.$.$mol_switch();
			(obj.value) = (next) => ((this.block_type_value(next)));
			(obj.options) = () => ({
				"residential": "Жилой", 
				"destroyed": "Разрушенный", 
				"frozen": "Замороженный", 
				"abandoned": "Заброшенный", 
				"infected": "Зараженный"
			});
			return obj;
		}
		type_setting(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Тип блока");
			(obj.content) = () => ([(this.block_type_switch())]);
			return obj;
		}
		gen_floor(next){
			if(next !== undefined) return next;
			return 0;
		}
		gen_setting_number(){
			const obj = new this.$.$mol_number();
			(obj.value) = (next) => ((this.gen_floor(next)));
			return obj;
		}
		gen_floor_setting(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Этаж генератора");
			(obj.content) = () => ([(this.gen_setting_number())]);
			return obj;
		}
		min_floor(next){
			if(next !== undefined) return next;
			return 0;
		}
		min_setting_number(){
			const obj = new this.$.$mol_number();
			(obj.value) = (next) => ((this.min_floor(next)));
			return obj;
		}
		min_floor_setting(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Min floor");
			(obj.content) = () => ([(this.min_setting_number())]);
			return obj;
		}
		max_floor(next){
			if(next !== undefined) return next;
			return 0;
		}
		max_setting_number(){
			const obj = new this.$.$mol_number();
			(obj.value) = (next) => ((this.max_floor(next)));
			return obj;
		}
		max_floor_setting(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Max floor");
			(obj.content) = () => ([(this.max_setting_number())]);
			return obj;
		}
		layer_value(next){
			if(next !== undefined) return next;
			return 0;
		}
		layer_setting_number(){
			const obj = new this.$.$mol_number();
			(obj.value) = (next) => ((this.layer_value(next)));
			return obj;
		}
		layer_setting(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Zero floor height");
			(obj.content) = () => ([(this.layer_setting_number())]);
			return obj;
		}
		pos_x_value(next){
			if(next !== undefined) return next;
			return 0;
		}
		pos_x_setting_number(){
			const obj = new this.$.$mol_number();
			(obj.value) = (next) => ((this.pos_x_value(next)));
			return obj;
		}
		pos_x_setting(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Position X");
			(obj.content) = () => ([(this.pos_x_setting_number())]);
			return obj;
		}
		pos_y_value(next){
			if(next !== undefined) return next;
			return 0;
		}
		pos_y_setting_number(){
			const obj = new this.$.$mol_number();
			(obj.value) = (next) => ((this.pos_y_value(next)));
			return obj;
		}
		pos_y_setting(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Position Y");
			(obj.content) = () => ([(this.pos_y_setting_number())]);
			return obj;
		}
		direction_value(next){
			if(next !== undefined) return next;
			return "up";
		}
		direction_switch(){
			const obj = new this.$.$mol_switch();
			(obj.value) = (next) => ((this.direction_value(next)));
			(obj.options) = () => ({
				"up": "Up", 
				"right": "Right", 
				"down": "Down", 
				"left": "Left"
			});
			return obj;
		}
		direction_setting(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Direction");
			(obj.content) = () => ([(this.direction_switch())]);
			return obj;
		}
		up_flight_value(next){
			if(next !== undefined) return next;
			return false;
		}
		up_flight_setting(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ("Верхний пролет по середине");
			(obj.checked) = (next) => ((this.up_flight_value(next)));
			return obj;
		}
		down_flight_value(next){
			if(next !== undefined) return next;
			return false;
		}
		down_flight_setting(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ("Нижний пролет по середине");
			(obj.checked) = (next) => ((this.down_flight_value(next)));
			return obj;
		}
		delete_block(next){
			if(next !== undefined) return next;
			return null;
		}
		delete_block_button(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ("Delete block");
			(obj.click) = (next) => ((this.delete_block(next)));
			return obj;
		}
		Block_Form(){
			const obj = new this.$.$mol_card();
			(obj.sub) = () => ([
				(this.name_setting()), 
				(this.type_setting()), 
				(this.gen_floor_setting()), 
				(this.min_floor_setting()), 
				(this.max_floor_setting()), 
				(this.layer_setting()), 
				(this.pos_x_setting()), 
				(this.pos_y_setting()), 
				(this.direction_setting()), 
				(this.up_flight_setting()), 
				(this.down_flight_setting()), 
				(this.delete_block_button())
			]);
			return obj;
		}
		Layer_Bar(){
			const obj = new this.$.$mol_number();
			(obj.value) = (next) => ((this.current_layer(next)));
			return obj;
		}
		Searcher(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		blocks(){
			return [];
		}
		Area(){
			const obj = new this.$.$apxutechtop_samosbor_map_area();
			(obj.style) = () => ({"width": "100%", "height": "100%"});
			(obj.items) = () => ([...(this.blocks())]);
			return obj;
		}
		Canvas(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Area())]);
			return obj;
		}
		Cluster(id){
			const obj = new this.$.$apxutechtop_samosbor_map_cluster();
			(obj.pos_x) = () => ((this.cluster_pos_x(id)));
			(obj.pos_y) = () => ((this.cluster_pos_y(id)));
			return obj;
		}
		floor_lines(id, next){
			if(next !== undefined) return next;
			return [];
		}
		Line(id){
			const obj = new this.$.$mol_view();
			(obj.event) = () => ({"mousedown": (next) => (this.event_key(id, next))});
			return obj;
		}
		Block(id){
			const obj = new this.$.$apxutechtop_samosbor_map_block();
			(obj.block_data) = (next) => ((this.block(id)));
			(obj.current_layer) = (next) => ((this.current_layer()));
			(obj.onclick) = (next) => ((this.block_clicked(id, next)));
			(obj.on_connection_select) = (next) => ((this.connection_selected(id, next)));
			(obj.show_connections) = () => (true);
			(obj.create_mode) = (next) => ((this.is_create_mode()));
			(obj.edit_mode) = (next) => ((this.is_configure_mode()));
			(obj.connect_mode) = (next) => ((this.is_connect_mode()));
			return obj;
		}
		Transition(id){
			const obj = new this.$.$mol_view();
			(obj.attr) = () => ({"direction": (this.transition_direction(id))});
			(obj.style) = () => ({"left": (this.transition_left(id)), "top": (this.transition_top(id))});
			return obj;
		}
		sub(){
			return [
				(this.Control_Panel()), 
				(this.Block_Form()), 
				(this.Layer_Bar()), 
				(this.Searcher()), 
				(this.Canvas())
			];
		}
	};
	($mol_mem_key(($.$apxutechtop_samosbor_map_app.prototype), "cluster_pos_x"));
	($mol_mem_key(($.$apxutechtop_samosbor_map_app.prototype), "cluster_pos_y"));
	($mol_mem_key(($.$apxutechtop_samosbor_map_app.prototype), "event_key"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "current_layer"));
	($mol_mem_key(($.$apxutechtop_samosbor_map_app.prototype), "block_clicked"));
	($mol_mem_key(($.$apxutechtop_samosbor_map_app.prototype), "connection_selected"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "control_type"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "Control_Switch"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "Control_Panel"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "selected_block_name"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "name_input"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "name_setting"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "block_type_value"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "block_type_switch"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "type_setting"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "gen_floor"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "gen_setting_number"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "gen_floor_setting"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "min_floor"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "min_setting_number"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "min_floor_setting"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "max_floor"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "max_setting_number"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "max_floor_setting"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "layer_value"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "layer_setting_number"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "layer_setting"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "pos_x_value"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "pos_x_setting_number"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "pos_x_setting"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "pos_y_value"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "pos_y_setting_number"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "pos_y_setting"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "direction_value"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "direction_switch"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "direction_setting"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "up_flight_value"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "up_flight_setting"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "down_flight_value"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "down_flight_setting"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "delete_block"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "delete_block_button"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "Block_Form"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "Layer_Bar"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "Searcher"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "Area"));
	($mol_mem(($.$apxutechtop_samosbor_map_app.prototype), "Canvas"));
	($mol_mem_key(($.$apxutechtop_samosbor_map_app.prototype), "Cluster"));
	($mol_mem_key(($.$apxutechtop_samosbor_map_app.prototype), "floor_lines"));
	($mol_mem_key(($.$apxutechtop_samosbor_map_app.prototype), "Line"));
	($mol_mem_key(($.$apxutechtop_samosbor_map_app.prototype), "Block"));
	($mol_mem_key(($.$apxutechtop_samosbor_map_app.prototype), "Transition"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const TransitionPositions = ["up_left", "up_right", "right", "down_right", "down_left", "left"];
        const block_full_cell = 380;
        class Gigacluster extends $hyoo_crus_home.with({
            Blocks: $hyoo_crus_list_ref_to(() => $apxutechtop_samosbor_map_block_data),
        }) {
            static global() {
                const storage = $hyoo_crus_glob.Node($hyoo_crus_ref("6H1qbbnb_3nEGhBiI"), Gigacluster);
                return storage;
            }
            static create_block() {
                const block = this.global().Blocks(null)?.make({ '': $hyoo_crus_rank_post("just") });
                console.log("created", block);
                return block;
            }
            static delete_block(ref) {
                const block = $hyoo_crus_glob.Node(ref, $apxutechtop_samosbor_map_block_data);
                block.transitions()?.forEach((transition) => {
                    const connected_block_ref = transition.get_connected_block(ref);
                    if (!connected_block_ref)
                        return;
                    const connected_block = $hyoo_crus_glob.Node(connected_block_ref, $apxutechtop_samosbor_map_block_data);
                    connected_block.transitions()?.forEach((connected_transition) => {
                        if (connected_transition.get_connected_block(connected_block_ref) === ref) {
                            connected_block.Transitions(null)?.cut(connected_transition.ref());
                        }
                    });
                });
                this.global().Blocks(null)?.cut(ref);
            }
            static delete_all_blocks() {
                this.blocks()?.map((node) => this.delete_block(node.ref()));
            }
            static blocks() {
                return this.global().Blocks(null)?.remote_list();
            }
            static block(block_name) {
                return this.global().Blocks(null)?.remote_list().find((block) => block.name() === block_name);
            }
            static transition(block_name, floor, position) {
                return this.block(block_name)?.transitions()?.find((trans) => {
                    const check = (port) => {
                        if (!port)
                            return;
                        const block_ref = port.Block(null)?.val();
                        if (!block_ref)
                            return;
                        const name = $hyoo_crus_glob.Node(block_ref, $apxutechtop_samosbor_map_block_data).name();
                        if (name === block_name && Number(port.Floor(null)?.val()) === floor && port.Position(null)?.val() === position) {
                            return true;
                        }
                    };
                    if (check(trans.From(null)) || check(trans.To(null))) {
                        return true;
                    }
                });
            }
        }
        __decorate([
            $mol_mem
        ], Gigacluster, "global", null);
        __decorate([
            $mol_action
        ], Gigacluster, "create_block", null);
        __decorate([
            $mol_action
        ], Gigacluster, "delete_block", null);
        __decorate([
            $mol_action
        ], Gigacluster, "delete_all_blocks", null);
        __decorate([
            $mol_mem
        ], Gigacluster, "blocks", null);
        __decorate([
            $mol_mem_key
        ], Gigacluster, "block", null);
        $$.Gigacluster = Gigacluster;
        class $apxutechtop_samosbor_map_storage extends $mol_object {
            static data(next) {
                const data = {
                    blocks: [{
                            name: "Л-96",
                            direction: "up",
                        }, {
                            name: "Л-81",
                            direction: "right",
                            pos_x: 2,
                        }, {
                            name: "Ф-76",
                            direction: "left",
                            pos_x: -1,
                        }, {
                            name: "А-21",
                            direction: "up",
                            pos_x: -1,
                            pos_y: -1,
                            layer: 3,
                            min_floor: -4,
                            max_floor: 6,
                        }],
                    transitions: [
                        {
                            from: {
                                block_name: "Л-96",
                                floor: 1,
                                position: "right",
                            },
                            to: {
                                block_name: "Л-81",
                                floor: 0,
                                position: "down_left",
                            }
                        },
                        {
                            from: {
                                block_name: "Л-96",
                                floor: 2,
                                position: "left"
                            },
                            to: {
                                block_name: "Ф-76",
                                floor: 0,
                                position: "down_right",
                            }
                        },
                        {
                            from: {
                                block_name: "Л-96",
                                floor: 1,
                                position: "up_left"
                            },
                            to: {
                                block_name: "А-21",
                                floor: 0,
                                position: "down_right"
                            }
                        }
                    ],
                };
                return next ?? data;
            }
            static blocks(next) {
                const blocks = next ?? this.data().blocks;
                this.data({ blocks, transitions: this.transitions() });
                return blocks;
            }
            static block(block_name, next) { }
            static block_direction(block_name) { }
            static transitions(next) {
                const transitions = next ?? this.data().transitions;
                this.data({ blocks: this.blocks(), transitions: transitions });
                return transitions;
            }
        }
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_storage, "data", null);
        $$.$apxutechtop_samosbor_map_storage = $apxutechtop_samosbor_map_storage;
        class $apxutechtop_samosbor_map_app extends $.$apxutechtop_samosbor_map_app {
            map_land() {
                return Gigacluster.global().land();
            }
            static blocks_data(next) {
                console.log("blocks_data");
                return next ? $apxutechtop_samosbor_map_storage.data({ blocks: next, transitions: $apxutechtop_samosbor_map_storage.data().transitions }).blocks : $apxutechtop_samosbor_map_storage.data().blocks;
            }
            selected_block(next) {
                return next;
            }
            block_clicked(ref, event) {
                console.log(ref, event);
                this.selected_block()?.selected(false);
                if (this.selected_block() == this.Block(ref)) {
                    this.selected_block(null);
                }
                else {
                    this.selected_block(this.Block(ref));
                    this.selected_block()?.selected(true);
                }
            }
            gen_floor(next) {
                return this.selected_block()?.generator_floor_value(next) ?? 0;
            }
            min_floor(next) {
                return this.selected_block()?.min_floor(next) ?? 0;
            }
            max_floor(next) {
                return this.selected_block()?.max_floor(next) ?? 0;
            }
            layer_value(next) {
                return this.selected_block()?.block_layer(next) ?? 0;
            }
            pos_x_value(next) {
                return this.selected_block()?.pos_x(next) ?? 0;
            }
            pos_y_value(next) {
                return this.selected_block()?.pos_y(next) ?? 0;
            }
            direction_value(next) {
                if (next?.length == 0) {
                    return this.selected_block()?.block_direction() ?? "";
                }
                return this.selected_block()?.block_direction(next) ?? "";
            }
            block_type_value(next) {
                if (next?.length == 0) {
                    return this.selected_block()?.block_type() ?? "";
                }
                return this.selected_block()?.block_type(next) ?? "";
            }
            up_flight_value(next) {
                return this.selected_block()?.is_up_flight(next) ?? false;
            }
            down_flight_value(next) {
                return this.selected_block()?.is_down_flight(next) ?? false;
            }
            delete_block() {
                Gigacluster.delete_block(this.selected_block()?.block_data().ref());
            }
            selected_block_name(next) {
                return this.selected_block()?.block_name(next) ?? "";
            }
            static block(name, next) {
                return Gigacluster.block(name);
                return next ?? this.blocks_data().find((block) => block.name === name);
            }
            block(ref, next) {
                const block_node = $hyoo_crus_glob.Node(ref, $apxutechtop_samosbor_map_block_data);
                console.log(block_node);
                return block_node;
            }
            block_transitions(block_name) {
                return $apxutechtop_samosbor_map_app.all_transitions().filter(({ from, to }) => {
                    const check = (t) => {
                        return t.block_name === block_name;
                    };
                    return check(from) || check(to);
                }).map(({ from, to }) => from.block_name === block_name ? { from, to } : { from: to, to: from });
            }
            static all_transitions(next) {
                console.log(next);
                return $apxutechtop_samosbor_map_storage.transitions(next);
            }
            static transition(trans_id, next) {
                const { block_name, floor_num, position } = this.parseTrans(trans_id);
                console.log(this.all_transitions());
                const transition = this.all_transitions().find(({ from, to }) => {
                    const check = (t) => {
                        console.log(t);
                        return t.block_name === block_name && t.floor === floor_num && t.position === position;
                    };
                    return check(from) || check(to);
                });
                console.log(trans_id, transition);
                return next ?? transition;
            }
            transitions() {
                const transitions = [];
                for (const block of Gigacluster.blocks() ?? []) {
                    for (const transition of block.transitions() ?? []) {
                        const trans_view = this.Transition(transition.ref());
                        transitions.push(trans_view);
                    }
                }
                return transitions;
            }
            transition_direction(ref) {
                const node = $hyoo_crus_glob.Node(ref, TransitionData);
                const block_ref = node.From(null)?.Block(null)?.val();
                const block = this.block(block_ref);
                const absolute_direction = $apxutechtop_samosbor_map_app.absolute_direction(block.direction(), node.From(null)?.Position(null)?.val());
                if (absolute_direction === "down" || absolute_direction === "up") {
                    return "horizontal";
                }
                else {
                    return "vertical";
                }
            }
            transition_left(ref) {
                const node = $hyoo_crus_glob.Node(ref, TransitionData);
                const block_ref = node.From(null)?.Block(null)?.val();
                const block = this.block(block_ref);
                const offset = $apxutechtop_samosbor_map_app.getOffset(node.From(null)?.Position(null)?.val(), block.direction());
                const left = block.pos_x() * block_full_cell + offset.x;
                return left;
            }
            transition_top(ref) {
                const node = $hyoo_crus_glob.Node(ref, TransitionData);
                const block_ref = node.From(null)?.Block(null)?.val();
                const block = this.block(block_ref);
                const offset = $apxutechtop_samosbor_map_app.getOffset(node.From(null)?.Position(null)?.val(), block.direction());
                const top = block.pos_y() * block_full_cell + offset.y;
                return top;
            }
            static next_direction(dir) {
                const directions = ['up', 'right', 'down', 'left'];
                const currentIndex = directions.indexOf(dir);
                const nextIndex = (currentIndex + 1) % directions.length;
                return directions[nextIndex];
            }
            static prev_direction(dir) {
                const directions = ['up', 'right', 'down', 'left'];
                const currentIndex = directions.indexOf(dir);
                const nextIndex = (currentIndex - 1 + directions.length) % directions.length;
                return directions[nextIndex];
            }
            static next_position(pos) {
                const current_index = TransitionPositions.indexOf(pos);
                const next_index = (current_index + 1) % TransitionPositions.length;
                return TransitionPositions[next_index];
            }
            show_connections() {
                return this.control_type() === "create" || this.control_type() === "connect";
            }
            control_type(next) {
                return next ?? "";
            }
            is_create_mode() {
                return this.control_type() === "create";
            }
            is_configure_mode() {
                return this.control_type() === "configure";
            }
            is_connect_mode() {
                return this.control_type() === "connect";
            }
            static rotate_block(block_name) {
                console.log("rotate");
                const block_data = this.block(block_name);
                const new_direction = this.prev_direction(this.direction(block_name));
                return new_direction;
            }
            static rotate_transition(transition) {
                const rotate_map = {
                    up_right: true,
                    right: true,
                    down_left: true,
                    left: true,
                };
                const new_direction = rotate_map[transition.to.position] ? this.rotate_block(transition.to.block_name) : this.direction(transition.to.block_name);
                const rotate_offset = {
                    up_left: { x: -1, y: 0 },
                    up_middle: { x: 1, y: 0 },
                    up_right: { x: 1, y: 0 },
                    right: { x: 0, y: 0 },
                    down_right: { x: -1, y: 0 },
                    down_middle: { x: 1, y: 0 },
                    down_left: { x: 1, y: 0 },
                    left: { x: 0, y: 0 },
                };
                const rotated_offset = this.rotateOffset(rotate_offset[transition.to.position], this.direction(transition.to.block_name));
                const block = this.block(transition.to.block_name);
                transition.to.position = this.next_position(transition.to.position);
                return { transition, direction: new_direction, offset: rotated_offset };
            }
            parseFloor(floorId) {
                const regex = /^([^_]+)_(\d+)$/;
                const match = floorId.match(regex);
                if (match) {
                    const [_, block_name, floor_num_str] = match;
                    const floor_num = parseInt(floor_num_str, 10);
                    return { block_name, floor_num };
                }
                return null;
            }
            static parseTrans(transId) {
                console.log(transId);
                const regex = /^([^_]+)_(-?\d+)_(.+)$/;
                const match = transId.match(regex);
                console.log(match);
                if (match) {
                    const [_, block_name, floor_num_str, position] = match;
                    const floor_num = parseInt(floor_num_str, 10);
                    return { block_name, floor_num, position: position };
                }
                return null;
            }
            block_name(floorId) {
                return this.parseFloor(floorId)?.block_name;
            }
            floor_num(floorId) {
                return this.parseFloor(floorId)?.floor_num;
            }
            static direction(block_name, next) {
                console.log(block_name);
                return "up";
            }
            floor_direction(floorId) {
                return $apxutechtop_samosbor_map_app.direction(this.block_name(floorId));
            }
            floor_cluster(floorId, cluster) {
            }
            static getOffset(pos, dir) {
                const w = 760;
                const h = 380;
                const slotOffset = () => {
                    const pos_map = {
                        up_left: { x: w / 4, y: 0 },
                        up_middle: { x: w / 2, y: 0 },
                        up_right: { x: w - w / 4, y: 0 },
                        right: { x: w, y: h / 2 },
                        down_right: { x: w - w / 4, y: h },
                        down_middle: { x: w / 2, y: h },
                        down_left: { x: w / 4, y: h },
                        left: { x: 0, y: h / 2 },
                    };
                    return pos_map[pos];
                };
                const rotateOffset = ({ x, y }, dir) => {
                    const angle = { up: 0, right: 90, down: 180, left: 270 }[dir];
                    const radians = angle / 180 * Math.PI;
                    const cosA = Math.cos(radians);
                    const sinA = Math.sin(radians);
                    return {
                        x: x * cosA - y * sinA,
                        y: x * sinA + y * cosA,
                    };
                };
                const dirOffset = (dir) => {
                    return { up: { x: 0, y: 0 }, right: { x: h, y: 0 }, down: { x: w, y: h }, left: { x: 0, y: w } }[dir];
                };
                const directionOffset = dirOffset(dir);
                const rotatedOffset = rotateOffset(slotOffset(), dir);
                return { x: rotatedOffset.x + directionOffset.x, y: rotatedOffset.y + directionOffset.y };
            }
            static rotateOffset({ x, y }, dir) {
                const angle = { up: 0, right: 90, down: 180, left: 270 }[dir];
                const radians = angle / 180 * Math.PI;
                const cosA = Math.cos(radians);
                const sinA = Math.sin(radians);
                return {
                    x: Math.round(x * cosA - y * sinA),
                    y: Math.round(x * sinA + y * cosA),
                };
            }
            static getPositionOffset(pos, dir) {
                const offsets = {
                    up_left: { x: 0, y: 0 },
                    up_middle: { x: 0.5, y: 0 },
                    up_right: { x: 1, y: 0 },
                    right: { x: 2, y: 0 },
                    down_right: { x: 1, y: 1 },
                    down_middle: { x: 0.5, y: 1 },
                    down_left: { x: 0, y: 1 },
                    left: { x: -1, y: 0 },
                };
                const dirOffset = (dir) => {
                    return { x: 0, y: 0 };
                    return { up: { x: 0, y: 0 }, right: { x: 1, y: 0 }, down: { x: 1, y: 1 }, left: { x: 0, y: 1 } }[dir];
                };
                const directionOffset = dirOffset(dir);
                const rotatedOffset = this.rotateOffset(offsets[pos], dir);
                return { x: rotatedOffset.x + directionOffset.x, y: rotatedOffset.y + directionOffset.y };
            }
            calculateOffset(transition, floor_direction) {
                const currentOffset = $apxutechtop_samosbor_map_app.getOffset(transition.from.position, floor_direction);
                const anotherOffset = $apxutechtop_samosbor_map_app.getOffset(transition.to.position, $apxutechtop_samosbor_map_app.direction(transition.to.block_name));
                return { x: currentOffset.x - anotherOffset.x, y: currentOffset.y - anotherOffset.y };
            }
            set_position(view, pos) {
                const prev = view.dom_node().getAttribute("style");
                view.style().top = `${pos.top}px`;
                view.style().left = pos.left + "px";
                view.dom_node().setAttribute("style", `${""} top: ${`${pos.top}px`}; left: ${`${pos.left}px`};`);
            }
            set_size(view, width, height) {
                const prev = view.dom_node().getAttribute("style");
                view.dom_node().setAttribute("style", `${prev} width: ${width}; height: ${height};`);
            }
            get_size(cluster) {
                return cluster.view_rect();
            }
            event_key(transId, event) {
                const { block_name, floor_num, position } = $apxutechtop_samosbor_map_app.parseTrans(transId);
                const floorId = this.get_floor_id(block_name, floor_num);
                const block = $apxutechtop_samosbor_map_app.block(block_name);
                if (!block) {
                    throw new Error(`Not find block: ${block_name}`);
                }
                const rotateBlock = ({ name, position, floor }, trans) => {
                    const block = $apxutechtop_samosbor_map_app.block(name);
                    console.log("rotating");
                    trans.position = TransitionPositions[(TransitionPositions.indexOf(trans.position) + 1) % (TransitionPositions.length - 1)];
                };
                let trans = $apxutechtop_samosbor_map_app.transition(transId);
                const index = $apxutechtop_samosbor_map_app.all_transitions().findIndex((t) => trans);
                console.log(transId, trans);
                if (trans) {
                    const all_transitions = $apxutechtop_samosbor_map_app.all_transitions();
                    console.log("before", all_transitions.map((v) => v.to.position));
                    const { transition: rotated_transition } = $apxutechtop_samosbor_map_app.rotate_transition(trans);
                    all_transitions[index] = rotated_transition;
                    console.log("after", all_transitions.map((v) => v.to.position));
                    $apxutechtop_samosbor_map_app.all_transitions(all_transitions);
                }
                else {
                    const new_block_name = `new-${Math.floor(Math.random() * 100)}`;
                    const new_transition = {
                        from: {
                            block_name,
                            floor: floor_num,
                            position: position
                        },
                        to: {
                            block_name: new_block_name,
                            position: "up_left",
                            floor: 0,
                        }
                    };
                    const new_block = {
                        name: new_block_name,
                        direction: $apxutechtop_samosbor_map_app.next_direction($apxutechtop_samosbor_map_app.next_direction($apxutechtop_samosbor_map_app.absolute_direction($apxutechtop_samosbor_map_app.direction(block_name), position))),
                    };
                    $apxutechtop_samosbor_map_app.all_transitions([...$apxutechtop_samosbor_map_app.all_transitions(), new_transition]);
                    console.log($apxutechtop_samosbor_map_app.blocks_data([...$apxutechtop_samosbor_map_app.blocks_data(), new_block]));
                }
                console.log(floorId, position, event);
            }
            floor_lines(floorId, next) {
                console.log("floor_lines");
                const lines = [];
                const padding = 25;
                const adjustments = {
                    up: { x: 0, y: padding },
                    down: { x: 0, y: -padding },
                    left: { x: padding, y: 0 },
                    right: { x: -padding, y: 0 },
                };
                for (const position of TransitionPositions) {
                    const lineOffset = $apxutechtop_samosbor_map_app.getOffset(position, this.floor_direction(floorId));
                    const line = this.Line(floorId + "_" + position);
                    const abs_dir = $apxutechtop_samosbor_map_app.absolute_direction($apxutechtop_samosbor_map_app.direction(this.block_name(floorId)), position);
                    const adjustment = adjustments[abs_dir] ?? { x: 0, y: 0 };
                    const adjustedOffset = {
                        x: lineOffset.x + adjustment.x,
                        y: lineOffset.y + adjustment.y
                    };
                    this.set_position(line, { left: adjustedOffset.x, top: adjustedOffset.y });
                    lines.push(line);
                }
                return lines;
            }
            get_floor_id(block_name, floor_num) {
                return `${block_name}_${floor_num}`;
            }
            static get_trans_id({ block_name = "", floor = 0, position = "" }) {
                return `${block_name}_${floor}_${position}`;
            }
            static absolute_direction(direction, position) {
                const dirMap = { up: 0, right: 1, down: 2, left: 3 };
                const posMap = {
                    "up_left": 0, "up_middle": 0, "up_right": 0, "right": 1,
                    "down_right": 2, "down_middle": 2, "down_left": 2, "left": 3
                };
                const directions = ["up", "right", "down", "left"];
                return directions[(posMap[position] + dirMap[direction]) % 4];
            }
            blocks() {
                const blocks = [];
                const block_nodes = Gigacluster.blocks();
                console.log(block_nodes);
                for (const block_data of block_nodes ?? []) {
                    const block_view = this.Block(block_data.land_ref());
                    blocks.push(block_view);
                }
                return blocks;
            }
        }
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "map_land", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "selected_block", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_app.prototype, "block_clicked", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "gen_floor", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "min_floor", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "max_floor", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "layer_value", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "pos_x_value", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "pos_y_value", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "direction_value", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "block_type_value", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "up_flight_value", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "down_flight_value", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_app.prototype, "delete_block", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "selected_block_name", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_app.prototype, "block", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_app.prototype, "block_transitions", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "transitions", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_app.prototype, "transition_direction", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_app.prototype, "transition_left", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_app.prototype, "transition_top", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "show_connections", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "control_type", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "is_create_mode", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "is_configure_mode", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "is_connect_mode", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_app.prototype, "parseFloor", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_app.prototype, "block_name", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_app.prototype, "floor_num", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_app.prototype, "floor_direction", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_app.prototype, "floor_cluster", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_app.prototype, "calculateOffset", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_app.prototype, "set_position", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_app.prototype, "set_size", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_app.prototype, "event_key", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_app.prototype, "floor_lines", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_app.prototype, "get_floor_id", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app.prototype, "blocks", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app, "blocks_data", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_app, "block", null);
        __decorate([
            $mol_mem
        ], $apxutechtop_samosbor_map_app, "all_transitions", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_app, "transition", null);
        __decorate([
            $mol_action
        ], $apxutechtop_samosbor_map_app, "rotate_block", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_app, "parseTrans", null);
        __decorate([
            $mol_mem_key
        ], $apxutechtop_samosbor_map_app, "direction", null);
        $$.$apxutechtop_samosbor_map_app = $apxutechtop_samosbor_map_app;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("apxutechtop/samosbor/map/app/app.view.css", "[apxutechtop_samosbor_map_app] {\n\t--bg: #6E6E6E;\n\t--main: #585858;\n\n\t[color=a] {\n\t\t--bg: #BD9EFF;\n\t\t--main: #9A76E7;\n\t}\n\n\t[color=b] {\n\t\t--bg: #FF9E9E;\n\t\t--main: #EB6B6B;\n\t}\n\n\t[color=v] {\n\t\t--bg: #EAB27F;\n\t\t--main: #C1844D;\n\t}\n\n\t[color=g] {\n\t\t--bg: #BDC9E6;\n\t\t--main: #889DCF;\n\t}\n\n\t[color=d] {\n\t\t--bg: #8A609D;\n\t\t--main: #64367A;\n\t}\n\n\t[color=e] {\n\t\t--bg: #E4C1AD;\n\t\t--main: #CB9B7F;\n\t}\n\n\t[color=j] {\n\t\t--bg: #79C0B4;\n\t\t--main: #4EAD9D;\n\t}\n\n\t[color=z] {\n\t\t--bg: #9EE2FF;\n\t\t--main: #6AC3E9;\n\t}\n\n\t[color=i] {\n\t\t--bg: #968F66;\n\t\t--main: #7D7843;\n\t}\n\n\t[color=k] {\n\t\t--bg: #FA9B48;\n\t\t--main: #E3861B;\n\t}\n\n\t[color=l] {\n\t\t--bg: #9EA2FF;\n\t\t--main: #8388F4;\n\t}\n\n\t[color=m] {\n\t\t--bg: #E69EFF;\n\t\t--main: #CD73ED;\n\t}\n\n\t[color=n] {\n\t\t--bg: #FF9ED8;\n\t\t--main: #E96EB7;\n\t}\n\n\t[color=o] {\n\t\t--bg: #C09786;\n\t\t--main: #AA7762;\n\t}\n\n\t[color=p] {\n\t\t--bg: #6F6F6F;\n\t\t--main: #585858;\n\t}\n\n\t[color=r] {\n\t\t--bg: #93AF6E;\n\t\t--main: #789A4E;\n\t}\n\n\t[color=s] {\n\t\t--bg: #575FA8;\n\t\t--main: #353E87;\n\t}\n\n\t[color=t] {\n\t\t--bg: #6D949C;\n\t\t--main: #457681;\n\t}\n\n\t[color=u] {\n\t\t--bg: #B5C35D;\n\t\t--main: #95A62D;\n\t}\n\n\t[color=f] {\n\t\t--bg: #D4BACA;\n\t\t--main: #C696B3;\n\t}\n\n\t[color=h] {\n\t\t--bg: #D74851;\n\t\t--main: #BE2630;\n\t}\n\n\t[color=c] {\n\t\t--bg: #65BD9D;\n\t\t--main: #43A682;\n\t}\n\n\t[color=ch] {\n\t\t--bg: #D99A4F;\n\t\t--main: #C38030;\n\t}\n\n\t[color=sh] {\n\t\t--bg: #A37A55;\n\t\t--main: #926237;\n\t}\n\n\t[color=shch] {\n\t\t--bg: #31D02E;\n\t\t--main: #07B903;\n\t}\n\n\t[color=y] {\n\t\t--bg: #6C58BB;\n\t\t--main: #4832A1;\n\t}\n\n\t[color=yu] {\n\t\t--bg: #CD6597;\n\t\t--main: #B53974;\n\t}\n\n\t[color=je] {\n\t\t--bg: #689666;\n\t\t--main: #527D43;\n\t}\n\n\t[color=ya] {\n\t\t--bg: #966666;\n\t\t--main: #7D4343;\n\t}\n}\n\n[apxutechtop_samosbor_map_app] {\n\tbackground-color: #1E1E1E;\n}\n\n[apxutechtop_samosbor_map_app_canvas] {\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\t/* scale: 0.5; */\n\t/* background-color: #504d4c; */\n}\n\n[apxutechtop_samosbor_map_cluster] {\n\tposition: absolute;\n}\n\n[apxutechtop_samosbor_map_app_block_connection] {\n\tposition: absolute;\n\twidth: 40px;\n\theight: 40px;\n\tbackground-color: rgb(31, 233, 58);\n\tz-index: 2000;\n\ttransform: translate(calc(var(--transition-length) * (-1 / 2) - 50%), calc(var(--transition-length) * (-1 / 2) - 50%));\n\tcursor: pointer;\n\tborder: 4px inset black;\n\tborder-radius: 10px;\n\n\t&[hidden] {\n\t\tdisplay: none;\n\t\tbackground-color: red;\n\t}\n\n\t&[highlight] {\n\t\toutline: 5px solid blue;\n\t}\n}\n\n[apxutechtop_samosbor_map_app_transition] {\n\t--transition-width: 50px;\n\t--transition-height: 50px;\n\tbox-sizing: content-box;\n\n\t&[direction=vertical] {\n\t\theight: var(--transition-width);\n\t\twidth: var(--transition-length);\n\n\t\tborder-bottom: 10px solid white;\n\t\tborder-top: 10px solid white;\n\t}\n\n\t&[direction=horizontal] {\n\t\theight: var(--transition-length);\n\t\twidth: var(--transition-width);\n\t\tborder-left: 10px solid white;\n\t\tborder-right: 10px solid white;\n\t}\n\n\tposition: absolute;\n\ttransform: translate(-50%, -50%);\n\t/* border: 5px solid white; */\n\tbackground-color: #FFFFFF80;\n}\n\n[apxutechtop_samosbor_map_app_name_setting] {\n\theight: 40px !important;\n}\n\n@keyframes blink-border {\n\n\t0%,\n\t100% {\n\t\toutline-color: rgb(14, 211, 237);\n\t\t/* Цвет обводки в начале и конце цикла */\n\t}\n\n\t50% {\n\t\toutline-color: transparent;\n\t\t/* Обводка исчезает посередине цикла */\n\t}\n}\n\n[mol_view_root] {\n\t--t: 25px;\n\t/* ширина внутреннего перехода */\n\t--p: 50px;\n\t/* ширина угловой части */\n\t--x: 150px;\n\t/* ширина информационной части */\n\t--fullWidth: 720px;\n\t--fullHeight: 360px;\n\t--height: 330px;\n\t/* высота блока */\n\t--width: 710px;\n\t/* ширина блока */\n\t--l: 50px;\n\t/* ширина внешнего перехода */\n\n\t--vertical-transition-width: 49px;\n\t--vertical-transition-height: 54px;\n\t--horizontal-transition-width: 54px;\n\t--horizontal-transition-height: 49px;\n\n\t--border-width: 10px;\n\t--part-width: 120px;\n\t--calc-part-width: calc(var(--part-width) + var(--border-width));\n\t--passage-width: 50px;\n\t--calc-passage-width: calc(var(--passage-width) + var(--border-width));\n\t--solo-icon-size: 50px;\n\t--duo-icon-size: 40px;\n\t--block-width: calc((var(--part-width) + var(--border-width)) * 4 + (var(--passage-width) + var(--border-width)) * 3);\n\t--transition-width: var(--passage-width);\n\t--calc-transition-width: var(--calc-passage-width);\n\t--transition-length: calc(var(--passage-width));\n\t--calc-transition-length: calc(var(--transition-length) + var(--border-width));\n\n\n\t/* Colors */\n\t--border-color: #FFFFFF;\n\t--text-color: #FFFFFF;\n}\n\n[apxutechtop_samosbor_map_app_layer_bar] {\n\t/* width: 20px;\n\theight: 80%; */\n\tposition: fixed;\n\t/* right: 10px; */\n\tjustify-self: anchor-center;\n\tbottom: 10px;\n\t/* top: 10%; */\n\t/* background-color: aqua; */\n\tborder-radius: 3px;\n\tz-index: 10;\n}\n\n[apxutechtop_samosbor_map_app_block_form] {\n\talign-self: anchor-center;\n\tright: 10px;\n\t/* width: 200px;\n\theight: 500px; */\n\tposition: fixed;\n\tz-index: 10;\n\tmax-height: 100%;\n\toverflow: scroll;\n\n\t[apxutechtop_samosbor_map_app_block_type_switch] {\n\t\tflex-wrap: wrap;\n\t\tflex-direction: column;\n\t}\n}\n\n[apxutechtop_samosbor_map_app_control_panel] {\n\tjustify-self: anchor-center;\n\ttop: 10px;\n\tposition: fixed;\n\tz-index: 10;\n}\n\n[apxutechtop_samosbor_map_app_access_panel] {\n\t/* align-self: anchor-center; */\n\twidth: 200px;\n\ttop: 10px;\n\tleft: 10px;\n\tposition: fixed;\n\tz-index: 10;\n\n\t[apxutechtop_samosbor_map_app_my_key] {\n\t\tword-break: break-all;\n\t}\n}\n");
})($ || ($ = {}));


export default $
//# sourceMappingURL=node.js.map
