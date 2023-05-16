/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1684238245014
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
/* harmony import */ var _components_HeaderFilters_HeaderFilters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/HeaderFilters/HeaderFilters */ "./src/components/HeaderFilters/HeaderFilters.tsx");
/* harmony import */ var _components_Table_TableWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Table/TableWrapper */ "./src/components/Table/TableWrapper.tsx");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _hooks_useAppLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useAppLogic */ "./src/hooks/useAppLogic.ts");






const App = () => {
    const logic = (0,_hooks_useAppLogic__WEBPACK_IMPORTED_MODULE_3__["default"])();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_4__["default"], { maxWidth: 'lg', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { direction: 'column', spacing: 3, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: 'h2', component: 'h1', children: "Pokemons" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_HeaderFilters_HeaderFilters__WEBPACK_IMPORTED_MODULE_1__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Table_TableWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {})] }) }));
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
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js");

const BASE_URL = "https://pokeapi.co/api/v2";
const pmApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "pmApi",
    tagTypes: ["Types"],
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.fetchBaseQuery)({
        baseUrl: `${BASE_URL}`,
    }),
    endpoints: (builder) => ({
        getTypes: builder.query({
            query: () => `/type`,
            providesTags: ["Types"],
            transformResponse: (response) => response.results,
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/Box/Box.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/Stack/Stack.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var src_hooks_useFiltersLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/hooks/useFiltersLogic */ "./src/hooks/useFiltersLogic.ts");





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
    const { handleChangeSelect, handleChangeInput, allTypes, selectedTypes } = (0,src_hooks_useFiltersLogic__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_2__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_3__["default"], { direction: 'column', spacing: 2, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { id: 'demo-multiple-chip-label', children: "Search by name" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { sx: { ml: 1, flex: 1 }, onChange: handleChangeInput, variant: 'outlined', placeholder: 'Pikachu', InputProps: {
                        startAdornment: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { position: 'start', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_7__["default"], {}) })),
                    }, inputProps: { "aria-label": "search by name" } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { id: 'demo-multiple-chip-label', children: "Select by type" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { labelId: 'demo-multiple-chip-label', id: 'demo-multiple-chip', multiple: true, value: selectedTypes, onChange: handleChangeSelect, input: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], { id: 'select-multiple-chip', label: 'Select by type' }), renderValue: (selected) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_2__["default"], { sx: { display: "flex", flexWrap: "wrap", gap: 0.5 }, children: selected.map((value) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { label: value }, value))) })), MenuProps: MenuProps, children: allTypes &&
                        allTypes.map(({ name }) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { value: name, children: name }, name))) })] }) }));
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Collapse/Collapse.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowUp */ "./node_modules/@mui/icons-material/KeyboardArrowUp.js");





function Row(props) {
    const { row } = props;
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], { sx: { "& > *": { borderBottom: "unset" } }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { "aria-label": 'expand row', size: 'small', onClick: () => setOpen(!open), children: open ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_5__["default"], {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_6__["default"], {}) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { align: 'center', children: row.name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { align: 'center', style: { display: "flex", justifyContent: "center" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { src: row.img, alt: `${row.name} photo` }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { align: 'center', children: row.types.map((item) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { label: item }, item))) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { align: 'center', children: row.species })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { style: { paddingBottom: 0, paddingTop: 0 }, colSpan: 6, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], { in: open, timeout: 'auto', unmountOnExit: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { sx: { margin: 1 }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { variant: 'h6', gutterBottom: true, component: 'div', children: "Details" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { size: 'small', "aria-label": 'purchases', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { align: 'center', children: "Forms" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { align: 'center', children: "Abilities" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { align: 'center', children: row.forms.join(", ") }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { align: 'center', children: row.abilities.map((item) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { sx: { margin: 1 }, children: item }, item))) })] }, row.id) })] })] }) }) }) })] }));
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
    const { handlePageChange, handlePageSizeChange, filteredPms, page, perPage, totalCount, } = (0,src_hooks_useTableLogic__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { component: _mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { "aria-label": 'collapsible table', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { align: 'center', children: "Name" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { align: 'center', children: "Avatar" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { align: 'center', children: "Type" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { align: 'center', children: "Species" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], { children: filteredPms.map((row) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_2__["default"], { row: row }, row.id))) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { component: 'div', count: totalCount, page: page, onPageChange: handlePageChange, rowsPerPage: perPage, onRowsPerPageChange: handlePageSizeChange })] }));
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var src_hooks_useTableContainerLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/hooks/useTableContainerLogic */ "./src/hooks/useTableContainerLogic.ts");
/* harmony import */ var _TableContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableContent */ "./src/components/Table/TableContent.tsx");




const TableWrapper = () => {
    const { isLoading, error } = (0,src_hooks_useTableContainerLogic__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: "flex", justifyContent: "center" }, children: isLoading && !error ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TableContent__WEBPACK_IMPORTED_MODULE_2__["default"], {}) }), error && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { severity: 'error', children: error })] }));
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
        dispatch((0,src_state_actions__WEBPACK_IMPORTED_MODULE_3__.filterByName)(e.target.value));
    };
    return { handleChangeSelect, handleChangeInput, allTypes, selectedTypes };
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var src_state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/state/actions */ "./src/state/actions.ts");
/* harmony import */ var src_state_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/state/selectors */ "./src/state/selectors.ts");



const useTableLogic = () => {
    const filteredPms = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(src_state_selectors__WEBPACK_IMPORTED_MODULE_2__.selectFilteredPms);
    const page = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(src_state_selectors__WEBPACK_IMPORTED_MODULE_2__.selectPage);
    const perPage = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(src_state_selectors__WEBPACK_IMPORTED_MODULE_2__.selectPerPage);
    const totalPages = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(src_state_selectors__WEBPACK_IMPORTED_MODULE_2__.selectTotalPages);
    console.log("brr", totalPages);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
    const handlePageChange = (e, newPage) => dispatch((0,src_state_actions__WEBPACK_IMPORTED_MODULE_1__.changePage)(newPage));
    const handlePageSizeChange = (e) => dispatch((0,src_state_actions__WEBPACK_IMPORTED_MODULE_1__.changePageSize)(+e.target.value));
    return {
        handlePageChange,
        handlePageSizeChange,
        filteredPms,
        page,
        perPage,
        totalCount: totalPages * perPage,
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
                    throw new Error("Failed to fetch Pokémon data");
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
/* harmony export */   "selectTotalPages": () => (/* binding */ selectTotalPages)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/reselect/es/index.js");

const selectPms = (state) => state.pmListReducer.pmsUI;
const selectPage = (state) => state.pmListReducer.pagination.page;
const selectPerPage = (state) => state.pmListReducer.pagination.perPage;
const selectTotalPages = (state) => state.pmListReducer.pagination.totalPages;
const selectFilteredPms = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)((state) => state.pmListReducer, ({ pmsUI, search, pagination }) => {
    const { byName, byTypes } = search;
    const { perPage, page } = pagination;
    const filteredPms = pmsUI.filter((pm) => {
        const isNameMatch = pm.name.toLowerCase().includes(byName.toLowerCase());
        const isTypeMatch = byTypes.length === 0 || pm.types.some((type) => byTypes.includes(type));
        return isNameMatch && isTypeMatch;
    });
    const startIndex = perPage * page;
    const endIndex = startIndex + perPage;
    const slicedPms = filteredPms.slice(startIndex, endIndex);
    return slicedPms;
});
// Math.ceil(selectFilteredPms.length);
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
/* harmony export */   "extractMainInfo": () => (/* binding */ extractMainInfo)
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_mui_icons-material_KeyboardArrowDown_js-node_modules_mui_icons-material_-44fd97"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNGUxNmNlODk1ODc2OWIzMTRjZDIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMseUpBQTBFLGNBQWMsZUFBZTtBQUNySSxNQUFNLFVBQVU7QUFDaEIsTUFBTSxpQkFBaUI7QUFDdkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUitEO0FBQ007QUFDWDtBQUNWO0FBQ0U7QUFDSjtBQUM5QztBQUNBLGtCQUFrQiw4REFBVztBQUM3QixZQUFZLHNEQUFJLENBQUMsK0RBQVMsSUFBSSwwQkFBMEIsdURBQUssQ0FBQyxxREFBSyxJQUFJLDRDQUE0QyxzREFBSSxDQUFDLHFEQUFVLElBQUksc0RBQXNELEdBQUcsc0RBQUksQ0FBQywrRUFBYSxJQUFJLEdBQUcsc0RBQUksQ0FBQyxzRUFBVyxJQUFJLElBQUksR0FBRztBQUNuUDtBQUNBLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZzRDtBQUNsRTtBQUNBLGNBQWMsdUVBQVM7QUFDOUI7QUFDQTtBQUNBLGVBQWUsNEVBQWM7QUFDN0Isb0JBQW9CLFNBQVM7QUFDN0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDTSxRQUFRLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEI2QjtBQUMrQztBQUNyRTtBQUNXO0FBQ0k7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZLGlFQUFpRSxFQUFFLHFFQUFlO0FBQzlGLFlBQVksc0RBQUksQ0FBQyxtREFBRyxJQUFJLFVBQVUsdURBQUssQ0FBQyxtREFBSyxJQUFJLDRDQUE0QyxzREFBSSxDQUFDLHFEQUFVLElBQUksNERBQTRELEdBQUcsc0RBQUksQ0FBQyxxREFBUyxJQUFJLE1BQU0sZ0JBQWdCO0FBQ3ZOLHlDQUF5QyxzREFBSSxDQUFDLHFEQUFjLElBQUksNkJBQTZCLHNEQUFJLENBQUMsa0VBQVUsSUFBSSxHQUFHO0FBQ25ILHFCQUFxQixnQkFBZ0Isa0NBQWtDLEdBQUcsc0RBQUksQ0FBQyxxREFBVSxJQUFJLDREQUE0RCxHQUFHLHNEQUFJLENBQUMscURBQU0sSUFBSSwwSUFBMEksc0RBQUksQ0FBQyxxREFBYSxJQUFJLHFEQUFxRCwrQkFBK0Isc0RBQUksQ0FBQyxtREFBRyxJQUFJLE1BQU0sNkNBQTZDLHFDQUFxQyxzREFBSSxDQUFDLHNEQUFJLElBQUksY0FBYyxZQUFZO0FBQzFpQix3Q0FBd0MsTUFBTSxNQUFNLHNEQUFJLENBQUMsc0RBQVEsSUFBSSw2QkFBNkIsV0FBVyxJQUFJLEdBQUc7QUFDcEg7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnlEO0FBQ2lEO0FBQzdHO0FBQ2dEO0FBQ0o7QUFDdEU7QUFDQSxZQUFZLE1BQU07QUFDbEIsNEJBQTRCLHFEQUFjO0FBQzFDLFlBQVksdURBQUssQ0FBQyx1REFBUyxJQUFJLFdBQVcsdURBQUssQ0FBQyxxREFBUSxJQUFJLE1BQU0sV0FBVyx5QkFBeUIsYUFBYSxzREFBSSxDQUFDLHFEQUFTLElBQUksVUFBVSxzREFBSSxDQUFDLHFEQUFVLElBQUksMkZBQTJGLHNEQUFJLENBQUMsMkVBQW1CLElBQUksSUFBSSxzREFBSSxDQUFDLDZFQUFxQixJQUFJLEdBQUcsR0FBRyxHQUFHLHNEQUFJLENBQUMscURBQVMsSUFBSSxxQ0FBcUMsR0FBRyxzREFBSSxDQUFDLHFEQUFTLElBQUksMEJBQTBCLDJDQUEyQyxZQUFZLHNEQUFJLENBQUMscURBQU0sSUFBSSxzQkFBc0IsVUFBVSxRQUFRLEdBQUcsR0FBRyxzREFBSSxDQUFDLHFEQUFTLElBQUksb0RBQW9ELHNEQUFJLENBQUMscURBQUksSUFBSSxhQUFhLFdBQVcsR0FBRyxzREFBSSxDQUFDLHFEQUFTLElBQUksd0NBQXdDLElBQUksR0FBRyxzREFBSSxDQUFDLHFEQUFRLElBQUksVUFBVSxzREFBSSxDQUFDLHFEQUFTLElBQUksU0FBUyxpQ0FBaUMsd0JBQXdCLHNEQUFJLENBQUMscURBQVEsSUFBSSwwREFBMEQsdURBQUssQ0FBQyxzREFBRyxJQUFJLE1BQU0sV0FBVyxhQUFhLHNEQUFJLENBQUMsc0RBQVUsSUFBSSwwRUFBMEUsR0FBRyx1REFBSyxDQUFDLHNEQUFLLElBQUkscURBQXFELHNEQUFJLENBQUMsc0RBQVMsSUFBSSxVQUFVLHVEQUFLLENBQUMscURBQVEsSUFBSSxXQUFXLHNEQUFJLENBQUMscURBQVMsSUFBSSxvQ0FBb0MsR0FBRyxzREFBSSxDQUFDLHFEQUFTLElBQUksd0NBQXdDLElBQUksR0FBRyxHQUFHLHNEQUFJLENBQUMsc0RBQVMsSUFBSSxVQUFVLHVEQUFLLENBQUMscURBQVEsSUFBSSxXQUFXLHNEQUFJLENBQUMscURBQVMsSUFBSSxpREFBaUQsUUFBUSxzREFBSSxDQUFDLHFEQUFTLElBQUksd0RBQXdELHNEQUFJLENBQUMsc0RBQUcsSUFBSSxNQUFNLFdBQVcsa0JBQWtCLFdBQVcsSUFBSSxXQUFXLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJO0FBQ3hqRDtBQUNBLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWNEM7QUFDMkQ7QUFDdEU7QUFDNUI7QUFDeEI7QUFDQSxZQUFZLGtGQUFrRixFQUFFLG1FQUFhO0FBQzdHLFlBQVksdURBQUssQ0FBQyxxREFBYyxJQUFJLFdBQVcscURBQUssYUFBYSx1REFBSyxDQUFDLHFEQUFLLElBQUksOENBQThDLHNEQUFJLENBQUMscURBQVMsSUFBSSxVQUFVLHVEQUFLLENBQUMscURBQVEsSUFBSSxXQUFXLHNEQUFJLENBQUMscURBQVMsSUFBSSxHQUFHLHNEQUFJLENBQUMscURBQVMsSUFBSSxtQ0FBbUMsR0FBRyxzREFBSSxDQUFDLHFEQUFTLElBQUkscUNBQXFDLEdBQUcsc0RBQUksQ0FBQyxxREFBUyxJQUFJLG1DQUFtQyxHQUFHLHNEQUFJLENBQUMscURBQVMsSUFBSSxzQ0FBc0MsSUFBSSxHQUFHLEdBQUcsc0RBQUksQ0FBQyxxREFBUyxJQUFJLG9DQUFvQyxzREFBSSxDQUFDLDRDQUFHLElBQUksVUFBVSxhQUFhLElBQUksR0FBRyxzREFBSSxDQUFDLHNEQUFlLElBQUksa0pBQWtKLElBQUk7QUFDdHNCO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1IwRDtBQUM5QjtBQUNjO0FBQzVCO0FBQzFDO0FBQ0EsWUFBWSxtQkFBbUIsRUFBRSw0RUFBc0I7QUFDdkQsWUFBWSx1REFBSyxDQUFDLHVEQUFTLElBQUksV0FBVyxzREFBSSxVQUFVLFNBQVMsMkNBQTJDLGtDQUFrQyxzREFBSSxDQUFDLHFEQUFnQixJQUFJLElBQUksc0RBQUksQ0FBQyxxREFBWSxJQUFJLEdBQUcsWUFBWSxzREFBSSxDQUFDLHFEQUFLLElBQUksb0NBQW9DLElBQUk7QUFDclE7QUFDQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnJCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGMkI7QUFDUTtBQUNZO0FBQ1g7QUFDM0M7QUFDQSxxQkFBcUIsd0RBQVc7QUFDaEMseUJBQXlCLG9FQUFhO0FBQ3RDLElBQUksZ0RBQVM7QUFDYixxQkFBcUIscURBQVU7QUFDL0IsS0FBSztBQUNMO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWk07QUFDUztBQUNhO0FBQ1E7QUFDL0Q7QUFDQSxZQUFZLGlCQUFpQixFQUFFLHFFQUFnQjtBQUMvQyw4Q0FBOEMsK0NBQVE7QUFDdEQscUJBQXFCLHdEQUFXO0FBQ2hDO0FBQ0EsZ0JBQWdCLFVBQVUsT0FBTyxJQUFJO0FBQ3JDO0FBQ0E7QUFDQSxpQkFBaUIsK0RBQVk7QUFDN0I7QUFDQTtBQUNBLGlCQUFpQiwrREFBWTtBQUM3QjtBQUNBLGFBQWE7QUFDYjtBQUNBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQlc7QUFDeUI7QUFDbkU7QUFDQSxzQkFBc0Isd0RBQVcsQ0FBQyxnRUFBZTtBQUNqRCxrQkFBa0Isd0RBQVcsQ0FBQyw0REFBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWMkI7QUFDUTtBQUN1QztBQUN0RztBQUNBLHdCQUF3Qix3REFBVyxDQUFDLGtFQUFpQjtBQUNyRCxpQkFBaUIsd0RBQVcsQ0FBQywyREFBVTtBQUN2QyxvQkFBb0Isd0RBQVcsQ0FBQyw4REFBYTtBQUM3Qyx1QkFBdUIsd0RBQVcsQ0FBQyxpRUFBZ0I7QUFDbkQ7QUFDQSxxQkFBcUIsd0RBQVc7QUFDaEMsc0RBQXNELDZEQUFVO0FBQ2hFLGlEQUFpRCxpRUFBYztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQm1CO0FBQ3RCO0FBQ2M7QUFDaEI7QUFDSDtBQUNrQjtBQUNMO0FBQ0U7QUFDQTtBQUNwQyx3REFBbUIseUNBQXlDLHNEQUFJLENBQUMseURBQWdCLElBQUksVUFBVSxzREFBSSxDQUFDLGlEQUFRLElBQUksT0FBTyxvREFBSyxZQUFZLHNEQUFJLENBQUMsNENBQUcsSUFBSSxHQUFHLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUL0c7QUFDaUM7QUFDMUI7QUFDSjtBQUN2QztBQUNQLGFBQWEsaUVBQWM7QUFDM0I7QUFDQTtBQUNBLHNCQUFzQixxREFBVSxNQUFNLGlCQUFpQjtBQUN2RCxtQ0FBbUMsc0RBQVEsQ0FBQyxXQUFXLEdBQUc7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixnQ0FBZ0MsZ0VBQWU7QUFDL0M7QUFDQTtBQUNBLGlCQUFpQiwyREFBUTtBQUN6QixpQkFBaUIsaUVBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdFQUFhO0FBQ2xDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQmdEO0FBQ3pDLGlCQUFpQiw4REFBWTtBQUM3QixzQkFBc0IsOERBQVk7QUFDbEMsdUJBQXVCLDhEQUFZO0FBQ25DLHFCQUFxQiw4REFBWTtBQUNqQyxxQkFBcUIsOERBQVk7QUFDakMsb0JBQW9CLDhEQUFZO0FBQ2hDLGtCQUFrQiw4REFBWTtBQUM5QixtQkFBbUIsOERBQVk7QUFDL0IsbUJBQW1CLDhEQUFZO0FBQy9CLHVCQUF1Qiw4REFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVk87QUFDeUI7QUFDbUQ7QUFDN0g7QUFDQTtBQUNBLGNBQWMseUJBQXlCO0FBQ3ZDO0FBQ0EsY0FBYyxxREFBVTtBQUN4QixpQkFBaUIsNERBQWlCO0FBQ2xDLDhCQUE4QixxREFBVSxHQUFHLDREQUFpQjtBQUM1RCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ08sc0JBQXNCLCtEQUFhO0FBQzFDO0FBQ0EsaUJBQWlCLG1EQUFhO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCLG9EQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCLDhDQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCLGtEQUFZO0FBQzdCLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseUNBQXlDO0FBQy9EO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCLGtEQUFZO0FBQzdCLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTCxpQkFBaUIsZ0RBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGlCQUFpQixvREFBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRmlEO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdFQUFjLG9DQUFvQywyQkFBMkI7QUFDOUcsWUFBWSxrQkFBa0I7QUFDOUIsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDTztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQjJDO0FBQ1I7QUFDQztBQUMzQyxjQUFjLGdFQUFjO0FBQzVCO0FBQ0EsU0FBUywrREFBaUIsR0FBRywyREFBYTtBQUMxQyx1QkFBdUIsbURBQWE7QUFDcEMsS0FBSztBQUNMLHdFQUF3RSw4REFBZ0I7QUFDeEYsQ0FBQztBQUNELGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDVmQ7QUFDUCxZQUFZLDZEQUE2RDtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDWkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvYXBpL3VzZUdldFBtQXBpLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb21wb25lbnRzL0hlYWRlckZpbHRlcnMvSGVhZGVyRmlsdGVycy50c3giLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2NvbXBvbmVudHMvVGFibGUvUm93LnRzeCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZUNvbnRlbnQudHN4Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaG9va3MvdXNlQXBwTG9naWMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2hvb2tzL3VzZUZpbHRlcnNMb2dpYy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaG9va3MvdXNlVGFibGVDb250YWluZXJMb2dpYy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaG9va3MvdXNlVGFibGVMb2dpYy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9taWRkbGV3YXJlL3RodW5rcy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvc3RhdGUvcmVkdWNlci50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvc3RhdGUvc2VsZWN0b3JzLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9zdGF0ZS9zdG9yZS50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY4NDIzODI0NTAxNFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IEhlYWRlckZpbHRlcnMgZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXJGaWx0ZXJzL0hlYWRlckZpbHRlcnNcIjtcbmltcG9ydCBQb2tlbW9uTGlzdCBmcm9tIFwiLi9jb21wb25lbnRzL1RhYmxlL1RhYmxlV3JhcHBlclwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIjtcbmltcG9ydCB7IFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB1c2VBcHBMb2dpYyBmcm9tIFwiLi9ob29rcy91c2VBcHBMb2dpY1wiO1xuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvZ2ljID0gdXNlQXBwTG9naWMoKTtcbiAgICByZXR1cm4gKF9qc3goQ29udGFpbmVyLCB7IG1heFdpZHRoOiAnbGcnLCBjaGlsZHJlbjogX2pzeHMoU3RhY2ssIHsgZGlyZWN0aW9uOiAnY29sdW1uJywgc3BhY2luZzogMywgY2hpbGRyZW46IFtfanN4KFR5cG9ncmFwaHksIHsgdmFyaWFudDogJ2gyJywgY29tcG9uZW50OiAnaDEnLCBjaGlsZHJlbjogXCJQb2tlbW9uc1wiIH0pLCBfanN4KEhlYWRlckZpbHRlcnMsIHt9KSwgX2pzeChQb2tlbW9uTGlzdCwge30pXSB9KSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0XCI7XG5leHBvcnQgY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjJcIjtcbmV4cG9ydCBjb25zdCBwbUFwaSA9IGNyZWF0ZUFwaSh7XG4gICAgcmVkdWNlclBhdGg6IFwicG1BcGlcIixcbiAgICB0YWdUeXBlczogW1wiVHlwZXNcIl0sXG4gICAgYmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7XG4gICAgICAgIGJhc2VVcmw6IGAke0JBU0VfVVJMfWAsXG4gICAgfSksXG4gICAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcbiAgICAgICAgZ2V0VHlwZXM6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6ICgpID0+IGAvdHlwZWAsXG4gICAgICAgICAgICBwcm92aWRlc1RhZ3M6IFtcIlR5cGVzXCJdLFxuICAgICAgICAgICAgdHJhbnNmb3JtUmVzcG9uc2U6IChyZXNwb25zZSkgPT4gcmVzcG9uc2UucmVzdWx0cyxcbiAgICAgICAgfSksXG4gICAgfSksXG59KTtcbmV4cG9ydCBjb25zdCB7IHVzZUdldFR5cGVzUXVlcnkgfSA9IHBtQXBpO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IENoaXAsIFRleHRGaWVsZCwgSW5wdXRMYWJlbCwgTWVudUl0ZW0sIE91dGxpbmVkSW5wdXQsIFNlbGVjdCwgSW5wdXRBZG9ybm1lbnQsIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEJveCwgU3RhY2sgfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaFwiO1xuaW1wb3J0IHVzZUZpbHRlcnNMb2dpYyBmcm9tIFwic3JjL2hvb2tzL3VzZUZpbHRlcnNMb2dpY1wiO1xuY29uc3QgSVRFTV9IRUlHSFQgPSA0ODtcbmNvbnN0IElURU1fUEFERElOR19UT1AgPSA4O1xuY29uc3QgTWVudVByb3BzID0ge1xuICAgIFBhcGVyUHJvcHM6IHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG1heEhlaWdodDogSVRFTV9IRUlHSFQgKiA0LjUgKyBJVEVNX1BBRERJTkdfVE9QLFxuICAgICAgICAgICAgd2lkdGg6IDI1MCxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbmNvbnN0IEhlYWRlckZpbHRlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBoYW5kbGVDaGFuZ2VTZWxlY3QsIGhhbmRsZUNoYW5nZUlucHV0LCBhbGxUeXBlcywgc2VsZWN0ZWRUeXBlcyB9ID0gdXNlRmlsdGVyc0xvZ2ljKCk7XG4gICAgcmV0dXJuIChfanN4KEJveCwgeyBjaGlsZHJlbjogX2pzeHMoU3RhY2ssIHsgZGlyZWN0aW9uOiAnY29sdW1uJywgc3BhY2luZzogMiwgY2hpbGRyZW46IFtfanN4KElucHV0TGFiZWwsIHsgaWQ6ICdkZW1vLW11bHRpcGxlLWNoaXAtbGFiZWwnLCBjaGlsZHJlbjogXCJTZWFyY2ggYnkgbmFtZVwiIH0pLCBfanN4KFRleHRGaWVsZCwgeyBzeDogeyBtbDogMSwgZmxleDogMSB9LCBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlSW5wdXQsIHZhcmlhbnQ6ICdvdXRsaW5lZCcsIHBsYWNlaG9sZGVyOiAnUGlrYWNodScsIElucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoX2pzeChJbnB1dEFkb3JubWVudCwgeyBwb3NpdGlvbjogJ3N0YXJ0JywgY2hpbGRyZW46IF9qc3goU2VhcmNoSWNvbiwge30pIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgfSwgaW5wdXRQcm9wczogeyBcImFyaWEtbGFiZWxcIjogXCJzZWFyY2ggYnkgbmFtZVwiIH0gfSksIF9qc3goSW5wdXRMYWJlbCwgeyBpZDogJ2RlbW8tbXVsdGlwbGUtY2hpcC1sYWJlbCcsIGNoaWxkcmVuOiBcIlNlbGVjdCBieSB0eXBlXCIgfSksIF9qc3goU2VsZWN0LCB7IGxhYmVsSWQ6ICdkZW1vLW11bHRpcGxlLWNoaXAtbGFiZWwnLCBpZDogJ2RlbW8tbXVsdGlwbGUtY2hpcCcsIG11bHRpcGxlOiB0cnVlLCB2YWx1ZTogc2VsZWN0ZWRUeXBlcywgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZVNlbGVjdCwgaW5wdXQ6IF9qc3goT3V0bGluZWRJbnB1dCwgeyBpZDogJ3NlbGVjdC1tdWx0aXBsZS1jaGlwJywgbGFiZWw6ICdTZWxlY3QgYnkgdHlwZScgfSksIHJlbmRlclZhbHVlOiAoc2VsZWN0ZWQpID0+IChfanN4KEJveCwgeyBzeDogeyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiLCBnYXA6IDAuNSB9LCBjaGlsZHJlbjogc2VsZWN0ZWQubWFwKCh2YWx1ZSkgPT4gKF9qc3goQ2hpcCwgeyBsYWJlbDogdmFsdWUgfSwgdmFsdWUpKSkgfSkpLCBNZW51UHJvcHM6IE1lbnVQcm9wcywgY2hpbGRyZW46IGFsbFR5cGVzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxUeXBlcy5tYXAoKHsgbmFtZSB9KSA9PiAoX2pzeChNZW51SXRlbSwgeyB2YWx1ZTogbmFtZSwgY2hpbGRyZW46IG5hbWUgfSwgbmFtZSkpKSB9KV0gfSkgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhlYWRlckZpbHRlcnM7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBUYWJsZVJvdywgVGFibGVDZWxsLCBJY29uQnV0dG9uLCBDb2xsYXBzZSwgQm94LCBUeXBvZ3JhcGh5LCBUYWJsZSwgVGFibGVIZWFkLCBUYWJsZUJvZHksIEF2YXRhciwgQ2hpcCwgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEtleWJvYXJkQXJyb3dEb3duSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93RG93blwiO1xuaW1wb3J0IEtleWJvYXJkQXJyb3dVcEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd1VwXCI7XG5mdW5jdGlvbiBSb3cocHJvcHMpIHtcbiAgICBjb25zdCB7IHJvdyB9ID0gcHJvcHM7XG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoVGFibGVSb3csIHsgc3g6IHsgXCImID4gKlwiOiB7IGJvcmRlckJvdHRvbTogXCJ1bnNldFwiIH0gfSwgY2hpbGRyZW46IFtfanN4KFRhYmxlQ2VsbCwgeyBjaGlsZHJlbjogX2pzeChJY29uQnV0dG9uLCB7IFwiYXJpYS1sYWJlbFwiOiAnZXhwYW5kIHJvdycsIHNpemU6ICdzbWFsbCcsIG9uQ2xpY2s6ICgpID0+IHNldE9wZW4oIW9wZW4pLCBjaGlsZHJlbjogb3BlbiA/IF9qc3goS2V5Ym9hcmRBcnJvd1VwSWNvbiwge30pIDogX2pzeChLZXlib2FyZEFycm93RG93bkljb24sIHt9KSB9KSB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogcm93Lm5hbWUgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgc3R5bGU6IHsgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH0sIGNoaWxkcmVuOiBfanN4KEF2YXRhciwgeyBzcmM6IHJvdy5pbWcsIGFsdDogYCR7cm93Lm5hbWV9IHBob3RvYCB9KSB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogcm93LnR5cGVzLm1hcCgoaXRlbSkgPT4gKF9qc3goQ2hpcCwgeyBsYWJlbDogaXRlbSB9LCBpdGVtKSkpIH0pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiByb3cuc3BlY2llcyB9KV0gfSksIF9qc3goVGFibGVSb3csIHsgY2hpbGRyZW46IF9qc3goVGFibGVDZWxsLCB7IHN0eWxlOiB7IHBhZGRpbmdCb3R0b206IDAsIHBhZGRpbmdUb3A6IDAgfSwgY29sU3BhbjogNiwgY2hpbGRyZW46IF9qc3goQ29sbGFwc2UsIHsgaW46IG9wZW4sIHRpbWVvdXQ6ICdhdXRvJywgdW5tb3VudE9uRXhpdDogdHJ1ZSwgY2hpbGRyZW46IF9qc3hzKEJveCwgeyBzeDogeyBtYXJnaW46IDEgfSwgY2hpbGRyZW46IFtfanN4KFR5cG9ncmFwaHksIHsgdmFyaWFudDogJ2g2JywgZ3V0dGVyQm90dG9tOiB0cnVlLCBjb21wb25lbnQ6ICdkaXYnLCBjaGlsZHJlbjogXCJEZXRhaWxzXCIgfSksIF9qc3hzKFRhYmxlLCB7IHNpemU6ICdzbWFsbCcsIFwiYXJpYS1sYWJlbFwiOiAncHVyY2hhc2VzJywgY2hpbGRyZW46IFtfanN4KFRhYmxlSGVhZCwgeyBjaGlsZHJlbjogX2pzeHMoVGFibGVSb3csIHsgY2hpbGRyZW46IFtfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiBcIkZvcm1zXCIgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IFwiQWJpbGl0aWVzXCIgfSldIH0pIH0pLCBfanN4KFRhYmxlQm9keSwgeyBjaGlsZHJlbjogX2pzeHMoVGFibGVSb3csIHsgY2hpbGRyZW46IFtfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiByb3cuZm9ybXMuam9pbihcIiwgXCIpIH0pLCBcIiBcIiwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogcm93LmFiaWxpdGllcy5tYXAoKGl0ZW0pID0+IChfanN4KEJveCwgeyBzeDogeyBtYXJnaW46IDEgfSwgY2hpbGRyZW46IGl0ZW0gfSwgaXRlbSkpKSB9KV0gfSwgcm93LmlkKSB9KV0gfSldIH0pIH0pIH0pIH0pXSB9KSk7XG59XG5leHBvcnQgZGVmYXVsdCBSb3c7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgUGFwZXIsIFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVDb250YWluZXIsIFRhYmxlSGVhZCwgVGFibGVQYWdpbmF0aW9uLCBUYWJsZVJvdywgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHVzZVRhYmxlTG9naWMgZnJvbSBcInNyYy9ob29rcy91c2VUYWJsZUxvZ2ljXCI7XG5pbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xuY29uc3QgVGFibGVDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaGFuZGxlUGFnZUNoYW5nZSwgaGFuZGxlUGFnZVNpemVDaGFuZ2UsIGZpbHRlcmVkUG1zLCBwYWdlLCBwZXJQYWdlLCB0b3RhbENvdW50LCB9ID0gdXNlVGFibGVMb2dpYygpO1xuICAgIHJldHVybiAoX2pzeHMoVGFibGVDb250YWluZXIsIHsgY29tcG9uZW50OiBQYXBlciwgY2hpbGRyZW46IFtfanN4cyhUYWJsZSwgeyBcImFyaWEtbGFiZWxcIjogJ2NvbGxhcHNpYmxlIHRhYmxlJywgY2hpbGRyZW46IFtfanN4KFRhYmxlSGVhZCwgeyBjaGlsZHJlbjogX2pzeHMoVGFibGVSb3csIHsgY2hpbGRyZW46IFtfanN4KFRhYmxlQ2VsbCwge30pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiBcIk5hbWVcIiB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogXCJBdmF0YXJcIiB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogXCJUeXBlXCIgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IFwiU3BlY2llc1wiIH0pXSB9KSB9KSwgX2pzeChUYWJsZUJvZHksIHsgY2hpbGRyZW46IGZpbHRlcmVkUG1zLm1hcCgocm93KSA9PiAoX2pzeChSb3csIHsgcm93OiByb3cgfSwgcm93LmlkKSkpIH0pXSB9KSwgX2pzeChUYWJsZVBhZ2luYXRpb24sIHsgY29tcG9uZW50OiAnZGl2JywgY291bnQ6IHRvdGFsQ291bnQsIHBhZ2U6IHBhZ2UsIG9uUGFnZUNoYW5nZTogaGFuZGxlUGFnZUNoYW5nZSwgcm93c1BlclBhZ2U6IHBlclBhZ2UsIG9uUm93c1BlclBhZ2VDaGFuZ2U6IGhhbmRsZVBhZ2VTaXplQ2hhbmdlIH0pXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGFibGVDb250ZW50O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgQWxlcnQsIENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHVzZVRhYmxlQ29udGFpbmVyTG9naWMgZnJvbSBcInNyYy9ob29rcy91c2VUYWJsZUNvbnRhaW5lckxvZ2ljXCI7XG5pbXBvcnQgVGFibGVDb250ZW50IGZyb20gXCIuL1RhYmxlQ29udGVudFwiO1xuY29uc3QgVGFibGVXcmFwcGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBlcnJvciB9ID0gdXNlVGFibGVDb250YWluZXJMb2dpYygpO1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9LCBjaGlsZHJlbjogaXNMb2FkaW5nICYmICFlcnJvciA/IF9qc3goQ2lyY3VsYXJQcm9ncmVzcywge30pIDogX2pzeChUYWJsZUNvbnRlbnQsIHt9KSB9KSwgZXJyb3IgJiYgX2pzeChBbGVydCwgeyBzZXZlcml0eTogJ2Vycm9yJywgY2hpbGRyZW46IGVycm9yIH0pXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGFibGVXcmFwcGVyO1xuIiwiZXhwb3J0IGNvbnN0IElOSVRJQUxfUEFHRV9TSVpFID0gMjU7XG5leHBvcnQgY29uc3QgVE9UQUxfUk9XUyA9IDEwMDtcbmV4cG9ydCBjb25zdCBGSVJTVF9QQUdFID0gMDtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGZldGNoUG1zVGh1bmsgfSBmcm9tIFwic3JjL21pZGRsZXdhcmUvdGh1bmtzXCI7XG5pbXBvcnQgeyBUT1RBTF9ST1dTIH0gZnJvbSBcInNyYy9jb25zdGFudHNcIjtcbmNvbnN0IHVzZUFwcExvZ2ljID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBmZXRjaEluaXRpYWwgPSBmZXRjaFBtc1RodW5rKGRpc3BhdGNoKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaEluaXRpYWwoVE9UQUxfUk9XUyk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7fTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VBcHBMb2dpYztcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlR2V0VHlwZXNRdWVyeSB9IGZyb20gXCJzcmMvYXBpL3VzZUdldFBtQXBpXCI7XG5pbXBvcnQgeyBmaWx0ZXJCeU5hbWUsIGZpbHRlckJ5VHlwZSB9IGZyb20gXCJzcmMvc3RhdGUvYWN0aW9uc1wiO1xuY29uc3QgdXNlRmlsdGVyc0xvZ2ljID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YTogYWxsVHlwZXMgfSA9IHVzZUdldFR5cGVzUXVlcnkoKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRUeXBlcywgc2V0U2VsZWN0ZWRUeXBlc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVNlbGVjdCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IHRhcmdldDogeyB2YWx1ZSB9LCB9ID0gZXZlbnQ7XG4gICAgICAgIGNvbnN0IHZhbCA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlLnNwbGl0KFwiLFwiKSA6IHZhbHVlO1xuICAgICAgICBzZXRTZWxlY3RlZFR5cGVzKHZhbCk7XG4gICAgICAgIGRpc3BhdGNoKGZpbHRlckJ5VHlwZSh2YWwpKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUlucHV0ID0gKGUpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmlsdGVyQnlOYW1lKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgfTtcbiAgICByZXR1cm4geyBoYW5kbGVDaGFuZ2VTZWxlY3QsIGhhbmRsZUNoYW5nZUlucHV0LCBhbGxUeXBlcywgc2VsZWN0ZWRUeXBlcyB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUZpbHRlcnNMb2dpYztcbiIsImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZWxlY3RFcnJvciwgc2VsZWN0SXNMb2FkaW5nIH0gZnJvbSBcInNyYy9zdGF0ZS9zZWxlY3RvcnNcIjtcbmNvbnN0IHVzZUxpc3RMb2dpYyA9ICgpID0+IHtcbiAgICBjb25zdCBpc0xvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RJc0xvYWRpbmcpO1xuICAgIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc2VsZWN0RXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgZXJyb3IsXG4gICAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VMaXN0TG9naWM7XG4iLCJpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGNoYW5nZVBhZ2UsIGNoYW5nZVBhZ2VTaXplIH0gZnJvbSBcInNyYy9zdGF0ZS9hY3Rpb25zXCI7XG5pbXBvcnQgeyBzZWxlY3RGaWx0ZXJlZFBtcywgc2VsZWN0UGFnZSwgc2VsZWN0UGVyUGFnZSwgc2VsZWN0VG90YWxQYWdlcywgfSBmcm9tIFwic3JjL3N0YXRlL3NlbGVjdG9yc1wiO1xuY29uc3QgdXNlVGFibGVMb2dpYyA9ICgpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZFBtcyA9IHVzZVNlbGVjdG9yKHNlbGVjdEZpbHRlcmVkUG1zKTtcbiAgICBjb25zdCBwYWdlID0gdXNlU2VsZWN0b3Ioc2VsZWN0UGFnZSk7XG4gICAgY29uc3QgcGVyUGFnZSA9IHVzZVNlbGVjdG9yKHNlbGVjdFBlclBhZ2UpO1xuICAgIGNvbnN0IHRvdGFsUGFnZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RUb3RhbFBhZ2VzKTtcbiAgICBjb25zb2xlLmxvZyhcImJyclwiLCB0b3RhbFBhZ2VzKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChlLCBuZXdQYWdlKSA9PiBkaXNwYXRjaChjaGFuZ2VQYWdlKG5ld1BhZ2UpKTtcbiAgICBjb25zdCBoYW5kbGVQYWdlU2l6ZUNoYW5nZSA9IChlKSA9PiBkaXNwYXRjaChjaGFuZ2VQYWdlU2l6ZSgrZS50YXJnZXQudmFsdWUpKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBoYW5kbGVQYWdlQ2hhbmdlLFxuICAgICAgICBoYW5kbGVQYWdlU2l6ZUNoYW5nZSxcbiAgICAgICAgZmlsdGVyZWRQbXMsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIHBlclBhZ2UsXG4gICAgICAgIHRvdGFsQ291bnQ6IHRvdGFsUGFnZXMgKiBwZXJQYWdlLFxuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlVGFibGVMb2dpYztcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdGF0ZS9zdG9yZVwiO1xuaW1wb3J0IFwiQGZvbnRzb3VyY2Uvcm9ib3RvLzQwMC5jc3NcIjtcbmltcG9ydCBcIkBmb250c291cmNlL3JvYm90by81MDAuY3NzXCI7XG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSkucmVuZGVyKF9qc3goUmVhY3QuU3RyaWN0TW9kZSwgeyBjaGlsZHJlbjogX2pzeChQcm92aWRlciwgeyBzdG9yZTogc3RvcmUsIGNoaWxkcmVuOiBfanN4KEFwcCwge30pIH0pIH0pKTtcbiIsImltcG9ydCB7IEZJUlNUX1BBR0UgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmV0Y2hQbXMsIGZldGNoUG1zRXJyb3IsIGZldGNoSXNMb2FkaW5nIH0gZnJvbSBcInNyYy9zdGF0ZS9hY3Rpb25zXCI7XG5pbXBvcnQgeyBleHRyYWN0TWFpbkluZm8gfSBmcm9tIFwic3JjL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gXCIuLi9hcGkvdXNlR2V0UG1BcGlcIjtcbmV4cG9ydCBjb25zdCBmZXRjaFBtc1RodW5rID0gKGRpc3BhdGNoKSA9PiBhc3luYyAodG90YWxSb3dzKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hJc0xvYWRpbmcodHJ1ZSkpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RzID0gW107XG4gICAgICAgIGZvciAobGV0IGlkID0gRklSU1RfUEFHRSArIDE7IGlkIDw9IHRvdGFsUm93czsgaWQrKykge1xuICAgICAgICAgICAgcmVxdWVzdHMucHVzaChmZXRjaChgJHtCQVNFX1VSTH0vcG9rZW1vbi8ke2lkfWApXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggUG9rw6ltb24gZGF0YVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGV4dHJhY3RNYWluSW5mbyhkYXRhKSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChyZXF1ZXN0cyk7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUG1zKGRhdGEpKTtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hJc0xvYWRpbmcoZmFsc2UpKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKVxuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hQbXNFcnJvcihlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxufTtcbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5leHBvcnQgY29uc3QgZmV0Y2hQbXMgPSBjcmVhdGVBY3Rpb24oXCJGRVRDSF9QTVNcIik7XG5leHBvcnQgY29uc3QgZmV0Y2hQbXNFcnJvciA9IGNyZWF0ZUFjdGlvbihcIkZFVENIX1BNU19FUlJPUlwiKTtcbmV4cG9ydCBjb25zdCBmZXRjaElzTG9hZGluZyA9IGNyZWF0ZUFjdGlvbihcIkZFVENIX1BNU19JU19MT0FESU5HXCIpO1xuZXhwb3J0IGNvbnN0IGZpbHRlckJ5TmFtZSA9IGNyZWF0ZUFjdGlvbihcIkZJTFRFUl9CWV9OQU1FXCIpO1xuZXhwb3J0IGNvbnN0IGZpbHRlckJ5VHlwZSA9IGNyZWF0ZUFjdGlvbihcIkZJTFRFUl9CWV9UWVBFXCIpO1xuZXhwb3J0IGNvbnN0IGNsZWFyRmlsdGVyID0gY3JlYXRlQWN0aW9uKFwiQ0xFQVJfRklMVEVSXCIpO1xuZXhwb3J0IGNvbnN0IG9wZW5Nb2RhbCA9IGNyZWF0ZUFjdGlvbihcIk9QRU5fTU9EQUxcIik7XG5leHBvcnQgY29uc3QgY2xvc2VNb2RhbCA9IGNyZWF0ZUFjdGlvbihcIkNMT1NFX01PREFMXCIpO1xuZXhwb3J0IGNvbnN0IGNoYW5nZVBhZ2UgPSBjcmVhdGVBY3Rpb24oXCJDSEFOR0VfUEFHRVwiKTtcbmV4cG9ydCBjb25zdCBjaGFuZ2VQYWdlU2l6ZSA9IGNyZWF0ZUFjdGlvbihcIkNIQU5HRV9QQUdFX1NJWkVcIik7XG4iLCJpbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IEZJUlNUX1BBR0UsIElOSVRJQUxfUEFHRV9TSVpFLCBUT1RBTF9ST1dTIH0gZnJvbSBcInNyYy9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNoYW5nZVBhZ2UsIGNoYW5nZVBhZ2VTaXplLCBmZXRjaElzTG9hZGluZywgZmV0Y2hQbXMsIGZldGNoUG1zRXJyb3IsIGZpbHRlckJ5TmFtZSwgZmlsdGVyQnlUeXBlLCB9IGZyb20gXCIuL2FjdGlvbnNcIjtcbmNvbnN0IGluaXRpYWwgPSB7XG4gICAgcG1zVUk6IFtdLFxuICAgIHNlYXJjaDogeyBieU5hbWU6IFwiXCIsIGJ5VHlwZXM6IFtdIH0sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBwYWdlOiBGSVJTVF9QQUdFLFxuICAgICAgICBwZXJQYWdlOiBJTklUSUFMX1BBR0VfU0laRSxcbiAgICAgICAgdG90YWxQYWdlczogTWF0aC5jZWlsKFRPVEFMX1JPV1MgLyBJTklUSUFMX1BBR0VfU0laRSksXG4gICAgfSxcbiAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgIGlzTG9hZGluZzogZmFsc2UsXG59O1xuZXhwb3J0IGNvbnN0IHBtTGlzdFJlZHVjZXIgPSBjcmVhdGVSZWR1Y2VyKGluaXRpYWwsIChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlclxuICAgICAgICAuYWRkQ2FzZShmZXRjaFBtc0Vycm9yLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSlcbiAgICAgICAgLmFkZENhc2UoZmV0Y2hJc0xvYWRpbmcsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSlcbiAgICAgICAgLmFkZENhc2UoZmV0Y2hQbXMsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBwbXNVSTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9KVxuICAgICAgICAuYWRkQ2FzZShmaWx0ZXJCeU5hbWUsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1BhZ2luYXRpb24gPSB7IC4uLnN0YXRlLnBhZ2luYXRpb24sIHBhZ2U6IDAgfTtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb246IG5ld1BhZ2luYXRpb24sXG4gICAgICAgICAgICBzZWFyY2g6IHsgLi4uc3RhdGUuc2VhcmNoLCBieU5hbWU6IGFjdGlvbi5wYXlsb2FkIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9KVxuICAgICAgICAuYWRkQ2FzZShmaWx0ZXJCeVR5cGUsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1BhZ2luYXRpb24gPSB7IC4uLnN0YXRlLnBhZ2luYXRpb24sIHBhZ2U6IDAgfTtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb246IG5ld1BhZ2luYXRpb24sXG4gICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgYnlUeXBlczogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSlcbiAgICAgICAgLmFkZENhc2UoY2hhbmdlUGFnZSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbk5ldyA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLnBhZ2luYXRpb24sXG4gICAgICAgICAgICBwYWdlOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHBhZ2luYXRpb25OZXcsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9KVxuICAgICAgICAuYWRkQ2FzZShjaGFuZ2VQYWdlU2l6ZSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgcGVyUGFnZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHN0YXRlLnBtc1VJLmxlbmd0aCAvIHBlclBhZ2UpO1xuICAgICAgICBjb25zdCBwYWdpbmF0aW9uTmV3ID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUucGFnaW5hdGlvbixcbiAgICAgICAgICAgIHBhZ2U6IDAsXG4gICAgICAgICAgICBwZXJQYWdlOiBwZXJQYWdlLFxuICAgICAgICAgICAgdG90YWxQYWdlczogdG90YWxQYWdlcyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLnN0YXRlLCBwYWdpbmF0aW9uOiBwYWdpbmF0aW9uTmV3IH07XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFBtcyA9IChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlci5wbXNVSTtcbmV4cG9ydCBjb25zdCBzZWxlY3RQYWdlID0gKHN0YXRlKSA9PiBzdGF0ZS5wbUxpc3RSZWR1Y2VyLnBhZ2luYXRpb24ucGFnZTtcbmV4cG9ydCBjb25zdCBzZWxlY3RQZXJQYWdlID0gKHN0YXRlKSA9PiBzdGF0ZS5wbUxpc3RSZWR1Y2VyLnBhZ2luYXRpb24ucGVyUGFnZTtcbmV4cG9ydCBjb25zdCBzZWxlY3RUb3RhbFBhZ2VzID0gKHN0YXRlKSA9PiBzdGF0ZS5wbUxpc3RSZWR1Y2VyLnBhZ2luYXRpb24udG90YWxQYWdlcztcbmV4cG9ydCBjb25zdCBzZWxlY3RGaWx0ZXJlZFBtcyA9IGNyZWF0ZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlciwgKHsgcG1zVUksIHNlYXJjaCwgcGFnaW5hdGlvbiB9KSA9PiB7XG4gICAgY29uc3QgeyBieU5hbWUsIGJ5VHlwZXMgfSA9IHNlYXJjaDtcbiAgICBjb25zdCB7IHBlclBhZ2UsIHBhZ2UgfSA9IHBhZ2luYXRpb247XG4gICAgY29uc3QgZmlsdGVyZWRQbXMgPSBwbXNVSS5maWx0ZXIoKHBtKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTmFtZU1hdGNoID0gcG0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ5TmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgY29uc3QgaXNUeXBlTWF0Y2ggPSBieVR5cGVzLmxlbmd0aCA9PT0gMCB8fCBwbS50eXBlcy5zb21lKCh0eXBlKSA9PiBieVR5cGVzLmluY2x1ZGVzKHR5cGUpKTtcbiAgICAgICAgcmV0dXJuIGlzTmFtZU1hdGNoICYmIGlzVHlwZU1hdGNoO1xuICAgIH0pO1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBwZXJQYWdlICogcGFnZTtcbiAgICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyBwZXJQYWdlO1xuICAgIGNvbnN0IHNsaWNlZFBtcyA9IGZpbHRlcmVkUG1zLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcbiAgICByZXR1cm4gc2xpY2VkUG1zO1xufSk7XG4vLyBNYXRoLmNlaWwoc2VsZWN0RmlsdGVyZWRQbXMubGVuZ3RoKTtcbmV4cG9ydCBjb25zdCBzZWxlY3RJc0xvYWRpbmcgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIuaXNMb2FkaW5nO1xuZXhwb3J0IGNvbnN0IHNlbGVjdEVycm9yID0gKHN0YXRlKSA9PiBzdGF0ZS5wbUxpc3RSZWR1Y2VyLmVycm9yO1xuIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgcG1MaXN0UmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJcIjtcbmltcG9ydCB7IHBtQXBpIH0gZnJvbSBcIi4uL2FwaS91c2VHZXRQbUFwaVwiO1xuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjoge1xuICAgICAgICBbcG1BcGkucmVkdWNlclBhdGhdOiBwbUFwaS5yZWR1Y2VyLFxuICAgICAgICBwbUxpc3RSZWR1Y2VyOiBwbUxpc3RSZWR1Y2VyLFxuICAgIH0sXG4gICAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PiBnZXREZWZhdWx0TWlkZGxld2FyZSgpLmNvbmNhdChwbUFwaS5taWRkbGV3YXJlKSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCJleHBvcnQgY29uc3QgZXh0cmFjdE1haW5JbmZvID0gKHBva2Vtb24pID0+IHtcbiAgICBjb25zdCB7IGlkLCBuYW1lLCBzcHJpdGVzLCB0eXBlcywgYWJpbGl0aWVzLCBzdGF0cywgc3BlY2llcywgZm9ybXMgfSA9IHBva2Vtb247XG4gICAgY29uc3QgcG0gPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBuYW1lLFxuICAgICAgICB0eXBlczogdHlwZXMubWFwKChpdGVtKSA9PiBpdGVtLnR5cGUubmFtZSksXG4gICAgICAgIGFiaWxpdGllczogYWJpbGl0aWVzLm1hcCgoaXRlbSkgPT4gaXRlbS5hYmlsaXR5Lm5hbWUpLFxuICAgICAgICBmb3JtczogZm9ybXMubWFwKChpdGVtKSA9PiBpdGVtLm5hbWUpLFxuICAgICAgICBzcGVjaWVzOiBzcGVjaWVzLm5hbWUsXG4gICAgICAgIGltZzogc3ByaXRlcy5mcm9udF9kZWZhdWx0LFxuICAgIH07XG4gICAgcmV0dXJuIHBtO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtlY2xpcHNlX2Fzc2lnbm1lbnRcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZWNsaXBzZV9hc3NpZ25tZW50XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19tdWlfaWNvbnMtbWF0ZXJpYWxfS2V5Ym9hcmRBcnJvd0Rvd25fanMtbm9kZV9tb2R1bGVzX211aV9pY29ucy1tYXRlcmlhbF8tNDRmZDk3XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzeFwiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9