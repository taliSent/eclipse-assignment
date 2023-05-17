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
      // 1684318803215
      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
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
      // 1684318803212
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _components_Table_TableWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Table/TableWrapper */ "./src/components/Table/TableWrapper.tsx");
/* harmony import */ var _hooks_useAppLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useAppLogic */ "./src/hooks/useAppLogic.ts");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./src/App.css");






const App = () => {
    const logic = (0,_hooks_useAppLogic__WEBPACK_IMPORTED_MODULE_2__["default"])();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_4__["default"], { maxWidth: 'md', sx: { padding: "3em 1em" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { direction: 'column', spacing: 3, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { className: 'header', variant: 'h2', component: 'h1', children: "Pokemons" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Table_TableWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {})] }) }));
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_mui_icons-material_KeyboardArrowDown_js-node_modules_mui_icons-material_-cbc9f1"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9BcHAuY3NzPzliNzIiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2luZGV4LmNzcz9jNDBkIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9hcGkvdXNlR2V0UG1BcGkudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2NvbXBvbmVudHMvVGFibGUvUm93LnRzeCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZUNvbnRlbnQudHN4Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaG9va3MvdXNlQXBwTG9naWMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2hvb2tzL3VzZVRhYmxlQ29udGFpbmVyTG9naWMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2hvb2tzL3VzZVRhYmxlTG9naWMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvbWlkZGxld2FyZS90aHVua3MudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL3N0YXRlL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL3N0YXRlL3NlbGVjdG9ycy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvc3RhdGUvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2ODQzMTg4MDMyMTVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY4NDMxODgwMzIxMlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIjtcbmltcG9ydCBUYWJsZVdyYXBwZXIgZnJvbSBcIi4vY29tcG9uZW50cy9UYWJsZS9UYWJsZVdyYXBwZXJcIjtcbmltcG9ydCB1c2VBcHBMb2dpYyBmcm9tIFwiLi9ob29rcy91c2VBcHBMb2dpY1wiO1xuaW1wb3J0IFwiLi9BcHAuY3NzXCI7XG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgY29uc3QgbG9naWMgPSB1c2VBcHBMb2dpYygpO1xuICAgIHJldHVybiAoX2pzeChDb250YWluZXIsIHsgbWF4V2lkdGg6ICdtZCcsIHN4OiB7IHBhZGRpbmc6IFwiM2VtIDFlbVwiIH0sIGNoaWxkcmVuOiBfanN4cyhTdGFjaywgeyBkaXJlY3Rpb246ICdjb2x1bW4nLCBzcGFjaW5nOiAzLCBjaGlsZHJlbjogW19qc3goVHlwb2dyYXBoeSwgeyBjbGFzc05hbWU6ICdoZWFkZXInLCB2YXJpYW50OiAnaDInLCBjb21wb25lbnQ6ICdoMScsIGNoaWxkcmVuOiBcIlBva2Vtb25zXCIgfSksIF9qc3goVGFibGVXcmFwcGVyLCB7fSldIH0pIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3RcIjtcbmltcG9ydCB7IHNvcnRUeXBlcyB9IGZyb20gXCJzcmMvdXRpbHMvdXRpbHNcIjtcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92MlwiO1xuZXhwb3J0IGNvbnN0IHBtQXBpID0gY3JlYXRlQXBpKHtcbiAgICByZWR1Y2VyUGF0aDogXCJwbUFwaVwiLFxuICAgIHRhZ1R5cGVzOiBbXCJUeXBlc1wiXSxcbiAgICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHtcbiAgICAgICAgYmFzZVVybDogYCR7QkFTRV9VUkx9YCxcbiAgICB9KSxcbiAgICBlbmRwb2ludHM6IChidWlsZGVyKSA9PiAoe1xuICAgICAgICBnZXRUeXBlczogYnVpbGRlci5xdWVyeSh7XG4gICAgICAgICAgICBxdWVyeTogKCkgPT4gYC90eXBlYCxcbiAgICAgICAgICAgIHByb3ZpZGVzVGFnczogW1wiVHlwZXNcIl0sXG4gICAgICAgICAgICB0cmFuc2Zvcm1SZXNwb25zZTogKHJlc3BvbnNlKSA9PiByZXNwb25zZS5yZXN1bHRzLnNvcnQoc29ydFR5cGVzKSxcbiAgICAgICAgfSksXG4gICAgfSksXG59KTtcbmV4cG9ydCBjb25zdCB7IHVzZUdldFR5cGVzUXVlcnkgfSA9IHBtQXBpO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgVGFibGVSb3csIFRhYmxlQ2VsbCwgSWNvbkJ1dHRvbiwgQ29sbGFwc2UsIEJveCwgVHlwb2dyYXBoeSwgVGFibGUsIFRhYmxlSGVhZCwgVGFibGVCb2R5LCBBdmF0YXIsIENoaXAsIFN0YWNrLCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0Rvd25JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dEb3duXCI7XG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1VwSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93VXBcIjtcbmltcG9ydCB7IGdldFR5cGVDb2xvciB9IGZyb20gXCJzcmMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnksIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmNvbnN0IHN0eWxlID0ge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG59O1xuZnVuY3Rpb24gUm93KHByb3BzKSB7XG4gICAgY29uc3QgeyByb3cgfSA9IHByb3BzO1xuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gICAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKSk7XG4gICAgY29uc3QgYXZhdGFyU2l6ZSA9IGlzTW9iaWxlID8gNTAgOiA5NTtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKFRhYmxlUm93LCB7IHN4OiB7IFwiJiA+ICpcIjogeyBib3JkZXJCb3R0b206IFwidW5zZXRcIiB9IH0sIGNoaWxkcmVuOiBbX2pzeChUYWJsZUNlbGwsIHsgY2hpbGRyZW46IF9qc3goSWNvbkJ1dHRvbiwgeyBcImFyaWEtbGFiZWxcIjogJ2V4cGFuZCByb3cnLCBzaXplOiAnc21hbGwnLCBvbkNsaWNrOiAoKSA9PiBzZXRPcGVuKCFvcGVuKSwgY2hpbGRyZW46IG9wZW4gPyBfanN4KEtleWJvYXJkQXJyb3dVcEljb24sIHt9KSA6IF9qc3goS2V5Ym9hcmRBcnJvd0Rvd25JY29uLCB7fSkgfSkgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IHJvdy5uYW1lIH0pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIHN4OiBzdHlsZSwgc2l6ZTogJ21lZGl1bScsIGNoaWxkcmVuOiBfanN4KEF2YXRhciwgeyBzeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXZhdGFyU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdmF0YXJTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHNyYzogcm93LmltZywgYWx0OiBgJHtyb3cubmFtZX0gcGhvdG9gIH0pIH0pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiBfanN4KFN0YWNrLCB7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgZGlyZWN0aW9uOiAncm93Jywgc3BhY2luZzogMSwgY2hpbGRyZW46IHJvdy50eXBlcy5tYXAoKHR5cGUpID0+IChfanN4KENoaXAsIHsgc2l6ZTogJ3NtYWxsJywgc3g6IHsgYmFja2dyb3VuZENvbG9yOiBnZXRUeXBlQ29sb3IodHlwZSksIGNvbG9yOiBcIndoaXRlXCIgfSwgbGFiZWw6IHR5cGUgfSwgdHlwZSkpKSB9KSB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogcm93LmFiaWxpdGllcy5tYXAoKGl0ZW0pID0+IChfanN4KEJveCwgeyBzeDogeyBtYXJnaW46IDEgfSwgY2hpbGRyZW46IGl0ZW0gfSwgaXRlbSkpKSB9KV0gfSksIF9qc3goVGFibGVSb3csIHsgY2hpbGRyZW46IF9qc3goVGFibGVDZWxsLCB7IHN4OiB7IHBhZGRpbmdCb3R0b206IDAsIHBhZGRpbmdUb3A6IDAgfSwgY29sU3BhbjogNiwgY2hpbGRyZW46IF9qc3goQ29sbGFwc2UsIHsgaW46IG9wZW4sIHRpbWVvdXQ6ICdhdXRvJywgdW5tb3VudE9uRXhpdDogdHJ1ZSwgY2hpbGRyZW46IF9qc3hzKEJveCwgeyBzeDogeyBtYXJnaW46IDEgfSwgY2hpbGRyZW46IFtfanN4KFR5cG9ncmFwaHksIHsgdmFyaWFudDogJ2g2JywgZ3V0dGVyQm90dG9tOiB0cnVlLCBjb21wb25lbnQ6ICdkaXYnLCBjaGlsZHJlbjogXCJEZXRhaWxzXCIgfSksIF9qc3hzKFRhYmxlLCB7IHNpemU6ICdzbWFsbCcsIFwiYXJpYS1sYWJlbFwiOiAncHVyY2hhc2VzJywgY2hpbGRyZW46IFtfanN4KFRhYmxlSGVhZCwgeyBjaGlsZHJlbjogX2pzeHMoVGFibGVSb3csIHsgY2hpbGRyZW46IFtfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiBcIkhlaWdodFwiIH0pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiBcIldlaWdodFwiIH0pXSB9KSB9KSwgX2pzeChUYWJsZUJvZHksIHsgY2hpbGRyZW46IF9qc3hzKFRhYmxlUm93LCB7IGNoaWxkcmVuOiBbX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogcm93LmhlaWdodCB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogcm93LndlaWdodCB9KV0gfSwgcm93LmlkKSB9KV0gfSldIH0pIH0pIH0pIH0pXSB9KSk7XG59XG5leHBvcnQgZGVmYXVsdCBSb3c7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgUGFwZXIsIFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVDb250YWluZXIsIFRhYmxlSGVhZCwgVGFibGVQYWdpbmF0aW9uLCBUYWJsZVJvdywgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHVzZVRhYmxlTG9naWMgZnJvbSBcInNyYy9ob29rcy91c2VUYWJsZUxvZ2ljXCI7XG5pbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xuY29uc3Qgc3R5bGVzID0ge1xuICAgIFwiLk11aVRvb2xiYXItcm9vdFwiOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiBcIjRweFwiLFxuICAgIH0sXG4gICAgXCImLk11aVRhYmxlUGFnaW5hdGlvbi1yb290XCI6IHtcbiAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgIH0sXG59O1xuY29uc3QgVGFibGVDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaGFuZGxlUGFnZUNoYW5nZSwgaGFuZGxlUGFnZVNpemVDaGFuZ2UsIHBtc09uUGFnZSwgcGFnZSwgcGVyUGFnZSwgdG90YWxDb3VudCwgcGFkZGluZ1ZhbHVlLCB9ID0gdXNlVGFibGVMb2dpYygpO1xuICAgIHJldHVybiAoX2pzeHMoVGFibGVDb250YWluZXIsIHsgY29tcG9uZW50OiBQYXBlciwgY2hpbGRyZW46IFtfanN4cyhUYWJsZSwgeyBwYWRkaW5nOiBwYWRkaW5nVmFsdWUsIFwiYXJpYS1sYWJlbFwiOiAnY29sbGFwc2libGUgdGFibGUnLCBjaGlsZHJlbjogW19qc3goVGFibGVIZWFkLCB7IGNoaWxkcmVuOiBfanN4cyhUYWJsZVJvdywgeyBjaGlsZHJlbjogW19qc3goVGFibGVDZWxsLCB7fSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAnY2VudGVyJywgY2hpbGRyZW46IFwiTmFtZVwiIH0pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiBcIkF2YXRhclwiIH0pLCBfanN4KFRhYmxlQ2VsbCwgeyBhbGlnbjogJ2NlbnRlcicsIGNoaWxkcmVuOiBcIlR5cGVcIiB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdjZW50ZXInLCBjaGlsZHJlbjogXCJBYmlsaXRpZXNcIiB9KV0gfSkgfSksIF9qc3goVGFibGVCb2R5LCB7IGNoaWxkcmVuOiBwbXNPblBhZ2UubWFwKChyb3cpID0+IChfanN4KFJvdywgeyByb3c6IHJvdyB9LCByb3cuaWQpKSkgfSldIH0pLCBfanN4KFRhYmxlUGFnaW5hdGlvbiwgeyBjb21wb25lbnQ6ICdkaXYnLCBjb3VudDogdG90YWxDb3VudCwgcGFnZTogcGFnZSwgb25QYWdlQ2hhbmdlOiBoYW5kbGVQYWdlQ2hhbmdlLCByb3dzUGVyUGFnZTogcGVyUGFnZSwgb25Sb3dzUGVyUGFnZUNoYW5nZTogaGFuZGxlUGFnZVNpemVDaGFuZ2UsIHNpemU6ICdzbWFsbCcsIHN4OiBzdHlsZXMgfSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBUYWJsZUNvbnRlbnQ7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBBbGVydCwgU2tlbGV0b24sIFN0YWNrIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB1c2VUYWJsZUNvbnRhaW5lckxvZ2ljIGZyb20gXCJzcmMvaG9va3MvdXNlVGFibGVDb250YWluZXJMb2dpY1wiO1xuaW1wb3J0IFRhYmxlQ29udGVudCBmcm9tIFwiLi9UYWJsZUNvbnRlbnRcIjtcbmNvbnN0IFRhYmxlV3JhcHBlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlzTG9hZGluZywgZXJyb3IgfSA9IHVzZVRhYmxlQ29udGFpbmVyTG9naWMoKTtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgfSwgY2hpbGRyZW46IGlzTG9hZGluZyAmJiAhZXJyb3IgPyAoX2pzeHMoU3RhY2ssIHsgZGlyZWN0aW9uOiAnY29sdW1uJywgd2lkdGg6ICcxMDAlJywgc3BhY2luZzogMiwgY2hpbGRyZW46IFtfanN4KFNrZWxldG9uLCB7IGFuaW1hdGlvbjogJ3dhdmUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc1ZW0nIH0pLCBfanN4KFNrZWxldG9uLCB7IGFuaW1hdGlvbjogJ3dhdmUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc1ZW0nIH0pLCBfanN4KFNrZWxldG9uLCB7IGFuaW1hdGlvbjogJ3dhdmUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc1ZW0nIH0pXSB9KSkgOiAoX2pzeChUYWJsZUNvbnRlbnQsIHt9KSkgfSksIGVycm9yICYmIF9qc3goQWxlcnQsIHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNoaWxkcmVuOiBlcnJvciB9KV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFRhYmxlV3JhcHBlcjtcbiIsImV4cG9ydCBjb25zdCBJTklUSUFMX1BBR0VfU0laRSA9IDI1O1xuZXhwb3J0IGNvbnN0IFRPVEFMX1JPV1MgPSAxMDA7XG5leHBvcnQgY29uc3QgRklSU1RfUEFHRSA9IDA7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBmZXRjaFBtc1RodW5rIH0gZnJvbSBcInNyYy9taWRkbGV3YXJlL3RodW5rc1wiO1xuaW1wb3J0IHsgVE9UQUxfUk9XUyB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XG5jb25zdCB1c2VBcHBMb2dpYyA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgZmV0Y2hJbml0aWFsID0gZmV0Y2hQbXNUaHVuayhkaXNwYXRjaCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hJbml0aWFsKFRPVEFMX1JPV1MpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4ge307XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlQXBwTG9naWM7XG4iLCJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2VsZWN0RXJyb3IsIHNlbGVjdElzTG9hZGluZyB9IGZyb20gXCJzcmMvc3RhdGUvc2VsZWN0b3JzXCI7XG5jb25zdCB1c2VMaXN0TG9naWMgPSAoKSA9PiB7XG4gICAgY29uc3QgaXNMb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNMb2FkaW5nKTtcbiAgICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKHNlbGVjdEVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBpc0xvYWRpbmcsXG4gICAgICAgIGVycm9yLFxuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlTGlzdExvZ2ljO1xuIiwiaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBjaGFuZ2VQYWdlLCBjaGFuZ2VQYWdlU2l6ZSB9IGZyb20gXCJzcmMvc3RhdGUvYWN0aW9uc1wiO1xuaW1wb3J0IHsgc2VsZWN0UGFnZSwgc2VsZWN0UGVyUGFnZSwgc2VsZWN0U2xpY2VkUG1zLCBzZWxlY3RUb3RhbFBhZ2VzLCB9IGZyb20gXCJzcmMvc3RhdGUvc2VsZWN0b3JzXCI7XG5jb25zdCB1c2VUYWJsZUxvZ2ljID0gKCkgPT4ge1xuICAgIGNvbnN0IHBtc09uUGFnZSA9IHVzZVNlbGVjdG9yKHNlbGVjdFNsaWNlZFBtcyk7XG4gICAgY29uc3QgcGFnZSA9IHVzZVNlbGVjdG9yKHNlbGVjdFBhZ2UpO1xuICAgIGNvbnN0IHBlclBhZ2UgPSB1c2VTZWxlY3RvcihzZWxlY3RQZXJQYWdlKTtcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gdXNlU2VsZWN0b3Ioc2VsZWN0VG90YWxQYWdlcyk7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICAgIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xuICAgIGNvbnN0IHBhZGRpbmdWYWx1ZSA9IGlzTW9iaWxlID8gXCJub25lXCIgOiBcIm5vcm1hbFwiO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKGUsIG5ld1BhZ2UpID0+IGRpc3BhdGNoKGNoYW5nZVBhZ2UobmV3UGFnZSkpO1xuICAgIGNvbnN0IGhhbmRsZVBhZ2VTaXplQ2hhbmdlID0gKGUpID0+IGRpc3BhdGNoKGNoYW5nZVBhZ2VTaXplKCtlLnRhcmdldC52YWx1ZSkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGhhbmRsZVBhZ2VDaGFuZ2UsXG4gICAgICAgIGhhbmRsZVBhZ2VTaXplQ2hhbmdlLFxuICAgICAgICBwbXNPblBhZ2UsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIHBlclBhZ2UsXG4gICAgICAgIHRvdGFsQ291bnQ6IHRvdGFsUGFnZXMgKiBwZXJQYWdlLFxuICAgICAgICBwYWRkaW5nVmFsdWUsXG4gICAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VUYWJsZUxvZ2ljO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0YXRlL3N0b3JlXCI7XG5pbXBvcnQgXCJAZm9udHNvdXJjZS9yb2JvdG8vbGF0aW4tNDAwLmNzc1wiO1xuaW1wb3J0IFwiQGZvbnRzb3VyY2Uvcm9ib3RvL2xhdGluLTUwMC5jc3NcIjtcblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKS5yZW5kZXIoX2pzeChSZWFjdC5TdHJpY3RNb2RlLCB7IGNoaWxkcmVuOiBfanN4KFByb3ZpZGVyLCB7IHN0b3JlOiBzdG9yZSwgY2hpbGRyZW46IF9qc3goQXBwLCB7fSkgfSkgfSkpO1xuIiwiaW1wb3J0IHsgRklSU1RfUEFHRSB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmZXRjaFBtcywgZmV0Y2hQbXNFcnJvciwgZmV0Y2hJc0xvYWRpbmcgfSBmcm9tIFwic3JjL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IGV4dHJhY3RNYWluSW5mbyB9IGZyb20gXCJzcmMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4uL2FwaS91c2VHZXRQbUFwaVwiO1xuZXhwb3J0IGNvbnN0IGZldGNoUG1zVGh1bmsgPSAoZGlzcGF0Y2gpID0+IGFzeW5jICh0b3RhbFJvd3MpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaElzTG9hZGluZyh0cnVlKSk7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaWQgPSBGSVJTVF9QQUdFICsgMTsgaWQgPD0gdG90YWxSb3dzOyBpZCsrKSB7XG4gICAgICAgICAgICByZXF1ZXN0cy5wdXNoKGZldGNoKGAke0JBU0VfVVJMfS9wb2tlbW9uLyR7aWR9YClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBQb2tlbW9uIGRhdGFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBleHRyYWN0TWFpbkluZm8oZGF0YSkpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpO1xuICAgICAgICBkaXNwYXRjaChmZXRjaFBtcyhkYXRhKSk7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoSXNMb2FkaW5nKGZhbHNlKSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcilcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoUG1zRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuZXhwb3J0IGNvbnN0IGZldGNoUG1zID0gY3JlYXRlQWN0aW9uKFwiRkVUQ0hfUE1TXCIpO1xuZXhwb3J0IGNvbnN0IGZldGNoUG1zRXJyb3IgPSBjcmVhdGVBY3Rpb24oXCJGRVRDSF9QTVNfRVJST1JcIik7XG5leHBvcnQgY29uc3QgZmV0Y2hJc0xvYWRpbmcgPSBjcmVhdGVBY3Rpb24oXCJGRVRDSF9QTVNfSVNfTE9BRElOR1wiKTtcbmV4cG9ydCBjb25zdCBmaWx0ZXJCeU5hbWUgPSBjcmVhdGVBY3Rpb24oXCJGSUxURVJfQllfTkFNRVwiKTtcbmV4cG9ydCBjb25zdCBmaWx0ZXJCeVR5cGUgPSBjcmVhdGVBY3Rpb24oXCJGSUxURVJfQllfVFlQRVwiKTtcbmV4cG9ydCBjb25zdCBjbGVhckZpbHRlciA9IGNyZWF0ZUFjdGlvbihcIkNMRUFSX0ZJTFRFUlwiKTtcbmV4cG9ydCBjb25zdCBvcGVuTW9kYWwgPSBjcmVhdGVBY3Rpb24oXCJPUEVOX01PREFMXCIpO1xuZXhwb3J0IGNvbnN0IGNsb3NlTW9kYWwgPSBjcmVhdGVBY3Rpb24oXCJDTE9TRV9NT0RBTFwiKTtcbmV4cG9ydCBjb25zdCBjaGFuZ2VQYWdlID0gY3JlYXRlQWN0aW9uKFwiQ0hBTkdFX1BBR0VcIik7XG5leHBvcnQgY29uc3QgY2hhbmdlUGFnZVNpemUgPSBjcmVhdGVBY3Rpb24oXCJDSEFOR0VfUEFHRV9TSVpFXCIpO1xuIiwiaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBGSVJTVF9QQUdFLCBJTklUSUFMX1BBR0VfU0laRSwgVE9UQUxfUk9XUyB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjaGFuZ2VQYWdlLCBjaGFuZ2VQYWdlU2l6ZSwgZmV0Y2hJc0xvYWRpbmcsIGZldGNoUG1zLCBmZXRjaFBtc0Vycm9yLCBmaWx0ZXJCeU5hbWUsIGZpbHRlckJ5VHlwZSwgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5jb25zdCBpbml0aWFsID0ge1xuICAgIHBtc1VJOiBbXSxcbiAgICBzZWFyY2g6IHsgYnlOYW1lOiBcIlwiLCBieVR5cGVzOiBbXSB9LFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgcGFnZTogRklSU1RfUEFHRSxcbiAgICAgICAgcGVyUGFnZTogSU5JVElBTF9QQUdFX1NJWkUsXG4gICAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbChUT1RBTF9ST1dTIC8gSU5JVElBTF9QQUdFX1NJWkUpLFxuICAgIH0sXG4gICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxufTtcbmV4cG9ydCBjb25zdCBwbUxpc3RSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihpbml0aWFsLCAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXJcbiAgICAgICAgLmFkZENhc2UoZmV0Y2hQbXNFcnJvciwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGZldGNoSXNMb2FkaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGZldGNoUG1zLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgcG1zVUk6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSlcbiAgICAgICAgLmFkZENhc2UoZmlsdGVyQnlOYW1lLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXdQYWdpbmF0aW9uID0geyAuLi5zdGF0ZS5wYWdpbmF0aW9uLCBwYWdlOiAwIH07XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiBuZXdQYWdpbmF0aW9uLFxuICAgICAgICAgICAgc2VhcmNoOiB7IC4uLnN0YXRlLnNlYXJjaCwgYnlOYW1lOiBhY3Rpb24ucGF5bG9hZCB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSlcbiAgICAgICAgLmFkZENhc2UoZmlsdGVyQnlUeXBlLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXdQYWdpbmF0aW9uID0geyAuLi5zdGF0ZS5wYWdpbmF0aW9uLCBwYWdlOiAwIH07XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiBuZXdQYWdpbmF0aW9uLFxuICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUuc2VhcmNoLFxuICAgICAgICAgICAgICAgIGJ5VHlwZXM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGNoYW5nZVBhZ2UsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2luYXRpb25OZXcgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5wYWdpbmF0aW9uLFxuICAgICAgICAgICAgcGFnZTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiBwYWdpbmF0aW9uTmV3LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSlcbiAgICAgICAgLmFkZENhc2UoY2hhbmdlUGFnZVNpemUsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHBlclBhZ2UgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbChzdGF0ZS5wbXNVSS5sZW5ndGggLyBwZXJQYWdlKTtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbk5ldyA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLnBhZ2luYXRpb24sXG4gICAgICAgICAgICBwYWdlOiAwLFxuICAgICAgICAgICAgcGVyUGFnZTogcGVyUGFnZSxcbiAgICAgICAgICAgIHRvdGFsUGFnZXM6IHRvdGFsUGFnZXMsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSwgcGFnaW5hdGlvbjogcGFnaW5hdGlvbk5ldyB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSk7XG59KTtcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmV4cG9ydCBjb25zdCBzZWxlY3RQbXMgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIucG1zVUk7XG5leHBvcnQgY29uc3Qgc2VsZWN0UGFnZSA9IChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlci5wYWdpbmF0aW9uLnBhZ2U7XG5leHBvcnQgY29uc3Qgc2VsZWN0UGVyUGFnZSA9IChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlci5wYWdpbmF0aW9uLnBlclBhZ2U7XG5leHBvcnQgY29uc3Qgc2VsZWN0RmlsdGVyZWRQbXMgPSBjcmVhdGVTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIsICh7IHBtc1VJLCBzZWFyY2ggfSkgPT4ge1xuICAgIGNvbnN0IHsgYnlOYW1lLCBieVR5cGVzIH0gPSBzZWFyY2g7XG4gICAgY29uc3QgZmlsdGVyZWRQbXMgPSBwbXNVSS5maWx0ZXIoKHBtKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTmFtZU1hdGNoID0gcG0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ5TmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgY29uc3QgaXNUeXBlTWF0Y2ggPSBieVR5cGVzLmxlbmd0aCA9PT0gMCB8fCBwbS50eXBlcy5zb21lKCh0eXBlKSA9PiBieVR5cGVzLmluY2x1ZGVzKHR5cGUpKTtcbiAgICAgICAgcmV0dXJuIGlzTmFtZU1hdGNoICYmIGlzVHlwZU1hdGNoO1xuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFBtcztcbn0pO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFNsaWNlZFBtcyA9IGNyZWF0ZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlciwgc2VsZWN0RmlsdGVyZWRQbXMsICh7IHBhZ2luYXRpb24gfSwgZmlsdGVyZWRQbXMpID0+IHtcbiAgICBjb25zdCB7IHBlclBhZ2UsIHBhZ2UgfSA9IHBhZ2luYXRpb247XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHBlclBhZ2UgKiBwYWdlO1xuICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIHBlclBhZ2U7XG4gICAgY29uc3Qgc2xpY2VkUG1zID0gZmlsdGVyZWRQbXMuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuICAgIHJldHVybiBzbGljZWRQbXM7XG59KTtcbmV4cG9ydCBjb25zdCBzZWxlY3RUb3RhbFBhZ2VzID0gY3JlYXRlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wbUxpc3RSZWR1Y2VyLCBzZWxlY3RGaWx0ZXJlZFBtcywgKHsgcGFnaW5hdGlvbiB9LCBmaWx0ZXJlZFBtcykgPT4ge1xuICAgIGNvbnN0IHsgcGVyUGFnZSB9ID0gcGFnaW5hdGlvbjtcbiAgICBjb25zdCBzbGljZWRQbXMgPSBNYXRoLmNlaWwoZmlsdGVyZWRQbXMubGVuZ3RoIC8gcGVyUGFnZSk7XG4gICAgcmV0dXJuIHNsaWNlZFBtcztcbn0pO1xuZXhwb3J0IGNvbnN0IHNlbGVjdElzTG9hZGluZyA9IChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlci5pc0xvYWRpbmc7XG5leHBvcnQgY29uc3Qgc2VsZWN0RXJyb3IgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIuZXJyb3I7XG4iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBwbUxpc3RSZWR1Y2VyIH0gZnJvbSBcIi4vcmVkdWNlclwiO1xuaW1wb3J0IHsgcG1BcGkgfSBmcm9tIFwiLi4vYXBpL3VzZUdldFBtQXBpXCI7XG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiB7XG4gICAgICAgIFtwbUFwaS5yZWR1Y2VyUGF0aF06IHBtQXBpLnJlZHVjZXIsXG4gICAgICAgIHBtTGlzdFJlZHVjZXI6IHBtTGlzdFJlZHVjZXIsXG4gICAgfSxcbiAgICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+IGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KHBtQXBpLm1pZGRsZXdhcmUpLFxufSk7XG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsImV4cG9ydCBjb25zdCBleHRyYWN0TWFpbkluZm8gPSAocG9rZW1vbikgPT4ge1xuICAgIGNvbnN0IHsgaWQsIG5hbWUsIHNwcml0ZXMsIHR5cGVzLCBhYmlsaXRpZXMsIGhlaWdodCwgd2VpZ2h0LCB9ID0gcG9rZW1vbjtcbiAgICBjb25zdCBwbSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHR5cGVzOiB0eXBlcy5tYXAoKGl0ZW0pID0+IGl0ZW0udHlwZS5uYW1lKSxcbiAgICAgICAgYWJpbGl0aWVzOiBhYmlsaXRpZXMubWFwKChpdGVtKSA9PiBpdGVtLmFiaWxpdHkubmFtZSksXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgd2VpZ2h0LFxuICAgICAgICBpbWc6IHNwcml0ZXMuZnJvbnRfZGVmYXVsdCxcbiAgICB9O1xuICAgIHJldHVybiBwbTtcbn07XG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZiwgdGltZSkgPT4ge1xuICAgIGxldCB0aW1lb3V0SWQgPSBudWxsO1xuICAgIGNvbnN0IGZ1bmN0aW9uQ2FsbCA9ICgpID0+IHtcbiAgICAgICAgdGltZW91dElkID0gbnVsbDtcbiAgICAgICAgZigpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGRlYm91bmNlZEZ1bmN0aW9uKC4uLmFyZykge1xuICAgICAgICBpZiAodGltZW91dElkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb25DYWxsLCB0aW1lLCAuLi5hcmcpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5leHBvcnQgY29uc3Qgc29ydFR5cGVzID0gKGEsIGIpID0+IHtcbiAgICBpZiAoYS5uYW1lIDwgYi5uYW1lKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGEubmFtZSA+IGIubmFtZSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuZXhwb3J0IGNvbnN0IGdldFR5cGVDb2xvciA9ICh0eXBlTmFtZSkgPT4ge1xuICAgIHN3aXRjaCAodHlwZU5hbWUpIHtcbiAgICAgICAgY2FzZSBcImJ1Z1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzk0N2MxNVwiO1xuICAgICAgICBjYXNlIFwiZGFya1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzgwODA4MFwiO1xuICAgICAgICBjYXNlIFwiZHJhZ29uXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjNkYzNUZDXCI7XG4gICAgICAgIGNhc2UgXCJlbGVjdHJpY1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiI2I5OWYxYVwiO1xuICAgICAgICBjYXNlIFwiZmFpcnlcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiNjOTFjNzJcIjtcbiAgICAgICAgY2FzZSBcImZpZ2h0aW5nXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjQzIyRTI4XCI7XG4gICAgICAgIGNhc2UgXCJmaXJlXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjY2M1NzAwXCI7XG4gICAgICAgIGNhc2UgXCJmbHlpbmdcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM4ZTc5YzlcIjtcbiAgICAgICAgY2FzZSBcImdob3N0XCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjNzM1Nzk3XCI7XG4gICAgICAgIGNhc2UgXCJncmFzc1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzRmODAzMlwiO1xuICAgICAgICBjYXNlIFwiZ3JvdW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjNjE1ODUyXCI7XG4gICAgICAgIGNhc2UgXCJpY2VcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiM3Mjk3OWVcIjtcbiAgICAgICAgY2FzZSBcIm5vcm1hbFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzgwODA4MFwiO1xuICAgICAgICBjYXNlIFwicG9pc29uXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjODE1MWI4XCI7XG4gICAgICAgIGNhc2UgXCJwc3ljaGljXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjRjk1NTg3XCI7XG4gICAgICAgIGNhc2UgXCJyb2NrXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjQjZBMTM2XCI7XG4gICAgICAgIGNhc2UgXCJzaGFkb3dcIjpcbiAgICAgICAgICAgIHJldHVybiBcIiMzMzMzMzNcIjtcbiAgICAgICAgY2FzZSBcInN0ZWVsXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjN2M3YzhhXCI7XG4gICAgICAgIGNhc2UgXCJ1bmtub3duXCI6XG4gICAgICAgICAgICByZXR1cm4gXCIjNjhBMDkwXCI7XG4gICAgICAgIGNhc2UgXCJ3YXRlclwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiIzI1NDg5NFwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFwiIzgwODA4MCBcIjtcbiAgICB9XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2VjbGlwc2VfYXNzaWdubWVudFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtlY2xpcHNlX2Fzc2lnbm1lbnRcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX211aV9pY29ucy1tYXRlcmlhbF9LZXlib2FyZEFycm93RG93bl9qcy1ub2RlX21vZHVsZXNfbXVpX2ljb25zLW1hdGVyaWFsXy1jYmM5ZjFcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHN4XCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=