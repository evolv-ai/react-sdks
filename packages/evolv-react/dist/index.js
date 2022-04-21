var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  EvolvContext: () => EvolvContext,
  EvolvProvider: () => EvolvProvider,
  useVariable: () => useVariable
});
module.exports = __toCommonJS(src_exports);

// src/components/EvolvContext.tsx
var import_react = __toESM(require("react"));
var defaultStore = {};
var EvolvContext = import_react.default.createContext(defaultStore);
var EvolvProvider = ({ children, client }) => {
  return /* @__PURE__ */ import_react.default.createElement(EvolvContext.Provider, {
    value: { client }
  }, children);
};

// src/hooks/useVariable.ts
var import_react2 = require("react");
var getVariableData = (groupName, variableName, evolvContext, control) => {
  const { client } = evolvContext;
  if (!client)
    return control;
  const groups = client.getGroups();
  const group = groups[groupName];
  if (!group)
    return control;
  const variable = group[variableName];
  if (typeof variable === "undefined") {
    return control;
  }
  return variable;
};
function useVariable(variableName, control) {
  const splitted = variableName.split(".");
  const groupName = splitted[0];
  const variableRealName = splitted[1];
  const evolvContext = (0, import_react2.useContext)(EvolvContext);
  const variable = getVariableData(groupName, variableRealName, evolvContext, control);
  return variable;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EvolvContext,
  EvolvProvider,
  useVariable
});
