"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../../node_modules/lodash/_baseHas.js
  var require_baseHas = __commonJS({
    "../../node_modules/lodash/_baseHas.js"(exports, module) {
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseHas(object2, key) {
        return object2 != null && hasOwnProperty.call(object2, key);
      }
      module.exports = baseHas;
    }
  });

  // ../../node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "../../node_modules/lodash/isArray.js"(exports, module) {
      var isArray = Array.isArray;
      module.exports = isArray;
    }
  });

  // ../../node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "../../node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // ../../node_modules/lodash/_root.js
  var require_root = __commonJS({
    "../../node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // ../../node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "../../node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // ../../node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "../../node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result2 = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result2;
      }
      module.exports = getRawTag;
    }
  });

  // ../../node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "../../node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // ../../node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "../../node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // ../../node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "../../node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // ../../node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "../../node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // ../../node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "../../node_modules/lodash/_isKey.js"(exports, module) {
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value, object2) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object2 != null && value in Object(object2);
      }
      module.exports = isKey;
    }
  });

  // ../../node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "../../node_modules/lodash/isObject.js"(exports, module) {
      function isObject4(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject4;
    }
  });

  // ../../node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "../../node_modules/lodash/isFunction.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObject4 = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject4(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction;
    }
  });

  // ../../node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "../../node_modules/lodash/_coreJsData.js"(exports, module) {
      var root = require_root();
      var coreJsData = root["__core-js_shared__"];
      module.exports = coreJsData;
    }
  });

  // ../../node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "../../node_modules/lodash/_isMasked.js"(exports, module) {
      var coreJsData = require_coreJsData();
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      module.exports = isMasked;
    }
  });

  // ../../node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "../../node_modules/lodash/_toSource.js"(exports, module) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      module.exports = toSource;
    }
  });

  // ../../node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "../../node_modules/lodash/_baseIsNative.js"(exports, module) {
      var isFunction = require_isFunction();
      var isMasked = require_isMasked();
      var isObject4 = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value) {
        if (!isObject4(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      module.exports = baseIsNative;
    }
  });

  // ../../node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "../../node_modules/lodash/_getValue.js"(exports, module) {
      function getValue(object2, key) {
        return object2 == null ? void 0 : object2[key];
      }
      module.exports = getValue;
    }
  });

  // ../../node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "../../node_modules/lodash/_getNative.js"(exports, module) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object2, key) {
        var value = getValue(object2, key);
        return baseIsNative(value) ? value : void 0;
      }
      module.exports = getNative;
    }
  });

  // ../../node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "../../node_modules/lodash/_nativeCreate.js"(exports, module) {
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module.exports = nativeCreate;
    }
  });

  // ../../node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "../../node_modules/lodash/_hashClear.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module.exports = hashClear;
    }
  });

  // ../../node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "../../node_modules/lodash/_hashDelete.js"(exports, module) {
      function hashDelete(key) {
        var result2 = this.has(key) && delete this.__data__[key];
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      module.exports = hashDelete;
    }
  });

  // ../../node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "../../node_modules/lodash/_hashGet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result2 = data[key];
          return result2 === HASH_UNDEFINED ? void 0 : result2;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      module.exports = hashGet;
    }
  });

  // ../../node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "../../node_modules/lodash/_hashHas.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      module.exports = hashHas;
    }
  });

  // ../../node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "../../node_modules/lodash/_hashSet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      module.exports = hashSet;
    }
  });

  // ../../node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "../../node_modules/lodash/_Hash.js"(exports, module) {
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;
    }
  });

  // ../../node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "../../node_modules/lodash/_listCacheClear.js"(exports, module) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module.exports = listCacheClear;
    }
  });

  // ../../node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "../../node_modules/lodash/eq.js"(exports, module) {
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      module.exports = eq;
    }
  });

  // ../../node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "../../node_modules/lodash/_assocIndexOf.js"(exports, module) {
      var eq = require_eq();
      function assocIndexOf(array2, key) {
        var length = array2.length;
        while (length--) {
          if (eq(array2[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      module.exports = assocIndexOf;
    }
  });

  // ../../node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "../../node_modules/lodash/_listCacheDelete.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      module.exports = listCacheDelete;
    }
  });

  // ../../node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "../../node_modules/lodash/_listCacheGet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      module.exports = listCacheGet;
    }
  });

  // ../../node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "../../node_modules/lodash/_listCacheHas.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      module.exports = listCacheHas;
    }
  });

  // ../../node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "../../node_modules/lodash/_listCacheSet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      module.exports = listCacheSet;
    }
  });

  // ../../node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "../../node_modules/lodash/_ListCache.js"(exports, module) {
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;
    }
  });

  // ../../node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "../../node_modules/lodash/_Map.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Map2 = getNative(root, "Map");
      module.exports = Map2;
    }
  });

  // ../../node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "../../node_modules/lodash/_mapCacheClear.js"(exports, module) {
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      module.exports = mapCacheClear;
    }
  });

  // ../../node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "../../node_modules/lodash/_isKeyable.js"(exports, module) {
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      module.exports = isKeyable;
    }
  });

  // ../../node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "../../node_modules/lodash/_getMapData.js"(exports, module) {
      var isKeyable = require_isKeyable();
      function getMapData(map2, key) {
        var data = map2.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      module.exports = getMapData;
    }
  });

  // ../../node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "../../node_modules/lodash/_mapCacheDelete.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheDelete(key) {
        var result2 = getMapData(this, key)["delete"](key);
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      module.exports = mapCacheDelete;
    }
  });

  // ../../node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "../../node_modules/lodash/_mapCacheGet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      module.exports = mapCacheGet;
    }
  });

  // ../../node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "../../node_modules/lodash/_mapCacheHas.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      module.exports = mapCacheHas;
    }
  });

  // ../../node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "../../node_modules/lodash/_mapCacheSet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      module.exports = mapCacheSet;
    }
  });

  // ../../node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "../../node_modules/lodash/_MapCache.js"(exports, module) {
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;
    }
  });

  // ../../node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "../../node_modules/lodash/memoize.js"(exports, module) {
      var MapCache = require_MapCache();
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result2 = func.apply(this, args);
          memoized.cache = cache.set(key, result2) || cache;
          return result2;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      module.exports = memoize;
    }
  });

  // ../../node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "../../node_modules/lodash/_memoizeCapped.js"(exports, module) {
      var memoize = require_memoize();
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result2 = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result2.cache;
        return result2;
      }
      module.exports = memoizeCapped;
    }
  });

  // ../../node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "../../node_modules/lodash/_stringToPath.js"(exports, module) {
      var memoizeCapped = require_memoizeCapped();
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string2) {
        var result2 = [];
        if (string2.charCodeAt(0) === 46) {
          result2.push("");
        }
        string2.replace(rePropName, function(match, number2, quote, subString) {
          result2.push(quote ? subString.replace(reEscapeChar, "$1") : number2 || match);
        });
        return result2;
      });
      module.exports = stringToPath;
    }
  });

  // ../../node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "../../node_modules/lodash/_arrayMap.js"(exports, module) {
      function arrayMap(array2, iteratee) {
        var index = -1, length = array2 == null ? 0 : array2.length, result2 = Array(length);
        while (++index < length) {
          result2[index] = iteratee(array2[index], index, array2);
        }
        return result2;
      }
      module.exports = arrayMap;
    }
  });

  // ../../node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "../../node_modules/lodash/_baseToString.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var arrayMap = require_arrayMap();
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString2 = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString2 ? symbolToString2.call(value) : "";
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      module.exports = baseToString;
    }
  });

  // ../../node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "../../node_modules/lodash/toString.js"(exports, module) {
      var baseToString = require_baseToString();
      function toString2(value) {
        return value == null ? "" : baseToString(value);
      }
      module.exports = toString2;
    }
  });

  // ../../node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "../../node_modules/lodash/_castPath.js"(exports, module) {
      var isArray = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString2 = require_toString();
      function castPath(value, object2) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object2) ? [value] : stringToPath(toString2(value));
      }
      module.exports = castPath;
    }
  });

  // ../../node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS({
    "../../node_modules/lodash/_baseIsArguments.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      module.exports = baseIsArguments;
    }
  });

  // ../../node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS({
    "../../node_modules/lodash/isArguments.js"(exports, module) {
      var baseIsArguments = require_baseIsArguments();
      var isObjectLike = require_isObjectLike();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      module.exports = isArguments;
    }
  });

  // ../../node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "../../node_modules/lodash/_isIndex.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      module.exports = isIndex;
    }
  });

  // ../../node_modules/lodash/isLength.js
  var require_isLength = __commonJS({
    "../../node_modules/lodash/isLength.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      module.exports = isLength;
    }
  });

  // ../../node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "../../node_modules/lodash/_toKey.js"(exports, module) {
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      module.exports = toKey;
    }
  });

  // ../../node_modules/lodash/_hasPath.js
  var require_hasPath = __commonJS({
    "../../node_modules/lodash/_hasPath.js"(exports, module) {
      var castPath = require_castPath();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isIndex = require_isIndex();
      var isLength = require_isLength();
      var toKey = require_toKey();
      function hasPath(object2, path, hasFunc) {
        path = castPath(path, object2);
        var index = -1, length = path.length, result2 = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result2 = object2 != null && hasFunc(object2, key))) {
            break;
          }
          object2 = object2[key];
        }
        if (result2 || ++index != length) {
          return result2;
        }
        length = object2 == null ? 0 : object2.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object2) || isArguments(object2));
      }
      module.exports = hasPath;
    }
  });

  // ../../node_modules/lodash/has.js
  var require_has = __commonJS({
    "../../node_modules/lodash/has.js"(exports, module) {
      var baseHas = require_baseHas();
      var hasPath = require_hasPath();
      function has4(object2, path) {
        return object2 != null && hasPath(object2, path, baseHas);
      }
      module.exports = has4;
    }
  });

  // ../../node_modules/lodash/_defineProperty.js
  var require_defineProperty = __commonJS({
    "../../node_modules/lodash/_defineProperty.js"(exports, module) {
      var getNative = require_getNative();
      var defineProperty = function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      module.exports = defineProperty;
    }
  });

  // ../../node_modules/lodash/_baseAssignValue.js
  var require_baseAssignValue = __commonJS({
    "../../node_modules/lodash/_baseAssignValue.js"(exports, module) {
      var defineProperty = require_defineProperty();
      function baseAssignValue(object2, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object2, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object2[key] = value;
        }
      }
      module.exports = baseAssignValue;
    }
  });

  // ../../node_modules/lodash/_createBaseFor.js
  var require_createBaseFor = __commonJS({
    "../../node_modules/lodash/_createBaseFor.js"(exports, module) {
      function createBaseFor(fromRight) {
        return function(object2, iteratee, keysFunc) {
          var index = -1, iterable = Object(object2), props = keysFunc(object2), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object2;
        };
      }
      module.exports = createBaseFor;
    }
  });

  // ../../node_modules/lodash/_baseFor.js
  var require_baseFor = __commonJS({
    "../../node_modules/lodash/_baseFor.js"(exports, module) {
      var createBaseFor = require_createBaseFor();
      var baseFor = createBaseFor();
      module.exports = baseFor;
    }
  });

  // ../../node_modules/lodash/_baseTimes.js
  var require_baseTimes = __commonJS({
    "../../node_modules/lodash/_baseTimes.js"(exports, module) {
      function baseTimes(n, iteratee) {
        var index = -1, result2 = Array(n);
        while (++index < n) {
          result2[index] = iteratee(index);
        }
        return result2;
      }
      module.exports = baseTimes;
    }
  });

  // ../../node_modules/lodash/stubFalse.js
  var require_stubFalse = __commonJS({
    "../../node_modules/lodash/stubFalse.js"(exports, module) {
      function stubFalse() {
        return false;
      }
      module.exports = stubFalse;
    }
  });

  // ../../node_modules/lodash/isBuffer.js
  var require_isBuffer = __commonJS({
    "../../node_modules/lodash/isBuffer.js"(exports, module) {
      var root = require_root();
      var stubFalse = require_stubFalse();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      module.exports = isBuffer;
    }
  });

  // ../../node_modules/lodash/_baseIsTypedArray.js
  var require_baseIsTypedArray = __commonJS({
    "../../node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isLength = require_isLength();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      module.exports = baseIsTypedArray;
    }
  });

  // ../../node_modules/lodash/_baseUnary.js
  var require_baseUnary = __commonJS({
    "../../node_modules/lodash/_baseUnary.js"(exports, module) {
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      module.exports = baseUnary;
    }
  });

  // ../../node_modules/lodash/_nodeUtil.js
  var require_nodeUtil = __commonJS({
    "../../node_modules/lodash/_nodeUtil.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      module.exports = nodeUtil;
    }
  });

  // ../../node_modules/lodash/isTypedArray.js
  var require_isTypedArray = __commonJS({
    "../../node_modules/lodash/isTypedArray.js"(exports, module) {
      var baseIsTypedArray = require_baseIsTypedArray();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module.exports = isTypedArray;
    }
  });

  // ../../node_modules/lodash/_arrayLikeKeys.js
  var require_arrayLikeKeys = __commonJS({
    "../../node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
      var baseTimes = require_baseTimes();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isIndex = require_isIndex();
      var isTypedArray = require_isTypedArray();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String) : [], length = result2.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
          isIndex(key, length)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      module.exports = arrayLikeKeys;
    }
  });

  // ../../node_modules/lodash/_isPrototype.js
  var require_isPrototype = __commonJS({
    "../../node_modules/lodash/_isPrototype.js"(exports, module) {
      var objectProto = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      module.exports = isPrototype;
    }
  });

  // ../../node_modules/lodash/_overArg.js
  var require_overArg = __commonJS({
    "../../node_modules/lodash/_overArg.js"(exports, module) {
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      module.exports = overArg;
    }
  });

  // ../../node_modules/lodash/_nativeKeys.js
  var require_nativeKeys = __commonJS({
    "../../node_modules/lodash/_nativeKeys.js"(exports, module) {
      var overArg = require_overArg();
      var nativeKeys = overArg(Object.keys, Object);
      module.exports = nativeKeys;
    }
  });

  // ../../node_modules/lodash/_baseKeys.js
  var require_baseKeys = __commonJS({
    "../../node_modules/lodash/_baseKeys.js"(exports, module) {
      var isPrototype = require_isPrototype();
      var nativeKeys = require_nativeKeys();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeys(object2) {
        if (!isPrototype(object2)) {
          return nativeKeys(object2);
        }
        var result2 = [];
        for (var key in Object(object2)) {
          if (hasOwnProperty.call(object2, key) && key != "constructor") {
            result2.push(key);
          }
        }
        return result2;
      }
      module.exports = baseKeys;
    }
  });

  // ../../node_modules/lodash/isArrayLike.js
  var require_isArrayLike = __commonJS({
    "../../node_modules/lodash/isArrayLike.js"(exports, module) {
      var isFunction = require_isFunction();
      var isLength = require_isLength();
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      module.exports = isArrayLike;
    }
  });

  // ../../node_modules/lodash/keys.js
  var require_keys = __commonJS({
    "../../node_modules/lodash/keys.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeys = require_baseKeys();
      var isArrayLike = require_isArrayLike();
      function keys(object2) {
        return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
      }
      module.exports = keys;
    }
  });

  // ../../node_modules/lodash/_baseForOwn.js
  var require_baseForOwn = __commonJS({
    "../../node_modules/lodash/_baseForOwn.js"(exports, module) {
      var baseFor = require_baseFor();
      var keys = require_keys();
      function baseForOwn(object2, iteratee) {
        return object2 && baseFor(object2, iteratee, keys);
      }
      module.exports = baseForOwn;
    }
  });

  // ../../node_modules/lodash/_stackClear.js
  var require_stackClear = __commonJS({
    "../../node_modules/lodash/_stackClear.js"(exports, module) {
      var ListCache = require_ListCache();
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      module.exports = stackClear;
    }
  });

  // ../../node_modules/lodash/_stackDelete.js
  var require_stackDelete = __commonJS({
    "../../node_modules/lodash/_stackDelete.js"(exports, module) {
      function stackDelete(key) {
        var data = this.__data__, result2 = data["delete"](key);
        this.size = data.size;
        return result2;
      }
      module.exports = stackDelete;
    }
  });

  // ../../node_modules/lodash/_stackGet.js
  var require_stackGet = __commonJS({
    "../../node_modules/lodash/_stackGet.js"(exports, module) {
      function stackGet(key) {
        return this.__data__.get(key);
      }
      module.exports = stackGet;
    }
  });

  // ../../node_modules/lodash/_stackHas.js
  var require_stackHas = __commonJS({
    "../../node_modules/lodash/_stackHas.js"(exports, module) {
      function stackHas(key) {
        return this.__data__.has(key);
      }
      module.exports = stackHas;
    }
  });

  // ../../node_modules/lodash/_stackSet.js
  var require_stackSet = __commonJS({
    "../../node_modules/lodash/_stackSet.js"(exports, module) {
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      var MapCache = require_MapCache();
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      module.exports = stackSet;
    }
  });

  // ../../node_modules/lodash/_Stack.js
  var require_Stack = __commonJS({
    "../../node_modules/lodash/_Stack.js"(exports, module) {
      var ListCache = require_ListCache();
      var stackClear = require_stackClear();
      var stackDelete = require_stackDelete();
      var stackGet = require_stackGet();
      var stackHas = require_stackHas();
      var stackSet = require_stackSet();
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      module.exports = Stack;
    }
  });

  // ../../node_modules/lodash/_setCacheAdd.js
  var require_setCacheAdd = __commonJS({
    "../../node_modules/lodash/_setCacheAdd.js"(exports, module) {
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      module.exports = setCacheAdd;
    }
  });

  // ../../node_modules/lodash/_setCacheHas.js
  var require_setCacheHas = __commonJS({
    "../../node_modules/lodash/_setCacheHas.js"(exports, module) {
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      module.exports = setCacheHas;
    }
  });

  // ../../node_modules/lodash/_SetCache.js
  var require_SetCache = __commonJS({
    "../../node_modules/lodash/_SetCache.js"(exports, module) {
      var MapCache = require_MapCache();
      var setCacheAdd = require_setCacheAdd();
      var setCacheHas = require_setCacheHas();
      function SetCache(values) {
        var index = -1, length = values == null ? 0 : values.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values[index]);
        }
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      module.exports = SetCache;
    }
  });

  // ../../node_modules/lodash/_arraySome.js
  var require_arraySome = __commonJS({
    "../../node_modules/lodash/_arraySome.js"(exports, module) {
      function arraySome(array2, predicate) {
        var index = -1, length = array2 == null ? 0 : array2.length;
        while (++index < length) {
          if (predicate(array2[index], index, array2)) {
            return true;
          }
        }
        return false;
      }
      module.exports = arraySome;
    }
  });

  // ../../node_modules/lodash/_cacheHas.js
  var require_cacheHas = __commonJS({
    "../../node_modules/lodash/_cacheHas.js"(exports, module) {
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      module.exports = cacheHas;
    }
  });

  // ../../node_modules/lodash/_equalArrays.js
  var require_equalArrays = __commonJS({
    "../../node_modules/lodash/_equalArrays.js"(exports, module) {
      var SetCache = require_SetCache();
      var arraySome = require_arraySome();
      var cacheHas = require_cacheHas();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function equalArrays(array2, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array2.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array2);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array2;
        }
        var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
        stack.set(array2, other);
        stack.set(other, array2);
        while (++index < arrLength) {
          var arrValue = array2[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array2, stack) : customizer(arrValue, othValue, index, array2, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result2 = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result2 = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result2 = false;
            break;
          }
        }
        stack["delete"](array2);
        stack["delete"](other);
        return result2;
      }
      module.exports = equalArrays;
    }
  });

  // ../../node_modules/lodash/_Uint8Array.js
  var require_Uint8Array = __commonJS({
    "../../node_modules/lodash/_Uint8Array.js"(exports, module) {
      var root = require_root();
      var Uint8Array2 = root.Uint8Array;
      module.exports = Uint8Array2;
    }
  });

  // ../../node_modules/lodash/_mapToArray.js
  var require_mapToArray = __commonJS({
    "../../node_modules/lodash/_mapToArray.js"(exports, module) {
      function mapToArray(map2) {
        var index = -1, result2 = Array(map2.size);
        map2.forEach(function(value, key) {
          result2[++index] = [key, value];
        });
        return result2;
      }
      module.exports = mapToArray;
    }
  });

  // ../../node_modules/lodash/_setToArray.js
  var require_setToArray = __commonJS({
    "../../node_modules/lodash/_setToArray.js"(exports, module) {
      function setToArray(set2) {
        var index = -1, result2 = Array(set2.size);
        set2.forEach(function(value) {
          result2[++index] = value;
        });
        return result2;
      }
      module.exports = setToArray;
    }
  });

  // ../../node_modules/lodash/_equalByTag.js
  var require_equalByTag = __commonJS({
    "../../node_modules/lodash/_equalByTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var Uint8Array2 = require_Uint8Array();
      var eq = require_eq();
      var equalArrays = require_equalArrays();
      var mapToArray = require_mapToArray();
      var setToArray = require_setToArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function equalByTag(object2, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object2.byteLength != other.byteLength || object2.byteOffset != other.byteOffset) {
              return false;
            }
            object2 = object2.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object2.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object2), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object2, +other);
          case errorTag:
            return object2.name == other.name && object2.message == other.message;
          case regexpTag:
          case stringTag:
            return object2 == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object2.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object2);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object2, other);
            var result2 = equalArrays(convert(object2), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object2);
            return result2;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object2) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      module.exports = equalByTag;
    }
  });

  // ../../node_modules/lodash/_arrayPush.js
  var require_arrayPush = __commonJS({
    "../../node_modules/lodash/_arrayPush.js"(exports, module) {
      function arrayPush(array2, values) {
        var index = -1, length = values.length, offset = array2.length;
        while (++index < length) {
          array2[offset + index] = values[index];
        }
        return array2;
      }
      module.exports = arrayPush;
    }
  });

  // ../../node_modules/lodash/_baseGetAllKeys.js
  var require_baseGetAllKeys = __commonJS({
    "../../node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isArray = require_isArray();
      function baseGetAllKeys(object2, keysFunc, symbolsFunc) {
        var result2 = keysFunc(object2);
        return isArray(object2) ? result2 : arrayPush(result2, symbolsFunc(object2));
      }
      module.exports = baseGetAllKeys;
    }
  });

  // ../../node_modules/lodash/_arrayFilter.js
  var require_arrayFilter = __commonJS({
    "../../node_modules/lodash/_arrayFilter.js"(exports, module) {
      function arrayFilter(array2, predicate) {
        var index = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result2 = [];
        while (++index < length) {
          var value = array2[index];
          if (predicate(value, index, array2)) {
            result2[resIndex++] = value;
          }
        }
        return result2;
      }
      module.exports = arrayFilter;
    }
  });

  // ../../node_modules/lodash/stubArray.js
  var require_stubArray = __commonJS({
    "../../node_modules/lodash/stubArray.js"(exports, module) {
      function stubArray() {
        return [];
      }
      module.exports = stubArray;
    }
  });

  // ../../node_modules/lodash/_getSymbols.js
  var require_getSymbols = __commonJS({
    "../../node_modules/lodash/_getSymbols.js"(exports, module) {
      var arrayFilter = require_arrayFilter();
      var stubArray = require_stubArray();
      var objectProto = Object.prototype;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols ? stubArray : function(object2) {
        if (object2 == null) {
          return [];
        }
        object2 = Object(object2);
        return arrayFilter(nativeGetSymbols(object2), function(symbol) {
          return propertyIsEnumerable.call(object2, symbol);
        });
      };
      module.exports = getSymbols;
    }
  });

  // ../../node_modules/lodash/_getAllKeys.js
  var require_getAllKeys = __commonJS({
    "../../node_modules/lodash/_getAllKeys.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbols = require_getSymbols();
      var keys = require_keys();
      function getAllKeys(object2) {
        return baseGetAllKeys(object2, keys, getSymbols);
      }
      module.exports = getAllKeys;
    }
  });

  // ../../node_modules/lodash/_equalObjects.js
  var require_equalObjects = __commonJS({
    "../../node_modules/lodash/_equalObjects.js"(exports, module) {
      var getAllKeys = require_getAllKeys();
      var COMPARE_PARTIAL_FLAG = 1;
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function equalObjects(object2, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object2), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object2);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object2;
        }
        var result2 = true;
        stack.set(object2, other);
        stack.set(other, object2);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object2[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object2, stack) : customizer(objValue, othValue, key, object2, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result2 = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result2 && !skipCtor) {
          var objCtor = object2.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object2 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result2 = false;
          }
        }
        stack["delete"](object2);
        stack["delete"](other);
        return result2;
      }
      module.exports = equalObjects;
    }
  });

  // ../../node_modules/lodash/_DataView.js
  var require_DataView = __commonJS({
    "../../node_modules/lodash/_DataView.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var DataView = getNative(root, "DataView");
      module.exports = DataView;
    }
  });

  // ../../node_modules/lodash/_Promise.js
  var require_Promise = __commonJS({
    "../../node_modules/lodash/_Promise.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Promise2 = getNative(root, "Promise");
      module.exports = Promise2;
    }
  });

  // ../../node_modules/lodash/_Set.js
  var require_Set = __commonJS({
    "../../node_modules/lodash/_Set.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Set2 = getNative(root, "Set");
      module.exports = Set2;
    }
  });

  // ../../node_modules/lodash/_WeakMap.js
  var require_WeakMap = __commonJS({
    "../../node_modules/lodash/_WeakMap.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var WeakMap = getNative(root, "WeakMap");
      module.exports = WeakMap;
    }
  });

  // ../../node_modules/lodash/_getTag.js
  var require_getTag = __commonJS({
    "../../node_modules/lodash/_getTag.js"(exports, module) {
      var DataView = require_DataView();
      var Map2 = require_Map();
      var Promise2 = require_Promise();
      var Set2 = require_Set();
      var WeakMap = require_WeakMap();
      var baseGetTag = require_baseGetTag();
      var toSource = require_toSource();
      var mapTag = "[object Map]";
      var objectTag = "[object Object]";
      var promiseTag = "[object Promise]";
      var setTag = "[object Set]";
      var weakMapTag = "[object WeakMap]";
      var dataViewTag = "[object DataView]";
      var dataViewCtorString = toSource(DataView);
      var mapCtorString = toSource(Map2);
      var promiseCtorString = toSource(Promise2);
      var setCtorString = toSource(Set2);
      var weakMapCtorString = toSource(WeakMap);
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
        getTag = function(value) {
          var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result2;
        };
      }
      module.exports = getTag;
    }
  });

  // ../../node_modules/lodash/_baseIsEqualDeep.js
  var require_baseIsEqualDeep = __commonJS({
    "../../node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
      var Stack = require_Stack();
      var equalArrays = require_equalArrays();
      var equalByTag = require_equalByTag();
      var equalObjects = require_equalObjects();
      var getTag = require_getTag();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isTypedArray = require_isTypedArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var objectTag = "[object Object]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseIsEqualDeep(object2, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object2), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object2), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object2)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object2) ? equalArrays(object2, other, bitmask, customizer, equalFunc, stack) : equalByTag(object2, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object2, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object2.value() : object2, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object2, other, bitmask, customizer, equalFunc, stack);
      }
      module.exports = baseIsEqualDeep;
    }
  });

  // ../../node_modules/lodash/_baseIsEqual.js
  var require_baseIsEqual = __commonJS({
    "../../node_modules/lodash/_baseIsEqual.js"(exports, module) {
      var baseIsEqualDeep = require_baseIsEqualDeep();
      var isObjectLike = require_isObjectLike();
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      module.exports = baseIsEqual;
    }
  });

  // ../../node_modules/lodash/_baseIsMatch.js
  var require_baseIsMatch = __commonJS({
    "../../node_modules/lodash/_baseIsMatch.js"(exports, module) {
      var Stack = require_Stack();
      var baseIsEqual = require_baseIsEqual();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseIsMatch(object2, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object2 == null) {
          return !length;
        }
        object2 = Object(object2);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object2[data[0]] : !(data[0] in object2)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object2[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === void 0 && !(key in object2)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result2 = customizer(objValue, srcValue, key, object2, source, stack);
            }
            if (!(result2 === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
              return false;
            }
          }
        }
        return true;
      }
      module.exports = baseIsMatch;
    }
  });

  // ../../node_modules/lodash/_isStrictComparable.js
  var require_isStrictComparable = __commonJS({
    "../../node_modules/lodash/_isStrictComparable.js"(exports, module) {
      var isObject4 = require_isObject();
      function isStrictComparable(value) {
        return value === value && !isObject4(value);
      }
      module.exports = isStrictComparable;
    }
  });

  // ../../node_modules/lodash/_getMatchData.js
  var require_getMatchData = __commonJS({
    "../../node_modules/lodash/_getMatchData.js"(exports, module) {
      var isStrictComparable = require_isStrictComparable();
      var keys = require_keys();
      function getMatchData(object2) {
        var result2 = keys(object2), length = result2.length;
        while (length--) {
          var key = result2[length], value = object2[key];
          result2[length] = [key, value, isStrictComparable(value)];
        }
        return result2;
      }
      module.exports = getMatchData;
    }
  });

  // ../../node_modules/lodash/_matchesStrictComparable.js
  var require_matchesStrictComparable = __commonJS({
    "../../node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
      function matchesStrictComparable(key, srcValue) {
        return function(object2) {
          if (object2 == null) {
            return false;
          }
          return object2[key] === srcValue && (srcValue !== void 0 || key in Object(object2));
        };
      }
      module.exports = matchesStrictComparable;
    }
  });

  // ../../node_modules/lodash/_baseMatches.js
  var require_baseMatches = __commonJS({
    "../../node_modules/lodash/_baseMatches.js"(exports, module) {
      var baseIsMatch = require_baseIsMatch();
      var getMatchData = require_getMatchData();
      var matchesStrictComparable = require_matchesStrictComparable();
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object2) {
          return object2 === source || baseIsMatch(object2, source, matchData);
        };
      }
      module.exports = baseMatches;
    }
  });

  // ../../node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "../../node_modules/lodash/_baseGet.js"(exports, module) {
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object2, path) {
        path = castPath(path, object2);
        var index = 0, length = path.length;
        while (object2 != null && index < length) {
          object2 = object2[toKey(path[index++])];
        }
        return index && index == length ? object2 : void 0;
      }
      module.exports = baseGet;
    }
  });

  // ../../node_modules/lodash/get.js
  var require_get = __commonJS({
    "../../node_modules/lodash/get.js"(exports, module) {
      var baseGet = require_baseGet();
      function get(object2, path, defaultValue) {
        var result2 = object2 == null ? void 0 : baseGet(object2, path);
        return result2 === void 0 ? defaultValue : result2;
      }
      module.exports = get;
    }
  });

  // ../../node_modules/lodash/_baseHasIn.js
  var require_baseHasIn = __commonJS({
    "../../node_modules/lodash/_baseHasIn.js"(exports, module) {
      function baseHasIn(object2, key) {
        return object2 != null && key in Object(object2);
      }
      module.exports = baseHasIn;
    }
  });

  // ../../node_modules/lodash/hasIn.js
  var require_hasIn = __commonJS({
    "../../node_modules/lodash/hasIn.js"(exports, module) {
      var baseHasIn = require_baseHasIn();
      var hasPath = require_hasPath();
      function hasIn(object2, path) {
        return object2 != null && hasPath(object2, path, baseHasIn);
      }
      module.exports = hasIn;
    }
  });

  // ../../node_modules/lodash/_baseMatchesProperty.js
  var require_baseMatchesProperty = __commonJS({
    "../../node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
      var baseIsEqual = require_baseIsEqual();
      var get = require_get();
      var hasIn = require_hasIn();
      var isKey = require_isKey();
      var isStrictComparable = require_isStrictComparable();
      var matchesStrictComparable = require_matchesStrictComparable();
      var toKey = require_toKey();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object2) {
          var objValue = get(object2, path);
          return objValue === void 0 && objValue === srcValue ? hasIn(object2, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      module.exports = baseMatchesProperty;
    }
  });

  // ../../node_modules/lodash/identity.js
  var require_identity = __commonJS({
    "../../node_modules/lodash/identity.js"(exports, module) {
      function identity(value) {
        return value;
      }
      module.exports = identity;
    }
  });

  // ../../node_modules/lodash/_baseProperty.js
  var require_baseProperty = __commonJS({
    "../../node_modules/lodash/_baseProperty.js"(exports, module) {
      function baseProperty(key) {
        return function(object2) {
          return object2 == null ? void 0 : object2[key];
        };
      }
      module.exports = baseProperty;
    }
  });

  // ../../node_modules/lodash/_basePropertyDeep.js
  var require_basePropertyDeep = __commonJS({
    "../../node_modules/lodash/_basePropertyDeep.js"(exports, module) {
      var baseGet = require_baseGet();
      function basePropertyDeep(path) {
        return function(object2) {
          return baseGet(object2, path);
        };
      }
      module.exports = basePropertyDeep;
    }
  });

  // ../../node_modules/lodash/property.js
  var require_property = __commonJS({
    "../../node_modules/lodash/property.js"(exports, module) {
      var baseProperty = require_baseProperty();
      var basePropertyDeep = require_basePropertyDeep();
      var isKey = require_isKey();
      var toKey = require_toKey();
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      module.exports = property;
    }
  });

  // ../../node_modules/lodash/_baseIteratee.js
  var require_baseIteratee = __commonJS({
    "../../node_modules/lodash/_baseIteratee.js"(exports, module) {
      var baseMatches = require_baseMatches();
      var baseMatchesProperty = require_baseMatchesProperty();
      var identity = require_identity();
      var isArray = require_isArray();
      var property = require_property();
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      module.exports = baseIteratee;
    }
  });

  // ../../node_modules/lodash/mapValues.js
  var require_mapValues = __commonJS({
    "../../node_modules/lodash/mapValues.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var baseForOwn = require_baseForOwn();
      var baseIteratee = require_baseIteratee();
      function mapValues3(object2, iteratee) {
        var result2 = {};
        iteratee = baseIteratee(iteratee, 3);
        baseForOwn(object2, function(value, key, object3) {
          baseAssignValue(result2, key, iteratee(value, key, object3));
        });
        return result2;
      }
      module.exports = mapValues3;
    }
  });

  // ../../node_modules/property-expr/index.js
  var require_property_expr = __commonJS({
    "../../node_modules/property-expr/index.js"(exports, module) {
      "use strict";
      function Cache(maxSize) {
        this._maxSize = maxSize;
        this.clear();
      }
      Cache.prototype.clear = function() {
        this._size = 0;
        this._values = /* @__PURE__ */ Object.create(null);
      };
      Cache.prototype.get = function(key) {
        return this._values[key];
      };
      Cache.prototype.set = function(key, value) {
        this._size >= this._maxSize && this.clear();
        if (!(key in this._values))
          this._size++;
        return this._values[key] = value;
      };
      var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g;
      var DIGIT_REGEX = /^\d+$/;
      var LEAD_DIGIT_REGEX = /^\d/;
      var SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g;
      var CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/;
      var MAX_CACHE_SIZE = 512;
      var pathCache = new Cache(MAX_CACHE_SIZE);
      var setCache = new Cache(MAX_CACHE_SIZE);
      var getCache = new Cache(MAX_CACHE_SIZE);
      module.exports = {
        Cache,
        split: split2,
        normalizePath,
        setter: function(path) {
          var parts = normalizePath(path);
          return setCache.get(path) || setCache.set(path, function setter(obj, value) {
            var index = 0;
            var len = parts.length;
            var data = obj;
            while (index < len - 1) {
              var part = parts[index];
              if (part === "__proto__" || part === "constructor" || part === "prototype") {
                return obj;
              }
              data = data[parts[index++]];
            }
            data[parts[index]] = value;
          });
        },
        getter: function(path, safe) {
          var parts = normalizePath(path);
          return getCache.get(path) || getCache.set(path, function getter3(data) {
            var index = 0, len = parts.length;
            while (index < len) {
              if (data != null || !safe)
                data = data[parts[index++]];
              else
                return;
            }
            return data;
          });
        },
        join: function(segments) {
          return segments.reduce(function(path, part) {
            return path + (isQuoted(part) || DIGIT_REGEX.test(part) ? "[" + part + "]" : (path ? "." : "") + part);
          }, "");
        },
        forEach: function(path, cb, thisArg) {
          forEach2(Array.isArray(path) ? path : split2(path), cb, thisArg);
        }
      };
      function normalizePath(path) {
        return pathCache.get(path) || pathCache.set(
          path,
          split2(path).map(function(part) {
            return part.replace(CLEAN_QUOTES_REGEX, "$2");
          })
        );
      }
      function split2(path) {
        return path.match(SPLIT_REGEX) || [""];
      }
      function forEach2(parts, iter, thisArg) {
        var len = parts.length, part, idx, isArray, isBracket;
        for (idx = 0; idx < len; idx++) {
          part = parts[idx];
          if (part) {
            if (shouldBeQuoted(part)) {
              part = '"' + part + '"';
            }
            isBracket = isQuoted(part);
            isArray = !isBracket && /^\d+$/.test(part);
            iter.call(thisArg, part, isBracket, isArray, idx, parts);
          }
        }
      }
      function isQuoted(str) {
        return typeof str === "string" && str && ["'", '"'].indexOf(str.charAt(0)) !== -1;
      }
      function hasLeadingNumber(part) {
        return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX);
      }
      function hasSpecialChars(part) {
        return SPEC_CHAR_REGEX.test(part);
      }
      function shouldBeQuoted(part) {
        return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part));
      }
    }
  });

  // ../../node_modules/lodash/_arrayReduce.js
  var require_arrayReduce = __commonJS({
    "../../node_modules/lodash/_arrayReduce.js"(exports, module) {
      function arrayReduce(array2, iteratee, accumulator, initAccum) {
        var index = -1, length = array2 == null ? 0 : array2.length;
        if (initAccum && length) {
          accumulator = array2[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array2[index], index, array2);
        }
        return accumulator;
      }
      module.exports = arrayReduce;
    }
  });

  // ../../node_modules/lodash/_basePropertyOf.js
  var require_basePropertyOf = __commonJS({
    "../../node_modules/lodash/_basePropertyOf.js"(exports, module) {
      function basePropertyOf(object2) {
        return function(key) {
          return object2 == null ? void 0 : object2[key];
        };
      }
      module.exports = basePropertyOf;
    }
  });

  // ../../node_modules/lodash/_deburrLetter.js
  var require_deburrLetter = __commonJS({
    "../../node_modules/lodash/_deburrLetter.js"(exports, module) {
      var basePropertyOf = require_basePropertyOf();
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var deburrLetter = basePropertyOf(deburredLetters);
      module.exports = deburrLetter;
    }
  });

  // ../../node_modules/lodash/deburr.js
  var require_deburr = __commonJS({
    "../../node_modules/lodash/deburr.js"(exports, module) {
      var deburrLetter = require_deburrLetter();
      var toString2 = require_toString();
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsCombo = "[" + rsComboRange + "]";
      var reComboMark = RegExp(rsCombo, "g");
      function deburr(string2) {
        string2 = toString2(string2);
        return string2 && string2.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      module.exports = deburr;
    }
  });

  // ../../node_modules/lodash/_asciiWords.js
  var require_asciiWords = __commonJS({
    "../../node_modules/lodash/_asciiWords.js"(exports, module) {
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      function asciiWords(string2) {
        return string2.match(reAsciiWord) || [];
      }
      module.exports = asciiWords;
    }
  });

  // ../../node_modules/lodash/_hasUnicodeWord.js
  var require_hasUnicodeWord = __commonJS({
    "../../node_modules/lodash/_hasUnicodeWord.js"(exports, module) {
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      function hasUnicodeWord(string2) {
        return reHasUnicodeWord.test(string2);
      }
      module.exports = hasUnicodeWord;
    }
  });

  // ../../node_modules/lodash/_unicodeWords.js
  var require_unicodeWords = __commonJS({
    "../../node_modules/lodash/_unicodeWords.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsDingbatRange = "\\u2700-\\u27bf";
      var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
      var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
      var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
      var rsPunctuationRange = "\\u2000-\\u206f";
      var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
      var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]";
      var rsBreak = "[" + rsBreakRange + "]";
      var rsCombo = "[" + rsComboRange + "]";
      var rsDigits = "\\d+";
      var rsDingbat = "[" + rsDingbatRange + "]";
      var rsLower = "[" + rsLowerRange + "]";
      var rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
      var rsFitz = "\\ud83c[\\udffb-\\udfff]";
      var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
      var rsNonAstral = "[^" + rsAstralRange + "]";
      var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
      var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
      var rsUpper = "[" + rsUpperRange + "]";
      var rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")";
      var rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")";
      var rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
      var rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
      var reOptMod = rsModifier + "?";
      var rsOptVar = "[" + rsVarRange + "]?";
      var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
      var rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
      var rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
      var rsSeq = rsOptVar + reOptMod + rsOptJoin;
      var rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      function unicodeWords(string2) {
        return string2.match(reUnicodeWord) || [];
      }
      module.exports = unicodeWords;
    }
  });

  // ../../node_modules/lodash/words.js
  var require_words = __commonJS({
    "../../node_modules/lodash/words.js"(exports, module) {
      var asciiWords = require_asciiWords();
      var hasUnicodeWord = require_hasUnicodeWord();
      var toString2 = require_toString();
      var unicodeWords = require_unicodeWords();
      function words(string2, pattern, guard) {
        string2 = toString2(string2);
        pattern = guard ? void 0 : pattern;
        if (pattern === void 0) {
          return hasUnicodeWord(string2) ? unicodeWords(string2) : asciiWords(string2);
        }
        return string2.match(pattern) || [];
      }
      module.exports = words;
    }
  });

  // ../../node_modules/lodash/_createCompounder.js
  var require_createCompounder = __commonJS({
    "../../node_modules/lodash/_createCompounder.js"(exports, module) {
      var arrayReduce = require_arrayReduce();
      var deburr = require_deburr();
      var words = require_words();
      var rsApos = "['\u2019]";
      var reApos = RegExp(rsApos, "g");
      function createCompounder(callback) {
        return function(string2) {
          return arrayReduce(words(deburr(string2).replace(reApos, "")), callback, "");
        };
      }
      module.exports = createCompounder;
    }
  });

  // ../../node_modules/lodash/snakeCase.js
  var require_snakeCase = __commonJS({
    "../../node_modules/lodash/snakeCase.js"(exports, module) {
      var createCompounder = require_createCompounder();
      var snakeCase2 = createCompounder(function(result2, word, index) {
        return result2 + (index ? "_" : "") + word.toLowerCase();
      });
      module.exports = snakeCase2;
    }
  });

  // ../../node_modules/lodash/_baseSlice.js
  var require_baseSlice = __commonJS({
    "../../node_modules/lodash/_baseSlice.js"(exports, module) {
      function baseSlice(array2, start, end) {
        var index = -1, length = array2.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result2 = Array(length);
        while (++index < length) {
          result2[index] = array2[index + start];
        }
        return result2;
      }
      module.exports = baseSlice;
    }
  });

  // ../../node_modules/lodash/_castSlice.js
  var require_castSlice = __commonJS({
    "../../node_modules/lodash/_castSlice.js"(exports, module) {
      var baseSlice = require_baseSlice();
      function castSlice(array2, start, end) {
        var length = array2.length;
        end = end === void 0 ? length : end;
        return !start && end >= length ? array2 : baseSlice(array2, start, end);
      }
      module.exports = castSlice;
    }
  });

  // ../../node_modules/lodash/_hasUnicode.js
  var require_hasUnicode = __commonJS({
    "../../node_modules/lodash/_hasUnicode.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsZWJ = "\\u200d";
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      function hasUnicode(string2) {
        return reHasUnicode.test(string2);
      }
      module.exports = hasUnicode;
    }
  });

  // ../../node_modules/lodash/_asciiToArray.js
  var require_asciiToArray = __commonJS({
    "../../node_modules/lodash/_asciiToArray.js"(exports, module) {
      function asciiToArray(string2) {
        return string2.split("");
      }
      module.exports = asciiToArray;
    }
  });

  // ../../node_modules/lodash/_unicodeToArray.js
  var require_unicodeToArray = __commonJS({
    "../../node_modules/lodash/_unicodeToArray.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsAstral = "[" + rsAstralRange + "]";
      var rsCombo = "[" + rsComboRange + "]";
      var rsFitz = "\\ud83c[\\udffb-\\udfff]";
      var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
      var rsNonAstral = "[^" + rsAstralRange + "]";
      var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
      var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
      var rsZWJ = "\\u200d";
      var reOptMod = rsModifier + "?";
      var rsOptVar = "[" + rsVarRange + "]?";
      var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
      var rsSeq = rsOptVar + reOptMod + rsOptJoin;
      var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      function unicodeToArray(string2) {
        return string2.match(reUnicode) || [];
      }
      module.exports = unicodeToArray;
    }
  });

  // ../../node_modules/lodash/_stringToArray.js
  var require_stringToArray = __commonJS({
    "../../node_modules/lodash/_stringToArray.js"(exports, module) {
      var asciiToArray = require_asciiToArray();
      var hasUnicode = require_hasUnicode();
      var unicodeToArray = require_unicodeToArray();
      function stringToArray(string2) {
        return hasUnicode(string2) ? unicodeToArray(string2) : asciiToArray(string2);
      }
      module.exports = stringToArray;
    }
  });

  // ../../node_modules/lodash/_createCaseFirst.js
  var require_createCaseFirst = __commonJS({
    "../../node_modules/lodash/_createCaseFirst.js"(exports, module) {
      var castSlice = require_castSlice();
      var hasUnicode = require_hasUnicode();
      var stringToArray = require_stringToArray();
      var toString2 = require_toString();
      function createCaseFirst(methodName) {
        return function(string2) {
          string2 = toString2(string2);
          var strSymbols = hasUnicode(string2) ? stringToArray(string2) : void 0;
          var chr = strSymbols ? strSymbols[0] : string2.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string2.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      module.exports = createCaseFirst;
    }
  });

  // ../../node_modules/lodash/upperFirst.js
  var require_upperFirst = __commonJS({
    "../../node_modules/lodash/upperFirst.js"(exports, module) {
      var createCaseFirst = require_createCaseFirst();
      var upperFirst = createCaseFirst("toUpperCase");
      module.exports = upperFirst;
    }
  });

  // ../../node_modules/lodash/capitalize.js
  var require_capitalize = __commonJS({
    "../../node_modules/lodash/capitalize.js"(exports, module) {
      var toString2 = require_toString();
      var upperFirst = require_upperFirst();
      function capitalize(string2) {
        return upperFirst(toString2(string2).toLowerCase());
      }
      module.exports = capitalize;
    }
  });

  // ../../node_modules/lodash/camelCase.js
  var require_camelCase = __commonJS({
    "../../node_modules/lodash/camelCase.js"(exports, module) {
      var capitalize = require_capitalize();
      var createCompounder = require_createCompounder();
      var camelCase2 = createCompounder(function(result2, word, index) {
        word = word.toLowerCase();
        return result2 + (index ? capitalize(word) : word);
      });
      module.exports = camelCase2;
    }
  });

  // ../../node_modules/lodash/mapKeys.js
  var require_mapKeys = __commonJS({
    "../../node_modules/lodash/mapKeys.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var baseForOwn = require_baseForOwn();
      var baseIteratee = require_baseIteratee();
      function mapKeys2(object2, iteratee) {
        var result2 = {};
        iteratee = baseIteratee(iteratee, 3);
        baseForOwn(object2, function(value, key, object3) {
          baseAssignValue(result2, iteratee(value, key, object3), value);
        });
        return result2;
      }
      module.exports = mapKeys2;
    }
  });

  // ../../node_modules/toposort/index.js
  var require_toposort = __commonJS({
    "../../node_modules/toposort/index.js"(exports, module) {
      module.exports = function(edges) {
        return toposort2(uniqueNodes(edges), edges);
      };
      module.exports.array = toposort2;
      function toposort2(nodes, edges) {
        var cursor = nodes.length, sorted = new Array(cursor), visited = {}, i = cursor, outgoingEdges = makeOutgoingEdges(edges), nodesHash = makeNodesHash(nodes);
        edges.forEach(function(edge) {
          if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
            throw new Error("Unknown node. There is an unknown node in the supplied edges.");
          }
        });
        while (i--) {
          if (!visited[i])
            visit(nodes[i], i, /* @__PURE__ */ new Set());
        }
        return sorted;
        function visit(node, i2, predecessors) {
          if (predecessors.has(node)) {
            var nodeRep;
            try {
              nodeRep = ", node was:" + JSON.stringify(node);
            } catch (e) {
              nodeRep = "";
            }
            throw new Error("Cyclic dependency" + nodeRep);
          }
          if (!nodesHash.has(node)) {
            throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(node));
          }
          if (visited[i2])
            return;
          visited[i2] = true;
          var outgoing = outgoingEdges.get(node) || /* @__PURE__ */ new Set();
          outgoing = Array.from(outgoing);
          if (i2 = outgoing.length) {
            predecessors.add(node);
            do {
              var child = outgoing[--i2];
              visit(child, nodesHash.get(child), predecessors);
            } while (i2);
            predecessors.delete(node);
          }
          sorted[--cursor] = node;
        }
      }
      function uniqueNodes(arr) {
        var res = /* @__PURE__ */ new Set();
        for (var i = 0, len = arr.length; i < len; i++) {
          var edge = arr[i];
          res.add(edge[0]);
          res.add(edge[1]);
        }
        return Array.from(res);
      }
      function makeOutgoingEdges(arr) {
        var edges = /* @__PURE__ */ new Map();
        for (var i = 0, len = arr.length; i < len; i++) {
          var edge = arr[i];
          if (!edges.has(edge[0]))
            edges.set(edge[0], /* @__PURE__ */ new Set());
          if (!edges.has(edge[1]))
            edges.set(edge[1], /* @__PURE__ */ new Set());
          edges.get(edge[0]).add(edge[1]);
        }
        return edges;
      }
      function makeNodesHash(arr) {
        var res = /* @__PURE__ */ new Map();
        for (var i = 0, len = arr.length; i < len; i++) {
          res.set(arr[i], i);
        }
        return res;
      }
    }
  });

  // ../../node_modules/ipaddr.js/lib/ipaddr.js
  var require_ipaddr = __commonJS({
    "../../node_modules/ipaddr.js/lib/ipaddr.js"(exports, module) {
      (function(root) {
        "use strict";
        const ipv4Part = "(0?\\d+|0x[a-f0-9]+)";
        const ipv4Regexes = {
          fourOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}$`, "i"),
          threeOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}$`, "i"),
          twoOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}$`, "i"),
          longValue: new RegExp(`^${ipv4Part}$`, "i")
        };
        const octalRegex = new RegExp(`^0[0-7]+$`, "i");
        const hexRegex = new RegExp(`^0x[a-f0-9]+$`, "i");
        const zoneIndex = "%[0-9a-z]{1,}";
        const ipv6Part = "(?:[0-9a-f]+::?)+";
        const ipv6Regexes = {
          zoneIndex: new RegExp(zoneIndex, "i"),
          "native": new RegExp(`^(::)?(${ipv6Part})?([0-9a-f]+)?(::)?(${zoneIndex})?$`, "i"),
          deprecatedTransitional: new RegExp(`^(?:::)(${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}(${zoneIndex})?)$`, "i"),
          transitional: new RegExp(`^((?:${ipv6Part})|(?:::)(?:${ipv6Part})?)${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}(${zoneIndex})?$`, "i")
        };
        function expandIPv6(string2, parts) {
          if (string2.indexOf("::") !== string2.lastIndexOf("::")) {
            return null;
          }
          let colonCount = 0;
          let lastColon = -1;
          let zoneId = (string2.match(ipv6Regexes.zoneIndex) || [])[0];
          let replacement, replacementCount;
          if (zoneId) {
            zoneId = zoneId.substring(1);
            string2 = string2.replace(/%.+$/, "");
          }
          while ((lastColon = string2.indexOf(":", lastColon + 1)) >= 0) {
            colonCount++;
          }
          if (string2.substr(0, 2) === "::") {
            colonCount--;
          }
          if (string2.substr(-2, 2) === "::") {
            colonCount--;
          }
          if (colonCount > parts) {
            return null;
          }
          replacementCount = parts - colonCount;
          replacement = ":";
          while (replacementCount--) {
            replacement += "0:";
          }
          string2 = string2.replace("::", replacement);
          if (string2[0] === ":") {
            string2 = string2.slice(1);
          }
          if (string2[string2.length - 1] === ":") {
            string2 = string2.slice(0, -1);
          }
          parts = function() {
            const ref = string2.split(":");
            const results = [];
            for (let i = 0; i < ref.length; i++) {
              results.push(parseInt(ref[i], 16));
            }
            return results;
          }();
          return {
            parts,
            zoneId
          };
        }
        function matchCIDR(first, second, partSize, cidrBits) {
          if (first.length !== second.length) {
            throw new Error("ipaddr: cannot match CIDR for objects with different lengths");
          }
          let part = 0;
          let shift;
          while (cidrBits > 0) {
            shift = partSize - cidrBits;
            if (shift < 0) {
              shift = 0;
            }
            if (first[part] >> shift !== second[part] >> shift) {
              return false;
            }
            cidrBits -= partSize;
            part += 1;
          }
          return true;
        }
        function parseIntAuto(string2) {
          if (hexRegex.test(string2)) {
            return parseInt(string2, 16);
          }
          if (string2[0] === "0" && !isNaN(parseInt(string2[1], 10))) {
            if (octalRegex.test(string2)) {
              return parseInt(string2, 8);
            }
            throw new Error(`ipaddr: cannot parse ${string2} as octal`);
          }
          return parseInt(string2, 10);
        }
        function padPart(part, length) {
          while (part.length < length) {
            part = `0${part}`;
          }
          return part;
        }
        const ipaddr3 = {};
        ipaddr3.IPv4 = function() {
          function IPv4(octets) {
            if (octets.length !== 4) {
              throw new Error("ipaddr: ipv4 octet count should be 4");
            }
            let i, octet;
            for (i = 0; i < octets.length; i++) {
              octet = octets[i];
              if (!(0 <= octet && octet <= 255)) {
                throw new Error("ipaddr: ipv4 octet should fit in 8 bits");
              }
            }
            this.octets = octets;
          }
          IPv4.prototype.SpecialRanges = {
            unspecified: [[new IPv4([0, 0, 0, 0]), 8]],
            broadcast: [[new IPv4([255, 255, 255, 255]), 32]],
            // RFC3171
            multicast: [[new IPv4([224, 0, 0, 0]), 4]],
            // RFC3927
            linkLocal: [[new IPv4([169, 254, 0, 0]), 16]],
            // RFC5735
            loopback: [[new IPv4([127, 0, 0, 0]), 8]],
            // RFC6598
            carrierGradeNat: [[new IPv4([100, 64, 0, 0]), 10]],
            // RFC1918
            "private": [
              [new IPv4([10, 0, 0, 0]), 8],
              [new IPv4([172, 16, 0, 0]), 12],
              [new IPv4([192, 168, 0, 0]), 16]
            ],
            // Reserved and testing-only ranges; RFCs 5735, 5737, 2544, 1700
            reserved: [
              [new IPv4([192, 0, 0, 0]), 24],
              [new IPv4([192, 0, 2, 0]), 24],
              [new IPv4([192, 88, 99, 0]), 24],
              [new IPv4([198, 51, 100, 0]), 24],
              [new IPv4([203, 0, 113, 0]), 24],
              [new IPv4([240, 0, 0, 0]), 4]
            ]
          };
          IPv4.prototype.kind = function() {
            return "ipv4";
          };
          IPv4.prototype.match = function(other, cidrRange) {
            let ref;
            if (cidrRange === void 0) {
              ref = other;
              other = ref[0];
              cidrRange = ref[1];
            }
            if (other.kind() !== "ipv4") {
              throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");
            }
            return matchCIDR(this.octets, other.octets, 8, cidrRange);
          };
          IPv4.prototype.prefixLengthFromSubnetMask = function() {
            let cidr = 0;
            let stop = false;
            const zerotable = {
              0: 8,
              128: 7,
              192: 6,
              224: 5,
              240: 4,
              248: 3,
              252: 2,
              254: 1,
              255: 0
            };
            let i, octet, zeros;
            for (i = 3; i >= 0; i -= 1) {
              octet = this.octets[i];
              if (octet in zerotable) {
                zeros = zerotable[octet];
                if (stop && zeros !== 0) {
                  return null;
                }
                if (zeros !== 8) {
                  stop = true;
                }
                cidr += zeros;
              } else {
                return null;
              }
            }
            return 32 - cidr;
          };
          IPv4.prototype.range = function() {
            return ipaddr3.subnetMatch(this, this.SpecialRanges);
          };
          IPv4.prototype.toByteArray = function() {
            return this.octets.slice(0);
          };
          IPv4.prototype.toIPv4MappedAddress = function() {
            return ipaddr3.IPv6.parse(`::ffff:${this.toString()}`);
          };
          IPv4.prototype.toNormalizedString = function() {
            return this.toString();
          };
          IPv4.prototype.toString = function() {
            return this.octets.join(".");
          };
          return IPv4;
        }();
        ipaddr3.IPv4.broadcastAddressFromCIDR = function(string2) {
          try {
            const cidr = this.parseCIDR(string2);
            const ipInterfaceOctets = cidr[0].toByteArray();
            const subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
            const octets = [];
            let i = 0;
            while (i < 4) {
              octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
              i++;
            }
            return new this(octets);
          } catch (e) {
            throw new Error("ipaddr: the address does not have IPv4 CIDR format");
          }
        };
        ipaddr3.IPv4.isIPv4 = function(string2) {
          return this.parser(string2) !== null;
        };
        ipaddr3.IPv4.isValid = function(string2) {
          try {
            new this(this.parser(string2));
            return true;
          } catch (e) {
            return false;
          }
        };
        ipaddr3.IPv4.isValidFourPartDecimal = function(string2) {
          if (ipaddr3.IPv4.isValid(string2) && string2.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/)) {
            return true;
          } else {
            return false;
          }
        };
        ipaddr3.IPv4.networkAddressFromCIDR = function(string2) {
          let cidr, i, ipInterfaceOctets, octets, subnetMaskOctets;
          try {
            cidr = this.parseCIDR(string2);
            ipInterfaceOctets = cidr[0].toByteArray();
            subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
            octets = [];
            i = 0;
            while (i < 4) {
              octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
              i++;
            }
            return new this(octets);
          } catch (e) {
            throw new Error("ipaddr: the address does not have IPv4 CIDR format");
          }
        };
        ipaddr3.IPv4.parse = function(string2) {
          const parts = this.parser(string2);
          if (parts === null) {
            throw new Error("ipaddr: string is not formatted like an IPv4 Address");
          }
          return new this(parts);
        };
        ipaddr3.IPv4.parseCIDR = function(string2) {
          let match;
          if (match = string2.match(/^(.+)\/(\d+)$/)) {
            const maskLength = parseInt(match[2]);
            if (maskLength >= 0 && maskLength <= 32) {
              const parsed = [this.parse(match[1]), maskLength];
              Object.defineProperty(parsed, "toString", {
                value: function() {
                  return this.join("/");
                }
              });
              return parsed;
            }
          }
          throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range");
        };
        ipaddr3.IPv4.parser = function(string2) {
          let match, part, value;
          if (match = string2.match(ipv4Regexes.fourOctet)) {
            return function() {
              const ref = match.slice(1, 6);
              const results = [];
              for (let i = 0; i < ref.length; i++) {
                part = ref[i];
                results.push(parseIntAuto(part));
              }
              return results;
            }();
          } else if (match = string2.match(ipv4Regexes.longValue)) {
            value = parseIntAuto(match[1]);
            if (value > 4294967295 || value < 0) {
              throw new Error("ipaddr: address outside defined range");
            }
            return function() {
              const results = [];
              let shift;
              for (shift = 0; shift <= 24; shift += 8) {
                results.push(value >> shift & 255);
              }
              return results;
            }().reverse();
          } else if (match = string2.match(ipv4Regexes.twoOctet)) {
            return function() {
              const ref = match.slice(1, 4);
              const results = [];
              value = parseIntAuto(ref[1]);
              if (value > 16777215 || value < 0) {
                throw new Error("ipaddr: address outside defined range");
              }
              results.push(parseIntAuto(ref[0]));
              results.push(value >> 16 & 255);
              results.push(value >> 8 & 255);
              results.push(value & 255);
              return results;
            }();
          } else if (match = string2.match(ipv4Regexes.threeOctet)) {
            return function() {
              const ref = match.slice(1, 5);
              const results = [];
              value = parseIntAuto(ref[2]);
              if (value > 65535 || value < 0) {
                throw new Error("ipaddr: address outside defined range");
              }
              results.push(parseIntAuto(ref[0]));
              results.push(parseIntAuto(ref[1]));
              results.push(value >> 8 & 255);
              results.push(value & 255);
              return results;
            }();
          } else {
            return null;
          }
        };
        ipaddr3.IPv4.subnetMaskFromPrefixLength = function(prefix) {
          prefix = parseInt(prefix);
          if (prefix < 0 || prefix > 32) {
            throw new Error("ipaddr: invalid IPv4 prefix length");
          }
          const octets = [0, 0, 0, 0];
          let j = 0;
          const filledOctetCount = Math.floor(prefix / 8);
          while (j < filledOctetCount) {
            octets[j] = 255;
            j++;
          }
          if (filledOctetCount < 4) {
            octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
          }
          return new this(octets);
        };
        ipaddr3.IPv6 = function() {
          function IPv6(parts, zoneId) {
            let i, part;
            if (parts.length === 16) {
              this.parts = [];
              for (i = 0; i <= 14; i += 2) {
                this.parts.push(parts[i] << 8 | parts[i + 1]);
              }
            } else if (parts.length === 8) {
              this.parts = parts;
            } else {
              throw new Error("ipaddr: ipv6 part count should be 8 or 16");
            }
            for (i = 0; i < this.parts.length; i++) {
              part = this.parts[i];
              if (!(0 <= part && part <= 65535)) {
                throw new Error("ipaddr: ipv6 part should fit in 16 bits");
              }
            }
            if (zoneId) {
              this.zoneId = zoneId;
            }
          }
          IPv6.prototype.SpecialRanges = {
            // RFC4291, here and after
            unspecified: [new IPv6([0, 0, 0, 0, 0, 0, 0, 0]), 128],
            linkLocal: [new IPv6([65152, 0, 0, 0, 0, 0, 0, 0]), 10],
            multicast: [new IPv6([65280, 0, 0, 0, 0, 0, 0, 0]), 8],
            loopback: [new IPv6([0, 0, 0, 0, 0, 0, 0, 1]), 128],
            uniqueLocal: [new IPv6([64512, 0, 0, 0, 0, 0, 0, 0]), 7],
            ipv4Mapped: [new IPv6([0, 0, 0, 0, 0, 65535, 0, 0]), 96],
            // RFC6145
            rfc6145: [new IPv6([0, 0, 0, 0, 65535, 0, 0, 0]), 96],
            // RFC6052
            rfc6052: [new IPv6([100, 65435, 0, 0, 0, 0, 0, 0]), 96],
            // RFC3056
            "6to4": [new IPv6([8194, 0, 0, 0, 0, 0, 0, 0]), 16],
            // RFC6052, RFC6146
            teredo: [new IPv6([8193, 0, 0, 0, 0, 0, 0, 0]), 32],
            // RFC4291
            reserved: [[new IPv6([8193, 3512, 0, 0, 0, 0, 0, 0]), 32]]
          };
          IPv6.prototype.isIPv4MappedAddress = function() {
            return this.range() === "ipv4Mapped";
          };
          IPv6.prototype.kind = function() {
            return "ipv6";
          };
          IPv6.prototype.match = function(other, cidrRange) {
            let ref;
            if (cidrRange === void 0) {
              ref = other;
              other = ref[0];
              cidrRange = ref[1];
            }
            if (other.kind() !== "ipv6") {
              throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");
            }
            return matchCIDR(this.parts, other.parts, 16, cidrRange);
          };
          IPv6.prototype.prefixLengthFromSubnetMask = function() {
            let cidr = 0;
            let stop = false;
            const zerotable = {
              0: 16,
              32768: 15,
              49152: 14,
              57344: 13,
              61440: 12,
              63488: 11,
              64512: 10,
              65024: 9,
              65280: 8,
              65408: 7,
              65472: 6,
              65504: 5,
              65520: 4,
              65528: 3,
              65532: 2,
              65534: 1,
              65535: 0
            };
            let part, zeros;
            for (let i = 7; i >= 0; i -= 1) {
              part = this.parts[i];
              if (part in zerotable) {
                zeros = zerotable[part];
                if (stop && zeros !== 0) {
                  return null;
                }
                if (zeros !== 16) {
                  stop = true;
                }
                cidr += zeros;
              } else {
                return null;
              }
            }
            return 128 - cidr;
          };
          IPv6.prototype.range = function() {
            return ipaddr3.subnetMatch(this, this.SpecialRanges);
          };
          IPv6.prototype.toByteArray = function() {
            let part;
            const bytes = [];
            const ref = this.parts;
            for (let i = 0; i < ref.length; i++) {
              part = ref[i];
              bytes.push(part >> 8);
              bytes.push(part & 255);
            }
            return bytes;
          };
          IPv6.prototype.toFixedLengthString = function() {
            const addr = function() {
              const results = [];
              for (let i = 0; i < this.parts.length; i++) {
                results.push(padPart(this.parts[i].toString(16), 4));
              }
              return results;
            }.call(this).join(":");
            let suffix = "";
            if (this.zoneId) {
              suffix = `%${this.zoneId}`;
            }
            return addr + suffix;
          };
          IPv6.prototype.toIPv4Address = function() {
            if (!this.isIPv4MappedAddress()) {
              throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");
            }
            const ref = this.parts.slice(-2);
            const high = ref[0];
            const low = ref[1];
            return new ipaddr3.IPv4([high >> 8, high & 255, low >> 8, low & 255]);
          };
          IPv6.prototype.toNormalizedString = function() {
            const addr = function() {
              const results = [];
              for (let i = 0; i < this.parts.length; i++) {
                results.push(this.parts[i].toString(16));
              }
              return results;
            }.call(this).join(":");
            let suffix = "";
            if (this.zoneId) {
              suffix = `%${this.zoneId}`;
            }
            return addr + suffix;
          };
          IPv6.prototype.toRFC5952String = function() {
            const regex = /((^|:)(0(:|$)){2,})/g;
            const string2 = this.toNormalizedString();
            let bestMatchIndex = 0;
            let bestMatchLength = -1;
            let match;
            while (match = regex.exec(string2)) {
              if (match[0].length > bestMatchLength) {
                bestMatchIndex = match.index;
                bestMatchLength = match[0].length;
              }
            }
            if (bestMatchLength < 0) {
              return string2;
            }
            return `${string2.substring(0, bestMatchIndex)}::${string2.substring(bestMatchIndex + bestMatchLength)}`;
          };
          IPv6.prototype.toString = function() {
            return this.toNormalizedString().replace(/((^|:)(0(:|$))+)/, "::");
          };
          return IPv6;
        }();
        ipaddr3.IPv6.broadcastAddressFromCIDR = function(string2) {
          try {
            const cidr = this.parseCIDR(string2);
            const ipInterfaceOctets = cidr[0].toByteArray();
            const subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
            const octets = [];
            let i = 0;
            while (i < 16) {
              octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
              i++;
            }
            return new this(octets);
          } catch (e) {
            throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${e})`);
          }
        };
        ipaddr3.IPv6.isIPv6 = function(string2) {
          return this.parser(string2) !== null;
        };
        ipaddr3.IPv6.isValid = function(string2) {
          if (typeof string2 === "string" && string2.indexOf(":") === -1) {
            return false;
          }
          try {
            const addr = this.parser(string2);
            new this(addr.parts, addr.zoneId);
            return true;
          } catch (e) {
            return false;
          }
        };
        ipaddr3.IPv6.networkAddressFromCIDR = function(string2) {
          let cidr, i, ipInterfaceOctets, octets, subnetMaskOctets;
          try {
            cidr = this.parseCIDR(string2);
            ipInterfaceOctets = cidr[0].toByteArray();
            subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
            octets = [];
            i = 0;
            while (i < 16) {
              octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
              i++;
            }
            return new this(octets);
          } catch (e) {
            throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${e})`);
          }
        };
        ipaddr3.IPv6.parse = function(string2) {
          const addr = this.parser(string2);
          if (addr.parts === null) {
            throw new Error("ipaddr: string is not formatted like an IPv6 Address");
          }
          return new this(addr.parts, addr.zoneId);
        };
        ipaddr3.IPv6.parseCIDR = function(string2) {
          let maskLength, match, parsed;
          if (match = string2.match(/^(.+)\/(\d+)$/)) {
            maskLength = parseInt(match[2]);
            if (maskLength >= 0 && maskLength <= 128) {
              parsed = [this.parse(match[1]), maskLength];
              Object.defineProperty(parsed, "toString", {
                value: function() {
                  return this.join("/");
                }
              });
              return parsed;
            }
          }
          throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range");
        };
        ipaddr3.IPv6.parser = function(string2) {
          let addr, i, match, octet, octets, zoneId;
          if (match = string2.match(ipv6Regexes.deprecatedTransitional)) {
            return this.parser(`::ffff:${match[1]}`);
          }
          if (ipv6Regexes.native.test(string2)) {
            return expandIPv6(string2, 8);
          }
          if (match = string2.match(ipv6Regexes.transitional)) {
            zoneId = match[6] || "";
            addr = expandIPv6(match[1].slice(0, -1) + zoneId, 6);
            if (addr.parts) {
              octets = [
                parseInt(match[2]),
                parseInt(match[3]),
                parseInt(match[4]),
                parseInt(match[5])
              ];
              for (i = 0; i < octets.length; i++) {
                octet = octets[i];
                if (!(0 <= octet && octet <= 255)) {
                  return null;
                }
              }
              addr.parts.push(octets[0] << 8 | octets[1]);
              addr.parts.push(octets[2] << 8 | octets[3]);
              return {
                parts: addr.parts,
                zoneId: addr.zoneId
              };
            }
          }
          return null;
        };
        ipaddr3.IPv6.subnetMaskFromPrefixLength = function(prefix) {
          prefix = parseInt(prefix);
          if (prefix < 0 || prefix > 128) {
            throw new Error("ipaddr: invalid IPv6 prefix length");
          }
          const octets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          let j = 0;
          const filledOctetCount = Math.floor(prefix / 8);
          while (j < filledOctetCount) {
            octets[j] = 255;
            j++;
          }
          if (filledOctetCount < 16) {
            octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
          }
          return new this(octets);
        };
        ipaddr3.fromByteArray = function(bytes) {
          const length = bytes.length;
          if (length === 4) {
            return new ipaddr3.IPv4(bytes);
          } else if (length === 16) {
            return new ipaddr3.IPv6(bytes);
          } else {
            throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address");
          }
        };
        ipaddr3.isValid = function(string2) {
          return ipaddr3.IPv6.isValid(string2) || ipaddr3.IPv4.isValid(string2);
        };
        ipaddr3.parse = function(string2) {
          if (ipaddr3.IPv6.isValid(string2)) {
            return ipaddr3.IPv6.parse(string2);
          } else if (ipaddr3.IPv4.isValid(string2)) {
            return ipaddr3.IPv4.parse(string2);
          } else {
            throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format");
          }
        };
        ipaddr3.parseCIDR = function(string2) {
          try {
            return ipaddr3.IPv6.parseCIDR(string2);
          } catch (e) {
            try {
              return ipaddr3.IPv4.parseCIDR(string2);
            } catch (e2) {
              throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format");
            }
          }
        };
        ipaddr3.process = function(string2) {
          const addr = this.parse(string2);
          if (addr.kind() === "ipv6" && addr.isIPv4MappedAddress()) {
            return addr.toIPv4Address();
          } else {
            return addr;
          }
        };
        ipaddr3.subnetMatch = function(address, rangeList, defaultName) {
          let i, rangeName, rangeSubnets, subnet;
          if (defaultName === void 0 || defaultName === null) {
            defaultName = "unicast";
          }
          for (rangeName in rangeList) {
            if (Object.prototype.hasOwnProperty.call(rangeList, rangeName)) {
              rangeSubnets = rangeList[rangeName];
              if (rangeSubnets[0] && !(rangeSubnets[0] instanceof Array)) {
                rangeSubnets = [rangeSubnets];
              }
              for (i = 0; i < rangeSubnets.length; i++) {
                subnet = rangeSubnets[i];
                if (address.kind() === subnet[0].kind() && address.match.apply(address, subnet)) {
                  return rangeName;
                }
              }
            }
          }
          return defaultName;
        };
        if (typeof module !== "undefined" && module.exports) {
          module.exports = ipaddr3;
        } else {
          root.ipaddr = ipaddr3;
        }
      })(exports);
    }
  });

  // ../../node_modules/nanoclone/src/index.js
  var map;
  try {
    map = Map;
  } catch (_) {
  }
  var set;
  try {
    set = Set;
  } catch (_) {
  }
  function baseClone(src, circulars, clones) {
    if (!src || typeof src !== "object" || typeof src === "function") {
      return src;
    }
    if (src.nodeType && "cloneNode" in src) {
      return src.cloneNode(true);
    }
    if (src instanceof Date) {
      return new Date(src.getTime());
    }
    if (src instanceof RegExp) {
      return new RegExp(src);
    }
    if (Array.isArray(src)) {
      return src.map(clone);
    }
    if (map && src instanceof map) {
      return new Map(Array.from(src.entries()));
    }
    if (set && src instanceof set) {
      return new Set(Array.from(src.values()));
    }
    if (src instanceof Object) {
      circulars.push(src);
      var obj = Object.create(src);
      clones.push(obj);
      for (var key in src) {
        var idx = circulars.findIndex(function(i) {
          return i === src[key];
        });
        obj[key] = idx > -1 ? clones[idx] : baseClone(src[key], circulars, clones);
      }
      return obj;
    }
    return src;
  }
  function clone(src) {
    return baseClone(src, [], []);
  }

  // ../../node_modules/yup/es/util/printValue.js
  var toString = Object.prototype.toString;
  var errorToString = Error.prototype.toString;
  var regExpToString = RegExp.prototype.toString;
  var symbolToString = typeof Symbol !== "undefined" ? Symbol.prototype.toString : () => "";
  var SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
  function printNumber(val) {
    if (val != +val)
      return "NaN";
    const isNegativeZero = val === 0 && 1 / val < 0;
    return isNegativeZero ? "-0" : "" + val;
  }
  function printSimpleValue(val, quoteStrings = false) {
    if (val == null || val === true || val === false)
      return "" + val;
    const typeOf = typeof val;
    if (typeOf === "number")
      return printNumber(val);
    if (typeOf === "string")
      return quoteStrings ? `"${val}"` : val;
    if (typeOf === "function")
      return "[Function " + (val.name || "anonymous") + "]";
    if (typeOf === "symbol")
      return symbolToString.call(val).replace(SYMBOL_REGEXP, "Symbol($1)");
    const tag = toString.call(val).slice(8, -1);
    if (tag === "Date")
      return isNaN(val.getTime()) ? "" + val : val.toISOString(val);
    if (tag === "Error" || val instanceof Error)
      return "[" + errorToString.call(val) + "]";
    if (tag === "RegExp")
      return regExpToString.call(val);
    return null;
  }
  function printValue(value, quoteStrings) {
    let result2 = printSimpleValue(value, quoteStrings);
    if (result2 !== null)
      return result2;
    return JSON.stringify(value, function(key, value2) {
      let result3 = printSimpleValue(this[key], quoteStrings);
      if (result3 !== null)
        return result3;
      return value2;
    }, 2);
  }

  // ../../node_modules/yup/es/locale.js
  var mixed = {
    default: "${path} is invalid",
    required: "${path} is a required field",
    oneOf: "${path} must be one of the following values: ${values}",
    notOneOf: "${path} must not be one of the following values: ${values}",
    notType: ({
      path,
      type,
      value,
      originalValue
    }) => {
      let isCast = originalValue != null && originalValue !== value;
      let msg = `${path} must be a \`${type}\` type, but the final value was: \`${printValue(value, true)}\`` + (isCast ? ` (cast from the value \`${printValue(originalValue, true)}\`).` : ".");
      if (value === null) {
        msg += `
 If "null" is intended as an empty value be sure to mark the schema as \`.nullable()\``;
      }
      return msg;
    },
    defined: "${path} must be defined"
  };
  var string = {
    length: "${path} must be exactly ${length} characters",
    min: "${path} must be at least ${min} characters",
    max: "${path} must be at most ${max} characters",
    matches: '${path} must match the following: "${regex}"',
    email: "${path} must be a valid email",
    url: "${path} must be a valid URL",
    uuid: "${path} must be a valid UUID",
    trim: "${path} must be a trimmed string",
    lowercase: "${path} must be a lowercase string",
    uppercase: "${path} must be a upper case string"
  };
  var number = {
    min: "${path} must be greater than or equal to ${min}",
    max: "${path} must be less than or equal to ${max}",
    lessThan: "${path} must be less than ${less}",
    moreThan: "${path} must be greater than ${more}",
    positive: "${path} must be a positive number",
    negative: "${path} must be a negative number",
    integer: "${path} must be an integer"
  };
  var date = {
    min: "${path} field must be later than ${min}",
    max: "${path} field must be at earlier than ${max}"
  };
  var boolean = {
    isValue: "${path} field must be ${value}"
  };
  var object = {
    noUnknown: "${path} field has unspecified keys: ${unknown}"
  };
  var array = {
    min: "${path} field must have at least ${min} items",
    max: "${path} field must have less than or equal to ${max} items",
    length: "${path} must have ${length} items"
  };
  var locale_default = Object.assign(/* @__PURE__ */ Object.create(null), {
    mixed,
    string,
    number,
    date,
    object,
    array,
    boolean
  });

  // ../../node_modules/yup/es/Condition.js
  var import_has = __toESM(require_has());

  // ../../node_modules/yup/es/util/isSchema.js
  var isSchema = (obj) => obj && obj.__isYupSchema__;
  var isSchema_default = isSchema;

  // ../../node_modules/yup/es/Condition.js
  var Condition = class {
    constructor(refs, options) {
      this.fn = void 0;
      this.refs = refs;
      this.refs = refs;
      if (typeof options === "function") {
        this.fn = options;
        return;
      }
      if (!(0, import_has.default)(options, "is"))
        throw new TypeError("`is:` is required for `when()` conditions");
      if (!options.then && !options.otherwise)
        throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
      let {
        is,
        then,
        otherwise
      } = options;
      let check = typeof is === "function" ? is : (...values) => values.every((value) => value === is);
      this.fn = function(...args) {
        let options2 = args.pop();
        let schema = args.pop();
        let branch = check(...args) ? then : otherwise;
        if (!branch)
          return void 0;
        if (typeof branch === "function")
          return branch(schema);
        return schema.concat(branch.resolve(options2));
      };
    }
    resolve(base, options) {
      let values = this.refs.map((ref) => ref.getValue(options == null ? void 0 : options.value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context));
      let schema = this.fn.apply(base, values.concat(base, options));
      if (schema === void 0 || schema === base)
        return base;
      if (!isSchema_default(schema))
        throw new TypeError("conditions must return a schema object");
      return schema.resolve(options);
    }
  };
  var Condition_default = Condition;

  // ../../node_modules/yup/es/util/toArray.js
  function toArray(value) {
    return value == null ? [] : [].concat(value);
  }

  // ../../node_modules/yup/es/ValidationError.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  var strReg = /\$\{\s*(\w+)\s*\}/g;
  var ValidationError = class extends Error {
    static formatError(message, params) {
      const path = params.label || params.path || "this";
      if (path !== params.path)
        params = _extends({}, params, {
          path
        });
      if (typeof message === "string")
        return message.replace(strReg, (_, key) => printValue(params[key]));
      if (typeof message === "function")
        return message(params);
      return message;
    }
    static isError(err) {
      return err && err.name === "ValidationError";
    }
    constructor(errorOrErrors, value, field, type) {
      super();
      this.value = void 0;
      this.path = void 0;
      this.type = void 0;
      this.errors = void 0;
      this.params = void 0;
      this.inner = void 0;
      this.name = "ValidationError";
      this.value = value;
      this.path = field;
      this.type = type;
      this.errors = [];
      this.inner = [];
      toArray(errorOrErrors).forEach((err) => {
        if (ValidationError.isError(err)) {
          this.errors.push(...err.errors);
          this.inner = this.inner.concat(err.inner.length ? err.inner : err);
        } else {
          this.errors.push(err);
        }
      });
      this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, ValidationError);
    }
  };

  // ../../node_modules/yup/es/util/runTests.js
  var once = (cb) => {
    let fired = false;
    return (...args) => {
      if (fired)
        return;
      fired = true;
      cb(...args);
    };
  };
  function runTests(options, cb) {
    let {
      endEarly,
      tests,
      args,
      value,
      errors,
      sort,
      path
    } = options;
    let callback = once(cb);
    let count = tests.length;
    const nestedErrors = [];
    errors = errors ? errors : [];
    if (!count)
      return errors.length ? callback(new ValidationError(errors, value, path)) : callback(null, value);
    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];
      test(args, function finishTestRun(err) {
        if (err) {
          if (!ValidationError.isError(err)) {
            return callback(err, value);
          }
          if (endEarly) {
            err.value = value;
            return callback(err, value);
          }
          nestedErrors.push(err);
        }
        if (--count <= 0) {
          if (nestedErrors.length) {
            if (sort)
              nestedErrors.sort(sort);
            if (errors.length)
              nestedErrors.push(...errors);
            errors = nestedErrors;
          }
          if (errors.length) {
            callback(new ValidationError(errors, value, path), value);
            return;
          }
          callback(null, value);
        }
      });
    }
  }

  // ../../node_modules/yup/es/util/createValidation.js
  var import_mapValues = __toESM(require_mapValues());

  // ../../node_modules/yup/es/Reference.js
  var import_property_expr = __toESM(require_property_expr());
  var prefixes = {
    context: "$",
    value: "."
  };
  var Reference = class {
    constructor(key, options = {}) {
      this.key = void 0;
      this.isContext = void 0;
      this.isValue = void 0;
      this.isSibling = void 0;
      this.path = void 0;
      this.getter = void 0;
      this.map = void 0;
      if (typeof key !== "string")
        throw new TypeError("ref must be a string, got: " + key);
      this.key = key.trim();
      if (key === "")
        throw new TypeError("ref must be a non-empty string");
      this.isContext = this.key[0] === prefixes.context;
      this.isValue = this.key[0] === prefixes.value;
      this.isSibling = !this.isContext && !this.isValue;
      let prefix = this.isContext ? prefixes.context : this.isValue ? prefixes.value : "";
      this.path = this.key.slice(prefix.length);
      this.getter = this.path && (0, import_property_expr.getter)(this.path, true);
      this.map = options.map;
    }
    getValue(value, parent, context) {
      let result2 = this.isContext ? context : this.isValue ? value : parent;
      if (this.getter)
        result2 = this.getter(result2 || {});
      if (this.map)
        result2 = this.map(result2);
      return result2;
    }
    /**
     *
     * @param {*} value
     * @param {Object} options
     * @param {Object=} options.context
     * @param {Object=} options.parent
     */
    cast(value, options) {
      return this.getValue(value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context);
    }
    resolve() {
      return this;
    }
    describe() {
      return {
        type: "ref",
        key: this.key
      };
    }
    toString() {
      return `Ref(${this.key})`;
    }
    static isRef(value) {
      return value && value.__isYupRef;
    }
  };
  Reference.prototype.__isYupRef = true;

  // ../../node_modules/yup/es/util/createValidation.js
  function _extends2() {
    _extends2 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function createValidation(config) {
    function validate(_ref, cb) {
      let {
        value,
        path = "",
        label,
        options,
        originalValue,
        sync
      } = _ref, rest = _objectWithoutPropertiesLoose(_ref, ["value", "path", "label", "options", "originalValue", "sync"]);
      const {
        name,
        test,
        params,
        message
      } = config;
      let {
        parent,
        context
      } = options;
      function resolve(item) {
        return Reference.isRef(item) ? item.getValue(value, parent, context) : item;
      }
      function createError(overrides = {}) {
        const nextParams = (0, import_mapValues.default)(_extends2({
          value,
          originalValue,
          label,
          path: overrides.path || path
        }, params, overrides.params), resolve);
        const error = new ValidationError(ValidationError.formatError(overrides.message || message, nextParams), value, nextParams.path, overrides.type || name);
        error.params = nextParams;
        return error;
      }
      let ctx = _extends2({
        path,
        parent,
        type: name,
        createError,
        resolve,
        options,
        originalValue
      }, rest);
      if (!sync) {
        try {
          Promise.resolve(test.call(ctx, value, ctx)).then((validOrError) => {
            if (ValidationError.isError(validOrError))
              cb(validOrError);
            else if (!validOrError)
              cb(createError());
            else
              cb(null, validOrError);
          }).catch(cb);
        } catch (err) {
          cb(err);
        }
        return;
      }
      let result2;
      try {
        var _ref2;
        result2 = test.call(ctx, value, ctx);
        if (typeof ((_ref2 = result2) == null ? void 0 : _ref2.then) === "function") {
          throw new Error(`Validation test of type: "${ctx.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        }
      } catch (err) {
        cb(err);
        return;
      }
      if (ValidationError.isError(result2))
        cb(result2);
      else if (!result2)
        cb(createError());
      else
        cb(null, result2);
    }
    validate.OPTIONS = config;
    return validate;
  }

  // ../../node_modules/yup/es/util/reach.js
  var import_property_expr2 = __toESM(require_property_expr());
  var trim = (part) => part.substr(0, part.length - 1).substr(1);
  function getIn(schema, path, value, context = value) {
    let parent, lastPart, lastPartDebug;
    if (!path)
      return {
        parent,
        parentPath: path,
        schema
      };
    (0, import_property_expr2.forEach)(path, (_part, isBracket, isArray) => {
      let part = isBracket ? trim(_part) : _part;
      schema = schema.resolve({
        context,
        parent,
        value
      });
      if (schema.innerType) {
        let idx = isArray ? parseInt(part, 10) : 0;
        if (value && idx >= value.length) {
          throw new Error(`Yup.reach cannot resolve an array item at index: ${_part}, in the path: ${path}. because there is no value at that index. `);
        }
        parent = value;
        value = value && value[idx];
        schema = schema.innerType;
      }
      if (!isArray) {
        if (!schema.fields || !schema.fields[part])
          throw new Error(`The schema does not contain the path: ${path}. (failed at: ${lastPartDebug} which is a type: "${schema._type}")`);
        parent = value;
        value = value && value[part];
        schema = schema.fields[part];
      }
      lastPart = part;
      lastPartDebug = isBracket ? "[" + _part + "]" : "." + _part;
    });
    return {
      schema,
      parent,
      parentPath: lastPart
    };
  }

  // ../../node_modules/yup/es/util/ReferenceSet.js
  var ReferenceSet = class {
    constructor() {
      this.list = void 0;
      this.refs = void 0;
      this.list = /* @__PURE__ */ new Set();
      this.refs = /* @__PURE__ */ new Map();
    }
    get size() {
      return this.list.size + this.refs.size;
    }
    describe() {
      const description = [];
      for (const item of this.list)
        description.push(item);
      for (const [, ref] of this.refs)
        description.push(ref.describe());
      return description;
    }
    toArray() {
      return Array.from(this.list).concat(Array.from(this.refs.values()));
    }
    resolveAll(resolve) {
      return this.toArray().reduce((acc, e) => acc.concat(Reference.isRef(e) ? resolve(e) : e), []);
    }
    add(value) {
      Reference.isRef(value) ? this.refs.set(value.key, value) : this.list.add(value);
    }
    delete(value) {
      Reference.isRef(value) ? this.refs.delete(value.key) : this.list.delete(value);
    }
    clone() {
      const next = new ReferenceSet();
      next.list = new Set(this.list);
      next.refs = new Map(this.refs);
      return next;
    }
    merge(newItems, removeItems) {
      const next = this.clone();
      newItems.list.forEach((value) => next.add(value));
      newItems.refs.forEach((value) => next.add(value));
      removeItems.list.forEach((value) => next.delete(value));
      removeItems.refs.forEach((value) => next.delete(value));
      return next;
    }
  };

  // ../../node_modules/yup/es/schema.js
  function _extends3() {
    _extends3 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends3.apply(this, arguments);
  }
  var BaseSchema = class {
    constructor(options) {
      this.deps = [];
      this.tests = void 0;
      this.transforms = void 0;
      this.conditions = [];
      this._mutate = void 0;
      this._typeError = void 0;
      this._whitelist = new ReferenceSet();
      this._blacklist = new ReferenceSet();
      this.exclusiveTests = /* @__PURE__ */ Object.create(null);
      this.spec = void 0;
      this.tests = [];
      this.transforms = [];
      this.withMutation(() => {
        this.typeError(mixed.notType);
      });
      this.type = (options == null ? void 0 : options.type) || "mixed";
      this.spec = _extends3({
        strip: false,
        strict: false,
        abortEarly: true,
        recursive: true,
        nullable: false,
        presence: "optional"
      }, options == null ? void 0 : options.spec);
    }
    // TODO: remove
    get _type() {
      return this.type;
    }
    _typeCheck(_value) {
      return true;
    }
    clone(spec) {
      if (this._mutate) {
        if (spec)
          Object.assign(this.spec, spec);
        return this;
      }
      const next = Object.create(Object.getPrototypeOf(this));
      next.type = this.type;
      next._typeError = this._typeError;
      next._whitelistError = this._whitelistError;
      next._blacklistError = this._blacklistError;
      next._whitelist = this._whitelist.clone();
      next._blacklist = this._blacklist.clone();
      next.exclusiveTests = _extends3({}, this.exclusiveTests);
      next.deps = [...this.deps];
      next.conditions = [...this.conditions];
      next.tests = [...this.tests];
      next.transforms = [...this.transforms];
      next.spec = clone(_extends3({}, this.spec, spec));
      return next;
    }
    label(label) {
      let next = this.clone();
      next.spec.label = label;
      return next;
    }
    meta(...args) {
      if (args.length === 0)
        return this.spec.meta;
      let next = this.clone();
      next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
      return next;
    }
    // withContext<TContext extends AnyObject>(): BaseSchema<
    //   TCast,
    //   TContext,
    //   TOutput
    // > {
    //   return this as any;
    // }
    withMutation(fn) {
      let before = this._mutate;
      this._mutate = true;
      let result2 = fn(this);
      this._mutate = before;
      return result2;
    }
    concat(schema) {
      if (!schema || schema === this)
        return this;
      if (schema.type !== this.type && this.type !== "mixed")
        throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${schema.type}`);
      let base = this;
      let combined = schema.clone();
      const mergedSpec = _extends3({}, base.spec, combined.spec);
      combined.spec = mergedSpec;
      combined._typeError || (combined._typeError = base._typeError);
      combined._whitelistError || (combined._whitelistError = base._whitelistError);
      combined._blacklistError || (combined._blacklistError = base._blacklistError);
      combined._whitelist = base._whitelist.merge(schema._whitelist, schema._blacklist);
      combined._blacklist = base._blacklist.merge(schema._blacklist, schema._whitelist);
      combined.tests = base.tests;
      combined.exclusiveTests = base.exclusiveTests;
      combined.withMutation((next) => {
        schema.tests.forEach((fn) => {
          next.test(fn.OPTIONS);
        });
      });
      combined.transforms = [...base.transforms, ...combined.transforms];
      return combined;
    }
    isType(v) {
      if (this.spec.nullable && v === null)
        return true;
      return this._typeCheck(v);
    }
    resolve(options) {
      let schema = this;
      if (schema.conditions.length) {
        let conditions = schema.conditions;
        schema = schema.clone();
        schema.conditions = [];
        schema = conditions.reduce((schema2, condition) => condition.resolve(schema2, options), schema);
        schema = schema.resolve(options);
      }
      return schema;
    }
    /**
     *
     * @param {*} value
     * @param {Object} options
     * @param {*=} options.parent
     * @param {*=} options.context
     */
    cast(value, options = {}) {
      let resolvedSchema = this.resolve(_extends3({
        value
      }, options));
      let result2 = resolvedSchema._cast(value, options);
      if (value !== void 0 && options.assert !== false && resolvedSchema.isType(result2) !== true) {
        let formattedValue = printValue(value);
        let formattedResult = printValue(result2);
        throw new TypeError(`The value of ${options.path || "field"} could not be cast to a value that satisfies the schema type: "${resolvedSchema._type}". 

attempted value: ${formattedValue} 
` + (formattedResult !== formattedValue ? `result of cast: ${formattedResult}` : ""));
      }
      return result2;
    }
    _cast(rawValue, _options) {
      let value = rawValue === void 0 ? rawValue : this.transforms.reduce((value2, fn) => fn.call(this, value2, rawValue, this), rawValue);
      if (value === void 0) {
        value = this.getDefault();
      }
      return value;
    }
    _validate(_value, options = {}, cb) {
      let {
        sync,
        path,
        from = [],
        originalValue = _value,
        strict = this.spec.strict,
        abortEarly = this.spec.abortEarly
      } = options;
      let value = _value;
      if (!strict) {
        value = this._cast(value, _extends3({
          assert: false
        }, options));
      }
      let args = {
        value,
        path,
        options,
        originalValue,
        schema: this,
        label: this.spec.label,
        sync,
        from
      };
      let initialTests = [];
      if (this._typeError)
        initialTests.push(this._typeError);
      let finalTests = [];
      if (this._whitelistError)
        finalTests.push(this._whitelistError);
      if (this._blacklistError)
        finalTests.push(this._blacklistError);
      runTests({
        args,
        value,
        path,
        sync,
        tests: initialTests,
        endEarly: abortEarly
      }, (err) => {
        if (err)
          return void cb(err, value);
        runTests({
          tests: this.tests.concat(finalTests),
          args,
          path,
          sync,
          value,
          endEarly: abortEarly
        }, cb);
      });
    }
    validate(value, options, maybeCb) {
      let schema = this.resolve(_extends3({}, options, {
        value
      }));
      return typeof maybeCb === "function" ? schema._validate(value, options, maybeCb) : new Promise((resolve, reject) => schema._validate(value, options, (err, value2) => {
        if (err)
          reject(err);
        else
          resolve(value2);
      }));
    }
    validateSync(value, options) {
      let schema = this.resolve(_extends3({}, options, {
        value
      }));
      let result2;
      schema._validate(value, _extends3({}, options, {
        sync: true
      }), (err, value2) => {
        if (err)
          throw err;
        result2 = value2;
      });
      return result2;
    }
    isValid(value, options) {
      return this.validate(value, options).then(() => true, (err) => {
        if (ValidationError.isError(err))
          return false;
        throw err;
      });
    }
    isValidSync(value, options) {
      try {
        this.validateSync(value, options);
        return true;
      } catch (err) {
        if (ValidationError.isError(err))
          return false;
        throw err;
      }
    }
    _getDefault() {
      let defaultValue = this.spec.default;
      if (defaultValue == null) {
        return defaultValue;
      }
      return typeof defaultValue === "function" ? defaultValue.call(this) : clone(defaultValue);
    }
    getDefault(options) {
      let schema = this.resolve(options || {});
      return schema._getDefault();
    }
    default(def) {
      if (arguments.length === 0) {
        return this._getDefault();
      }
      let next = this.clone({
        default: def
      });
      return next;
    }
    strict(isStrict = true) {
      let next = this.clone();
      next.spec.strict = isStrict;
      return next;
    }
    _isPresent(value) {
      return value != null;
    }
    defined(message = mixed.defined) {
      return this.test({
        message,
        name: "defined",
        exclusive: true,
        test(value) {
          return value !== void 0;
        }
      });
    }
    required(message = mixed.required) {
      return this.clone({
        presence: "required"
      }).withMutation((s) => s.test({
        message,
        name: "required",
        exclusive: true,
        test(value) {
          return this.schema._isPresent(value);
        }
      }));
    }
    notRequired() {
      let next = this.clone({
        presence: "optional"
      });
      next.tests = next.tests.filter((test) => test.OPTIONS.name !== "required");
      return next;
    }
    nullable(isNullable = true) {
      let next = this.clone({
        nullable: isNullable !== false
      });
      return next;
    }
    transform(fn) {
      let next = this.clone();
      next.transforms.push(fn);
      return next;
    }
    /**
     * Adds a test function to the schema's queue of tests.
     * tests can be exclusive or non-exclusive.
     *
     * - exclusive tests, will replace any existing tests of the same name.
     * - non-exclusive: can be stacked
     *
     * If a non-exclusive test is added to a schema with an exclusive test of the same name
     * the exclusive test is removed and further tests of the same name will be stacked.
     *
     * If an exclusive test is added to a schema with non-exclusive tests of the same name
     * the previous tests are removed and further tests of the same name will replace each other.
     */
    test(...args) {
      let opts;
      if (args.length === 1) {
        if (typeof args[0] === "function") {
          opts = {
            test: args[0]
          };
        } else {
          opts = args[0];
        }
      } else if (args.length === 2) {
        opts = {
          name: args[0],
          test: args[1]
        };
      } else {
        opts = {
          name: args[0],
          message: args[1],
          test: args[2]
        };
      }
      if (opts.message === void 0)
        opts.message = mixed.default;
      if (typeof opts.test !== "function")
        throw new TypeError("`test` is a required parameters");
      let next = this.clone();
      let validate = createValidation(opts);
      let isExclusive = opts.exclusive || opts.name && next.exclusiveTests[opts.name] === true;
      if (opts.exclusive) {
        if (!opts.name)
          throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
      }
      if (opts.name)
        next.exclusiveTests[opts.name] = !!opts.exclusive;
      next.tests = next.tests.filter((fn) => {
        if (fn.OPTIONS.name === opts.name) {
          if (isExclusive)
            return false;
          if (fn.OPTIONS.test === validate.OPTIONS.test)
            return false;
        }
        return true;
      });
      next.tests.push(validate);
      return next;
    }
    when(keys, options) {
      if (!Array.isArray(keys) && typeof keys !== "string") {
        options = keys;
        keys = ".";
      }
      let next = this.clone();
      let deps = toArray(keys).map((key) => new Reference(key));
      deps.forEach((dep) => {
        if (dep.isSibling)
          next.deps.push(dep.key);
      });
      next.conditions.push(new Condition_default(deps, options));
      return next;
    }
    typeError(message) {
      let next = this.clone();
      next._typeError = createValidation({
        message,
        name: "typeError",
        test(value) {
          if (value !== void 0 && !this.schema.isType(value))
            return this.createError({
              params: {
                type: this.schema._type
              }
            });
          return true;
        }
      });
      return next;
    }
    oneOf(enums, message = mixed.oneOf) {
      let next = this.clone();
      enums.forEach((val) => {
        next._whitelist.add(val);
        next._blacklist.delete(val);
      });
      next._whitelistError = createValidation({
        message,
        name: "oneOf",
        test(value) {
          if (value === void 0)
            return true;
          let valids = this.schema._whitelist;
          let resolved = valids.resolveAll(this.resolve);
          return resolved.includes(value) ? true : this.createError({
            params: {
              values: valids.toArray().join(", "),
              resolved
            }
          });
        }
      });
      return next;
    }
    notOneOf(enums, message = mixed.notOneOf) {
      let next = this.clone();
      enums.forEach((val) => {
        next._blacklist.add(val);
        next._whitelist.delete(val);
      });
      next._blacklistError = createValidation({
        message,
        name: "notOneOf",
        test(value) {
          let invalids = this.schema._blacklist;
          let resolved = invalids.resolveAll(this.resolve);
          if (resolved.includes(value))
            return this.createError({
              params: {
                values: invalids.toArray().join(", "),
                resolved
              }
            });
          return true;
        }
      });
      return next;
    }
    strip(strip = true) {
      let next = this.clone();
      next.spec.strip = strip;
      return next;
    }
    describe() {
      const next = this.clone();
      const {
        label,
        meta
      } = next.spec;
      const description = {
        meta,
        label,
        type: next.type,
        oneOf: next._whitelist.describe(),
        notOneOf: next._blacklist.describe(),
        tests: next.tests.map((fn) => ({
          name: fn.OPTIONS.name,
          params: fn.OPTIONS.params
        })).filter((n, idx, list) => list.findIndex((c) => c.name === n.name) === idx)
      };
      return description;
    }
  };
  BaseSchema.prototype.__isYupSchema__ = true;
  for (const method of ["validate", "validateSync"])
    BaseSchema.prototype[`${method}At`] = function(path, value, options = {}) {
      const {
        parent,
        parentPath,
        schema
      } = getIn(this, path, value, options.context);
      return schema[method](parent && parent[parentPath], _extends3({}, options, {
        parent,
        path
      }));
    };
  for (const alias of ["equals", "is"])
    BaseSchema.prototype[alias] = BaseSchema.prototype.oneOf;
  for (const alias of ["not", "nope"])
    BaseSchema.prototype[alias] = BaseSchema.prototype.notOneOf;
  BaseSchema.prototype.optional = BaseSchema.prototype.notRequired;

  // ../../node_modules/yup/es/mixed.js
  var Mixed = BaseSchema;
  function create() {
    return new Mixed();
  }
  create.prototype = Mixed.prototype;

  // ../../node_modules/yup/es/util/isAbsent.js
  var isAbsent = (value) => value == null;
  var isAbsent_default = isAbsent;

  // ../../node_modules/yup/es/boolean.js
  function create2() {
    return new BooleanSchema();
  }
  var BooleanSchema = class extends BaseSchema {
    constructor() {
      super({
        type: "boolean"
      });
      this.withMutation(() => {
        this.transform(function(value) {
          if (!this.isType(value)) {
            if (/^(true|1)$/i.test(String(value)))
              return true;
            if (/^(false|0)$/i.test(String(value)))
              return false;
          }
          return value;
        });
      });
    }
    _typeCheck(v) {
      if (v instanceof Boolean)
        v = v.valueOf();
      return typeof v === "boolean";
    }
    isTrue(message = boolean.isValue) {
      return this.test({
        message,
        name: "is-value",
        exclusive: true,
        params: {
          value: "true"
        },
        test(value) {
          return isAbsent_default(value) || value === true;
        }
      });
    }
    isFalse(message = boolean.isValue) {
      return this.test({
        message,
        name: "is-value",
        exclusive: true,
        params: {
          value: "false"
        },
        test(value) {
          return isAbsent_default(value) || value === false;
        }
      });
    }
  };
  create2.prototype = BooleanSchema.prototype;

  // ../../node_modules/yup/es/string.js
  var rEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  var rUrl = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
  var rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  var isTrimmed = (value) => isAbsent_default(value) || value === value.trim();
  var objStringTag = {}.toString();
  function create3() {
    return new StringSchema();
  }
  var StringSchema = class extends BaseSchema {
    constructor() {
      super({
        type: "string"
      });
      this.withMutation(() => {
        this.transform(function(value) {
          if (this.isType(value))
            return value;
          if (Array.isArray(value))
            return value;
          const strValue = value != null && value.toString ? value.toString() : value;
          if (strValue === objStringTag)
            return value;
          return strValue;
        });
      });
    }
    _typeCheck(value) {
      if (value instanceof String)
        value = value.valueOf();
      return typeof value === "string";
    }
    _isPresent(value) {
      return super._isPresent(value) && !!value.length;
    }
    length(length, message = string.length) {
      return this.test({
        message,
        name: "length",
        exclusive: true,
        params: {
          length
        },
        test(value) {
          return isAbsent_default(value) || value.length === this.resolve(length);
        }
      });
    }
    min(min, message = string.min) {
      return this.test({
        message,
        name: "min",
        exclusive: true,
        params: {
          min
        },
        test(value) {
          return isAbsent_default(value) || value.length >= this.resolve(min);
        }
      });
    }
    max(max, message = string.max) {
      return this.test({
        name: "max",
        exclusive: true,
        message,
        params: {
          max
        },
        test(value) {
          return isAbsent_default(value) || value.length <= this.resolve(max);
        }
      });
    }
    matches(regex, options) {
      let excludeEmptyString = false;
      let message;
      let name;
      if (options) {
        if (typeof options === "object") {
          ({
            excludeEmptyString = false,
            message,
            name
          } = options);
        } else {
          message = options;
        }
      }
      return this.test({
        name: name || "matches",
        message: message || string.matches,
        params: {
          regex
        },
        test: (value) => isAbsent_default(value) || value === "" && excludeEmptyString || value.search(regex) !== -1
      });
    }
    email(message = string.email) {
      return this.matches(rEmail, {
        name: "email",
        message,
        excludeEmptyString: true
      });
    }
    url(message = string.url) {
      return this.matches(rUrl, {
        name: "url",
        message,
        excludeEmptyString: true
      });
    }
    uuid(message = string.uuid) {
      return this.matches(rUUID, {
        name: "uuid",
        message,
        excludeEmptyString: false
      });
    }
    //-- transforms --
    ensure() {
      return this.default("").transform((val) => val === null ? "" : val);
    }
    trim(message = string.trim) {
      return this.transform((val) => val != null ? val.trim() : val).test({
        message,
        name: "trim",
        test: isTrimmed
      });
    }
    lowercase(message = string.lowercase) {
      return this.transform((value) => !isAbsent_default(value) ? value.toLowerCase() : value).test({
        message,
        name: "string_case",
        exclusive: true,
        test: (value) => isAbsent_default(value) || value === value.toLowerCase()
      });
    }
    uppercase(message = string.uppercase) {
      return this.transform((value) => !isAbsent_default(value) ? value.toUpperCase() : value).test({
        message,
        name: "string_case",
        exclusive: true,
        test: (value) => isAbsent_default(value) || value === value.toUpperCase()
      });
    }
  };
  create3.prototype = StringSchema.prototype;

  // ../../node_modules/yup/es/number.js
  var isNaN2 = (value) => value != +value;
  function create4() {
    return new NumberSchema();
  }
  var NumberSchema = class extends BaseSchema {
    constructor() {
      super({
        type: "number"
      });
      this.withMutation(() => {
        this.transform(function(value) {
          let parsed = value;
          if (typeof parsed === "string") {
            parsed = parsed.replace(/\s/g, "");
            if (parsed === "")
              return NaN;
            parsed = +parsed;
          }
          if (this.isType(parsed))
            return parsed;
          return parseFloat(parsed);
        });
      });
    }
    _typeCheck(value) {
      if (value instanceof Number)
        value = value.valueOf();
      return typeof value === "number" && !isNaN2(value);
    }
    min(min, message = number.min) {
      return this.test({
        message,
        name: "min",
        exclusive: true,
        params: {
          min
        },
        test(value) {
          return isAbsent_default(value) || value >= this.resolve(min);
        }
      });
    }
    max(max, message = number.max) {
      return this.test({
        message,
        name: "max",
        exclusive: true,
        params: {
          max
        },
        test(value) {
          return isAbsent_default(value) || value <= this.resolve(max);
        }
      });
    }
    lessThan(less, message = number.lessThan) {
      return this.test({
        message,
        name: "max",
        exclusive: true,
        params: {
          less
        },
        test(value) {
          return isAbsent_default(value) || value < this.resolve(less);
        }
      });
    }
    moreThan(more, message = number.moreThan) {
      return this.test({
        message,
        name: "min",
        exclusive: true,
        params: {
          more
        },
        test(value) {
          return isAbsent_default(value) || value > this.resolve(more);
        }
      });
    }
    positive(msg = number.positive) {
      return this.moreThan(0, msg);
    }
    negative(msg = number.negative) {
      return this.lessThan(0, msg);
    }
    integer(message = number.integer) {
      return this.test({
        name: "integer",
        message,
        test: (val) => isAbsent_default(val) || Number.isInteger(val)
      });
    }
    truncate() {
      return this.transform((value) => !isAbsent_default(value) ? value | 0 : value);
    }
    round(method) {
      var _method;
      let avail = ["ceil", "floor", "round", "trunc"];
      method = ((_method = method) == null ? void 0 : _method.toLowerCase()) || "round";
      if (method === "trunc")
        return this.truncate();
      if (avail.indexOf(method.toLowerCase()) === -1)
        throw new TypeError("Only valid options for round() are: " + avail.join(", "));
      return this.transform((value) => !isAbsent_default(value) ? Math[method](value) : value);
    }
  };
  create4.prototype = NumberSchema.prototype;

  // ../../node_modules/yup/es/util/isodate.js
  var isoReg = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
  function parseIsoDate(date2) {
    var numericKeys = [1, 4, 5, 6, 7, 10, 11], minutesOffset = 0, timestamp, struct;
    if (struct = isoReg.exec(date2)) {
      for (var i = 0, k; k = numericKeys[i]; ++i)
        struct[k] = +struct[k] || 0;
      struct[2] = (+struct[2] || 1) - 1;
      struct[3] = +struct[3] || 1;
      struct[7] = struct[7] ? String(struct[7]).substr(0, 3) : 0;
      if ((struct[8] === void 0 || struct[8] === "") && (struct[9] === void 0 || struct[9] === ""))
        timestamp = +new Date(struct[1], struct[2], struct[3], struct[4], struct[5], struct[6], struct[7]);
      else {
        if (struct[8] !== "Z" && struct[9] !== void 0) {
          minutesOffset = struct[10] * 60 + struct[11];
          if (struct[9] === "+")
            minutesOffset = 0 - minutesOffset;
        }
        timestamp = Date.UTC(struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
      }
    } else
      timestamp = Date.parse ? Date.parse(date2) : NaN;
    return timestamp;
  }

  // ../../node_modules/yup/es/date.js
  var invalidDate = /* @__PURE__ */ new Date("");
  var isDate = (obj) => Object.prototype.toString.call(obj) === "[object Date]";
  function create5() {
    return new DateSchema();
  }
  var DateSchema = class extends BaseSchema {
    constructor() {
      super({
        type: "date"
      });
      this.withMutation(() => {
        this.transform(function(value) {
          if (this.isType(value))
            return value;
          value = parseIsoDate(value);
          return !isNaN(value) ? new Date(value) : invalidDate;
        });
      });
    }
    _typeCheck(v) {
      return isDate(v) && !isNaN(v.getTime());
    }
    prepareParam(ref, name) {
      let param;
      if (!Reference.isRef(ref)) {
        let cast = this.cast(ref);
        if (!this._typeCheck(cast))
          throw new TypeError(`\`${name}\` must be a Date or a value that can be \`cast()\` to a Date`);
        param = cast;
      } else {
        param = ref;
      }
      return param;
    }
    min(min, message = date.min) {
      let limit = this.prepareParam(min, "min");
      return this.test({
        message,
        name: "min",
        exclusive: true,
        params: {
          min
        },
        test(value) {
          return isAbsent_default(value) || value >= this.resolve(limit);
        }
      });
    }
    max(max, message = date.max) {
      let limit = this.prepareParam(max, "max");
      return this.test({
        message,
        name: "max",
        exclusive: true,
        params: {
          max
        },
        test(value) {
          return isAbsent_default(value) || value <= this.resolve(limit);
        }
      });
    }
  };
  DateSchema.INVALID_DATE = invalidDate;
  create5.prototype = DateSchema.prototype;
  create5.INVALID_DATE = invalidDate;

  // ../../node_modules/yup/es/object.js
  var import_has3 = __toESM(require_has());
  var import_snakeCase = __toESM(require_snakeCase());
  var import_camelCase = __toESM(require_camelCase());
  var import_mapKeys = __toESM(require_mapKeys());
  var import_mapValues2 = __toESM(require_mapValues());
  var import_property_expr4 = __toESM(require_property_expr());

  // ../../node_modules/yup/es/util/sortFields.js
  var import_has2 = __toESM(require_has());
  var import_toposort = __toESM(require_toposort());
  var import_property_expr3 = __toESM(require_property_expr());
  function sortFields(fields, excludedEdges = []) {
    let edges = [];
    let nodes = /* @__PURE__ */ new Set();
    let excludes = new Set(excludedEdges.map(([a, b]) => `${a}-${b}`));
    function addNode(depPath, key) {
      let node = (0, import_property_expr3.split)(depPath)[0];
      nodes.add(node);
      if (!excludes.has(`${key}-${node}`))
        edges.push([key, node]);
    }
    for (const key in fields)
      if ((0, import_has2.default)(fields, key)) {
        let value = fields[key];
        nodes.add(key);
        if (Reference.isRef(value) && value.isSibling)
          addNode(value.path, key);
        else if (isSchema_default(value) && "deps" in value)
          value.deps.forEach((path) => addNode(path, key));
      }
    return import_toposort.default.array(Array.from(nodes), edges).reverse();
  }

  // ../../node_modules/yup/es/util/sortByKeyOrder.js
  function findIndex(arr, err) {
    let idx = Infinity;
    arr.some((key, ii) => {
      var _err$path;
      if (((_err$path = err.path) == null ? void 0 : _err$path.indexOf(key)) !== -1) {
        idx = ii;
        return true;
      }
    });
    return idx;
  }
  function sortByKeyOrder(keys) {
    return (a, b) => {
      return findIndex(keys, a) - findIndex(keys, b);
    };
  }

  // ../../node_modules/yup/es/object.js
  function _extends4() {
    _extends4 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends4.apply(this, arguments);
  }
  var isObject = (obj) => Object.prototype.toString.call(obj) === "[object Object]";
  function unknown(ctx, value) {
    let known = Object.keys(ctx.fields);
    return Object.keys(value).filter((key) => known.indexOf(key) === -1);
  }
  var defaultSort = sortByKeyOrder([]);
  var ObjectSchema = class extends BaseSchema {
    constructor(spec) {
      super({
        type: "object"
      });
      this.fields = /* @__PURE__ */ Object.create(null);
      this._sortErrors = defaultSort;
      this._nodes = [];
      this._excludedEdges = [];
      this.withMutation(() => {
        this.transform(function coerce(value) {
          if (typeof value === "string") {
            try {
              value = JSON.parse(value);
            } catch (err) {
              value = null;
            }
          }
          if (this.isType(value))
            return value;
          return null;
        });
        if (spec) {
          this.shape(spec);
        }
      });
    }
    _typeCheck(value) {
      return isObject(value) || typeof value === "function";
    }
    _cast(_value, options = {}) {
      var _options$stripUnknown;
      let value = super._cast(_value, options);
      if (value === void 0)
        return this.getDefault();
      if (!this._typeCheck(value))
        return value;
      let fields = this.fields;
      let strip = (_options$stripUnknown = options.stripUnknown) != null ? _options$stripUnknown : this.spec.noUnknown;
      let props = this._nodes.concat(Object.keys(value).filter((v) => this._nodes.indexOf(v) === -1));
      let intermediateValue = {};
      let innerOptions = _extends4({}, options, {
        parent: intermediateValue,
        __validating: options.__validating || false
      });
      let isChanged = false;
      for (const prop of props) {
        let field = fields[prop];
        let exists = (0, import_has3.default)(value, prop);
        if (field) {
          let fieldValue;
          let inputValue = value[prop];
          innerOptions.path = (options.path ? `${options.path}.` : "") + prop;
          field = field.resolve({
            value: inputValue,
            context: options.context,
            parent: intermediateValue
          });
          let fieldSpec = "spec" in field ? field.spec : void 0;
          let strict = fieldSpec == null ? void 0 : fieldSpec.strict;
          if (fieldSpec == null ? void 0 : fieldSpec.strip) {
            isChanged = isChanged || prop in value;
            continue;
          }
          fieldValue = !options.__validating || !strict ? (
            // TODO: use _cast, this is double resolving
            field.cast(value[prop], innerOptions)
          ) : value[prop];
          if (fieldValue !== void 0) {
            intermediateValue[prop] = fieldValue;
          }
        } else if (exists && !strip) {
          intermediateValue[prop] = value[prop];
        }
        if (intermediateValue[prop] !== value[prop]) {
          isChanged = true;
        }
      }
      return isChanged ? intermediateValue : value;
    }
    _validate(_value, opts = {}, callback) {
      let errors = [];
      let {
        sync,
        from = [],
        originalValue = _value,
        abortEarly = this.spec.abortEarly,
        recursive = this.spec.recursive
      } = opts;
      from = [{
        schema: this,
        value: originalValue
      }, ...from];
      opts.__validating = true;
      opts.originalValue = originalValue;
      opts.from = from;
      super._validate(_value, opts, (err, value) => {
        if (err) {
          if (!ValidationError.isError(err) || abortEarly) {
            return void callback(err, value);
          }
          errors.push(err);
        }
        if (!recursive || !isObject(value)) {
          callback(errors[0] || null, value);
          return;
        }
        originalValue = originalValue || value;
        let tests = this._nodes.map((key) => (_, cb) => {
          let path = key.indexOf(".") === -1 ? (opts.path ? `${opts.path}.` : "") + key : `${opts.path || ""}["${key}"]`;
          let field = this.fields[key];
          if (field && "validate" in field) {
            field.validate(value[key], _extends4({}, opts, {
              // @ts-ignore
              path,
              from,
              // inner fields are always strict:
              // 1. this isn't strict so the casting will also have cast inner values
              // 2. this is strict in which case the nested values weren't cast either
              strict: true,
              parent: value,
              originalValue: originalValue[key]
            }), cb);
            return;
          }
          cb(null);
        });
        runTests({
          sync,
          tests,
          value,
          errors,
          endEarly: abortEarly,
          sort: this._sortErrors,
          path: opts.path
        }, callback);
      });
    }
    clone(spec) {
      const next = super.clone(spec);
      next.fields = _extends4({}, this.fields);
      next._nodes = this._nodes;
      next._excludedEdges = this._excludedEdges;
      next._sortErrors = this._sortErrors;
      return next;
    }
    concat(schema) {
      let next = super.concat(schema);
      let nextFields = next.fields;
      for (let [field, schemaOrRef] of Object.entries(this.fields)) {
        const target = nextFields[field];
        if (target === void 0) {
          nextFields[field] = schemaOrRef;
        } else if (target instanceof BaseSchema && schemaOrRef instanceof BaseSchema) {
          nextFields[field] = schemaOrRef.concat(target);
        }
      }
      return next.withMutation(() => next.shape(nextFields, this._excludedEdges));
    }
    getDefaultFromShape() {
      let dft = {};
      this._nodes.forEach((key) => {
        const field = this.fields[key];
        dft[key] = "default" in field ? field.getDefault() : void 0;
      });
      return dft;
    }
    _getDefault() {
      if ("default" in this.spec) {
        return super._getDefault();
      }
      if (!this._nodes.length) {
        return void 0;
      }
      return this.getDefaultFromShape();
    }
    shape(additions, excludes = []) {
      let next = this.clone();
      let fields = Object.assign(next.fields, additions);
      next.fields = fields;
      next._sortErrors = sortByKeyOrder(Object.keys(fields));
      if (excludes.length) {
        if (!Array.isArray(excludes[0]))
          excludes = [excludes];
        next._excludedEdges = [...next._excludedEdges, ...excludes];
      }
      next._nodes = sortFields(fields, next._excludedEdges);
      return next;
    }
    pick(keys) {
      const picked = {};
      for (const key of keys) {
        if (this.fields[key])
          picked[key] = this.fields[key];
      }
      return this.clone().withMutation((next) => {
        next.fields = {};
        return next.shape(picked);
      });
    }
    omit(keys) {
      const next = this.clone();
      const fields = next.fields;
      next.fields = {};
      for (const key of keys) {
        delete fields[key];
      }
      return next.withMutation(() => next.shape(fields));
    }
    from(from, to, alias) {
      let fromGetter = (0, import_property_expr4.getter)(from, true);
      return this.transform((obj) => {
        if (obj == null)
          return obj;
        let newObj = obj;
        if ((0, import_has3.default)(obj, from)) {
          newObj = _extends4({}, obj);
          if (!alias)
            delete newObj[from];
          newObj[to] = fromGetter(obj);
        }
        return newObj;
      });
    }
    noUnknown(noAllow = true, message = object.noUnknown) {
      if (typeof noAllow === "string") {
        message = noAllow;
        noAllow = true;
      }
      let next = this.test({
        name: "noUnknown",
        exclusive: true,
        message,
        test(value) {
          if (value == null)
            return true;
          const unknownKeys = unknown(this.schema, value);
          return !noAllow || unknownKeys.length === 0 || this.createError({
            params: {
              unknown: unknownKeys.join(", ")
            }
          });
        }
      });
      next.spec.noUnknown = noAllow;
      return next;
    }
    unknown(allow = true, message = object.noUnknown) {
      return this.noUnknown(!allow, message);
    }
    transformKeys(fn) {
      return this.transform((obj) => obj && (0, import_mapKeys.default)(obj, (_, key) => fn(key)));
    }
    camelCase() {
      return this.transformKeys(import_camelCase.default);
    }
    snakeCase() {
      return this.transformKeys(import_snakeCase.default);
    }
    constantCase() {
      return this.transformKeys((key) => (0, import_snakeCase.default)(key).toUpperCase());
    }
    describe() {
      let base = super.describe();
      base.fields = (0, import_mapValues2.default)(this.fields, (value) => value.describe());
      return base;
    }
  };
  function create6(spec) {
    return new ObjectSchema(spec);
  }
  create6.prototype = ObjectSchema.prototype;

  // ../../node_modules/yup/es/array.js
  function _extends5() {
    _extends5 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends5.apply(this, arguments);
  }
  function create7(type) {
    return new ArraySchema(type);
  }
  var ArraySchema = class extends BaseSchema {
    constructor(type) {
      super({
        type: "array"
      });
      this.innerType = void 0;
      this.innerType = type;
      this.withMutation(() => {
        this.transform(function(values) {
          if (typeof values === "string")
            try {
              values = JSON.parse(values);
            } catch (err) {
              values = null;
            }
          return this.isType(values) ? values : null;
        });
      });
    }
    _typeCheck(v) {
      return Array.isArray(v);
    }
    get _subType() {
      return this.innerType;
    }
    _cast(_value, _opts) {
      const value = super._cast(_value, _opts);
      if (!this._typeCheck(value) || !this.innerType)
        return value;
      let isChanged = false;
      const castArray = value.map((v, idx) => {
        const castElement = this.innerType.cast(v, _extends5({}, _opts, {
          path: `${_opts.path || ""}[${idx}]`
        }));
        if (castElement !== v) {
          isChanged = true;
        }
        return castElement;
      });
      return isChanged ? castArray : value;
    }
    _validate(_value, options = {}, callback) {
      var _options$abortEarly, _options$recursive;
      let errors = [];
      let sync = options.sync;
      let path = options.path;
      let innerType = this.innerType;
      let endEarly = (_options$abortEarly = options.abortEarly) != null ? _options$abortEarly : this.spec.abortEarly;
      let recursive = (_options$recursive = options.recursive) != null ? _options$recursive : this.spec.recursive;
      let originalValue = options.originalValue != null ? options.originalValue : _value;
      super._validate(_value, options, (err, value) => {
        if (err) {
          if (!ValidationError.isError(err) || endEarly) {
            return void callback(err, value);
          }
          errors.push(err);
        }
        if (!recursive || !innerType || !this._typeCheck(value)) {
          callback(errors[0] || null, value);
          return;
        }
        originalValue = originalValue || value;
        let tests = new Array(value.length);
        for (let idx = 0; idx < value.length; idx++) {
          let item = value[idx];
          let path2 = `${options.path || ""}[${idx}]`;
          let innerOptions = _extends5({}, options, {
            path: path2,
            strict: true,
            parent: value,
            index: idx,
            originalValue: originalValue[idx]
          });
          tests[idx] = (_, cb) => innerType.validate(item, innerOptions, cb);
        }
        runTests({
          sync,
          path,
          value,
          errors,
          endEarly,
          tests
        }, callback);
      });
    }
    clone(spec) {
      const next = super.clone(spec);
      next.innerType = this.innerType;
      return next;
    }
    concat(schema) {
      let next = super.concat(schema);
      next.innerType = this.innerType;
      if (schema.innerType)
        next.innerType = next.innerType ? (
          // @ts-expect-error Lazy doesn't have concat()
          next.innerType.concat(schema.innerType)
        ) : schema.innerType;
      return next;
    }
    of(schema) {
      let next = this.clone();
      if (!isSchema_default(schema))
        throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + printValue(schema));
      next.innerType = schema;
      return next;
    }
    length(length, message = array.length) {
      return this.test({
        message,
        name: "length",
        exclusive: true,
        params: {
          length
        },
        test(value) {
          return isAbsent_default(value) || value.length === this.resolve(length);
        }
      });
    }
    min(min, message) {
      message = message || array.min;
      return this.test({
        message,
        name: "min",
        exclusive: true,
        params: {
          min
        },
        // FIXME(ts): Array<typeof T>
        test(value) {
          return isAbsent_default(value) || value.length >= this.resolve(min);
        }
      });
    }
    max(max, message) {
      message = message || array.max;
      return this.test({
        message,
        name: "max",
        exclusive: true,
        params: {
          max
        },
        test(value) {
          return isAbsent_default(value) || value.length <= this.resolve(max);
        }
      });
    }
    ensure() {
      return this.default(() => []).transform((val, original) => {
        if (this._typeCheck(val))
          return val;
        return original == null ? [] : [].concat(original);
      });
    }
    compact(rejector) {
      let reject = !rejector ? (v) => !!v : (v, i, a) => !rejector(v, i, a);
      return this.transform((values) => values != null ? values.filter(reject) : values);
    }
    describe() {
      let base = super.describe();
      if (this.innerType)
        base.innerType = this.innerType.describe();
      return base;
    }
    nullable(isNullable = true) {
      return super.nullable(isNullable);
    }
    defined() {
      return super.defined();
    }
    required(msg) {
      return super.required(msg);
    }
  };
  create7.prototype = ArraySchema.prototype;

  // src/account.schema.ts
  var updateAccountSchema = create6({
    email: create3().max(128, "Email must be 128 characters or less."),
    address_1: create3().max(64, "Address must be 64 characters or less."),
    city: create3().max(24, "City must be 24 characters or less."),
    company: create3().max(128, "Company must be 128 characters or less."),
    country: create3().min(2, "Country code must be two letters.").max(2, "Country code must be two letters."),
    first_name: create3().max(50, "First name must be 50 characters or less."),
    last_name: create3().max(50, "Last name must be 50 characters or less."),
    address_2: create3().max(64, "Address must be 64 characters or less."),
    phone: create3().max(32, "Phone number must be 32 characters or less."),
    state: create3().max(24, "State must be 24 characters or less."),
    tax_id: create3().max(100, "Tax ID must be 100 characters or less."),
    zip: create3().max(16, "Zip code must be 16 characters or less.")
  });
  var createOAuthClientSchema = create6({
    label: create3().required("Label is required.").min(1, "Label must be between 1 and 512 characters.").max(512, "Label must be between 1 and 512 characters."),
    redirect_uri: create3().required("Redirect URI is required.")
  });
  var updateOAuthClientSchema = create6({
    label: create3().min(1, "Label must be between 1 and 512 characters.").max(512, "Label must be between 1 and 512 characters."),
    redirect_uri: create3()
  });
  var StagePaypalPaymentSchema = create6({
    cancel_url: create3().required(
      "You must provide a URL to redirect on cancel."
    ),
    redirect_url: create3().required("You must provide a redirect URL."),
    usd: create3().required("USD payment amount is required.")
  });
  var ExecutePaypalPaymentSchema = create6({
    payer_id: create3().required("You must provide a payer ID."),
    payment_id: create3().required("You must provide a payment ID (from Paypal).")
  });
  var PaymentSchema = create6({
    usd: create3().required("USD payment amount is required.")
  });
  var CreditCardSchema = create6({
    card_number: create3().required("Credit card number is required.").min(13, "Credit card number must be between 13 and 23 characters.").max(23, "Credit card number must be between 13 and 23 characters."),
    expiry_year: create4().test(
      "length",
      "Expiration year must be 2 or 4 digits.",
      (value) => [2, 4].includes(String(value).length)
    ).required("Expiration year is required.").typeError("Expiration year must be a number.").min((/* @__PURE__ */ new Date()).getFullYear(), "Expiration year must not be in the past.").max((/* @__PURE__ */ new Date()).getFullYear() + 20, "Expiry too far in the future."),
    expiry_month: create4().required("Expiration month is required.").typeError("Expiration month must be a number.").min(1, "Expiration month must be a number from 1 to 12.").max(12, "Expiration month must be a number from 1 to 12."),
    cvv: create3().required("Security code is required.").min(3, "Security code must be between 3 and 4 characters.").max(4, "Security code must be between 3 and 4 characters.")
  });
  var PaymentMethodSchema = create6({
    type: create().oneOf(
      ["credit_card", "payment_method_nonce"],
      "Type must be credit_card or payment_method_nonce."
    ),
    data: create6().when("type", {
      is: "credit_card",
      then: CreditCardSchema,
      otherwise: create6({
        nonce: create3().required("Payment nonce is required.")
      })
    }),
    is_default: create2().required(
      "You must indicate if this should be your default method of payment."
    )
  });
  var CreateUserSchema = create6({
    username: create3().required("Username is required.").min(3, "Username must be between 3 and 32 characters.").max(32, "Username must be between 3 and 32 characters."),
    email: create3().required("Email address is required.").email("Must be a valid email address."),
    restricted: create2().required(
      "You must indicate if this user should have restricted access."
    )
  });
  var UpdateUserSchema = create6({
    username: create3().min(3, "Username must be between 3 and 32 characters.").max(32, "Username must be between 3 and 32 characters."),
    email: create3().email("Must be a valid email address."),
    restricted: create2()
  });
  var GrantSchema = create6({
    id: create4().required("ID is required."),
    permissions: create().oneOf(
      [null, "read_only", "read_write"],
      "Permissions must be null, read_only, or read_write."
    )
  });
  var UpdateGrantSchema = create6({
    global: create6(),
    linode: create7().of(GrantSchema),
    domain: create7().of(GrantSchema),
    nodebalancer: create7().of(GrantSchema),
    image: create7().of(GrantSchema),
    longview: create7().of(GrantSchema),
    stackscript: create7().of(GrantSchema),
    volume: create7().of(GrantSchema)
  });
  var UpdateAccountSettingsSchema = create6({
    network_helper: create2(),
    backups_enabled: create2(),
    managed: create2()
  });
  var PromoCodeSchema = create6({
    promo_code: create3().required("Promo code is required.").min(1, "Promo code must be between 1 and 32 characters.").max(32, "Promo code must be between 1 and 32 characters.")
  });

  // src/buckets.schema.ts
  var CreateBucketSchema = create6({
    label: create3().required("Label is required.").matches(/^\S*$/, "Label must not contain spaces.").ensure().min(3, "Label must be between 3 and 63 characters.").max(63, "Label must be between 3 and 63 characters."),
    cluster: create3().required("Cluster is required.")
  });
  var UploadCertificateSchema = create6({
    certificate: create3().required("Certificate is required."),
    private_key: create3().required("Private key is required.")
  });
  var UpdateBucketAccessSchema = create6({
    acl: create3().oneOf([
      "private",
      "public-read",
      "authenticated-read",
      "public-read-write"
    ]).notRequired(),
    cors_enabled: create2().notRequired()
  });

  // src/databases.schema.ts
  var LABEL_MESSAGE = "Label must be between 3 and 32 characters";
  var createDatabaseSchema = create6({
    label: create3().required("Label is required").min(3, LABEL_MESSAGE).max(32, LABEL_MESSAGE),
    engine: create3().required("Database Engine is required"),
    region: create3().required("Region is required"),
    type: create3().required("Type is required"),
    cluster_size: create4().oneOf([1, 3], "Nodes are required").required("Nodes are required"),
    replication_type: create3().when("engine", {
      is: (engine) => Boolean(engine.match(/mysql|postgres/g)),
      then: create3().when("engine", {
        is: (engine) => Boolean(engine.match(/mysql/)),
        then: create3().oneOf(["none", "semi_synch", "asynch"])
      }).when("engine", {
        is: (engine) => Boolean(engine.match(/postgres/)),
        then: create3().oneOf(["none", "synch", "asynch"])
      }).required("Replication Type is required"),
      otherwise: create3().notRequired().nullable(true)
    }),
    replication_commit_type: create3().when("engine", {
      is: (engine) => Boolean(engine.match(/postgres/)),
      then: create3().oneOf(["off", "on", "local", "remote_write", "remote_apply"]).required(),
      otherwise: create3().notRequired().nullable(true)
    }),
    storage_engine: create3().when("engine", {
      is: (engine) => Boolean(engine.match(/mongodb/)),
      then: create3().oneOf(["wiredtiger", "mmapv1"]).notRequired(),
      otherwise: create3().notRequired().nullable(true)
    }),
    compression_type: create3().when("engine", {
      is: (engine) => Boolean(engine.match(/mongodb/)),
      then: create3().oneOf(["none", "snappy", "zlib"]).notRequired(),
      otherwise: create3().notRequired().nullable(true)
    })
  });
  var updateDatabaseSchema = create6({
    label: create3().notRequired().min(3, LABEL_MESSAGE).max(32, LABEL_MESSAGE),
    allow_list: create7().of(create3()).required("An IPv4 address is required"),
    updates: create6().notRequired().shape({
      frequency: create3().oneOf(["weekly", "monthly"]),
      duration: create4(),
      hour_of_day: create4(),
      day_of_week: create4(),
      week_of_month: create4().nullable(true)
    }).nullable(true)
  });

  // src/domains.schema.ts
  var importZoneSchema = create6({
    domain: create3().required("Domain is required."),
    remote_nameserver: create3().required("Remote nameserver is required.")
  });
  var domainSchemaBase = create6().shape({
    domain: create3().matches(
      /([a-zA-Z0-9-_]+\.)+([a-zA-Z]{2,3}\.)?([a-zA-Z]{2,16}|XN--[a-zA-Z0-9]+)/,
      "Domain is not valid."
    ),
    status: create().oneOf(["disabled", "active", "edit_mode", "has_errors"]),
    tags: create7(),
    description: create3().min(1, "Description must be between 1 and 253 characters.").max(253, "Description must be between 1 and 253 characters."),
    retry_sec: create4(),
    master_ips: create7().of(create3()),
    axfr_ips: create7().of(create3()).typeError("Must be a comma-separated list of IP addresses."),
    expire_sec: create4(),
    refresh_sec: create4(),
    ttl_sec: create4()
  });
  var createDomainSchema = domainSchemaBase.shape({
    domain: create3().required("Domain is required.").matches(
      /([a-zA-Z0-9-_]+\.)+([a-zA-Z]{2,3}\.)?([a-zA-Z]{2,16}|XN--[a-zA-Z0-9]+)/,
      "Domain is not valid."
    ),
    tags: create7().of(create3()),
    type: create().required().oneOf(["master", "slave"]),
    soa_email: create3().when("type", {
      is: "master",
      then: create3().required("SOA Email is required."),
      otherwise: create3()
    }).email("SOA Email is not valid."),
    master_ips: create7().of(create3()).when("type", {
      is: "slave",
      then: create7().of(create3()).compact().ensure().required("At least one primary IP address is required.").min(1, "At least one primary IP address is required."),
      otherwise: create7().of(create3())
    })
  });
  var updateDomainSchema = domainSchemaBase.shape({
    domainId: create4(),
    soa_email: create3().email("SOA Email is not valid."),
    axfr_ips: create7().of(create3()),
    tags: create7().of(create3())
  });

  // src/firewalls.schema.ts
  var import_ipaddr = __toESM(require_ipaddr(), 1);
  var IP_ERROR_MESSAGE = "Must be a valid IPv4 or IPv6 address or range.";
  var validateIP = (ipAddress2) => {
    if (!ipAddress2) {
      return false;
    }
    const [, mask] = ipAddress2.split("/");
    try {
      if (mask) {
        import_ipaddr.default.parseCIDR(ipAddress2);
      } else {
        import_ipaddr.default.parse(ipAddress2);
      }
    } catch (err) {
      if (ipAddress2 !== "") {
        return false;
      }
    }
    return true;
  };
  var CreateFirewallDeviceSchema = create6({
    linodes: create7().of(create4()),
    nodebalancers: create7().of(create4())
  });
  var ipAddress = create3().test({
    name: "validateIP",
    message: IP_ERROR_MESSAGE,
    test: validateIP
  });
  var validateFirewallPorts = create3().matches(
    /^([0-9\-]+,?\s?)+$/,
    "Ports must be an integer, range of integers, or a comma-separated list of integers."
  );
  var validFirewallRuleProtocol = ["ALL", "TCP", "UDP", "ICMP", "IPENCAP"];
  var FirewallRuleTypeSchema = create6().shape({
    action: create().oneOf(["ACCEPT", "DROP"]).required("Action is required"),
    protocol: create().oneOf(validFirewallRuleProtocol).required("Protocol is required."),
    ports: create3().when("protocol", {
      is: (val) => val !== "ICMP" && val !== "IPENCAP",
      then: validateFirewallPorts,
      // Workaround to get the test to fail if ports is defined when protocol === ICMP or IPENCAP
      otherwise: create3().test({
        name: "protocol",
        message: "Ports are not allowed for ICMP and IPENCAP protocols.",
        test: (value) => typeof value === "undefined"
      })
    }),
    addresses: create6().shape({
      ipv4: create7().of(ipAddress).nullable(true),
      ipv6: create7().of(ipAddress).nullable(true)
    }).strict(true).nullable(true)
  });
  var FirewallRuleSchema = create6().shape({
    inbound: create7(FirewallRuleTypeSchema).nullable(true),
    outbound: create7(FirewallRuleTypeSchema).nullable(true),
    inbound_policy: create().oneOf(["ACCEPT", "DROP"]).required("Inbound policy is required."),
    outbound_policy: create().oneOf(["ACCEPT", "DROP"]).required("Outbound policy is required.")
  });
  var CreateFirewallSchema = create6().shape({
    label: create3().required("Label is required.").min(3, "Label must be between 3 and 32 characters.").max(32, "Label must be between 3 and 32 characters."),
    // Label validation on the back end is more complicated, we only do basic checks here.
    tags: create7().of(create3()),
    rules: FirewallRuleSchema
  });
  var UpdateFirewallSchema = create6().shape({
    label: create3(),
    tags: create7().of(create3()),
    status: create3().oneOf(["enabled", "disabled"])
    // 'deleted' is also a status but it's not settable
  });
  var FirewallDeviceSchema = create6({
    type: create3().oneOf(["linode", "nodebalancer"]).required("Device type is required."),
    id: create4().required("ID is required.")
  });

  // src/images.schema.ts
  var labelSchema = create3().max(50, "Length must be 50 characters or less.").matches(
    /^[a-zA-Z0-9,.?\-_\s']+$/,
    "Image labels cannot contain special characters."
  );
  var baseImageSchema = create6().shape({
    label: labelSchema.notRequired(),
    description: create3().notRequired().min(1).max(65e3)
  });
  var createImageSchema = baseImageSchema.shape({
    disk_id: create4().typeError("Disk is required.").required("Disk is required.")
  });
  var uploadImageSchema = baseImageSchema.shape({
    label: labelSchema.required("Label is required."),
    region: create3().required("Region is required.")
  });
  var updateImageSchema = create6().shape({
    label: create3().notRequired().max(50, "Length must be 50 characters or less.").matches(
      /^[a-zA-Z0-9,.?\-_\s']+$/,
      "Image labels cannot contain special characters."
    ),
    description: create3().notRequired().max(65e3, "Length must be 65000 characters or less.")
  });

  // src/kubernetes.schema.ts
  var nodePoolSchema = create6().shape({
    type: create3(),
    count: create4()
  });
  var AutoscaleNodePoolSchema = create6({
    enabled: create2(),
    min: create4().when("enabled", {
      is: true,
      then: create4().required().test(
        "min",
        "Minimum must be between 1 and 99 nodes and cannot be greater than Maximum.",
        function(min) {
          if (!min) {
            return false;
          }
          if (min < 1 || min > 99) {
            return false;
          }
          if (min > this.parent["max"]) {
            return false;
          }
          return true;
        }
      )
    }),
    max: create4().when("enabled", {
      is: true,
      then: create4().required().min(1, "Maximum must be between 1 and 100 nodes.").max(100, "Maximum must be between 1 and 100 nodes.")
    })
  });
  var clusterLabelSchema = create3().required("Label is required.").matches(
    /^[a-zA-Z0-9-]+$/,
    "Cluster labels cannot contain special characters, spaces, or underscores."
  ).min(3, "Length must be between 3 and 32 characters.").max(32, "Length must be between 3 and 32 characters.");
  var createKubeClusterSchema = create6().shape({
    label: clusterLabelSchema,
    region: create3().required("Region is required."),
    k8s_version: create3().required("Kubernetes version is required."),
    node_pools: create7().of(nodePoolSchema).min(1, "Please add at least one node pool.")
  });

  // src/linodes.schema.ts
  var import_ipaddr2 = __toESM(require_ipaddr(), 1);
  var validateIP2 = (ipAddress2) => {
    if (!ipAddress2) {
      return true;
    }
    try {
      import_ipaddr2.default.parseCIDR(ipAddress2);
    } catch (err) {
      return false;
    }
    return true;
  };
  var stackscript_data = create7().of(create6()).nullable(true);
  var linodeInterfaceSchema = create7().of(
    create6({
      purpose: create().oneOf(
        [null, "public", "vlan"],
        "Purpose must be null, public, or vlan."
      ),
      label: create3().when("purpose", {
        is: "vlan",
        then: create3().required("VLAN label is required.").min(1, "VLAN label must be between 1 and 64 characters.").max(64, "VLAN label must be between 1 and 64 characters.").matches(
          /[a-zA-Z0-9-]+/,
          "Must include only ASCII letters, numbers, and dashes"
        ),
        otherwise: create3().notRequired().nullable(true)
      }).nullable(true),
      ipam_address: create3().nullable(true).test({
        name: "validateIPAM",
        message: "Must be a valid IPv4 range, e.g. 192.0.2.0/24.",
        test: validateIP2
      })
    })
  ).test(
    "unique-public-interface",
    "Only one public interface per config is allowed.",
    (list) => {
      if (!list) {
        return true;
      }
      return list.filter((thisSlot) => thisSlot.purpose === "public").length <= 1;
    }
  );
  var ResizeLinodeDiskSchema = create6({
    size: create4().required("Size is required.").min(1)
  });
  var UpdateLinodePasswordSchema = create6({
    password: create3().required("Password is required.")
    // .concat(rootPasswordValidation)
  });
  var CreateLinodeSchema = create6({
    type: create3().ensure().required("Plan is required."),
    region: create3().ensure().required("Region is required."),
    stackscript_id: create4().notRequired(),
    backup_id: create4().notRequired(),
    swap_size: create4().notRequired(),
    image: create3().when("stackscript_id", {
      is: (value) => value !== void 0,
      then: create3().required("Image is required."),
      otherwise: create3().notRequired()
    }),
    authorized_keys: create7().of(create3()).notRequired(),
    backups_enabled: create2().notRequired(),
    stackscript_data,
    booted: create2().notRequired(),
    label: create3().transform((v) => v === "" ? void 0 : v).notRequired().min(3, "Label must contain between 3 and 64 characters.").max(64, "Label must contain between 3 and 64 characters."),
    tags: create7().of(create3()).notRequired(),
    private_ip: create2().notRequired(),
    authorized_users: create7().of(create3()).notRequired(),
    root_pass: create3().when("image", {
      is: (value) => Boolean(value),
      then: create3().required(
        "You must provide a root password when deploying from an image."
      ),
      // .concat(rootPasswordValidation),
      otherwise: create3().notRequired()
    }),
    interfaces: linodeInterfaceSchema
  });
  var alerts = create6({
    cpu: create4().typeError("CPU Usage must be a number").min(0, "Must be between 0 and 4800").max(4800, "Must be between 0 and 4800"),
    network_in: create4(),
    network_out: create4(),
    transfer_quota: create4(),
    io: create4()
  }).notRequired();
  var schedule = create6({
    day: create().oneOf(
      [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "Invalid day value."
    ),
    window: create().oneOf(
      [
        "W0",
        "W2",
        "W4",
        "W6",
        "W8",
        "W10",
        "W12",
        "W14",
        "W16",
        "W18",
        "W20",
        "W22",
        "W24"
      ],
      "Invalid schedule value."
    )
  });
  var backups = create6({
    schedule,
    enabled: create2()
  });
  var UpdateLinodeSchema = create6({
    label: create3().transform((v) => v === "" ? void 0 : v).notRequired().min(3, "Label must contain between 3 and 64 characters.").max(64, "Label must contain between 3 and 64 characters."),
    tags: create7().of(create3()).notRequired(),
    watchdog_enabled: create2().notRequired(),
    alerts,
    backups
  });
  var SSHKeySchema = create6({
    id: create4(),
    label: create3(),
    ssh_key: create3(),
    created: create3()
  });
  var RebuildLinodeSchema = create6().shape({
    image: create3().required("An image is required."),
    root_pass: create3().required("Password is required."),
    authorized_keys: create7().of(SSHKeySchema),
    authorized_users: create7().of(create3()),
    stackscript_id: create4().notRequired(),
    stackscript_data,
    booted: create2().notRequired()
  });
  var RebuildLinodeFromStackScriptSchema = RebuildLinodeSchema.shape({
    stackscript_id: create4().required("A StackScript is required.")
  });
  var IPAllocationSchema = create6({
    type: create3().required("IP address type (IPv4) is required.").oneOf(["ipv4"], "Only IPv4 addresses can be allocated."),
    public: create2().required("Must specify public or private IP address.")
  });
  var CreateSnapshotSchema = create6({
    label: create3().required("A snapshot label is required.").min(1, "Label must be between 1 and 255 characters.").max(255, "Label must be between 1 and 255 characters.")
  });
  var device = create6({
    disk_id: create4().nullable(true),
    volume_id: create4().nullable(true)
  }).nullable(true);
  var devices = create6({
    sda: device,
    sdb: device,
    sdc: device,
    sdd: device,
    sde: device,
    sdf: device,
    sdg: device,
    sdh: device
  });
  var helpers = create6({
    updatedb_disabled: create2(),
    distro: create2(),
    modules_dep: create2(),
    network: create2(),
    devtmpfs_automount: create2()
  });
  var CreateLinodeConfigSchema = create6({
    label: create3().required("Label is required.").min(1, "Label must be between 1 and 48 characters.").max(48, "Label must be between 1 and 48 characters."),
    devices: devices.required("A list of devices is required."),
    kernel: create3(),
    comments: create3(),
    memory_limit: create4(),
    run_level: create().oneOf(["default", "single", "binbash"]),
    virt_mode: create().oneOf(["paravirt", "fullvirt"]),
    helpers,
    root_device: create3(),
    interfaces: linodeInterfaceSchema
  });
  var UpdateLinodeConfigSchema = create6({
    label: create3().min(1, "Label must be between 1 and 48 characters.").max(48, "Label must be between 1 and 48 characters."),
    devices,
    kernel: create3(),
    comments: create3(),
    memory_limit: create4(),
    run_level: create().oneOf(["default", "single", "binbash"]),
    virt_mode: create().oneOf(["paravirt", "fullvirt"]),
    helpers,
    root_device: create3(),
    interfaces: linodeInterfaceSchema
  });
  var CreateLinodeDiskSchema = create6({
    size: create4().required("Disk size is required."),
    label: create3().required("A disk label is required.").min(1, "Label must be between 1 and 48 characters.").max(48, "Label must be between 1 and 48 characters."),
    filesystem: create().oneOf(["raw", "swap", "ext3", "ext4", "initrd"]),
    read_only: create2(),
    image: create3(),
    authorized_keys: create7().of(create3()),
    authorized_users: create7().of(create3()),
    root_pass: create3().when("image", {
      is: (value) => Boolean(value),
      then: create3().required(
        "You must provide a root password when deploying from an image."
      ),
      // .concat(rootPasswordValidation),
      otherwise: create3().notRequired()
    }),
    stackscript_id: create4(),
    stackscript_data
  });
  var UpdateLinodeDiskSchema = create6({
    label: create3().notRequired().min(1, "Label must be between 1 and 48 characters.").max(48, "Label must be between 1 and 48 characters."),
    filesystem: create().notRequired().oneOf(["raw", "swap", "ext3", "ext4", "initrd"])
  });
  var CreateLinodeDiskFromImageSchema = CreateLinodeDiskSchema.clone().shape(
    {
      image: create3().required("An image is required.")
    }
  );

  // src/longview.schema.ts
  var longviewClientCreate = create6().shape({
    label: create3().min(3, "Label must be between 3 and 32 characters.").max(32, "Label must be between 3 and 32 characters.")
  });

  // src/managed.schema.ts
  var createServiceMonitorSchema = create6().shape({
    label: create3().required("Label is required.").min(3, "Label must be between 3 and 64 characters.").max(64, "Label must be between 3 and 64 characters."),
    service_type: create().required("Monitor type is required.").oneOf(["url", "tcp"]),
    address: create3().required("URL is required."),
    timeout: create4().required("Timeout is required."),
    credentials: create7().of(create4()).notRequired(),
    notes: create3().notRequired(),
    consultation_group: create3().notRequired(),
    body: create3().notRequired().max(100, "Body must be 100 characters or less.")
  });
  var sshSettingSchema = create6().shape({
    access: create2(),
    user: create3().max(32, "User must be 32 characters or less."),
    ip: create3(),
    port: create4().min(1, "Port must be between 1 and 65535.").max(65535, "Port must be between 1 and 65535.")
  });
  var updateManagedLinodeSchema = create6({
    ssh: sshSettingSchema
  });
  var credentialLabel = create3().min(2, "Label must be between 2 and 75 characters.").max(75, "Label must be between 2 and 75 characters.");
  var credentialPassword = create3().notRequired().max(5e3, "Password must be 5000 characters or less.");
  var credentialUsername = create3().notRequired().max(5e3, "Username must be 5000 characters or less.");
  var createCredentialSchema = create6().shape({
    label: credentialLabel.required("Label is required."),
    username: credentialUsername,
    password: credentialPassword
  });
  var updateCredentialSchema = create6().shape({
    label: credentialLabel.required("Label is required.")
  });
  var updatePasswordSchema = create6().shape({
    username: credentialUsername,
    password: credentialPassword.required("Password is required.")
  });
  var createContactSchema = create6().shape({
    name: create3().required("Name is required.").min(2, "Name must be between 2 and 64 characters.").max(64, "Name must be between 2 and 64 characters."),
    email: create3().required("E-mail is required.").min(6, "E-mail must be between 6 and 100 characters").max(100, "E-mail must be between 6 and 100 characters").email("Invalid e-mail address"),
    phone: create6().shape({
      primary: create3().nullable(true).notRequired(),
      secondary: create3().nullable(true).notRequired()
    }).notRequired(),
    group: create3().notRequired().nullable(true).min(2, "Group must be between 2 and 50 characters.").max(50, "Group must be between 2 and 50 characters.")
  });

  // src/networking.schema.ts
  var updateIPSchema = create6().shape({
    rdns: create3().notRequired().nullable(true)
  });
  var allocateIPSchema = create6().shape({
    type: create3().required().matches(
      /^ipv4$/,
      "Only IPv4 address may be allocated through this endpoint."
    ),
    public: create2().required(),
    linode_id: create4().required()
  });
  var assignAddressesSchema = create6().shape({
    region: create3().required(),
    assignments: create7().of(create6()).required()
  });
  var shareAddressesSchema = create6().shape({
    linode_id: create4().required(),
    ips: create7().of(create3())
  });

  // src/nodebalancers.schema.ts
  var PORT_WARNING = "Port must be between 1 and 65535.";
  var LABEL_WARNING = "Label must be between 3 and 32 characters.";
  var nodeBalancerConfigNodeSchema = create6({
    label: create3().matches(
      /^[a-zA-Z0-9.\-_]+$/,
      "Label may only contain letters, numbers, periods, dashes, and underscores."
    ).min(3, "Label should be between 3 and 32 characters.").max(32, "Label should be between 3 and 32 characters.").required("Label is required."),
    address: create3().matches(
      /^192\.168\.\d{1,3}\.\d{1,3}$/,
      "Must be a valid private IPv4 address."
    ).required("IP address is required."),
    port: create4().typeError("Port must be a number.").required("Port is required.").min(1, PORT_WARNING).max(65535, PORT_WARNING),
    weight: create4().typeError("Weight must be a number.").min(1, `Weight must be between 1 and 255.`).max(255, `Weight must be between 1 and 255.`),
    mode: create().oneOf(["accept", "reject", "backup", "drain"])
  });
  var createNodeBalancerConfigSchema = create6({
    algorithm: create().oneOf(["roundrobin", "leastconn", "source"]),
    check_attempts: create4(),
    check_body: create3().when("check", {
      is: "http_body",
      then: create3().required("An HTTP body regex is required.")
    }),
    check_interval: create4().typeError("Check interval must be a number."),
    check_passive: create2(),
    check_path: create3().matches(/\/.*/).when("check", {
      is: "http",
      then: create3().required("An HTTP path is required.")
    }).when("check", {
      is: "http_body",
      then: create3().required("An HTTP path is required.")
    }),
    proxy_protocol: create3().oneOf(["none", "v1", "v2"]),
    check_timeout: create4().typeError("Timeout must be a number.").integer(),
    check: create().oneOf(["none", "connection", "http", "http_body"]),
    cipher_suite: create().oneOf(["recommended", "legacy"]),
    port: create4().integer().required("Port is required").min(1, PORT_WARNING).max(65535, PORT_WARNING),
    protocol: create().oneOf(["http", "https", "tcp"]),
    ssl_key: create3().when("protocol", {
      is: "https",
      then: create3().required("SSL key is required when using HTTPS.")
    }),
    ssl_cert: create3().when("protocol", {
      is: "https",
      then: create3().required("SSL certificate is required when using HTTPS.")
    }),
    stickiness: create().oneOf(["none", "table", "http_cookie"]),
    nodes: create7().of(nodeBalancerConfigNodeSchema).required().min(1, "You must provide at least one back end node.")
  });
  var UpdateNodeBalancerConfigSchema = create6({
    algorithm: create().oneOf(["roundrobin", "leastconn", "source"]),
    check_attempts: create4(),
    check_body: create3().when("check", {
      is: "http_body",
      then: create3().required("An HTTP body regex is required.")
    }),
    check_interval: create4().typeError("Check interval must be a number."),
    check_passive: create2(),
    check_path: create3().matches(/\/.*/).when("check", {
      is: "http",
      then: create3().required("An HTTP path is required.")
    }).when("check", {
      is: "http_body",
      then: create3().required("An HTTP path is required.")
    }),
    proxy_protocol: create3().oneOf(["none", "v1", "v2"]),
    check_timeout: create4().typeError("Timeout must be a number.").integer(),
    check: create().oneOf(["none", "connection", "http", "http_body"]),
    cipher_suite: create().oneOf(["recommended", "legacy"]),
    port: create4().typeError("Port must be a number.").integer().min(1, PORT_WARNING).max(65535, PORT_WARNING),
    protocol: create().oneOf(["http", "https", "tcp"]),
    ssl_key: create3().when("protocol", {
      is: "https",
      then: create3().required()
    }),
    ssl_cert: create3().when("protocol", {
      is: "https",
      then: create3().required()
    }),
    stickiness: create().oneOf(["none", "table", "http_cookie"]),
    nodes: create7().of(nodeBalancerConfigNodeSchema)
  });
  var NodeBalancerSchema = create6({
    label: create3().min(3, LABEL_WARNING).max(32, LABEL_WARNING).matches(
      /^[a-zA-Z0-9-_]+$/,
      "Label can't contain special characters or spaces."
    ),
    client_conn_throttle: create4().typeError("Must be a number."),
    region: create3().required("Region is required."),
    configs: create7().of(createNodeBalancerConfigSchema).test("unique", "Port must be unique.", function(value) {
      if (!value) {
        return true;
      }
      const ports = [];
      const configs = value.reduce(
        (prev, value2, idx) => {
          if (!value2.port) {
            return prev;
          }
          if (!ports.includes(value2.port)) {
            ports.push(value2.port);
            return prev;
          }
          return [...prev, idx];
        },
        []
      );
      if (configs.length === 0) {
        return true;
      }
      const configStrings = configs.map(
        (config) => `configs[${config}].port`
      );
      throw this.createError({
        path: configStrings.join("|"),
        message: "Port must be unique."
      });
    })
  });
  var UpdateNodeBalancerSchema = create6({
    label: create3().min(3, LABEL_WARNING).max(32, LABEL_WARNING).matches(
      /^[a-zA-Z0-9-_]+$/,
      "Label can't contain special characters or spaces."
    ),
    client_conn_throttle: create4().typeError("Must be a number."),
    region: create3()
  });

  // src/objectStorageKeys.schema.ts
  var createObjectStorageKeysSchema = create6({
    label: create3().required("Label is required.").min(3, "Label must be between 3 and 50 characters.").max(50, "Label must be between 3 and 50 characters.").trim()
  });

  // ../../node_modules/libphonenumber-js/metadata.min.json.js
  var metadata_min_json_default = { "version": 4, "country_calling_codes": { "1": ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], "7": ["RU", "KZ"], "20": ["EG"], "27": ["ZA"], "30": ["GR"], "31": ["NL"], "32": ["BE"], "33": ["FR"], "34": ["ES"], "36": ["HU"], "39": ["IT", "VA"], "40": ["RO"], "41": ["CH"], "43": ["AT"], "44": ["GB", "GG", "IM", "JE"], "45": ["DK"], "46": ["SE"], "47": ["NO", "SJ"], "48": ["PL"], "49": ["DE"], "51": ["PE"], "52": ["MX"], "53": ["CU"], "54": ["AR"], "55": ["BR"], "56": ["CL"], "57": ["CO"], "58": ["VE"], "60": ["MY"], "61": ["AU", "CC", "CX"], "62": ["ID"], "63": ["PH"], "64": ["NZ"], "65": ["SG"], "66": ["TH"], "81": ["JP"], "82": ["KR"], "84": ["VN"], "86": ["CN"], "90": ["TR"], "91": ["IN"], "92": ["PK"], "93": ["AF"], "94": ["LK"], "95": ["MM"], "98": ["IR"], "211": ["SS"], "212": ["MA", "EH"], "213": ["DZ"], "216": ["TN"], "218": ["LY"], "220": ["GM"], "221": ["SN"], "222": ["MR"], "223": ["ML"], "224": ["GN"], "225": ["CI"], "226": ["BF"], "227": ["NE"], "228": ["TG"], "229": ["BJ"], "230": ["MU"], "231": ["LR"], "232": ["SL"], "233": ["GH"], "234": ["NG"], "235": ["TD"], "236": ["CF"], "237": ["CM"], "238": ["CV"], "239": ["ST"], "240": ["GQ"], "241": ["GA"], "242": ["CG"], "243": ["CD"], "244": ["AO"], "245": ["GW"], "246": ["IO"], "247": ["AC"], "248": ["SC"], "249": ["SD"], "250": ["RW"], "251": ["ET"], "252": ["SO"], "253": ["DJ"], "254": ["KE"], "255": ["TZ"], "256": ["UG"], "257": ["BI"], "258": ["MZ"], "260": ["ZM"], "261": ["MG"], "262": ["RE", "YT"], "263": ["ZW"], "264": ["NA"], "265": ["MW"], "266": ["LS"], "267": ["BW"], "268": ["SZ"], "269": ["KM"], "290": ["SH", "TA"], "291": ["ER"], "297": ["AW"], "298": ["FO"], "299": ["GL"], "350": ["GI"], "351": ["PT"], "352": ["LU"], "353": ["IE"], "354": ["IS"], "355": ["AL"], "356": ["MT"], "357": ["CY"], "358": ["FI", "AX"], "359": ["BG"], "370": ["LT"], "371": ["LV"], "372": ["EE"], "373": ["MD"], "374": ["AM"], "375": ["BY"], "376": ["AD"], "377": ["MC"], "378": ["SM"], "380": ["UA"], "381": ["RS"], "382": ["ME"], "383": ["XK"], "385": ["HR"], "386": ["SI"], "387": ["BA"], "389": ["MK"], "420": ["CZ"], "421": ["SK"], "423": ["LI"], "500": ["FK"], "501": ["BZ"], "502": ["GT"], "503": ["SV"], "504": ["HN"], "505": ["NI"], "506": ["CR"], "507": ["PA"], "508": ["PM"], "509": ["HT"], "590": ["GP", "BL", "MF"], "591": ["BO"], "592": ["GY"], "593": ["EC"], "594": ["GF"], "595": ["PY"], "596": ["MQ"], "597": ["SR"], "598": ["UY"], "599": ["CW", "BQ"], "670": ["TL"], "672": ["NF"], "673": ["BN"], "674": ["NR"], "675": ["PG"], "676": ["TO"], "677": ["SB"], "678": ["VU"], "679": ["FJ"], "680": ["PW"], "681": ["WF"], "682": ["CK"], "683": ["NU"], "685": ["WS"], "686": ["KI"], "687": ["NC"], "688": ["TV"], "689": ["PF"], "690": ["TK"], "691": ["FM"], "692": ["MH"], "850": ["KP"], "852": ["HK"], "853": ["MO"], "855": ["KH"], "856": ["LA"], "880": ["BD"], "886": ["TW"], "960": ["MV"], "961": ["LB"], "962": ["JO"], "963": ["SY"], "964": ["IQ"], "965": ["KW"], "966": ["SA"], "967": ["YE"], "968": ["OM"], "970": ["PS"], "971": ["AE"], "972": ["IL"], "973": ["BH"], "974": ["QA"], "975": ["BT"], "976": ["MN"], "977": ["NP"], "992": ["TJ"], "993": ["TM"], "994": ["AZ"], "995": ["GE"], "996": ["KG"], "998": ["UZ"] }, "countries": { "AC": ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], "AD": ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], "AE": ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], "AF": ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], "AG": ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([457]\\d{6})$", "268$1", 0, "268"], "AI": ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2457]\\d{6})$", "264$1", 0, "264"], "AL": ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], "AM": ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], "AO": ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], "AR": ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], "AS": ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "1|([267]\\d{6})$", "684$1", 0, "684"], "AT": ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], "AU": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "0|(183[12])", 0, 0, 0, [["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "AW": ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], "AX": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], "AZ": ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], "BA": ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], "BB": ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "246$1", 0, "246"], "BD": ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], "BE": ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], "BF": ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]], "BG": ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], "BH": ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]]], "BI": ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], "BJ": ["229", "00", "[24-689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]]], "BL": ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]]], "BM": ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "441$1", 0, "441"], "BN": ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], "BO": ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], "BQ": ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], "BR": ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], "BS": ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([3-8]\\d{6})$", "242$1", 0, "242"], "BT": ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]], "BW": ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-79]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], "BY": ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], "BZ": ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], "CA": ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|3[178]|50|68|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], "CC": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "CD": ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], "CF": ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], "CG": ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], "CH": ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], "CI": ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], "CK": ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], "CL": ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], "CM": ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], "CN": ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "10(?:10|9[56])|2[0-57-9](?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "0|(1(?:[12]\\d|79)\\d\\d)", 0, 0, 0, 0, "00"], "CO": ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11], [["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0(4(?:[14]4|56)|[579])?"], "CR": ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], "CU": ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], "CV": ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], "CW": ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], "CX": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "CY": ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], "CZ": ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], "DE": ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], "DJ": ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], "DK": ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], "DM": ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "767$1", 0, "767"], "DO": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], "DZ": ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], "EC": ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], "EE": ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], "EG": ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]], "0"], "EH": ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], "ER": ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], "ES": ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], "ET": ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], "FI": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], "FJ": ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "FK": ["500", "00", "[2-7]\\d{4}", [5]], "FM": ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], "FO": ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], "FR": ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], "GA": ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], "GB": ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-579])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:[02]\\d|1[0-246-9])))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], "GD": ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "473$1", 0, "473"], "GE": ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], "GF": ["594", "00", "(?:[56]94|80\\d|976)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "GG": ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "0|([25-9]\\d{5})$", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], "GH": ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], "GI": ["350", "00", "(?:[25]\\d\\d|606)\\d{5}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], "GL": ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], "GM": ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], "GN": ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], "GP": ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1289]|5[3-579]|6[0-489]|7[08]|8[0-689]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]]], "GQ": ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], "GR": ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], "GT": ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], "GU": ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "1|([3-9]\\d{6})$", "671$1", 0, "671"], "GW": ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], "GY": ["592", "001", "9008\\d{3}|(?:[2-467]\\d\\d|862)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]]], "HK": ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "HN": ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], "HR": ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], "HT": ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], "HU": ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], "ID": ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], "IE": ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "IL": ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], "IM": ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([25-8]\\d{5})$", "1624$1", 0, "74576|(?:16|7[56])24"], "IN": ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], "IO": ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], "IQ": ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], "IR": ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], "IS": ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "IT": ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], "JE": ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([0-24-8]\\d{5})$", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], "JM": ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], "JO": ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], "JP": ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0"], "KE": ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], "KG": ["996", "00", "8\\d{9}|(?:[235-8]\\d|99)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "KH": ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "KI": ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], "KM": ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], "KN": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "869$1", 0, "869"], "KP": ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], "KR": ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], "KW": ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], "KY": ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "345$1", 0, "345"], "KZ": ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"], "LA": ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], "LB": ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], "LC": ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "758$1", 0, "758"], "LI": ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "0|(1001)"], "LK": ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], "LR": ["231", "00", "(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"], "0$1"]], "0"], "LS": ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], "LT": ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]], "8", 0, "[08]"], "LU": ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], "LV": ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]], "LY": ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], "MA": ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29[1289]|389)", "529(?:1[1-46-9]|2[013-8]|90)|5(?:298|389)[0-46-9]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5293[01]\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|9[0-289])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[0189]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]|8[0-3]))\\d{6}"], ["80\\d{7}"], ["89\\d{7}"], 0, 0, 0, 0, ["592(?:4[0-2]|93)\\d{4}"]]], "MC": ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], "MD": ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], "ME": ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], "MF": ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]]], "MG": ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "0|([24-9]\\d{6})$", "20$1"], "MH": ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], "MK": ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], "ML": ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], "MM": ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], "MN": ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], "MO": ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], "MP": ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "670$1", 0, "670"], "MQ": ["596", "00", "(?:69|80)\\d{7}|(?:59|97)6\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "MR": ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], "MS": ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "1|([34]\\d{6})$", "664$1", 0, "664"], "MT": ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], "MU": ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], "MV": ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "MW": ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], "MX": ["52", "0[09]", "1(?:(?:[27]2|44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"], "MY": ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], "MZ": ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], "NA": ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], "NC": ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], "NE": ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[04]"]]]], "NF": ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], "NG": ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], "NI": ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], "NL": ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], "NO": ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]|59"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], "NP": ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], "NR": ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]], "NU": ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], "NZ": ["64", "0(?:0|161)", "[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-579]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|[89]0", "50(?:[0367]|88)|[89]0"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], "OM": ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], "PA": ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], "PE": ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], "PF": ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], "PG": ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "PH": ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], "PK": ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], "PL": ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], "PM": ["508", "00", "(?:[45]|80\\d\\d)\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "PR": ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], "PS": ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "PT": ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], "PW": ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], "PY": ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], "QA": ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], "RE": ["262", "00", "976\\d{6}|(?:26|[68]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, "26[23]|69|[89]"], "RO": ["40", "00", "(?:[2378]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], "RS": ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], "RU": ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"], "RW": ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]]], "0"], "SA": ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], "SB": ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], "SC": ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "SD": ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], "SE": ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], "SG": ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-6]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], "SH": ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], "SI": ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], "SJ": ["47", "00", "0\\d{4}|(?:[489]\\d|[57]9)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], "SK": ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], "SL": ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], "SM": ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], "SN": ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], "SO": ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3478]|64|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6(?:0[5-7]|[1-35-9])|9[2-9]"]]], "0"], "SR": ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]], "SS": ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], "ST": ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], "SV": ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], "SX": ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|(5\\d{6})$", "721$1", 0, "721"], "SY": ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"], "SZ": ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], "TA": ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], "TC": ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "1|([2-479]\\d{6})$", "649$1", 0, "649"], "TD": ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "TG": ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], "TH": ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "TJ": ["992", "810", "(?:00|[1-57-9]\\d)\\d{7}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], "TK": ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], "TL": ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], "TM": ["993", "810", "[1-6]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], "TN": ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], "TO": ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], "TR": ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], "TT": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-46-8]\\d{6})$", "868$1", 0, "868"], "TV": ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], "TW": ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], "TZ": ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], "UA": ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], "UG": ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], "US": ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["505(?:[2-57-9]\\d\\d|6(?:[0-35-9]\\d|4[46]))\\d{4}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[0-2]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]]], "UY": ["598", "0(?:0|1[3-9]\\d)", "(?:0004|4)\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [7, 8, 10, 13], [["(\\d{3})(\\d{4})", "$1 $2", ["405|8|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], "UZ": ["998", "810", "(?:33|[5-79]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[35-9]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], "VA": ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"], "VC": ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "784$1", 0, "784"], "VE": ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], "VG": ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-578]\\d{6})$", "284$1", 0, "284"], "VI": ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "340$1", 0, "340"], "VN": ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], "VU": ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], "WF": ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], "WS": ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], "XK": ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]], "0"], "YE": ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], "YT": ["262", "00", "80\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, "269|63"], "ZA": ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], "ZM": ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"], "ZW": ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, "nonGeographic": { "800": ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], "808": ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], "870": ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]], "878": ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], "881": ["881", 0, "[0-36-9]\\d{8}", [9], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-36-9]"]]], 0, 0, 0, 0, 0, 0, [0, ["[0-36-9]\\d{8}"]]], "882": ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], "883": ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[013-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], "888": ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], "979": ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };

  // ../../node_modules/libphonenumber-js/min/exports/withMetadataArgument.js
  function withMetadataArgument(func, _arguments) {
    var args = Array.prototype.slice.call(_arguments);
    args.push(metadata_min_json_default);
    return func.apply(this, args);
  }

  // ../../node_modules/libphonenumber-js/es6/ParseError.js
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result2;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result2 = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result2 = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result2);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
      if (Class2 === null || !_isNativeFunction(Class2))
        return Class2;
      if (typeof Class2 !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2))
          return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
      return _setPrototypeOf(Wrapper, Class2);
    };
    return _wrapNativeSuper(Class);
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct2(Parent2, args2, Class2) {
        var a = [null];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2)
          _setPrototypeOf(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var ParseError = /* @__PURE__ */ function(_Error) {
    _inherits(ParseError2, _Error);
    var _super = _createSuper(ParseError2);
    function ParseError2(code) {
      var _this;
      _classCallCheck(this, ParseError2);
      _this = _super.call(this, code);
      Object.setPrototypeOf(_assertThisInitialized(_this), ParseError2.prototype);
      _this.name = _this.constructor.name;
      return _this;
    }
    return _createClass(ParseError2);
  }(/* @__PURE__ */ _wrapNativeSuper(Error));

  // ../../node_modules/libphonenumber-js/es6/constants.js
  var MIN_LENGTH_FOR_NSN = 2;
  var MAX_LENGTH_FOR_NSN = 17;
  var MAX_LENGTH_COUNTRY_CODE = 3;
  var VALID_DIGITS = "0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9";
  var DASHES = "-\u2010-\u2015\u2212\u30FC\uFF0D";
  var SLASHES = "\uFF0F/";
  var DOTS = "\uFF0E.";
  var WHITESPACE = " \xA0\xAD\u200B\u2060\u3000";
  var BRACKETS = "()\uFF08\uFF09\uFF3B\uFF3D\\[\\]";
  var TILDES = "~\u2053\u223C\uFF5E";
  var VALID_PUNCTUATION = "".concat(DASHES).concat(SLASHES).concat(DOTS).concat(WHITESPACE).concat(BRACKETS).concat(TILDES);
  var PLUS_CHARS = "+\uFF0B";

  // ../../node_modules/libphonenumber-js/es6/tools/semver-compare.js
  function semver_compare_default(a, b) {
    a = a.split("-");
    b = b.split("-");
    var pa = a[0].split(".");
    var pb = b[0].split(".");
    for (var i = 0; i < 3; i++) {
      var na = Number(pa[i]);
      var nb = Number(pb[i]);
      if (na > nb)
        return 1;
      if (nb > na)
        return -1;
      if (!isNaN(na) && isNaN(nb))
        return 1;
      if (isNaN(na) && !isNaN(nb))
        return -1;
    }
    if (a[1] && b[1]) {
      return a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0;
    }
    return !a[1] && b[1] ? 1 : a[1] && !b[1] ? -1 : 0;
  }

  // ../../node_modules/libphonenumber-js/es6/metadata.js
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof2(obj);
  }
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties2(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var V3 = "1.2.0";
  var V4 = "1.7.35";
  var DEFAULT_EXT_PREFIX = " ext. ";
  var CALLING_CODE_REG_EXP = /^\d+$/;
  var Metadata = /* @__PURE__ */ function() {
    function Metadata2(metadata) {
      _classCallCheck2(this, Metadata2);
      validateMetadata(metadata);
      this.metadata = metadata;
      setVersion.call(this, metadata);
    }
    _createClass2(Metadata2, [{
      key: "getCountries",
      value: function getCountries() {
        return Object.keys(this.metadata.countries).filter(function(_) {
          return _ !== "001";
        });
      }
    }, {
      key: "getCountryMetadata",
      value: function getCountryMetadata(countryCode) {
        return this.metadata.countries[countryCode];
      }
    }, {
      key: "nonGeographic",
      value: function nonGeographic() {
        if (this.v1 || this.v2 || this.v3)
          return;
        return this.metadata.nonGeographic || this.metadata.nonGeographical;
      }
    }, {
      key: "hasCountry",
      value: function hasCountry(country) {
        return this.getCountryMetadata(country) !== void 0;
      }
    }, {
      key: "hasCallingCode",
      value: function hasCallingCode(callingCode) {
        if (this.getCountryCodesForCallingCode(callingCode)) {
          return true;
        }
        if (this.nonGeographic()) {
          if (this.nonGeographic()[callingCode]) {
            return true;
          }
        } else {
          var countryCodes = this.countryCallingCodes()[callingCode];
          if (countryCodes && countryCodes.length === 1 && countryCodes[0] === "001") {
            return true;
          }
        }
      }
    }, {
      key: "isNonGeographicCallingCode",
      value: function isNonGeographicCallingCode(callingCode) {
        if (this.nonGeographic()) {
          return this.nonGeographic()[callingCode] ? true : false;
        } else {
          return this.getCountryCodesForCallingCode(callingCode) ? false : true;
        }
      }
      // Deprecated.
    }, {
      key: "country",
      value: function country(countryCode) {
        return this.selectNumberingPlan(countryCode);
      }
    }, {
      key: "selectNumberingPlan",
      value: function selectNumberingPlan(countryCode, callingCode) {
        if (countryCode && CALLING_CODE_REG_EXP.test(countryCode)) {
          callingCode = countryCode;
          countryCode = null;
        }
        if (countryCode && countryCode !== "001") {
          if (!this.hasCountry(countryCode)) {
            throw new Error("Unknown country: ".concat(countryCode));
          }
          this.numberingPlan = new NumberingPlan(this.getCountryMetadata(countryCode), this);
        } else if (callingCode) {
          if (!this.hasCallingCode(callingCode)) {
            throw new Error("Unknown calling code: ".concat(callingCode));
          }
          this.numberingPlan = new NumberingPlan(this.getNumberingPlanMetadata(callingCode), this);
        } else {
          this.numberingPlan = void 0;
        }
        return this;
      }
    }, {
      key: "getCountryCodesForCallingCode",
      value: function getCountryCodesForCallingCode(callingCode) {
        var countryCodes = this.countryCallingCodes()[callingCode];
        if (countryCodes) {
          if (countryCodes.length === 1 && countryCodes[0].length === 3) {
            return;
          }
          return countryCodes;
        }
      }
    }, {
      key: "getCountryCodeForCallingCode",
      value: function getCountryCodeForCallingCode(callingCode) {
        var countryCodes = this.getCountryCodesForCallingCode(callingCode);
        if (countryCodes) {
          return countryCodes[0];
        }
      }
    }, {
      key: "getNumberingPlanMetadata",
      value: function getNumberingPlanMetadata(callingCode) {
        var countryCode = this.getCountryCodeForCallingCode(callingCode);
        if (countryCode) {
          return this.getCountryMetadata(countryCode);
        }
        if (this.nonGeographic()) {
          var metadata = this.nonGeographic()[callingCode];
          if (metadata) {
            return metadata;
          }
        } else {
          var countryCodes = this.countryCallingCodes()[callingCode];
          if (countryCodes && countryCodes.length === 1 && countryCodes[0] === "001") {
            return this.metadata.countries["001"];
          }
        }
      }
      // Deprecated.
    }, {
      key: "countryCallingCode",
      value: function countryCallingCode() {
        return this.numberingPlan.callingCode();
      }
      // Deprecated.
    }, {
      key: "IDDPrefix",
      value: function IDDPrefix() {
        return this.numberingPlan.IDDPrefix();
      }
      // Deprecated.
    }, {
      key: "defaultIDDPrefix",
      value: function defaultIDDPrefix() {
        return this.numberingPlan.defaultIDDPrefix();
      }
      // Deprecated.
    }, {
      key: "nationalNumberPattern",
      value: function nationalNumberPattern() {
        return this.numberingPlan.nationalNumberPattern();
      }
      // Deprecated.
    }, {
      key: "possibleLengths",
      value: function possibleLengths() {
        return this.numberingPlan.possibleLengths();
      }
      // Deprecated.
    }, {
      key: "formats",
      value: function formats() {
        return this.numberingPlan.formats();
      }
      // Deprecated.
    }, {
      key: "nationalPrefixForParsing",
      value: function nationalPrefixForParsing() {
        return this.numberingPlan.nationalPrefixForParsing();
      }
      // Deprecated.
    }, {
      key: "nationalPrefixTransformRule",
      value: function nationalPrefixTransformRule() {
        return this.numberingPlan.nationalPrefixTransformRule();
      }
      // Deprecated.
    }, {
      key: "leadingDigits",
      value: function leadingDigits() {
        return this.numberingPlan.leadingDigits();
      }
      // Deprecated.
    }, {
      key: "hasTypes",
      value: function hasTypes() {
        return this.numberingPlan.hasTypes();
      }
      // Deprecated.
    }, {
      key: "type",
      value: function type(_type) {
        return this.numberingPlan.type(_type);
      }
      // Deprecated.
    }, {
      key: "ext",
      value: function ext() {
        return this.numberingPlan.ext();
      }
    }, {
      key: "countryCallingCodes",
      value: function countryCallingCodes() {
        if (this.v1)
          return this.metadata.country_phone_code_to_countries;
        return this.metadata.country_calling_codes;
      }
      // Deprecated.
    }, {
      key: "chooseCountryByCountryCallingCode",
      value: function chooseCountryByCountryCallingCode(callingCode) {
        return this.selectNumberingPlan(callingCode);
      }
    }, {
      key: "hasSelectedNumberingPlan",
      value: function hasSelectedNumberingPlan() {
        return this.numberingPlan !== void 0;
      }
    }]);
    return Metadata2;
  }();
  var NumberingPlan = /* @__PURE__ */ function() {
    function NumberingPlan2(metadata, globalMetadataObject) {
      _classCallCheck2(this, NumberingPlan2);
      this.globalMetadataObject = globalMetadataObject;
      this.metadata = metadata;
      setVersion.call(this, globalMetadataObject.metadata);
    }
    _createClass2(NumberingPlan2, [{
      key: "callingCode",
      value: function callingCode() {
        return this.metadata[0];
      }
      // Formatting information for regions which share
      // a country calling code is contained by only one region
      // for performance reasons. For example, for NANPA region
      // ("North American Numbering Plan Administration",
      //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
      // it will be contained in the metadata for `US`.
    }, {
      key: "getDefaultCountryMetadataForRegion",
      value: function getDefaultCountryMetadataForRegion() {
        return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
      }
      // Is always present.
    }, {
      key: "IDDPrefix",
      value: function IDDPrefix() {
        if (this.v1 || this.v2)
          return;
        return this.metadata[1];
      }
      // Is only present when a country supports multiple IDD prefixes.
    }, {
      key: "defaultIDDPrefix",
      value: function defaultIDDPrefix() {
        if (this.v1 || this.v2)
          return;
        return this.metadata[12];
      }
    }, {
      key: "nationalNumberPattern",
      value: function nationalNumberPattern() {
        if (this.v1 || this.v2)
          return this.metadata[1];
        return this.metadata[2];
      }
      // "possible length" data is always present in Google's metadata.
    }, {
      key: "possibleLengths",
      value: function possibleLengths() {
        if (this.v1)
          return;
        return this.metadata[this.v2 ? 2 : 3];
      }
    }, {
      key: "_getFormats",
      value: function _getFormats(metadata) {
        return metadata[this.v1 ? 2 : this.v2 ? 3 : 4];
      }
      // For countries of the same region (e.g. NANPA)
      // formats are all stored in the "main" country for that region.
      // E.g. "RU" and "KZ", "US" and "CA".
    }, {
      key: "formats",
      value: function formats() {
        var _this = this;
        var formats2 = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
        return formats2.map(function(_) {
          return new Format(_, _this);
        });
      }
    }, {
      key: "nationalPrefix",
      value: function nationalPrefix() {
        return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
      }
    }, {
      key: "_getNationalPrefixFormattingRule",
      value: function _getNationalPrefixFormattingRule(metadata) {
        return metadata[this.v1 ? 4 : this.v2 ? 5 : 6];
      }
      // For countries of the same region (e.g. NANPA)
      // national prefix formatting rule is stored in the "main" country for that region.
      // E.g. "RU" and "KZ", "US" and "CA".
    }, {
      key: "nationalPrefixFormattingRule",
      value: function nationalPrefixFormattingRule() {
        return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
      }
    }, {
      key: "_nationalPrefixForParsing",
      value: function _nationalPrefixForParsing() {
        return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
      }
    }, {
      key: "nationalPrefixForParsing",
      value: function nationalPrefixForParsing() {
        return this._nationalPrefixForParsing() || this.nationalPrefix();
      }
    }, {
      key: "nationalPrefixTransformRule",
      value: function nationalPrefixTransformRule() {
        return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
      }
    }, {
      key: "_getNationalPrefixIsOptionalWhenFormatting",
      value: function _getNationalPrefixIsOptionalWhenFormatting() {
        return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
      }
      // For countries of the same region (e.g. NANPA)
      // "national prefix is optional when formatting" flag is
      // stored in the "main" country for that region.
      // E.g. "RU" and "KZ", "US" and "CA".
    }, {
      key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
      value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
        return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
      }
    }, {
      key: "leadingDigits",
      value: function leadingDigits() {
        return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
      }
    }, {
      key: "types",
      value: function types() {
        return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
      }
    }, {
      key: "hasTypes",
      value: function hasTypes() {
        if (this.types() && this.types().length === 0) {
          return false;
        }
        return !!this.types();
      }
    }, {
      key: "type",
      value: function type(_type2) {
        if (this.hasTypes() && getType(this.types(), _type2)) {
          return new Type(getType(this.types(), _type2), this);
        }
      }
    }, {
      key: "ext",
      value: function ext() {
        if (this.v1 || this.v2)
          return DEFAULT_EXT_PREFIX;
        return this.metadata[13] || DEFAULT_EXT_PREFIX;
      }
    }]);
    return NumberingPlan2;
  }();
  var Format = /* @__PURE__ */ function() {
    function Format2(format, metadata) {
      _classCallCheck2(this, Format2);
      this._format = format;
      this.metadata = metadata;
    }
    _createClass2(Format2, [{
      key: "pattern",
      value: function pattern() {
        return this._format[0];
      }
    }, {
      key: "format",
      value: function format() {
        return this._format[1];
      }
    }, {
      key: "leadingDigitsPatterns",
      value: function leadingDigitsPatterns() {
        return this._format[2] || [];
      }
    }, {
      key: "nationalPrefixFormattingRule",
      value: function nationalPrefixFormattingRule() {
        return this._format[3] || this.metadata.nationalPrefixFormattingRule();
      }
    }, {
      key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
      value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
        return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
      }
    }, {
      key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
      value: function nationalPrefixIsMandatoryWhenFormattingInNationalFormat() {
        return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
      }
      // Checks whether national prefix formatting rule contains national prefix.
    }, {
      key: "usesNationalPrefix",
      value: function usesNationalPrefix() {
        return this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
        !FIRST_GROUP_ONLY_PREFIX_PATTERN.test(this.nationalPrefixFormattingRule()) ? true : false;
      }
    }, {
      key: "internationalFormat",
      value: function internationalFormat() {
        return this._format[5] || this.format();
      }
    }]);
    return Format2;
  }();
  var FIRST_GROUP_ONLY_PREFIX_PATTERN = /^\(?\$1\)?$/;
  var Type = /* @__PURE__ */ function() {
    function Type2(type, metadata) {
      _classCallCheck2(this, Type2);
      this.type = type;
      this.metadata = metadata;
    }
    _createClass2(Type2, [{
      key: "pattern",
      value: function pattern() {
        if (this.metadata.v1)
          return this.type;
        return this.type[0];
      }
    }, {
      key: "possibleLengths",
      value: function possibleLengths() {
        if (this.metadata.v1)
          return;
        return this.type[1] || this.metadata.possibleLengths();
      }
    }]);
    return Type2;
  }();
  function getType(types, type) {
    switch (type) {
      case "FIXED_LINE":
        return types[0];
      case "MOBILE":
        return types[1];
      case "TOLL_FREE":
        return types[2];
      case "PREMIUM_RATE":
        return types[3];
      case "PERSONAL_NUMBER":
        return types[4];
      case "VOICEMAIL":
        return types[5];
      case "UAN":
        return types[6];
      case "PAGER":
        return types[7];
      case "VOIP":
        return types[8];
      case "SHARED_COST":
        return types[9];
    }
  }
  function validateMetadata(metadata) {
    if (!metadata) {
      throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
    }
    if (!is_object(metadata) || !is_object(metadata.countries)) {
      throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(is_object(metadata) ? "an object of shape: { " + Object.keys(metadata).join(", ") + " }" : "a " + type_of(metadata) + ": " + metadata, "."));
    }
  }
  var is_object = function is_object2(_) {
    return _typeof2(_) === "object";
  };
  var type_of = function type_of2(_) {
    return _typeof2(_);
  };
  function getCountryCallingCode(country, metadata) {
    metadata = new Metadata(metadata);
    if (metadata.hasCountry(country)) {
      return metadata.country(country).countryCallingCode();
    }
    throw new Error("Unknown country: ".concat(country));
  }
  function isSupportedCountry(country, metadata) {
    return metadata.countries[country] !== void 0;
  }
  function setVersion(metadata) {
    var version = metadata.version;
    if (typeof version === "number") {
      this.v1 = version === 1;
      this.v2 = version === 2;
      this.v3 = version === 3;
      this.v4 = version === 4;
    } else {
      if (!version) {
        this.v1 = true;
      } else if (semver_compare_default(version, V3) === -1) {
        this.v2 = true;
      } else if (semver_compare_default(version, V4) === -1) {
        this.v3 = true;
      } else {
        this.v4 = true;
      }
    }
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js
  var RFC3966_EXTN_PREFIX = ";ext=";
  var getExtensionDigitsPattern = function getExtensionDigitsPattern2(maxLength) {
    return "([".concat(VALID_DIGITS, "]{1,").concat(maxLength, "})");
  };
  function createExtensionPattern(purpose) {
    var extLimitAfterExplicitLabel = "20";
    var extLimitAfterLikelyLabel = "15";
    var extLimitAfterAmbiguousChar = "9";
    var extLimitWhenNotSure = "6";
    var possibleSeparatorsBetweenNumberAndExtLabel = "[ \xA0\\t,]*";
    var possibleCharsAfterExtLabel = "[:\\.\uFF0E]?[ \xA0\\t,-]*";
    var optionalExtnSuffix = "#?";
    var explicitExtLabels = "(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|\u0434\u043E\u0431|anexo)";
    var ambiguousExtLabels = "(?:[x\uFF58#\uFF03~\uFF5E]|int|\uFF49\uFF4E\uFF54)";
    var ambiguousSeparator = "[- ]+";
    var possibleSeparatorsNumberExtLabelNoComma = "[ \xA0\\t]*";
    var autoDiallingAndExtLabelsFound = "(?:,{2}|;)";
    var rfcExtn = RFC3966_EXTN_PREFIX + getExtensionDigitsPattern(extLimitAfterExplicitLabel);
    var explicitExtn = possibleSeparatorsBetweenNumberAndExtLabel + explicitExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterExplicitLabel) + optionalExtnSuffix;
    var ambiguousExtn = possibleSeparatorsBetweenNumberAndExtLabel + ambiguousExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
    var americanStyleExtnWithSuffix = ambiguousSeparator + getExtensionDigitsPattern(extLimitWhenNotSure) + "#";
    var autoDiallingExtn = possibleSeparatorsNumberExtLabelNoComma + autoDiallingAndExtLabelsFound + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterLikelyLabel) + optionalExtnSuffix;
    var onlyCommasExtn = possibleSeparatorsNumberExtLabelNoComma + "(?:,)+" + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
    return rfcExtn + "|" + explicitExtn + "|" + ambiguousExtn + "|" + americanStyleExtnWithSuffix + "|" + autoDiallingExtn + "|" + onlyCommasExtn;
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js
  var MIN_LENGTH_PHONE_NUMBER_PATTERN = "[" + VALID_DIGITS + "]{" + MIN_LENGTH_FOR_NSN + "}";
  var VALID_PHONE_NUMBER = "[" + PLUS_CHARS + "]{0,1}(?:[" + VALID_PUNCTUATION + "]*[" + VALID_DIGITS + "]){3,}[" + VALID_PUNCTUATION + VALID_DIGITS + "]*";
  var VALID_PHONE_NUMBER_START_REG_EXP = new RegExp("^[" + PLUS_CHARS + "]{0,1}(?:[" + VALID_PUNCTUATION + "]*[" + VALID_DIGITS + "]){1,2}$", "i");
  var VALID_PHONE_NUMBER_WITH_EXTENSION = VALID_PHONE_NUMBER + // Phone number extensions
  "(?:" + createExtensionPattern() + ")?";
  var VALID_PHONE_NUMBER_PATTERN = new RegExp(
    // Either a short two-digit-only phone number
    "^" + MIN_LENGTH_PHONE_NUMBER_PATTERN + "$|^" + VALID_PHONE_NUMBER_WITH_EXTENSION + "$",
    "i"
  );
  function isViablePhoneNumber(number2) {
    return number2.length >= MIN_LENGTH_FOR_NSN && VALID_PHONE_NUMBER_PATTERN.test(number2);
  }
  function isViablePhoneNumberStart(number2) {
    return VALID_PHONE_NUMBER_START_REG_EXP.test(number2);
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/extension/extractExtension.js
  var EXTN_PATTERN = new RegExp("(?:" + createExtensionPattern() + ")$", "i");
  function extractExtension(number2) {
    var start = number2.search(EXTN_PATTERN);
    if (start < 0) {
      return {};
    }
    var numberWithoutExtension = number2.slice(0, start);
    var matches = number2.match(EXTN_PATTERN);
    var i = 1;
    while (i < matches.length) {
      if (matches[i]) {
        return {
          number: numberWithoutExtension,
          ext: matches[i]
        };
      }
      i++;
    }
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/parseDigits.js
  var DIGITS = {
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "\uFF10": "0",
    // Fullwidth digit 0
    "\uFF11": "1",
    // Fullwidth digit 1
    "\uFF12": "2",
    // Fullwidth digit 2
    "\uFF13": "3",
    // Fullwidth digit 3
    "\uFF14": "4",
    // Fullwidth digit 4
    "\uFF15": "5",
    // Fullwidth digit 5
    "\uFF16": "6",
    // Fullwidth digit 6
    "\uFF17": "7",
    // Fullwidth digit 7
    "\uFF18": "8",
    // Fullwidth digit 8
    "\uFF19": "9",
    // Fullwidth digit 9
    "\u0660": "0",
    // Arabic-indic digit 0
    "\u0661": "1",
    // Arabic-indic digit 1
    "\u0662": "2",
    // Arabic-indic digit 2
    "\u0663": "3",
    // Arabic-indic digit 3
    "\u0664": "4",
    // Arabic-indic digit 4
    "\u0665": "5",
    // Arabic-indic digit 5
    "\u0666": "6",
    // Arabic-indic digit 6
    "\u0667": "7",
    // Arabic-indic digit 7
    "\u0668": "8",
    // Arabic-indic digit 8
    "\u0669": "9",
    // Arabic-indic digit 9
    "\u06F0": "0",
    // Eastern-Arabic digit 0
    "\u06F1": "1",
    // Eastern-Arabic digit 1
    "\u06F2": "2",
    // Eastern-Arabic digit 2
    "\u06F3": "3",
    // Eastern-Arabic digit 3
    "\u06F4": "4",
    // Eastern-Arabic digit 4
    "\u06F5": "5",
    // Eastern-Arabic digit 5
    "\u06F6": "6",
    // Eastern-Arabic digit 6
    "\u06F7": "7",
    // Eastern-Arabic digit 7
    "\u06F8": "8",
    // Eastern-Arabic digit 8
    "\u06F9": "9"
    // Eastern-Arabic digit 9
  };
  function parseDigit(character) {
    return DIGITS[character];
  }

  // ../../node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function parseIncompletePhoneNumber(string2) {
    var result2 = "";
    for (var _iterator = _createForOfIteratorHelperLoose(string2.split("")), _step; !(_step = _iterator()).done; ) {
      var character = _step.value;
      result2 += parsePhoneNumberCharacter(character, result2) || "";
    }
    return result2;
  }
  function parsePhoneNumberCharacter(character, prevParsedCharacters) {
    if (character === "+") {
      if (prevParsedCharacters) {
        return;
      }
      return "+";
    }
    return parseDigit(character);
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/mergeArrays.js
  function _createForOfIteratorHelperLoose2(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray2(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray2(o, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function mergeArrays(a, b) {
    var merged = a.slice();
    for (var _iterator = _createForOfIteratorHelperLoose2(b), _step; !(_step = _iterator()).done; ) {
      var element = _step.value;
      if (a.indexOf(element) < 0) {
        merged.push(element);
      }
    }
    return merged.sort(function(a2, b2) {
      return a2 - b2;
    });
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js
  function checkNumberLength(nationalNumber, metadata) {
    return checkNumberLengthForType(nationalNumber, void 0, metadata);
  }
  function checkNumberLengthForType(nationalNumber, type, metadata) {
    var type_info = metadata.type(type);
    var possible_lengths = type_info && type_info.possibleLengths() || metadata.possibleLengths();
    if (!possible_lengths) {
      return "IS_POSSIBLE";
    }
    if (type === "FIXED_LINE_OR_MOBILE") {
      if (!metadata.type("FIXED_LINE")) {
        return checkNumberLengthForType(nationalNumber, "MOBILE", metadata);
      }
      var mobile_type = metadata.type("MOBILE");
      if (mobile_type) {
        possible_lengths = mergeArrays(possible_lengths, mobile_type.possibleLengths());
      }
    } else if (type && !type_info) {
      return "INVALID_LENGTH";
    }
    var actual_length = nationalNumber.length;
    var minimum_length = possible_lengths[0];
    if (minimum_length === actual_length) {
      return "IS_POSSIBLE";
    }
    if (minimum_length > actual_length) {
      return "TOO_SHORT";
    }
    if (possible_lengths[possible_lengths.length - 1] < actual_length) {
      return "TOO_LONG";
    }
    return possible_lengths.indexOf(actual_length, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
  }

  // ../../node_modules/libphonenumber-js/es6/isPossibleNumber_.js
  function isPossiblePhoneNumber(input, options, metadata) {
    if (options === void 0) {
      options = {};
    }
    metadata = new Metadata(metadata);
    if (options.v2) {
      if (!input.countryCallingCode) {
        throw new Error("Invalid phone number object passed");
      }
      metadata.selectNumberingPlan(input.countryCallingCode);
    } else {
      if (!input.phone) {
        return false;
      }
      if (input.country) {
        if (!metadata.hasCountry(input.country)) {
          throw new Error("Unknown country: ".concat(input.country));
        }
        metadata.country(input.country);
      } else {
        if (!input.countryCallingCode) {
          throw new Error("Invalid phone number object passed");
        }
        metadata.selectNumberingPlan(input.countryCallingCode);
      }
    }
    if (metadata.possibleLengths()) {
      return isPossibleNumber(input.phone || input.nationalNumber, metadata);
    } else {
      if (input.countryCallingCode && metadata.isNonGeographicCallingCode(input.countryCallingCode)) {
        return true;
      } else {
        throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
      }
    }
  }
  function isPossibleNumber(nationalNumber, metadata) {
    switch (checkNumberLength(nationalNumber, metadata)) {
      case "IS_POSSIBLE":
        return true;
      default:
        return false;
    }
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/RFC3966.js
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _createForOfIteratorHelperLoose3(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray3(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray3(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray3(o, minLen);
  }
  function _arrayLikeToArray3(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function parseRFC3966(text) {
    var number2;
    var ext;
    text = text.replace(/^tel:/, "tel=");
    for (var _iterator = _createForOfIteratorHelperLoose3(text.split(";")), _step; !(_step = _iterator()).done; ) {
      var part = _step.value;
      var _part$split = part.split("="), _part$split2 = _slicedToArray(_part$split, 2), name = _part$split2[0], value = _part$split2[1];
      switch (name) {
        case "tel":
          number2 = value;
          break;
        case "ext":
          ext = value;
          break;
        case "phone-context":
          if (value[0] === "+") {
            number2 = value + number2;
          }
          break;
      }
    }
    if (!isViablePhoneNumber(number2)) {
      return {};
    }
    var result2 = {
      number: number2
    };
    if (ext) {
      result2.ext = ext;
    }
    return result2;
  }
  function formatRFC3966(_ref) {
    var number2 = _ref.number, ext = _ref.ext;
    if (!number2) {
      return "";
    }
    if (number2[0] !== "+") {
      throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
    }
    return "tel:".concat(number2).concat(ext ? ";ext=" + ext : "");
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js
  function matchesEntirely(text, regular_expression) {
    text = text || "";
    return new RegExp("^(?:" + regular_expression + ")$").test(text);
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/getNumberType.js
  function _createForOfIteratorHelperLoose4(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray4(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray4(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray4(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray4(o, minLen);
  }
  function _arrayLikeToArray4(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var NON_FIXED_LINE_PHONE_TYPES = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
  function getNumberType(input, options, metadata) {
    options = options || {};
    if (!input.country) {
      return;
    }
    metadata = new Metadata(metadata);
    metadata.selectNumberingPlan(input.country, input.countryCallingCode);
    var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
    if (!matchesEntirely(nationalNumber, metadata.nationalNumberPattern())) {
      return;
    }
    if (isNumberTypeEqualTo(nationalNumber, "FIXED_LINE", metadata)) {
      if (metadata.type("MOBILE") && metadata.type("MOBILE").pattern() === "") {
        return "FIXED_LINE_OR_MOBILE";
      }
      if (!metadata.type("MOBILE")) {
        return "FIXED_LINE_OR_MOBILE";
      }
      if (isNumberTypeEqualTo(nationalNumber, "MOBILE", metadata)) {
        return "FIXED_LINE_OR_MOBILE";
      }
      return "FIXED_LINE";
    }
    for (var _iterator = _createForOfIteratorHelperLoose4(NON_FIXED_LINE_PHONE_TYPES), _step; !(_step = _iterator()).done; ) {
      var type = _step.value;
      if (isNumberTypeEqualTo(nationalNumber, type, metadata)) {
        return type;
      }
    }
  }
  function isNumberTypeEqualTo(nationalNumber, type, metadata) {
    type = metadata.type(type);
    if (!type || !type.pattern()) {
      return false;
    }
    if (type.possibleLengths() && type.possibleLengths().indexOf(nationalNumber.length) < 0) {
      return false;
    }
    return matchesEntirely(nationalNumber, type.pattern());
  }

  // ../../node_modules/libphonenumber-js/es6/validate_.js
  function isValidNumber(input, options, metadata) {
    options = options || {};
    metadata = new Metadata(metadata);
    if (!input.country) {
      return false;
    }
    metadata.selectNumberingPlan(input.country, input.countryCallingCode);
    if (metadata.hasTypes()) {
      return getNumberType(input, options, metadata.metadata) !== void 0;
    }
    var national_number = options.v2 ? input.nationalNumber : input.phone;
    return matchesEntirely(national_number, metadata.nationalNumberPattern());
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/getPossibleCountriesForNumber.js
  function getPossibleCountriesForNumber(callingCode, nationalNumber, metadata) {
    var _metadata = new Metadata(metadata);
    var possibleCountries = _metadata.getCountryCodesForCallingCode(callingCode);
    if (!possibleCountries) {
      return [];
    }
    return possibleCountries.filter(function(country) {
      return couldNationalNumberBelongToCountry(nationalNumber, country, metadata);
    });
  }
  function couldNationalNumberBelongToCountry(nationalNumber, country, metadata) {
    var _metadata = new Metadata(metadata);
    _metadata.selectNumberingPlan(country);
    if (_metadata.numberingPlan.possibleLengths().indexOf(nationalNumber.length) >= 0) {
      return true;
    }
    return false;
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/applyInternationalSeparatorStyle.js
  function applyInternationalSeparatorStyle(formattedNumber) {
    return formattedNumber.replace(new RegExp("[".concat(VALID_PUNCTUATION, "]+"), "g"), " ").trim();
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js
  var FIRST_GROUP_PATTERN = /(\$\d)/;
  function formatNationalNumberUsingFormat(number2, format, _ref) {
    var useInternationalFormat = _ref.useInternationalFormat, withNationalPrefix = _ref.withNationalPrefix, carrierCode = _ref.carrierCode, metadata = _ref.metadata;
    var formattedNumber = number2.replace(new RegExp(format.pattern()), useInternationalFormat ? format.internationalFormat() : (
      // This library doesn't use `domestic_carrier_code_formatting_rule`,
      // because that one is only used when formatting phone numbers
      // for dialing from a mobile phone, and this is not a dialing library.
      // carrierCode && format.domesticCarrierCodeFormattingRule()
      // 	// First, replace the $CC in the formatting rule with the desired carrier code.
      // 	// Then, replace the $FG in the formatting rule with the first group
      // 	// and the carrier code combined in the appropriate way.
      // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
      // 	: (
      // 		withNationalPrefix && format.nationalPrefixFormattingRule()
      // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
      // 			: format.format()
      // 	)
      withNationalPrefix && format.nationalPrefixFormattingRule() ? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule()) : format.format()
    ));
    if (useInternationalFormat) {
      return applyInternationalSeparatorStyle(formattedNumber);
    }
    return formattedNumber;
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/getIddPrefix.js
  var SINGLE_IDD_PREFIX_REG_EXP = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
  function getIddPrefix(country, callingCode, metadata) {
    var countryMetadata = new Metadata(metadata);
    countryMetadata.selectNumberingPlan(country, callingCode);
    if (countryMetadata.defaultIDDPrefix()) {
      return countryMetadata.defaultIDDPrefix();
    }
    if (SINGLE_IDD_PREFIX_REG_EXP.test(countryMetadata.IDDPrefix())) {
      return countryMetadata.IDDPrefix();
    }
  }

  // ../../node_modules/libphonenumber-js/es6/format_.js
  function _createForOfIteratorHelperLoose5(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray5(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray5(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray5(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray5(o, minLen);
  }
  function _arrayLikeToArray5(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function ownKeys(object2, enumerableOnly) {
    var keys = Object.keys(object2);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object2);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var DEFAULT_OPTIONS = {
    formatExtension: function formatExtension(formattedNumber, extension, metadata) {
      return "".concat(formattedNumber).concat(metadata.ext()).concat(extension);
    }
  };
  function formatNumber(input, format, options, metadata) {
    if (options) {
      options = _objectSpread(_objectSpread({}, DEFAULT_OPTIONS), options);
    } else {
      options = DEFAULT_OPTIONS;
    }
    metadata = new Metadata(metadata);
    if (input.country && input.country !== "001") {
      if (!metadata.hasCountry(input.country)) {
        throw new Error("Unknown country: ".concat(input.country));
      }
      metadata.country(input.country);
    } else if (input.countryCallingCode) {
      metadata.selectNumberingPlan(input.countryCallingCode);
    } else
      return input.phone || "";
    var countryCallingCode = metadata.countryCallingCode();
    var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
    var number2;
    switch (format) {
      case "NATIONAL":
        if (!nationalNumber) {
          return "";
        }
        number2 = formatNationalNumber(nationalNumber, input.carrierCode, "NATIONAL", metadata, options);
        return addExtension(number2, input.ext, metadata, options.formatExtension);
      case "INTERNATIONAL":
        if (!nationalNumber) {
          return "+".concat(countryCallingCode);
        }
        number2 = formatNationalNumber(nationalNumber, null, "INTERNATIONAL", metadata, options);
        number2 = "+".concat(countryCallingCode, " ").concat(number2);
        return addExtension(number2, input.ext, metadata, options.formatExtension);
      case "E.164":
        return "+".concat(countryCallingCode).concat(nationalNumber);
      case "RFC3966":
        return formatRFC3966({
          number: "+".concat(countryCallingCode).concat(nationalNumber),
          ext: input.ext
        });
      case "IDD":
        if (!options.fromCountry) {
          return;
        }
        var formattedNumber = formatIDD(nationalNumber, input.carrierCode, countryCallingCode, options.fromCountry, metadata);
        return addExtension(formattedNumber, input.ext, metadata, options.formatExtension);
      default:
        throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(format, '"'));
    }
  }
  function formatNationalNumber(number2, carrierCode, formatAs, metadata, options) {
    var format = chooseFormatForNumber(metadata.formats(), number2);
    if (!format) {
      return number2;
    }
    return formatNationalNumberUsingFormat(number2, format, {
      useInternationalFormat: formatAs === "INTERNATIONAL",
      withNationalPrefix: format.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && options && options.nationalPrefix === false ? false : true,
      carrierCode,
      metadata
    });
  }
  function chooseFormatForNumber(availableFormats, nationalNnumber) {
    for (var _iterator = _createForOfIteratorHelperLoose5(availableFormats), _step; !(_step = _iterator()).done; ) {
      var format = _step.value;
      if (format.leadingDigitsPatterns().length > 0) {
        var lastLeadingDigitsPattern = format.leadingDigitsPatterns()[format.leadingDigitsPatterns().length - 1];
        if (nationalNnumber.search(lastLeadingDigitsPattern) !== 0) {
          continue;
        }
      }
      if (matchesEntirely(nationalNnumber, format.pattern())) {
        return format;
      }
    }
  }
  function addExtension(formattedNumber, ext, metadata, formatExtension2) {
    return ext ? formatExtension2(formattedNumber, ext, metadata) : formattedNumber;
  }
  function formatIDD(nationalNumber, carrierCode, countryCallingCode, fromCountry, metadata) {
    var fromCountryCallingCode = getCountryCallingCode(fromCountry, metadata.metadata);
    if (fromCountryCallingCode === countryCallingCode) {
      var formattedNumber = formatNationalNumber(nationalNumber, carrierCode, "NATIONAL", metadata);
      if (countryCallingCode === "1") {
        return countryCallingCode + " " + formattedNumber;
      }
      return formattedNumber;
    }
    var iddPrefix = getIddPrefix(fromCountry, void 0, metadata.metadata);
    if (iddPrefix) {
      return "".concat(iddPrefix, " ").concat(countryCallingCode, " ").concat(formatNationalNumber(nationalNumber, null, "INTERNATIONAL", metadata));
    }
  }

  // ../../node_modules/libphonenumber-js/es6/PhoneNumber.js
  function ownKeys2(object2, enumerableOnly) {
    var keys = Object.keys(object2);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object2);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _classCallCheck3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties3(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass3(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties3(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties3(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;
  var PhoneNumber = /* @__PURE__ */ function() {
    function PhoneNumber2(countryCallingCode, nationalNumber, metadata) {
      _classCallCheck3(this, PhoneNumber2);
      if (!countryCallingCode) {
        throw new TypeError("`country` or `countryCallingCode` not passed");
      }
      if (!nationalNumber) {
        throw new TypeError("`nationalNumber` not passed");
      }
      if (!metadata) {
        throw new TypeError("`metadata` not passed");
      }
      var _metadata = new Metadata(metadata);
      if (isCountryCode(countryCallingCode)) {
        this.country = countryCallingCode;
        _metadata.country(countryCallingCode);
        countryCallingCode = _metadata.countryCallingCode();
      } else {
        if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
          if (_metadata.isNonGeographicCallingCode(countryCallingCode)) {
            this.country = "001";
          }
        }
      }
      this.countryCallingCode = countryCallingCode;
      this.nationalNumber = nationalNumber;
      this.number = "+" + this.countryCallingCode + this.nationalNumber;
      this.metadata = metadata;
    }
    _createClass3(PhoneNumber2, [{
      key: "setExt",
      value: function setExt(ext) {
        this.ext = ext;
      }
    }, {
      key: "getPossibleCountries",
      value: function getPossibleCountries() {
        if (this.country) {
          return [this.country];
        }
        return getPossibleCountriesForNumber(this.countryCallingCode, this.nationalNumber, this.metadata);
      }
    }, {
      key: "isPossible",
      value: function isPossible() {
        return isPossiblePhoneNumber(this, {
          v2: true
        }, this.metadata);
      }
    }, {
      key: "isValid",
      value: function isValid() {
        return isValidNumber(this, {
          v2: true
        }, this.metadata);
      }
    }, {
      key: "isNonGeographic",
      value: function isNonGeographic() {
        var metadata = new Metadata(this.metadata);
        return metadata.isNonGeographicCallingCode(this.countryCallingCode);
      }
    }, {
      key: "isEqual",
      value: function isEqual(phoneNumber) {
        return this.number === phoneNumber.number && this.ext === phoneNumber.ext;
      }
      // // Is just an alias for `this.isValid() && this.country === country`.
      // // https://github.com/googlei18n/libphonenumber/blob/master/FAQ.md#when-should-i-use-isvalidnumberforregion
      // isValidForRegion(country) {
      // 	return isValidNumberForRegion(this, country, { v2: true }, this.metadata)
      // }
    }, {
      key: "getType",
      value: function getType2() {
        return getNumberType(this, {
          v2: true
        }, this.metadata);
      }
    }, {
      key: "format",
      value: function format(_format, options) {
        return formatNumber(this, _format, options ? _objectSpread2(_objectSpread2({}, options), {}, {
          v2: true
        }) : {
          v2: true
        }, this.metadata);
      }
    }, {
      key: "formatNational",
      value: function formatNational(options) {
        return this.format("NATIONAL", options);
      }
    }, {
      key: "formatInternational",
      value: function formatInternational(options) {
        return this.format("INTERNATIONAL", options);
      }
    }, {
      key: "getURI",
      value: function getURI(options) {
        return this.format("RFC3966", options);
      }
    }]);
    return PhoneNumber2;
  }();
  var isCountryCode = function isCountryCode2(value) {
    return /^[A-Z]{2}$/.test(value);
  };

  // ../../node_modules/libphonenumber-js/es6/helpers/stripIddPrefix.js
  var CAPTURING_DIGIT_PATTERN = new RegExp("([" + VALID_DIGITS + "])");
  function stripIddPrefix(number2, country, callingCode, metadata) {
    if (!country) {
      return;
    }
    var countryMetadata = new Metadata(metadata);
    countryMetadata.selectNumberingPlan(country, callingCode);
    var IDDPrefixPattern = new RegExp(countryMetadata.IDDPrefix());
    if (number2.search(IDDPrefixPattern) !== 0) {
      return;
    }
    number2 = number2.slice(number2.match(IDDPrefixPattern)[0].length);
    var matchedGroups = number2.match(CAPTURING_DIGIT_PATTERN);
    if (matchedGroups && matchedGroups[1] != null && matchedGroups[1].length > 0) {
      if (matchedGroups[1] === "0") {
        return;
      }
    }
    return number2;
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.js
  function extractNationalNumberFromPossiblyIncompleteNumber(number2, metadata) {
    if (number2 && metadata.numberingPlan.nationalPrefixForParsing()) {
      var prefixPattern = new RegExp("^(?:" + metadata.numberingPlan.nationalPrefixForParsing() + ")");
      var prefixMatch = prefixPattern.exec(number2);
      if (prefixMatch) {
        var nationalNumber;
        var carrierCode;
        var capturedGroupsCount = prefixMatch.length - 1;
        var hasCapturedGroups = capturedGroupsCount > 0 && prefixMatch[capturedGroupsCount];
        if (metadata.nationalPrefixTransformRule() && hasCapturedGroups) {
          nationalNumber = number2.replace(prefixPattern, metadata.nationalPrefixTransformRule());
          if (capturedGroupsCount > 1) {
            carrierCode = prefixMatch[1];
          }
        } else {
          var prefixBeforeNationalNumber = prefixMatch[0];
          nationalNumber = number2.slice(prefixBeforeNationalNumber.length);
          if (hasCapturedGroups) {
            carrierCode = prefixMatch[1];
          }
        }
        var nationalPrefix;
        if (hasCapturedGroups) {
          var possiblePositionOfTheFirstCapturedGroup = number2.indexOf(prefixMatch[1]);
          var possibleNationalPrefix = number2.slice(0, possiblePositionOfTheFirstCapturedGroup);
          if (possibleNationalPrefix === metadata.numberingPlan.nationalPrefix()) {
            nationalPrefix = metadata.numberingPlan.nationalPrefix();
          }
        } else {
          nationalPrefix = prefixMatch[0];
        }
        return {
          nationalNumber,
          nationalPrefix,
          carrierCode
        };
      }
    }
    return {
      nationalNumber: number2
    };
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js
  function extractNationalNumber(number2, metadata) {
    var _extractNationalNumbe = extractNationalNumberFromPossiblyIncompleteNumber(number2, metadata), carrierCode = _extractNationalNumbe.carrierCode, nationalNumber = _extractNationalNumbe.nationalNumber;
    if (nationalNumber !== number2) {
      if (!shouldHaveExtractedNationalPrefix(number2, nationalNumber, metadata)) {
        return {
          nationalNumber: number2
        };
      }
      if (metadata.possibleLengths()) {
        if (!isPossibleIncompleteNationalNumber(nationalNumber, metadata)) {
          return {
            nationalNumber: number2
          };
        }
      }
    }
    return {
      nationalNumber,
      carrierCode
    };
  }
  function shouldHaveExtractedNationalPrefix(nationalNumberBefore, nationalNumberAfter, metadata) {
    if (matchesEntirely(nationalNumberBefore, metadata.nationalNumberPattern()) && !matchesEntirely(nationalNumberAfter, metadata.nationalNumberPattern())) {
      return false;
    }
    return true;
  }
  function isPossibleIncompleteNationalNumber(nationalNumber, metadata) {
    switch (checkNumberLength(nationalNumber, metadata)) {
      case "TOO_SHORT":
      case "INVALID_LENGTH":
        return false;
      default:
        return true;
    }
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js
  function extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number2, country, callingCode, metadata) {
    var countryCallingCode = country ? getCountryCallingCode(country, metadata) : callingCode;
    if (number2.indexOf(countryCallingCode) === 0) {
      metadata = new Metadata(metadata);
      metadata.selectNumberingPlan(country, callingCode);
      var possibleShorterNumber = number2.slice(countryCallingCode.length);
      var _extractNationalNumbe = extractNationalNumber(possibleShorterNumber, metadata), possibleShorterNationalNumber = _extractNationalNumbe.nationalNumber;
      var _extractNationalNumbe2 = extractNationalNumber(number2, metadata), nationalNumber = _extractNationalNumbe2.nationalNumber;
      if (!matchesEntirely(nationalNumber, metadata.nationalNumberPattern()) && matchesEntirely(possibleShorterNationalNumber, metadata.nationalNumberPattern()) || checkNumberLength(nationalNumber, metadata) === "TOO_LONG") {
        return {
          countryCallingCode,
          number: possibleShorterNumber
        };
      }
    }
    return {
      number: number2
    };
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js
  function extractCountryCallingCode(number2, country, callingCode, metadata) {
    if (!number2) {
      return {};
    }
    if (number2[0] !== "+") {
      var numberWithoutIDD = stripIddPrefix(number2, country, callingCode, metadata);
      if (numberWithoutIDD && numberWithoutIDD !== number2) {
        number2 = "+" + numberWithoutIDD;
      } else {
        if (country || callingCode) {
          var _extractCountryCallin = extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number2, country, callingCode, metadata), countryCallingCode = _extractCountryCallin.countryCallingCode, shorterNumber = _extractCountryCallin.number;
          if (countryCallingCode) {
            return {
              countryCallingCode,
              number: shorterNumber
            };
          }
        }
        return {
          number: number2
        };
      }
    }
    if (number2[1] === "0") {
      return {};
    }
    metadata = new Metadata(metadata);
    var i = 2;
    while (i - 1 <= MAX_LENGTH_COUNTRY_CODE && i <= number2.length) {
      var _countryCallingCode = number2.slice(1, i);
      if (metadata.hasCallingCode(_countryCallingCode)) {
        metadata.selectNumberingPlan(_countryCallingCode);
        return {
          countryCallingCode: _countryCallingCode,
          number: number2.slice(i)
        };
      }
      i++;
    }
    return {};
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/getCountryByNationalNumber.js
  function _createForOfIteratorHelperLoose6(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray6(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray6(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray6(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray6(o, minLen);
  }
  function _arrayLikeToArray6(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function getCountryByNationalNumber(possibleCountries, nationalPhoneNumber, metadata) {
    metadata = new Metadata(metadata);
    for (var _iterator = _createForOfIteratorHelperLoose6(possibleCountries), _step; !(_step = _iterator()).done; ) {
      var country = _step.value;
      metadata.country(country);
      if (metadata.leadingDigits()) {
        if (nationalPhoneNumber && nationalPhoneNumber.search(metadata.leadingDigits()) === 0) {
          return country;
        }
      } else if (getNumberType({
        phone: nationalPhoneNumber,
        country
      }, void 0, metadata.metadata)) {
        return country;
      }
    }
  }

  // ../../node_modules/libphonenumber-js/es6/helpers/getCountryByCallingCode.js
  var USE_NON_GEOGRAPHIC_COUNTRY_CODE2 = false;
  function getCountryByCallingCode(callingCode, nationalPhoneNumber, metadata) {
    if (USE_NON_GEOGRAPHIC_COUNTRY_CODE2) {
      if (metadata.isNonGeographicCallingCode(callingCode)) {
        return "001";
      }
    }
    var possibleCountries = metadata.getCountryCodesForCallingCode(callingCode);
    if (!possibleCountries) {
      return;
    }
    if (possibleCountries.length === 1) {
      return possibleCountries[0];
    }
    return getCountryByNationalNumber(possibleCountries, nationalPhoneNumber, metadata.metadata);
  }

  // ../../node_modules/libphonenumber-js/es6/parse_.js
  var MAX_INPUT_STRING_LENGTH = 250;
  var PHONE_NUMBER_START_PATTERN = new RegExp("[" + PLUS_CHARS + VALID_DIGITS + "]");
  var AFTER_PHONE_NUMBER_END_PATTERN = new RegExp("[^" + VALID_DIGITS + "#]+$");
  var USE_NON_GEOGRAPHIC_COUNTRY_CODE3 = false;
  function parse(text, options, metadata) {
    options = options || {};
    metadata = new Metadata(metadata);
    if (options.defaultCountry && !metadata.hasCountry(options.defaultCountry)) {
      if (options.v2) {
        throw new ParseError("INVALID_COUNTRY");
      }
      throw new Error("Unknown country: ".concat(options.defaultCountry));
    }
    var _parseInput = parseInput(text, options.v2, options.extract), formattedPhoneNumber = _parseInput.number, ext = _parseInput.ext, error = _parseInput.error;
    if (!formattedPhoneNumber) {
      if (options.v2) {
        if (error === "TOO_SHORT") {
          throw new ParseError("TOO_SHORT");
        }
        throw new ParseError("NOT_A_NUMBER");
      }
      return {};
    }
    var _parsePhoneNumber = parsePhoneNumber(formattedPhoneNumber, options.defaultCountry, options.defaultCallingCode, metadata), country = _parsePhoneNumber.country, nationalNumber = _parsePhoneNumber.nationalNumber, countryCallingCode = _parsePhoneNumber.countryCallingCode, carrierCode = _parsePhoneNumber.carrierCode;
    if (!metadata.hasSelectedNumberingPlan()) {
      if (options.v2) {
        throw new ParseError("INVALID_COUNTRY");
      }
      return {};
    }
    if (!nationalNumber || nationalNumber.length < MIN_LENGTH_FOR_NSN) {
      if (options.v2) {
        throw new ParseError("TOO_SHORT");
      }
      return {};
    }
    if (nationalNumber.length > MAX_LENGTH_FOR_NSN) {
      if (options.v2) {
        throw new ParseError("TOO_LONG");
      }
      return {};
    }
    if (options.v2) {
      var phoneNumber = new PhoneNumber(countryCallingCode, nationalNumber, metadata.metadata);
      if (country) {
        phoneNumber.country = country;
      }
      if (carrierCode) {
        phoneNumber.carrierCode = carrierCode;
      }
      if (ext) {
        phoneNumber.ext = ext;
      }
      return phoneNumber;
    }
    var valid = (options.extended ? metadata.hasSelectedNumberingPlan() : country) ? matchesEntirely(nationalNumber, metadata.nationalNumberPattern()) : false;
    if (!options.extended) {
      return valid ? result(country, nationalNumber, ext) : {};
    }
    return {
      country,
      countryCallingCode,
      carrierCode,
      valid,
      possible: valid ? true : options.extended === true && metadata.possibleLengths() && isPossibleNumber(nationalNumber, metadata) ? true : false,
      phone: nationalNumber,
      ext
    };
  }
  function extractFormattedPhoneNumber(text, extract, throwOnError) {
    if (!text) {
      return;
    }
    if (text.length > MAX_INPUT_STRING_LENGTH) {
      if (throwOnError) {
        throw new ParseError("TOO_LONG");
      }
      return;
    }
    if (extract === false) {
      return text;
    }
    var startsAt = text.search(PHONE_NUMBER_START_PATTERN);
    if (startsAt < 0) {
      return;
    }
    return text.slice(startsAt).replace(AFTER_PHONE_NUMBER_END_PATTERN, "");
  }
  function parseInput(text, v2, extract) {
    if (text && text.indexOf("tel:") === 0) {
      return parseRFC3966(text);
    }
    var number2 = extractFormattedPhoneNumber(text, extract, v2);
    if (!number2) {
      return {};
    }
    if (!isViablePhoneNumber(number2)) {
      if (isViablePhoneNumberStart(number2)) {
        return {
          error: "TOO_SHORT"
        };
      }
      return {};
    }
    var withExtensionStripped = extractExtension(number2);
    if (withExtensionStripped.ext) {
      return withExtensionStripped;
    }
    return {
      number: number2
    };
  }
  function result(country, nationalNumber, ext) {
    var result2 = {
      country,
      phone: nationalNumber
    };
    if (ext) {
      result2.ext = ext;
    }
    return result2;
  }
  function parsePhoneNumber(formattedPhoneNumber, defaultCountry, defaultCallingCode, metadata) {
    var _extractCountryCallin = extractCountryCallingCode(parseIncompletePhoneNumber(formattedPhoneNumber), defaultCountry, defaultCallingCode, metadata.metadata), countryCallingCode = _extractCountryCallin.countryCallingCode, number2 = _extractCountryCallin.number;
    var country;
    if (countryCallingCode) {
      metadata.selectNumberingPlan(countryCallingCode);
    } else if (number2 && (defaultCountry || defaultCallingCode)) {
      metadata.selectNumberingPlan(defaultCountry, defaultCallingCode);
      if (defaultCountry) {
        country = defaultCountry;
      } else {
        if (USE_NON_GEOGRAPHIC_COUNTRY_CODE3) {
          if (metadata.isNonGeographicCallingCode(defaultCallingCode)) {
            country = "001";
          }
        }
      }
      countryCallingCode = defaultCallingCode || getCountryCallingCode(defaultCountry, metadata.metadata);
    } else
      return {};
    if (!number2) {
      return {
        countryCallingCode
      };
    }
    var _extractNationalNumbe = extractNationalNumber(parseIncompletePhoneNumber(number2), metadata), nationalNumber = _extractNationalNumbe.nationalNumber, carrierCode = _extractNationalNumbe.carrierCode;
    var exactCountry = getCountryByCallingCode(countryCallingCode, nationalNumber, metadata);
    if (exactCountry) {
      country = exactCountry;
      if (exactCountry === "001") {
      } else {
        metadata.country(country);
      }
    }
    return {
      country,
      countryCallingCode,
      nationalNumber,
      carrierCode
    };
  }

  // ../../node_modules/libphonenumber-js/es6/parsePhoneNumber_.js
  function ownKeys3(object2, enumerableOnly) {
    var keys = Object.keys(object2);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object2);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread3(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys3(Object(source), true).forEach(function(key) {
        _defineProperty3(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys3(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty3(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function parsePhoneNumber2(text, options, metadata) {
    return parse(text, _objectSpread3(_objectSpread3({}, options), {}, {
      v2: true
    }), metadata);
  }

  // ../../node_modules/libphonenumber-js/es6/parsePhoneNumber.js
  function _typeof3(obj) {
    "@babel/helpers - typeof";
    return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof3(obj);
  }
  function ownKeys4(object2, enumerableOnly) {
    var keys = Object.keys(object2);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object2);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread4(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys4(Object(source), true).forEach(function(key) {
        _defineProperty4(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys4(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty4(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray2(arr, i) {
    return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray7(arr, i) || _nonIterableRest2();
  }
  function _nonIterableRest2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray7(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray7(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray7(o, minLen);
  }
  function _arrayLikeToArray7(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit2(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles2(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function normalizeArguments(args) {
    var _Array$prototype$slic = Array.prototype.slice.call(args), _Array$prototype$slic2 = _slicedToArray2(_Array$prototype$slic, 4), arg_1 = _Array$prototype$slic2[0], arg_2 = _Array$prototype$slic2[1], arg_3 = _Array$prototype$slic2[2], arg_4 = _Array$prototype$slic2[3];
    var text;
    var options;
    var metadata;
    if (typeof arg_1 === "string") {
      text = arg_1;
    } else
      throw new TypeError("A text for parsing must be a string.");
    if (!arg_2 || typeof arg_2 === "string") {
      if (arg_4) {
        options = arg_3;
        metadata = arg_4;
      } else {
        options = void 0;
        metadata = arg_3;
      }
      if (arg_2) {
        options = _objectSpread4({
          defaultCountry: arg_2
        }, options);
      }
    } else if (isObject2(arg_2)) {
      if (arg_3) {
        options = arg_2;
        metadata = arg_3;
      } else {
        metadata = arg_2;
      }
    } else
      throw new Error("Invalid second argument: ".concat(arg_2));
    return {
      text,
      options,
      metadata
    };
  }
  var isObject2 = function isObject3(_) {
    return _typeof3(_) === "object";
  };

  // ../../node_modules/libphonenumber-js/es6/parsePhoneNumberFromString_.js
  function ownKeys5(object2, enumerableOnly) {
    var keys = Object.keys(object2);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object2);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread5(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys5(Object(source), true).forEach(function(key) {
        _defineProperty5(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys5(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty5(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function parsePhoneNumberFromString(text, options, metadata) {
    if (options && options.defaultCountry && !isSupportedCountry(options.defaultCountry, metadata)) {
      options = _objectSpread5(_objectSpread5({}, options), {}, {
        defaultCountry: void 0
      });
    }
    try {
      return parsePhoneNumber2(text, options, metadata);
    } catch (error) {
      if (error instanceof ParseError) {
      } else {
        throw error;
      }
    }
  }

  // ../../node_modules/libphonenumber-js/es6/isPossiblePhoneNumber.js
  function ownKeys6(object2, enumerableOnly) {
    var keys = Object.keys(object2);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object2);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread6(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys6(Object(source), true).forEach(function(key) {
        _defineProperty6(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys6(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty6(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function isPossiblePhoneNumber2() {
    var _normalizeArguments = normalizeArguments(arguments), text = _normalizeArguments.text, options = _normalizeArguments.options, metadata = _normalizeArguments.metadata;
    options = _objectSpread6(_objectSpread6({}, options), {}, {
      extract: false
    });
    var phoneNumber = parsePhoneNumberFromString(text, options, metadata);
    return phoneNumber && phoneNumber.isPossible() || false;
  }

  // ../../node_modules/libphonenumber-js/min/exports/isPossiblePhoneNumber.js
  function isPossiblePhoneNumber3() {
    return withMetadataArgument(isPossiblePhoneNumber2, arguments);
  }

  // src/profile.schema.ts
  var createPersonalAccessTokenSchema = create6({
    scopes: create3(),
    expiry: create3(),
    label: create3().min(1, "Label must be between 1 and 100 characters.").max(100, "Label must be between 1 and 100 characters.")
  });
  var createSSHKeySchema = create6({
    label: create3().required("Label is required.").min(1, "Label must be between 1 and 64 characters.").max(64, "Label must be between 1 and 64 characters.").trim(),
    ssh_key: create3()
  });
  var updateProfileSchema = create6({
    email: create3().email(),
    timezone: create3(),
    email_notifications: create2(),
    authorized_keys: create7().of(create3()),
    restricted: create2(),
    two_factor_auth: create2(),
    lish_auth_method: create3().oneOf(["password_keys", "keys_only", "disabled"]),
    authentication_type: create3().oneOf(["password", "github"])
  });
  var SendCodeToPhoneNumberSchema = create6({
    iso_code: create3().required(),
    phone_number: create3().test(
      "is-phone-number",
      "Not a valid phone number",
      (phone_number, context) => {
        const { iso_code } = context.parent;
        if (!phone_number) {
          return false;
        }
        return isPossiblePhoneNumber3(phone_number, iso_code);
      }
    )
  });
  var VerifyPhoneNumberCodeSchema = create6({
    otp_code: create3().required("Verification Code is required.").test(
      "digits only",
      "The verification code must only contain digits.",
      (value) => {
        if (!value) {
          return true;
        }
        return /^\d+$/.test(value);
      }
    )
  });
  var SecurityQuestionsSchema = create6({
    security_questions: create7().of(
      create6({
        question_id: create4().required("You must pick a question."),
        response: create3().min(3, "Answers must be at least 3 characters.").max(17, "Answers must be at most 17 characters.").required("You must provide an answer to each security question.")
      }).required()
    ).length(3, "You must answer all 3 security questions.").required()
  });

  // src/records.schema.ts
  var recordBaseSchema = create6().shape({
    name: create3().max(100, "Record name must be 100 characters or less."),
    target: create3(),
    priority: create4().min(0, "Priority must be between 0 and 255.").max(255, "Priority must be between 0 and 255."),
    weight: create4(),
    port: create4(),
    service: create3().nullable(true),
    protocol: create3().nullable(true),
    ttl_sec: create4(),
    tag: create3()
  });
  var validRecordTypes = [
    "A",
    "AAAA",
    "NS",
    "MX",
    "CNAME",
    "TXT",
    "SRV",
    "PTR",
    "CAA"
  ];
  var createRecordSchema = recordBaseSchema.shape({
    type: create().required("Type is required.").oneOf(validRecordTypes)
  });
  var updateRecordSchema = recordBaseSchema.shape({});

  // src/stackscripts.schema.ts
  var stackScriptSchema = create6({
    script: create3().required("Script is required."),
    label: create3().required("Label is required.").min(3, "Label must be between 3 and 128 characters.").max(128, "Label must be between 3 and 128 characters."),
    images: create7().of(create3()).required("An image is required."),
    description: create3(),
    is_public: create2(),
    rev_note: create3()
  });
  var updateStackScriptSchema = create6({
    script: create3(),
    label: create3().min(3, "Label must be between 3 and 128 characters.").max(128, "Label must be between 3 and 128 characters."),
    images: create7().of(create3()).min(1, "An image is required."),
    description: create3(),
    is_public: create2(),
    rev_note: create3()
  });

  // src/support.schema.ts
  var createSupportTicketSchema = create6({
    summary: create3().required("Summary is required.").min(1, "Summary must be between 1 and 64 characters.").max(64, "Summary must be between 1 and 64 characters.").trim(),
    description: create3().required("Description is required.").min(1, "Description must be between 1 and 64,000 characters.").max(64e3, "Description must be between 1 and 64,000 characters.").trim(),
    domain_id: create4(),
    linode_id: create4(),
    longviewclient_id: create4(),
    nodebalancer_id: create4(),
    volume_id: create4()
  });
  var createReplySchema = create6({
    description: create3().required("Description is required.").min(1, "Description must be between 1 and 65,535 characters.").max(65535, "Description must be between 1 and 65,535 characters.").trim()
  });

  // src/transfers.schema.ts
  var CreateTransferSchema = create6({
    entities: create6({
      linodes: create7().of(create4())
    })
  });

  // src/twofactor.schema.ts
  var enableTwoFactorSchema = create6({
    tfa_code: create3().required("Please enter a token.")
  });

  // src/constants.ts
  var MAX_VOLUME_SIZE = 10240;

  // src/volumes.schema.ts
  var createSizeValidation = (minSize = 10) => create4().integer().typeError(`Size must be a number`).min(minSize, `Size must be between ${minSize} and ${MAX_VOLUME_SIZE}.`).max(
    MAX_VOLUME_SIZE,
    `Size must be between ${minSize} and ${MAX_VOLUME_SIZE}.`
  ).required(`A size is required.`);
  var CreateVolumeSchema = create6({
    region: create3().when("linode_id", {
      is: (id) => id === void 0 || id === "",
      then: create3().required("Must provide a region or a Linode ID.")
    }),
    linode_id: create4(),
    size: createSizeValidation(10),
    label: create3().required("Label is required.").ensure().trim().min(1, "Label must be between 1 and 32 characters.").max(32, "Label must be 32 characters or less."),
    config_id: create4().typeError("Config ID must be a number."),
    tags: create7().of(create3())
  });
  var CloneVolumeSchema = create6({
    label: create3().required()
  });
  var ResizeVolumeSchema = (minSize = 10) => create6({
    size: createSizeValidation(minSize)
  });
  var UpdateVolumeSchema = create6({
    label: create3().required()
  });
  var AttachVolumeSchema = create6({
    linode_id: create4().required(),
    config_id: create4().required()
  });
})();
