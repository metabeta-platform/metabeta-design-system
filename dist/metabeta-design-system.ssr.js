'use strict';Object.defineProperty(exports,'__esModule',{value:true});function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
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
}function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
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
// import config from './menu-configuration';
var script$3 = {
  name: 'MbMenu'
}; // export default {
//   name: 'SideMenu',
//   data() {
//     return {
//       pages: [],
//       hasSubMenu: false,
//     };
//   },
//   props: {
//     currentVersion:{
//       type: String,
//       default: '1.5.2',
//     },
//     expanded: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   watch: {
//     currentWorkspace: {
//       immediate: true,
//       handler(val) {
//         this.pages = config.getMenuOptions(val.pages);
//       },
//     },
//     subMenu(val) {
//       if (val.length > 0) {
//         this.hasSubMenu = true;
//       } else {
//         this.hasSubMenu = false;
//       }
//     },
//     activePage: {
//       immediate: true,
//       handler() {
//         this.$emit('page-change', { subMenu: this.hasSubMenu });
//         this.toggleSubMenu(this.hasSubMenu);
//       },
//     },
//     expanded: {
//       immediate: true,
//       handler(val) {
//         this.toggleMenuCollapse(val);
//       },
//     },
//   },
//   computed: {
//     ...mapState({
//       workspaces: state => state.workspacesModule.data,
//     }),
//     ...mapGetters(['settings_currentWorkspace', 'currentWorkspaceRole', 'isAuthenticated']),
//     organizations() {
//       return Array.isArray(this.workspaces.organizations) ? this.workspaces.organizations : [];
//     },
//     programs() {
//       return Array.isArray(this.workspaces.programs) ? this.workspaces.programs : [];
//     },
//     currentWorkspace() {
//       if (typeof this.settings_currentWorkspace.id !== 'undefined') {
//         const matchedProgramWorkspaces = this.programs.filter(x => x.id === this.settings_currentWorkspace.id);
//         if (matchedProgramWorkspaces.length === 1) {
//           return matchedProgramWorkspaces[0];
//         }
//         const matchedOrganizationWorkspaces = this.organizations.filter(x => x.id === this.settings_currentWorkspace.id);
//         if (matchedOrganizationWorkspaces.length === 1) {
//           return matchedOrganizationWorkspaces[0];
//         }
//       }
//       return {
//         id: 'none',
//       };
//     },
//     level0Pages() {
//       return this.pages.filter(x => x.level === 0);
//     },
//     level1Pages() {
//       return this.pages.filter(x => x.level === 1);
//     },
//     level2Pages() {
//       return this.pages.filter(x => x.level === 2);
//     },
//     subMenu() {
//       const subMenu = this.tryGet(() => this.activePage) === '' ? [] : this.activePage.subMenu;
//       if (typeof subMenu !== 'undefined') {
//         return subMenu.filter((x) => {
//           if (typeof x.role === 'undefined') {
//             return true;
//           }
//           return this.currentWorkspaceRole.includes(x.role);
//         });
//       }
//       return [];
//     },
//     subMenuGroups() {
//       return [...new Set(this.subMenu.map(x => x.group))];
//     },
//     activePage() {
//       const subRoutes = this.$route.name.split('.');
//       const parrentRoute = subRoutes[0];
//       return this.pages.filter(x => x.routeName === parrentRoute)[0];
//     },
//   },
// }
/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('aside', [_c('mb-icon', {
    attrs: {
      "name": "metabeta-icon"
    }
  })], 1);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-1b03b088_0", {
    source: ".separator-blank[data-v-1b03b088]{height:16px}.side-nav-sub-options[data-v-1b03b088]{position:fixed;top:64px;left:64px;transition:all .2s ease-in-out;transform-origin:left;height:100%;width:216px;padding-left:16px;padding-right:16px;padding-top:90px;padding-bottom:16px}.side-nav-sub-options.expanded[data-v-1b03b088]{left:216px}.side-nav-sub-options .sub-menu-group .side-nav-option[data-v-1b03b088]{border-radius:4px;height:30px;display:flex;align-items:center}.side-nav-sub-options .sub-menu-group .side-nav-option .icon[data-v-1b03b088]{margin:12px}.side-nav-sub-options .sub-menu-group .side-nav-option .name[data-v-1b03b088]{color:#e8ecef;font-size:14px;line-height:16px}.side-nav-sub-options .sub-menu-group .side-nav-option[data-v-1b03b088]:hover{background:#adb6bd}.side-nav-sub-options .sub-menu-group .side-nav-option:hover .name[data-v-1b03b088]{color:#f6fafb}.side-nav-sub-options .sub-menu-group .side-nav-option.selected[data-v-1b03b088]{background:#f6fafb}.side-nav-sub-options .sub-menu-group .side-nav-option.selected .name[data-v-1b03b088]{color:#2b71f4}.side-nav-sub-options .sub-menu-group .sub-menu-group-title[data-v-1b03b088]{display:flex;align-items:center;height:24px;padding-left:8px;padding-right:8px}.side-nav-sub-options .sub-menu-group .sub-menu-group-title .title[data-v-1b03b088]{font-size:10px;line-height:12px;color:#dde2e5;text-transform:uppercase}.side-nav[data-v-1b03b088]{box-shadow:1px 1px 1px #adb6bd;z-index:305;height:100%;width:216px;background:#fff;position:fixed;transition:all .2s ease-in-out;transform-origin:left;overflow:hidden}.side-nav.expanded[data-v-1b03b088]{width:216px}.side-nav.expanded .side-nav-options .side-nav-options-list .side-nav-option .name[data-v-1b03b088]{white-space:nowrap;display:block}.side-nav .side-nav-header[data-v-1b03b088]{height:64px;display:flex;align-items:center;padding-top:16px;padding-bottom:16px;padding-left:16px;padding-right:24px}.side-nav .side-nav-header .close[data-v-1b03b088]{margin-left:auto}.side-nav .side-nav-header .icon[data-v-1b03b088]{display:none}.side-nav .side-nav-footer[data-v-1b03b088]{position:fixed;bottom:0;height:30px;padding-left:1em}.side-nav .side-nav-options[data-v-1b03b088]{height:100%}.side-nav .side-nav-options.sub-menu[data-v-1b03b088]{border-right:1px solid #adb6bd}.side-nav .side-nav-options .side-nav-options-list[data-v-1b03b088]{margin:0;padding:8px}.side-nav .side-nav-options .side-nav-options-list .side-nav-option[data-v-1b03b088]{border-radius:4px;cursor:pointer;height:48px;display:flex;align-items:center}.side-nav .side-nav-options .side-nav-options-list .side-nav-option .icon[data-v-1b03b088]{margin:12px}.side-nav .side-nav-options .side-nav-options-list .side-nav-option .name[data-v-1b03b088]{display:none;color:#e8ecef;font-size:14px;line-height:16px}.side-nav .side-nav-options .side-nav-options-list .side-nav-option[data-v-1b03b088]:hover{background:#494f57}.side-nav .side-nav-options .side-nav-options-list .side-nav-option:hover .name[data-v-1b03b088]{color:#f6fafb}.side-nav .side-nav-options .side-nav-options-list .side-nav-option.selected[data-v-1b03b088]{background:#f6fafb}.side-nav .side-nav-options .side-nav-options-list .side-nav-option.selected .name[data-v-1b03b088]{color:#2b71f4}.side-nav[data-v-1b03b088]{width:64px}.side-nav .side-nav-header .close[data-v-1b03b088]{display:none}.side-nav .side-nav-header .logo[data-v-1b03b088]{display:none}.side-nav .side-nav-header .icon[data-v-1b03b088]{display:block}.side-nav.expanded .side-nav-header .close[data-v-1b03b088]{display:block}.side-nav.expanded .side-nav-header .icon[data-v-1b03b088]{display:none}.side-nav.expanded .side-nav-header .logo[data-v-1b03b088]{display:block}.side-nav .side-nav-options[data-v-1b03b088]{box-shadow:0 xl/2 xl rgba(246,250,251,.48),0 0 1px rgba(246,250,251,.48)}@media only screen and (max-width:1367px){.side-nav.expanded .side-nav-header .close[data-v-1b03b088]{display:none}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$3 = "data-v-1b03b088";
/* module identifier */

var __vue_module_identifier__$3 = "data-v-1b03b088";
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
var script$4 = {
  components: {
    MbAvatar: function MbAvatar$1() {
      return Promise.resolve().then(function(){return MbAvatar});
    },
    MbNavigationList: function MbNavigationList$1() {
      return Promise.resolve().then(function(){return MbNavigationList});
    }
  }
};/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', {
    staticClass: "mb-organization"
  }, [_vm._ssrNode("<div class=\"current\" data-v-6c465f3a>", "</div>", [_c('mb-avatar', {
    attrs: {
      "avatar": _vm.currentWorkspace
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("organization-menu", {
    expanded: 'expanded'
  }) + " data-v-6c465f3a>", "</div>", [_vm._l(_vm.organizations, function (org) {
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
        "type": "organization",
        "avatar": prg,
        "title": "Programs"
      }
    });
  })], 2)], 2);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-6c465f3a_0", {
    source: ".mb-organizations[data-v-6c465f3a]{position:fixed;right:50px}.mb-organizations .organization-menu[data-v-6c465f3a]{min-width:250px;max-height:0}.mb-organizations .expand[data-v-6c465f3a]{max-height:initial}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$4 = "data-v-6c465f3a";
/* module identifier */

var __vue_module_identifier__$4 = "data-v-6c465f3a";
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
//
//
var script$5 = {
  data: function data() {
    return {
      burgerButton: {
        name: 'hamburger'
      }
    };
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
var __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function __vue_render__() {
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

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$5 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-3d9448f2_0", {
    source: ".mb-topbar[data-v-3d9448f2]{position:fixed;top:0;left:0;width:100%}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$5 = "data-v-3d9448f2";
/* module identifier */

var __vue_module_identifier__$5 = "data-v-3d9448f2";
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
//
//
// import { mapActions, mapState, mapGetters } from 'vuex';
var roleMap = [{
  key: 'reviewer',
  value: 'Reviewer'
}, {
  key: 'mentor',
  value: 'Mentor'
}, {
  key: 'founders',
  value: 'Founder'
}, {
  key: 'advisors',
  value: 'Advisor'
}, {
  key: 'boardMembers',
  value: 'Board member'
}, {
  key: 'keyEmployees',
  value: 'Employee'
}, {
  key: 'managers',
  value: 'Manager'
}];

var getRole = function getRole(keys) {
  if (Array.isArray(keys)) {
    var matchedValues = keys.map(function (key) {
      var matchedRoles = roleMap.filter(function (x) {
        return x.key === key;
      });

      if (matchedRoles.length === 1) {
        return matchedRoles[0].value;
      }

      return '';
    });

    if (matchedValues.length > 0) {
      return matchedValues.join(', ');
    }
  } else {
    var matchedRoles = roleMap.filter(function (x) {
      return x.key === keys;
    });

    if (matchedRoles.length === 1) {
      return matchedRoles[0].value;
    }
  }

  return '';
};

var script$6 = {
  name: 'UserMenu',
  data: function data() {
    return {
      expanded: false
    };
  },
  //  computed: {
  //   ...mapState({
  //     profile: state => state.profileModule.myProfile.data,
  //     workspaces: state => state.workspacesModule.data,
  //   }),
  //   ...mapGetters(['currentWorkspaceRole', 'isAuthenticated']),
  //   organizations() {
  //     return Array.isArray(this.workspaces.organizations) ? this.workspaces.organizations : [];
  //   },
  //   programs() {
  //     return Array.isArray(this.workspaces.programs) ? this.workspaces.programs : [];
  //   },
  //   showLogin() {
  //     let value = null;
  //     if (this.$route.name !== 'viewPublicProgram') {
  //       value = true;
  //     } else {
  //       value = false;
  //     }
  //     return value;
  //   },
  // },
  methods: _objectSpread2(_objectSpread2({}, mapActions(['logout'])), {}, {
    getRole: getRole,
    onLogout: function onLogout() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sessionStorage.setItem('logout-clicked', true);
                _context.next = 3;
                return _this.logout();

              case 3:
                _this.$router.push({
                  name: 'login'
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    goToHelp: function goToHelp() {
      window.open('https://www.metabeta.com/en/feedback/', '_blank');
    }
  }),
  components: {
    BaseIcon: BaseIcon,
    BaseButton: BaseButton,
    AddOrganizationModal: AddOrganizationModal
  }
};/* script */
var __vue_script__$6 = script$6;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "user-header-menu clickable",
    on: {
      "mouseover": function mouseover($event) {
        _vm.expanded = true;
      },
      "mouseleave": function mouseleave($event) {
        _vm.expanded = false;
      }
    }
  }, [_vm._ssrNode("<div class=\"user-preview\" data-v-4e005f35>", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", _vm.tryGet(function () {
    return _vm.profile.avatarUrl;
  }) !== '' ? _vm.profile.avatarUrl : _vm.defaultImages.getImage('user', 'icon')) + " width=\"32\" height=\"32\" class=\"user-icon\" data-v-4e005f35> "), _vm._ssrNode("<div class=\"user-info\" data-v-4e005f35>", "</div>", [_vm._ssrNode("<div class=\"d-flex align-items-center\" data-v-4e005f35>", "</div>", [_c('mb-icon', {
    attrs: {
      "name": "mini-arrow",
      "width": "8",
      "height": "8",
      "iconClass": "default"
    }
  })], 1)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<ul" + _vm._ssrClass("user-menu-items menu-dropdown-list", {
    expanded: _vm.expanded
  }) + " style=\"right:0; top:57px; margin-right:24px\" data-v-4e005f35>", "</ul>", [_vm._ssrNode("<section class=\"account-items menu-dropdown-list-section\" data-v-4e005f35>", "</section>", [_vm._ssrNode((_vm.getRole(_vm.currentWorkspaceRole) !== '' ? "<p class=\"user-role\" data-v-4e005f35>" + _vm._ssrEscape(_vm._s(_vm.profile.firstName) + " " + _vm._s(_vm.profile.lastName) + " • " + _vm._s(_vm.getRole(_vm.currentWorkspaceRole))) + "</p>" : "<p class=\"user-role\" data-v-4e005f35>" + _vm._ssrEscape(_vm._s(_vm.profile.firstName) + " " + _vm._s(_vm.profile.lastName)) + "</p>") + " "), _vm._ssrNode("<li class=\"menu-dropdown-list-item\" data-v-4e005f35>", "</li>", [_c('mb-icon', {
    staticClass: "icon",
    attrs: {
      "name": "icon-profile",
      "width": "16",
      "height": "16",
      "iconClass": "default",
      "hoverClass": "black"
    }
  }), _vm._ssrNode(" <p class=\"title\" data-v-4e005f35>My profile</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-dropdown-list-item\" data-v-4e005f35>", "</li>", [_c('mb-icon', {
    staticClass: "icon",
    attrs: {
      "name": "settings",
      "width": "16",
      "height": "16",
      "iconClass": "default",
      "hoverClass": "black"
    }
  }), _vm._ssrNode(" <p class=\"title\" data-v-4e005f35>Account settings</p>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"organization-items menu-dropdown-list-section\" data-v-4e005f35>", "</section>", [_vm._ssrNode("<li class=\"menu-dropdown-list-item\" data-v-4e005f35>", "</li>", [_c('mb-icon', {
    staticClass: "icon",
    attrs: {
      "name": "add",
      "width": "16",
      "height": "16",
      "iconClass": "default",
      "hoverClass": "black"
    }
  }), _vm._ssrNode(" <p class=\"title\" data-v-4e005f35>Add organization</p>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"personal-items menu-dropdown-list-section\" data-v-4e005f35>", "</section>", [_vm._ssrNode("<li class=\"menu-dropdown-list-item\" data-v-4e005f35>", "</li>", [_c('mb-icon', {
    staticClass: "icon",
    attrs: {
      "name": "icon-feedback",
      "width": "16",
      "height": "16",
      "iconClass": "default",
      "hoverClass": "black"
    }
  }), _vm._ssrNode(" <p class=\"title\" data-v-4e005f35>Need help?</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-dropdown-list-item\" data-v-4e005f35>", "</li>", [_c('mb-icon', {
    staticClass: "icon",
    attrs: {
      "name": "navigation-logout",
      "width": "16",
      "height": "16",
      "iconClass": "default",
      "hoverClass": "black"
    }
  }), _vm._ssrNode(" <p class=\"title\" data-v-4e005f35>Logout</p>")], 2)], 2)], 2), _vm._ssrNode(" "), _c('add-organization-modal', {
    ref: "addOrgModal"
  })], 2);
};

var __vue_staticRenderFns__$6 = [];
/* style */

var __vue_inject_styles__$6 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-4e005f35_0", {
    source: "li[data-v-4e005f35],ul[data-v-4e005f35]{margin:0;padding:0}.user-preview[data-v-4e005f35]{display:flex;align-items:center}.user-preview .user-icon[data-v-4e005f35]{border-radius:16px}.user-preview .user-info[data-v-4e005f35]{display:none;margin-left:8px}.user-preview .user-info .user-name[data-v-4e005f35]{font-size:14px;line-height:20px;margin-right:8px}.menu-dropdown-list[data-v-4e005f35]{min-width:250px;position:absolute;background:#fff;box-shadow:0 l/2 l rgba(246,250,251,.48),0 0 1px rgba(246,250,251,.48);border-radius:.25rem;z-index:350;transform:scaleY(0);transition:all .2s ease-in-out;transform-origin:top}.menu-dropdown-list.expanded[data-v-4e005f35]{transform:scaleY(1);min-width:250px}.menu-dropdown-list .menu-dropdown-list-section[data-v-4e005f35]{padding:8px;border-top:1px solid #adb6bd}.menu-dropdown-list .menu-dropdown-list-section[data-v-4e005f35]:first-of-type{border-top:none}.menu-dropdown-list .menu-dropdown-list-section .user-role[data-v-4e005f35]{padding-top:4px;padding-bottom:4px;padding-left:8px;padding-right:8px;font-size:11px;line-height:12px;color:#dde2e5;text-transform:uppercase}.menu-dropdown-list .menu-dropdown-list-item[data-v-4e005f35]{height:32px;padding:8px;color:#e8ecef;display:flex;align-items:center;border-radius:3px}.menu-dropdown-list .menu-dropdown-list-item[data-v-4e005f35]:hover{color:#f6fafb;background:#494f57}.menu-dropdown-list .menu-dropdown-list-item:hover .title[data-v-4e005f35]{color:#f6fafb}.menu-dropdown-list .menu-dropdown-list-item .icon[data-v-4e005f35]{margin-right:8px}.menu-dropdown-list .menu-dropdown-list-item .title[data-v-4e005f35]{color:#e8ecef;font-size:14px;line-height:16px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$6 = "data-v-4e005f35";
/* module identifier */

var __vue_module_identifier__$6 = "data-v-4e005f35";
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject shadow dom */

var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, createInjectorSSR, undefined);//
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
      default: ''
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
var __vue_script__$7 = script$7;
/* template */

var __vue_render__$7 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('keep-alive', [_c(_vm.componentType, {
    tag: "component",
    class: ['mtb-button', "mtb-type-" + _vm.type, "mtb-priority-" + _vm.priority, _vm.color, "mtb-size-" + _vm.size],
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
  }, [!_vm.responsiveLabelOnly && _vm.isBefore.name ? _c('mb-icon', {
    attrs: {
      "name": _vm.type === 'action' ? _vm.iconBefore.name = 'dropdown' : _vm.iconBefore.name
    }
  }) : _vm._e(), _vm._v(" "), !_vm.responsiveIconOnly ? _c('label', {
    staticClass: "mtb-button-label"
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), !_vm.responsiveLabelOnly && _vm.isAfter.name ? _c('mb-icon', {
    attrs: {
      "name": _vm.type === 'action' ? _vm.iconBefore.name = 'dropdown' : _vm.iconBefore.name
    }
  }) : _vm._e()], 1)], 1);
};

var __vue_staticRenderFns__$7 = [];
/* style */

var __vue_inject_styles__$7 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-175cae38_0", {
    source: ".mtb-button{align-items:center;justify-content:center}.mtb-button .mtb-button-label{margin:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$7 = undefined;
/* module identifier */

var __vue_module_identifier__$7 = "data-v-175cae38";
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
var script$8 = {
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
var __vue_script__$8 = script$8;
/* template */

var __vue_render__$8 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.isVisible ? _c('footer', [_vm._t("footer-title"), _vm._ssrNode(" "), _vm._ssrNode("<aside class=\"actions\">", "</aside>", [_vm._t("footer-actions")], 2)], 2) : _vm._e();
};

var __vue_staticRenderFns__$8 = [];
/* style */

var __vue_inject_styles__$8 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-13bbeb40_0", {
    source: ".actions{display:flex;align-items:center;justify-content:flex-end}.actions+button,.actions+div{margin:0 .75rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$8 = undefined;
/* module identifier */

var __vue_module_identifier__$8 = "data-v-13bbeb40";
/* functional template */

var __vue_is_functional_template__$8 = false;
/* style inject shadow dom */

var __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, createInjectorSSR, undefined);//
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
var script$9 = {
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
var __vue_script__$9 = script$9;
/* template */

var __vue_render__$9 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.isVisible ? _c('header', {
    staticClass: "header",
    class: _vm.alignment === '' || _vm.alignment === 'default' ? 'default' : 'reverse'
  }, [_vm._ssrNode("<section class=\"title\">", "</section>", [_vm._t("header-title")], 2), _vm._ssrNode(" "), _vm._ssrNode("<aside class=\"actions\">", "</aside>", [_vm._t("header-actions")], 2)], 2) : _vm._e();
};

var __vue_staticRenderFns__$9 = [];
/* style */

var __vue_inject_styles__$9 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-148bfd61_0", {
    source: ".header{display:flex}.header.default{flex-direction:column}.header.reverse{flex-direction:column-reverse}.header .actions{display:flex;align-items:center;justify-content:flex-end}.header .actions+button,.header .actions+div{margin:0 .75rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$9 = undefined;
/* module identifier */

var __vue_module_identifier__$9 = "data-v-148bfd61";
/* functional template */

var __vue_is_functional_template__$9 = false;
/* style inject shadow dom */

var __vue_component__$9 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, createInjectorSSR, undefined);//
var script$a = {
  name: "MbPanel",
  components: {
    MbHeaderActions: __vue_component__$9
  },
  props: {
    type: {
      type: String,
      default: 'base'
    }
  }
};/* script */
var __vue_script__$a = script$a;
/* template */

var __vue_render__$a = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', {
    class: {
      type: _vm.type
    }
  }, [_c('mb-header-actions', {
    attrs: {
      "is-visible": _vm.$slots.headerActions.length > 0 || _vm.$scopedSlots.headerActions.length > 0
    }
  }, [[_vm._t("header-title", [_vm._v("Panel title ")])], _vm._v(" "), [_vm._t("header-actions")]], 2), _vm._ssrNode(" "), _vm._t("content"), _vm._ssrNode(" "), _c('mb-footer-actions', {
    attrs: {
      "is-visible": _vm.$slots.footerActions.length > 0 || _vm.$scopedSlots.footerActions.length > 0
    }
  }, [[_vm._t("header-actions")]], 2)], 2);
};

var __vue_staticRenderFns__$a = [];
/* style */

var __vue_inject_styles__$a = undefined;
/* scoped */

var __vue_scope_id__$a = undefined;
/* module identifier */

var __vue_module_identifier__$a = "data-v-5e77169a";
/* functional template */

var __vue_is_functional_template__$a = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$a = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, undefined, undefined);//
//
//
//
//
//
var script$b = {
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
var __vue_script__$b = script$b;
/* template */

var __vue_render__$b = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tooltip",
    class: [_vm.isVisible ? '_visible' : '', _vm.position]
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$b = [];
/* style */

var __vue_inject_styles__$b = undefined;
/* scoped */

var __vue_scope_id__$b = undefined;
/* module identifier */

var __vue_module_identifier__$b = "data-v-977c5fb6";
/* functional template */

var __vue_is_functional_template__$b = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$b = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$b,
  staticRenderFns: __vue_staticRenderFns__$b
}, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
var script$c = {
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
var __vue_script__$c = script$c;
/* template */

var __vue_render__$c = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.isVisible ? _c(_vm.elementType, {
    tag: "component"
  }, [_vm._t("title"), _vm._v(" "), _c('aside', {
    staticClass: "actions"
  }, [_vm._t("actions")], 2)], 2) : _vm._e();
};

var __vue_staticRenderFns__$c = [];
/* style */

var __vue_inject_styles__$c = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-61b28338_0", {
    source: ".actions{display:flex;align-items:center;justify-content:flex-end}.actions+button,.actions+div{margin:0 .75rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$c = undefined;
/* module identifier */

var __vue_module_identifier__$c = "data-v-61b28338";
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
//
//
//
//
var script$d = {
  props: {
    type: {
      type: String,
      default: 'user'
    },
    title: {
      type: [String, Number]
    }
  },
  components: {
    MbAvatar: function MbAvatar$1() {
      return Promise.resolve().then(function(){return MbAvatar});
    }
  }
};/* script */
var __vue_script__$d = script$d;
/* template */

var __vue_render__$d = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "mb-navigation-list"
  }, [_vm._ssrNode("<h5>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h5> "), _vm._ssrNode("<ul class=\"nav-link\">", "</ul>", _vm._l(_vm.links, function (link) {
    return _vm._ssrNode("<li>", "</li>", [_c('router-link', {
      attrs: {
        "to": link.url
      }
    }, [_c('MbAvatar', {
      attrs: {
        "type": _vm.type,
        "avatar": link.data
      }
    })], 1)], 1);
  }), 0)], 2);
};

var __vue_staticRenderFns__$d = [];
/* style */

var __vue_inject_styles__$d = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-a95ab6a8_0", {
    source: ".mb-navigation-list li{padding:1.5rem}.mb-navigation-list li:hover{background-color:#adb6bd}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$d = undefined;
/* module identifier */

var __vue_module_identifier__$d = "data-v-a95ab6a8";
/* functional template */

var __vue_is_functional_template__$d = false;
/* style inject shadow dom */

var __vue_component__$d = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$d,
  staticRenderFns: __vue_staticRenderFns__$d
}, __vue_inject_styles__$d, __vue_script__$d, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, false, undefined, createInjectorSSR, undefined);var MbNavigationList=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$d});//
//
//
//
//
//
//
var script$e = {
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
        this.checkState = false;
        this.$emit('checked', this.name);
      } else {
        this.checkState = true;
        this.$emit('unchecked', this.name);
      }
    }
  },
  created: function created() {
    this.checkState = this.checked;
  }
};/* script */
var __vue_script__$e = script$e;
/* template */

var __vue_render__$e = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "checkbox",
    on: {
      "click": _vm.checkEvent
    }
  }, [_vm._ssrNode("<input type=\"checkbox\"" + _vm._ssrAttr("name", _vm.name) + _vm._ssrAttr("is-checked", _vm.checkState) + "> <label" + _vm._ssrAttr("for", _vm.name) + ">" + _vm._ssrEscape(_vm._s(_vm.labe)) + "</label>")]);
};

var __vue_staticRenderFns__$e = [];
/* style */

var __vue_inject_styles__$e = undefined;
/* scoped */

var __vue_scope_id__$e = undefined;
/* module identifier */

var __vue_module_identifier__$e = "data-v-ab687d16";
/* functional template */

var __vue_is_functional_template__$e = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$e = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$e,
  staticRenderFns: __vue_staticRenderFns__$e
}, __vue_inject_styles__$e, __vue_script__$e, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$e, false, undefined, undefined, undefined);var MbCheckbox=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$e});//
//
//
//
//
//
var script$f = {
  name: "MbFieldset"
};/* script */
var __vue_script__$f = script$f;
/* template */

var __vue_render__$f = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('fieldset', {
    staticClass: "mb-fieldset"
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$f = [];
/* style */

var __vue_inject_styles__$f = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-e92c3c60_0", {
    source: ".mb-fieldset{position:relative;appearance:none;box-sizing:border-box;display:flex;align-items:center}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$f = undefined;
/* module identifier */

var __vue_module_identifier__$f = "data-v-e92c3c60";
/* functional template */

var __vue_is_functional_template__$f = false;
/* style inject shadow dom */

var __vue_component__$f = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$f,
  staticRenderFns: __vue_staticRenderFns__$f
}, __vue_inject_styles__$f, __vue_script__$f, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$f, false, undefined, createInjectorSSR, undefined);var MbFieldset=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$f});//
//
//
//
//
//
//
//
var script$g = {
  name: "MbInput",
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
    MbFieldSet: function MbFieldSet() {
      return Promise.resolve().then(function(){return MbFieldset});
    }
  },
  watch: {
    value: function value(newValue) {
      this.$emit('changed', newValue);
    }
  }
};/* script */
var __vue_script__$g = script$g;
/* template */

var __vue_render__$g = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('mb-fieldset', [_vm.iconBefore.name.length > 0 ? _c('mb-icon', {
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
      value: _vm.value,
      expression: "value"
    }],
    staticClass: "mb-input",
    class: [{
      'has-before-icon': _vm.beforeIcon.name.length > 0
    }, {
      'has-after-icon': _vm.afterIcon.name.length > 0
    }],
    attrs: {
      "name": _vm.name,
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.value) ? _vm._i(_vm.value, null) > -1 : _vm.value
    },
    on: {
      "change": function change($event) {
        var $$a = _vm.value,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && (_vm.value = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.value = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.value = $$c;
        }
      }
    }
  }) : _vm.type === 'radio' ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.value,
      expression: "value"
    }],
    staticClass: "mb-input",
    class: [{
      'has-before-icon': _vm.beforeIcon.name.length > 0
    }, {
      'has-after-icon': _vm.afterIcon.name.length > 0
    }],
    attrs: {
      "name": _vm.name,
      "type": "radio"
    },
    domProps: {
      "checked": _vm._q(_vm.value, null)
    },
    on: {
      "change": function change($event) {
        _vm.value = null;
      }
    }
  }) : _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.value,
      expression: "value"
    }],
    staticClass: "mb-input",
    class: [{
      'has-before-icon': _vm.beforeIcon.name.length > 0
    }, {
      'has-after-icon': _vm.afterIcon.name.length > 0
    }],
    attrs: {
      "name": _vm.name,
      "type": _vm.type
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.value = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.iconAfter.name.length > 0 ? _c('mb-icon', {
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

var __vue_staticRenderFns__$g = [];
/* style */

var __vue_inject_styles__$g = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-67eaa62c_0", {
    source: ".mb-input+.has-after-icon{padding-right:50px}.mb-input+.has-after-icon.input-icon{position:absolute;top:50%;transform:translateY(-50%);right:10px}.mb-input+.has-before-icon{padding-left:50px}.mb-input+.has-before-icon.input-icon{position:absolute;top:50%;transform:translateY(-50%);left:10px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$g = undefined;
/* module identifier */

var __vue_module_identifier__$g = "data-v-67eaa62c";
/* functional template */

var __vue_is_functional_template__$g = false;
/* style inject shadow dom */

var __vue_component__$g = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$g,
  staticRenderFns: __vue_staticRenderFns__$g
}, __vue_inject_styles__$g, __vue_script__$g, __vue_scope_id__$g, __vue_is_functional_template__$g, __vue_module_identifier__$g, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
var script$h = {
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
      if (!this.checkState) {
        this.checkState = false;
        this.$emit('checked', this.name);
      } else {
        this.checkState = true;
        this.$emit('unchecked', this.name);
      }
    }
  },
  created: function created() {
    this.radioState = this.checked;
  }
};/* script */
var __vue_script__$h = script$h;
/* template */

var __vue_render__$h = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "radiobox",
    on: {
      "click": _vm.radioEvent
    }
  }, [_vm._ssrNode("<input type=\"radio\"" + _vm._ssrAttr("name", _vm.name) + _vm._ssrAttr("is-checked", _vm.radioState) + _vm._ssrAttr("value", _vm.name) + "> <label" + _vm._ssrAttr("for", _vm.name) + ">" + _vm._ssrEscape(_vm._s(_vm.labe)) + "</label>")]);
};

var __vue_staticRenderFns__$h = [];
/* style */

var __vue_inject_styles__$h = undefined;
/* scoped */

var __vue_scope_id__$h = undefined;
/* module identifier */

var __vue_module_identifier__$h = "data-v-2410dc50";
/* functional template */

var __vue_is_functional_template__$h = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$h = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$h,
  staticRenderFns: __vue_staticRenderFns__$h
}, __vue_inject_styles__$h, __vue_script__$h, __vue_scope_id__$h, __vue_is_functional_template__$h, __vue_module_identifier__$h, false, undefined, undefined, undefined);var MbRadio=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$h});var tryGet = function tryGet(value) {
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

Vue.prototype.tryGet = tryGet;

var requireIcons = commonjsRequire.context('../assets/icons', false, /\.svg$/);

requireIcons.keys().forEach(function (fileName) {
  var iconName = upperFirst(camelCase(fileName.replace(/(\.\/|\.svg)/g, '')));
  var componentConfig = requireIcons(fileName);
  Vue.component(iconName, componentConfig.default || componentConfig);
});var components=/*#__PURE__*/Object.freeze({__proto__:null,MbRadioGroup: __vue_component__,MbCheckboxGroup: __vue_component__$1,MbApp: __vue_component__$2,MbMenu: __vue_component__$3,MbOrganization: __vue_component__$4,MbTopbar: __vue_component__$5,MbUser: __vue_component__$6,MbButton: __vue_component__$7,MbFooterActions: __vue_component__$8,MbHeaderActions: __vue_component__$9,MbPanel: __vue_component__$a,MbTooltip: __vue_component__$b,MbEdgesLayout: __vue_component__$c,MbNavigationList: __vue_component__$d,MbCheckbox: __vue_component__$e,MbFieldset: __vue_component__$f,MbInput: __vue_component__$g,MbRadio: __vue_component__$h});var install = function installMetabetaDesignSystem(Vue) {
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
var script$i = {
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
var __vue_script__$i = script$i;
/* template */

var __vue_render__$i = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "mb-avatar"
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("src", _vm.avatar.avatarUrl ? _vm.avatar.avatarUrl : _vm.defaultImages.getImage(_vm.type, 'icon')) + _vm._ssrClass(null, _vm.type == 'organization' ? 'org-icon' : 'user-icon') + " data-v-4bd76788> <div class=\"avatar-text\" data-v-4bd76788><p class=\"mb-label\" data-v-4bd76788>\n      avatar.name\n    </p> " + (_vm.avatar.desc ? "<p data-v-4bd76788><small data-v-4bd76788>\n        avatar.desc\n      </small></p>" : "<!---->") + "</div>")]);
};

var __vue_staticRenderFns__$i = [];
/* style */

var __vue_inject_styles__$i = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-4bd76788_0", {
    source: ".mb-avatar[data-v-4bd76788]{display:flex;align-items:center}.mb-avatar .user-icon[data-v-4bd76788]{border-radius:50%}.mb-avatar .org-icon[data-v-4bd76788]{border-radius:.25rem}.mb-avatar .avatar-text[data-v-4bd76788]{display:block;margin-left:1rem}.mb-avatar .avatar-text[data-v-4bd76788]:not(.mb-label){margin-top:.5rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$i = "data-v-4bd76788";
/* module identifier */

var __vue_module_identifier__$i = "data-v-4bd76788";
/* functional template */

var __vue_is_functional_template__$i = false;
/* style inject shadow dom */

var __vue_component__$i = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$i,
  staticRenderFns: __vue_staticRenderFns__$i
}, __vue_inject_styles__$i, __vue_script__$i, __vue_scope_id__$i, __vue_is_functional_template__$i, __vue_module_identifier__$i, false, undefined, createInjectorSSR, undefined);var MbAvatar=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$i});//
//
//
//
var script$j = {
  name: "MbIcon",
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
  }
};/* script */
var __vue_script__$j = script$j;
/* template */

var __vue_render__$j = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c(_vm.iconBefore.name || _vm.iconAfter.name, {
    tag: "component",
    class: _vm.iconBefore ? 'float__left' : 'float__right',
    attrs: {
      "width": _vm.iconBefore.size || _vm.iconAfter.size
    }
  });
};

var __vue_staticRenderFns__$j = [];
/* style */

var __vue_inject_styles__$j = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2d6121aa_0", {
    source: ".float__right[data-v-2d6121aa]{float:right}.float__left[data-v-2d6121aa]{float:left}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$j = "data-v-2d6121aa";
/* module identifier */

var __vue_module_identifier__$j = "data-v-2d6121aa";
/* functional template */

var __vue_is_functional_template__$j = false;
/* style inject shadow dom */

var __vue_component__$j = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$j,
  staticRenderFns: __vue_staticRenderFns__$j
}, __vue_inject_styles__$j, __vue_script__$j, __vue_scope_id__$j, __vue_is_functional_template__$j, __vue_module_identifier__$j, false, undefined, createInjectorSSR, undefined);var MbIcon=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$j});exports.MbApp=__vue_component__$2;exports.MbButton=__vue_component__$7;exports.MbCheckbox=__vue_component__$e;exports.MbCheckboxGroup=__vue_component__$1;exports.MbEdgesLayout=__vue_component__$c;exports.MbFieldset=__vue_component__$f;exports.MbFooterActions=__vue_component__$8;exports.MbHeaderActions=__vue_component__$9;exports.MbInput=__vue_component__$g;exports.MbMenu=__vue_component__$3;exports.MbNavigationList=__vue_component__$d;exports.MbOrganization=__vue_component__$4;exports.MbPanel=__vue_component__$a;exports.MbRadio=__vue_component__$h;exports.MbRadioGroup=__vue_component__;exports.MbTooltip=__vue_component__$b;exports.MbTopbar=__vue_component__$5;exports.MbUser=__vue_component__$6;exports.default=plugin;