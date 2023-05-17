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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__["default"], { maxWidth: 'md', sx: { padding: 1 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { direction: 'column', spacing: 3, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { className: 'header', variant: 'h2', component: 'h1', children: "Pokemons" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_HeaderFilters_HeaderFilters__WEBPACK_IMPORTED_MODULE_1__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Table_TableWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {})] }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/api/useGetTypes.ts":
/*!********************************!*\
  !*** ./src/api/useGetTypes.ts ***!
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_4__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_5__["default"], { direction: 'column', spacing: 2, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_4__["default"], { className: 'filter1', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { id: 'demo-multiple-chip-label', children: "Search by name" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { onChange: handleChangeInput, variant: 'outlined', sx: { width: "100%" }, placeholder: 'Pikachu', InputProps: {
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
    const avatarSize = isMobile ? 40 : 110;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { sx: { "& > *": { borderBottom: "unset" } }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { "aria-label": 'expand row', size: 'small', onClick: () => setOpen(!open), children: open ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_8__["default"], {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_9__["default"], {}) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { align: 'center', children: row.name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { align: 'center', size: 'medium', sx: {
                            display: "flex",
                            justifyContent: "center",
                        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { sx: {
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
        padding: "0.5em",
    },
    ".MuiInputBase-root": {
        marginRight: 0,
    },
    "&.MuiTablePagination-root": {
        overflowX: "visible",
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
/* harmony import */ var src_api_useGetTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/api/useGetTypes */ "./src/api/useGetTypes.ts");
/* harmony import */ var src_state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/state/actions */ "./src/state/actions.ts");
/* harmony import */ var src_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/utils */ "./src/utils/utils.ts");





const useFiltersLogic = () => {
    const { data: allTypes } = (0,src_api_useGetTypes__WEBPACK_IMPORTED_MODULE_2__.useGetTypesQuery)();
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
/* harmony import */ var _api_useGetTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/useGetTypes */ "./src/api/useGetTypes.ts");




const fetchPmsThunk = (dispatch) => async (totalRows) => {
    dispatch((0,src_state_actions__WEBPACK_IMPORTED_MODULE_1__.fetchIsLoading)(true));
    try {
        const requests = [];
        for (let id = src_constants__WEBPACK_IMPORTED_MODULE_0__.FIRST_PAGE + 1; id <= totalRows; id++) {
            requests.push(fetch(`${_api_useGetTypes__WEBPACK_IMPORTED_MODULE_3__.BASE_URL}/pokemon/${id}`)
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
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/reselect/es/index.js");
/* harmony import */ var src_utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/utils */ "./src/utils/utils.ts");


const selectPms = (state) => state.pmListReducer.pmsUI;
const selectPage = (state) => state.pmListReducer.pagination.page;
const selectPerPage = (state) => state.pmListReducer.pagination.perPage;
const selectFilteredPms = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSelector)((state) => state.pmListReducer, ({ pmsUI, search }) => {
    const { byName, byTypes } = search;
    const filteredPms = pmsUI.filter((pm) => (0,src_utils_utils__WEBPACK_IMPORTED_MODULE_0__.filterCallback)(pm, byName, byTypes));
    return filteredPms;
});
const selectSlicedPms = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSelector)((state) => state.pmListReducer, selectFilteredPms, ({ pagination }, filteredPms) => {
    const { perPage, page } = pagination;
    const startIndex = perPage * page;
    const endIndex = startIndex + perPage;
    const slicedPms = filteredPms.slice(startIndex, endIndex);
    return slicedPms;
});
const selectTotalPages = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSelector)((state) => state.pmListReducer, selectFilteredPms, ({ pagination }, filteredPms) => {
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
/* harmony import */ var _api_useGetTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/useGetTypes */ "./src/api/useGetTypes.ts");



const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
    reducer: {
        [_api_useGetTypes__WEBPACK_IMPORTED_MODULE_1__.pmApi.reducerPath]: _api_useGetTypes__WEBPACK_IMPORTED_MODULE_1__.pmApi.reducer,
        pmListReducer: _reducer__WEBPACK_IMPORTED_MODULE_0__.pmListReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(_api_useGetTypes__WEBPACK_IMPORTED_MODULE_1__.pmApi.middleware),
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
/* harmony export */   "filterCallback": () => (/* binding */ filterCallback),
/* harmony export */   "getTypeColor": () => (/* binding */ getTypeColor),
/* harmony export */   "sortTypes": () => (/* binding */ sortTypes)
/* harmony export */ });
const extractMainInfo = (pokemon) => {
    const { id, name, sprites, types, abilities, height, weight } = pokemon;
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
const filterCallback = (pm, byName, byTypes) => {
    const isNameMatch = pm.name.toLowerCase().includes(byName.toLowerCase());
    const isTypeMatch = byTypes.length === 0 || pm.types.some((type) => byTypes.includes(type));
    return isNameMatch && isTypeMatch;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL0FwcC5jc3M/OWI3MiIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvY29tcG9uZW50cy9IZWFkZXJGaWx0ZXJzL0hlYWRlckZpbHRlcnMuY3NzPzU1YmQiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2luZGV4LmNzcz9jNDBkIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9hcGkvdXNlR2V0VHlwZXMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2NvbXBvbmVudHMvSGVhZGVyRmlsdGVycy9IZWFkZXJGaWx0ZXJzLnRzeCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvY29tcG9uZW50cy9UYWJsZS9Sb3cudHN4Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlQ29udGVudC50c3giLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2NvbXBvbmVudHMvVGFibGUvVGFibGVXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9ob29rcy91c2VBcHBMb2dpYy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaG9va3MvdXNlRmlsdGVyc0xvZ2ljLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9ob29rcy91c2VUYWJsZUNvbnRhaW5lckxvZ2ljLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9ob29rcy91c2VUYWJsZUxvZ2ljLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL21pZGRsZXdhcmUvdGh1bmtzLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9zdGF0ZS9yZWR1Y2VyLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9zdGF0ZS9zZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL3N0YXRlL3N0b3JlLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy91dGlscy91dGlscy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIjtcbmltcG9ydCBIZWFkZXJGaWx0ZXJzIGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyRmlsdGVycy9IZWFkZXJGaWx0ZXJzXCI7XG5pbXBvcnQgVGFibGVXcmFwcGVyIGZyb20gXCIuL2NvbXBvbmVudHMvVGFibGUvVGFibGVXcmFwcGVyXCI7XG5pbXBvcnQgdXNlQXBwTG9naWMgZnJvbSBcIi4vaG9va3MvdXNlQXBwTG9naWNcIjtcbmltcG9ydCBcIi4vQXBwLmNzc1wiO1xuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvZ2ljID0gdXNlQXBwTG9naWMoKTtcbiAgICByZXR1cm4gKF9qc3goQ29udGFpbmVyLCB7IG1heFdpZHRoOiAnbWQnLCBzeDogeyBwYWRkaW5nOiAxIH0sIGNoaWxkcmVuOiBfanN4cyhTdGFjaywgeyBkaXJlY3Rpb246ICdjb2x1bW4nLCBzcGFjaW5nOiAzLCBjaGlsZHJlbjogW19qc3goVHlwb2dyYXBoeSwgeyBjbGFzc05hbWU6ICdoZWFkZXInLCB2YXJpYW50OiAnaDInLCBjb21wb25lbnQ6ICdoMScsIGNoaWxkcmVuOiBcIlBva2Vtb25zXCIgfSksIF9qc3goSGVhZGVyRmlsdGVycywge30pLCBfanN4KFRhYmxlV3JhcHBlciwge30pXSB9KSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0XCI7XG5pbXBvcnQgeyBzb3J0VHlwZXMgfSBmcm9tIFwic3JjL3V0aWxzL3V0aWxzXCI7XG5leHBvcnQgY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjJcIjtcbmV4cG9ydCBjb25zdCBwbUFwaSA9IGNyZWF0ZUFwaSh7XG4gICAgcmVkdWNlclBhdGg6IFwicG1BcGlcIixcbiAgICB0YWdUeXBlczogW1wiVHlwZXNcIl0sXG4gICAgYmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7XG4gICAgICAgIGJhc2VVcmw6IGAke0JBU0VfVVJMfWAsXG4gICAgfSksXG4gICAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcbiAgICAgICAgZ2V0VHlwZXM6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6ICgpID0+IGAvdHlwZWAsXG4gICAgICAgICAgICBwcm92aWRlc1RhZ3M6IFtcIlR5cGVzXCJdLFxuICAgICAgICAgICAgdHJhbnNmb3JtUmVzcG9uc2U6IChyZXNwb25zZSkgPT4gcmVzcG9uc2UucmVzdWx0cy5zb3J0KHNvcnRUeXBlcyksXG4gICAgICAgIH0pLFxuICAgIH0pLFxufSk7XG5leHBvcnQgY29uc3QgeyB1c2VHZXRUeXBlc1F1ZXJ5IH0gPSBwbUFwaTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBDaGlwLCBUZXh0RmllbGQsIElucHV0TGFiZWwsIE1lbnVJdGVtLCBPdXRsaW5lZElucHV0LCBTZWxlY3QsIElucHV0QWRvcm5tZW50LCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBCb3gsIFN0YWNrIH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2hcIjtcbmltcG9ydCB1c2VGaWx0ZXJzTG9naWMgZnJvbSBcInNyYy9ob29rcy91c2VGaWx0ZXJzTG9naWNcIjtcbmltcG9ydCB7IGdldFR5cGVDb2xvciB9IGZyb20gXCJzcmMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCBcIi4vSGVhZGVyRmlsdGVycy5jc3NcIjtcbmNvbnN0IElURU1fSEVJR0hUID0gNDg7XG5jb25zdCBJVEVNX1BBRERJTkdfVE9QID0gODtcbmNvbnN0IE1lbnVQcm9wcyA9IHtcbiAgICBQYXBlclByb3BzOiB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhIZWlnaHQ6IElURU1fSEVJR0hUICogNC41ICsgSVRFTV9QQURESU5HX1RPUCxcbiAgICAgICAgICAgIHdpZHRoOiAyNTAsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5jb25zdCBIZWFkZXJGaWx0ZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaGFuZGxlQ2hhbmdlU2VsZWN0LCBoYW5kbGVDaGFuZ2VJbnB1dCwgYWxsVHlwZXMsIHNlbGVjdGVkVHlwZXMsIGlzVHlwZXNBcnJheSwgfSA9IHVzZUZpbHRlcnNMb2dpYygpO1xuICAgIHJldHVybiAoX2pzeChCb3gsIHsgY2hpbGRyZW46IF9qc3hzKFN0YWNrLCB7IGRpcmVjdGlvbjogJ2NvbHVtbicsIHNwYWNpbmc6IDIsIGNoaWxkcmVuOiBbX2pzeHMoQm94LCB7IGNsYXNzTmFtZTogJ2ZpbHRlcjEnLCBjaGlsZHJlbjogW19qc3goSW5wdXRMYWJlbCwgeyBpZDogJ2RlbW8tbXVsdGlwbGUtY2hpcC1sYWJlbCcsIGNoaWxkcmVuOiBcIlNlYXJjaCBieSBuYW1lXCIgfSksIF9qc3goVGV4dEZpZWxkLCB7IG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VJbnB1dCwgdmFyaWFudDogJ291dGxpbmVkJywgc3g6IHsgd2lkdGg6IFwiMTAwJVwiIH0sIHBsYWNlaG9sZGVyOiAnUGlrYWNodScsIElucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IChfanN4KElucHV0QWRvcm5tZW50LCB7IHBvc2l0aW9uOiAnc3RhcnQnLCBjaGlsZHJlbjogX2pzeChTZWFyY2hJY29uLCB7fSkgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGlucHV0UHJvcHM6IHsgXCJhcmlhLWxhYmVsXCI6IFwic2VhcmNoIGJ5IG5hbWVcIiB9IH0pXSB9KSwgX2pzeHMoQm94LCB7IGNsYXNzTmFtZTogJ2ZpbHRlcjInLCBjaGlsZHJlbjogW19qc3goSW5wdXRMYWJlbCwgeyBpZDogJ2RlbW8tbXVsdGlwbGUtY2hpcC1sYWJlbCcsIGNoaWxkcmVuOiBcIlNlbGVjdCBieSB0eXBlXCIgfSksIF9qc3goU2VsZWN0LCB7IGxhYmVsSWQ6ICdkZW1vLW11bHRpcGxlLWNoaXAtbGFiZWwnLCBpZDogJ2RlbW8tbXVsdGlwbGUtY2hpcCcsIG11bHRpcGxlOiB0cnVlLCB2YWx1ZTogc2VsZWN0ZWRUeXBlcywgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZVNlbGVjdCwgaW5wdXQ6IF9qc3goT3V0bGluZWRJbnB1dCwgeyBpZDogJ3NlbGVjdC1tdWx0aXBsZS1jaGlwJywgbGFiZWw6ICdTZWxlY3QgYnkgdHlwZScgfSksIHJlbmRlclZhbHVlOiAoc2VsZWN0ZWQpID0+IChfanN4KEJveCwgeyBzeDogeyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiLCBnYXA6IDAuNSB9LCBjaGlsZHJlbjogc2VsZWN0ZWQubWFwKCh2YWx1ZSkgPT4gKF9qc3goQ2hpcCwgeyBsYWJlbDogdmFsdWUsIHN4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBnZXRUeXBlQ29sb3IodmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHZhbHVlKSkpIH0pKSwgTWVudVByb3BzOiBNZW51UHJvcHMsIHN4OiB7IHdpZHRoOiBcIjEwMCVcIiB9LCBjaGlsZHJlbjogaXNUeXBlc0FycmF5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFR5cGVzPy5tYXAoKHsgbmFtZSB9KSA9PiAoX2pzeChNZW51SXRlbSwgeyB2YWx1ZTogbmFtZSwgY2hpbGRyZW46IG5hbWUgfSwgbmFtZSkpKSB9KV0gfSldIH0pIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIZWFkZXJGaWx0ZXJzO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgVGFibGVSb3csIFRhYmxlQ2VsbCwgSWNvbkJ1dHRvbiwgQ29sbGFwc2UsIEJveCwgVGFibGUsIFRhYmxlSGVhZCwgVGFibGVCb2R5LCBBdmF0YXIsIENoaXAsIFN0YWNrLCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0Rvd25JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dEb3duXCI7XG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1VwSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93VXBcIjtcbmltcG9ydCB7IGdldFR5cGVDb2xvciB9IGZyb20gXCJzcmMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmZ1bmN0aW9uIFJvdyhwcm9wcykge1xuICAgIGNvbnN0IHsgcm93IH0gPSBwcm9wcztcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICAgIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xuICAgIGNvbnN0IGF2YXRhclNpemUgPSBpc01vYmlsZSA/IDQwIDogMTEwO1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeHMoVGFibGVSb3csIHsgc3g6IHsgXCImID4gKlwiOiB7IGJvcmRlckJvdHRvbTogXCJ1bnNldFwiIH0gfSwgY2hpbGRyZW46IFtfanN4KFRhYmxlQ2VsbCwgeyBjaGlsZHJlbjogX2pzeChJY29uQnV0dG9uLCB7IFwiYXJpYS1sYWJlbFwiOiAnZXhwYW5kIHJvdycsIHNpemU6ICdzbWFsbCcsIG9uQ2xpY2s6ICgpID0+IHNldE9wZW4oIW9wZW4pLCBjaGlsZHJlbjogb3BlbiA/IF9qc3goS2V5Ym9hcmRBcnJvd1VwSWNvbiwge30pIDogX2pzeChLZXlib2FyZEFycm93RG93bkljb24sIHt9KSB9KSB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogcm93Lm5hbWUgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgc2l6ZTogJ21lZGl1bScsIHN4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBjaGlsZHJlbjogX2pzeChBdmF0YXIsIHsgc3g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF2YXRhclNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXZhdGFyU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBzcmM6IHJvdy5pbWcsIGFsdDogYCR7cm93Lm5hbWV9IHBob3RvYCB9KSB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogX2pzeChTdGFjaywgeyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGRpcmVjdGlvbjogJ3JvdycsIHNwYWNpbmc6IGlzTW9iaWxlID8gMCA6IDEsIGNoaWxkcmVuOiByb3cudHlwZXMubWFwKCh0eXBlKSA9PiAoX2pzeChDaGlwLCB7IHNpemU6ICdzbWFsbCcsIHN4OiB7IGJhY2tncm91bmRDb2xvcjogZ2V0VHlwZUNvbG9yKHR5cGUpLCBjb2xvcjogXCJ3aGl0ZVwiIH0sIGxhYmVsOiB0eXBlIH0sIHR5cGUpKSkgfSkgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IHJvdy5hYmlsaXRpZXMubWFwKChpdGVtKSA9PiAoX2pzeChCb3gsIHsgc3g6IHsgcGFkZGluZ1k6IDEgfSwgY2hpbGRyZW46IGl0ZW0gfSwgaXRlbSkpKSB9KV0gfSksIF9qc3goVGFibGVSb3csIHsgY2hpbGRyZW46IF9qc3goVGFibGVDZWxsLCB7IHN4OiB7IHBhZGRpbmdCb3R0b206IDAsIHBhZGRpbmdUb3A6IDAgfSwgY29sU3BhbjogNiwgY2hpbGRyZW46IF9qc3goQ29sbGFwc2UsIHsgaW46IG9wZW4sIHRpbWVvdXQ6ICdhdXRvJywgdW5tb3VudE9uRXhpdDogdHJ1ZSwgY2hpbGRyZW46IF9qc3goQm94LCB7IHN4OiB7IG1hcmdpbjogMSB9LCBjaGlsZHJlbjogX2pzeHMoVGFibGUsIHsgc2l6ZTogJ3NtYWxsJywgXCJhcmlhLWxhYmVsXCI6ICdwdXJjaGFzZXMnLCBjaGlsZHJlbjogW19qc3goVGFibGVIZWFkLCB7IGNoaWxkcmVuOiBfanN4cyhUYWJsZVJvdywgeyBjaGlsZHJlbjogW19qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IFwiSGVpZ2h0XCIgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IFwiV2VpZ2h0XCIgfSldIH0pIH0pLCBfanN4KFRhYmxlQm9keSwgeyBjaGlsZHJlbjogX2pzeHMoVGFibGVSb3csIHsgY2hpbGRyZW46IFtfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiByb3cuaGVpZ2h0IH0pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiByb3cud2VpZ2h0IH0pXSB9LCByb3cuaWQpIH0pXSB9KSB9KSB9KSB9KSB9KV0gfSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgUm93O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IFBhcGVyLCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlQ29udGFpbmVyLCBUYWJsZUhlYWQsIFRhYmxlUGFnaW5hdGlvbiwgVGFibGVSb3csIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB1c2VUYWJsZUxvZ2ljIGZyb20gXCJzcmMvaG9va3MvdXNlVGFibGVMb2dpY1wiO1xuaW1wb3J0IFJvdyBmcm9tIFwiLi9Sb3dcIjtcbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBcIi5NdWlUb29sYmFyLXJvb3RcIjoge1xuICAgICAgICBwYWRkaW5nOiBcIjAuNWVtXCIsXG4gICAgfSxcbiAgICBcIi5NdWlJbnB1dEJhc2Utcm9vdFwiOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiAwLFxuICAgIH0sXG4gICAgXCImLk11aVRhYmxlUGFnaW5hdGlvbi1yb290XCI6IHtcbiAgICAgICAgb3ZlcmZsb3dYOiBcInZpc2libGVcIixcbiAgICB9LFxufTtcbmNvbnN0IFRhYmxlQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGhhbmRsZVBhZ2VDaGFuZ2UsIGhhbmRsZVBhZ2VTaXplQ2hhbmdlLCBwbXNPblBhZ2UsIHBhZ2UsIHBlclBhZ2UsIHRvdGFsQ291bnQsIHBhZGRpbmdWYWx1ZSwgfSA9IHVzZVRhYmxlTG9naWMoKTtcbiAgICByZXR1cm4gKF9qc3hzKFRhYmxlQ29udGFpbmVyLCB7IGNvbXBvbmVudDogUGFwZXIsIGNoaWxkcmVuOiBbX2pzeHMoVGFibGUsIHsgcGFkZGluZzogcGFkZGluZ1ZhbHVlLCBcImFyaWEtbGFiZWxcIjogJ2NvbGxhcHNpYmxlIHRhYmxlJywgY2hpbGRyZW46IFtfanN4KFRhYmxlSGVhZCwgeyBjaGlsZHJlbjogX2pzeHMoVGFibGVSb3csIHsgY2hpbGRyZW46IFtfanN4KFRhYmxlQ2VsbCwge30pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiBcIk5hbWVcIiB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogXCJBdmF0YXJcIiB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogXCJUeXBlXCIgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IFwiQWJpbGl0aWVzXCIgfSldIH0pIH0pLCBfanN4KFRhYmxlQm9keSwgeyBjaGlsZHJlbjogcG1zT25QYWdlLm1hcCgocm93KSA9PiAoX2pzeChSb3csIHsgcm93OiByb3cgfSwgcm93LmlkKSkpIH0pXSB9KSwgX2pzeChUYWJsZVBhZ2luYXRpb24sIHsgY29tcG9uZW50OiAnZGl2JywgY291bnQ6IHRvdGFsQ291bnQsIHBhZ2U6IHBhZ2UsIG9uUGFnZUNoYW5nZTogaGFuZGxlUGFnZUNoYW5nZSwgcm93c1BlclBhZ2U6IHBlclBhZ2UsIG9uUm93c1BlclBhZ2VDaGFuZ2U6IGhhbmRsZVBhZ2VTaXplQ2hhbmdlLCBzaXplOiAnc21hbGwnLCBzeDogc3R5bGVzIH0pXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGFibGVDb250ZW50O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgQWxlcnQsIFNrZWxldG9uLCBTdGFjayB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgdXNlVGFibGVDb250YWluZXJMb2dpYyBmcm9tIFwic3JjL2hvb2tzL3VzZVRhYmxlQ29udGFpbmVyTG9naWNcIjtcbmltcG9ydCBUYWJsZUNvbnRlbnQgZnJvbSBcIi4vVGFibGVDb250ZW50XCI7XG5jb25zdCBUYWJsZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpc0xvYWRpbmcsIGVycm9yIH0gPSB1c2VUYWJsZUNvbnRhaW5lckxvZ2ljKCk7XG4gICAgcmV0dXJuIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIH0sIGNoaWxkcmVuOiBpc0xvYWRpbmcgJiYgIWVycm9yID8gKF9qc3hzKFN0YWNrLCB7IGRpcmVjdGlvbjogJ2NvbHVtbicsIHdpZHRoOiAnMTAwJScsIHNwYWNpbmc6IDIsIGNoaWxkcmVuOiBbX2pzeChTa2VsZXRvbiwgeyBhbmltYXRpb246ICd3YXZlJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnNWVtJyB9KSwgX2pzeChTa2VsZXRvbiwgeyBhbmltYXRpb246ICd3YXZlJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnNWVtJyB9KSwgX2pzeChTa2VsZXRvbiwgeyBhbmltYXRpb246ICd3YXZlJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnNWVtJyB9KV0gfSkpIDogKF9qc3goVGFibGVDb250ZW50LCB7fSkpIH0pLCBlcnJvciAmJiBfanN4KEFsZXJ0LCB7IHNldmVyaXR5OiAnZXJyb3InLCBjaGlsZHJlbjogZXJyb3IgfSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBUYWJsZVdyYXBwZXI7XG4iLCJleHBvcnQgY29uc3QgSU5JVElBTF9QQUdFX1NJWkUgPSAyNTtcbmV4cG9ydCBjb25zdCBUT1RBTF9ST1dTID0gMTAwO1xuZXhwb3J0IGNvbnN0IEZJUlNUX1BBR0UgPSAwO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgZmV0Y2hQbXNUaHVuayB9IGZyb20gXCJzcmMvbWlkZGxld2FyZS90aHVua3NcIjtcbmltcG9ydCB7IFRPVEFMX1JPV1MgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xuY29uc3QgdXNlQXBwTG9naWMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGZldGNoSW5pdGlhbCA9IGZldGNoUG1zVGh1bmsoZGlzcGF0Y2gpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoSW5pdGlhbChUT1RBTF9ST1dTKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHt9O1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUFwcExvZ2ljO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VHZXRUeXBlc1F1ZXJ5IH0gZnJvbSBcInNyYy9hcGkvdXNlR2V0VHlwZXNcIjtcbmltcG9ydCB7IGZpbHRlckJ5TmFtZSwgZmlsdGVyQnlUeXBlIH0gZnJvbSBcInNyYy9zdGF0ZS9hY3Rpb25zXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCJzcmMvdXRpbHMvdXRpbHNcIjtcbmNvbnN0IHVzZUZpbHRlcnNMb2dpYyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGE6IGFsbFR5cGVzIH0gPSB1c2VHZXRUeXBlc1F1ZXJ5KCk7XG4gICAgY29uc3QgW3NlbGVjdGVkVHlwZXMsIHNldFNlbGVjdGVkVHlwZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VTZWxlY3QgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyB0YXJnZXQ6IHsgdmFsdWUgfSwgfSA9IGV2ZW50O1xuICAgICAgICBjb25zdCB2YWwgPSB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgPyB2YWx1ZS5zcGxpdChcIixcIikgOiB2YWx1ZTtcbiAgICAgICAgc2V0U2VsZWN0ZWRUeXBlcyh2YWwpO1xuICAgICAgICBkaXNwYXRjaChmaWx0ZXJCeVR5cGUodmFsKSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IChlKSA9PiB7XG4gICAgICAgIGRlYm91bmNlKCgpID0+IGRpc3BhdGNoKGZpbHRlckJ5TmFtZShlLnRhcmdldC52YWx1ZSkpLCA1MDApKCk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBoYW5kbGVDaGFuZ2VTZWxlY3QsXG4gICAgICAgIGhhbmRsZUNoYW5nZUlucHV0LFxuICAgICAgICBhbGxUeXBlcyxcbiAgICAgICAgc2VsZWN0ZWRUeXBlcyxcbiAgICAgICAgaXNUeXBlc0FycmF5OiBhbGxUeXBlcyAmJiBBcnJheS5pc0FycmF5KGFsbFR5cGVzKSxcbiAgICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUZpbHRlcnNMb2dpYztcbiIsImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZWxlY3RFcnJvciwgc2VsZWN0SXNMb2FkaW5nIH0gZnJvbSBcInNyYy9zdGF0ZS9zZWxlY3RvcnNcIjtcbmNvbnN0IHVzZUxpc3RMb2dpYyA9ICgpID0+IHtcbiAgICBjb25zdCBpc0xvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RJc0xvYWRpbmcpO1xuICAgIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc2VsZWN0RXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgZXJyb3IsXG4gICAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VMaXN0TG9naWM7XG4iLCJpbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5LCB1c2VUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGNoYW5nZVBhZ2UsIGNoYW5nZVBhZ2VTaXplIH0gZnJvbSBcInNyYy9zdGF0ZS9hY3Rpb25zXCI7XG5pbXBvcnQgeyBzZWxlY3RQYWdlLCBzZWxlY3RQZXJQYWdlLCBzZWxlY3RTbGljZWRQbXMsIHNlbGVjdFRvdGFsUGFnZXMsIH0gZnJvbSBcInNyYy9zdGF0ZS9zZWxlY3RvcnNcIjtcbmNvbnN0IHVzZVRhYmxlTG9naWMgPSAoKSA9PiB7XG4gICAgY29uc3QgcG1zT25QYWdlID0gdXNlU2VsZWN0b3Ioc2VsZWN0U2xpY2VkUG1zKTtcbiAgICBjb25zdCBwYWdlID0gdXNlU2VsZWN0b3Ioc2VsZWN0UGFnZSk7XG4gICAgY29uc3QgcGVyUGFnZSA9IHVzZVNlbGVjdG9yKHNlbGVjdFBlclBhZ2UpO1xuICAgIGNvbnN0IHRvdGFsUGFnZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RUb3RhbFBhZ2VzKTtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gICAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKSk7XG4gICAgY29uc3QgcGFkZGluZ1ZhbHVlID0gaXNNb2JpbGUgPyBcIm5vbmVcIiA6IFwibm9ybWFsXCI7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAoZSwgbmV3UGFnZSkgPT4gZGlzcGF0Y2goY2hhbmdlUGFnZShuZXdQYWdlKSk7XG4gICAgY29uc3QgaGFuZGxlUGFnZVNpemVDaGFuZ2UgPSAoZSkgPT4gZGlzcGF0Y2goY2hhbmdlUGFnZVNpemUoK2UudGFyZ2V0LnZhbHVlKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGFuZGxlUGFnZUNoYW5nZSxcbiAgICAgICAgaGFuZGxlUGFnZVNpemVDaGFuZ2UsXG4gICAgICAgIHBtc09uUGFnZSxcbiAgICAgICAgcGFnZSxcbiAgICAgICAgcGVyUGFnZSxcbiAgICAgICAgdG90YWxDb3VudDogdG90YWxQYWdlcyAqIHBlclBhZ2UsXG4gICAgICAgIHBhZGRpbmdWYWx1ZSxcbiAgICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVRhYmxlTG9naWM7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RhdGUvc3RvcmVcIjtcbmltcG9ydCBcIkBmb250c291cmNlL3JvYm90by9sYXRpbi00MDAuY3NzXCI7XG5pbXBvcnQgXCJAZm9udHNvdXJjZS9yb2JvdG8vbGF0aW4tNTAwLmNzc1wiO1xuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpLnJlbmRlcihfanN4KFJlYWN0LlN0cmljdE1vZGUsIHsgY2hpbGRyZW46IF9qc3goUHJvdmlkZXIsIHsgc3RvcmU6IHN0b3JlLCBjaGlsZHJlbjogX2pzeChBcHAsIHt9KSB9KSB9KSk7XG4iLCJpbXBvcnQgeyBGSVJTVF9QQUdFIH0gZnJvbSBcInNyYy9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZldGNoUG1zLCBmZXRjaFBtc0Vycm9yLCBmZXRjaElzTG9hZGluZyB9IGZyb20gXCJzcmMvc3RhdGUvYWN0aW9uc1wiO1xuaW1wb3J0IHsgZXh0cmFjdE1haW5JbmZvIH0gZnJvbSBcInNyYy91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi4vYXBpL3VzZUdldFR5cGVzXCI7XG5leHBvcnQgY29uc3QgZmV0Y2hQbXNUaHVuayA9IChkaXNwYXRjaCkgPT4gYXN5bmMgKHRvdGFsUm93cykgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoSXNMb2FkaW5nKHRydWUpKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpZCA9IEZJUlNUX1BBR0UgKyAxOyBpZCA8PSB0b3RhbFJvd3M7IGlkKyspIHtcbiAgICAgICAgICAgIHJlcXVlc3RzLnB1c2goZmV0Y2goYCR7QkFTRV9VUkx9L3Bva2Vtb24vJHtpZH1gKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIFBva2Vtb24gZGF0YVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGV4dHJhY3RNYWluSW5mbyhkYXRhKSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChyZXF1ZXN0cyk7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUG1zKGRhdGEpKTtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hJc0xvYWRpbmcoZmFsc2UpKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKVxuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hQbXNFcnJvcihlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxufTtcbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5leHBvcnQgY29uc3QgZmV0Y2hQbXMgPSBjcmVhdGVBY3Rpb24oXCJGRVRDSF9QTVNcIik7XG5leHBvcnQgY29uc3QgZmV0Y2hQbXNFcnJvciA9IGNyZWF0ZUFjdGlvbihcIkZFVENIX1BNU19FUlJPUlwiKTtcbmV4cG9ydCBjb25zdCBmZXRjaElzTG9hZGluZyA9IGNyZWF0ZUFjdGlvbihcIkZFVENIX1BNU19JU19MT0FESU5HXCIpO1xuZXhwb3J0IGNvbnN0IGZpbHRlckJ5TmFtZSA9IGNyZWF0ZUFjdGlvbihcIkZJTFRFUl9CWV9OQU1FXCIpO1xuZXhwb3J0IGNvbnN0IGZpbHRlckJ5VHlwZSA9IGNyZWF0ZUFjdGlvbihcIkZJTFRFUl9CWV9UWVBFXCIpO1xuZXhwb3J0IGNvbnN0IGNsZWFyRmlsdGVyID0gY3JlYXRlQWN0aW9uKFwiQ0xFQVJfRklMVEVSXCIpO1xuZXhwb3J0IGNvbnN0IG9wZW5Nb2RhbCA9IGNyZWF0ZUFjdGlvbihcIk9QRU5fTU9EQUxcIik7XG5leHBvcnQgY29uc3QgY2xvc2VNb2RhbCA9IGNyZWF0ZUFjdGlvbihcIkNMT1NFX01PREFMXCIpO1xuZXhwb3J0IGNvbnN0IGNoYW5nZVBhZ2UgPSBjcmVhdGVBY3Rpb24oXCJDSEFOR0VfUEFHRVwiKTtcbmV4cG9ydCBjb25zdCBjaGFuZ2VQYWdlU2l6ZSA9IGNyZWF0ZUFjdGlvbihcIkNIQU5HRV9QQUdFX1NJWkVcIik7XG4iLCJpbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IEZJUlNUX1BBR0UsIElOSVRJQUxfUEFHRV9TSVpFLCBUT1RBTF9ST1dTIH0gZnJvbSBcInNyYy9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNoYW5nZVBhZ2UsIGNoYW5nZVBhZ2VTaXplLCBmZXRjaElzTG9hZGluZywgZmV0Y2hQbXMsIGZldGNoUG1zRXJyb3IsIGZpbHRlckJ5TmFtZSwgZmlsdGVyQnlUeXBlLCB9IGZyb20gXCIuL2FjdGlvbnNcIjtcbmNvbnN0IGluaXRpYWwgPSB7XG4gICAgcG1zVUk6IFtdLFxuICAgIHNlYXJjaDogeyBieU5hbWU6IFwiXCIsIGJ5VHlwZXM6IFtdIH0sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBwYWdlOiBGSVJTVF9QQUdFLFxuICAgICAgICBwZXJQYWdlOiBJTklUSUFMX1BBR0VfU0laRSxcbiAgICAgICAgdG90YWxQYWdlczogTWF0aC5jZWlsKFRPVEFMX1JPV1MgLyBJTklUSUFMX1BBR0VfU0laRSksXG4gICAgfSxcbiAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgIGlzTG9hZGluZzogZmFsc2UsXG59O1xuZXhwb3J0IGNvbnN0IHBtTGlzdFJlZHVjZXIgPSBjcmVhdGVSZWR1Y2VyKGluaXRpYWwsIChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlclxuICAgICAgICAuYWRkQ2FzZShmZXRjaFBtc0Vycm9yLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSlcbiAgICAgICAgLmFkZENhc2UoZmV0Y2hJc0xvYWRpbmcsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSlcbiAgICAgICAgLmFkZENhc2UoZmV0Y2hQbXMsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBwbXNVSTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9KVxuICAgICAgICAuYWRkQ2FzZShmaWx0ZXJCeU5hbWUsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1BhZ2luYXRpb24gPSB7IC4uLnN0YXRlLnBhZ2luYXRpb24sIHBhZ2U6IDAgfTtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb246IG5ld1BhZ2luYXRpb24sXG4gICAgICAgICAgICBzZWFyY2g6IHsgLi4uc3RhdGUuc2VhcmNoLCBieU5hbWU6IGFjdGlvbi5wYXlsb2FkIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9KVxuICAgICAgICAuYWRkQ2FzZShmaWx0ZXJCeVR5cGUsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1BhZ2luYXRpb24gPSB7IC4uLnN0YXRlLnBhZ2luYXRpb24sIHBhZ2U6IDAgfTtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb246IG5ld1BhZ2luYXRpb24sXG4gICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgYnlUeXBlczogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSlcbiAgICAgICAgLmFkZENhc2UoY2hhbmdlUGFnZSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbk5ldyA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLnBhZ2luYXRpb24sXG4gICAgICAgICAgICBwYWdlOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHBhZ2luYXRpb25OZXcsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9KVxuICAgICAgICAuYWRkQ2FzZShjaGFuZ2VQYWdlU2l6ZSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgcGVyUGFnZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHN0YXRlLnBtc1VJLmxlbmd0aCAvIHBlclBhZ2UpO1xuICAgICAgICBjb25zdCBwYWdpbmF0aW9uTmV3ID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUucGFnaW5hdGlvbixcbiAgICAgICAgICAgIHBhZ2U6IDAsXG4gICAgICAgICAgICBwZXJQYWdlOiBwZXJQYWdlLFxuICAgICAgICAgICAgdG90YWxQYWdlczogdG90YWxQYWdlcyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLnN0YXRlLCBwYWdpbmF0aW9uOiBwYWdpbmF0aW9uTmV3IH07XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgZmlsdGVyQ2FsbGJhY2sgfSBmcm9tIFwic3JjL3V0aWxzL3V0aWxzXCI7XG5leHBvcnQgY29uc3Qgc2VsZWN0UG1zID0gKHN0YXRlKSA9PiBzdGF0ZS5wbUxpc3RSZWR1Y2VyLnBtc1VJO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFBhZ2UgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIucGFnaW5hdGlvbi5wYWdlO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFBlclBhZ2UgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIucGFnaW5hdGlvbi5wZXJQYWdlO1xuZXhwb3J0IGNvbnN0IHNlbGVjdEZpbHRlcmVkUG1zID0gY3JlYXRlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wbUxpc3RSZWR1Y2VyLCAoeyBwbXNVSSwgc2VhcmNoIH0pID0+IHtcbiAgICBjb25zdCB7IGJ5TmFtZSwgYnlUeXBlcyB9ID0gc2VhcmNoO1xuICAgIGNvbnN0IGZpbHRlcmVkUG1zID0gcG1zVUkuZmlsdGVyKChwbSkgPT4gZmlsdGVyQ2FsbGJhY2socG0sIGJ5TmFtZSwgYnlUeXBlcykpO1xuICAgIHJldHVybiBmaWx0ZXJlZFBtcztcbn0pO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFNsaWNlZFBtcyA9IGNyZWF0ZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlciwgc2VsZWN0RmlsdGVyZWRQbXMsICh7IHBhZ2luYXRpb24gfSwgZmlsdGVyZWRQbXMpID0+IHtcbiAgICBjb25zdCB7IHBlclBhZ2UsIHBhZ2UgfSA9IHBhZ2luYXRpb247XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHBlclBhZ2UgKiBwYWdlO1xuICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIHBlclBhZ2U7XG4gICAgY29uc3Qgc2xpY2VkUG1zID0gZmlsdGVyZWRQbXMuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuICAgIHJldHVybiBzbGljZWRQbXM7XG59KTtcbmV4cG9ydCBjb25zdCBzZWxlY3RUb3RhbFBhZ2VzID0gY3JlYXRlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wbUxpc3RSZWR1Y2VyLCBzZWxlY3RGaWx0ZXJlZFBtcywgKHsgcGFnaW5hdGlvbiB9LCBmaWx0ZXJlZFBtcykgPT4ge1xuICAgIGNvbnN0IHsgcGVyUGFnZSB9ID0gcGFnaW5hdGlvbjtcbiAgICBjb25zdCBzbGljZWRQbXMgPSBNYXRoLmNlaWwoZmlsdGVyZWRQbXMubGVuZ3RoIC8gcGVyUGFnZSk7XG4gICAgcmV0dXJuIHNsaWNlZFBtcztcbn0pO1xuZXhwb3J0IGNvbnN0IHNlbGVjdElzTG9hZGluZyA9IChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlci5pc0xvYWRpbmc7XG5leHBvcnQgY29uc3Qgc2VsZWN0RXJyb3IgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIuZXJyb3I7XG4iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBwbUxpc3RSZWR1Y2VyIH0gZnJvbSBcIi4vcmVkdWNlclwiO1xuaW1wb3J0IHsgcG1BcGkgfSBmcm9tIFwiLi4vYXBpL3VzZUdldFR5cGVzXCI7XG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiB7XG4gICAgICAgIFtwbUFwaS5yZWR1Y2VyUGF0aF06IHBtQXBpLnJlZHVjZXIsXG4gICAgICAgIHBtTGlzdFJlZHVjZXI6IHBtTGlzdFJlZHVjZXIsXG4gICAgfSxcbiAgICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+IGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KHBtQXBpLm1pZGRsZXdhcmUpLFxufSk7XG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsImV4cG9ydCBjb25zdCBleHRyYWN0TWFpbkluZm8gPSAocG9rZW1vbikgPT4ge1xuICAgIGNvbnN0IHsgaWQsIG5hbWUsIHNwcml0ZXMsIHR5cGVzLCBhYmlsaXRpZXMsIGhlaWdodCwgd2VpZ2h0IH0gPSBwb2tlbW9uO1xuICAgIGNvbnN0IHBtID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdHlwZXM6IHR5cGVzLm1hcCgoaXRlbSkgPT4gaXRlbS50eXBlLm5hbWUpLFxuICAgICAgICBhYmlsaXRpZXM6IGFiaWxpdGllcy5tYXAoKGl0ZW0pID0+IGl0ZW0uYWJpbGl0eS5uYW1lKSxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB3ZWlnaHQsXG4gICAgICAgIGltZzogc3ByaXRlcy5mcm9udF9kZWZhdWx0LFxuICAgIH07XG4gICAgcmV0dXJuIHBtO1xufTtcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmLCB0aW1lKSA9PiB7XG4gICAgbGV0IHRpbWVvdXRJZCA9IG51bGw7XG4gICAgY29uc3QgZnVuY3Rpb25DYWxsID0gKCkgPT4ge1xuICAgICAgICB0aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICBmKCk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gZGVib3VuY2VkRnVuY3Rpb24oLi4uYXJnKSB7XG4gICAgICAgIGlmICh0aW1lb3V0SWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbkNhbGwsIHRpbWUsIC4uLmFyZyk7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBmaWx0ZXJDYWxsYmFjayA9IChwbSwgYnlOYW1lLCBieVR5cGVzKSA9PiB7XG4gICAgY29uc3QgaXNOYW1lTWF0Y2ggPSBwbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnlOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgIGNvbnN0IGlzVHlwZU1hdGNoID0gYnlUeXBlcy5sZW5ndGggPT09IDAgfHwgcG0udHlwZXMuc29tZSgodHlwZSkgPT4gYnlUeXBlcy5pbmNsdWRlcyh0eXBlKSk7XG4gICAgcmV0dXJuIGlzTmFtZU1hdGNoICYmIGlzVHlwZU1hdGNoO1xufTtcbmV4cG9ydCBjb25zdCBzb3J0VHlwZXMgPSAoYSwgYikgPT4ge1xuICAgIGlmIChhLm5hbWUgPCBiLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAoYS5uYW1lID4gYi5uYW1lKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5leHBvcnQgY29uc3QgZ2V0VHlwZUNvbG9yID0gKHR5cGVOYW1lKSA9PiB7XG4gICAgc3dpdGNoICh0eXBlTmFtZSkge1xuICAgICAgICBjYXNlIFwiYnVnXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjOTQ3YzE1XCI7XG4gICAgICAgIGNhc2UgXCJkYXJrXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjODA4MDgwXCI7XG4gICAgICAgIGNhc2UgXCJkcmFnb25cIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM2RjM1RkNcIjtcbiAgICAgICAgY2FzZSBcImVsZWN0cmljXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjYjk5ZjFhXCI7XG4gICAgICAgIGNhc2UgXCJmYWlyeVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiI2M5MWM3MlwiO1xuICAgICAgICBjYXNlIFwiZmlnaHRpbmdcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiNDMjJFMjhcIjtcbiAgICAgICAgY2FzZSBcImZpcmVcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiNjYzU3MDBcIjtcbiAgICAgICAgY2FzZSBcImZseWluZ1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzhlNzljOVwiO1xuICAgICAgICBjYXNlIFwiZ2hvc3RcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM3MzU3OTdcIjtcbiAgICAgICAgY2FzZSBcImdyYXNzXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjNGY4MDMyXCI7XG4gICAgICAgIGNhc2UgXCJncm91bmRcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM2MTU4NTJcIjtcbiAgICAgICAgY2FzZSBcImljZVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzcyOTc5ZVwiO1xuICAgICAgICBjYXNlIFwibm9ybWFsXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjODA4MDgwXCI7XG4gICAgICAgIGNhc2UgXCJwb2lzb25cIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM4MTUxYjhcIjtcbiAgICAgICAgY2FzZSBcInBzeWNoaWNcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiNGOTU1ODdcIjtcbiAgICAgICAgY2FzZSBcInJvY2tcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiNCNkExMzZcIjtcbiAgICAgICAgY2FzZSBcInNoYWRvd1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzMzMzMzM1wiO1xuICAgICAgICBjYXNlIFwic3RlZWxcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM3YzdjOGFcIjtcbiAgICAgICAgY2FzZSBcInVua25vd25cIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM2OEEwOTBcIjtcbiAgICAgICAgY2FzZSBcIndhdGVyXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjMjU0ODk0XCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCIjODA4MDgwIFwiO1xuICAgIH1cbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZWNsaXBzZV9hc3NpZ25tZW50XCJdID0gc2VsZltcIndlYnBhY2tDaHVua2VjbGlwc2VfYXNzaWdubWVudFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfbXVpX2ljb25zLW1hdGVyaWFsX0tleWJvYXJkQXJyb3dEb3duX2pzLW5vZGVfbW9kdWxlc19tdWlfaWNvbnMtbWF0ZXJpYWxfLTQ1Y2UyYVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c3hcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==