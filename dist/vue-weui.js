(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueWeui"] = factory();
	else
		root["VueWeui"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _buttonArea = __webpack_require__(32);
	
	var _buttonArea2 = _interopRequireDefault(_buttonArea);
	
	var _button = __webpack_require__(34);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _cellsTitle = __webpack_require__(37);
	
	var _cellsTitle2 = _interopRequireDefault(_cellsTitle);
	
	var _cellsTips = __webpack_require__(39);
	
	var _cellsTips2 = _interopRequireDefault(_cellsTips);
	
	var _cells = __webpack_require__(41);
	
	var _cells2 = _interopRequireDefault(_cells);
	
	var _cell = __webpack_require__(44);
	
	var _cell2 = _interopRequireDefault(_cell);
	
	var _linkCell = __webpack_require__(53);
	
	var _linkCell2 = _interopRequireDefault(_linkCell);
	
	var _radioCell = __webpack_require__(56);
	
	var _radioCell2 = _interopRequireDefault(_radioCell);
	
	var _checkboxCell = __webpack_require__(59);
	
	var _checkboxCell2 = _interopRequireDefault(_checkboxCell);
	
	var _switchCell = __webpack_require__(62);
	
	var _switchCell2 = _interopRequireDefault(_switchCell);
	
	var _inputCell = __webpack_require__(65);
	
	var _inputCell2 = _interopRequireDefault(_inputCell);
	
	var _selectCell = __webpack_require__(74);
	
	var _selectCell2 = _interopRequireDefault(_selectCell);
	
	var _cellHeader = __webpack_require__(46);
	
	var _cellHeader2 = _interopRequireDefault(_cellHeader);
	
	var _cellBody = __webpack_require__(48);
	
	var _cellBody2 = _interopRequireDefault(_cellBody);
	
	var _cellFooter = __webpack_require__(50);
	
	var _cellFooter2 = _interopRequireDefault(_cellFooter);
	
	var _cellInput = __webpack_require__(67);
	
	var _cellInput2 = _interopRequireDefault(_cellInput);
	
	var _cellSelect = __webpack_require__(76);
	
	var _cellSelect2 = _interopRequireDefault(_cellSelect);
	
	var _toptips = __webpack_require__(80);
	
	var _toptips2 = _interopRequireDefault(_toptips);
	
	var _toast = __webpack_require__(82);
	
	var _toast2 = _interopRequireDefault(_toast);
	
	var _dialog = __webpack_require__(85);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
	var _progress = __webpack_require__(88);
	
	var _progress2 = _interopRequireDefault(_progress);
	
	var _message = __webpack_require__(91);
	
	var _message2 = _interopRequireDefault(_message);
	
	var _article = __webpack_require__(94);
	
	var _article2 = _interopRequireDefault(_article);
	
	var _actionsheet = __webpack_require__(96);
	
	var _actionsheet2 = _interopRequireDefault(_actionsheet);
	
	var _icon = __webpack_require__(99);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _grids = __webpack_require__(102);
	
	var _grids2 = _interopRequireDefault(_grids);
	
	var _grid = __webpack_require__(104);
	
	var _grid2 = _interopRequireDefault(_grid);
	
	var _uploader = __webpack_require__(107);
	
	var _uploader2 = _interopRequireDefault(_uploader);
	
	var _uploaderFiles = __webpack_require__(110);
	
	var _uploaderFiles2 = _interopRequireDefault(_uploaderFiles);
	
	var _uploaderFile = __webpack_require__(112);
	
	var _uploaderFile2 = _interopRequireDefault(_uploaderFile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VueWeui = {
	  ButtonArea: _buttonArea2.default,
	  Button: _button2.default,
	  CellsTitle: _cellsTitle2.default,
	  CellsTips: _cellsTips2.default,
	  Cells: _cells2.default,
	  Cell: _cell2.default,
	  LinkCell: _linkCell2.default,
	  RadioCell: _radioCell2.default,
	  CheckboxCell: _checkboxCell2.default,
	  SwitchCell: _switchCell2.default,
	  InputCell: _inputCell2.default,
	  SelectCell: _selectCell2.default,
	  CellHeader: _cellHeader2.default,
	  CellBody: _cellBody2.default,
	  CellFooter: _cellFooter2.default,
	  CellInput: _cellInput2.default,
	  CellSelect: _cellSelect2.default,
	  Toptips: _toptips2.default,
	  Toast: _toast2.default,
	  Dialog: _dialog2.default,
	  Progress: _progress2.default,
	  Message: _message2.default,
	  Article: _article2.default,
	  Actionsheet: _actionsheet2.default,
	  Icon: _icon2.default,
	  Grids: _grids2.default,
	  Grid: _grid2.default,
	  Uploader: _uploader2.default,
	  UploaderFiles: _uploaderFiles2.default,
	  UploaderFile: _uploaderFile2.default
	};
	
	module.exports = VueWeui;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(33)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./button-area.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./button-area.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./button-area.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui_btn_area\"><slot></div>";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(35)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(36)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./button.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./button.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./button.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./button.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./button.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	
	// <a href="javascript:;" class="weui_btn" :class="[typeClass, disabled ? 'weui_btn_disabled' : '', mini ? 'weui_btn_mini' : '']">
	
	//   <slot></slot>
	
	// </a>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    /**
	     * 按钮颜色类型
	     * primary: 主色
	     * warn：警告色
	     * default：默认色（灰色）
	     */
	    type: {
	      type: String,
	      default: 'primary',
	      required: false
	    },
	
	    /**
	     * 是否为disabled按钮，若为true则会阻止点击事件
	     */
	    disabled: {
	      type: Boolean,
	      default: false,
	      required: false
	    },
	
	    /**
	     * 是否为小按钮
	     */
	    mini: {
	      type: Boolean,
	      default: false,
	      required: false
	    },
	
	    /**
	     * 是否为plain按钮，plain按钮无填充色，只有边框
	     * 目前只有primary和default类型支持plain按钮
	     */
	    plain: {
	      type: Boolean,
	      default: false,
	      required: false
	    }
	  },
	
	  computed: {
	    typeClass: function typeClass() {
	      return 'weui_btn' + (this.plain ? '_plain' : '') + '_' + this.type;
	    }
	  }
	};
	// </script>

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<a href=\"javascript:;\" class=\"weui_btn\" :class=\"[typeClass, disabled ? 'weui_btn_disabled' : '', mini ? 'weui_btn_mini' : '']\">\r\n  <slot></slot>\r\n</a>";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(38)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cells-title.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cells-title.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cells-title.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui_cells_title\"><slot></slot></div>";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(40)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cells-tips.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cells-tips.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cells-tips.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<p class=\"weui_cells_tips\"><slot></slot></p>";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(42)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(43)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./cells.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./cells.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cells.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./cells.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cells.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	
	// <div class="weui_cells" :class="typeClass"><slot></slot></div>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    /**
	     * Cells类型
	     * access: 带跳转的列表项容器
	     * form: 表单容器
	     * radio: 单选列表项容器
	     * checkbox: 多选列表项容器
	     */
	    type: {
	      type: String,
	      default: '',
	      required: false
	    }
	  },
	
	  computed: {
	    typeClass: function typeClass() {
	      return this.type ? 'weui_cells_' + this.type : '';
	    }
	  }
	};
	// </script>

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui_cells\" :class=\"typeClass\"><slot></slot></div>";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(45)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(52)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./cell.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./cell.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cell.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./cell.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cell.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cellHeader = __webpack_require__(46);
	
	var _cellHeader2 = _interopRequireDefault(_cellHeader);
	
	var _cellBody = __webpack_require__(48);
	
	var _cellBody2 = _interopRequireDefault(_cellBody);
	
	var _cellFooter = __webpack_require__(50);
	
	var _cellFooter2 = _interopRequireDefault(_cellFooter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    CellHeader: _cellHeader2.default,
	    CellBody: _cellBody2.default,
	    CellFooter: _cellFooter2.default
	  }
	};
	// </script>
	// <template>

	// <div class="weui_cell">

	//   <cell-header><slot name="header"></slot></cell-header>

	//   <cell-body><slot name="body"></slot></cell-body>

	//   <cell-footer><slot name="footer"></slot></cell-footer>

	// </div>

	// </template>

	// <script>

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(47)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cell-header.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cell-header.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cell-header.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui_cell_hd\"><slot></slot></div>";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(49)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cell-body.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cell-body.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cell-body.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui_cell_bd weui_cell_primary\"><slot></slot></div>";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(51)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cell-footer.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cell-footer.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cell-footer.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui_cell_ft\"><slot></slot></div>";

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui_cell\">\r\n  <cell-header><slot name=\"header\"></slot></cell-header>\r\n  <cell-body><slot name=\"body\"></slot></cell-body>\r\n  <cell-footer><slot name=\"footer\"></slot></cell-footer>\r\n</div>";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(54)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(55)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./link-cell.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./link-cell.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./link-cell.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./link-cell.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./link-cell.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cellHeader = __webpack_require__(46);
	
	var _cellHeader2 = _interopRequireDefault(_cellHeader);
	
	var _cellBody = __webpack_require__(48);
	
	var _cellBody2 = _interopRequireDefault(_cellBody);
	
	var _cellFooter = __webpack_require__(50);
	
	var _cellFooter2 = _interopRequireDefault(_cellFooter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    /**
	     * 跳转链接，若设置则此列表项可点击跳转
	     */
	    link: {
	      type: String,
	      required: false
	    },
	
	    /**
	     * vue-router使用的跳转链接
	     * 若使用vue-router，推荐使用router-link而非link
	     */
	    routerLink: {
	      type: null,
	      required: false
	    }
	  },
	
	  components: {
	    CellHeader: _cellHeader2.default,
	    CellBody: _cellBody2.default,
	    CellFooter: _cellFooter2.default
	  }
	};
	// </script>
	// <template>

	// <a :href="link" v-link="routerLink" class="weui_cell" >

	//   <cell-header><slot name="header"></slot></cell-header>

	//   <cell-body><slot name="body"></slot></cell-body>

	//   <cell-footer><slot name="footer"></slot></cell-footer>

	// </a>

	// </template>

	// <script>

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "<a :href=\"link\" v-link=\"routerLink\" class=\"weui_cell\" >\r\n  <cell-header><slot name=\"header\"></slot></cell-header>\r\n  <cell-body><slot name=\"body\"></slot></cell-body>\r\n  <cell-footer><slot name=\"footer\"></slot></cell-footer>\r\n</a>";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(57)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(58)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./radio-cell.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./radio-cell.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./radio-cell.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./radio-cell.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./radio-cell.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cellBody = __webpack_require__(48);
	
	var _cellBody2 = _interopRequireDefault(_cellBody);
	
	var _cellFooter = __webpack_require__(50);
	
	var _cellFooter2 = _interopRequireDefault(_cellFooter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	// <label :for="id" class="weui_cell weui_check_label">
	
	//   <cell-body>{{{label}}}</cell-body>
	
	//   <cell-footer>
	
	//     <input type="radio" :name="name" class="weui_check" :id="id" :value="value" v-model="picked">
	
	//     <span class="weui_icon_checked"></span>
	
	//   </cell-footer>
	
	// </label>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    /**
	     * radio input的id
	     */
	    id: {
	      type: String,
	      required: false
	    },
	
	    /**
	     * radio input的name
	     */
	    name: {
	      type: String,
	      required: false
	    },
	
	    /**
	     * radio input的value
	     */
	    value: {
	      type: String,
	      required: false
	    },
	
	    /**
	     * 显示的文本内容
	     */
	    label: {
	      type: String,
	      required: true
	    },
	
	    /**
	     * 选中项的数据绑定，用于radio input的v-model
	     */
	    picked: {
	      type: String,
	      required: true,
	      twoWay: true
	    }
	  },
	
	  components: {
	    CellBody: _cellBody2.default,
	    CellFooter: _cellFooter2.default
	  }
	};
	// </script>

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "<label :for=\"id\" class=\"weui_cell weui_check_label\">\r\n  <cell-body>{{{label}}}</cell-body>\r\n  <cell-footer>\r\n    <input type=\"radio\" :name=\"name\" class=\"weui_check\" :id=\"id\" :value=\"value\" v-model=\"picked\">\r\n    <span class=\"weui_icon_checked\"></span>\r\n  </cell-footer>\r\n</label>";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(60)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(61)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./checkbox-cell.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./checkbox-cell.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./checkbox-cell.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./checkbox-cell.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./checkbox-cell.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cellHeader = __webpack_require__(46);
	
	var _cellHeader2 = _interopRequireDefault(_cellHeader);
	
	var _cellBody = __webpack_require__(48);
	
	var _cellBody2 = _interopRequireDefault(_cellBody);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	// <label :for="id" class="weui_cell weui_check_label">
	
	//   <cell-header>
	
	//     <input type="checkbox" :name="name" class="weui_check" :id="id" :value="value" v-model="checked">
	
	//     <span class="weui_icon_checked"></span>
	
	//   </cell-header>
	
	//   <cell-body>{{{label}}}</cell-body>
	
	// </label>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    /**
	     * checkbox input的id
	     */
	    id: {
	      type: String,
	      required: false
	    },
	
	    /**
	     * checkbox input的name
	     */
	    name: {
	      type: String,
	      required: false
	    },
	
	    /**
	     * checkbox input的value
	     */
	    value: {
	      type: String,
	      required: false
	    },
	
	    /**
	     * 显示的文本内容
	     */
	    label: {
	      type: String,
	      required: true
	    },
	
	    /**
	     * 选中项的数据绑定，用于checkbox input的v-model
	     */
	    checked: {
	      type: null,
	      required: true,
	      twoWay: true
	    }
	  },
	
	  components: {
	    CellHeader: _cellHeader2.default,
	    CellBody: _cellBody2.default
	  }
	};
	// </script>

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "<label :for=\"id\" class=\"weui_cell weui_check_label\">\r\n  <cell-header>\r\n    <input type=\"checkbox\" :name=\"name\" class=\"weui_check\" :id=\"id\" :value=\"value\" v-model=\"checked\">\r\n    <span class=\"weui_icon_checked\"></span>\r\n  </cell-header>\r\n  <cell-body>{{{label}}}</cell-body>\r\n</label>";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(63)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(64)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./switch-cell.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./switch-cell.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./switch-cell.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./switch-cell.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./switch-cell.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cellBody = __webpack_require__(48);
	
	var _cellBody2 = _interopRequireDefault(_cellBody);
	
	var _cellFooter = __webpack_require__(50);
	
	var _cellFooter2 = _interopRequireDefault(_cellFooter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	// <div class="weui_cell weui_cell_switch">
	
	//   <cell-body>{{{label}}}</cell-body>
	
	//   <cell-footer>
	
	//     <input type="checkbox" :id="id" :name="name" class="weui_switch" v-model="on">
	
	//   </cell-footer>
	
	// </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    /**
	     * checkbox input的id
	     */
	    id: {
	      type: String,
	      required: false
	    },
	
	    /**
	     * checkbox input的name
	     */
	    name: {
	      type: String,
	      required: false
	    },
	
	    /**
	     * checkbox input的value
	     */
	    value: {
	      type: String,
	      required: false
	    },
	
	    /**
	     * 显示的文本内容
	     */
	    label: {
	      type: String,
	      required: true
	    },
	
	    /**
	     * 开关本质上是checkbox，所以此项代表选中项
	     * 用于checkbox input的v-model
	     */
	    on: {
	      type: null,
	      required: true,
	      twoWay: true
	    }
	  },
	
	  components: {
	    CellBody: _cellBody2.default,
	    CellFooter: _cellFooter2.default
	  }
	};
	// </script>

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui_cell weui_cell_switch\">\r\n  <cell-body>{{{label}}}</cell-body>\r\n  <cell-footer>\r\n    <input type=\"checkbox\" :id=\"id\" :name=\"name\" class=\"weui_switch\" v-model=\"on\">\r\n  </cell-footer>\r\n</div>";

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(66)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(73)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./input-cell.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./input-cell.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./input-cell.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./input-cell.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./input-cell.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cellHeader = __webpack_require__(46);
	
	var _cellHeader2 = _interopRequireDefault(_cellHeader);
	
	var _cellBody = __webpack_require__(48);
	
	var _cellBody2 = _interopRequireDefault(_cellBody);
	
	var _cellFooter = __webpack_require__(50);
	
	var _cellFooter2 = _interopRequireDefault(_cellFooter);
	
	var _cellInput = __webpack_require__(67);
	
	var _cellInput2 = _interopRequireDefault(_cellInput);
	
	var _cellTextarea = __webpack_require__(70);
	
	var _cellTextarea2 = _interopRequireDefault(_cellTextarea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    /**
	     * 输入框的类型
	     * text: 单行输入框（默认）
	     * textarea：文本域
	     */
	    type: {
	      type: String,
	      required: false,
	      default: 'text'
	    },
	
	    /**
	     * 输入框的id
	     */
	    id: {
	      type: String,
	      required: false
	    },
	
	    /**
	     * 输入框的name
	     */
	    name: {
	      type: String,
	      required: false
	    },
	
	    /**
	     * 输入框的placeholder
	     */
	    placeholder: {
	      type: String,
	      required: false
	    },
	
	    /**
	     * 输入框的标签，会显示在最前方
	     */
	    label: {
	      type: String,
	      required: false
	    },
	
	    /**
	     * 输入框的数据绑定，会作为input或textarea的v-model
	     */
	    value: {
	      type: String,
	      required: true,
	      twoWay: true
	    },
	
	    /**
	     * 验证码的url，若设置则验证码会显示在最后
	     */
	    vcode: {
	      type: String,
	      required: false
	    },
	
	    /**
	     * 是否为表单报错的列表项
	     * 若为true则文字会标红，且会显示红色感叹号
	     */
	    warn: {
	      type: Boolean,
	      required: false,
	      default: false
	    },
	
	    /**
	     * type为textarea时的行数
	     */
	    rows: {
	      type: Number,
	      default: 3
	    },
	
	    /**
	     * 支持的最大输入长度
	     * 若type为textarea且设定了maxlength，则会出现字数统计标签
	     */
	    maxlength: {
	      type: Number,
	      required: false
	    }
	  },
	
	  components: {
	    CellHeader: _cellHeader2.default,
	    CellBody: _cellBody2.default,
	    CellFooter: _cellFooter2.default,
	    CellInput: _cellInput2.default,
	    CellTextarea: _cellTextarea2.default
	  }
	};
	// </script>
	// <template>

	// <div class="weui_cell" :class="{'weui_vcode': vcode, 'weui_cell_warn': warn}">

	//   <cell-header v-if="label">

	//     <label :for="id" class="weui_label">{{{label}}}</label>

	//   </cell-header>

	//   <cell-body>

	//     <cell-textarea :type="type" :placeholder="placeholder" :id="id" :name="name" :rows="rows" :maxlength="maxlength" :value.sync="value" v-if="type === 'textarea'"></cell-textarea>

	//     <cell-input :type="type" :placeholder="placeholder" :id="id" :name="name" :maxlength="maxlength" :value.sync="value" v-else></cell-input>

	//     <div class="weui_textarea_counter" v-if="type === 'textarea' && maxlength"><span>{{value.length}}/{{maxlength}}</span></div>

	//   </cell-body>

	//   <cell-footer v-if="vcode || warn">

	//     <i class="weui_icon_warn" v-if="warn"></i>

	//     <img :src="vcode" v-if="vcode">

	//   </cell-footer>

	// </div>

	// </template>

	// <script>

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(68)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(69)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./cell-input.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./cell-input.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cell-input.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./cell-input.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cell-input.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	
	// <input class="weui_input" v-model="value">
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String,
	      required: true,
	      twoWay: true
	    }
	  }
	};
	// </script>

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<input class=\"weui_input\" v-model=\"value\">";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(71)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(72)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./cell-textarea.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./cell-textarea.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cell-textarea.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./cell-textarea.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cell-textarea.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	
	// <textarea class="weui_textarea" v-model="value"></textarea>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String,
	      required: true,
	      twoWay: true
	    }
	  }
	};
	// </script>

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "<textarea class=\"weui_textarea\" v-model=\"value\"></textarea>";

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui_cell\" :class=\"{'weui_vcode': vcode, 'weui_cell_warn': warn}\">\r\n  <cell-header v-if=\"label\">\r\n    <label :for=\"id\" class=\"weui_label\">{{{label}}}</label>\r\n  </cell-header>\r\n  <cell-body>\r\n    <cell-textarea :type=\"type\" :placeholder=\"placeholder\" :id=\"id\" :name=\"name\" :rows=\"rows\" :maxlength=\"maxlength\" :value.sync=\"value\" v-if=\"type === 'textarea'\"></cell-textarea>\r\n    <cell-input :type=\"type\" :placeholder=\"placeholder\" :id=\"id\" :name=\"name\" :maxlength=\"maxlength\" :value.sync=\"value\" v-else></cell-input>\r\n    <div class=\"weui_textarea_counter\" v-if=\"type === 'textarea' && maxlength\"><span>{{value.length}}/{{maxlength}}</span></div>\r\n  </cell-body>\r\n  <cell-footer v-if=\"vcode || warn\">\r\n    <i class=\"weui_icon_warn\" v-if=\"warn\"></i>\r\n    <img :src=\"vcode\" v-if=\"vcode\">\r\n  </cell-footer>\r\n</div>";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(75)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(79)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./select-cell.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./select-cell.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./select-cell.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./select-cell.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./select-cell.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cellHeader = __webpack_require__(46);
	
	var _cellHeader2 = _interopRequireDefault(_cellHeader);
	
	var _cellBody = __webpack_require__(48);
	
	var _cellBody2 = _interopRequireDefault(_cellBody);
	
	var _cellFooter = __webpack_require__(50);
	
	var _cellFooter2 = _interopRequireDefault(_cellFooter);
	
	var _cellSelect = __webpack_require__(76);
	
	var _cellSelect2 = _interopRequireDefault(_cellSelect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	// <div class="weui_cell weui_cell_select" :class="{'weui_select_before': before, 'weui_select_after': after}">
	
	//   <cell-header v-if="before || after">
	
	//     <cell-select :options="options" :selected.sync="selected" v-if="before"></cell-select>
	
	//     <slot name="header" v-else></slot>
	
	//   </cell-header>
	
	//   <cell-body>
	
	//     <slot name="body" v-if="before"></slot>
	
	//     <cell-select :options="options" :selected.sync="selected" v-else></cell-select>
	
	//   </cell-body>
	
	// </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    /**
	     * 选项数组
	     */
	    options: {
	      type: Array,
	      required: true
	    },
	
	    /**
	     * 选中项数据绑定，会用于select的v-model
	     * @type {Object}
	     */
	    selected: {
	      type: null,
	      required: true,
	      twoWay: true
	    },
	
	    /**
	     * 是否为前置选择框，具体请参见下方示例
	     */
	    before: {
	      type: Boolean,
	      required: false,
	      default: false
	    },
	
	    /**
	     * 是否为后置选择框，具体请参见下方示例
	     */
	    after: {
	      type: Boolean,
	      required: false,
	      default: false
	    }
	  },
	
	  components: {
	    CellHeader: _cellHeader2.default,
	    CellBody: _cellBody2.default,
	    CellFooter: _cellFooter2.default,
	    CellSelect: _cellSelect2.default
	  }
	};
	
	// </script>

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(77)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(78)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./cell-select.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./cell-select.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cell-select.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./cell-select.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./cell-select.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	
	// <select class="weui_select" v-model="selected">
	
	//   <option v-for="option in options">{{option}}</option>
	
	// </select>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    selected: {
	      type: null,
	      required: true,
	      twoWay: true
	    },
	    options: {
	      type: Array,
	      required: true
	    }
	  }
	};
	// </script>

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "<select class=\"weui_select\" v-model=\"selected\">\r\n  <option v-for=\"option in options\">{{option}}</option>\r\n</select>";

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui_cell weui_cell_select\" :class=\"{'weui_select_before': before, 'weui_select_after': after}\">\r\n  <cell-header v-if=\"before || after\">\r\n    <cell-select :options=\"options\" :selected.sync=\"selected\" v-if=\"before\"></cell-select>\r\n    <slot name=\"header\" v-else></slot>\r\n  </cell-header>\r\n  <cell-body>\r\n    <slot name=\"body\" v-if=\"before\"></slot>\r\n    <cell-select :options=\"options\" :selected.sync=\"selected\" v-else></cell-select>\r\n  </cell-body>\r\n</div>";

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(81)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./toptips.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./toptips.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./toptips.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui_toptips weui_warn\" :style=\"{display: 'block'}\"><slot></slot></div>";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(83)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(84)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./toast.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./toast.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./toast.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./toast.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./toast.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 83 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	
	// <div :class="{'weui_loading_toast': type === 'loading'}">
	
	//   <div class="weui_mask_transparent"></div>
	
	//   <div class="weui_toast">
	
	//     <div class="weui_loading" v-if="type === 'loading'">
	
	//       <div v-for="n in 12" class="weui_loading_leaf" :class="'weui_loading_leaf_' + n"></div>
	
	//     </div>
	
	//     <i class="weui_icon_toast" v-else></i>
	
	//     <div class="weui_toast_content"><slot></slot></div>
	
	//   </div>
	
	// </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    /**
	     * toast类型
	     * icon: 包含图标的提示框（默认）
	     * loading: 包含loading动画的提示框
	     */
	    type: {
	      type: String,
	      required: false,
	      default: 'icon'
	    }
	  }
	};
	// </script>

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"{'weui_loading_toast': type === 'loading'}\">\r\n  <div class=\"weui_mask_transparent\"></div>\r\n  <div class=\"weui_toast\">\r\n    <div class=\"weui_loading\" v-if=\"type === 'loading'\">\r\n      <div v-for=\"n in 12\" class=\"weui_loading_leaf\" :class=\"'weui_loading_leaf_' + n\"></div>\r\n    </div>\r\n    <i class=\"weui_icon_toast\" v-else></i>\r\n    <div class=\"weui_toast_content\"><slot></slot></div>\r\n  </div>\r\n</div>";

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(86)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(87)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./dialog.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./dialog.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./dialog.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./dialog.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./dialog.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	
	// <div :class="'weui_dialog_' + type" v-show="show">
	
	//   <div class="weui_mask"></div>
	
	//   <div class="weui_dialog">
	
	//     <div class="weui_dialog_hd">
	
	//       <div class="weui_dialog_title">{{title}}</div>
	
	//     </div>
	
	//     <div class="weui_dialog_bd"><slot></slot></div>
	
	//     <div class="weui_dialog_ft">
	
	//       <a v-if="type === 'confirm'" href="javascript:;" class="weui_btn_dialog default" @click="dispathEventAndClose('weui-dialog-cancel')">{{cancelButton}}</a>
	
	//       <a href="javascript:;" class="weui_btn_dialog primary" @click="dispathEventAndClose('weui-dialog-confirm')">{{confirmButton}}</a>
	
	//     </div>
	
	//   </div>
	
	// </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    /**
	     * 对话框类型
	     * alert: 提示框，只包含确定按钮（默认）
	     * confirm: 询问框，包含确定和取消按钮
	     */
	    type: {
	      type: String,
	      required: false,
	      default: 'alert'
	    },
	
	    /**
	     * 对话框标题
	     */
	    title: {
	      type: String,
	      required: true
	    },
	
	    /**
	     * 确定按钮名称
	     */
	    confirmButton: {
	      type: String,
	      required: false,
	      default: '确定'
	    },
	
	    /**
	     * 取消按钮名称
	     */
	    cancelButton: {
	      type: String,
	      required: false,
	      default: '取消'
	    }
	
	  },
	
	  methods: {
	    dispathEventAndClose: function dispathEventAndClose(event) {
	      this.$dispatch(event);
	    }
	  }
	};
	// </script>

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"'weui_dialog_' + type\" v-show=\"show\">\r\n  <div class=\"weui_mask\"></div>\r\n  <div class=\"weui_dialog\">\r\n    <div class=\"weui_dialog_hd\">\r\n      <div class=\"weui_dialog_title\">{{title}}</div>\r\n    </div>\r\n    <div class=\"weui_dialog_bd\"><slot></slot></div>\r\n    <div class=\"weui_dialog_ft\">\r\n      <a v-if=\"type === 'confirm'\" href=\"javascript:;\" class=\"weui_btn_dialog default\" @click=\"dispathEventAndClose('weui-dialog-cancel')\">{{cancelButton}}</a>\r\n      <a href=\"javascript:;\" class=\"weui_btn_dialog primary\" @click=\"dispathEventAndClose('weui-dialog-confirm')\">{{confirmButton}}</a>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(89)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(90)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./progress.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./progress.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./progress.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./progress.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./progress.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 89 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	
	// <div class="weui_progress">
	
	//   <div class="weui_progress_bar">
	
	//     <div class="weui_progress_inner_bar" :style="{width: progress + '%'}"></div>
	
	//   </div>
	
	//   <a v-if="hasCancelButton" href="javascript:;" class="weui_progress_opr" @click="dispatchEvent('weui-progress-cancel')">
	
	//     <i class="weui_icon_cancel"></i>
	
	//   </a>
	
	// </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    /**
	     * 进度，最小为0，最大为100
	     */
	    progress: {
	      type: Number,
	      required: true,
	      validator: function validator(value) {
	        return value >= 0 && value <= 100;
	      },
	
	      default: 0
	    },
	
	    /**
	     * 是否包含取消按钮，若有，则点击时会出发weui-progress-cancel事件
	     */
	    hasCancelButton: {
	      type: Boolean,
	      required: false,
	      default: true
	    }
	  },
	
	  methods: {
	    dispatchEvent: function dispatchEvent(event) {
	      this.$dispatch(event);
	    }
	  }
	};
	// </script>

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui_progress\">\r\n  <div class=\"weui_progress_bar\">\r\n    <div class=\"weui_progress_inner_bar\" :style=\"{width: progress + '%'}\"></div>\r\n  </div>\r\n  <a v-if=\"hasCancelButton\" href=\"javascript:;\" class=\"weui_progress_opr\" @click=\"dispatchEvent('weui-progress-cancel')\">\r\n    <i class=\"weui_icon_cancel\"></i>\r\n  </a>\r\n</div>";

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(92)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(93)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./message.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./message.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./message.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./message.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./message.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 92 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	
	// <div class="weui_msg">
	
	//   <div class="weui_icon_area" v-if="icon">
	
	//     <i :class="['weui_icon_msg', 'weui_icon_' + icon]"></i>
	
	//   </div>
	
	//   <div class="weui_text_area">
	
	//     <h2 class="weui_msg_title" v-if="title">{{title}}</h2>
	
	//     <div class="weui_msg_desc"><slot name="content"></slot></div>
	
	//   </div>
	
	//   <div class="weui_opr_area">
	
	//     <slot name="operation"></slot>
	
	//   </div>
	
	//   <div class="weui_extra_area">
	
	//     <slot name="extra"></slot>
	
	//   </div>
	
	// </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    /**
	     * 消息图标名称
	     * 若设置，则会在最上方显示大图标
	     */
	    icon: {
	      type: String,
	      required: false
	    },
	
	    /**
	     * 消息标题
	     */
	    title: {
	      type: String,
	      required: false
	    }
	  }
	};
	// </script>

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui_msg\">\r\n  <div class=\"weui_icon_area\" v-if=\"icon\">\r\n    <i :class=\"['weui_icon_msg', 'weui_icon_' + icon]\"></i>\r\n  </div>\r\n  <div class=\"weui_text_area\">\r\n    <h2 class=\"weui_msg_title\" v-if=\"title\">{{title}}</h2>\r\n    <div class=\"weui_msg_desc\"><slot name=\"content\"></slot></div>\r\n  </div>\r\n  <div class=\"weui_opr_area\">\r\n    <slot name=\"operation\"></slot>\r\n  </div>\r\n  <div class=\"weui_extra_area\">\r\n    <slot name=\"extra\"></slot>\r\n  </div>\r\n</div>";

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(95)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./article.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./article.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./article.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = "<article class=\"weui_article\">\r\n  <slot></slot>\r\n</article>";

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(97)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(98)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./actionsheet.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./actionsheet.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./actionsheet.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./actionsheet.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./actionsheet.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	
	//   <div class="actionsheet_wrap">
	
	//     <div class="weui_mask_transition" :class="{'weui_fade_toggle': show}" :style="{display: show ? 'block' : 'none'}" @click="hideActionSheet"></div>
	
	//     <div class="weui_actionsheet" :class="{'weui_actionsheet_toggle': show}">
	
	//       <div class="weui_actionsheet_menu">
	
	//         <div class="weui_actionsheet_cell" v-for="(key, text) in menus" @click="dispatchEvent('weui-menu-click', key)">
	
	//           {{{text}}}
	
	//         </div>
	
	//       </div>
	
	//       <div class="weui_actionsheet_action">
	
	//         <div class="weui_actionsheet_cell" v-for="(key, text) in actions" @click="dispatchEvent('weui-action-click', key)">
	
	//           {{{text}}}
	
	//         </div>
	
	//       </div>
	
	//     </div>
	
	//   </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    /**
	     * 双向绑定的数据，用于控制是否显示Actionsheet
	     */
	    show: {
	      type: Boolean,
	      required: true,
	      twoWay: true
	    },
	
	    /**
	     * 菜单键值对
	     */
	    menus: {
	      type: Object,
	      required: false,
	      default: {}
	    },
	
	    /**
	     * 操作项键值对
	     */
	    actions: {
	      type: Object,
	      required: false,
	      default: {}
	    }
	  },
	
	  methods: {
	    dispatchEvent: function dispatchEvent(event, message) {
	      this.$dispatch(event, message);
	      if (event === 'weui-action-click') {
	        this.hideActionSheet();
	      }
	    },
	    hideActionSheet: function hideActionSheet() {
	      this.show = false;
	    }
	  }
	};
	// </script>

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "<div class=\"actionsheet_wrap\">\r\n    <div class=\"weui_mask_transition\" :class=\"{'weui_fade_toggle': show}\" :style=\"{display: show ? 'block' : 'none'}\" @click=\"hideActionSheet\"></div>\r\n    <div class=\"weui_actionsheet\" :class=\"{'weui_actionsheet_toggle': show}\">\r\n      <div class=\"weui_actionsheet_menu\">\r\n        <div class=\"weui_actionsheet_cell\" v-for=\"(key, text) in menus\" @click=\"dispatchEvent('weui-menu-click', key)\">\r\n          {{{text}}}\r\n        </div>\r\n      </div>\r\n      <div class=\"weui_actionsheet_action\">\r\n        <div class=\"weui_actionsheet_cell\" v-for=\"(key, text) in actions\" @click=\"dispatchEvent('weui-action-click', key)\">\r\n          {{{text}}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(100)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(101)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./icon.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./icon.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./icon.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./icon.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./icon.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 100 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	
	// <i :class="[nameClass, typeClass]"></i>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    /**
	     * 图标名称，可能的取值有
	     * success, success_circle, success_no_circle,
	     * info, waiting, waiting_circle, circle,
	     * warn, download, info_circle, cancel
	     */
	    name: {
	      type: String,
	      required: true
	    },
	
	    /**
	     * 图标类型
	     * default: 默认小图标（默认）
	     * message: 用于消息页的大图标
	     * safe: 轮廓为盾牌的大图标
	     */
	    type: {
	      type: String,
	      required: false,
	      default: 'default'
	    }
	  },
	
	  computed: {
	    nameClass: function nameClass() {
	      return 'weui_icon' + (this.type === 'safe' ? '_safe' : '') + '_' + this.name;
	    },
	    typeClass: function typeClass() {
	      switch (this.type) {
	        case 'message':
	          return 'weui_icon_msg';
	        case 'safe':
	          return 'weui_icon_safe';
	        default:
	          return false;
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = "<i :class=\"[nameClass, typeClass]\"></i>";

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(103)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./grids.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./grids.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./grids.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui_grids\"><slot></slot></div>";

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(105)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(106)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./grid.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./grid.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./grid.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./grid.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./grid.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 105 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	
	// <a :href="link" v-link="routerLink" class="weui_grid">
	
	//   <div class="weui_grid_icon" v-if="imageUrl">
	
	//     <img :src="imageUrl" alt="">
	
	//   </div>
	
	//   <p class="weui_grid_label" v-if="label">{{label}}</p>
	
	// </a>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    /**
	     * 跳转链接，会添加在标签的href属性中
	     */
	    link: {
	      type: String,
	      required: false
	    },
	
	    /**
	     * vue-router使用的跳转链接
	     * 若使用vue-router，推荐使用router-link而非link
	     * 会添加在v-link属性中
	     */
	    routerLink: {
	      type: null,
	      required: false
	    },
	
	    /**
	     * 图标地址
	     */
	    imageUrl: {
	      type: String,
	      required: false
	    },
	
	    /**
	     * 标签，显示在图标下方
	     */
	    label: {
	      type: null,
	      required: false
	    }
	  }
	};
	// </script>

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = "<a :href=\"link\" v-link=\"routerLink\" class=\"weui_grid\">\r\n  <div class=\"weui_grid_icon\" v-if=\"imageUrl\">\r\n    <img :src=\"imageUrl\" alt=\"\">\r\n  </div>\r\n  <p class=\"weui_grid_label\" v-if=\"label\">{{label}}</p>\r\n</a>";

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(108)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(109)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./uploader.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./uploader.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./uploader.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./uploader.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./uploader.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cell = __webpack_require__(44);
	
	var _cell2 = _interopRequireDefault(_cell);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    /**
	     * 已上传文件数量
	     * 注意，Uploader并不会对真实文件数量进行控制，count仅用于显示
	     */
	    count: {
	      type: Number,
	      required: false,
	      validator: function validator(value) {
	        return value >= 0;
	      }
	    },
	
	    /**
	     * 显示的最大可上传数量
	     * 注意，Uploader并不会对真实文件数量进行控制，maxlength仅用于显示
	     */
	    maxlength: {
	      type: Number,
	      required: false,
	      validator: function validator(value) {
	        return value > 0;
	      }
	    },
	
	    /**
	     * 是否包含input元素
	     */
	    hasInput: {
	      type: Boolean,
	      required: false,
	      default: true
	    }
	  },
	
	  methods: {
	    dispatchChange: function dispatchChange(event) {
	      this.$dispatch('weui-input-change', event);
	    }
	  },
	
	  components: {
	    Cell: _cell2.default
	  }
	};
	// </script>
	// <template>

	// <div class="weui_uploader">

	//   <cell class="weui_uploader_hd">

	//     <span slot="body"><slot name="title"></slot></span>

	//     <span slot="footer" v-if="count >= 0 && maxlength > 0">{{count}}/{{maxlength}}</span>

	//   </cell>

	//   <div class="weui_uploader_bd">

	//     <slot name="uploader-files"></slot>

	//     <div class="weui_uploader_input_wrp" v-if="hasInput">

	//       <input type="file" class="weui_uploader_input" accept="image/jpg,image/jpeg,image/png,image/gif" multiple @change="dispatchChange">

	//     </div>

	//   </div>

	// </div>

	// </template>

	// <script>

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui_uploader\">\r\n  <cell class=\"weui_uploader_hd\">\r\n    <span slot=\"body\"><slot name=\"title\"></slot></span>\r\n    <span slot=\"footer\" v-if=\"count >= 0 && maxlength > 0\">{{count}}/{{maxlength}}</span>\r\n  </cell>\r\n  <div class=\"weui_uploader_bd\">\r\n    <slot name=\"uploader-files\"></slot>\r\n    <div class=\"weui_uploader_input_wrp\" v-if=\"hasInput\">\r\n      <input type=\"file\" class=\"weui_uploader_input\" accept=\"image/jpg,image/jpeg,image/png,image/gif\" multiple @change=\"dispatchChange\">\r\n    </div>\r\n  </div>\r\n</div>";

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(111)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./uploader-files.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./uploader-files.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./uploader-files.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui_uploader_files\"><slot></slot></div>";

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(113)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(114)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./uploader-file.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./uploader-file.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./uploader-file.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./uploader-file.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./uploader-file.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 113 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	
	// <li :class="{'weui_uploader_file': true, 'weui_uploader_status': hasStatus}" :style="{'backgroundImage': 'url(' + imageUrl + ')'}">
	
	//   <div class="weui_uploader_status_content">
	
	//     <slot name="status"></slot>
	
	//   </div>
	
	// </li>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    /**
	     * 预览图的url，将被用于backgroud-image中
	     */
	    imageUrl: {
	      type: String,
	      required: true
	    },
	
	    /**
	     * 是否包含status
	     * 若包含，则预览图片上会添加黑色蒙层
	     */
	    hasStatus: {
	      type: Boolean,
	      required: false,
	      default: false
	    }
	  }
	};
	// </script>

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = "<li :class=\"{'weui_uploader_file': true, 'weui_uploader_status': hasStatus}\" :style=\"{'backgroundImage': 'url(' + imageUrl + ')'}\">\r\n  <div class=\"weui_uploader_status_content\">\r\n    <slot name=\"status\"></slot>\r\n  </div>\r\n</li>";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-weui.js.map