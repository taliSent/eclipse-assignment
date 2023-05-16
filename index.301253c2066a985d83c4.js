/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/HeaderFilters/HeaderFilters.css":
/*!********************************************************!*\
  !*** ./src/components/HeaderFilters/HeaderFilters.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__["default"], { maxWidth: 'md', sx: { padding: "3em 0" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { direction: 'column', spacing: 3, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { className: 'header', variant: 'h2', component: 'h1', children: "Pokemons" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_HeaderFilters_HeaderFilters__WEBPACK_IMPORTED_MODULE_1__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Table_TableWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {})] }) }));
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
                            }, inputProps: { "aria-label": "search by name" } })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__["default"], { className: 'filter2', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { id: 'demo-multiple-chip-label', children: "Select by type" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { labelId: 'demo-multiple-chip-label', id: 'demo-multiple-chip', multiple: true, value: selectedTypes, onChange: handleChangeSelect, input: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { id: 'select-multiple-chip', label: 'Select by type' }), renderValue: (selected) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_4__["default"], { sx: { display: "flex", flexWrap: "wrap", gap: 0.5 }, children: selected.map((value) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { label: value, sx: { backgroundColor: (0,src_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getTypeColor)(value) } }, value))) })), MenuProps: MenuProps, sx: { width: "100%" }, children: isTypesArray &&
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_mui_icons-material_KeyboardArrowDown_js-node_modules_mui_icons-material_-45ce2a"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvQXBwLmNzcz85YjcyIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb21wb25lbnRzL0hlYWRlckZpbHRlcnMvSGVhZGVyRmlsdGVycy5jc3M/NTViZCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaW5kZXguY3NzP2M0MGQiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2FwaS91c2VHZXRQbUFwaS50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvY29tcG9uZW50cy9IZWFkZXJGaWx0ZXJzL0hlYWRlckZpbHRlcnMudHN4Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb21wb25lbnRzL1RhYmxlL1Jvdy50c3giLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2NvbXBvbmVudHMvVGFibGUvVGFibGVDb250ZW50LnRzeCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZVdyYXBwZXIudHN4Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2hvb2tzL3VzZUFwcExvZ2ljLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9ob29rcy91c2VGaWx0ZXJzTG9naWMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2hvb2tzL3VzZVRhYmxlQ29udGFpbmVyTG9naWMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2hvb2tzL3VzZVRhYmxlTG9naWMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvbWlkZGxld2FyZS90aHVua3MudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL3N0YXRlL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL3N0YXRlL3NlbGVjdG9ycy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvc3RhdGUvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xuaW1wb3J0IEhlYWRlckZpbHRlcnMgZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXJGaWx0ZXJzL0hlYWRlckZpbHRlcnNcIjtcbmltcG9ydCBUYWJsZVdyYXBwZXIgZnJvbSBcIi4vY29tcG9uZW50cy9UYWJsZS9UYWJsZVdyYXBwZXJcIjtcbmltcG9ydCB1c2VBcHBMb2dpYyBmcm9tIFwiLi9ob29rcy91c2VBcHBMb2dpY1wiO1xuaW1wb3J0IFwiLi9BcHAuY3NzXCI7XG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgY29uc3QgbG9naWMgPSB1c2VBcHBMb2dpYygpO1xuICAgIHJldHVybiAoX2pzeChDb250YWluZXIsIHsgbWF4V2lkdGg6ICdtZCcsIHN4OiB7IHBhZGRpbmc6IFwiM2VtIDBcIiB9LCBjaGlsZHJlbjogX2pzeHMoU3RhY2ssIHsgZGlyZWN0aW9uOiAnY29sdW1uJywgc3BhY2luZzogMywgY2hpbGRyZW46IFtfanN4KFR5cG9ncmFwaHksIHsgY2xhc3NOYW1lOiAnaGVhZGVyJywgdmFyaWFudDogJ2gyJywgY29tcG9uZW50OiAnaDEnLCBjaGlsZHJlbjogXCJQb2tlbW9uc1wiIH0pLCBfanN4KEhlYWRlckZpbHRlcnMsIHt9KSwgX2pzeChUYWJsZVdyYXBwZXIsIHt9KV0gfSkgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCB7IGNyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnkgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdFwiO1xuaW1wb3J0IHsgc29ydFR5cGVzIH0gZnJvbSBcInNyYy91dGlscy91dGlsc1wiO1xuZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyXCI7XG5leHBvcnQgY29uc3QgcG1BcGkgPSBjcmVhdGVBcGkoe1xuICAgIHJlZHVjZXJQYXRoOiBcInBtQXBpXCIsXG4gICAgdGFnVHlwZXM6IFtcIlR5cGVzXCJdLFxuICAgIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoe1xuICAgICAgICBiYXNlVXJsOiBgJHtCQVNFX1VSTH1gLFxuICAgIH0pLFxuICAgIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XG4gICAgICAgIGdldFR5cGVzOiBidWlsZGVyLnF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiAoKSA9PiBgL3R5cGVgLFxuICAgICAgICAgICAgcHJvdmlkZXNUYWdzOiBbXCJUeXBlc1wiXSxcbiAgICAgICAgICAgIHRyYW5zZm9ybVJlc3BvbnNlOiAocmVzcG9uc2UpID0+IHJlc3BvbnNlLnJlc3VsdHMuc29ydChzb3J0VHlwZXMpLFxuICAgICAgICB9KSxcbiAgICB9KSxcbn0pO1xuZXhwb3J0IGNvbnN0IHsgdXNlR2V0VHlwZXNRdWVyeSB9ID0gcG1BcGk7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgQ2hpcCwgVGV4dEZpZWxkLCBJbnB1dExhYmVsLCBNZW51SXRlbSwgT3V0bGluZWRJbnB1dCwgU2VsZWN0LCBJbnB1dEFkb3JubWVudCwgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQm94LCBTdGFjayB9IGZyb20gXCJAbXVpL3N5c3RlbVwiO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoXCI7XG5pbXBvcnQgdXNlRmlsdGVyc0xvZ2ljIGZyb20gXCJzcmMvaG9va3MvdXNlRmlsdGVyc0xvZ2ljXCI7XG5pbXBvcnQgeyBnZXRUeXBlQ29sb3IgfSBmcm9tIFwic3JjL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgXCIuL0hlYWRlckZpbHRlcnMuY3NzXCI7XG5jb25zdCBJVEVNX0hFSUdIVCA9IDQ4O1xuY29uc3QgSVRFTV9QQURESU5HX1RPUCA9IDg7XG5jb25zdCBNZW51UHJvcHMgPSB7XG4gICAgUGFwZXJQcm9wczoge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4SGVpZ2h0OiBJVEVNX0hFSUdIVCAqIDQuNSArIElURU1fUEFERElOR19UT1AsXG4gICAgICAgICAgICB3aWR0aDogMjUwLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuY29uc3QgSGVhZGVyRmlsdGVycyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGhhbmRsZUNoYW5nZVNlbGVjdCwgaGFuZGxlQ2hhbmdlSW5wdXQsIGFsbFR5cGVzLCBzZWxlY3RlZFR5cGVzLCBpc1R5cGVzQXJyYXksIH0gPSB1c2VGaWx0ZXJzTG9naWMoKTtcbiAgICByZXR1cm4gKF9qc3goQm94LCB7IGNoaWxkcmVuOiBfanN4cyhTdGFjaywgeyBkaXJlY3Rpb246ICdjb2x1bW4nLCBzcGFjaW5nOiAyLCBjaGlsZHJlbjogW19qc3hzKEJveCwgeyBjbGFzc05hbWU6ICdmaWx0ZXIxJywgY2hpbGRyZW46IFtfanN4KElucHV0TGFiZWwsIHsgaWQ6ICdkZW1vLW11bHRpcGxlLWNoaXAtbGFiZWwnLCBjaGlsZHJlbjogXCJTZWFyY2ggYnkgbmFtZVwiIH0pLCBfanN4KFRleHRGaWVsZCwgeyBzeDogeyB3aWR0aDogXCIxMDAlXCIgfSwgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZUlucHV0LCB2YXJpYW50OiAnb3V0bGluZWQnLCBwbGFjZWhvbGRlcjogJ1Bpa2FjaHUnLCBJbnB1dFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoX2pzeChJbnB1dEFkb3JubWVudCwgeyBwb3NpdGlvbjogJ3N0YXJ0JywgY2hpbGRyZW46IF9qc3goU2VhcmNoSWNvbiwge30pIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBpbnB1dFByb3BzOiB7IFwiYXJpYS1sYWJlbFwiOiBcInNlYXJjaCBieSBuYW1lXCIgfSB9KV0gfSksIF9qc3hzKEJveCwgeyBjbGFzc05hbWU6ICdmaWx0ZXIyJywgY2hpbGRyZW46IFtfanN4KElucHV0TGFiZWwsIHsgaWQ6ICdkZW1vLW11bHRpcGxlLWNoaXAtbGFiZWwnLCBjaGlsZHJlbjogXCJTZWxlY3QgYnkgdHlwZVwiIH0pLCBfanN4KFNlbGVjdCwgeyBsYWJlbElkOiAnZGVtby1tdWx0aXBsZS1jaGlwLWxhYmVsJywgaWQ6ICdkZW1vLW11bHRpcGxlLWNoaXAnLCBtdWx0aXBsZTogdHJ1ZSwgdmFsdWU6IHNlbGVjdGVkVHlwZXMsIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VTZWxlY3QsIGlucHV0OiBfanN4KE91dGxpbmVkSW5wdXQsIHsgaWQ6ICdzZWxlY3QtbXVsdGlwbGUtY2hpcCcsIGxhYmVsOiAnU2VsZWN0IGJ5IHR5cGUnIH0pLCByZW5kZXJWYWx1ZTogKHNlbGVjdGVkKSA9PiAoX2pzeChCb3gsIHsgc3g6IHsgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhXcmFwOiBcIndyYXBcIiwgZ2FwOiAwLjUgfSwgY2hpbGRyZW46IHNlbGVjdGVkLm1hcCgodmFsdWUpID0+IChfanN4KENoaXAsIHsgbGFiZWw6IHZhbHVlLCBzeDogeyBiYWNrZ3JvdW5kQ29sb3I6IGdldFR5cGVDb2xvcih2YWx1ZSkgfSB9LCB2YWx1ZSkpKSB9KSksIE1lbnVQcm9wczogTWVudVByb3BzLCBzeDogeyB3aWR0aDogXCIxMDAlXCIgfSwgY2hpbGRyZW46IGlzVHlwZXNBcnJheSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxUeXBlcz8ubWFwKCh7IG5hbWUgfSkgPT4gKF9qc3goTWVudUl0ZW0sIHsgdmFsdWU6IG5hbWUsIGNoaWxkcmVuOiBuYW1lIH0sIG5hbWUpKSkgfSldIH0pXSB9KSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSGVhZGVyRmlsdGVycztcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IFRhYmxlUm93LCBUYWJsZUNlbGwsIEljb25CdXR0b24sIENvbGxhcHNlLCBCb3gsIFR5cG9ncmFwaHksIFRhYmxlLCBUYWJsZUhlYWQsIFRhYmxlQm9keSwgQXZhdGFyLCBDaGlwLCBTdGFjaywgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEtleWJvYXJkQXJyb3dEb3duSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93RG93blwiO1xuaW1wb3J0IEtleWJvYXJkQXJyb3dVcEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd1VwXCI7XG5pbXBvcnQgeyBnZXRUeXBlQ29sb3IgfSBmcm9tIFwic3JjL3V0aWxzL3V0aWxzXCI7XG5mdW5jdGlvbiBSb3cocHJvcHMpIHtcbiAgICBjb25zdCB7IHJvdyB9ID0gcHJvcHM7XG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoVGFibGVSb3csIHsgc3g6IHsgXCImID4gKlwiOiB7IGJvcmRlckJvdHRvbTogXCJ1bnNldFwiIH0gfSwgY2hpbGRyZW46IFtfanN4KFRhYmxlQ2VsbCwgeyBjaGlsZHJlbjogX2pzeChJY29uQnV0dG9uLCB7IFwiYXJpYS1sYWJlbFwiOiAnZXhwYW5kIHJvdycsIHNpemU6ICdzbWFsbCcsIG9uQ2xpY2s6ICgpID0+IHNldE9wZW4oIW9wZW4pLCBjaGlsZHJlbjogb3BlbiA/IF9qc3goS2V5Ym9hcmRBcnJvd1VwSWNvbiwge30pIDogX2pzeChLZXlib2FyZEFycm93RG93bkljb24sIHt9KSB9KSB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogcm93Lm5hbWUgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgc3g6IHsgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH0sIGNoaWxkcmVuOiBfanN4KEF2YXRhciwgeyBzcmM6IHJvdy5pbWcsIGFsdDogYCR7cm93Lm5hbWV9IHBob3RvYCB9KSB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogX2pzeChTdGFjaywgeyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGRpcmVjdGlvbjogJ3JvdycsIHNwYWNpbmc6IDEsIGNoaWxkcmVuOiByb3cudHlwZXMubWFwKCh0eXBlKSA9PiAoX2pzeChDaGlwLCB7IHNpemU6ICdzbWFsbCcsIHN4OiB7IGJhY2tncm91bmRDb2xvcjogZ2V0VHlwZUNvbG9yKHR5cGUpIH0sIGxhYmVsOiB0eXBlIH0sIHR5cGUpKSkgfSkgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IHJvdy5zcGVjaWVzIH0pXSB9KSwgX2pzeChUYWJsZVJvdywgeyBjaGlsZHJlbjogX2pzeChUYWJsZUNlbGwsIHsgc3g6IHsgcGFkZGluZ0JvdHRvbTogMCwgcGFkZGluZ1RvcDogMCB9LCBjb2xTcGFuOiA2LCBjaGlsZHJlbjogX2pzeChDb2xsYXBzZSwgeyBpbjogb3BlbiwgdGltZW91dDogJ2F1dG8nLCB1bm1vdW50T25FeGl0OiB0cnVlLCBjaGlsZHJlbjogX2pzeHMoQm94LCB7IHN4OiB7IG1hcmdpbjogMSB9LCBjaGlsZHJlbjogW19qc3goVHlwb2dyYXBoeSwgeyB2YXJpYW50OiAnaDYnLCBndXR0ZXJCb3R0b206IHRydWUsIGNvbXBvbmVudDogJ2RpdicsIGNoaWxkcmVuOiBcIkRldGFpbHNcIiB9KSwgX2pzeHMoVGFibGUsIHsgc2l6ZTogJ3NtYWxsJywgXCJhcmlhLWxhYmVsXCI6ICdwdXJjaGFzZXMnLCBjaGlsZHJlbjogW19qc3goVGFibGVIZWFkLCB7IGNoaWxkcmVuOiBfanN4cyhUYWJsZVJvdywgeyBjaGlsZHJlbjogW19qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IFwiRm9ybXNcIiB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogXCJBYmlsaXRpZXNcIiB9KV0gfSkgfSksIF9qc3goVGFibGVCb2R5LCB7IGNoaWxkcmVuOiBfanN4cyhUYWJsZVJvdywgeyBjaGlsZHJlbjogW19qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IHJvdy5mb3Jtcy5qb2luKFwiLCBcIikgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IHJvdy5hYmlsaXRpZXMubWFwKChpdGVtKSA9PiAoX2pzeChCb3gsIHsgc3g6IHsgbWFyZ2luOiAxIH0sIGNoaWxkcmVuOiBpdGVtIH0sIGl0ZW0pKSkgfSldIH0sIHJvdy5pZCkgfSldIH0pXSB9KSB9KSB9KSB9KV0gfSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgUm93O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IFBhcGVyLCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlQ29udGFpbmVyLCBUYWJsZUhlYWQsIFRhYmxlUGFnaW5hdGlvbiwgVGFibGVSb3csIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB1c2VUYWJsZUxvZ2ljIGZyb20gXCJzcmMvaG9va3MvdXNlVGFibGVMb2dpY1wiO1xuaW1wb3J0IFJvdyBmcm9tIFwiLi9Sb3dcIjtcbmNvbnN0IFRhYmxlQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGhhbmRsZVBhZ2VDaGFuZ2UsIGhhbmRsZVBhZ2VTaXplQ2hhbmdlLCBwbXNPblBhZ2UsIHBhZ2UsIHBlclBhZ2UsIHRvdGFsQ291bnQsIHBhZGRpbmdWYWx1ZSwgfSA9IHVzZVRhYmxlTG9naWMoKTtcbiAgICByZXR1cm4gKF9qc3hzKFRhYmxlQ29udGFpbmVyLCB7IGNvbXBvbmVudDogUGFwZXIsIGNoaWxkcmVuOiBbX2pzeHMoVGFibGUsIHsgcGFkZGluZzogcGFkZGluZ1ZhbHVlLCBcImFyaWEtbGFiZWxcIjogJ2NvbGxhcHNpYmxlIHRhYmxlJywgY2hpbGRyZW46IFtfanN4KFRhYmxlSGVhZCwgeyBjaGlsZHJlbjogX2pzeHMoVGFibGVSb3csIHsgY2hpbGRyZW46IFtfanN4KFRhYmxlQ2VsbCwge30pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiBcIk5hbWVcIiB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogXCJBdmF0YXJcIiB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogXCJUeXBlXCIgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IFwiU3BlY2llc1wiIH0pXSB9KSB9KSwgX2pzeChUYWJsZUJvZHksIHsgY2hpbGRyZW46IHBtc09uUGFnZS5tYXAoKHJvdykgPT4gKF9qc3goUm93LCB7IHJvdzogcm93IH0sIHJvdy5pZCkpKSB9KV0gfSksIF9qc3goVGFibGVQYWdpbmF0aW9uLCB7IGNvbXBvbmVudDogJ2RpdicsIGNvdW50OiB0b3RhbENvdW50LCBwYWdlOiBwYWdlLCBvblBhZ2VDaGFuZ2U6IGhhbmRsZVBhZ2VDaGFuZ2UsIHJvd3NQZXJQYWdlOiBwZXJQYWdlLCBvblJvd3NQZXJQYWdlQ2hhbmdlOiBoYW5kbGVQYWdlU2l6ZUNoYW5nZSB9KV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFRhYmxlQ29udGVudDtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IEFsZXJ0LCBTa2VsZXRvbiwgU3RhY2sgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHVzZVRhYmxlQ29udGFpbmVyTG9naWMgZnJvbSBcInNyYy9ob29rcy91c2VUYWJsZUNvbnRhaW5lckxvZ2ljXCI7XG5pbXBvcnQgVGFibGVDb250ZW50IGZyb20gXCIuL1RhYmxlQ29udGVudFwiO1xuY29uc3QgVGFibGVXcmFwcGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBlcnJvciB9ID0gdXNlVGFibGVDb250YWluZXJMb2dpYygpO1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICB9LCBjaGlsZHJlbjogaXNMb2FkaW5nICYmICFlcnJvciA/IChfanN4cyhTdGFjaywgeyBkaXJlY3Rpb246ICdjb2x1bW4nLCB3aWR0aDogJzEwMCUnLCBzcGFjaW5nOiAyLCBjaGlsZHJlbjogW19qc3goU2tlbGV0b24sIHsgYW5pbWF0aW9uOiAnd2F2ZScsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzVlbScgfSksIF9qc3goU2tlbGV0b24sIHsgYW5pbWF0aW9uOiAnd2F2ZScsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzVlbScgfSksIF9qc3goU2tlbGV0b24sIHsgYW5pbWF0aW9uOiAnd2F2ZScsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzVlbScgfSldIH0pKSA6IChfanN4KFRhYmxlQ29udGVudCwge30pKSB9KSwgZXJyb3IgJiYgX2pzeChBbGVydCwgeyBzZXZlcml0eTogJ2Vycm9yJywgY2hpbGRyZW46IGVycm9yIH0pXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGFibGVXcmFwcGVyO1xuIiwiZXhwb3J0IGNvbnN0IElOSVRJQUxfUEFHRV9TSVpFID0gMjU7XG5leHBvcnQgY29uc3QgVE9UQUxfUk9XUyA9IDEwMDtcbmV4cG9ydCBjb25zdCBGSVJTVF9QQUdFID0gMDtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGZldGNoUG1zVGh1bmsgfSBmcm9tIFwic3JjL21pZGRsZXdhcmUvdGh1bmtzXCI7XG5pbXBvcnQgeyBUT1RBTF9ST1dTIH0gZnJvbSBcInNyYy9jb25zdGFudHNcIjtcbmNvbnN0IHVzZUFwcExvZ2ljID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBmZXRjaEluaXRpYWwgPSBmZXRjaFBtc1RodW5rKGRpc3BhdGNoKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaEluaXRpYWwoVE9UQUxfUk9XUyk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7fTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VBcHBMb2dpYztcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlR2V0VHlwZXNRdWVyeSB9IGZyb20gXCJzcmMvYXBpL3VzZUdldFBtQXBpXCI7XG5pbXBvcnQgeyBmaWx0ZXJCeU5hbWUsIGZpbHRlckJ5VHlwZSB9IGZyb20gXCJzcmMvc3RhdGUvYWN0aW9uc1wiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwic3JjL3V0aWxzL3V0aWxzXCI7XG5jb25zdCB1c2VGaWx0ZXJzTG9naWMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhOiBhbGxUeXBlcyB9ID0gdXNlR2V0VHlwZXNRdWVyeSgpO1xuICAgIGNvbnN0IFtzZWxlY3RlZFR5cGVzLCBzZXRTZWxlY3RlZFR5cGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU2VsZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0OiB7IHZhbHVlIH0sIH0gPSBldmVudDtcbiAgICAgICAgY29uc3QgdmFsID0gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gdmFsdWUuc3BsaXQoXCIsXCIpIDogdmFsdWU7XG4gICAgICAgIHNldFNlbGVjdGVkVHlwZXModmFsKTtcbiAgICAgICAgZGlzcGF0Y2goZmlsdGVyQnlUeXBlKHZhbCkpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAoZSkgPT4ge1xuICAgICAgICBkZWJvdW5jZSgoKSA9PiBkaXNwYXRjaChmaWx0ZXJCeU5hbWUoZS50YXJnZXQudmFsdWUpKSwgNTAwKSgpO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGFuZGxlQ2hhbmdlU2VsZWN0LFxuICAgICAgICBoYW5kbGVDaGFuZ2VJbnB1dCxcbiAgICAgICAgYWxsVHlwZXMsXG4gICAgICAgIHNlbGVjdGVkVHlwZXMsXG4gICAgICAgIGlzVHlwZXNBcnJheTogYWxsVHlwZXMgJiYgQXJyYXkuaXNBcnJheShhbGxUeXBlcyksXG4gICAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VGaWx0ZXJzTG9naWM7XG4iLCJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2VsZWN0RXJyb3IsIHNlbGVjdElzTG9hZGluZyB9IGZyb20gXCJzcmMvc3RhdGUvc2VsZWN0b3JzXCI7XG5jb25zdCB1c2VMaXN0TG9naWMgPSAoKSA9PiB7XG4gICAgY29uc3QgaXNMb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNMb2FkaW5nKTtcbiAgICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKHNlbGVjdEVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBpc0xvYWRpbmcsXG4gICAgICAgIGVycm9yLFxuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlTGlzdExvZ2ljO1xuIiwiaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBjaGFuZ2VQYWdlLCBjaGFuZ2VQYWdlU2l6ZSB9IGZyb20gXCJzcmMvc3RhdGUvYWN0aW9uc1wiO1xuaW1wb3J0IHsgc2VsZWN0UGFnZSwgc2VsZWN0UGVyUGFnZSwgc2VsZWN0U2xpY2VkUG1zLCBzZWxlY3RUb3RhbFBhZ2VzLCB9IGZyb20gXCJzcmMvc3RhdGUvc2VsZWN0b3JzXCI7XG5jb25zdCB1c2VUYWJsZUxvZ2ljID0gKCkgPT4ge1xuICAgIGNvbnN0IHBtc09uUGFnZSA9IHVzZVNlbGVjdG9yKHNlbGVjdFNsaWNlZFBtcyk7XG4gICAgY29uc3QgcGFnZSA9IHVzZVNlbGVjdG9yKHNlbGVjdFBhZ2UpO1xuICAgIGNvbnN0IHBlclBhZ2UgPSB1c2VTZWxlY3RvcihzZWxlY3RQZXJQYWdlKTtcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gdXNlU2VsZWN0b3Ioc2VsZWN0VG90YWxQYWdlcyk7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICAgIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xuICAgIGNvbnN0IHBhZGRpbmdWYWx1ZSA9IGlzTW9iaWxlID8gXCJub25lXCIgOiBcIm5vcm1hbFwiO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKGUsIG5ld1BhZ2UpID0+IGRpc3BhdGNoKGNoYW5nZVBhZ2UobmV3UGFnZSkpO1xuICAgIGNvbnN0IGhhbmRsZVBhZ2VTaXplQ2hhbmdlID0gKGUpID0+IGRpc3BhdGNoKGNoYW5nZVBhZ2VTaXplKCtlLnRhcmdldC52YWx1ZSkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGhhbmRsZVBhZ2VDaGFuZ2UsXG4gICAgICAgIGhhbmRsZVBhZ2VTaXplQ2hhbmdlLFxuICAgICAgICBwbXNPblBhZ2UsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIHBlclBhZ2UsXG4gICAgICAgIHRvdGFsQ291bnQ6IHRvdGFsUGFnZXMgKiBwZXJQYWdlLFxuICAgICAgICBwYWRkaW5nVmFsdWUsXG4gICAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VUYWJsZUxvZ2ljO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0YXRlL3N0b3JlXCI7XG5pbXBvcnQgXCJAZm9udHNvdXJjZS9yb2JvdG8vbGF0aW4tNDAwLmNzc1wiO1xuaW1wb3J0IFwiQGZvbnRzb3VyY2Uvcm9ib3RvL2xhdGluLTUwMC5jc3NcIjtcblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKS5yZW5kZXIoX2pzeChSZWFjdC5TdHJpY3RNb2RlLCB7IGNoaWxkcmVuOiBfanN4KFByb3ZpZGVyLCB7IHN0b3JlOiBzdG9yZSwgY2hpbGRyZW46IF9qc3goQXBwLCB7fSkgfSkgfSkpO1xuIiwiaW1wb3J0IHsgRklSU1RfUEFHRSB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmZXRjaFBtcywgZmV0Y2hQbXNFcnJvciwgZmV0Y2hJc0xvYWRpbmcgfSBmcm9tIFwic3JjL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IGV4dHJhY3RNYWluSW5mbyB9IGZyb20gXCJzcmMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4uL2FwaS91c2VHZXRQbUFwaVwiO1xuZXhwb3J0IGNvbnN0IGZldGNoUG1zVGh1bmsgPSAoZGlzcGF0Y2gpID0+IGFzeW5jICh0b3RhbFJvd3MpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaElzTG9hZGluZyh0cnVlKSk7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaWQgPSBGSVJTVF9QQUdFICsgMTsgaWQgPD0gdG90YWxSb3dzOyBpZCsrKSB7XG4gICAgICAgICAgICByZXF1ZXN0cy5wdXNoKGZldGNoKGAke0JBU0VfVVJMfS9wb2tlbW9uLyR7aWR9YClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBQb2tlbW9uIGRhdGFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBleHRyYWN0TWFpbkluZm8oZGF0YSkpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpO1xuICAgICAgICBkaXNwYXRjaChmZXRjaFBtcyhkYXRhKSk7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoSXNMb2FkaW5nKGZhbHNlKSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcilcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoUG1zRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuZXhwb3J0IGNvbnN0IGZldGNoUG1zID0gY3JlYXRlQWN0aW9uKFwiRkVUQ0hfUE1TXCIpO1xuZXhwb3J0IGNvbnN0IGZldGNoUG1zRXJyb3IgPSBjcmVhdGVBY3Rpb24oXCJGRVRDSF9QTVNfRVJST1JcIik7XG5leHBvcnQgY29uc3QgZmV0Y2hJc0xvYWRpbmcgPSBjcmVhdGVBY3Rpb24oXCJGRVRDSF9QTVNfSVNfTE9BRElOR1wiKTtcbmV4cG9ydCBjb25zdCBmaWx0ZXJCeU5hbWUgPSBjcmVhdGVBY3Rpb24oXCJGSUxURVJfQllfTkFNRVwiKTtcbmV4cG9ydCBjb25zdCBmaWx0ZXJCeVR5cGUgPSBjcmVhdGVBY3Rpb24oXCJGSUxURVJfQllfVFlQRVwiKTtcbmV4cG9ydCBjb25zdCBjbGVhckZpbHRlciA9IGNyZWF0ZUFjdGlvbihcIkNMRUFSX0ZJTFRFUlwiKTtcbmV4cG9ydCBjb25zdCBvcGVuTW9kYWwgPSBjcmVhdGVBY3Rpb24oXCJPUEVOX01PREFMXCIpO1xuZXhwb3J0IGNvbnN0IGNsb3NlTW9kYWwgPSBjcmVhdGVBY3Rpb24oXCJDTE9TRV9NT0RBTFwiKTtcbmV4cG9ydCBjb25zdCBjaGFuZ2VQYWdlID0gY3JlYXRlQWN0aW9uKFwiQ0hBTkdFX1BBR0VcIik7XG5leHBvcnQgY29uc3QgY2hhbmdlUGFnZVNpemUgPSBjcmVhdGVBY3Rpb24oXCJDSEFOR0VfUEFHRV9TSVpFXCIpO1xuIiwiaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBGSVJTVF9QQUdFLCBJTklUSUFMX1BBR0VfU0laRSwgVE9UQUxfUk9XUyB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjaGFuZ2VQYWdlLCBjaGFuZ2VQYWdlU2l6ZSwgZmV0Y2hJc0xvYWRpbmcsIGZldGNoUG1zLCBmZXRjaFBtc0Vycm9yLCBmaWx0ZXJCeU5hbWUsIGZpbHRlckJ5VHlwZSwgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5jb25zdCBpbml0aWFsID0ge1xuICAgIHBtc1VJOiBbXSxcbiAgICBzZWFyY2g6IHsgYnlOYW1lOiBcIlwiLCBieVR5cGVzOiBbXSB9LFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgcGFnZTogRklSU1RfUEFHRSxcbiAgICAgICAgcGVyUGFnZTogSU5JVElBTF9QQUdFX1NJWkUsXG4gICAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbChUT1RBTF9ST1dTIC8gSU5JVElBTF9QQUdFX1NJWkUpLFxuICAgIH0sXG4gICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxufTtcbmV4cG9ydCBjb25zdCBwbUxpc3RSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihpbml0aWFsLCAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXJcbiAgICAgICAgLmFkZENhc2UoZmV0Y2hQbXNFcnJvciwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGZldGNoSXNMb2FkaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGZldGNoUG1zLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgcG1zVUk6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSlcbiAgICAgICAgLmFkZENhc2UoZmlsdGVyQnlOYW1lLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXdQYWdpbmF0aW9uID0geyAuLi5zdGF0ZS5wYWdpbmF0aW9uLCBwYWdlOiAwIH07XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiBuZXdQYWdpbmF0aW9uLFxuICAgICAgICAgICAgc2VhcmNoOiB7IC4uLnN0YXRlLnNlYXJjaCwgYnlOYW1lOiBhY3Rpb24ucGF5bG9hZCB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSlcbiAgICAgICAgLmFkZENhc2UoZmlsdGVyQnlUeXBlLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXdQYWdpbmF0aW9uID0geyAuLi5zdGF0ZS5wYWdpbmF0aW9uLCBwYWdlOiAwIH07XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiBuZXdQYWdpbmF0aW9uLFxuICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUuc2VhcmNoLFxuICAgICAgICAgICAgICAgIGJ5VHlwZXM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGNoYW5nZVBhZ2UsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2luYXRpb25OZXcgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5wYWdpbmF0aW9uLFxuICAgICAgICAgICAgcGFnZTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiBwYWdpbmF0aW9uTmV3LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSlcbiAgICAgICAgLmFkZENhc2UoY2hhbmdlUGFnZVNpemUsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHBlclBhZ2UgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbChzdGF0ZS5wbXNVSS5sZW5ndGggLyBwZXJQYWdlKTtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbk5ldyA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLnBhZ2luYXRpb24sXG4gICAgICAgICAgICBwYWdlOiAwLFxuICAgICAgICAgICAgcGVyUGFnZTogcGVyUGFnZSxcbiAgICAgICAgICAgIHRvdGFsUGFnZXM6IHRvdGFsUGFnZXMsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSwgcGFnaW5hdGlvbjogcGFnaW5hdGlvbk5ldyB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSk7XG59KTtcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmV4cG9ydCBjb25zdCBzZWxlY3RQbXMgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIucG1zVUk7XG5leHBvcnQgY29uc3Qgc2VsZWN0UGFnZSA9IChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlci5wYWdpbmF0aW9uLnBhZ2U7XG5leHBvcnQgY29uc3Qgc2VsZWN0UGVyUGFnZSA9IChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlci5wYWdpbmF0aW9uLnBlclBhZ2U7XG5leHBvcnQgY29uc3Qgc2VsZWN0RmlsdGVyZWRQbXMgPSBjcmVhdGVTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIsICh7IHBtc1VJLCBzZWFyY2ggfSkgPT4ge1xuICAgIGNvbnN0IHsgYnlOYW1lLCBieVR5cGVzIH0gPSBzZWFyY2g7XG4gICAgY29uc3QgZmlsdGVyZWRQbXMgPSBwbXNVSS5maWx0ZXIoKHBtKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTmFtZU1hdGNoID0gcG0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ5TmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgY29uc3QgaXNUeXBlTWF0Y2ggPSBieVR5cGVzLmxlbmd0aCA9PT0gMCB8fCBwbS50eXBlcy5zb21lKCh0eXBlKSA9PiBieVR5cGVzLmluY2x1ZGVzKHR5cGUpKTtcbiAgICAgICAgcmV0dXJuIGlzTmFtZU1hdGNoICYmIGlzVHlwZU1hdGNoO1xuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFBtcztcbn0pO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFNsaWNlZFBtcyA9IGNyZWF0ZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlciwgc2VsZWN0RmlsdGVyZWRQbXMsICh7IHBhZ2luYXRpb24gfSwgZmlsdGVyZWRQbXMpID0+IHtcbiAgICBjb25zdCB7IHBlclBhZ2UsIHBhZ2UgfSA9IHBhZ2luYXRpb247XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHBlclBhZ2UgKiBwYWdlO1xuICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIHBlclBhZ2U7XG4gICAgY29uc3Qgc2xpY2VkUG1zID0gZmlsdGVyZWRQbXMuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuICAgIHJldHVybiBzbGljZWRQbXM7XG59KTtcbmV4cG9ydCBjb25zdCBzZWxlY3RUb3RhbFBhZ2VzID0gY3JlYXRlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wbUxpc3RSZWR1Y2VyLCBzZWxlY3RGaWx0ZXJlZFBtcywgKHsgcGFnaW5hdGlvbiB9LCBmaWx0ZXJlZFBtcykgPT4ge1xuICAgIGNvbnN0IHsgcGVyUGFnZSB9ID0gcGFnaW5hdGlvbjtcbiAgICBjb25zdCBzbGljZWRQbXMgPSBNYXRoLmNlaWwoZmlsdGVyZWRQbXMubGVuZ3RoIC8gcGVyUGFnZSk7XG4gICAgcmV0dXJuIHNsaWNlZFBtcztcbn0pO1xuZXhwb3J0IGNvbnN0IHNlbGVjdElzTG9hZGluZyA9IChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlci5pc0xvYWRpbmc7XG5leHBvcnQgY29uc3Qgc2VsZWN0RXJyb3IgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIuZXJyb3I7XG4iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBwbUxpc3RSZWR1Y2VyIH0gZnJvbSBcIi4vcmVkdWNlclwiO1xuaW1wb3J0IHsgcG1BcGkgfSBmcm9tIFwiLi4vYXBpL3VzZUdldFBtQXBpXCI7XG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiB7XG4gICAgICAgIFtwbUFwaS5yZWR1Y2VyUGF0aF06IHBtQXBpLnJlZHVjZXIsXG4gICAgICAgIHBtTGlzdFJlZHVjZXI6IHBtTGlzdFJlZHVjZXIsXG4gICAgfSxcbiAgICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+IGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KHBtQXBpLm1pZGRsZXdhcmUpLFxufSk7XG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsImV4cG9ydCBjb25zdCBleHRyYWN0TWFpbkluZm8gPSAocG9rZW1vbikgPT4ge1xuICAgIGNvbnN0IHsgaWQsIG5hbWUsIHNwcml0ZXMsIHR5cGVzLCBhYmlsaXRpZXMsIHN0YXRzLCBzcGVjaWVzLCBmb3JtcyB9ID0gcG9rZW1vbjtcbiAgICBjb25zdCBwbSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHR5cGVzOiB0eXBlcy5tYXAoKGl0ZW0pID0+IGl0ZW0udHlwZS5uYW1lKSxcbiAgICAgICAgYWJpbGl0aWVzOiBhYmlsaXRpZXMubWFwKChpdGVtKSA9PiBpdGVtLmFiaWxpdHkubmFtZSksXG4gICAgICAgIGZvcm1zOiBmb3Jtcy5tYXAoKGl0ZW0pID0+IGl0ZW0ubmFtZSksXG4gICAgICAgIHNwZWNpZXM6IHNwZWNpZXMubmFtZSxcbiAgICAgICAgaW1nOiBzcHJpdGVzLmZyb250X2RlZmF1bHQsXG4gICAgfTtcbiAgICByZXR1cm4gcG07XG59O1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGYsIHRpbWUpID0+IHtcbiAgICBsZXQgdGltZW91dElkID0gbnVsbDtcbiAgICBjb25zdCBmdW5jdGlvbkNhbGwgPSAoKSA9PiB7XG4gICAgICAgIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIGYoKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiBkZWJvdW5jZWRGdW5jdGlvbiguLi5hcmcpIHtcbiAgICAgICAgaWYgKHRpbWVvdXRJZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uQ2FsbCwgdGltZSwgLi4uYXJnKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHNvcnRUeXBlcyA9IChhLCBiKSA9PiB7XG4gICAgaWYgKGEubmFtZSA8IGIubmFtZSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmIChhLm5hbWUgPiBiLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcbmV4cG9ydCBjb25zdCBnZXRUeXBlQ29sb3IgPSAodHlwZU5hbWUpID0+IHtcbiAgICBzd2l0Y2ggKHR5cGVOYW1lKSB7XG4gICAgICAgIGNhc2UgXCJidWdcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiNBNkI5MUFcIjtcbiAgICAgICAgY2FzZSBcImRhcmtcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM4MDgwODBcIjtcbiAgICAgICAgY2FzZSBcImRyYWdvblwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzZGMzVGQ1wiO1xuICAgICAgICBjYXNlIFwiZWxlY3RyaWNcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiNGN0QwMkNcIjtcbiAgICAgICAgY2FzZSBcImZhaXJ5XCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjRDY4NUFEXCI7XG4gICAgICAgIGNhc2UgXCJmaWdodGluZ1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiI0MyMkUyOFwiO1xuICAgICAgICBjYXNlIFwiZmlyZVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiI0VFODEzMFwiO1xuICAgICAgICBjYXNlIFwiZmx5aW5nXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjQTk4RkYzXCI7XG4gICAgICAgIGNhc2UgXCJnaG9zdFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzczNTc5N1wiO1xuICAgICAgICBjYXNlIFwiZ3Jhc3NcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM3QUM3NENcIjtcbiAgICAgICAgY2FzZSBcImdyb3VuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiI0UyQkY2NVwiO1xuICAgICAgICBjYXNlIFwiaWNlXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjOTZEOUQ2XCI7XG4gICAgICAgIGNhc2UgXCJub3JtYWxcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiNBOEE3N0FcIjtcbiAgICAgICAgY2FzZSBcInBvaXNvblwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiI0I3NjNDRlwiO1xuICAgICAgICBjYXNlIFwicHN5Y2hpY1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiI0Y5NTU4N1wiO1xuICAgICAgICBjYXNlIFwicm9ja1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiI0I2QTEzNlwiO1xuICAgICAgICBjYXNlIFwic2hhZG93XCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjMzMzMzMzXCI7XG4gICAgICAgIGNhc2UgXCJzdGVlbFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiI0I3QjdDRVwiO1xuICAgICAgICBjYXNlIFwidW5rbm93blwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzY4QTA5MFwiO1xuICAgICAgICBjYXNlIFwid2F0ZXJcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM2MzkwRjBcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBcIiM4MDgwODAgXCI7XG4gICAgfVxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtlY2xpcHNlX2Fzc2lnbm1lbnRcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZWNsaXBzZV9hc3NpZ25tZW50XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19tdWlfaWNvbnMtbWF0ZXJpYWxfS2V5Ym9hcmRBcnJvd0Rvd25fanMtbm9kZV9tb2R1bGVzX211aV9pY29ucy1tYXRlcmlhbF8tNDVjZTJhXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzeFwiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9