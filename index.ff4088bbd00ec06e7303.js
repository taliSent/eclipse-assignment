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
      // 1684316405528
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
      // 1684316406474
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
      // 1684316405525
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__["default"], { maxWidth: 'md', sx: { padding: "3em 1em" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { direction: 'column', spacing: 3, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { className: 'header', variant: 'h2', component: 'h1', children: "Pokemons" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_HeaderFilters_HeaderFilters__WEBPACK_IMPORTED_MODULE_1__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Table_TableWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {})] }) }));
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_4__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_5__["default"], { direction: 'column', spacing: 2, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__["default"], { className: 'filter1', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { id: 'demo-multiple-chip-label', children: "Search by name" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { sx: { width: "100%" }, onChange: handleChangeInput, variant: 'outlined', placeholder: 'Pikachu', InputProps: {
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowUp */ "./node_modules/@mui/icons-material/KeyboardArrowUp.js");
/* harmony import */ var src_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/useMediaQuery/useMediaQuery.js");







const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};
function Row(props) {
    const { row } = props;
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"])(theme.breakpoints.down("sm"));
    const avatarSize = isMobile ? 50 : 95;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { sx: { "& > *": { borderBottom: "unset" } }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { "aria-label": 'expand row', size: 'small', onClick: () => setOpen(!open), children: open ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_8__["default"], {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_9__["default"], {}) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { align: 'center', children: row.name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { align: 'center', sx: style, size: 'medium', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { sx: {
                                width: avatarSize,
                                height: avatarSize,
                            }, src: row.img, alt: `${row.name} photo` }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { align: 'center', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { justifyContent: 'center', direction: 'row', spacing: 1, children: row.types.map((type) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { size: 'small', sx: { backgroundColor: (0,src_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getTypeColor)(type), color: "white" }, label: type }, type))) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { align: 'center', children: row.abilities.map((item) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { sx: { margin: 1 }, children: item }, item))) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { sx: { paddingBottom: 0, paddingTop: 0 }, colSpan: 6, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], { in: open, timeout: 'auto', unmountOnExit: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { sx: { margin: 1 }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], { variant: 'h6', gutterBottom: true, component: 'div', children: "Details" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], { size: 'small', "aria-label": 'purchases', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { align: 'center', children: "Height" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { align: 'center', children: "Weight" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { align: 'center', children: row.height }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { align: 'center', children: row.weight })] }, row.id) })] })] }) }) }) })] }));
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_mui_icons-material_KeyboardArrowDown_js-node_modules_mui_icons-material_-45ce2a"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9BcHAuY3NzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb21wb25lbnRzL0hlYWRlckZpbHRlcnMvSGVhZGVyRmlsdGVycy5jc3MiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvYXBpL3VzZUdldFBtQXBpLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb21wb25lbnRzL0hlYWRlckZpbHRlcnMvSGVhZGVyRmlsdGVycy50c3giLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2NvbXBvbmVudHMvVGFibGUvUm93LnRzeCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZUNvbnRlbnQudHN4Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaG9va3MvdXNlQXBwTG9naWMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2hvb2tzL3VzZUZpbHRlcnNMb2dpYy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaG9va3MvdXNlVGFibGVDb250YWluZXJMb2dpYy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaG9va3MvdXNlVGFibGVMb2dpYy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9taWRkbGV3YXJlL3RodW5rcy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvc3RhdGUvcmVkdWNlci50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvc3RhdGUvc2VsZWN0b3JzLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9zdGF0ZS9zdG9yZS50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY4NDMxNjQwNTUyOFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjg0MzE2NDA2NDc0XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2ODQzMTY0MDU1MjVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCI7XG5pbXBvcnQgSGVhZGVyRmlsdGVycyBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlckZpbHRlcnMvSGVhZGVyRmlsdGVyc1wiO1xuaW1wb3J0IFRhYmxlV3JhcHBlciBmcm9tIFwiLi9jb21wb25lbnRzL1RhYmxlL1RhYmxlV3JhcHBlclwiO1xuaW1wb3J0IHVzZUFwcExvZ2ljIGZyb20gXCIuL2hvb2tzL3VzZUFwcExvZ2ljXCI7XG5pbXBvcnQgXCIuL0FwcC5jc3NcIjtcbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICBjb25zdCBsb2dpYyA9IHVzZUFwcExvZ2ljKCk7XG4gICAgcmV0dXJuIChfanN4KENvbnRhaW5lciwgeyBtYXhXaWR0aDogJ21kJywgc3g6IHsgcGFkZGluZzogXCIzZW0gMWVtXCIgfSwgY2hpbGRyZW46IF9qc3hzKFN0YWNrLCB7IGRpcmVjdGlvbjogJ2NvbHVtbicsIHNwYWNpbmc6IDMsIGNoaWxkcmVuOiBbX2pzeChUeXBvZ3JhcGh5LCB7IGNsYXNzTmFtZTogJ2hlYWRlcicsIHZhcmlhbnQ6ICdoMicsIGNvbXBvbmVudDogJ2gxJywgY2hpbGRyZW46IFwiUG9rZW1vbnNcIiB9KSwgX2pzeChIZWFkZXJGaWx0ZXJzLCB7fSksIF9qc3goVGFibGVXcmFwcGVyLCB7fSldIH0pIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3RcIjtcbmltcG9ydCB7IHNvcnRUeXBlcyB9IGZyb20gXCJzcmMvdXRpbHMvdXRpbHNcIjtcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92MlwiO1xuZXhwb3J0IGNvbnN0IHBtQXBpID0gY3JlYXRlQXBpKHtcbiAgICByZWR1Y2VyUGF0aDogXCJwbUFwaVwiLFxuICAgIHRhZ1R5cGVzOiBbXCJUeXBlc1wiXSxcbiAgICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHtcbiAgICAgICAgYmFzZVVybDogYCR7QkFTRV9VUkx9YCxcbiAgICB9KSxcbiAgICBlbmRwb2ludHM6IChidWlsZGVyKSA9PiAoe1xuICAgICAgICBnZXRUeXBlczogYnVpbGRlci5xdWVyeSh7XG4gICAgICAgICAgICBxdWVyeTogKCkgPT4gYC90eXBlYCxcbiAgICAgICAgICAgIHByb3ZpZGVzVGFnczogW1wiVHlwZXNcIl0sXG4gICAgICAgICAgICB0cmFuc2Zvcm1SZXNwb25zZTogKHJlc3BvbnNlKSA9PiByZXNwb25zZS5yZXN1bHRzLnNvcnQoc29ydFR5cGVzKSxcbiAgICAgICAgfSksXG4gICAgfSksXG59KTtcbmV4cG9ydCBjb25zdCB7IHVzZUdldFR5cGVzUXVlcnkgfSA9IHBtQXBpO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IENoaXAsIFRleHRGaWVsZCwgSW5wdXRMYWJlbCwgTWVudUl0ZW0sIE91dGxpbmVkSW5wdXQsIFNlbGVjdCwgSW5wdXRBZG9ybm1lbnQsIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEJveCwgU3RhY2sgfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaFwiO1xuaW1wb3J0IHVzZUZpbHRlcnNMb2dpYyBmcm9tIFwic3JjL2hvb2tzL3VzZUZpbHRlcnNMb2dpY1wiO1xuaW1wb3J0IHsgZ2V0VHlwZUNvbG9yIH0gZnJvbSBcInNyYy91dGlscy91dGlsc1wiO1xuaW1wb3J0IFwiLi9IZWFkZXJGaWx0ZXJzLmNzc1wiO1xuY29uc3QgSVRFTV9IRUlHSFQgPSA0ODtcbmNvbnN0IElURU1fUEFERElOR19UT1AgPSA4O1xuY29uc3QgTWVudVByb3BzID0ge1xuICAgIFBhcGVyUHJvcHM6IHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG1heEhlaWdodDogSVRFTV9IRUlHSFQgKiA0LjUgKyBJVEVNX1BBRERJTkdfVE9QLFxuICAgICAgICAgICAgd2lkdGg6IDI1MCxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbmNvbnN0IEhlYWRlckZpbHRlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBoYW5kbGVDaGFuZ2VTZWxlY3QsIGhhbmRsZUNoYW5nZUlucHV0LCBhbGxUeXBlcywgc2VsZWN0ZWRUeXBlcywgaXNUeXBlc0FycmF5LCB9ID0gdXNlRmlsdGVyc0xvZ2ljKCk7XG4gICAgcmV0dXJuIChfanN4KEJveCwgeyBjaGlsZHJlbjogX2pzeHMoU3RhY2ssIHsgZGlyZWN0aW9uOiAnY29sdW1uJywgc3BhY2luZzogMiwgY2hpbGRyZW46IFtfanN4cyhCb3gsIHsgY2xhc3NOYW1lOiAnZmlsdGVyMScsIGNoaWxkcmVuOiBbX2pzeChJbnB1dExhYmVsLCB7IGlkOiAnZGVtby1tdWx0aXBsZS1jaGlwLWxhYmVsJywgY2hpbGRyZW46IFwiU2VhcmNoIGJ5IG5hbWVcIiB9KSwgX2pzeChUZXh0RmllbGQsIHsgc3g6IHsgd2lkdGg6IFwiMTAwJVwiIH0sIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VJbnB1dCwgdmFyaWFudDogJ291dGxpbmVkJywgcGxhY2Vob2xkZXI6ICdQaWthY2h1JywgSW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogKF9qc3goSW5wdXRBZG9ybm1lbnQsIHsgcG9zaXRpb246ICdzdGFydCcsIGNoaWxkcmVuOiBfanN4KFNlYXJjaEljb24sIHt9KSB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgaW5wdXRQcm9wczogeyBcImFyaWEtbGFiZWxcIjogXCJzZWFyY2ggYnkgbmFtZVwiIH0gfSldIH0pLCBfanN4cyhCb3gsIHsgY2xhc3NOYW1lOiAnZmlsdGVyMicsIGNoaWxkcmVuOiBbX2pzeChJbnB1dExhYmVsLCB7IGlkOiAnZGVtby1tdWx0aXBsZS1jaGlwLWxhYmVsJywgY2hpbGRyZW46IFwiU2VsZWN0IGJ5IHR5cGVcIiB9KSwgX2pzeChTZWxlY3QsIHsgbGFiZWxJZDogJ2RlbW8tbXVsdGlwbGUtY2hpcC1sYWJlbCcsIGlkOiAnZGVtby1tdWx0aXBsZS1jaGlwJywgbXVsdGlwbGU6IHRydWUsIHZhbHVlOiBzZWxlY3RlZFR5cGVzLCBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlU2VsZWN0LCBpbnB1dDogX2pzeChPdXRsaW5lZElucHV0LCB7IGlkOiAnc2VsZWN0LW11bHRpcGxlLWNoaXAnLCBsYWJlbDogJ1NlbGVjdCBieSB0eXBlJyB9KSwgcmVuZGVyVmFsdWU6IChzZWxlY3RlZCkgPT4gKF9qc3goQm94LCB7IHN4OiB7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4V3JhcDogXCJ3cmFwXCIsIGdhcDogMC41IH0sIGNoaWxkcmVuOiBzZWxlY3RlZC5tYXAoKHZhbHVlKSA9PiAoX2pzeChDaGlwLCB7IGxhYmVsOiB2YWx1ZSwgc3g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdldFR5cGVDb2xvcih2YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgdmFsdWUpKSkgfSkpLCBNZW51UHJvcHM6IE1lbnVQcm9wcywgc3g6IHsgd2lkdGg6IFwiMTAwJVwiIH0sIGNoaWxkcmVuOiBpc1R5cGVzQXJyYXkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsVHlwZXM/Lm1hcCgoeyBuYW1lIH0pID0+IChfanN4KE1lbnVJdGVtLCB7IHZhbHVlOiBuYW1lLCBjaGlsZHJlbjogbmFtZSB9LCBuYW1lKSkpIH0pXSB9KV0gfSkgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhlYWRlckZpbHRlcnM7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBUYWJsZVJvdywgVGFibGVDZWxsLCBJY29uQnV0dG9uLCBDb2xsYXBzZSwgQm94LCBUeXBvZ3JhcGh5LCBUYWJsZSwgVGFibGVIZWFkLCBUYWJsZUJvZHksIEF2YXRhciwgQ2hpcCwgU3RhY2ssIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBLZXlib2FyZEFycm93RG93bkljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0Rvd25cIjtcbmltcG9ydCBLZXlib2FyZEFycm93VXBJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dVcFwiO1xuaW1wb3J0IHsgZ2V0VHlwZUNvbG9yIH0gZnJvbSBcInNyYy91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuY29uc3Qgc3R5bGUgPSB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbn07XG5mdW5jdGlvbiBSb3cocHJvcHMpIHtcbiAgICBjb25zdCB7IHJvdyB9ID0gcHJvcHM7XG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpKTtcbiAgICBjb25zdCBhdmF0YXJTaXplID0gaXNNb2JpbGUgPyA1MCA6IDk1O1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoVGFibGVSb3csIHsgc3g6IHsgXCImID4gKlwiOiB7IGJvcmRlckJvdHRvbTogXCJ1bnNldFwiIH0gfSwgY2hpbGRyZW46IFtfanN4KFRhYmxlQ2VsbCwgeyBjaGlsZHJlbjogX2pzeChJY29uQnV0dG9uLCB7IFwiYXJpYS1sYWJlbFwiOiAnZXhwYW5kIHJvdycsIHNpemU6ICdzbWFsbCcsIG9uQ2xpY2s6ICgpID0+IHNldE9wZW4oIW9wZW4pLCBjaGlsZHJlbjogb3BlbiA/IF9qc3goS2V5Ym9hcmRBcnJvd1VwSWNvbiwge30pIDogX2pzeChLZXlib2FyZEFycm93RG93bkljb24sIHt9KSB9KSB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogcm93Lm5hbWUgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgc3g6IHN0eWxlLCBzaXplOiAnbWVkaXVtJywgY2hpbGRyZW46IF9qc3goQXZhdGFyLCB7IHN4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdmF0YXJTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF2YXRhclNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgc3JjOiByb3cuaW1nLCBhbHQ6IGAke3Jvdy5uYW1lfSBwaG90b2AgfSkgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IF9qc3goU3RhY2ssIHsganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBkaXJlY3Rpb246ICdyb3cnLCBzcGFjaW5nOiAxLCBjaGlsZHJlbjogcm93LnR5cGVzLm1hcCgodHlwZSkgPT4gKF9qc3goQ2hpcCwgeyBzaXplOiAnc21hbGwnLCBzeDogeyBiYWNrZ3JvdW5kQ29sb3I6IGdldFR5cGVDb2xvcih0eXBlKSwgY29sb3I6IFwid2hpdGVcIiB9LCBsYWJlbDogdHlwZSB9LCB0eXBlKSkpIH0pIH0pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiByb3cuYWJpbGl0aWVzLm1hcCgoaXRlbSkgPT4gKF9qc3goQm94LCB7IHN4OiB7IG1hcmdpbjogMSB9LCBjaGlsZHJlbjogaXRlbSB9LCBpdGVtKSkpIH0pXSB9KSwgX2pzeChUYWJsZVJvdywgeyBjaGlsZHJlbjogX2pzeChUYWJsZUNlbGwsIHsgc3g6IHsgcGFkZGluZ0JvdHRvbTogMCwgcGFkZGluZ1RvcDogMCB9LCBjb2xTcGFuOiA2LCBjaGlsZHJlbjogX2pzeChDb2xsYXBzZSwgeyBpbjogb3BlbiwgdGltZW91dDogJ2F1dG8nLCB1bm1vdW50T25FeGl0OiB0cnVlLCBjaGlsZHJlbjogX2pzeHMoQm94LCB7IHN4OiB7IG1hcmdpbjogMSB9LCBjaGlsZHJlbjogW19qc3goVHlwb2dyYXBoeSwgeyB2YXJpYW50OiAnaDYnLCBndXR0ZXJCb3R0b206IHRydWUsIGNvbXBvbmVudDogJ2RpdicsIGNoaWxkcmVuOiBcIkRldGFpbHNcIiB9KSwgX2pzeHMoVGFibGUsIHsgc2l6ZTogJ3NtYWxsJywgXCJhcmlhLWxhYmVsXCI6ICdwdXJjaGFzZXMnLCBjaGlsZHJlbjogW19qc3goVGFibGVIZWFkLCB7IGNoaWxkcmVuOiBfanN4cyhUYWJsZVJvdywgeyBjaGlsZHJlbjogW19qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IFwiSGVpZ2h0XCIgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IFwiV2VpZ2h0XCIgfSldIH0pIH0pLCBfanN4KFRhYmxlQm9keSwgeyBjaGlsZHJlbjogX2pzeHMoVGFibGVSb3csIHsgY2hpbGRyZW46IFtfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiByb3cuaGVpZ2h0IH0pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiByb3cud2VpZ2h0IH0pXSB9LCByb3cuaWQpIH0pXSB9KV0gfSkgfSkgfSkgfSldIH0pKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFJvdztcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBQYXBlciwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUNvbnRhaW5lciwgVGFibGVIZWFkLCBUYWJsZVBhZ2luYXRpb24sIFRhYmxlUm93LCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdXNlVGFibGVMb2dpYyBmcm9tIFwic3JjL2hvb2tzL3VzZVRhYmxlTG9naWNcIjtcbmltcG9ydCBSb3cgZnJvbSBcIi4vUm93XCI7XG5jb25zdCBzdHlsZXMgPSB7XG4gICAgXCIuTXVpVG9vbGJhci1yb290XCI6IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IFwiNHB4XCIsXG4gICAgfSxcbiAgICBcIiYuTXVpVGFibGVQYWdpbmF0aW9uLXJvb3RcIjoge1xuICAgICAgICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXG4gICAgfSxcbn07XG5jb25zdCBUYWJsZUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBoYW5kbGVQYWdlQ2hhbmdlLCBoYW5kbGVQYWdlU2l6ZUNoYW5nZSwgcG1zT25QYWdlLCBwYWdlLCBwZXJQYWdlLCB0b3RhbENvdW50LCBwYWRkaW5nVmFsdWUsIH0gPSB1c2VUYWJsZUxvZ2ljKCk7XG4gICAgcmV0dXJuIChfanN4cyhUYWJsZUNvbnRhaW5lciwgeyBjb21wb25lbnQ6IFBhcGVyLCBjaGlsZHJlbjogW19qc3hzKFRhYmxlLCB7IHBhZGRpbmc6IHBhZGRpbmdWYWx1ZSwgXCJhcmlhLWxhYmVsXCI6ICdjb2xsYXBzaWJsZSB0YWJsZScsIGNoaWxkcmVuOiBbX2pzeChUYWJsZUhlYWQsIHsgY2hpbGRyZW46IF9qc3hzKFRhYmxlUm93LCB7IGNoaWxkcmVuOiBbX2pzeChUYWJsZUNlbGwsIHt9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogXCJOYW1lXCIgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IFwiQXZhdGFyXCIgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IFwiVHlwZVwiIH0pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiBcIkFiaWxpdGllc1wiIH0pXSB9KSB9KSwgX2pzeChUYWJsZUJvZHksIHsgY2hpbGRyZW46IHBtc09uUGFnZS5tYXAoKHJvdykgPT4gKF9qc3goUm93LCB7IHJvdzogcm93IH0sIHJvdy5pZCkpKSB9KV0gfSksIF9qc3goVGFibGVQYWdpbmF0aW9uLCB7IGNvbXBvbmVudDogJ2RpdicsIGNvdW50OiB0b3RhbENvdW50LCBwYWdlOiBwYWdlLCBvblBhZ2VDaGFuZ2U6IGhhbmRsZVBhZ2VDaGFuZ2UsIHJvd3NQZXJQYWdlOiBwZXJQYWdlLCBvblJvd3NQZXJQYWdlQ2hhbmdlOiBoYW5kbGVQYWdlU2l6ZUNoYW5nZSwgc2l6ZTogJ3NtYWxsJywgc3g6IHN0eWxlcyB9KV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFRhYmxlQ29udGVudDtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IEFsZXJ0LCBTa2VsZXRvbiwgU3RhY2sgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHVzZVRhYmxlQ29udGFpbmVyTG9naWMgZnJvbSBcInNyYy9ob29rcy91c2VUYWJsZUNvbnRhaW5lckxvZ2ljXCI7XG5pbXBvcnQgVGFibGVDb250ZW50IGZyb20gXCIuL1RhYmxlQ29udGVudFwiO1xuY29uc3QgVGFibGVXcmFwcGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBlcnJvciB9ID0gdXNlVGFibGVDb250YWluZXJMb2dpYygpO1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICB9LCBjaGlsZHJlbjogaXNMb2FkaW5nICYmICFlcnJvciA/IChfanN4cyhTdGFjaywgeyBkaXJlY3Rpb246ICdjb2x1bW4nLCB3aWR0aDogJzEwMCUnLCBzcGFjaW5nOiAyLCBjaGlsZHJlbjogW19qc3goU2tlbGV0b24sIHsgYW5pbWF0aW9uOiAnd2F2ZScsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzVlbScgfSksIF9qc3goU2tlbGV0b24sIHsgYW5pbWF0aW9uOiAnd2F2ZScsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzVlbScgfSksIF9qc3goU2tlbGV0b24sIHsgYW5pbWF0aW9uOiAnd2F2ZScsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzVlbScgfSldIH0pKSA6IChfanN4KFRhYmxlQ29udGVudCwge30pKSB9KSwgZXJyb3IgJiYgX2pzeChBbGVydCwgeyBzZXZlcml0eTogJ2Vycm9yJywgY2hpbGRyZW46IGVycm9yIH0pXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGFibGVXcmFwcGVyO1xuIiwiZXhwb3J0IGNvbnN0IElOSVRJQUxfUEFHRV9TSVpFID0gMjU7XG5leHBvcnQgY29uc3QgVE9UQUxfUk9XUyA9IDEwMDtcbmV4cG9ydCBjb25zdCBGSVJTVF9QQUdFID0gMDtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGZldGNoUG1zVGh1bmsgfSBmcm9tIFwic3JjL21pZGRsZXdhcmUvdGh1bmtzXCI7XG5pbXBvcnQgeyBUT1RBTF9ST1dTIH0gZnJvbSBcInNyYy9jb25zdGFudHNcIjtcbmNvbnN0IHVzZUFwcExvZ2ljID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBmZXRjaEluaXRpYWwgPSBmZXRjaFBtc1RodW5rKGRpc3BhdGNoKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaEluaXRpYWwoVE9UQUxfUk9XUyk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7fTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VBcHBMb2dpYztcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlR2V0VHlwZXNRdWVyeSB9IGZyb20gXCJzcmMvYXBpL3VzZUdldFBtQXBpXCI7XG5pbXBvcnQgeyBmaWx0ZXJCeU5hbWUsIGZpbHRlckJ5VHlwZSB9IGZyb20gXCJzcmMvc3RhdGUvYWN0aW9uc1wiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwic3JjL3V0aWxzL3V0aWxzXCI7XG5jb25zdCB1c2VGaWx0ZXJzTG9naWMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhOiBhbGxUeXBlcyB9ID0gdXNlR2V0VHlwZXNRdWVyeSgpO1xuICAgIGNvbnN0IFtzZWxlY3RlZFR5cGVzLCBzZXRTZWxlY3RlZFR5cGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU2VsZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0OiB7IHZhbHVlIH0sIH0gPSBldmVudDtcbiAgICAgICAgY29uc3QgdmFsID0gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gdmFsdWUuc3BsaXQoXCIsXCIpIDogdmFsdWU7XG4gICAgICAgIHNldFNlbGVjdGVkVHlwZXModmFsKTtcbiAgICAgICAgZGlzcGF0Y2goZmlsdGVyQnlUeXBlKHZhbCkpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAoZSkgPT4ge1xuICAgICAgICBkZWJvdW5jZSgoKSA9PiBkaXNwYXRjaChmaWx0ZXJCeU5hbWUoZS50YXJnZXQudmFsdWUpKSwgNTAwKSgpO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGFuZGxlQ2hhbmdlU2VsZWN0LFxuICAgICAgICBoYW5kbGVDaGFuZ2VJbnB1dCxcbiAgICAgICAgYWxsVHlwZXMsXG4gICAgICAgIHNlbGVjdGVkVHlwZXMsXG4gICAgICAgIGlzVHlwZXNBcnJheTogYWxsVHlwZXMgJiYgQXJyYXkuaXNBcnJheShhbGxUeXBlcyksXG4gICAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VGaWx0ZXJzTG9naWM7XG4iLCJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2VsZWN0RXJyb3IsIHNlbGVjdElzTG9hZGluZyB9IGZyb20gXCJzcmMvc3RhdGUvc2VsZWN0b3JzXCI7XG5jb25zdCB1c2VMaXN0TG9naWMgPSAoKSA9PiB7XG4gICAgY29uc3QgaXNMb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNMb2FkaW5nKTtcbiAgICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKHNlbGVjdEVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBpc0xvYWRpbmcsXG4gICAgICAgIGVycm9yLFxuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlTGlzdExvZ2ljO1xuIiwiaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBjaGFuZ2VQYWdlLCBjaGFuZ2VQYWdlU2l6ZSB9IGZyb20gXCJzcmMvc3RhdGUvYWN0aW9uc1wiO1xuaW1wb3J0IHsgc2VsZWN0UGFnZSwgc2VsZWN0UGVyUGFnZSwgc2VsZWN0U2xpY2VkUG1zLCBzZWxlY3RUb3RhbFBhZ2VzLCB9IGZyb20gXCJzcmMvc3RhdGUvc2VsZWN0b3JzXCI7XG5jb25zdCB1c2VUYWJsZUxvZ2ljID0gKCkgPT4ge1xuICAgIGNvbnN0IHBtc09uUGFnZSA9IHVzZVNlbGVjdG9yKHNlbGVjdFNsaWNlZFBtcyk7XG4gICAgY29uc3QgcGFnZSA9IHVzZVNlbGVjdG9yKHNlbGVjdFBhZ2UpO1xuICAgIGNvbnN0IHBlclBhZ2UgPSB1c2VTZWxlY3RvcihzZWxlY3RQZXJQYWdlKTtcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gdXNlU2VsZWN0b3Ioc2VsZWN0VG90YWxQYWdlcyk7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICAgIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xuICAgIGNvbnN0IHBhZGRpbmdWYWx1ZSA9IGlzTW9iaWxlID8gXCJub25lXCIgOiBcIm5vcm1hbFwiO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKGUsIG5ld1BhZ2UpID0+IGRpc3BhdGNoKGNoYW5nZVBhZ2UobmV3UGFnZSkpO1xuICAgIGNvbnN0IGhhbmRsZVBhZ2VTaXplQ2hhbmdlID0gKGUpID0+IGRpc3BhdGNoKGNoYW5nZVBhZ2VTaXplKCtlLnRhcmdldC52YWx1ZSkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGhhbmRsZVBhZ2VDaGFuZ2UsXG4gICAgICAgIGhhbmRsZVBhZ2VTaXplQ2hhbmdlLFxuICAgICAgICBwbXNPblBhZ2UsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIHBlclBhZ2UsXG4gICAgICAgIHRvdGFsQ291bnQ6IHRvdGFsUGFnZXMgKiBwZXJQYWdlLFxuICAgICAgICBwYWRkaW5nVmFsdWUsXG4gICAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VUYWJsZUxvZ2ljO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0YXRlL3N0b3JlXCI7XG5pbXBvcnQgXCJAZm9udHNvdXJjZS9yb2JvdG8vbGF0aW4tNDAwLmNzc1wiO1xuaW1wb3J0IFwiQGZvbnRzb3VyY2Uvcm9ib3RvL2xhdGluLTUwMC5jc3NcIjtcblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKS5yZW5kZXIoX2pzeChSZWFjdC5TdHJpY3RNb2RlLCB7IGNoaWxkcmVuOiBfanN4KFByb3ZpZGVyLCB7IHN0b3JlOiBzdG9yZSwgY2hpbGRyZW46IF9qc3goQXBwLCB7fSkgfSkgfSkpO1xuIiwiaW1wb3J0IHsgRklSU1RfUEFHRSB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmZXRjaFBtcywgZmV0Y2hQbXNFcnJvciwgZmV0Y2hJc0xvYWRpbmcgfSBmcm9tIFwic3JjL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IGV4dHJhY3RNYWluSW5mbyB9IGZyb20gXCJzcmMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4uL2FwaS91c2VHZXRQbUFwaVwiO1xuZXhwb3J0IGNvbnN0IGZldGNoUG1zVGh1bmsgPSAoZGlzcGF0Y2gpID0+IGFzeW5jICh0b3RhbFJvd3MpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaElzTG9hZGluZyh0cnVlKSk7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaWQgPSBGSVJTVF9QQUdFICsgMTsgaWQgPD0gdG90YWxSb3dzOyBpZCsrKSB7XG4gICAgICAgICAgICByZXF1ZXN0cy5wdXNoKGZldGNoKGAke0JBU0VfVVJMfS9wb2tlbW9uLyR7aWR9YClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBQb2tlbW9uIGRhdGFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBleHRyYWN0TWFpbkluZm8oZGF0YSkpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpO1xuICAgICAgICBkaXNwYXRjaChmZXRjaFBtcyhkYXRhKSk7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoSXNMb2FkaW5nKGZhbHNlKSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcilcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoUG1zRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuZXhwb3J0IGNvbnN0IGZldGNoUG1zID0gY3JlYXRlQWN0aW9uKFwiRkVUQ0hfUE1TXCIpO1xuZXhwb3J0IGNvbnN0IGZldGNoUG1zRXJyb3IgPSBjcmVhdGVBY3Rpb24oXCJGRVRDSF9QTVNfRVJST1JcIik7XG5leHBvcnQgY29uc3QgZmV0Y2hJc0xvYWRpbmcgPSBjcmVhdGVBY3Rpb24oXCJGRVRDSF9QTVNfSVNfTE9BRElOR1wiKTtcbmV4cG9ydCBjb25zdCBmaWx0ZXJCeU5hbWUgPSBjcmVhdGVBY3Rpb24oXCJGSUxURVJfQllfTkFNRVwiKTtcbmV4cG9ydCBjb25zdCBmaWx0ZXJCeVR5cGUgPSBjcmVhdGVBY3Rpb24oXCJGSUxURVJfQllfVFlQRVwiKTtcbmV4cG9ydCBjb25zdCBjbGVhckZpbHRlciA9IGNyZWF0ZUFjdGlvbihcIkNMRUFSX0ZJTFRFUlwiKTtcbmV4cG9ydCBjb25zdCBvcGVuTW9kYWwgPSBjcmVhdGVBY3Rpb24oXCJPUEVOX01PREFMXCIpO1xuZXhwb3J0IGNvbnN0IGNsb3NlTW9kYWwgPSBjcmVhdGVBY3Rpb24oXCJDTE9TRV9NT0RBTFwiKTtcbmV4cG9ydCBjb25zdCBjaGFuZ2VQYWdlID0gY3JlYXRlQWN0aW9uKFwiQ0hBTkdFX1BBR0VcIik7XG5leHBvcnQgY29uc3QgY2hhbmdlUGFnZVNpemUgPSBjcmVhdGVBY3Rpb24oXCJDSEFOR0VfUEFHRV9TSVpFXCIpO1xuIiwiaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBGSVJTVF9QQUdFLCBJTklUSUFMX1BBR0VfU0laRSwgVE9UQUxfUk9XUyB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjaGFuZ2VQYWdlLCBjaGFuZ2VQYWdlU2l6ZSwgZmV0Y2hJc0xvYWRpbmcsIGZldGNoUG1zLCBmZXRjaFBtc0Vycm9yLCBmaWx0ZXJCeU5hbWUsIGZpbHRlckJ5VHlwZSwgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5jb25zdCBpbml0aWFsID0ge1xuICAgIHBtc1VJOiBbXSxcbiAgICBzZWFyY2g6IHsgYnlOYW1lOiBcIlwiLCBieVR5cGVzOiBbXSB9LFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgcGFnZTogRklSU1RfUEFHRSxcbiAgICAgICAgcGVyUGFnZTogSU5JVElBTF9QQUdFX1NJWkUsXG4gICAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbChUT1RBTF9ST1dTIC8gSU5JVElBTF9QQUdFX1NJWkUpLFxuICAgIH0sXG4gICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxufTtcbmV4cG9ydCBjb25zdCBwbUxpc3RSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihpbml0aWFsLCAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXJcbiAgICAgICAgLmFkZENhc2UoZmV0Y2hQbXNFcnJvciwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGZldGNoSXNMb2FkaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGZldGNoUG1zLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgcG1zVUk6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSlcbiAgICAgICAgLmFkZENhc2UoZmlsdGVyQnlOYW1lLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXdQYWdpbmF0aW9uID0geyAuLi5zdGF0ZS5wYWdpbmF0aW9uLCBwYWdlOiAwIH07XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiBuZXdQYWdpbmF0aW9uLFxuICAgICAgICAgICAgc2VhcmNoOiB7IC4uLnN0YXRlLnNlYXJjaCwgYnlOYW1lOiBhY3Rpb24ucGF5bG9hZCB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSlcbiAgICAgICAgLmFkZENhc2UoZmlsdGVyQnlUeXBlLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXdQYWdpbmF0aW9uID0geyAuLi5zdGF0ZS5wYWdpbmF0aW9uLCBwYWdlOiAwIH07XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiBuZXdQYWdpbmF0aW9uLFxuICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUuc2VhcmNoLFxuICAgICAgICAgICAgICAgIGJ5VHlwZXM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGNoYW5nZVBhZ2UsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2luYXRpb25OZXcgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5wYWdpbmF0aW9uLFxuICAgICAgICAgICAgcGFnZTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiBwYWdpbmF0aW9uTmV3LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSlcbiAgICAgICAgLmFkZENhc2UoY2hhbmdlUGFnZVNpemUsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHBlclBhZ2UgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbChzdGF0ZS5wbXNVSS5sZW5ndGggLyBwZXJQYWdlKTtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbk5ldyA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLnBhZ2luYXRpb24sXG4gICAgICAgICAgICBwYWdlOiAwLFxuICAgICAgICAgICAgcGVyUGFnZTogcGVyUGFnZSxcbiAgICAgICAgICAgIHRvdGFsUGFnZXM6IHRvdGFsUGFnZXMsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSwgcGFnaW5hdGlvbjogcGFnaW5hdGlvbk5ldyB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSk7XG59KTtcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmV4cG9ydCBjb25zdCBzZWxlY3RQbXMgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIucG1zVUk7XG5leHBvcnQgY29uc3Qgc2VsZWN0UGFnZSA9IChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlci5wYWdpbmF0aW9uLnBhZ2U7XG5leHBvcnQgY29uc3Qgc2VsZWN0UGVyUGFnZSA9IChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlci5wYWdpbmF0aW9uLnBlclBhZ2U7XG5leHBvcnQgY29uc3Qgc2VsZWN0RmlsdGVyZWRQbXMgPSBjcmVhdGVTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIsICh7IHBtc1VJLCBzZWFyY2ggfSkgPT4ge1xuICAgIGNvbnN0IHsgYnlOYW1lLCBieVR5cGVzIH0gPSBzZWFyY2g7XG4gICAgY29uc3QgZmlsdGVyZWRQbXMgPSBwbXNVSS5maWx0ZXIoKHBtKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTmFtZU1hdGNoID0gcG0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ5TmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgY29uc3QgaXNUeXBlTWF0Y2ggPSBieVR5cGVzLmxlbmd0aCA9PT0gMCB8fCBwbS50eXBlcy5zb21lKCh0eXBlKSA9PiBieVR5cGVzLmluY2x1ZGVzKHR5cGUpKTtcbiAgICAgICAgcmV0dXJuIGlzTmFtZU1hdGNoICYmIGlzVHlwZU1hdGNoO1xuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFBtcztcbn0pO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFNsaWNlZFBtcyA9IGNyZWF0ZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlciwgc2VsZWN0RmlsdGVyZWRQbXMsICh7IHBhZ2luYXRpb24gfSwgZmlsdGVyZWRQbXMpID0+IHtcbiAgICBjb25zdCB7IHBlclBhZ2UsIHBhZ2UgfSA9IHBhZ2luYXRpb247XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHBlclBhZ2UgKiBwYWdlO1xuICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIHBlclBhZ2U7XG4gICAgY29uc3Qgc2xpY2VkUG1zID0gZmlsdGVyZWRQbXMuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuICAgIHJldHVybiBzbGljZWRQbXM7XG59KTtcbmV4cG9ydCBjb25zdCBzZWxlY3RUb3RhbFBhZ2VzID0gY3JlYXRlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wbUxpc3RSZWR1Y2VyLCBzZWxlY3RGaWx0ZXJlZFBtcywgKHsgcGFnaW5hdGlvbiB9LCBmaWx0ZXJlZFBtcykgPT4ge1xuICAgIGNvbnN0IHsgcGVyUGFnZSB9ID0gcGFnaW5hdGlvbjtcbiAgICBjb25zdCBzbGljZWRQbXMgPSBNYXRoLmNlaWwoZmlsdGVyZWRQbXMubGVuZ3RoIC8gcGVyUGFnZSk7XG4gICAgcmV0dXJuIHNsaWNlZFBtcztcbn0pO1xuZXhwb3J0IGNvbnN0IHNlbGVjdElzTG9hZGluZyA9IChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlci5pc0xvYWRpbmc7XG5leHBvcnQgY29uc3Qgc2VsZWN0RXJyb3IgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIuZXJyb3I7XG4iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBwbUxpc3RSZWR1Y2VyIH0gZnJvbSBcIi4vcmVkdWNlclwiO1xuaW1wb3J0IHsgcG1BcGkgfSBmcm9tIFwiLi4vYXBpL3VzZUdldFBtQXBpXCI7XG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiB7XG4gICAgICAgIFtwbUFwaS5yZWR1Y2VyUGF0aF06IHBtQXBpLnJlZHVjZXIsXG4gICAgICAgIHBtTGlzdFJlZHVjZXI6IHBtTGlzdFJlZHVjZXIsXG4gICAgfSxcbiAgICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+IGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KHBtQXBpLm1pZGRsZXdhcmUpLFxufSk7XG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsImV4cG9ydCBjb25zdCBleHRyYWN0TWFpbkluZm8gPSAocG9rZW1vbikgPT4ge1xuICAgIGNvbnN0IHsgaWQsIG5hbWUsIHNwcml0ZXMsIHR5cGVzLCBhYmlsaXRpZXMsIGhlaWdodCwgd2VpZ2h0LCB9ID0gcG9rZW1vbjtcbiAgICBjb25zdCBwbSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHR5cGVzOiB0eXBlcy5tYXAoKGl0ZW0pID0+IGl0ZW0udHlwZS5uYW1lKSxcbiAgICAgICAgYWJpbGl0aWVzOiBhYmlsaXRpZXMubWFwKChpdGVtKSA9PiBpdGVtLmFiaWxpdHkubmFtZSksXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgd2VpZ2h0LFxuICAgICAgICBpbWc6IHNwcml0ZXMuZnJvbnRfZGVmYXVsdCxcbiAgICB9O1xuICAgIHJldHVybiBwbTtcbn07XG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZiwgdGltZSkgPT4ge1xuICAgIGxldCB0aW1lb3V0SWQgPSBudWxsO1xuICAgIGNvbnN0IGZ1bmN0aW9uQ2FsbCA9ICgpID0+IHtcbiAgICAgICAgdGltZW91dElkID0gbnVsbDtcbiAgICAgICAgZigpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGRlYm91bmNlZEZ1bmN0aW9uKC4uLmFyZykge1xuICAgICAgICBpZiAodGltZW91dElkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb25DYWxsLCB0aW1lLCAuLi5hcmcpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5leHBvcnQgY29uc3Qgc29ydFR5cGVzID0gKGEsIGIpID0+IHtcbiAgICBpZiAoYS5uYW1lIDwgYi5uYW1lKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGEubmFtZSA+IGIubmFtZSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuZXhwb3J0IGNvbnN0IGdldFR5cGVDb2xvciA9ICh0eXBlTmFtZSkgPT4ge1xuICAgIHN3aXRjaCAodHlwZU5hbWUpIHtcbiAgICAgICAgY2FzZSBcImJ1Z1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzk0N2MxNVwiO1xuICAgICAgICBjYXNlIFwiZGFya1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzgwODA4MFwiO1xuICAgICAgICBjYXNlIFwiZHJhZ29uXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjNkYzNUZDXCI7XG4gICAgICAgIGNhc2UgXCJlbGVjdHJpY1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiI2I5OWYxYVwiO1xuICAgICAgICBjYXNlIFwiZmFpcnlcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiNjOTFjNzJcIjtcbiAgICAgICAgY2FzZSBcImZpZ2h0aW5nXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjQzIyRTI4XCI7XG4gICAgICAgIGNhc2UgXCJmaXJlXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjY2M1NzAwXCI7XG4gICAgICAgIGNhc2UgXCJmbHlpbmdcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM4ZTc5YzlcIjtcbiAgICAgICAgY2FzZSBcImdob3N0XCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjNzM1Nzk3XCI7XG4gICAgICAgIGNhc2UgXCJncmFzc1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzRmODAzMlwiO1xuICAgICAgICBjYXNlIFwiZ3JvdW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjNjE1ODUyXCI7XG4gICAgICAgIGNhc2UgXCJpY2VcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM3Mjk3OWVcIjtcbiAgICAgICAgY2FzZSBcIm5vcm1hbFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzgwODA4MFwiO1xuICAgICAgICBjYXNlIFwicG9pc29uXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjODE1MWI4XCI7XG4gICAgICAgIGNhc2UgXCJwc3ljaGljXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjRjk1NTg3XCI7XG4gICAgICAgIGNhc2UgXCJyb2NrXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjQjZBMTM2XCI7XG4gICAgICAgIGNhc2UgXCJzaGFkb3dcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiMzMzMzMzNcIjtcbiAgICAgICAgY2FzZSBcInN0ZWVsXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjN2M3YzhhXCI7XG4gICAgICAgIGNhc2UgXCJ1bmtub3duXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjNjhBMDkwXCI7XG4gICAgICAgIGNhc2UgXCJ3YXRlclwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzI1NDg5NFwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFwiIzgwODA4MCBcIjtcbiAgICB9XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2VjbGlwc2VfYXNzaWdubWVudFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtlY2xpcHNlX2Fzc2lnbm1lbnRcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX211aV9pY29ucy1tYXRlcmlhbF9LZXlib2FyZEFycm93RG93bl9qcy1ub2RlX21vZHVsZXNfbXVpX2ljb25zLW1hdGVyaWFsXy00NWNlMmFcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHN4XCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=