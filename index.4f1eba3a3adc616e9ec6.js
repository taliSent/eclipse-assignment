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
      // 1684323182349
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
      // 1684323182351
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
      // 1684323182344
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__["default"], { maxWidth: 'md', sx: { padding: 3 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { direction: 'column', spacing: 3, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { className: 'header', variant: 'h2', component: 'h1', children: "Pokemons" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_HeaderFilters_HeaderFilters__WEBPACK_IMPORTED_MODULE_1__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Table_TableWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {})] }) }));
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_4__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_5__["default"], { direction: 'column', spacing: 2, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__["default"], { className: 'filter1', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { id: 'demo-multiple-chip-label', children: "Search by name" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { onChange: handleChangeInput, variant: 'outlined', placeholder: 'Pikachu', InputProps: {
                                startAdornment: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { position: 'start', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_9__["default"], {}) })),
                            }, inputProps: { "aria-label": "search by name" } })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__["default"], { className: 'filter2', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { id: 'demo-multiple-chip-label', children: "Select by type" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { labelId: 'demo-multiple-chip-label', id: 'demo-multiple-chip', multiple: true, value: selectedTypes, onChange: handleChangeSelect, input: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { id: 'select-multiple-chip', label: 'Select by type' }), renderValue: (selected) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_4__["default"], { sx: { display: "flex", flexWrap: "wrap", gap: 0.5 }, children: selected.map((value) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { label: value, sx: {
                                        backgroundColor: (0,src_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getTypeColor)(value),
                                        color: "white",
                                    } }, value))) })), MenuProps: MenuProps, sx: { width: "100%" }, children: isTypesArray &&
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Collapse/Collapse.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowUp */ "./node_modules/@mui/icons-material/KeyboardArrowUp.js");
/* harmony import */ var src_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/useMediaQuery/useMediaQuery.js");







function Row(props) {
    const { row } = props;
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"])(theme.breakpoints.down("sm"));
    const avatarSize = isMobile ? 50 : 110;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { sx: { "& > *": { borderBottom: "unset" } }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { "aria-label": 'expand row', size: 'small', onClick: () => setOpen(!open), children: open ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_8__["default"], {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_9__["default"], {}) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { align: 'center', children: row.name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { align: 'center', size: 'medium', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { sx: {
                                width: avatarSize,
                                height: avatarSize,
                            }, src: row.img, alt: `${row.name} photo` }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { align: 'center', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { justifyContent: 'center', direction: 'row', spacing: isMobile ? 0 : 1, children: row.types.map((type) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { size: 'small', sx: { backgroundColor: (0,src_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getTypeColor)(type), color: "white" }, label: type }, type))) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { align: 'center', children: row.abilities.map((item) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { sx: { paddingY: 1 }, children: item }, item))) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { sx: { paddingBottom: 0, paddingTop: 0 }, colSpan: 6, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], { in: open, timeout: 'auto', unmountOnExit: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { sx: { margin: 1 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], { size: 'small', "aria-label": 'purchases', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { align: 'center', children: "Height" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { align: 'center', children: "Weight" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { align: 'center', children: row.height }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { align: 'center', children: row.weight })] }, row.id) })] }) }) }) }) })] }));
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




const styles = {
    ".MuiToolbar-root": {
        paddingLeft: "4px",
    },
    "&.MuiTablePagination-root": {
        overflowX: "hidden",
    },
};
const TableContent = () => {
    const { handlePageChange, handlePageSizeChange, pmsOnPage, page, perPage, totalCount, paddingValue, } = (0,src_hooks_useTableLogic__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { component: _mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { padding: paddingValue, "aria-label": 'collapsible table', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { align: 'center', children: "Name" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { align: 'center', children: "Avatar" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { align: 'center', children: "Type" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { align: 'center', children: "Abilities" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], { children: pmsOnPage.map((row) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_2__["default"], { row: row }, row.id))) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { component: 'div', count: totalCount, page: page, onPageChange: handlePageChange, rowsPerPage: perPage, onRowsPerPageChange: handlePageSizeChange, size: 'small', sx: styles })] }));
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
/* harmony import */ var _fontsource_roboto_latin_400_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fontsource/roboto/latin-400.css */ "./node_modules/@fontsource/roboto/latin-400.css");
/* harmony import */ var _fontsource_roboto_latin_500_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fontsource/roboto/latin-500.css */ "./node_modules/@fontsource/roboto/latin-500.css");









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
    const { id, name, sprites, types, abilities, height, weight, } = pokemon;
    const pm = {
        id,
        name,
        types: types.map((item) => item.type.name),
        abilities: abilities.map((item) => item.ability.name),
        height,
        weight,
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
            return "#947c15";
        case "dark":
            return "#808080";
        case "dragon":
            return "#6F35FC";
        case "electric":
            return "#b99f1a";
        case "fairy":
            return "#c91c72";
        case "fighting":
            return "#C22E28";
        case "fire":
            return "#cc5700";
        case "flying":
            return "#8e79c9";
        case "ghost":
            return "#735797";
        case "grass":
            return "#4f8032";
        case "ground":
            return "#615852";
        case "ice":
            return "#72979e";
        case "normal":
            return "#808080";
        case "poison":
            return "#8151b8";
        case "psychic":
            return "#F95587";
        case "rock":
            return "#B6A136";
        case "shadow":
            return "#333333";
        case "steel":
            return "#7c7c8a";
        case "unknown":
            return "#68A090";
        case "water":
            return "#254894";
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_mui_icons-material_KeyboardArrowDown_js-node_modules_mui_icons-material_-80bde0"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9BcHAuY3NzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb21wb25lbnRzL0hlYWRlckZpbHRlcnMvSGVhZGVyRmlsdGVycy5jc3MiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvYXBpL3VzZUdldFBtQXBpLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb21wb25lbnRzL0hlYWRlckZpbHRlcnMvSGVhZGVyRmlsdGVycy50c3giLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2NvbXBvbmVudHMvVGFibGUvUm93LnRzeCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZUNvbnRlbnQudHN4Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaG9va3MvdXNlQXBwTG9naWMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2hvb2tzL3VzZUZpbHRlcnNMb2dpYy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaG9va3MvdXNlVGFibGVDb250YWluZXJMb2dpYy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaG9va3MvdXNlVGFibGVMb2dpYy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9taWRkbGV3YXJlL3RodW5rcy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvc3RhdGUvcmVkdWNlci50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvc3RhdGUvc2VsZWN0b3JzLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9zdGF0ZS9zdG9yZS50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY4NDMyMzE4MjM0OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjg0MzIzMTgyMzUxXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2ODQzMjMxODIzNDRcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCI7XG5pbXBvcnQgSGVhZGVyRmlsdGVycyBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlckZpbHRlcnMvSGVhZGVyRmlsdGVyc1wiO1xuaW1wb3J0IFRhYmxlV3JhcHBlciBmcm9tIFwiLi9jb21wb25lbnRzL1RhYmxlL1RhYmxlV3JhcHBlclwiO1xuaW1wb3J0IHVzZUFwcExvZ2ljIGZyb20gXCIuL2hvb2tzL3VzZUFwcExvZ2ljXCI7XG5pbXBvcnQgXCIuL0FwcC5jc3NcIjtcbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICBjb25zdCBsb2dpYyA9IHVzZUFwcExvZ2ljKCk7XG4gICAgcmV0dXJuIChfanN4KENvbnRhaW5lciwgeyBtYXhXaWR0aDogJ21kJywgc3g6IHsgcGFkZGluZzogMyB9LCBjaGlsZHJlbjogX2pzeHMoU3RhY2ssIHsgZGlyZWN0aW9uOiAnY29sdW1uJywgc3BhY2luZzogMywgY2hpbGRyZW46IFtfanN4KFR5cG9ncmFwaHksIHsgY2xhc3NOYW1lOiAnaGVhZGVyJywgdmFyaWFudDogJ2gyJywgY29tcG9uZW50OiAnaDEnLCBjaGlsZHJlbjogXCJQb2tlbW9uc1wiIH0pLCBfanN4KEhlYWRlckZpbHRlcnMsIHt9KSwgX2pzeChUYWJsZVdyYXBwZXIsIHt9KV0gfSkgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCB7IGNyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnkgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdFwiO1xuaW1wb3J0IHsgc29ydFR5cGVzIH0gZnJvbSBcInNyYy91dGlscy91dGlsc1wiO1xuZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyXCI7XG5leHBvcnQgY29uc3QgcG1BcGkgPSBjcmVhdGVBcGkoe1xuICAgIHJlZHVjZXJQYXRoOiBcInBtQXBpXCIsXG4gICAgdGFnVHlwZXM6IFtcIlR5cGVzXCJdLFxuICAgIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoe1xuICAgICAgICBiYXNlVXJsOiBgJHtCQVNFX1VSTH1gLFxuICAgIH0pLFxuICAgIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XG4gICAgICAgIGdldFR5cGVzOiBidWlsZGVyLnF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiAoKSA9PiBgL3R5cGVgLFxuICAgICAgICAgICAgcHJvdmlkZXNUYWdzOiBbXCJUeXBlc1wiXSxcbiAgICAgICAgICAgIHRyYW5zZm9ybVJlc3BvbnNlOiAocmVzcG9uc2UpID0+IHJlc3BvbnNlLnJlc3VsdHMuc29ydChzb3J0VHlwZXMpLFxuICAgICAgICB9KSxcbiAgICB9KSxcbn0pO1xuZXhwb3J0IGNvbnN0IHsgdXNlR2V0VHlwZXNRdWVyeSB9ID0gcG1BcGk7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgQ2hpcCwgVGV4dEZpZWxkLCBJbnB1dExhYmVsLCBNZW51SXRlbSwgT3V0bGluZWRJbnB1dCwgU2VsZWN0LCBJbnB1dEFkb3JubWVudCwgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQm94LCBTdGFjayB9IGZyb20gXCJAbXVpL3N5c3RlbVwiO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoXCI7XG5pbXBvcnQgdXNlRmlsdGVyc0xvZ2ljIGZyb20gXCJzcmMvaG9va3MvdXNlRmlsdGVyc0xvZ2ljXCI7XG5pbXBvcnQgeyBnZXRUeXBlQ29sb3IgfSBmcm9tIFwic3JjL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgXCIuL0hlYWRlckZpbHRlcnMuY3NzXCI7XG5jb25zdCBJVEVNX0hFSUdIVCA9IDQ4O1xuY29uc3QgSVRFTV9QQURESU5HX1RPUCA9IDg7XG5jb25zdCBNZW51UHJvcHMgPSB7XG4gICAgUGFwZXJQcm9wczoge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4SGVpZ2h0OiBJVEVNX0hFSUdIVCAqIDQuNSArIElURU1fUEFERElOR19UT1AsXG4gICAgICAgICAgICB3aWR0aDogMjUwLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuY29uc3QgSGVhZGVyRmlsdGVycyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGhhbmRsZUNoYW5nZVNlbGVjdCwgaGFuZGxlQ2hhbmdlSW5wdXQsIGFsbFR5cGVzLCBzZWxlY3RlZFR5cGVzLCBpc1R5cGVzQXJyYXksIH0gPSB1c2VGaWx0ZXJzTG9naWMoKTtcbiAgICByZXR1cm4gKF9qc3goQm94LCB7IGNoaWxkcmVuOiBfanN4cyhTdGFjaywgeyBkaXJlY3Rpb246ICdjb2x1bW4nLCBzcGFjaW5nOiAyLCBjaGlsZHJlbjogW19qc3hzKEJveCwgeyBjbGFzc05hbWU6ICdmaWx0ZXIxJywgY2hpbGRyZW46IFtfanN4KElucHV0TGFiZWwsIHsgaWQ6ICdkZW1vLW11bHRpcGxlLWNoaXAtbGFiZWwnLCBjaGlsZHJlbjogXCJTZWFyY2ggYnkgbmFtZVwiIH0pLCBfanN4KFRleHRGaWVsZCwgeyBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlSW5wdXQsIHZhcmlhbnQ6ICdvdXRsaW5lZCcsIHBsYWNlaG9sZGVyOiAnUGlrYWNodScsIElucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IChfanN4KElucHV0QWRvcm5tZW50LCB7IHBvc2l0aW9uOiAnc3RhcnQnLCBjaGlsZHJlbjogX2pzeChTZWFyY2hJY29uLCB7fSkgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGlucHV0UHJvcHM6IHsgXCJhcmlhLWxhYmVsXCI6IFwic2VhcmNoIGJ5IG5hbWVcIiB9IH0pXSB9KSwgX2pzeHMoQm94LCB7IGNsYXNzTmFtZTogJ2ZpbHRlcjInLCBjaGlsZHJlbjogW19qc3goSW5wdXRMYWJlbCwgeyBpZDogJ2RlbW8tbXVsdGlwbGUtY2hpcC1sYWJlbCcsIGNoaWxkcmVuOiBcIlNlbGVjdCBieSB0eXBlXCIgfSksIF9qc3goU2VsZWN0LCB7IGxhYmVsSWQ6ICdkZW1vLW11bHRpcGxlLWNoaXAtbGFiZWwnLCBpZDogJ2RlbW8tbXVsdGlwbGUtY2hpcCcsIG11bHRpcGxlOiB0cnVlLCB2YWx1ZTogc2VsZWN0ZWRUeXBlcywgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZVNlbGVjdCwgaW5wdXQ6IF9qc3goT3V0bGluZWRJbnB1dCwgeyBpZDogJ3NlbGVjdC1tdWx0aXBsZS1jaGlwJywgbGFiZWw6ICdTZWxlY3QgYnkgdHlwZScgfSksIHJlbmRlclZhbHVlOiAoc2VsZWN0ZWQpID0+IChfanN4KEJveCwgeyBzeDogeyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiLCBnYXA6IDAuNSB9LCBjaGlsZHJlbjogc2VsZWN0ZWQubWFwKCh2YWx1ZSkgPT4gKF9qc3goQ2hpcCwgeyBsYWJlbDogdmFsdWUsIHN4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBnZXRUeXBlQ29sb3IodmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHZhbHVlKSkpIH0pKSwgTWVudVByb3BzOiBNZW51UHJvcHMsIHN4OiB7IHdpZHRoOiBcIjEwMCVcIiB9LCBjaGlsZHJlbjogaXNUeXBlc0FycmF5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFR5cGVzPy5tYXAoKHsgbmFtZSB9KSA9PiAoX2pzeChNZW51SXRlbSwgeyB2YWx1ZTogbmFtZSwgY2hpbGRyZW46IG5hbWUgfSwgbmFtZSkpKSB9KV0gfSldIH0pIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIZWFkZXJGaWx0ZXJzO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgVGFibGVSb3csIFRhYmxlQ2VsbCwgSWNvbkJ1dHRvbiwgQ29sbGFwc2UsIEJveCwgVGFibGUsIFRhYmxlSGVhZCwgVGFibGVCb2R5LCBBdmF0YXIsIENoaXAsIFN0YWNrLCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0Rvd25JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dEb3duXCI7XG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1VwSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93VXBcIjtcbmltcG9ydCB7IGdldFR5cGVDb2xvciB9IGZyb20gXCJzcmMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmZ1bmN0aW9uIFJvdyhwcm9wcykge1xuICAgIGNvbnN0IHsgcm93IH0gPSBwcm9wcztcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICAgIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xuICAgIGNvbnN0IGF2YXRhclNpemUgPSBpc01vYmlsZSA/IDUwIDogMTEwO1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoVGFibGVSb3csIHsgc3g6IHsgXCImID4gKlwiOiB7IGJvcmRlckJvdHRvbTogXCJ1bnNldFwiIH0gfSwgY2hpbGRyZW46IFtfanN4KFRhYmxlQ2VsbCwgeyBjaGlsZHJlbjogX2pzeChJY29uQnV0dG9uLCB7IFwiYXJpYS1sYWJlbFwiOiAnZXhwYW5kIHJvdycsIHNpemU6ICdzbWFsbCcsIG9uQ2xpY2s6ICgpID0+IHNldE9wZW4oIW9wZW4pLCBjaGlsZHJlbjogb3BlbiA/IF9qc3goS2V5Ym9hcmRBcnJvd1VwSWNvbiwge30pIDogX2pzeChLZXlib2FyZEFycm93RG93bkljb24sIHt9KSB9KSB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogcm93Lm5hbWUgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgc2l6ZTogJ21lZGl1bScsIGNoaWxkcmVuOiBfanN4KEF2YXRhciwgeyBzeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXZhdGFyU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdmF0YXJTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHNyYzogcm93LmltZywgYWx0OiBgJHtyb3cubmFtZX0gcGhvdG9gIH0pIH0pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiBfanN4KFN0YWNrLCB7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgZGlyZWN0aW9uOiAncm93Jywgc3BhY2luZzogaXNNb2JpbGUgPyAwIDogMSwgY2hpbGRyZW46IHJvdy50eXBlcy5tYXAoKHR5cGUpID0+IChfanN4KENoaXAsIHsgc2l6ZTogJ3NtYWxsJywgc3g6IHsgYmFja2dyb3VuZENvbG9yOiBnZXRUeXBlQ29sb3IodHlwZSksIGNvbG9yOiBcIndoaXRlXCIgfSwgbGFiZWw6IHR5cGUgfSwgdHlwZSkpKSB9KSB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogcm93LmFiaWxpdGllcy5tYXAoKGl0ZW0pID0+IChfanN4KEJveCwgeyBzeDogeyBwYWRkaW5nWTogMSB9LCBjaGlsZHJlbjogaXRlbSB9LCBpdGVtKSkpIH0pXSB9KSwgX2pzeChUYWJsZVJvdywgeyBjaGlsZHJlbjogX2pzeChUYWJsZUNlbGwsIHsgc3g6IHsgcGFkZGluZ0JvdHRvbTogMCwgcGFkZGluZ1RvcDogMCB9LCBjb2xTcGFuOiA2LCBjaGlsZHJlbjogX2pzeChDb2xsYXBzZSwgeyBpbjogb3BlbiwgdGltZW91dDogJ2F1dG8nLCB1bm1vdW50T25FeGl0OiB0cnVlLCBjaGlsZHJlbjogX2pzeChCb3gsIHsgc3g6IHsgbWFyZ2luOiAxIH0sIGNoaWxkcmVuOiBfanN4cyhUYWJsZSwgeyBzaXplOiAnc21hbGwnLCBcImFyaWEtbGFiZWxcIjogJ3B1cmNoYXNlcycsIGNoaWxkcmVuOiBbX2pzeChUYWJsZUhlYWQsIHsgY2hpbGRyZW46IF9qc3hzKFRhYmxlUm93LCB7IGNoaWxkcmVuOiBbX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogXCJIZWlnaHRcIiB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogXCJXZWlnaHRcIiB9KV0gfSkgfSksIF9qc3goVGFibGVCb2R5LCB7IGNoaWxkcmVuOiBfanN4cyhUYWJsZVJvdywgeyBjaGlsZHJlbjogW19qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IHJvdy5oZWlnaHQgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IHJvdy53ZWlnaHQgfSldIH0sIHJvdy5pZCkgfSldIH0pIH0pIH0pIH0pIH0pXSB9KSk7XG59XG5leHBvcnQgZGVmYXVsdCBSb3c7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgUGFwZXIsIFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVDb250YWluZXIsIFRhYmxlSGVhZCwgVGFibGVQYWdpbmF0aW9uLCBUYWJsZVJvdywgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHVzZVRhYmxlTG9naWMgZnJvbSBcInNyYy9ob29rcy91c2VUYWJsZUxvZ2ljXCI7XG5pbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xuY29uc3Qgc3R5bGVzID0ge1xuICAgIFwiLk11aVRvb2xiYXItcm9vdFwiOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiBcIjRweFwiLFxuICAgIH0sXG4gICAgXCImLk11aVRhYmxlUGFnaW5hdGlvbi1yb290XCI6IHtcbiAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgIH0sXG59O1xuY29uc3QgVGFibGVDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaGFuZGxlUGFnZUNoYW5nZSwgaGFuZGxlUGFnZVNpemVDaGFuZ2UsIHBtc09uUGFnZSwgcGFnZSwgcGVyUGFnZSwgdG90YWxDb3VudCwgcGFkZGluZ1ZhbHVlLCB9ID0gdXNlVGFibGVMb2dpYygpO1xuICAgIHJldHVybiAoX2pzeHMoVGFibGVDb250YWluZXIsIHsgY29tcG9uZW50OiBQYXBlciwgY2hpbGRyZW46IFtfanN4cyhUYWJsZSwgeyBwYWRkaW5nOiBwYWRkaW5nVmFsdWUsIFwiYXJpYS1sYWJlbFwiOiAnY29sbGFwc2libGUgdGFibGUnLCBjaGlsZHJlbjogW19qc3goVGFibGVIZWFkLCB7IGNoaWxkcmVuOiBfanN4cyhUYWJsZVJvdywgeyBjaGlsZHJlbjogW19qc3goVGFibGVDZWxsLCB7fSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IFwiTmFtZVwiIH0pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiBcIkF2YXRhclwiIH0pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiBcIlR5cGVcIiB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogXCJBYmlsaXRpZXNcIiB9KV0gfSkgfSksIF9qc3goVGFibGVCb2R5LCB7IGNoaWxkcmVuOiBwbXNPblBhZ2UubWFwKChyb3cpID0+IChfanN4KFJvdywgeyByb3c6IHJvdyB9LCByb3cuaWQpKSkgfSldIH0pLCBfanN4KFRhYmxlUGFnaW5hdGlvbiwgeyBjb21wb25lbnQ6ICdkaXYnLCBjb3VudDogdG90YWxDb3VudCwgcGFnZTogcGFnZSwgb25QYWdlQ2hhbmdlOiBoYW5kbGVQYWdlQ2hhbmdlLCByb3dzUGVyUGFnZTogcGVyUGFnZSwgb25Sb3dzUGVyUGFnZUNoYW5nZTogaGFuZGxlUGFnZVNpemVDaGFuZ2UsIHNpemU6ICdzbWFsbCcsIHN4OiBzdHlsZXMgfSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBUYWJsZUNvbnRlbnQ7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBBbGVydCwgU2tlbGV0b24sIFN0YWNrIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB1c2VUYWJsZUNvbnRhaW5lckxvZ2ljIGZyb20gXCJzcmMvaG9va3MvdXNlVGFibGVDb250YWluZXJMb2dpY1wiO1xuaW1wb3J0IFRhYmxlQ29udGVudCBmcm9tIFwiLi9UYWJsZUNvbnRlbnRcIjtcbmNvbnN0IFRhYmxlV3JhcHBlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlzTG9hZGluZywgZXJyb3IgfSA9IHVzZVRhYmxlQ29udGFpbmVyTG9naWMoKTtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgfSwgY2hpbGRyZW46IGlzTG9hZGluZyAmJiAhZXJyb3IgPyAoX2pzeHMoU3RhY2ssIHsgZGlyZWN0aW9uOiAnY29sdW1uJywgd2lkdGg6ICcxMDAlJywgc3BhY2luZzogMiwgY2hpbGRyZW46IFtfanN4KFNrZWxldG9uLCB7IGFuaW1hdGlvbjogJ3dhdmUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc1ZW0nIH0pLCBfanN4KFNrZWxldG9uLCB7IGFuaW1hdGlvbjogJ3dhdmUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc1ZW0nIH0pLCBfanN4KFNrZWxldG9uLCB7IGFuaW1hdGlvbjogJ3dhdmUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc1ZW0nIH0pXSB9KSkgOiAoX2pzeChUYWJsZUNvbnRlbnQsIHt9KSkgfSksIGVycm9yICYmIF9qc3goQWxlcnQsIHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNoaWxkcmVuOiBlcnJvciB9KV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFRhYmxlV3JhcHBlcjtcbiIsImV4cG9ydCBjb25zdCBJTklUSUFMX1BBR0VfU0laRSA9IDI1O1xuZXhwb3J0IGNvbnN0IFRPVEFMX1JPV1MgPSAxMDA7XG5leHBvcnQgY29uc3QgRklSU1RfUEFHRSA9IDA7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBmZXRjaFBtc1RodW5rIH0gZnJvbSBcInNyYy9taWRkbGV3YXJlL3RodW5rc1wiO1xuaW1wb3J0IHsgVE9UQUxfUk9XUyB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XG5jb25zdCB1c2VBcHBMb2dpYyA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgZmV0Y2hJbml0aWFsID0gZmV0Y2hQbXNUaHVuayhkaXNwYXRjaCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hJbml0aWFsKFRPVEFMX1JPV1MpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4ge307XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlQXBwTG9naWM7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZUdldFR5cGVzUXVlcnkgfSBmcm9tIFwic3JjL2FwaS91c2VHZXRQbUFwaVwiO1xuaW1wb3J0IHsgZmlsdGVyQnlOYW1lLCBmaWx0ZXJCeVR5cGUgfSBmcm9tIFwic3JjL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcInNyYy91dGlscy91dGlsc1wiO1xuY29uc3QgdXNlRmlsdGVyc0xvZ2ljID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YTogYWxsVHlwZXMgfSA9IHVzZUdldFR5cGVzUXVlcnkoKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRUeXBlcywgc2V0U2VsZWN0ZWRUeXBlc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVNlbGVjdCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IHRhcmdldDogeyB2YWx1ZSB9LCB9ID0gZXZlbnQ7XG4gICAgICAgIGNvbnN0IHZhbCA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlLnNwbGl0KFwiLFwiKSA6IHZhbHVlO1xuICAgICAgICBzZXRTZWxlY3RlZFR5cGVzKHZhbCk7XG4gICAgICAgIGRpc3BhdGNoKGZpbHRlckJ5VHlwZSh2YWwpKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUlucHV0ID0gKGUpID0+IHtcbiAgICAgICAgZGVib3VuY2UoKCkgPT4gZGlzcGF0Y2goZmlsdGVyQnlOYW1lKGUudGFyZ2V0LnZhbHVlKSksIDUwMCkoKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGhhbmRsZUNoYW5nZVNlbGVjdCxcbiAgICAgICAgaGFuZGxlQ2hhbmdlSW5wdXQsXG4gICAgICAgIGFsbFR5cGVzLFxuICAgICAgICBzZWxlY3RlZFR5cGVzLFxuICAgICAgICBpc1R5cGVzQXJyYXk6IGFsbFR5cGVzICYmIEFycmF5LmlzQXJyYXkoYWxsVHlwZXMpLFxuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlRmlsdGVyc0xvZ2ljO1xuIiwiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNlbGVjdEVycm9yLCBzZWxlY3RJc0xvYWRpbmcgfSBmcm9tIFwic3JjL3N0YXRlL3NlbGVjdG9yc1wiO1xuY29uc3QgdXNlTGlzdExvZ2ljID0gKCkgPT4ge1xuICAgIGNvbnN0IGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdElzTG9hZGluZyk7XG4gICAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RFcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgICBlcnJvcixcbiAgICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUxpc3RMb2dpYztcbiIsImltcG9ydCB7IHVzZU1lZGlhUXVlcnksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgY2hhbmdlUGFnZSwgY2hhbmdlUGFnZVNpemUgfSBmcm9tIFwic3JjL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IHNlbGVjdFBhZ2UsIHNlbGVjdFBlclBhZ2UsIHNlbGVjdFNsaWNlZFBtcywgc2VsZWN0VG90YWxQYWdlcywgfSBmcm9tIFwic3JjL3N0YXRlL3NlbGVjdG9yc1wiO1xuY29uc3QgdXNlVGFibGVMb2dpYyA9ICgpID0+IHtcbiAgICBjb25zdCBwbXNPblBhZ2UgPSB1c2VTZWxlY3RvcihzZWxlY3RTbGljZWRQbXMpO1xuICAgIGNvbnN0IHBhZ2UgPSB1c2VTZWxlY3RvcihzZWxlY3RQYWdlKTtcbiAgICBjb25zdCBwZXJQYWdlID0gdXNlU2VsZWN0b3Ioc2VsZWN0UGVyUGFnZSk7XG4gICAgY29uc3QgdG90YWxQYWdlcyA9IHVzZVNlbGVjdG9yKHNlbGVjdFRvdGFsUGFnZXMpO1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpKTtcbiAgICBjb25zdCBwYWRkaW5nVmFsdWUgPSBpc01vYmlsZSA/IFwibm9uZVwiIDogXCJub3JtYWxcIjtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChlLCBuZXdQYWdlKSA9PiBkaXNwYXRjaChjaGFuZ2VQYWdlKG5ld1BhZ2UpKTtcbiAgICBjb25zdCBoYW5kbGVQYWdlU2l6ZUNoYW5nZSA9IChlKSA9PiBkaXNwYXRjaChjaGFuZ2VQYWdlU2l6ZSgrZS50YXJnZXQudmFsdWUpKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBoYW5kbGVQYWdlQ2hhbmdlLFxuICAgICAgICBoYW5kbGVQYWdlU2l6ZUNoYW5nZSxcbiAgICAgICAgcG1zT25QYWdlLFxuICAgICAgICBwYWdlLFxuICAgICAgICBwZXJQYWdlLFxuICAgICAgICB0b3RhbENvdW50OiB0b3RhbFBhZ2VzICogcGVyUGFnZSxcbiAgICAgICAgcGFkZGluZ1ZhbHVlLFxuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlVGFibGVMb2dpYztcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdGF0ZS9zdG9yZVwiO1xuaW1wb3J0IFwiQGZvbnRzb3VyY2Uvcm9ib3RvL2xhdGluLTQwMC5jc3NcIjtcbmltcG9ydCBcIkBmb250c291cmNlL3JvYm90by9sYXRpbi01MDAuY3NzXCI7XG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSkucmVuZGVyKF9qc3goUmVhY3QuU3RyaWN0TW9kZSwgeyBjaGlsZHJlbjogX2pzeChQcm92aWRlciwgeyBzdG9yZTogc3RvcmUsIGNoaWxkcmVuOiBfanN4KEFwcCwge30pIH0pIH0pKTtcbiIsImltcG9ydCB7IEZJUlNUX1BBR0UgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmV0Y2hQbXMsIGZldGNoUG1zRXJyb3IsIGZldGNoSXNMb2FkaW5nIH0gZnJvbSBcInNyYy9zdGF0ZS9hY3Rpb25zXCI7XG5pbXBvcnQgeyBleHRyYWN0TWFpbkluZm8gfSBmcm9tIFwic3JjL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gXCIuLi9hcGkvdXNlR2V0UG1BcGlcIjtcbmV4cG9ydCBjb25zdCBmZXRjaFBtc1RodW5rID0gKGRpc3BhdGNoKSA9PiBhc3luYyAodG90YWxSb3dzKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hJc0xvYWRpbmcodHJ1ZSkpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RzID0gW107XG4gICAgICAgIGZvciAobGV0IGlkID0gRklSU1RfUEFHRSArIDE7IGlkIDw9IHRvdGFsUm93czsgaWQrKykge1xuICAgICAgICAgICAgcmVxdWVzdHMucHVzaChmZXRjaChgJHtCQVNFX1VSTH0vcG9rZW1vbi8ke2lkfWApXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggUG9rZW1vbiBkYXRhXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZXh0cmFjdE1haW5JbmZvKGRhdGEpKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKHJlcXVlc3RzKTtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQbXMoZGF0YSkpO1xuICAgICAgICBkaXNwYXRjaChmZXRjaElzTG9hZGluZyhmYWxzZSkpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaFBtc0Vycm9yKGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmV4cG9ydCBjb25zdCBmZXRjaFBtcyA9IGNyZWF0ZUFjdGlvbihcIkZFVENIX1BNU1wiKTtcbmV4cG9ydCBjb25zdCBmZXRjaFBtc0Vycm9yID0gY3JlYXRlQWN0aW9uKFwiRkVUQ0hfUE1TX0VSUk9SXCIpO1xuZXhwb3J0IGNvbnN0IGZldGNoSXNMb2FkaW5nID0gY3JlYXRlQWN0aW9uKFwiRkVUQ0hfUE1TX0lTX0xPQURJTkdcIik7XG5leHBvcnQgY29uc3QgZmlsdGVyQnlOYW1lID0gY3JlYXRlQWN0aW9uKFwiRklMVEVSX0JZX05BTUVcIik7XG5leHBvcnQgY29uc3QgZmlsdGVyQnlUeXBlID0gY3JlYXRlQWN0aW9uKFwiRklMVEVSX0JZX1RZUEVcIik7XG5leHBvcnQgY29uc3QgY2xlYXJGaWx0ZXIgPSBjcmVhdGVBY3Rpb24oXCJDTEVBUl9GSUxURVJcIik7XG5leHBvcnQgY29uc3Qgb3Blbk1vZGFsID0gY3JlYXRlQWN0aW9uKFwiT1BFTl9NT0RBTFwiKTtcbmV4cG9ydCBjb25zdCBjbG9zZU1vZGFsID0gY3JlYXRlQWN0aW9uKFwiQ0xPU0VfTU9EQUxcIik7XG5leHBvcnQgY29uc3QgY2hhbmdlUGFnZSA9IGNyZWF0ZUFjdGlvbihcIkNIQU5HRV9QQUdFXCIpO1xuZXhwb3J0IGNvbnN0IGNoYW5nZVBhZ2VTaXplID0gY3JlYXRlQWN0aW9uKFwiQ0hBTkdFX1BBR0VfU0laRVwiKTtcbiIsImltcG9ydCB7IGNyZWF0ZVJlZHVjZXIgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgRklSU1RfUEFHRSwgSU5JVElBTF9QQUdFX1NJWkUsIFRPVEFMX1JPV1MgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2hhbmdlUGFnZSwgY2hhbmdlUGFnZVNpemUsIGZldGNoSXNMb2FkaW5nLCBmZXRjaFBtcywgZmV0Y2hQbXNFcnJvciwgZmlsdGVyQnlOYW1lLCBmaWx0ZXJCeVR5cGUsIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuY29uc3QgaW5pdGlhbCA9IHtcbiAgICBwbXNVSTogW10sXG4gICAgc2VhcmNoOiB7IGJ5TmFtZTogXCJcIiwgYnlUeXBlczogW10gfSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIHBhZ2U6IEZJUlNUX1BBR0UsXG4gICAgICAgIHBlclBhZ2U6IElOSVRJQUxfUEFHRV9TSVpFLFxuICAgICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwoVE9UQUxfUk9XUyAvIElOSVRJQUxfUEFHRV9TSVpFKSxcbiAgICB9LFxuICAgIGVycm9yOiB1bmRlZmluZWQsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbn07XG5leHBvcnQgY29uc3QgcG1MaXN0UmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbCwgKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyXG4gICAgICAgIC5hZGRDYXNlKGZldGNoUG1zRXJyb3IsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9KVxuICAgICAgICAuYWRkQ2FzZShmZXRjaElzTG9hZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9KVxuICAgICAgICAuYWRkQ2FzZShmZXRjaFBtcywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHBtc1VJOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGZpbHRlckJ5TmFtZSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV3UGFnaW5hdGlvbiA9IHsgLi4uc3RhdGUucGFnaW5hdGlvbiwgcGFnZTogMCB9O1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjogbmV3UGFnaW5hdGlvbixcbiAgICAgICAgICAgIHNlYXJjaDogeyAuLi5zdGF0ZS5zZWFyY2gsIGJ5TmFtZTogYWN0aW9uLnBheWxvYWQgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGZpbHRlckJ5VHlwZSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV3UGFnaW5hdGlvbiA9IHsgLi4uc3RhdGUucGFnaW5hdGlvbiwgcGFnZTogMCB9O1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjogbmV3UGFnaW5hdGlvbixcbiAgICAgICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLnNlYXJjaCxcbiAgICAgICAgICAgICAgICBieVR5cGVzOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9KVxuICAgICAgICAuYWRkQ2FzZShjaGFuZ2VQYWdlLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBwYWdpbmF0aW9uTmV3ID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUucGFnaW5hdGlvbixcbiAgICAgICAgICAgIHBhZ2U6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjogcGFnaW5hdGlvbk5ldyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGNoYW5nZVBhZ2VTaXplLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBwZXJQYWdlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoc3RhdGUucG1zVUkubGVuZ3RoIC8gcGVyUGFnZSk7XG4gICAgICAgIGNvbnN0IHBhZ2luYXRpb25OZXcgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5wYWdpbmF0aW9uLFxuICAgICAgICAgICAgcGFnZTogMCxcbiAgICAgICAgICAgIHBlclBhZ2U6IHBlclBhZ2UsXG4gICAgICAgICAgICB0b3RhbFBhZ2VzOiB0b3RhbFBhZ2VzLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUsIHBhZ2luYXRpb246IHBhZ2luYXRpb25OZXcgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5leHBvcnQgY29uc3Qgc2VsZWN0UG1zID0gKHN0YXRlKSA9PiBzdGF0ZS5wbUxpc3RSZWR1Y2VyLnBtc1VJO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFBhZ2UgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIucGFnaW5hdGlvbi5wYWdlO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFBlclBhZ2UgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIucGFnaW5hdGlvbi5wZXJQYWdlO1xuZXhwb3J0IGNvbnN0IHNlbGVjdEZpbHRlcmVkUG1zID0gY3JlYXRlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wbUxpc3RSZWR1Y2VyLCAoeyBwbXNVSSwgc2VhcmNoIH0pID0+IHtcbiAgICBjb25zdCB7IGJ5TmFtZSwgYnlUeXBlcyB9ID0gc2VhcmNoO1xuICAgIGNvbnN0IGZpbHRlcmVkUG1zID0gcG1zVUkuZmlsdGVyKChwbSkgPT4ge1xuICAgICAgICBjb25zdCBpc05hbWVNYXRjaCA9IHBtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhieU5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIGNvbnN0IGlzVHlwZU1hdGNoID0gYnlUeXBlcy5sZW5ndGggPT09IDAgfHwgcG0udHlwZXMuc29tZSgodHlwZSkgPT4gYnlUeXBlcy5pbmNsdWRlcyh0eXBlKSk7XG4gICAgICAgIHJldHVybiBpc05hbWVNYXRjaCAmJiBpc1R5cGVNYXRjaDtcbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRQbXM7XG59KTtcbmV4cG9ydCBjb25zdCBzZWxlY3RTbGljZWRQbXMgPSBjcmVhdGVTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIsIHNlbGVjdEZpbHRlcmVkUG1zLCAoeyBwYWdpbmF0aW9uIH0sIGZpbHRlcmVkUG1zKSA9PiB7XG4gICAgY29uc3QgeyBwZXJQYWdlLCBwYWdlIH0gPSBwYWdpbmF0aW9uO1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBwZXJQYWdlICogcGFnZTtcbiAgICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyBwZXJQYWdlO1xuICAgIGNvbnN0IHNsaWNlZFBtcyA9IGZpbHRlcmVkUG1zLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcbiAgICByZXR1cm4gc2xpY2VkUG1zO1xufSk7XG5leHBvcnQgY29uc3Qgc2VsZWN0VG90YWxQYWdlcyA9IGNyZWF0ZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlciwgc2VsZWN0RmlsdGVyZWRQbXMsICh7IHBhZ2luYXRpb24gfSwgZmlsdGVyZWRQbXMpID0+IHtcbiAgICBjb25zdCB7IHBlclBhZ2UgfSA9IHBhZ2luYXRpb247XG4gICAgY29uc3Qgc2xpY2VkUG1zID0gTWF0aC5jZWlsKGZpbHRlcmVkUG1zLmxlbmd0aCAvIHBlclBhZ2UpO1xuICAgIHJldHVybiBzbGljZWRQbXM7XG59KTtcbmV4cG9ydCBjb25zdCBzZWxlY3RJc0xvYWRpbmcgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIuaXNMb2FkaW5nO1xuZXhwb3J0IGNvbnN0IHNlbGVjdEVycm9yID0gKHN0YXRlKSA9PiBzdGF0ZS5wbUxpc3RSZWR1Y2VyLmVycm9yO1xuIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgcG1MaXN0UmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJcIjtcbmltcG9ydCB7IHBtQXBpIH0gZnJvbSBcIi4uL2FwaS91c2VHZXRQbUFwaVwiO1xuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjoge1xuICAgICAgICBbcG1BcGkucmVkdWNlclBhdGhdOiBwbUFwaS5yZWR1Y2VyLFxuICAgICAgICBwbUxpc3RSZWR1Y2VyOiBwbUxpc3RSZWR1Y2VyLFxuICAgIH0sXG4gICAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PiBnZXREZWZhdWx0TWlkZGxld2FyZSgpLmNvbmNhdChwbUFwaS5taWRkbGV3YXJlKSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCJleHBvcnQgY29uc3QgZXh0cmFjdE1haW5JbmZvID0gKHBva2Vtb24pID0+IHtcbiAgICBjb25zdCB7IGlkLCBuYW1lLCBzcHJpdGVzLCB0eXBlcywgYWJpbGl0aWVzLCBoZWlnaHQsIHdlaWdodCwgfSA9IHBva2Vtb247XG4gICAgY29uc3QgcG0gPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBuYW1lLFxuICAgICAgICB0eXBlczogdHlwZXMubWFwKChpdGVtKSA9PiBpdGVtLnR5cGUubmFtZSksXG4gICAgICAgIGFiaWxpdGllczogYWJpbGl0aWVzLm1hcCgoaXRlbSkgPT4gaXRlbS5hYmlsaXR5Lm5hbWUpLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdlaWdodCxcbiAgICAgICAgaW1nOiBzcHJpdGVzLmZyb250X2RlZmF1bHQsXG4gICAgfTtcbiAgICByZXR1cm4gcG07XG59O1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGYsIHRpbWUpID0+IHtcbiAgICBsZXQgdGltZW91dElkID0gbnVsbDtcbiAgICBjb25zdCBmdW5jdGlvbkNhbGwgPSAoKSA9PiB7XG4gICAgICAgIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIGYoKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiBkZWJvdW5jZWRGdW5jdGlvbiguLi5hcmcpIHtcbiAgICAgICAgaWYgKHRpbWVvdXRJZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uQ2FsbCwgdGltZSwgLi4uYXJnKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHNvcnRUeXBlcyA9IChhLCBiKSA9PiB7XG4gICAgaWYgKGEubmFtZSA8IGIubmFtZSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmIChhLm5hbWUgPiBiLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcbmV4cG9ydCBjb25zdCBnZXRUeXBlQ29sb3IgPSAodHlwZU5hbWUpID0+IHtcbiAgICBzd2l0Y2ggKHR5cGVOYW1lKSB7XG4gICAgICAgIGNhc2UgXCJidWdcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM5NDdjMTVcIjtcbiAgICAgICAgY2FzZSBcImRhcmtcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM4MDgwODBcIjtcbiAgICAgICAgY2FzZSBcImRyYWdvblwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzZGMzVGQ1wiO1xuICAgICAgICBjYXNlIFwiZWxlY3RyaWNcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiNiOTlmMWFcIjtcbiAgICAgICAgY2FzZSBcImZhaXJ5XCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjYzkxYzcyXCI7XG4gICAgICAgIGNhc2UgXCJmaWdodGluZ1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiI0MyMkUyOFwiO1xuICAgICAgICBjYXNlIFwiZmlyZVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiI2NjNTcwMFwiO1xuICAgICAgICBjYXNlIFwiZmx5aW5nXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjOGU3OWM5XCI7XG4gICAgICAgIGNhc2UgXCJnaG9zdFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzczNTc5N1wiO1xuICAgICAgICBjYXNlIFwiZ3Jhc3NcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM0ZjgwMzJcIjtcbiAgICAgICAgY2FzZSBcImdyb3VuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzYxNTg1MlwiO1xuICAgICAgICBjYXNlIFwiaWNlXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjNzI5NzllXCI7XG4gICAgICAgIGNhc2UgXCJub3JtYWxcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM4MDgwODBcIjtcbiAgICAgICAgY2FzZSBcInBvaXNvblwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzgxNTFiOFwiO1xuICAgICAgICBjYXNlIFwicHN5Y2hpY1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiI0Y5NTU4N1wiO1xuICAgICAgICBjYXNlIFwicm9ja1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiI0I2QTEzNlwiO1xuICAgICAgICBjYXNlIFwic2hhZG93XCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjMzMzMzMzXCI7XG4gICAgICAgIGNhc2UgXCJzdGVlbFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzdjN2M4YVwiO1xuICAgICAgICBjYXNlIFwidW5rbm93blwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzY4QTA5MFwiO1xuICAgICAgICBjYXNlIFwid2F0ZXJcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiMyNTQ4OTRcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBcIiM4MDgwODAgXCI7XG4gICAgfVxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtlY2xpcHNlX2Fzc2lnbm1lbnRcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZWNsaXBzZV9hc3NpZ25tZW50XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19tdWlfaWNvbnMtbWF0ZXJpYWxfS2V5Ym9hcmRBcnJvd0Rvd25fanMtbm9kZV9tb2R1bGVzX211aV9pY29ucy1tYXRlcmlhbF8tODBiZGUwXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzeFwiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9