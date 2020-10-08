'use strict';Object.defineProperty(exports,'__esModule',{value:true});var Vue=require('vue');require('lodash/upperFirst'),require('lodash/camelCase');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var Vue__default=/*#__PURE__*/_interopDefaultLegacy(Vue);function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'MbRadioGroup',
  data: function data() {
    return {
      checkedArr: []
    };
  },
  props: {
    alignment: {
      type: String,
      default: 'horizontal'
    },
    checkedValues: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    checkedEmit: function checkedEmit(checkedInput) {
      this.checkedArr.push(checkedInput);
      this.$emit('inputChanged', this.checkedArr);
    },
    uncheckedEmit: function uncheckedEmit(uncheckedInput) {
      var _this = this;

      this.checkedArr.filter(function (checkedItem) {
        return _this.checkedArr.includes(checkedItem);
      });
      this.$emit('inputChanged', this.checkedArr);
    }
  },
  components: {
    MbRadio: function MbRadio$1() {
      return Promise.resolve().then(function(){return MbRadio});
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "mb-checkbox-group"
  }, _vm._l(_vm.value, function (checkboxIndex, i) {
    return _vm._ssrNode("<ul" + _vm._ssrClass(null, _vm.alignment) + " data-v-7f626aad>", "</ul>", [_vm._ssrNode("<li data-v-7f626aad>", "</li>", [_c('mb-radio', {
      attrs: {
        "name": checkboxIndex.name,
        "is-checked": _vm.checkedValue[i],
        "label": checkboxIndex.label
      },
      on: {
        "unchecked": _vm.uncheckedEmit,
        "checked": _vm.checkedEmit
      }
    })], 1)]);
  }), 0);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-7f626aad_0", {
    source: ".mb-checkbox-group .horizontal[data-v-7f626aad]{display:flex;margin-right:1rem}.mb-checkbox-group .horizontal[data-v-7f626aad]:last-child{margin-right:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-7f626aad";
/* module identifier */

var __vue_module_identifier__ = "data-v-7f626aad";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
var script$1 = {
  name: 'MbCheckboxGroup',
  data: function data() {
    return {
      checkedArr: []
    };
  },
  props: {
    alignment: {
      type: String,
      default: 'horizontal'
    },
    checkedValues: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    checkedEmit: function checkedEmit(checkedInput) {
      this.checkedArr.push(checkedInput);
      this.$emit('inputChanged', this.checkedArr);
    },
    uncheckedEmit: function uncheckedEmit(uncheckedInput) {
      var _this = this;

      this.checkedArr.filter(function (checkedItem) {
        return _this.checkedArr.includes(checkedItem);
      });
      this.$emit('inputChanged', this.checkedArr);
    }
  },
  components: {
    MbCheckbox: function MbCheckbox$1() {
      return Promise.resolve().then(function(){return MbCheckbox});
    }
  }
};/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "mb-checkbox-group"
  }, _vm._l(_vm.value, function (checkboxIndex, i) {
    return _vm._ssrNode("<ul" + _vm._ssrClass(null, _vm.alignment) + " data-v-57a6394d>", "</ul>", [_vm._ssrNode("<li data-v-57a6394d>", "</li>", [_c('mb-checkbox', {
      attrs: {
        "name": checkboxIndex.name,
        "is-checked": _vm.checkedValue[i],
        "label": checkboxIndex.label
      },
      on: {
        "unchecked": _vm.uncheckedEmit,
        "checked": _vm.checkedEmit
      }
    })], 1)]);
  }), 0);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-57a6394d_0", {
    source: ".mb-checkbox-group .horizontal[data-v-57a6394d]{display:flex;margin-right:1rem}.mb-checkbox-group .horizontal[data-v-57a6394d]:last-child{margin-right:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = "data-v-57a6394d";
/* module identifier */

var __vue_module_identifier__$1 = "data-v-57a6394d";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$2 = {
  name: "MbApp",
  props: {
    isLoading: {
      type: Boolean,
      default: true
    },
    expanded: {
      type: Boolean
    }
  }
};/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('main', {
    class: _vm.expanded ? 'is-expended' : 'is-collapsed'
  }, [_vm._t("left-bar"), _vm._ssrNode(" "), _vm._t("title-bar"), _vm._ssrNode(" "), _vm._t("content-bar"), _vm._ssrNode(" "), _vm.isLoading ? _vm._ssrNode("<div>", "</div>", [_c('mb-loader')], 1) : _vm._ssrNode("<div>", "</div>", [_vm._t("content-bar", [_c('router-view', {
    key: _vm.$route.fullPath
  })])], 2)], 2);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = "data-v-12942a59";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
var script$3 = {
  components: {
    MbAvatar: function MbAvatar$1() {
      return Promise.resolve().then(function(){return MbAvatar});
    },
    MbNavigationList: function MbNavigationList$1() {
      return Promise.resolve().then(function(){return MbNavigationList});
    }
  },
  props: {
    currentWorkspace: {
      type: [Array, Object],
      default: function _default() {}
    },
    organizations: {
      type: [Array, Object],
      default: function _default() {}
    },
    programs: {
      type: [Array, Object],
      default: function _default() {}
    }
  }
};/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', {
    staticClass: "mb-organization"
  }, [_vm._ssrNode("<div class=\"current\" data-v-051c0468>", "</div>", [_c('mb-avatar', {
    attrs: {
      "avatar": _vm.currentWorkspace
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("organization-menu", {
    expanded: 'expanded'
  }) + " data-v-051c0468>", "</div>", [_vm._l(_vm.organizations, function (org) {
    return _c('mb-navigation-list', {
      key: org._id,
      attrs: {
        "type": "organization",
        "avatar": org,
        "title": "Organizations"
      }
    });
  }), _vm._ssrNode(" "), _vm._l(_vm.programs, function (prg) {
    return _c('mb-navigation-list', {
      key: prg._id,
      attrs: {
        "type": "program",
        "avatar": prg,
        "title": "Programs"
      }
    });
  })], 2)], 2);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-051c0468_0", {
    source: ".mb-organizations[data-v-051c0468]{position:fixed;right:50px}.mb-organizations .organization-menu[data-v-051c0468]{min-width:250px;max-height:0}.mb-organizations .expand[data-v-051c0468]{max-height:initial}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$3 = "data-v-051c0468";
/* module identifier */

var __vue_module_identifier__$3 = "data-v-051c0468";
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$4 = {
  data: function data() {
    return {
      burgerButton: {
        name: 'hamburger'
      }
    };
  },
  components: {
    MbEdgesLayout: function MbEdgesLayout$1() {
      return Promise.resolve().then(function(){return MbEdgesLayout});
    }
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  }
};/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('header', {
    staticClass: "mb-topbar",
    class: {
      'active': _vm.active
    }
  }, [_c('mb-edges-layout', [_c('template', {
    slot: "title"
  }, [_c('mb-button', {
    attrs: {
      "isBefore": _vm.burgerButton
    }
  }), _vm._v(" "), _c('h1', [_vm._v(_vm._s(_vm.title))])], 1), _vm._v(" "), _c('template', {
    slot: "actions"
  }, [_c('mb-organization'), _vm._v(" "), _c('mb-user')], 1)], 2), _vm._ssrNode(" "), _vm._t("mb-header-extra")], 2);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-67793296_0", {
    source: ".mb-topbar[data-v-67793296]{position:fixed;top:0;left:0;width:100%}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$4 = "data-v-67793296";
/* module identifier */

var __vue_module_identifier__$4 = "data-v-67793296";
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$5 = {
  props: {
    tabs: {
      type: Array,
      default: []
    }
  },
  methods: {
    switchTab: function switchTab(tabIndex) {
      this.tabs.forEach(function (tab) {
        tab.active = false;
      });
      this.tabs[tabIndex].active = true;
    }
  }
};/* script */
var __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', {
    staticClass: "mb-tabs"
  }, [_vm._ssrNode("<nav><ul>" + _vm._ssrList(_vm.tabs, function (tab, index) {
    return "<li" + _vm._ssrClass(null, {
      active: tab.active
    }) + ">" + _vm._ssrEscape("\n        " + _vm._s(tab.name) + "\n      ") + "</li>";
  }) + "</ul></nav> "), _vm._ssrNode("<div class=\"tab-wrapper\">", "</div>", _vm._l(_vm.tabs, function (tab) {
    return _vm._ssrNode("<div" + _vm._ssrClass("mb-tab", {
      active: tab.active
    }) + ">", "</div>", [_vm._t(tab.name)], 2);
  }), 0)], 2);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$5 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-1a3f46f4_0", {
    source: ".mb-tabs ul{display:flex;align-items:center;justify-content:flex-start}.mb-tabs ul li{position:relative;padding:1rem}.mb-tabs ul li.active::after{background-color:#4786f6;position:absolute;left:0;bottom:-.25rem}.mb-tabs .tab-wrapper{width:100%;height:auto}.mb-tabs .tab-wrapper .mb-tab{display:none}.mb-tabs .tab-wrapper .mb-tab.active{display:block}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = "data-v-1a3f46f4";
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject shadow dom */

var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$6 = {
  name: "MbModal",
  data: function data() {
    return {
      iconClose: {
        name: 'close'
      }
    };
  },
  props: {
    size: {
      type: String,
      default: 'm'
    },
    title: {
      type: String,
      default: ''
    },
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    modalVisibility: {
      get: function get() {
        console.log(this.isVisible);
        return this.isVisible;
      },
      set: function set(value) {
        this.isVisible = value;
      }
    }
  },
  components: {
    MbButton: function MbButton$1() {
      return Promise.resolve().then(function(){return MbButton});
    }
  }
};/* script */
var __vue_script__$6 = script$6;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', {
    staticClass: "mb-backdrop",
    class: [_vm.modalVisibility ? 'is-visible' : 'is-hidden']
  }, [_vm._ssrNode("<div is-visible" + _vm._ssrClass(null, ['mb-modal', "mb-size-" + _vm.size]) + " data-v-4b25719c>", "</div>", [_vm._ssrNode("<div class=\"mb-modal-header\" data-v-4b25719c>", "</div>", [_vm._t("header", [_c('h3', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('mb-button', {
    attrs: {
      "priority": "base",
      "label": "close",
      "iconBefore": _vm.iconClose
    },
    on: {
      "click": function click($event) {
        _vm.modalVisibility = false;

        _vm.$emit('on-close');
      }
    }
  })])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-modal-content\" data-v-4b25719c>", "</div>", [_vm._t("content")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-modal-footer\" data-v-4b25719c>", "</div>", [_vm._t("footer")], 2)], 2)]);
};

var __vue_staticRenderFns__$6 = [];
/* style */

var __vue_inject_styles__$6 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-4b25719c_0", {
    source: "@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans-italic.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans-italic.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans-italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans-medium.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans-medium.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans-medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans-mediumitalic.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans-mediumitalic.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans-mediumitalic.ttf) format(\"truetype\");font-weight:500;font-style:italic}.mb-backdrop[data-v-4b25719c]{position:fixed;top:0;left:0;bottom:0;right:0;width:100vw;height:100vh;max-width:100vw;max-height:100vh;background-color:rgba(0,0,0,.48);overflow:hidden}.mb-backdrop.is-visible[data-v-4b25719c]{display:block;transition:.4s cubic-bezier(.4,.14,.3,1)}.mb-backdrop.is-hidden[data-v-4b25719c]{display:none;transition:.2s cubic-bezier(.4,.14,.3,1)}.mb-backdrop .mb-modal[data-v-4b25719c]{position:absolute;top:10vh;left:50%;transform:translateX(-50%);background-color:#fff;padding:1rem;border-radius:.375rem}.mb-backdrop .mb-modal .mb-modal-header h3[data-v-4b25719c]{margin-top:0}.mb-backdrop .mb-modal .mb-modal-header .mb-button[data-v-4b25719c]{position:absolute;top:0;right:0}.mb-backdrop .mb-modal .mb-modal-content p[data-v-4b25719c]{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.875rem;line-height:1.25rem;line-height:1.25rem;font-weight:400;font-style:normal;letter-spacing:0}.mb-backdrop .mb-modal .mb-modal-footer p[data-v-4b25719c]{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.875rem;line-height:1.25rem;line-height:1rem;font-weight:400;font-style:normal;letter-spacing:0;color:#494f57}.mb-backdrop .mb-modal.mb-size-xl[data-v-4b25719c]{box-shadow:0 .5 1 rgba(246,250,251,.48),0 0 1px rgba(246,250,251,.48);width:95vw}.mb-backdrop .mb-modal.mb-size-l[data-v-4b25719c]{box-shadow:0 .5 1 rgba(246,250,251,.48),0 0 1px rgba(246,250,251,.48);width:66.66vw}.mb-backdrop .mb-modal.mb-size-m[data-v-4b25719c]{box-shadow:0 .5 1 rgba(246,250,251,.48),0 0 1px rgba(246,250,251,.48);width:50vw}.mb-backdrop .mb-modal.mb-size-s[data-v-4b25719c]{box-shadow:0 .5 1 rgba(246,250,251,.48),0 0 1px rgba(246,250,251,.48);width:33.33vw}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$6 = "data-v-4b25719c";
/* module identifier */

var __vue_module_identifier__$6 = "data-v-4b25719c";
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject shadow dom */

var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, createInjectorSSR, undefined);var MbModal=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$6});//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$7 = {
  data: function data() {
    return {
      iconClose: {
        name: 'close'
      },
      iconLeftNav: {
        name: 'arrow-left'
      },
      iconRightNav: {
        name: 'arrow-right',
        m: m
      },
      drawerContent: null
    };
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    contentId: {
      type: [String, Number]
    },
    hasConfirmationModadl: {
      type: Boolean,
      default: false
    },
    onRefresh: {
      type: Function,
      default: function _default() {}
    }
  },
  watch: {
    contentId: function contentId(newValue) {
      this.drawerContent = newValue;
      this.onRefresh(newValue);
    }
  },
  components: {
    MbModal: function MbModal$1() {
      return Promise.resolve().then(function(){return MbModal});
    },
    MbButton: function MbButton$1() {
      return Promise.resolve().then(function(){return MbButton});
    },
    MbHeaderActions: function MbHeaderActions$1() {
      return Promise.resolve().then(function(){return MbHeaderActions});
    }
  },
  computed: {
    sideMenuHasContent: function sideMenuHasContent() {
      return !!this.$slots['drawer-content-side'] || !!this.$defaultSlots['drawer-content-side'];
    },
    drawerVisibility: {
      get: function get() {
        return this.isVisible;
      },
      set: function set(value) {
        this.isVisible = value;
      }
    }
  }
};/* script */
var __vue_script__$7 = script$7;
/* template */

var __vue_render__$7 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', {
    staticClass: "mb-transition-drawer",
    class: _vm.drawerVisibility ? 'mb-state-visible' : 'mb-state-hidden'
  }, [_c('mb-header-actions', {
    attrs: {
      "is-visible": "",
      "alignment": "reverse"
    }
  }, [_c('template', {
    slot: "header-actions"
  }, [_c('div', {
    staticClass: "button-group"
  }, [_c('mb-button', {
    attrs: {
      "priority": "base",
      "iconBefore": _vm.iconClose
    },
    on: {
      "click": function click($event) {
        _vm.drawerVisibility = false;

        _vm.$emit('on-close');
      }
    }
  }), _vm._v(" "), _c('mb-button', {
    attrs: {
      "priority": "base",
      "iconBefore": _vm.iconLeftNav
    },
    on: {
      "click": function click($event) {
        return _vm.$emit('on-prev');
      }
    }
  }), _vm._v(" "), _c('mb-button', {
    attrs: {
      "priority": "base",
      "iconBefore": _vm.iconRightNav
    },
    on: {
      "click": function click($event) {
        return _vm.$emit('on-next');
      }
    }
  })], 1), _vm._v(" "), _vm._t("drawer-header-actions")], 2), _vm._v(" "), _c('template', {
    slot: "header-title"
  }, [_vm._t("drawer-title")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"main\" data-v-256a5557>", "</div>", [_vm._ssrNode("<div class=\"drawer-content\" data-v-256a5557>", "</div>", [_vm._t("drawer-content")], 2), _vm._ssrNode(" "), _vm.sideMenuHasContent ? _vm._ssrNode("<aside class=\"drawer-content-side\" data-v-256a5557>", "</aside>", [_vm._t("drawer-content-side")], 2) : _vm._e()], 2), _vm._ssrNode(" "), _vm.hasConfirmationModal ? _c('mb-modal') : _vm._e()], 2);
};

var __vue_staticRenderFns__$7 = [];
/* style */

var __vue_inject_styles__$7 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-256a5557_0", {
    source: ".mb-transition-drawer[data-v-256a5557]{position:fixed;top:0}.mb-transition-drawer.mb-state-visible[data-v-256a5557]{transition:all .4s cubic-bezier(.4,.14,.3,1);right:0}.mb-transition-drawer.mb-state-hidden[data-v-256a5557]{transition:all .2s cubic-bezier(.4,.14,.3,1);right:-100%}.main .drawer-content[data-v-256a5557]{flex-grow:2}.main .drawer-side-menu[data-v-256a5557]{flex-grow:1}.main .header-actions[data-v-256a5557]{display:flex;width:100%;justify-content:space-between}.main .header-actions .button-group[data-v-256a5557]{justify-self:flex-start}.main .header-actions .button-group button[data-v-256a5557]{margin-right:1rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$7 = "data-v-256a5557";
/* module identifier */

var __vue_module_identifier__$7 = "data-v-256a5557";
/* functional template */

var __vue_is_functional_template__$7 = false;
/* style inject shadow dom */

var __vue_component__$7 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$8 = {
  name: "MbButton",
  data: function data() {
    return {
      responsiveLabelOnly: '',
      responsiveIconOnly: ''
    };
  },
  props: {
    type: {
      type: String,
      default: 'button'
    },
    href: {
      type: String,
      default: '/',
      required: false
    },
    isBefore: {
      type: Object,
      default: function _default() {}
    },
    isAfter: {
      type: Object,
      default: function _default() {}
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    priority: {
      type: String,
      default: 'base'
    },
    color: {
      type: String,
      default: 'base'
    },
    size: {
      type: String,
      default: 'm'
    },
    iconBefore: {
      type: Object,
      default: function _default() {}
    },
    iconAfter: {
      type: Object,
      default: function _default() {}
    },
    label: {
      type: String,
      default: ''
    },
    onDesktop: {
      type: String,
      default: 'default'
    },
    onLaptop: {
      type: String,
      default: 'default'
    },
    onTablet: {
      type: String,
      default: 'default'
    },
    onPhone: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    componentType: function componentType() {
      return this.type === 'link' ? 'a' : 'button';
    }
  },
  components: {
    MbIcon: function MbIcon$1() {
      return Promise.resolve().then(function(){return MbIcon});
    }
  },
  created: function created() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    switch (windowWidth) {
      case windowWidth > 1367:
        this.responsiveIconOnly = this.onDesktop === 'icon-only';
        this.responsiveLabelOnly = this.onDesktop === 'label-only';
        break;

      case windowWidth > 768 && windowWidth < 1367:
        this.responsiveIconOnly = this.onLaptop === 'icon-only';
        this.responsiveLabelOnly = this.onLaptop === 'label-only';
        break;

      case windowWidth > 568 && windowWidth < 768:
        this.responsiveIconOnly = this.onTablet === 'icon-only';
        this.responsiveLabelOnly = this.onTablet === 'label-only';
        break;

      case windowWidth < 568:
        this.responsiveIconOnly = this.onPhone === 'icon-only';
        this.responsiveLabelOnly = this.onPhone === 'label-only';
        break;
    }
  }
};/* script */
var __vue_script__$8 = script$8;
/* template */

var __vue_render__$8 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('keep-alive', [_c(_vm.componentType, {
    tag: "component",
    class: ['mb-button', "mb-type-" + _vm.type, "mb-priority-" + _vm.priority, "mb-color-" + _vm.color, "mb-size-" + _vm.size],
    attrs: {
      "type": _vm.type != 'link' ? _vm.type : null,
      "href": _vm.type === 'link' ? _vm.href : false,
      "disabled": _vm.isDisabled
    },
    on: {
      "click": function click($event) {
        return _vm.$emit('click', $event);
      },
      "mouseenter": function mouseenter($event) {
        return _vm.$emit('mouseenter', $event);
      },
      "mouseleave": function mouseleave($event) {
        return _vm.$emit('mouseleave', $event);
      }
    }
  }, [!_vm.responsiveLabelOnly && _vm.isBefore ? _c('mb-icon', {
    attrs: {
      "name": _vm.type === 'action' ? _vm.iconBefore.name = 'dropdown' : _vm.iconBefore.name
    }
  }) : _vm._e(), _vm._v(" "), !_vm.responsiveIconOnly ? _c('span', {
    staticClass: "mb-button-label"
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), !_vm.responsiveLabelOnly && _vm.isAfter ? _c('mb-icon', {
    attrs: {
      "name": _vm.type === 'action' ? _vm.iconBefore.name = 'dropdown' : _vm.iconBefore.name
    }
  }) : _vm._e()], 1)], 1);
};

var __vue_staticRenderFns__$8 = [];
/* style */

var __vue_inject_styles__$8 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-8a0084ce_0", {
    source: "@charset \"UTF-8\";@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans-italic.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans-italic.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans-italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans-medium.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans-medium.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans-medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans-mediumitalic.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans-mediumitalic.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans-mediumitalic.ttf) format(\"truetype\");font-weight:500;font-style:italic}html{scroll-behavior:smooth}body{padding:1rem;background-color:#e8ecef;font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:1rem;line-height:1.5rem;line-height:1.5rem;font-weight:400;font-style:normal;letter-spacing:0;color:#343d40}div{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:1rem;line-height:1.5rem;line-height:1.5rem;font-weight:400;font-style:normal;letter-spacing:0;color:#343d40}h1{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:2rem;line-height:2.5rem;line-height:2.5rem;font-weight:500;font-style:normal;letter-spacing:0;color:#212629;letter-spacing:-.02em;margin:1rem 0 1.5rem}h2{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:1.5rem;line-height:2rem;line-height:2rem;font-weight:500;font-style:normal;letter-spacing:0;color:#212629;letter-spacing:-.01em;margin:1rem 0 1rem}h3{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:1.25rem;line-height:1.75rem;line-height:1.75rem;font-weight:500;font-style:normal;letter-spacing:0;color:#212629;letter-spacing:0;margin:1rem 0 .75rem}h4{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:1rem;line-height:1.5rem;line-height:1.5rem;font-weight:500;font-style:normal;letter-spacing:0;color:#212629;letter-spacing:0;margin:.75rem 0 .75rem}h5{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.875rem;line-height:1.25rem;line-height:1.25rem;font-weight:500;font-style:normal;letter-spacing:0;color:#212629;letter-spacing:.01em;text-transform:uppercase;margin:.75rem 0 .5rem}h6{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.75rem;line-height:1rem;line-height:1rem;font-weight:500;font-style:normal;letter-spacing:0;color:#212629;letter-spacing:.01em;margin:.75rem 0 .25rem}p{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:1rem;line-height:1.5rem;line-height:1.5rem;font-weight:400;font-style:normal;letter-spacing:0;color:#343d40;margin:0 0 .5em}li{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:1rem;line-height:1.5rem;line-height:1.5rem;font-weight:400;font-style:normal;letter-spacing:0;color:#343d40;margin:0 0 .5em}blockquote{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:1.25rem;line-height:1.75rem;line-height:1.75rem;font-weight:400;font-style:normal;letter-spacing:0;color:#343d40;padding-left:1.5rem;border-left:4px solid #47a1b6;font-style:italic;margin:0 0 .5em;color:#212629}blockquote footer{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.875rem;line-height:1.25rem;line-height:1rem;font-weight:400;font-style:normal;letter-spacing:0;color:#494f57;margin-top:.5rem}blockquote footer::before{content:\"—\"}pre{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:1rem;line-height:1.5rem;line-height:1.5rem;font-weight:400;font-style:normal;letter-spacing:0;color:#343d40;margin:0 0 .5em}article p{font-size:1.25rem;line-height:1.75rem}article li{font-size:1.25rem;line-height:1.75rem}article li::before{display:inline-block;width:1.5rem;margin-left:-2rem;text-align:center;direction:rtl;color:#47a1b6}article ul{padding-left:2rem}article ul li::before{content:\"•\";font-size:1rem}article ol{padding-left:2rem;list-style:none;counter-reset:li}article ol li{counter-increment:li}article ol li::before{content:counter(li)}article dt{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:1.25rem;line-height:1.75rem;line-height:1.5rem;font-weight:500;font-style:normal;letter-spacing:0;color:#212629;margin:1rem 0 .75rem}article dd{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:1.25rem;line-height:1.75rem;line-height:1.75rem;font-weight:400;font-style:normal;letter-spacing:0;color:#343d40;margin:0 0 .5em}img{width:100%;height:100%}video{display:block;width:100%;height:100%}embed{width:100%;height:100%}iframe{width:100%;height:100%;border:none}table{width:100%}table thead tr{border-bottom:1px solid #cdd5d9}table thead tr th{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.875rem;line-height:1.25rem;line-height:1.25rem;font-weight:500;font-style:normal;letter-spacing:0;color:#212629;letter-spacing:.01em;text-transform:uppercase;text-align:left;color:#494f57;padding:1rem}table tbody tr{vertical-align:middle;border-bottom:1px solid #dde2e5}table tbody tr td{text-align:left;padding:1rem}table tbody tr:hover{color:#212629;background-color:rgba(33,38,41,.04)}table tfoot tr{vertical-align:middle}table tfoot tr td{text-align:left;color:#212629;padding:1rem}.mb-button.mb-type-link,button,input[type=button],input[type=reset],input[type=submit]{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.875rem;line-height:1.25rem;line-height:1.25rem;font-weight:400;font-style:normal;letter-spacing:0;color:#343d40;padding:.5rem .75rem;border-radius:.25rem;text-align:center;text-decoration:none;display:inline-block;box-shadow:none;background-color:#fff;color:#494f57;border:1px solid rgba(255,255,255,.0001)}.mb-button.mb-type-link:hover,button:hover,input[type=button]:hover,input[type=reset]:hover,input[type=submit]:hover{color:#212629;background-color:rgba(33,38,41,.04);border:1px solid rgba(255,255,255,.0001)}.mb-button.mb-type-link:active,button:active,input[type=button]:active,input[type=reset]:active,input[type=submit]:active{color:#2b71f4;background-color:rgba(43,113,244,.04);border:1px solid rgba(255,255,255,.0001)}.mb-button.mb-type-link:focus,button:focus,input[type=button]:focus,input[type=reset]:focus,input[type=submit]:focus{border:1px solid rgba(255,255,255,.0001)}.disabled.mb-button.mb-type-link,.mb-button.mb-type-link:disabled,button.disabled,button:disabled,input.disabled[type=button],input.disabled[type=reset],input.disabled[type=submit],input[type=button]:disabled,input[type=reset]:disabled,input[type=submit]:disabled{background-color:rgba(173,182,189,.1);color:rgba(73,79,87,.36);border:1px solid rgba(255,255,255,.0001)}legend{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:1rem;line-height:1.5rem;line-height:1.5rem;font-weight:400;font-style:normal;letter-spacing:0;color:#343d40;color:#212629}label{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.875rem;line-height:1.25rem;line-height:1rem;font-weight:500;font-style:normal;letter-spacing:0;color:#212629;margin:1rem 0 .5rem;display:block}input{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.875rem;line-height:1.25rem;line-height:1rem;font-weight:400;font-style:normal;letter-spacing:0;color:#494f57;border:1px solid #dde2e5;padding:.5rem .75rem;border-radius:.25rem}input[type=email],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=url]{width:100%;display:inline-block;box-sizing:border-box}input[type=color]{-webkit-appearance:none;padding:0;border:none;width:2rem;height:2rem}input[type=color]::-webkit-color-swatch-wrapper{padding:0;border-radius:.25rem}input[type=color] ::-webkit-color-swatch{border:none;border-radius:.25rem}input:focus{border:1px solid #2b71f4;box-shadow:inset 0 0 0 #2b71f4}input::placeholder{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.875rem;line-height:1.25rem;line-height:1rem;font-weight:400;font-style:normal;letter-spacing:0;color:#494f57;color:#adb6bd}input:disabled{background-color:rgba(33,38,41,.04)}input[type=range]{width:100%;padding:0}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;box-shadow:none;border:1px solid #2b71f4;height:2rem;width:2rem;background-color:#2b71f4;cursor:pointer;margin-top:-.25rem}input[type=range]::-moz-range-thumb{box-shadow:none;border:1px solid #2b71f4;height:2rem;width:2rem;background-color:#2b71f4;cursor:pointer;margin-top:-.25rem}input[type=range]::-ms-thumb{box-shadow:none;border:1px solid #2b71f4;height:1rem;width:1rem;background-color:#2b71f4;cursor:pointer;margin-top:-.25rem}input[type=range]::-webkit-slider-runnable-track{width:100%;height:.5rem;cursor:pointer;box-shadow:none;background-color:#2b71f4;border-radius:.25rem;border:1px solid #2b71f4}input[type=range]:focus::-webkit-slider-runnable-track{background-color:#245fcf}input[type=checkbox]{display:none;margin:.2rem}input[type=checkbox]+label:before{content:\"✔\";border:1px solid #dde2e5;border-radius:.25rem;align-self:center;width:1rem;height:1rem;padding:0 .25rem;margin-right:.5rem;vertical-align:bottom;color:transparent}input[type=checkbox]+label{padding:.5rem 0 0 0;margin-top:.5rem;font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.875rem;line-height:1.25rem;line-height:1rem;font-weight:400;font-style:normal;letter-spacing:0;color:#494f57;color:#494f57}input[type=checkbox]:hover+label{cursor:pointer}input[type=checkbox]:hover+label::before{border:1px solid #cdd5d9;background-color:rgba(33,38,41,.04);cursor:pointer}input[type=checkbox]:checked+label{color:#212629}input[type=checkbox]:checked+label::before{background-color:#2b71f4;color:#fff;border:1px solid #2b71f4}input[type=checkbox]:disabled{cursor:not-allowed}input[type=checkbox]:disabled+label{color:rgba(173,182,189,.64)}input[type=checkbox]:disabled+label::before{border-color:#dde2e5;background-color:rgba(33,38,41,.04)}input[type=checkbox]:disabled:checked+label{color:rgba(173,182,189,.64)}input[type=checkbox]:disabled:checked+label::before{background-color:rgba(173,182,189,.64);color:#fff;border:1px solid rgba(173,182,189,.08)}input[type=checkbox]:not(:checked):focus+label::before{border:1px solid #2b71f4}input[type=radio]{display:none;margin:.2rem}input[type=radio]+label{padding:.5rem 0 0 0;font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.875rem;line-height:1.25rem;line-height:1rem;font-weight:400;font-style:normal;letter-spacing:0;color:#494f57;color:#494f57}input[type=radio]+label::before{content:\"\";border:1px solid #dde2e5;border-radius:50%;display:inline-block;width:1rem;height:1rem;padding-left:.25rem;padding-bottom:.25rem;margin-right:.5rem;vertical-align:bottom;color:transparent}input[type=radio]:hover+label{cursor:pointer}input[type=radio]:hover+label::before{border:1px solid #cdd5d9;background-color:rgba(33,38,41,.04);cursor:pointer}input[type=radio]:checked+label{color:#212629}input[type=radio]:checked+label::before{background-color:#2b71f4;color:#2b71f4;box-shadow:inset 0 0 0 .25rem #fff;border:1px solid #2b71f4}input[type=radio]:disabled+label{color:rgba(173,182,189,.64)}input[type=radio]:disabled+label::before{border-color:#dde2e5;background-color:rgba(33,38,41,.04)}input[type=radio]:disabled:checked+label{color:rgba(173,182,189,.64)}input[type=radio]:disabled:checked+label::before{background-color:rgba(173,182,189,.64);color:#fff;border:1px solid rgba(173,182,189,.08)}input[type=radio]:disabled{cursor:not-allowed}input[type=radio]:checked:focus+label::before{border:1px solid #2b71f4}input[type=radio]:not(:checked):focus+label::before{border:1px solid #2b71f4}input[type=date]::-webkit-calendar-picker-indicator,input[type=datetime-local]::-webkit-calendar-picker-indicator,input[type=month]::-webkit-calendar-picker-indicator,input[type=week]::-webkit-calendar-picker-indicator{content:url(~@/assets/icons/icon-calendar.svg);position:relative;height:1rem;width:1rem;background:0 0;cursor:pointer}.input-password input[type=password]{padding-right:2rem;padding-left:2rem;display:block}.input-password input[type=password]::after{position:relative;float:left;margin-right:-1.5rem;left:.5rem;position:relative}.input-password input[type=password]::after::before{display:inline-block;content:url(~@/assets/icons/icon-key.svg);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:.75rem;height:.75rem}.input-password input[type=password]::before{position:relative;float:right;margin-left:-1.5rem;right:.5rem;position:relative}.input-password input[type=password]::before::before{display:inline-block;content:url(~@/assets/icons/view-icon.svg);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:.75rem;height:.75rem}.input-email input[type=email]{padding-left:2rem}.input-email::after{content:url(~@/assets/icons/email.svg);display:block;width:1rem;height:1rem;float:left;margin-right:-1.5rem;top:.5rem;left:.5rem;position:relative}.input-search input[type=search]{padding-left:2rem}.input-search::after{content:url(~@/assets/icons/icon-search.svg);display:block;width:1rem;height:1rem;float:left;margin-right:-1.5rem;top:.5rem;left:.5rem;position:relative}.input-phone input[type=tel]{padding-left:2rem}.input-phone::after{content:url(~@/assets/icons/phone-call.svg);display:block;width:1rem;height:1rem;float:left;margin-right:-1.5rem;top:.5rem;left:.5rem;position:relative}.input-url input[type=url]{padding-left:2rem}.input-url::after{content:url(~@/assets/icons/link.svg);display:block;width:1rem;height:1rem;float:left;margin-right:-1.5rem;top:.5rem;left:.5rem;position:relative}textarea{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:1rem;line-height:1.5rem;line-height:1.5rem;font-weight:400;font-style:normal;letter-spacing:0;color:#343d40;border:1px solid #dde2e5;padding:.5rem .75rem;width:100%;border-radius:.25rem;box-sizing:border-box}textarea:focus{border:1px solid #2b71f4;box-shadow:inset 0 0 0 #2b71f4}textarea::placeholder{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.875rem;line-height:1.25rem;line-height:1rem;font-weight:400;font-style:normal;letter-spacing:0;color:#494f57;color:#adb6bd}textarea:disabled{background-color:rgba(33,38,41,.04)}select{-webkit-appearance:button;-moz-appearance:button;-webkit-user-select:none;-moz-user-select:none;-webkit-padding-end:1.5rem;-moz-padding-end:1.5rem;-webkit-padding-start:.5rem;-moz-padding-start:.5rem;font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:1rem;line-height:1.5rem;line-height:1.5rem;font-weight:400;font-style:normal;letter-spacing:0;color:#343d40;padding:.5rem .75rem;border:1px solid #dde2e5;border-radius:.25rem;box-shadow:none;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}select:focus{border:1px solid #2b71f4;box-shadow:inset 0 0 0 #2b71f4}select::placeholder{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.875rem;line-height:1.25rem;line-height:1rem;font-weight:400;font-style:normal;letter-spacing:0;color:#494f57;color:#adb6bd}select:disabled{background-color:rgba(33,38,41,.04)}optgroup{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.875rem;line-height:1.25rem;line-height:1.25rem;font-weight:500;font-style:normal;letter-spacing:0;color:#212629;letter-spacing:.01em;text-transform:uppercase;color:#adb6bd}optgroup option{text-transform:none;padding-left:0;margin-left:-20px;font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:1rem;line-height:1.5rem;line-height:1.5rem;font-weight:400;font-style:normal;letter-spacing:0;color:#343d40;padding:.5rem .75rem}optgroup option:hover{color:#212629;background-color:rgba(33,38,41,.04)}optgroup option:active{color:#2b71f4;background-color:rgba(43,113,244,.04)}meter{border-radius:.25rem;width:100%;height:1.5rem}meter::-webkit-meter-bar{box-shadow:0 0 0 0 rgba(173,182,189,.48) inset;background-color:rgba(173,182,189,.48)}meter::-moz-meter-bar{background-color:rgba(173,182,189,.48)}meter::-webkit-meter-optimum-value{background-color:#2b71f4;border-radius:.25rem 0 0 .25rem}progress{border-radius:.25rem;width:100%;height:1.5rem}progress::-webkit-progress-bar{background-color:rgba(173,182,189,.48);border-radius:.25rem}progress::-moz-progress-bar{background-color:rgba(173,182,189,.48)}progress::-webkit-progress-value{background-color:#2b71f4;border-radius:.25rem 0 0 .25rem}a{color:#245fcf;text-decoration:none;cursor:pointer}a:hover{color:#6749ba}a:focus{outline-color:#245fcf;border:none}a:active{color:#245fcf}a:visited{color:#45317f}b,strong{font-weight:500}em,i{font-style:italic}mark{color:#212629;background-color:rgba(43,113,244,.04)}del{color:#adb6bd}ins{background-color:rgba(43,113,244,.04)}small{font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.75rem;line-height:1rem;line-height:.75rem;font-weight:400;font-style:normal;letter-spacing:0;color:#494f57;color:#adb6bd}code{border-radius:.25rem;padding:.5rem;font-family:\"Lucida Console\",\"Courier Pro\",monospace;background-color:rgba(33,38,41,.04)}sub{vertical-align:sub;font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.75rem;line-height:1rem;line-height:.75rem;font-weight:400;font-style:normal;letter-spacing:0;color:#494f57}sup{vertical-align:super;font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.75rem;line-height:1rem;line-height:.75rem;font-weight:400;font-style:normal;letter-spacing:0;color:#494f57}q{font-style:italic;color:#212629}q::before{content:\"❞\";color:#47a1b6}q::after{content:\"❝\";color:#47a1b6}hr{border-top:1px solid #e8ecef}::selection{color:#212629;background-color:rgba(43,113,244,.04)}::-moz-selection{color:#212629;background-color:rgba(43,113,244,.04)}::-webkit-scrollbar{border-radius:.375rem;width:.5rem;height:.5rem;overflow:overlay;padding-right:.25rem;margin-right:.25rem}::-webkit-scrollbar-button{width:0;height:0}::-webkit-scrollbar-thumb{border-radius:.375rem;background:rgba(173,182,189,.48);border:0 none #fff}::-webkit-scrollbar-thumb:hover{background:rgba(173,182,189,.64)}::-webkit-scrollbar-thumb:active{background:rgba(173,182,189,.48)}::-webkit-scrollbar-track{background:0 0;border:0 none #fff;border-radius:.5rem}::-webkit-scrollbar-track:hover{background:0 0}::-webkit-scrollbar-track:active{background:0 0}::-webkit-scrollbar-corner{background:0 0}.mb-button{align-items:center;justify-content:center;margin-right:.5rem}.mb-button.mb-type-link{margin-right:.5rem}.mb-button .mb-button-label{margin:0}.mb-button.mb-size-s{padding:.25rem .5rem;font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.75rem;line-height:1rem;line-height:1rem;font-weight:400;font-style:normal;letter-spacing:0}.mb-button.mb-size-m{padding:.5rem .75rem;font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.875rem;line-height:1.25rem;line-height:1.25rem;font-weight:400;font-style:normal;letter-spacing:0}.mb-button.mb-size-l{padding:.75rem 1rem;font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:1rem;line-height:1.5rem;line-height:1.5rem;font-weight:400;font-style:normal;letter-spacing:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$8 = undefined;
/* module identifier */

var __vue_module_identifier__$8 = "data-v-8a0084ce";
/* functional template */

var __vue_is_functional_template__$8 = false;
/* style inject shadow dom */

var __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, createInjectorSSR, undefined);var MbButton=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$8});//
//
//
//
//
//
//
//
//
var script$9 = {
  name: "MbFooterActions",
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    side: {
      type: String,
      default: 'right'
    }
  }
};/* script */
var __vue_script__$9 = script$9;
/* template */

var __vue_render__$9 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.isVisible ? _c('footer', [_vm._t("footer-title"), _vm._ssrNode(" "), _vm._ssrNode("<aside class=\"actions\">", "</aside>", [_vm._t("footer-actions")], 2)], 2) : _vm._e();
};

var __vue_staticRenderFns__$9 = [];
/* style */

var __vue_inject_styles__$9 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-13bbeb40_0", {
    source: ".actions{display:flex;align-items:center;justify-content:flex-end}.actions+button,.actions+div{margin:0 .75rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$9 = undefined;
/* module identifier */

var __vue_module_identifier__$9 = "data-v-13bbeb40";
/* functional template */

var __vue_is_functional_template__$9 = false;
/* style inject shadow dom */

var __vue_component__$9 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, createInjectorSSR, undefined);var MbFooterActions=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$9});//
//
//
//
//
//
//
//
//
//
//
//
//
var script$a = {
  name: "MbHeaderActions",
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    side: {
      type: String,
      default: 'right'
    },
    alignment: {
      type: String,
      default: 'default'
    }
  }
};/* script */
var __vue_script__$a = script$a;
/* template */

var __vue_render__$a = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.isVisible ? _c('header', {
    staticClass: "header",
    class: _vm.alignment === '' || _vm.alignment === 'default' ? 'default' : 'reverse'
  }, [_vm._ssrNode("<section class=\"title\">", "</section>", [_vm._t("header-title")], 2), _vm._ssrNode(" "), _vm._ssrNode("<aside class=\"actions\">", "</aside>", [_vm._t("header-actions")], 2)], 2) : _vm._e();
};

var __vue_staticRenderFns__$a = [];
/* style */

var __vue_inject_styles__$a = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-148bfd61_0", {
    source: ".header{display:flex}.header.default{flex-direction:column}.header.reverse{flex-direction:column-reverse}.header .actions{display:flex;align-items:center;justify-content:flex-end}.header .actions+button,.header .actions+div{margin:0 .75rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$a = undefined;
/* module identifier */

var __vue_module_identifier__$a = "data-v-148bfd61";
/* functional template */

var __vue_is_functional_template__$a = false;
/* style inject shadow dom */

var __vue_component__$a = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, createInjectorSSR, undefined);var MbHeaderActions=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$a});//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$b = {
  name: "MbPanel",
  components: {
    MbHeaderActions: function MbHeaderActions$1() {
      return Promise.resolve().then(function(){return MbHeaderActions});
    },
    MbFooterActions: function MbFooterActions$1() {
      return Promise.resolve().then(function(){return MbFooterActions});
    }
  },
  props: {
    type: {
      type: String,
      default: 'base'
    }
  }
};/* script */
var __vue_script__$b = script$b;
/* template */

var __vue_render__$b = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', {
    class: _vm.type
  }, [_c('mb-header-actions', {
    attrs: {
      "is-visible": _vm.$slots.headerActions || _vm.$scopedSlots.headerActions
    }
  }, [[_vm._t("header-title")], _vm._v(" "), [_vm._t("header-actions")]], 2), _vm._ssrNode(" "), _vm._t("content"), _vm._ssrNode(" "), _c('mb-footer-actions', {
    attrs: {
      "is-visible": _vm.$slots.footerActions || _vm.$scopedSlots.footerActions
    }
  }, [[_vm._t("header-actions")]], 2)], 2);
};

var __vue_staticRenderFns__$b = [];
/* style */

var __vue_inject_styles__$b = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-1b4fba41_0", {
    source: ".base{border:none;background-color:#fff;border-radius:.375rem;padding:1rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$b = undefined;
/* module identifier */

var __vue_module_identifier__$b = "data-v-1b4fba41";
/* functional template */

var __vue_is_functional_template__$b = false;
/* style inject shadow dom */

var __vue_component__$b = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$b,
  staticRenderFns: __vue_staticRenderFns__$b
}, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
var script$c = {
  name: "MbTooltip",
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top'
    }
  }
};/* script */
var __vue_script__$c = script$c;
/* template */

var __vue_render__$c = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tooltip",
    class: [_vm.isVisible ? '_visible' : '', _vm.position]
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$c = [];
/* style */

var __vue_inject_styles__$c = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-99e1ca40_0", {
    source: ".tooltip{position:absolute;visibility:hidden}.tooltip_visible{visibility:visible}.tooltip.top{top:0}.tooltip.left{left:0}.tooltip.right{right:0}.tooltip.bottom{bottom:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$c = undefined;
/* module identifier */

var __vue_module_identifier__$c = "data-v-99e1ca40";
/* functional template */

var __vue_is_functional_template__$c = false;
/* style inject shadow dom */

var __vue_component__$c = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$c,
  staticRenderFns: __vue_staticRenderFns__$c
}, __vue_inject_styles__$c, __vue_script__$c, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
var script$d = {
  name: "MbEdgesLayout",
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    side: {
      type: String,
      default: 'right'
    },
    elementType: {
      type: String,
      default: 'div'
    }
  }
};/* script */
var __vue_script__$d = script$d;
/* template */

var __vue_render__$d = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.isVisible ? _c(_vm.elementType, {
    tag: "component"
  }, [_vm._t("title"), _vm._v(" "), _c('aside', {
    staticClass: "actions"
  }, [_vm._t("actions")], 2)], 2) : _vm._e();
};

var __vue_staticRenderFns__$d = [];
/* style */

var __vue_inject_styles__$d = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-61b28338_0", {
    source: ".actions{display:flex;align-items:center;justify-content:flex-end}.actions+button,.actions+div{margin:0 .75rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$d = undefined;
/* module identifier */

var __vue_module_identifier__$d = "data-v-61b28338";
/* functional template */

var __vue_is_functional_template__$d = false;
/* style inject shadow dom */

var __vue_component__$d = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$d,
  staticRenderFns: __vue_staticRenderFns__$d
}, __vue_inject_styles__$d, __vue_script__$d, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, false, undefined, createInjectorSSR, undefined);var MbEdgesLayout=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$d});//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$e = {
  props: {
    type: {
      type: String,
      default: 'user'
    },
    title: {
      type: [String, Number]
    },
    links: {
      type: [Array, Object]
    }
  },
  components: {
    MbAvatar: function MbAvatar$1() {
      return Promise.resolve().then(function(){return MbAvatar});
    }
  }
};/* script */
var __vue_script__$e = script$e;
/* template */

var __vue_render__$e = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "mb-navigation-list"
  }, [_vm._ssrNode("<h5>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h5> "), _vm._ssrNode("<nav>", "</nav>", [_vm._ssrNode("<ul class=\"nav-link\">", "</ul>", _vm._l(_vm.links, function (link) {
    return _vm._ssrNode("<li>", "</li>", [_c('router-link', {
      attrs: {
        "to": link.url
      }
    }, [_c('mb-avatar', {
      attrs: {
        "type": _vm.type,
        "avatar": link.data
      }
    })], 1)], 1);
  }), 0)])], 2);
};

var __vue_staticRenderFns__$e = [];
/* style */

var __vue_inject_styles__$e = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-180c8184_0", {
    source: ".mb-navigation-list li{padding:.5rem;margin:0 .5rem;border-radius:.375rem}.mb-navigation-list li:hover{background-color:#dde2e5}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$e = undefined;
/* module identifier */

var __vue_module_identifier__$e = "data-v-180c8184";
/* functional template */

var __vue_is_functional_template__$e = false;
/* style inject shadow dom */

var __vue_component__$e = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$e,
  staticRenderFns: __vue_staticRenderFns__$e
}, __vue_inject_styles__$e, __vue_script__$e, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$e, false, undefined, createInjectorSSR, undefined);var MbNavigationList=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$e});//
//
//
//
//
//
//
var script$f = {
  name: "MbCheckbox",
  data: function data() {
    return {
      checkState: false
    };
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    checkEvent: function checkEvent() {
      if (!this.checkState) {
        this.checkState = true;
        this.$emit('checked', this.name);
      } else {
        this.checkState = false;
        this.$emit('unchecked', this.name);
      }
    }
  },
  created: function created() {
    this.checkState = this.checked;
  }
};/* script */
var __vue_script__$f = script$f;
/* template */

var __vue_render__$f = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "checkbox",
    on: {
      "click": _vm.checkEvent
    }
  }, [_vm._ssrNode("<input type=\"checkbox\"" + _vm._ssrAttr("name", _vm.name) + _vm._ssrAttr("checked", _vm.checkState) + "> <label" + _vm._ssrAttr("for", _vm.name) + ">" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label>")]);
};

var __vue_staticRenderFns__$f = [];
/* style */

var __vue_inject_styles__$f = undefined;
/* scoped */

var __vue_scope_id__$f = undefined;
/* module identifier */

var __vue_module_identifier__$f = "data-v-a602c0ac";
/* functional template */

var __vue_is_functional_template__$f = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$f = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$f,
  staticRenderFns: __vue_staticRenderFns__$f
}, __vue_inject_styles__$f, __vue_script__$f, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$f, false, undefined, undefined, undefined);var MbCheckbox=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$f});//
//
//
//
//
//
var script$g = {
  name: "MbFieldset"
};/* script */
var __vue_script__$g = script$g;
/* template */

var __vue_render__$g = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('fieldset', {
    staticClass: "mb-fieldset"
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$g = [];
/* style */

var __vue_inject_styles__$g = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-72a782f0_0", {
    source: ".mb-fieldset{position:relative;appearance:none;margin-bottom:.5rem;box-sizing:border-box;display:flex;align-items:center}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$g = undefined;
/* module identifier */

var __vue_module_identifier__$g = "data-v-72a782f0";
/* functional template */

var __vue_is_functional_template__$g = false;
/* style inject shadow dom */

var __vue_component__$g = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$g,
  staticRenderFns: __vue_staticRenderFns__$g
}, __vue_inject_styles__$g, __vue_script__$g, __vue_scope_id__$g, __vue_is_functional_template__$g, __vue_module_identifier__$g, false, undefined, createInjectorSSR, undefined);var MbFieldset=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$g});//
//
//
//
//
//
//
//
var script$h = {
  name: "MbInput",
  data: function data() {
    return {
      inputValue: ''
    };
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: null
    },
    iconAfter: {
      type: Object,
      default: function _default() {}
    },
    iconBefore: {
      type: Object,
      default: function _default() {}
    }
  },
  components: {
    MbIcon: function MbIcon$1() {
      return Promise.resolve().then(function(){return MbIcon});
    },
    MbFieldset: function MbFieldset$1() {
      return Promise.resolve().then(function(){return MbFieldset});
    }
  },
  watch: {
    value: function value(newValue) {
      this.$emit('changed', newValue);
      this.inputValue = newValue;
    }
  },
  created: function created() {
    this.inputValue = this.value;
  }
};/* script */
var __vue_script__$h = script$h;
/* template */

var __vue_render__$h = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('mb-fieldset', [_vm.iconBefore ? _c('mb-icon', {
    staticClass: "input-icon",
    class: {
      iconBefore: 'icon-before'
    },
    attrs: {
      "iconBefore": _vm.iconBefore,
      "iconAfter": _vm.iconBefore
    },
    on: {
      "click": function click($event) {
        return _vm.emit('icon-clicked');
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.type === 'checkbox' ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputValue,
      expression: "inputValue"
    }],
    staticClass: "mb-input",
    class: [{
      'has-before-icon': _vm.iconBefore
    }, {
      'has-after-icon': _vm.iconAfter
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.inputValue) ? _vm._i(_vm.inputValue, null) > -1 : _vm.inputValue
    },
    on: {
      "change": function change($event) {
        var $$a = _vm.inputValue,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && (_vm.inputValue = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.inputValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.inputValue = $$c;
        }
      }
    }
  }) : _vm.type === 'radio' ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputValue,
      expression: "inputValue"
    }],
    staticClass: "mb-input",
    class: [{
      'has-before-icon': _vm.iconBefore
    }, {
      'has-after-icon': _vm.iconAfter
    }],
    attrs: {
      "type": "radio"
    },
    domProps: {
      "checked": _vm._q(_vm.inputValue, null)
    },
    on: {
      "change": function change($event) {
        _vm.inputValue = null;
      }
    }
  }) : _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputValue,
      expression: "inputValue"
    }],
    staticClass: "mb-input",
    class: [{
      'has-before-icon': _vm.iconBefore
    }, {
      'has-after-icon': _vm.iconAfter
    }],
    attrs: {
      "type": _vm.type
    },
    domProps: {
      "value": _vm.inputValue
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.inputValue = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.iconAfter ? _c('mb-icon', {
    staticClass: "input-icon",
    class: {
      iconAfter: 'icon-after'
    },
    attrs: {
      "iconBefore": _vm.iconBefore,
      "iconAfter": _vm.iconAfter
    },
    on: {
      "click": function click($event) {
        return _vm.emit('icon-clicked');
      }
    }
  }) : _vm._e()], 1);
};

var __vue_staticRenderFns__$h = [];
/* style */

var __vue_inject_styles__$h = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-7f4c35ec_0", {
    source: ".mb-input{width:100%;box-sizing:border-box}.mb-input+.has-after-icon{padding-right:50px}.mb-input+.has-after-icon.input-icon{position:absolute;top:50%;transform:translateY(-50%);right:10px}.mb-input+.has-before-icon{padding-left:50px}.mb-input+.has-before-icon.input-icon{position:absolute;top:50%;transform:translateY(-50%);left:10px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$h = undefined;
/* module identifier */

var __vue_module_identifier__$h = "data-v-7f4c35ec";
/* functional template */

var __vue_is_functional_template__$h = false;
/* style inject shadow dom */

var __vue_component__$h = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$h,
  staticRenderFns: __vue_staticRenderFns__$h
}, __vue_inject_styles__$h, __vue_script__$h, __vue_scope_id__$h, __vue_is_functional_template__$h, __vue_module_identifier__$h, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
var script$i = {
  name: "MbRadio",
  data: function data() {
    return {
      radioState: false
    };
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    radioEvent: function radioEvent() {
      if (!this.radioState) {
        this.radioState = true;
        this.$emit('checked', this.name);
      } else {
        this.radioState = false;
        this.$emit('unchecked', this.name);
      }
    }
  },
  created: function created() {
    this.radioState = this.checked;
  }
};/* script */
var __vue_script__$i = script$i;
/* template */

var __vue_render__$i = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "radiobox",
    on: {
      "click": _vm.radioEvent
    }
  }, [_vm._ssrNode("<input type=\"radio\"" + _vm._ssrAttr("name", _vm.name) + _vm._ssrAttr("checked", _vm.radioState) + _vm._ssrAttr("value", _vm.name) + "> <label" + _vm._ssrAttr("for", _vm.name) + ">" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label>")]);
};

var __vue_staticRenderFns__$i = [];
/* style */

var __vue_inject_styles__$i = undefined;
/* scoped */

var __vue_scope_id__$i = undefined;
/* module identifier */

var __vue_module_identifier__$i = "data-v-132a8a74";
/* functional template */

var __vue_is_functional_template__$i = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$i = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$i,
  staticRenderFns: __vue_staticRenderFns__$i
}, __vue_inject_styles__$i, __vue_script__$i, __vue_scope_id__$i, __vue_is_functional_template__$i, __vue_module_identifier__$i, false, undefined, undefined, undefined);var MbRadio=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$i});function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}//
//
//
//
var script$j = {
  name: "MbIcon",
  data: function data() {
    return {
      svg: ''
    };
  },
  iconBefore: {
    type: Object,
    default: {
      name: {
        type: String,
        default: ''
      },
      size: {
        type: Number,
        default: 40
      }
    }
  },
  iconAfter: {
    type: Object,
    default: {
      name: {
        type: String,
        default: ''
      },
      size: {
        type: Number,
        default: 40
      }
    }
  },
  created: function created() {
    this.svg = commonjsRequire("../../assets/icons/".concat(this.iconBefore.name || this.iconAfter.name, ".svg"));
  }
};/* script */
var __vue_script__$j = script$j;
/* template */

var __vue_render__$j = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.iconBefore ? 'float__left' : 'float__right',
    attrs: {
      "width": _vm.iconBefore.size || _vm.iconAfter.size
    },
    domProps: {
      "innerHTML": _vm._s(_vm.svg)
    }
  }, []);
};

var __vue_staticRenderFns__$j = [];
/* style */

var __vue_inject_styles__$j = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-4930a268_0", {
    source: ".float__right[data-v-4930a268]{float:right}.float__left[data-v-4930a268]{float:left}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$j = "data-v-4930a268";
/* module identifier */

var __vue_module_identifier__$j = "data-v-4930a268";
/* functional template */

var __vue_is_functional_template__$j = false;
/* style inject shadow dom */

var __vue_component__$j = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$j,
  staticRenderFns: __vue_staticRenderFns__$j
}, __vue_inject_styles__$j, __vue_script__$j, __vue_scope_id__$j, __vue_is_functional_template__$j, __vue_module_identifier__$j, false, undefined, createInjectorSSR, undefined);var MbIcon=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$j});//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$k = {
  props: {
    type: {
      type: String,
      default: 'user'
    },
    avatar: {
      type: Object,
      default: function _default() {}
    }
  }
};/* script */
var __vue_script__$k = script$k;
/* template */

var __vue_render__$k = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "mb-avatar"
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("src", _vm.avatar.avatarUrl ? _vm.avatar.avatarUrl : _vm.defaultImages.getImage(_vm.type, 'icon')) + _vm._ssrClass("avatar-image", _vm.type == 'organization' ? 'org-icon' : 'user-icon') + " data-v-f3aef0e8> <div class=\"avatar-text\" data-v-f3aef0e8><p class=\"mb-label\" data-v-f3aef0e8>" + _vm._ssrEscape("\n      " + _vm._s(_vm.avatar.name) + "\n    ") + "</p> " + (_vm.avatar.desc ? "<p class=\"mb-desc\" data-v-f3aef0e8><small data-v-f3aef0e8>" + _vm._ssrEscape("\n        " + _vm._s(_vm.avatar.desc) + "\n      ") + "</small></p>" : "<!---->") + "</div>")]);
};

var __vue_staticRenderFns__$k = [];
/* style */

var __vue_inject_styles__$k = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-f3aef0e8_0", {
    source: "@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans-italic.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans-italic.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans-italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans-medium.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans-medium.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans-medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans-mediumitalic.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans-mediumitalic.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans-mediumitalic.ttf) format(\"truetype\");font-weight:500;font-style:italic}.mb-avatar[data-v-f3aef0e8]{display:flex;align-items:center}.mb-avatar .avatar-image[data-v-f3aef0e8]{width:32px;height:32px;object-fit:cover}.mb-avatar .user-icon[data-v-f3aef0e8]{border-radius:50%}.mb-avatar .org-icon[data-v-f3aef0e8]{border-radius:.25rem}.mb-avatar .avatar-text[data-v-f3aef0e8]{display:block;margin-left:.75rem}.mb-avatar .avatar-text .mb-label[data-v-f3aef0e8]{margin:0;font-weight:500;line-height:1rem;font-size:.875rem}.mb-avatar .avatar-text .mb-desc[data-v-f3aef0e8]{margin:0;line-height:.75rem;font-size:.75rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$k = "data-v-f3aef0e8";
/* module identifier */

var __vue_module_identifier__$k = "data-v-f3aef0e8";
/* functional template */

var __vue_is_functional_template__$k = false;
/* style inject shadow dom */

var __vue_component__$k = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$k,
  staticRenderFns: __vue_staticRenderFns__$k
}, __vue_inject_styles__$k, __vue_script__$k, __vue_scope_id__$k, __vue_is_functional_template__$k, __vue_module_identifier__$k, false, undefined, createInjectorSSR, undefined);var MbAvatar=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$k});var tryGet = function tryGet(value) {
  try {
    var r = value();

    if (typeof r !== 'undefined') {
      if (r === null) {
        return '';
      }

      return r;
    }

    return '';
  } catch (e) {
    return '';
  }
};

Vue__default['default'].prototype.tryGet = tryGet;

var DefaultImages = /*#__PURE__*/function () {
  function DefaultImages() {
    _classCallCheck(this, DefaultImages);

    this.images = {
      investor: {
        icon: 'http://cdn.metabeta.com/static/images/accelerator/icon.png',
        logo: 'http://cdn.metabeta.com/static/images/accelerator/logo.png'
      },
      organization: {
        icon: 'http://cdn.metabeta.com/static/images/startup/icon.png',
        logo: 'http://cdn.metabeta.com/static/images/startup/logo.png'
      },
      program: {
        icon: 'http://cdn.metabeta.com/static/images/program/icon.png',
        logo: 'http://cdn.metabeta.com/static/images/program/logo.png'
      },
      user: {
        icon: 'http://cdn.metabeta.com/static/images/user/icon.png'
      }
    };
  }

  _createClass(DefaultImages, [{
    key: "getImage",
    value: function getImage(entity, type) {
      try {
        var url = this.images["".concat(entity)]["".concat(type)];
        return url;
      } catch (error) {
        throw new Error("Could not get default ".concat(type, " image for ").concat(entity));
      }
    }
  }]);

  return DefaultImages;
}();

Vue__default['default'].prototype.defaultImages = new DefaultImages();var components=/*#__PURE__*/Object.freeze({__proto__:null,MbRadioGroup: __vue_component__,MbCheckboxGroup: __vue_component__$1,MbApp: __vue_component__$2,MbOrganization: __vue_component__$3,MbTopbar: __vue_component__$4,MbTabs: __vue_component__$5,MbModal: __vue_component__$6,MbDrawer: __vue_component__$7,MbButton: __vue_component__$8,MbFooterActions: __vue_component__$9,MbHeaderActions: __vue_component__$a,MbPanel: __vue_component__$b,MbTooltip: __vue_component__$c,MbEdgesLayout: __vue_component__$d,MbNavigationList: __vue_component__$e,MbCheckbox: __vue_component__$f,MbFieldset: __vue_component__$g,MbInput: __vue_component__$h,MbRadio: __vue_component__$i,MbIcon: __vue_component__$j,MbAvatar: __vue_component__$k});var install = function installMetabetaDesignSystem(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Default export is library as a whole, registered via Vue.use()
exports.MbApp=__vue_component__$2;exports.MbAvatar=__vue_component__$k;exports.MbButton=__vue_component__$8;exports.MbCheckbox=__vue_component__$f;exports.MbCheckboxGroup=__vue_component__$1;exports.MbDrawer=__vue_component__$7;exports.MbEdgesLayout=__vue_component__$d;exports.MbFieldset=__vue_component__$g;exports.MbFooterActions=__vue_component__$9;exports.MbHeaderActions=__vue_component__$a;exports.MbIcon=__vue_component__$j;exports.MbInput=__vue_component__$h;exports.MbModal=__vue_component__$6;exports.MbNavigationList=__vue_component__$e;exports.MbOrganization=__vue_component__$3;exports.MbPanel=__vue_component__$b;exports.MbRadio=__vue_component__$i;exports.MbRadioGroup=__vue_component__;exports.MbTabs=__vue_component__$5;exports.MbTooltip=__vue_component__$c;exports.MbTopbar=__vue_component__$4;exports.default=plugin;