/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1684258574102
      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/components/HeaderFilters/HeaderFilters.css":
/*!********************************************************!*\
  !*** ./src/components/HeaderFilters/HeaderFilters.css ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1684259284448
      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1684256543359
      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _components_HeaderFilters_HeaderFilters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/HeaderFilters/HeaderFilters */ "./src/components/HeaderFilters/HeaderFilters.tsx");
/* harmony import */ var _components_Table_TableWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Table/TableWrapper */ "./src/components/Table/TableWrapper.tsx");
/* harmony import */ var _hooks_useAppLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useAppLogic */ "./src/hooks/useAppLogic.ts");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/App.css");







const App = () => {
    const logic = (0,_hooks_useAppLogic__WEBPACK_IMPORTED_MODULE_3__["default"])();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__["default"], { maxWidth: 'lg', sx: { padding: "3em 0" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { direction: 'column', spacing: 3, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { className: 'header', variant: 'h2', component: 'h1', children: "Pokemons" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_HeaderFilters_HeaderFilters__WEBPACK_IMPORTED_MODULE_1__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Table_TableWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {})] }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/api/useGetPmApi.ts":
/*!********************************!*\
  !*** ./src/api/useGetPmApi.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": () => (/* binding */ BASE_URL),
/* harmony export */   "pmApi": () => (/* binding */ pmApi),
/* harmony export */   "useGetTypesQuery": () => (/* binding */ useGetTypesQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js");
/* harmony import */ var src_utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/utils */ "./src/utils/utils.ts");


const BASE_URL = "https://pokeapi.co/api/v2";
const pmApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.createApi)({
    reducerPath: "pmApi",
    tagTypes: ["Types"],
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__.fetchBaseQuery)({
        baseUrl: `${BASE_URL}`,
    }),
    endpoints: (builder) => ({
        getTypes: builder.query({
            query: () => `/type`,
            providesTags: ["Types"],
            transformResponse: (response) => response.results.sort(src_utils_utils__WEBPACK_IMPORTED_MODULE_0__.sortTypes),
        }),
    }),
});
const { useGetTypesQuery } = pmApi;


/***/ }),

/***/ "./src/components/HeaderFilters/HeaderFilters.tsx":
/*!********************************************************!*\
  !*** ./src/components/HeaderFilters/HeaderFilters.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/Box/Box.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/Stack/Stack.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var src_hooks_useFiltersLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/hooks/useFiltersLogic */ "./src/hooks/useFiltersLogic.ts");
/* harmony import */ var src_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _HeaderFilters_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderFilters.css */ "./src/components/HeaderFilters/HeaderFilters.css");







const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const HeaderFilters = () => {
    const { handleChangeSelect, handleChangeInput, allTypes, selectedTypes, isTypesArray, } = (0,src_hooks_useFiltersLogic__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_4__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_5__["default"], { direction: 'column', spacing: 2, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'filter1', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { id: 'demo-multiple-chip-label', children: "Search by name" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { sx: { width: "100%" }, onChange: handleChangeInput, variant: 'outlined', placeholder: 'Pikachu', InputProps: {
                                startAdornment: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { position: 'start', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_9__["default"], {}) })),
                            }, inputProps: { "aria-label": "search by name" } })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: 'filter2', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { id: 'demo-multiple-chip-label', children: "Select by type" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { labelId: 'demo-multiple-chip-label', id: 'demo-multiple-chip', multiple: true, value: selectedTypes, onChange: handleChangeSelect, input: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { id: 'select-multiple-chip', label: 'Select by type' }), renderValue: (selected) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_4__["default"], { sx: { display: "flex", flexWrap: "wrap", gap: 0.5 }, children: selected.map((value) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { label: value, sx: { backgroundColor: (0,src_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getTypeColor)(value) } }, value))) })), MenuProps: MenuProps, sx: { width: "100%" }, children: isTypesArray &&
                                allTypes?.map(({ name }) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { value: name, children: name }, name))) })] })] }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderFilters);


/***/ }),

/***/ "./src/components/Table/Row.tsx":
/*!**************************************!*\
  !*** ./src/components/Table/Row.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Collapse/Collapse.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowUp */ "./node_modules/@mui/icons-material/KeyboardArrowUp.js");
/* harmony import */ var src_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/utils */ "./src/utils/utils.ts");






function Row(props) {
    const { row } = props;
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { sx: { "& > *": { borderBottom: "unset" } }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { "aria-label": 'expand row', size: 'small', onClick: () => setOpen(!open), children: open ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_6__["default"], {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_7__["default"], {}) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { align: 'center', children: row.name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { align: 'center', sx: { display: "flex", justifyContent: "center" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { src: row.img, alt: `${row.name} photo` }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { align: 'center', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], { justifyContent: 'center', direction: 'row', spacing: 1, children: row.types.map((type) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { size: 'small', sx: { backgroundColor: (0,src_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getTypeColor)(type) }, label: type }, type))) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { align: 'center', children: row.species })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { sx: { paddingBottom: 0, paddingTop: 0 }, colSpan: 6, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { in: open, timeout: 'auto', unmountOnExit: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { sx: { margin: 1 }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { variant: 'h6', gutterBottom: true, component: 'div', children: "Details" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], { size: 'small', "aria-label": 'purchases', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { align: 'center', children: "Forms" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { align: 'center', children: "Abilities" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { align: 'center', children: row.forms.join(", ") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { align: 'center', children: row.abilities.map((item) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { sx: { margin: 1 }, children: item }, item))) })] }, row.id) })] })] }) }) }) })] }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);


/***/ }),

/***/ "./src/components/Table/TableContent.tsx":
/*!***********************************************!*\
  !*** ./src/components/Table/TableContent.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TablePagination/TablePagination.js");
/* harmony import */ var src_hooks_useTableLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/hooks/useTableLogic */ "./src/hooks/useTableLogic.ts");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Row */ "./src/components/Table/Row.tsx");




const TableContent = () => {
    const { handlePageChange, handlePageSizeChange, pmsOnPage, page, perPage, totalCount, paddingValue, } = (0,src_hooks_useTableLogic__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { component: _mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { padding: paddingValue, "aria-label": 'collapsible table', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { align: 'center', children: "Name" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { align: 'center', children: "Avatar" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { align: 'center', children: "Type" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { align: 'center', children: "Species" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], { children: pmsOnPage.map((row) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_2__["default"], { row: row }, row.id))) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { component: 'div', count: totalCount, page: page, onPageChange: handlePageChange, rowsPerPage: perPage, onRowsPerPageChange: handlePageSizeChange })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableContent);


/***/ }),

/***/ "./src/components/Table/TableWrapper.tsx":
/*!***********************************************!*\
  !*** ./src/components/Table/TableWrapper.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Skeleton/Skeleton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var src_hooks_useTableContainerLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/hooks/useTableContainerLogic */ "./src/hooks/useTableContainerLogic.ts");
/* harmony import */ var _TableContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableContent */ "./src/components/Table/TableContent.tsx");




const TableWrapper = () => {
    const { isLoading, error } = (0,src_hooks_useTableContainerLogic__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                    display: "flex",
                    justifyContent: "center",
                }, children: isLoading && !error ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { direction: 'column', width: '100%', spacing: 2, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { animation: 'wave', width: '100%', height: '5em' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { animation: 'wave', width: '100%', height: '5em' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { animation: 'wave', width: '100%', height: '5em' })] })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TableContent__WEBPACK_IMPORTED_MODULE_2__["default"], {})) }), error && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { severity: 'error', children: error })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableWrapper);


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FIRST_PAGE": () => (/* binding */ FIRST_PAGE),
/* harmony export */   "INITIAL_PAGE_SIZE": () => (/* binding */ INITIAL_PAGE_SIZE),
/* harmony export */   "TOTAL_ROWS": () => (/* binding */ TOTAL_ROWS)
/* harmony export */ });
const INITIAL_PAGE_SIZE = 25;
const TOTAL_ROWS = 100;
const FIRST_PAGE = 0;


/***/ }),

/***/ "./src/hooks/useAppLogic.ts":
/*!**********************************!*\
  !*** ./src/hooks/useAppLogic.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var src_middleware_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/middleware/thunks */ "./src/middleware/thunks.ts");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");




const useAppLogic = () => {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const fetchInitial = (0,src_middleware_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchPmsThunk)(dispatch);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        fetchInitial(src_constants__WEBPACK_IMPORTED_MODULE_3__.TOTAL_ROWS);
    }, []);
    return {};
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAppLogic);


/***/ }),

/***/ "./src/hooks/useFiltersLogic.ts":
/*!**************************************!*\
  !*** ./src/hooks/useFiltersLogic.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var src_api_useGetPmApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/api/useGetPmApi */ "./src/api/useGetPmApi.ts");
/* harmony import */ var src_state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/state/actions */ "./src/state/actions.ts");
/* harmony import */ var src_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/utils */ "./src/utils/utils.ts");





const useFiltersLogic = () => {
    const { data: allTypes } = (0,src_api_useGetPmApi__WEBPACK_IMPORTED_MODULE_2__.useGetTypesQuery)();
    const [selectedTypes, setSelectedTypes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const handleChangeSelect = (event) => {
        const { target: { value }, } = event;
        const val = typeof value === "string" ? value.split(",") : value;
        setSelectedTypes(val);
        dispatch((0,src_state_actions__WEBPACK_IMPORTED_MODULE_3__.filterByType)(val));
    };
    const handleChangeInput = (e) => {
        (0,src_utils_utils__WEBPACK_IMPORTED_MODULE_4__.debounce)(() => dispatch((0,src_state_actions__WEBPACK_IMPORTED_MODULE_3__.filterByName)(e.target.value)), 500)();
    };
    return {
        handleChangeSelect,
        handleChangeInput,
        allTypes,
        selectedTypes,
        isTypesArray: allTypes && Array.isArray(allTypes),
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFiltersLogic);


/***/ }),

/***/ "./src/hooks/useTableContainerLogic.ts":
/*!*********************************************!*\
  !*** ./src/hooks/useTableContainerLogic.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var src_state_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/state/selectors */ "./src/state/selectors.ts");


const useListLogic = () => {
    const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(src_state_selectors__WEBPACK_IMPORTED_MODULE_1__.selectIsLoading);
    const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(src_state_selectors__WEBPACK_IMPORTED_MODULE_1__.selectError);
    return {
        isLoading,
        error,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useListLogic);


/***/ }),

/***/ "./src/hooks/useTableLogic.ts":
/*!************************************!*\
  !*** ./src/hooks/useTableLogic.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/useMediaQuery/useMediaQuery.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var src_state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/state/actions */ "./src/state/actions.ts");
/* harmony import */ var src_state_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/state/selectors */ "./src/state/selectors.ts");




const useTableLogic = () => {
    const pmsOnPage = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(src_state_selectors__WEBPACK_IMPORTED_MODULE_2__.selectSlicedPms);
    const page = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(src_state_selectors__WEBPACK_IMPORTED_MODULE_2__.selectPage);
    const perPage = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(src_state_selectors__WEBPACK_IMPORTED_MODULE_2__.selectPerPage);
    const totalPages = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(src_state_selectors__WEBPACK_IMPORTED_MODULE_2__.selectTotalPages);
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"])(theme.breakpoints.down("sm"));
    const paddingValue = isMobile ? "none" : "normal";
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
    const handlePageChange = (e, newPage) => dispatch((0,src_state_actions__WEBPACK_IMPORTED_MODULE_1__.changePage)(newPage));
    const handlePageSizeChange = (e) => dispatch((0,src_state_actions__WEBPACK_IMPORTED_MODULE_1__.changePageSize)(+e.target.value));
    return {
        handlePageChange,
        handlePageSizeChange,
        pmsOnPage,
        page,
        perPage,
        totalCount: totalPages * perPage,
        paddingValue,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTableLogic);


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state/store */ "./src/state/store.ts");
/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fontsource/roboto/400.css */ "./node_modules/@fontsource/roboto/400.css");
/* harmony import */ var _fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fontsource/roboto/500.css */ "./node_modules/@fontsource/roboto/500.css");









react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.getElementById("root")).render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, { store: _state_store__WEBPACK_IMPORTED_MODULE_6__["default"], children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}) }) }));


/***/ }),

/***/ "./src/middleware/thunks.ts":
/*!**********************************!*\
  !*** ./src/middleware/thunks.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchPmsThunk": () => (/* binding */ fetchPmsThunk)
/* harmony export */ });
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var src_state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/state/actions */ "./src/state/actions.ts");
/* harmony import */ var src_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _api_useGetPmApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/useGetPmApi */ "./src/api/useGetPmApi.ts");




const fetchPmsThunk = (dispatch) => async (totalRows) => {
    dispatch((0,src_state_actions__WEBPACK_IMPORTED_MODULE_1__.fetchIsLoading)(true));
    try {
        const requests = [];
        for (let id = src_constants__WEBPACK_IMPORTED_MODULE_0__.FIRST_PAGE + 1; id <= totalRows; id++) {
            requests.push(fetch(`${_api_useGetPmApi__WEBPACK_IMPORTED_MODULE_3__.BASE_URL}/pokemon/${id}`)
                .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch Pokemon data");
                }
                return response.json();
            })
                .then((data) => (0,src_utils_utils__WEBPACK_IMPORTED_MODULE_2__.extractMainInfo)(data)));
        }
        const data = await Promise.all(requests);
        dispatch((0,src_state_actions__WEBPACK_IMPORTED_MODULE_1__.fetchPms)(data));
        dispatch((0,src_state_actions__WEBPACK_IMPORTED_MODULE_1__.fetchIsLoading)(false));
    }
    catch (error) {
        if (error instanceof Error)
            dispatch((0,src_state_actions__WEBPACK_IMPORTED_MODULE_1__.fetchPmsError)(error.message));
    }
};


/***/ }),

/***/ "./src/state/actions.ts":
/*!******************************!*\
  !*** ./src/state/actions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changePage": () => (/* binding */ changePage),
/* harmony export */   "changePageSize": () => (/* binding */ changePageSize),
/* harmony export */   "clearFilter": () => (/* binding */ clearFilter),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "fetchIsLoading": () => (/* binding */ fetchIsLoading),
/* harmony export */   "fetchPms": () => (/* binding */ fetchPms),
/* harmony export */   "fetchPmsError": () => (/* binding */ fetchPmsError),
/* harmony export */   "filterByName": () => (/* binding */ filterByName),
/* harmony export */   "filterByType": () => (/* binding */ filterByType),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const fetchPms = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("FETCH_PMS");
const fetchPmsError = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("FETCH_PMS_ERROR");
const fetchIsLoading = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("FETCH_PMS_IS_LOADING");
const filterByName = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("FILTER_BY_NAME");
const filterByType = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("FILTER_BY_TYPE");
const clearFilter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("CLEAR_FILTER");
const openModal = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("OPEN_MODAL");
const closeModal = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("CLOSE_MODAL");
const changePage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("CHANGE_PAGE");
const changePageSize = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("CHANGE_PAGE_SIZE");


/***/ }),

/***/ "./src/state/reducer.ts":
/*!******************************!*\
  !*** ./src/state/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pmListReducer": () => (/* binding */ pmListReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/state/actions.ts");



const initial = {
    pmsUI: [],
    search: { byName: "", byTypes: [] },
    pagination: {
        page: src_constants__WEBPACK_IMPORTED_MODULE_0__.FIRST_PAGE,
        perPage: src_constants__WEBPACK_IMPORTED_MODULE_0__.INITIAL_PAGE_SIZE,
        totalPages: Math.ceil(src_constants__WEBPACK_IMPORTED_MODULE_0__.TOTAL_ROWS / src_constants__WEBPACK_IMPORTED_MODULE_0__.INITIAL_PAGE_SIZE),
    },
    error: undefined,
    isLoading: false,
};
const pmListReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initial, (builder) => {
    builder
        .addCase(_actions__WEBPACK_IMPORTED_MODULE_1__.fetchPmsError, (state, action) => {
        const newState = {
            ...state,
            error: action.payload,
        };
        return newState;
    })
        .addCase(_actions__WEBPACK_IMPORTED_MODULE_1__.fetchIsLoading, (state, action) => {
        const newState = {
            ...state,
            isLoading: action.payload,
        };
        return newState;
    })
        .addCase(_actions__WEBPACK_IMPORTED_MODULE_1__.fetchPms, (state, action) => {
        const newState = {
            ...state,
            pmsUI: action.payload,
        };
        return newState;
    })
        .addCase(_actions__WEBPACK_IMPORTED_MODULE_1__.filterByName, (state, action) => {
        const newPagination = { ...state.pagination, page: 0 };
        const newState = {
            ...state,
            pagination: newPagination,
            search: { ...state.search, byName: action.payload },
        };
        return newState;
    })
        .addCase(_actions__WEBPACK_IMPORTED_MODULE_1__.filterByType, (state, action) => {
        const newPagination = { ...state.pagination, page: 0 };
        const newState = {
            ...state,
            pagination: newPagination,
            search: {
                ...state.search,
                byTypes: action.payload,
            },
        };
        return newState;
    })
        .addCase(_actions__WEBPACK_IMPORTED_MODULE_1__.changePage, (state, action) => {
        const paginationNew = {
            ...state.pagination,
            page: action.payload,
        };
        const newState = {
            ...state,
            pagination: paginationNew,
        };
        return newState;
    })
        .addCase(_actions__WEBPACK_IMPORTED_MODULE_1__.changePageSize, (state, action) => {
        const perPage = action.payload;
        const totalPages = Math.ceil(state.pmsUI.length / perPage);
        const paginationNew = {
            ...state.pagination,
            page: 0,
            perPage: perPage,
            totalPages: totalPages,
        };
        const newState = { ...state, pagination: paginationNew };
        return newState;
    });
});


/***/ }),

/***/ "./src/state/selectors.ts":
/*!********************************!*\
  !*** ./src/state/selectors.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectError": () => (/* binding */ selectError),
/* harmony export */   "selectFilteredPms": () => (/* binding */ selectFilteredPms),
/* harmony export */   "selectIsLoading": () => (/* binding */ selectIsLoading),
/* harmony export */   "selectPage": () => (/* binding */ selectPage),
/* harmony export */   "selectPerPage": () => (/* binding */ selectPerPage),
/* harmony export */   "selectPms": () => (/* binding */ selectPms),
/* harmony export */   "selectSlicedPms": () => (/* binding */ selectSlicedPms),
/* harmony export */   "selectTotalPages": () => (/* binding */ selectTotalPages)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/reselect/es/index.js");

const selectPms = (state) => state.pmListReducer.pmsUI;
const selectPage = (state) => state.pmListReducer.pagination.page;
const selectPerPage = (state) => state.pmListReducer.pagination.perPage;
const selectFilteredPms = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)((state) => state.pmListReducer, ({ pmsUI, search }) => {
    const { byName, byTypes } = search;
    const filteredPms = pmsUI.filter((pm) => {
        const isNameMatch = pm.name.toLowerCase().includes(byName.toLowerCase());
        const isTypeMatch = byTypes.length === 0 || pm.types.some((type) => byTypes.includes(type));
        return isNameMatch && isTypeMatch;
    });
    return filteredPms;
});
const selectSlicedPms = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)((state) => state.pmListReducer, selectFilteredPms, ({ pagination }, filteredPms) => {
    const { perPage, page } = pagination;
    const startIndex = perPage * page;
    const endIndex = startIndex + perPage;
    const slicedPms = filteredPms.slice(startIndex, endIndex);
    return slicedPms;
});
const selectTotalPages = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)((state) => state.pmListReducer, selectFilteredPms, ({ pagination }, filteredPms) => {
    const { perPage } = pagination;
    const slicedPms = Math.ceil(filteredPms.length / perPage);
    return slicedPms;
});
const selectIsLoading = (state) => state.pmListReducer.isLoading;
const selectError = (state) => state.pmListReducer.error;


/***/ }),

/***/ "./src/state/store.ts":
/*!****************************!*\
  !*** ./src/state/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/state/reducer.ts");
/* harmony import */ var _api_useGetPmApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/useGetPmApi */ "./src/api/useGetPmApi.ts");



const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
    reducer: {
        [_api_useGetPmApi__WEBPACK_IMPORTED_MODULE_1__.pmApi.reducerPath]: _api_useGetPmApi__WEBPACK_IMPORTED_MODULE_1__.pmApi.reducer,
        pmListReducer: _reducer__WEBPACK_IMPORTED_MODULE_0__.pmListReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(_api_useGetPmApi__WEBPACK_IMPORTED_MODULE_1__.pmApi.middleware),
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "extractMainInfo": () => (/* binding */ extractMainInfo),
/* harmony export */   "getTypeColor": () => (/* binding */ getTypeColor),
/* harmony export */   "sortTypes": () => (/* binding */ sortTypes)
/* harmony export */ });
const extractMainInfo = (pokemon) => {
    const { id, name, sprites, types, abilities, stats, species, forms } = pokemon;
    const pm = {
        id,
        name,
        types: types.map((item) => item.type.name),
        abilities: abilities.map((item) => item.ability.name),
        forms: forms.map((item) => item.name),
        species: species.name,
        img: sprites.front_default,
    };
    return pm;
};
const debounce = (f, time) => {
    let timeoutId = null;
    const functionCall = () => {
        timeoutId = null;
        f();
    };
    return function debouncedFunction(...arg) {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
        else {
            timeoutId = setTimeout(functionCall, time, ...arg);
        }
    };
};
const sortTypes = (a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
};
const getTypeColor = (typeName) => {
    switch (typeName) {
        case "bug":
            return "#A6B91A";
        case "dark":
            return "#808080";
        case "dragon":
            return "#6F35FC";
        case "electric":
            return "#F7D02C";
        case "fairy":
            return "#D685AD";
        case "fighting":
            return "#C22E28";
        case "fire":
            return "#EE8130";
        case "flying":
            return "#A98FF3";
        case "ghost":
            return "#735797";
        case "grass":
            return "#7AC74C";
        case "ground":
            return "#E2BF65";
        case "ice":
            return "#96D9D6";
        case "normal":
            return "#A8A77A";
        case "poison":
            return "#B763CF";
        case "psychic":
            return "#F95587";
        case "rock":
            return "#B6A136";
        case "shadow":
            return "#333333";
        case "steel":
            return "#B7B7CE";
        case "unknown":
            return "#68A090";
        case "water":
            return "#6390F0";
        default:
            return "#808080 ";
    }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkeclipse_assignment"] = self["webpackChunkeclipse_assignment"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_mui_icons-material_KeyboardArrowDown_js-node_modules_mui_icons-material_-28a83d"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9BcHAuY3NzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb21wb25lbnRzL0hlYWRlckZpbHRlcnMvSGVhZGVyRmlsdGVycy5jc3MiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvYXBpL3VzZUdldFBtQXBpLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb21wb25lbnRzL0hlYWRlckZpbHRlcnMvSGVhZGVyRmlsdGVycy50c3giLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2NvbXBvbmVudHMvVGFibGUvUm93LnRzeCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZUNvbnRlbnQudHN4Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaG9va3MvdXNlQXBwTG9naWMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2hvb2tzL3VzZUZpbHRlcnNMb2dpYy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaG9va3MvdXNlVGFibGVDb250YWluZXJMb2dpYy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaG9va3MvdXNlVGFibGVMb2dpYy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9taWRkbGV3YXJlL3RodW5rcy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvc3RhdGUvcmVkdWNlci50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvc3RhdGUvc2VsZWN0b3JzLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9zdGF0ZS9zdG9yZS50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY4NDI1ODU3NDEwMlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjg0MjU5Mjg0NDQ4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2ODQyNTY1NDMzNTlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCI7XG5pbXBvcnQgSGVhZGVyRmlsdGVycyBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlckZpbHRlcnMvSGVhZGVyRmlsdGVyc1wiO1xuaW1wb3J0IFRhYmxlV3JhcHBlciBmcm9tIFwiLi9jb21wb25lbnRzL1RhYmxlL1RhYmxlV3JhcHBlclwiO1xuaW1wb3J0IHVzZUFwcExvZ2ljIGZyb20gXCIuL2hvb2tzL3VzZUFwcExvZ2ljXCI7XG5pbXBvcnQgXCIuL0FwcC5jc3NcIjtcbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICBjb25zdCBsb2dpYyA9IHVzZUFwcExvZ2ljKCk7XG4gICAgcmV0dXJuIChfanN4KENvbnRhaW5lciwgeyBtYXhXaWR0aDogJ2xnJywgc3g6IHsgcGFkZGluZzogXCIzZW0gMFwiIH0sIGNoaWxkcmVuOiBfanN4cyhTdGFjaywgeyBkaXJlY3Rpb246ICdjb2x1bW4nLCBzcGFjaW5nOiAzLCBjaGlsZHJlbjogW19qc3goVHlwb2dyYXBoeSwgeyBjbGFzc05hbWU6ICdoZWFkZXInLCB2YXJpYW50OiAnaDInLCBjb21wb25lbnQ6ICdoMScsIGNoaWxkcmVuOiBcIlBva2Vtb25zXCIgfSksIF9qc3goSGVhZGVyRmlsdGVycywge30pLCBfanN4KFRhYmxlV3JhcHBlciwge30pXSB9KSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0XCI7XG5pbXBvcnQgeyBzb3J0VHlwZXMgfSBmcm9tIFwic3JjL3V0aWxzL3V0aWxzXCI7XG5leHBvcnQgY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjJcIjtcbmV4cG9ydCBjb25zdCBwbUFwaSA9IGNyZWF0ZUFwaSh7XG4gICAgcmVkdWNlclBhdGg6IFwicG1BcGlcIixcbiAgICB0YWdUeXBlczogW1wiVHlwZXNcIl0sXG4gICAgYmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7XG4gICAgICAgIGJhc2VVcmw6IGAke0JBU0VfVVJMfWAsXG4gICAgfSksXG4gICAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcbiAgICAgICAgZ2V0VHlwZXM6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6ICgpID0+IGAvdHlwZWAsXG4gICAgICAgICAgICBwcm92aWRlc1RhZ3M6IFtcIlR5cGVzXCJdLFxuICAgICAgICAgICAgdHJhbnNmb3JtUmVzcG9uc2U6IChyZXNwb25zZSkgPT4gcmVzcG9uc2UucmVzdWx0cy5zb3J0KHNvcnRUeXBlcyksXG4gICAgICAgIH0pLFxuICAgIH0pLFxufSk7XG5leHBvcnQgY29uc3QgeyB1c2VHZXRUeXBlc1F1ZXJ5IH0gPSBwbUFwaTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBDaGlwLCBUZXh0RmllbGQsIElucHV0TGFiZWwsIE1lbnVJdGVtLCBPdXRsaW5lZElucHV0LCBTZWxlY3QsIElucHV0QWRvcm5tZW50LCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBCb3gsIFN0YWNrIH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2hcIjtcbmltcG9ydCB1c2VGaWx0ZXJzTG9naWMgZnJvbSBcInNyYy9ob29rcy91c2VGaWx0ZXJzTG9naWNcIjtcbmltcG9ydCB7IGdldFR5cGVDb2xvciB9IGZyb20gXCJzcmMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCBcIi4vSGVhZGVyRmlsdGVycy5jc3NcIjtcbmNvbnN0IElURU1fSEVJR0hUID0gNDg7XG5jb25zdCBJVEVNX1BBRERJTkdfVE9QID0gODtcbmNvbnN0IE1lbnVQcm9wcyA9IHtcbiAgICBQYXBlclByb3BzOiB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhIZWlnaHQ6IElURU1fSEVJR0hUICogNC41ICsgSVRFTV9QQURESU5HX1RPUCxcbiAgICAgICAgICAgIHdpZHRoOiAyNTAsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5jb25zdCBIZWFkZXJGaWx0ZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaGFuZGxlQ2hhbmdlU2VsZWN0LCBoYW5kbGVDaGFuZ2VJbnB1dCwgYWxsVHlwZXMsIHNlbGVjdGVkVHlwZXMsIGlzVHlwZXNBcnJheSwgfSA9IHVzZUZpbHRlcnNMb2dpYygpO1xuICAgIHJldHVybiAoX2pzeChCb3gsIHsgY2hpbGRyZW46IF9qc3hzKFN0YWNrLCB7IGRpcmVjdGlvbjogJ2NvbHVtbicsIHNwYWNpbmc6IDIsIGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdmaWx0ZXIxJywgY2hpbGRyZW46IFtfanN4KElucHV0TGFiZWwsIHsgaWQ6ICdkZW1vLW11bHRpcGxlLWNoaXAtbGFiZWwnLCBjaGlsZHJlbjogXCJTZWFyY2ggYnkgbmFtZVwiIH0pLCBfanN4KFRleHRGaWVsZCwgeyBzeDogeyB3aWR0aDogXCIxMDAlXCIgfSwgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZUlucHV0LCB2YXJpYW50OiAnb3V0bGluZWQnLCBwbGFjZWhvbGRlcjogJ1Bpa2FjaHUnLCBJbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoX2pzeChJbnB1dEFkb3JubWVudCwgeyBwb3NpdGlvbjogJ3N0YXJ0JywgY2hpbGRyZW46IF9qc3goU2VhcmNoSWNvbiwge30pIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBpbnB1dFByb3BzOiB7IFwiYXJpYS1sYWJlbFwiOiBcInNlYXJjaCBieSBuYW1lXCIgfSB9KV0gfSksIF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnZmlsdGVyMicsIGNoaWxkcmVuOiBbX2pzeChJbnB1dExhYmVsLCB7IGlkOiAnZGVtby1tdWx0aXBsZS1jaGlwLWxhYmVsJywgY2hpbGRyZW46IFwiU2VsZWN0IGJ5IHR5cGVcIiB9KSwgX2pzeChTZWxlY3QsIHsgbGFiZWxJZDogJ2RlbW8tbXVsdGlwbGUtY2hpcC1sYWJlbCcsIGlkOiAnZGVtby1tdWx0aXBsZS1jaGlwJywgbXVsdGlwbGU6IHRydWUsIHZhbHVlOiBzZWxlY3RlZFR5cGVzLCBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlU2VsZWN0LCBpbnB1dDogX2pzeChPdXRsaW5lZElucHV0LCB7IGlkOiAnc2VsZWN0LW11bHRpcGxlLWNoaXAnLCBsYWJlbDogJ1NlbGVjdCBieSB0eXBlJyB9KSwgcmVuZGVyVmFsdWU6IChzZWxlY3RlZCkgPT4gKF9qc3goQm94LCB7IHN4OiB7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4V3JhcDogXCJ3cmFwXCIsIGdhcDogMC41IH0sIGNoaWxkcmVuOiBzZWxlY3RlZC5tYXAoKHZhbHVlKSA9PiAoX2pzeChDaGlwLCB7IGxhYmVsOiB2YWx1ZSwgc3g6IHsgYmFja2dyb3VuZENvbG9yOiBnZXRUeXBlQ29sb3IodmFsdWUpIH0gfSwgdmFsdWUpKSkgfSkpLCBNZW51UHJvcHM6IE1lbnVQcm9wcywgc3g6IHsgd2lkdGg6IFwiMTAwJVwiIH0sIGNoaWxkcmVuOiBpc1R5cGVzQXJyYXkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsVHlwZXM/Lm1hcCgoeyBuYW1lIH0pID0+IChfanN4KE1lbnVJdGVtLCB7IHZhbHVlOiBuYW1lLCBjaGlsZHJlbjogbmFtZSB9LCBuYW1lKSkpIH0pXSB9KV0gfSkgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhlYWRlckZpbHRlcnM7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBUYWJsZVJvdywgVGFibGVDZWxsLCBJY29uQnV0dG9uLCBDb2xsYXBzZSwgQm94LCBUeXBvZ3JhcGh5LCBUYWJsZSwgVGFibGVIZWFkLCBUYWJsZUJvZHksIEF2YXRhciwgQ2hpcCwgU3RhY2ssIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBLZXlib2FyZEFycm93RG93bkljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0Rvd25cIjtcbmltcG9ydCBLZXlib2FyZEFycm93VXBJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dVcFwiO1xuaW1wb3J0IHsgZ2V0VHlwZUNvbG9yIH0gZnJvbSBcInNyYy91dGlscy91dGlsc1wiO1xuZnVuY3Rpb24gUm93KHByb3BzKSB7XG4gICAgY29uc3QgeyByb3cgfSA9IHByb3BzO1xuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKFRhYmxlUm93LCB7IHN4OiB7IFwiJiA+ICpcIjogeyBib3JkZXJCb3R0b206IFwidW5zZXRcIiB9IH0sIGNoaWxkcmVuOiBbX2pzeChUYWJsZUNlbGwsIHsgY2hpbGRyZW46IF9qc3goSWNvbkJ1dHRvbiwgeyBcImFyaWEtbGFiZWxcIjogJ2V4cGFuZCByb3cnLCBzaXplOiAnc21hbGwnLCBvbkNsaWNrOiAoKSA9PiBzZXRPcGVuKCFvcGVuKSwgY2hpbGRyZW46IG9wZW4gPyBfanN4KEtleWJvYXJkQXJyb3dVcEljb24sIHt9KSA6IF9qc3goS2V5Ym9hcmRBcnJvd0Rvd25JY29uLCB7fSkgfSkgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IHJvdy5uYW1lIH0pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIHN4OiB7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9LCBjaGlsZHJlbjogX2pzeChBdmF0YXIsIHsgc3JjOiByb3cuaW1nLCBhbHQ6IGAke3Jvdy5uYW1lfSBwaG90b2AgfSkgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IF9qc3goU3RhY2ssIHsganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBkaXJlY3Rpb246ICdyb3cnLCBzcGFjaW5nOiAxLCBjaGlsZHJlbjogcm93LnR5cGVzLm1hcCgodHlwZSkgPT4gKF9qc3goQ2hpcCwgeyBzaXplOiAnc21hbGwnLCBzeDogeyBiYWNrZ3JvdW5kQ29sb3I6IGdldFR5cGVDb2xvcih0eXBlKSB9LCBsYWJlbDogdHlwZSB9LCB0eXBlKSkpIH0pIH0pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiByb3cuc3BlY2llcyB9KV0gfSksIF9qc3goVGFibGVSb3csIHsgY2hpbGRyZW46IF9qc3goVGFibGVDZWxsLCB7IHN4OiB7IHBhZGRpbmdCb3R0b206IDAsIHBhZGRpbmdUb3A6IDAgfSwgY29sU3BhbjogNiwgY2hpbGRyZW46IF9qc3goQ29sbGFwc2UsIHsgaW46IG9wZW4sIHRpbWVvdXQ6ICdhdXRvJywgdW5tb3VudE9uRXhpdDogdHJ1ZSwgY2hpbGRyZW46IF9qc3hzKEJveCwgeyBzeDogeyBtYXJnaW46IDEgfSwgY2hpbGRyZW46IFtfanN4KFR5cG9ncmFwaHksIHsgdmFyaWFudDogJ2g2JywgZ3V0dGVyQm90dG9tOiB0cnVlLCBjb21wb25lbnQ6ICdkaXYnLCBjaGlsZHJlbjogXCJEZXRhaWxzXCIgfSksIF9qc3hzKFRhYmxlLCB7IHNpemU6ICdzbWFsbCcsIFwiYXJpYS1sYWJlbFwiOiAncHVyY2hhc2VzJywgY2hpbGRyZW46IFtfanN4KFRhYmxlSGVhZCwgeyBjaGlsZHJlbjogX2pzeHMoVGFibGVSb3csIHsgY2hpbGRyZW46IFtfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiBcIkZvcm1zXCIgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IFwiQWJpbGl0aWVzXCIgfSldIH0pIH0pLCBfanN4KFRhYmxlQm9keSwgeyBjaGlsZHJlbjogX2pzeHMoVGFibGVSb3csIHsgY2hpbGRyZW46IFtfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiByb3cuZm9ybXMuam9pbihcIiwgXCIpIH0pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiByb3cuYWJpbGl0aWVzLm1hcCgoaXRlbSkgPT4gKF9qc3goQm94LCB7IHN4OiB7IG1hcmdpbjogMSB9LCBjaGlsZHJlbjogaXRlbSB9LCBpdGVtKSkpIH0pXSB9LCByb3cuaWQpIH0pXSB9KV0gfSkgfSkgfSkgfSldIH0pKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFJvdztcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBQYXBlciwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUNvbnRhaW5lciwgVGFibGVIZWFkLCBUYWJsZVBhZ2luYXRpb24sIFRhYmxlUm93LCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdXNlVGFibGVMb2dpYyBmcm9tIFwic3JjL2hvb2tzL3VzZVRhYmxlTG9naWNcIjtcbmltcG9ydCBSb3cgZnJvbSBcIi4vUm93XCI7XG5jb25zdCBUYWJsZUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBoYW5kbGVQYWdlQ2hhbmdlLCBoYW5kbGVQYWdlU2l6ZUNoYW5nZSwgcG1zT25QYWdlLCBwYWdlLCBwZXJQYWdlLCB0b3RhbENvdW50LCBwYWRkaW5nVmFsdWUsIH0gPSB1c2VUYWJsZUxvZ2ljKCk7XG4gICAgcmV0dXJuIChfanN4cyhUYWJsZUNvbnRhaW5lciwgeyBjb21wb25lbnQ6IFBhcGVyLCBjaGlsZHJlbjogW19qc3hzKFRhYmxlLCB7IHBhZGRpbmc6IHBhZGRpbmdWYWx1ZSwgXCJhcmlhLWxhYmVsXCI6ICdjb2xsYXBzaWJsZSB0YWJsZScsIGNoaWxkcmVuOiBbX2pzeChUYWJsZUhlYWQsIHsgY2hpbGRyZW46IF9qc3hzKFRhYmxlUm93LCB7IGNoaWxkcmVuOiBbX2pzeChUYWJsZUNlbGwsIHt9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogXCJOYW1lXCIgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IFwiQXZhdGFyXCIgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IFwiVHlwZVwiIH0pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiBcIlNwZWNpZXNcIiB9KV0gfSkgfSksIF9qc3goVGFibGVCb2R5LCB7IGNoaWxkcmVuOiBwbXNPblBhZ2UubWFwKChyb3cpID0+IChfanN4KFJvdywgeyByb3c6IHJvdyB9LCByb3cuaWQpKSkgfSldIH0pLCBfanN4KFRhYmxlUGFnaW5hdGlvbiwgeyBjb21wb25lbnQ6ICdkaXYnLCBjb3VudDogdG90YWxDb3VudCwgcGFnZTogcGFnZSwgb25QYWdlQ2hhbmdlOiBoYW5kbGVQYWdlQ2hhbmdlLCByb3dzUGVyUGFnZTogcGVyUGFnZSwgb25Sb3dzUGVyUGFnZUNoYW5nZTogaGFuZGxlUGFnZVNpemVDaGFuZ2UgfSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBUYWJsZUNvbnRlbnQ7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBBbGVydCwgU2tlbGV0b24sIFN0YWNrIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB1c2VUYWJsZUNvbnRhaW5lckxvZ2ljIGZyb20gXCJzcmMvaG9va3MvdXNlVGFibGVDb250YWluZXJMb2dpY1wiO1xuaW1wb3J0IFRhYmxlQ29udGVudCBmcm9tIFwiLi9UYWJsZUNvbnRlbnRcIjtcbmNvbnN0IFRhYmxlV3JhcHBlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlzTG9hZGluZywgZXJyb3IgfSA9IHVzZVRhYmxlQ29udGFpbmVyTG9naWMoKTtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgfSwgY2hpbGRyZW46IGlzTG9hZGluZyAmJiAhZXJyb3IgPyAoX2pzeHMoU3RhY2ssIHsgZGlyZWN0aW9uOiAnY29sdW1uJywgd2lkdGg6ICcxMDAlJywgc3BhY2luZzogMiwgY2hpbGRyZW46IFtfanN4KFNrZWxldG9uLCB7IGFuaW1hdGlvbjogJ3dhdmUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc1ZW0nIH0pLCBfanN4KFNrZWxldG9uLCB7IGFuaW1hdGlvbjogJ3dhdmUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc1ZW0nIH0pLCBfanN4KFNrZWxldG9uLCB7IGFuaW1hdGlvbjogJ3dhdmUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc1ZW0nIH0pXSB9KSkgOiAoX2pzeChUYWJsZUNvbnRlbnQsIHt9KSkgfSksIGVycm9yICYmIF9qc3goQWxlcnQsIHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNoaWxkcmVuOiBlcnJvciB9KV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFRhYmxlV3JhcHBlcjtcbiIsImV4cG9ydCBjb25zdCBJTklUSUFMX1BBR0VfU0laRSA9IDI1O1xuZXhwb3J0IGNvbnN0IFRPVEFMX1JPV1MgPSAxMDA7XG5leHBvcnQgY29uc3QgRklSU1RfUEFHRSA9IDA7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBmZXRjaFBtc1RodW5rIH0gZnJvbSBcInNyYy9taWRkbGV3YXJlL3RodW5rc1wiO1xuaW1wb3J0IHsgVE9UQUxfUk9XUyB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XG5jb25zdCB1c2VBcHBMb2dpYyA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgZmV0Y2hJbml0aWFsID0gZmV0Y2hQbXNUaHVuayhkaXNwYXRjaCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hJbml0aWFsKFRPVEFMX1JPV1MpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4ge307XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlQXBwTG9naWM7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZUdldFR5cGVzUXVlcnkgfSBmcm9tIFwic3JjL2FwaS91c2VHZXRQbUFwaVwiO1xuaW1wb3J0IHsgZmlsdGVyQnlOYW1lLCBmaWx0ZXJCeVR5cGUgfSBmcm9tIFwic3JjL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcInNyYy91dGlscy91dGlsc1wiO1xuY29uc3QgdXNlRmlsdGVyc0xvZ2ljID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YTogYWxsVHlwZXMgfSA9IHVzZUdldFR5cGVzUXVlcnkoKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRUeXBlcywgc2V0U2VsZWN0ZWRUeXBlc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVNlbGVjdCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IHRhcmdldDogeyB2YWx1ZSB9LCB9ID0gZXZlbnQ7XG4gICAgICAgIGNvbnN0IHZhbCA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlLnNwbGl0KFwiLFwiKSA6IHZhbHVlO1xuICAgICAgICBzZXRTZWxlY3RlZFR5cGVzKHZhbCk7XG4gICAgICAgIGRpc3BhdGNoKGZpbHRlckJ5VHlwZSh2YWwpKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUlucHV0ID0gKGUpID0+IHtcbiAgICAgICAgZGVib3VuY2UoKCkgPT4gZGlzcGF0Y2goZmlsdGVyQnlOYW1lKGUudGFyZ2V0LnZhbHVlKSksIDUwMCkoKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGhhbmRsZUNoYW5nZVNlbGVjdCxcbiAgICAgICAgaGFuZGxlQ2hhbmdlSW5wdXQsXG4gICAgICAgIGFsbFR5cGVzLFxuICAgICAgICBzZWxlY3RlZFR5cGVzLFxuICAgICAgICBpc1R5cGVzQXJyYXk6IGFsbFR5cGVzICYmIEFycmF5LmlzQXJyYXkoYWxsVHlwZXMpLFxuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlRmlsdGVyc0xvZ2ljO1xuIiwiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNlbGVjdEVycm9yLCBzZWxlY3RJc0xvYWRpbmcgfSBmcm9tIFwic3JjL3N0YXRlL3NlbGVjdG9yc1wiO1xuY29uc3QgdXNlTGlzdExvZ2ljID0gKCkgPT4ge1xuICAgIGNvbnN0IGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdElzTG9hZGluZyk7XG4gICAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RFcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgICBlcnJvcixcbiAgICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUxpc3RMb2dpYztcbiIsImltcG9ydCB7IHVzZU1lZGlhUXVlcnksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgY2hhbmdlUGFnZSwgY2hhbmdlUGFnZVNpemUgfSBmcm9tIFwic3JjL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IHNlbGVjdFBhZ2UsIHNlbGVjdFBlclBhZ2UsIHNlbGVjdFNsaWNlZFBtcywgc2VsZWN0VG90YWxQYWdlcywgfSBmcm9tIFwic3JjL3N0YXRlL3NlbGVjdG9yc1wiO1xuY29uc3QgdXNlVGFibGVMb2dpYyA9ICgpID0+IHtcbiAgICBjb25zdCBwbXNPblBhZ2UgPSB1c2VTZWxlY3RvcihzZWxlY3RTbGljZWRQbXMpO1xuICAgIGNvbnN0IHBhZ2UgPSB1c2VTZWxlY3RvcihzZWxlY3RQYWdlKTtcbiAgICBjb25zdCBwZXJQYWdlID0gdXNlU2VsZWN0b3Ioc2VsZWN0UGVyUGFnZSk7XG4gICAgY29uc3QgdG90YWxQYWdlcyA9IHVzZVNlbGVjdG9yKHNlbGVjdFRvdGFsUGFnZXMpO1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpKTtcbiAgICBjb25zdCBwYWRkaW5nVmFsdWUgPSBpc01vYmlsZSA/IFwibm9uZVwiIDogXCJub3JtYWxcIjtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChlLCBuZXdQYWdlKSA9PiBkaXNwYXRjaChjaGFuZ2VQYWdlKG5ld1BhZ2UpKTtcbiAgICBjb25zdCBoYW5kbGVQYWdlU2l6ZUNoYW5nZSA9IChlKSA9PiBkaXNwYXRjaChjaGFuZ2VQYWdlU2l6ZSgrZS50YXJnZXQudmFsdWUpKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBoYW5kbGVQYWdlQ2hhbmdlLFxuICAgICAgICBoYW5kbGVQYWdlU2l6ZUNoYW5nZSxcbiAgICAgICAgcG1zT25QYWdlLFxuICAgICAgICBwYWdlLFxuICAgICAgICBwZXJQYWdlLFxuICAgICAgICB0b3RhbENvdW50OiB0b3RhbFBhZ2VzICogcGVyUGFnZSxcbiAgICAgICAgcGFkZGluZ1ZhbHVlLFxuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlVGFibGVMb2dpYztcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdGF0ZS9zdG9yZVwiO1xuaW1wb3J0IFwiQGZvbnRzb3VyY2Uvcm9ib3RvLzQwMC5jc3NcIjtcbmltcG9ydCBcIkBmb250c291cmNlL3JvYm90by81MDAuY3NzXCI7XG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSkucmVuZGVyKF9qc3goUmVhY3QuU3RyaWN0TW9kZSwgeyBjaGlsZHJlbjogX2pzeChQcm92aWRlciwgeyBzdG9yZTogc3RvcmUsIGNoaWxkcmVuOiBfanN4KEFwcCwge30pIH0pIH0pKTtcbiIsImltcG9ydCB7IEZJUlNUX1BBR0UgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmV0Y2hQbXMsIGZldGNoUG1zRXJyb3IsIGZldGNoSXNMb2FkaW5nIH0gZnJvbSBcInNyYy9zdGF0ZS9hY3Rpb25zXCI7XG5pbXBvcnQgeyBleHRyYWN0TWFpbkluZm8gfSBmcm9tIFwic3JjL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gXCIuLi9hcGkvdXNlR2V0UG1BcGlcIjtcbmV4cG9ydCBjb25zdCBmZXRjaFBtc1RodW5rID0gKGRpc3BhdGNoKSA9PiBhc3luYyAodG90YWxSb3dzKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hJc0xvYWRpbmcodHJ1ZSkpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RzID0gW107XG4gICAgICAgIGZvciAobGV0IGlkID0gRklSU1RfUEFHRSArIDE7IGlkIDw9IHRvdGFsUm93czsgaWQrKykge1xuICAgICAgICAgICAgcmVxdWVzdHMucHVzaChmZXRjaChgJHtCQVNFX1VSTH0vcG9rZW1vbi8ke2lkfWApXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggUG9rZW1vbiBkYXRhXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZXh0cmFjdE1haW5JbmZvKGRhdGEpKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKHJlcXVlc3RzKTtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQbXMoZGF0YSkpO1xuICAgICAgICBkaXNwYXRjaChmZXRjaElzTG9hZGluZyhmYWxzZSkpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaFBtc0Vycm9yKGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmV4cG9ydCBjb25zdCBmZXRjaFBtcyA9IGNyZWF0ZUFjdGlvbihcIkZFVENIX1BNU1wiKTtcbmV4cG9ydCBjb25zdCBmZXRjaFBtc0Vycm9yID0gY3JlYXRlQWN0aW9uKFwiRkVUQ0hfUE1TX0VSUk9SXCIpO1xuZXhwb3J0IGNvbnN0IGZldGNoSXNMb2FkaW5nID0gY3JlYXRlQWN0aW9uKFwiRkVUQ0hfUE1TX0lTX0xPQURJTkdcIik7XG5leHBvcnQgY29uc3QgZmlsdGVyQnlOYW1lID0gY3JlYXRlQWN0aW9uKFwiRklMVEVSX0JZX05BTUVcIik7XG5leHBvcnQgY29uc3QgZmlsdGVyQnlUeXBlID0gY3JlYXRlQWN0aW9uKFwiRklMVEVSX0JZX1RZUEVcIik7XG5leHBvcnQgY29uc3QgY2xlYXJGaWx0ZXIgPSBjcmVhdGVBY3Rpb24oXCJDTEVBUl9GSUxURVJcIik7XG5leHBvcnQgY29uc3Qgb3Blbk1vZGFsID0gY3JlYXRlQWN0aW9uKFwiT1BFTl9NT0RBTFwiKTtcbmV4cG9ydCBjb25zdCBjbG9zZU1vZGFsID0gY3JlYXRlQWN0aW9uKFwiQ0xPU0VfTU9EQUxcIik7XG5leHBvcnQgY29uc3QgY2hhbmdlUGFnZSA9IGNyZWF0ZUFjdGlvbihcIkNIQU5HRV9QQUdFXCIpO1xuZXhwb3J0IGNvbnN0IGNoYW5nZVBhZ2VTaXplID0gY3JlYXRlQWN0aW9uKFwiQ0hBTkdFX1BBR0VfU0laRVwiKTtcbiIsImltcG9ydCB7IGNyZWF0ZVJlZHVjZXIgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgRklSU1RfUEFHRSwgSU5JVElBTF9QQUdFX1NJWkUsIFRPVEFMX1JPV1MgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2hhbmdlUGFnZSwgY2hhbmdlUGFnZVNpemUsIGZldGNoSXNMb2FkaW5nLCBmZXRjaFBtcywgZmV0Y2hQbXNFcnJvciwgZmlsdGVyQnlOYW1lLCBmaWx0ZXJCeVR5cGUsIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuY29uc3QgaW5pdGlhbCA9IHtcbiAgICBwbXNVSTogW10sXG4gICAgc2VhcmNoOiB7IGJ5TmFtZTogXCJcIiwgYnlUeXBlczogW10gfSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIHBhZ2U6IEZJUlNUX1BBR0UsXG4gICAgICAgIHBlclBhZ2U6IElOSVRJQUxfUEFHRV9TSVpFLFxuICAgICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwoVE9UQUxfUk9XUyAvIElOSVRJQUxfUEFHRV9TSVpFKSxcbiAgICB9LFxuICAgIGVycm9yOiB1bmRlZmluZWQsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbn07XG5leHBvcnQgY29uc3QgcG1MaXN0UmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbCwgKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyXG4gICAgICAgIC5hZGRDYXNlKGZldGNoUG1zRXJyb3IsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9KVxuICAgICAgICAuYWRkQ2FzZShmZXRjaElzTG9hZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9KVxuICAgICAgICAuYWRkQ2FzZShmZXRjaFBtcywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHBtc1VJOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGZpbHRlckJ5TmFtZSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV3UGFnaW5hdGlvbiA9IHsgLi4uc3RhdGUucGFnaW5hdGlvbiwgcGFnZTogMCB9O1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjogbmV3UGFnaW5hdGlvbixcbiAgICAgICAgICAgIHNlYXJjaDogeyAuLi5zdGF0ZS5zZWFyY2gsIGJ5TmFtZTogYWN0aW9uLnBheWxvYWQgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGZpbHRlckJ5VHlwZSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV3UGFnaW5hdGlvbiA9IHsgLi4uc3RhdGUucGFnaW5hdGlvbiwgcGFnZTogMCB9O1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjogbmV3UGFnaW5hdGlvbixcbiAgICAgICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLnNlYXJjaCxcbiAgICAgICAgICAgICAgICBieVR5cGVzOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9KVxuICAgICAgICAuYWRkQ2FzZShjaGFuZ2VQYWdlLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBwYWdpbmF0aW9uTmV3ID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUucGFnaW5hdGlvbixcbiAgICAgICAgICAgIHBhZ2U6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjogcGFnaW5hdGlvbk5ldyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGNoYW5nZVBhZ2VTaXplLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBwZXJQYWdlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoc3RhdGUucG1zVUkubGVuZ3RoIC8gcGVyUGFnZSk7XG4gICAgICAgIGNvbnN0IHBhZ2luYXRpb25OZXcgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5wYWdpbmF0aW9uLFxuICAgICAgICAgICAgcGFnZTogMCxcbiAgICAgICAgICAgIHBlclBhZ2U6IHBlclBhZ2UsXG4gICAgICAgICAgICB0b3RhbFBhZ2VzOiB0b3RhbFBhZ2VzLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUsIHBhZ2luYXRpb246IHBhZ2luYXRpb25OZXcgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5leHBvcnQgY29uc3Qgc2VsZWN0UG1zID0gKHN0YXRlKSA9PiBzdGF0ZS5wbUxpc3RSZWR1Y2VyLnBtc1VJO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFBhZ2UgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIucGFnaW5hdGlvbi5wYWdlO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFBlclBhZ2UgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIucGFnaW5hdGlvbi5wZXJQYWdlO1xuZXhwb3J0IGNvbnN0IHNlbGVjdEZpbHRlcmVkUG1zID0gY3JlYXRlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wbUxpc3RSZWR1Y2VyLCAoeyBwbXNVSSwgc2VhcmNoIH0pID0+IHtcbiAgICBjb25zdCB7IGJ5TmFtZSwgYnlUeXBlcyB9ID0gc2VhcmNoO1xuICAgIGNvbnN0IGZpbHRlcmVkUG1zID0gcG1zVUkuZmlsdGVyKChwbSkgPT4ge1xuICAgICAgICBjb25zdCBpc05hbWVNYXRjaCA9IHBtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhieU5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIGNvbnN0IGlzVHlwZU1hdGNoID0gYnlUeXBlcy5sZW5ndGggPT09IDAgfHwgcG0udHlwZXMuc29tZSgodHlwZSkgPT4gYnlUeXBlcy5pbmNsdWRlcyh0eXBlKSk7XG4gICAgICAgIHJldHVybiBpc05hbWVNYXRjaCAmJiBpc1R5cGVNYXRjaDtcbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRQbXM7XG59KTtcbmV4cG9ydCBjb25zdCBzZWxlY3RTbGljZWRQbXMgPSBjcmVhdGVTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIsIHNlbGVjdEZpbHRlcmVkUG1zLCAoeyBwYWdpbmF0aW9uIH0sIGZpbHRlcmVkUG1zKSA9PiB7XG4gICAgY29uc3QgeyBwZXJQYWdlLCBwYWdlIH0gPSBwYWdpbmF0aW9uO1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBwZXJQYWdlICogcGFnZTtcbiAgICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyBwZXJQYWdlO1xuICAgIGNvbnN0IHNsaWNlZFBtcyA9IGZpbHRlcmVkUG1zLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcbiAgICByZXR1cm4gc2xpY2VkUG1zO1xufSk7XG5leHBvcnQgY29uc3Qgc2VsZWN0VG90YWxQYWdlcyA9IGNyZWF0ZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlciwgc2VsZWN0RmlsdGVyZWRQbXMsICh7IHBhZ2luYXRpb24gfSwgZmlsdGVyZWRQbXMpID0+IHtcbiAgICBjb25zdCB7IHBlclBhZ2UgfSA9IHBhZ2luYXRpb247XG4gICAgY29uc3Qgc2xpY2VkUG1zID0gTWF0aC5jZWlsKGZpbHRlcmVkUG1zLmxlbmd0aCAvIHBlclBhZ2UpO1xuICAgIHJldHVybiBzbGljZWRQbXM7XG59KTtcbmV4cG9ydCBjb25zdCBzZWxlY3RJc0xvYWRpbmcgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIuaXNMb2FkaW5nO1xuZXhwb3J0IGNvbnN0IHNlbGVjdEVycm9yID0gKHN0YXRlKSA9PiBzdGF0ZS5wbUxpc3RSZWR1Y2VyLmVycm9yO1xuIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgcG1MaXN0UmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJcIjtcbmltcG9ydCB7IHBtQXBpIH0gZnJvbSBcIi4uL2FwaS91c2VHZXRQbUFwaVwiO1xuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjoge1xuICAgICAgICBbcG1BcGkucmVkdWNlclBhdGhdOiBwbUFwaS5yZWR1Y2VyLFxuICAgICAgICBwbUxpc3RSZWR1Y2VyOiBwbUxpc3RSZWR1Y2VyLFxuICAgIH0sXG4gICAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PiBnZXREZWZhdWx0TWlkZGxld2FyZSgpLmNvbmNhdChwbUFwaS5taWRkbGV3YXJlKSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCJleHBvcnQgY29uc3QgZXh0cmFjdE1haW5JbmZvID0gKHBva2Vtb24pID0+IHtcbiAgICBjb25zdCB7IGlkLCBuYW1lLCBzcHJpdGVzLCB0eXBlcywgYWJpbGl0aWVzLCBzdGF0cywgc3BlY2llcywgZm9ybXMgfSA9IHBva2Vtb247XG4gICAgY29uc3QgcG0gPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBuYW1lLFxuICAgICAgICB0eXBlczogdHlwZXMubWFwKChpdGVtKSA9PiBpdGVtLnR5cGUubmFtZSksXG4gICAgICAgIGFiaWxpdGllczogYWJpbGl0aWVzLm1hcCgoaXRlbSkgPT4gaXRlbS5hYmlsaXR5Lm5hbWUpLFxuICAgICAgICBmb3JtczogZm9ybXMubWFwKChpdGVtKSA9PiBpdGVtLm5hbWUpLFxuICAgICAgICBzcGVjaWVzOiBzcGVjaWVzLm5hbWUsXG4gICAgICAgIGltZzogc3ByaXRlcy5mcm9udF9kZWZhdWx0LFxuICAgIH07XG4gICAgcmV0dXJuIHBtO1xufTtcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmLCB0aW1lKSA9PiB7XG4gICAgbGV0IHRpbWVvdXRJZCA9IG51bGw7XG4gICAgY29uc3QgZnVuY3Rpb25DYWxsID0gKCkgPT4ge1xuICAgICAgICB0aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICBmKCk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gZGVib3VuY2VkRnVuY3Rpb24oLi4uYXJnKSB7XG4gICAgICAgIGlmICh0aW1lb3V0SWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbkNhbGwsIHRpbWUsIC4uLmFyZyk7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBzb3J0VHlwZXMgPSAoYSwgYikgPT4ge1xuICAgIGlmIChhLm5hbWUgPCBiLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAoYS5uYW1lID4gYi5uYW1lKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5leHBvcnQgY29uc3QgZ2V0VHlwZUNvbG9yID0gKHR5cGVOYW1lKSA9PiB7XG4gICAgc3dpdGNoICh0eXBlTmFtZSkge1xuICAgICAgICBjYXNlIFwiYnVnXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjQTZCOTFBXCI7XG4gICAgICAgIGNhc2UgXCJkYXJrXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjODA4MDgwXCI7XG4gICAgICAgIGNhc2UgXCJkcmFnb25cIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM2RjM1RkNcIjtcbiAgICAgICAgY2FzZSBcImVsZWN0cmljXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjRjdEMDJDXCI7XG4gICAgICAgIGNhc2UgXCJmYWlyeVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiI0Q2ODVBRFwiO1xuICAgICAgICBjYXNlIFwiZmlnaHRpbmdcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiNDMjJFMjhcIjtcbiAgICAgICAgY2FzZSBcImZpcmVcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiNFRTgxMzBcIjtcbiAgICAgICAgY2FzZSBcImZseWluZ1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiI0E5OEZGM1wiO1xuICAgICAgICBjYXNlIFwiZ2hvc3RcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM3MzU3OTdcIjtcbiAgICAgICAgY2FzZSBcImdyYXNzXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjN0FDNzRDXCI7XG4gICAgICAgIGNhc2UgXCJncm91bmRcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiNFMkJGNjVcIjtcbiAgICAgICAgY2FzZSBcImljZVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzk2RDlENlwiO1xuICAgICAgICBjYXNlIFwibm9ybWFsXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjQThBNzdBXCI7XG4gICAgICAgIGNhc2UgXCJwb2lzb25cIjpcbiAgICAgICAgICAgIHJldHVybiBcIiNCNzYzQ0ZcIjtcbiAgICAgICAgY2FzZSBcInBzeWNoaWNcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiNGOTU1ODdcIjtcbiAgICAgICAgY2FzZSBcInJvY2tcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiNCNkExMzZcIjtcbiAgICAgICAgY2FzZSBcInNoYWRvd1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzMzMzMzM1wiO1xuICAgICAgICBjYXNlIFwic3RlZWxcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiNCN0I3Q0VcIjtcbiAgICAgICAgY2FzZSBcInVua25vd25cIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM2OEEwOTBcIjtcbiAgICAgICAgY2FzZSBcIndhdGVyXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjNjM5MEYwXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCIjODA4MDgwIFwiO1xuICAgIH1cbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZWNsaXBzZV9hc3NpZ25tZW50XCJdID0gc2VsZltcIndlYnBhY2tDaHVua2VjbGlwc2VfYXNzaWdubWVudFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfbXVpX2ljb25zLW1hdGVyaWFsX0tleWJvYXJkQXJyb3dEb3duX2pzLW5vZGVfbW9kdWxlc19tdWlfaWNvbnMtbWF0ZXJpYWxfLTI4YTgzZFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c3hcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==