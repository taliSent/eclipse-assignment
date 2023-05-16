/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _components_HeaderFilters_HeaderFilters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/HeaderFilters/HeaderFilters */ "./src/components/HeaderFilters/HeaderFilters.tsx");
/* harmony import */ var _components_PokemonList_PokemonList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PokemonList/PokemonList */ "./src/components/PokemonList/PokemonList.tsx");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");





const App = () => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_3__["default"], { maxWidth: 'sm', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { variant: 'h2', component: 'h1', children: "Pokemons" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_HeaderFilters_HeaderFilters__WEBPACK_IMPORTED_MODULE_1__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PokemonList_PokemonList__WEBPACK_IMPORTED_MODULE_2__["default"], {})] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/api/queries.ts":
/*!****************************!*\
  !*** ./src/api/queries.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_LIST": () => (/* binding */ GET_LIST),
/* harmony export */   "GET_POKEMONS": () => (/* binding */ GET_POKEMONS)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ "./node_modules/graphql-request/dist/index.js");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");


const GET_POKEMONS = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql `
  query GetPokemons($url: String!) {
    pokemon(url: $url) {
      name
      types {
        type {
          id
          name
        }
      }
      abilities {
        ability {
          name
        }
      }
      sprites {
        front_default
      }
      stats {
        stat {
          name
        }
      }
      species {
        name
      }
    }
  }
`;
const GET_LIST = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql `
          query GetList($limit: Int = ${src_constants__WEBPACK_IMPORTED_MODULE_1__.INITIAL_PAGE_SIZE}, $offset: Int = 0) {
            pm(limit: $limit, offset: $offset) {
              url
            }
          }
        `;


/***/ }),

/***/ "./src/api/useGetPmApi.ts":
/*!********************************!*\
  !*** ./src/api/useGetPmApi.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pmApi": () => (/* binding */ pmApi),
/* harmony export */   "useGetListQuery": () => (/* binding */ useGetListQuery),
/* harmony export */   "useGetPmQuery": () => (/* binding */ useGetPmQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js");
/* harmony import */ var _rtk_query_graphql_request_base_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rtk-query/graphql-request-base-query */ "./node_modules/@rtk-query/graphql-request-base-query/dist/index.module.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queries */ "./src/api/queries.ts");



const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const pmApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__.createApi)({
    reducerPath: "pmApi",
    tagTypes: ["Pm", "PmUI"],
    baseQuery: (0,_rtk_query_graphql_request_base_query__WEBPACK_IMPORTED_MODULE_0__.graphqlRequestBaseQuery)({
        url: `${BASE_URL}`,
    }),
    endpoints: (builder) => ({
        getList: builder.query({
            query: ({ limit, offset }) => ({
                document: _queries__WEBPACK_IMPORTED_MODULE_1__.GET_LIST,
                method: "GET",
                variables: {
                    limit,
                    offset,
                },
            }),
            providesTags: ["Pm"],
            transformResponse: (response) => response.results,
        }),
        getPm: builder.query({
            query: ({ url }) => ({
                document: _queries__WEBPACK_IMPORTED_MODULE_1__.GET_POKEMONS,
                method: "GET",
                variables: { url },
            }),
            providesTags: ["PmUI"],
        }),
    }),
});
const { useGetListQuery, useGetPmQuery } = pmApi;


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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputBase/InputBase.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/Box/Box.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/Stack/Stack.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
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
// type HeaderFiltersT = {}
const types = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
];
const HeaderFilters = () => {
    const { handleChangeSelect } = (0,src_hooks_useFiltersLogic__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_2__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_3__["default"], { direction: 'row', spacing: 2, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { sx: { ml: 1, flex: 1 }, placeholder: 'Search by name', inputProps: { "aria-label": "search by name" } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { type: 'button', sx: { p: "10px" }, "aria-label": 'search', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_6__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { labelId: 'demo-multiple-chip-label', id: 'demo-multiple-chip', multiple: true, value: [], onChange: handleChangeSelect, input: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { id: 'select-multiple-chip', label: 'Select by type' }), renderValue: (selected) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_2__["default"], { sx: { display: "flex", flexWrap: "wrap", gap: 0.5 }, children: selected.map((value) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], { label: value }, value))) })), MenuProps: MenuProps, children: types.map((type) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { value: type, children: type }, type))) })] }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderFilters);


/***/ }),

/***/ "./src/components/PokemonList/PokemonList.tsx":
/*!****************************************************!*\
  !*** ./src/components/PokemonList/PokemonList.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var src_hooks_useListLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/hooks/useListLogic */ "./src/hooks/useListLogic.ts");


const PokemonList = () => {
    const logic = (0,src_hooks_useListLogic__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: '' });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokemonList);


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INITIAL_PAGE_SIZE": () => (/* binding */ INITIAL_PAGE_SIZE)
/* harmony export */ });
const INITIAL_PAGE_SIZE = 50;


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
const useFiltersLogic = () => {
    const handleChangeSelect = () => { };
    return { handleChangeSelect };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFiltersLogic);


/***/ }),

/***/ "./src/hooks/useListLogic.ts":
/*!***********************************!*\
  !*** ./src/hooks/useListLogic.ts ***!
  \***********************************/
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
/* harmony import */ var src_state_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/state/selectors */ "./src/state/selectors.ts");





const useListLogic = () => {
    //   const { data, isLoading, isSuccess, isError } = useGetPmQuery();
    const perPage = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(src_state_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPerPage);
    const page = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(src_state_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPage);
    const total = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(src_state_selectors__WEBPACK_IMPORTED_MODULE_4__.selectTotal);
    const { data, isLoading, isSuccess, isError } = (0,src_api_useGetPmApi__WEBPACK_IMPORTED_MODULE_2__.useGetListQuery)({
        limit: perPage,
        offset: page * perPage,
    });
    //   const filteredUsers = useSelector(selectFilteredPm);
    //TODO: fix that
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        console.log(data);
        dispatch((0,src_state_actions__WEBPACK_IMPORTED_MODULE_3__.clearFilter)(data));
    }, [dispatch, data]);
    return {};
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useListLogic);


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
/* harmony import */ var _fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fontsource/roboto/300.css */ "./node_modules/@fontsource/roboto/300.css");
/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fontsource/roboto/400.css */ "./node_modules/@fontsource/roboto/400.css");
/* harmony import */ var _fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fontsource/roboto/500.css */ "./node_modules/@fontsource/roboto/500.css");
/* harmony import */ var _fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fontsource/roboto/700.css */ "./node_modules/@fontsource/roboto/700.css");











react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.getElementById("root")).render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, { store: _state_store__WEBPACK_IMPORTED_MODULE_6__["default"], children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}) }) }));


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
/* harmony export */   "filterByName": () => (/* binding */ filterByName),
/* harmony export */   "filterByType": () => (/* binding */ filterByType),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

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
/* harmony export */   "pmListReducer": () => (/* binding */ pmListReducer),
/* harmony export */   "selectedPmReducer": () => (/* binding */ selectedPmReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/state/actions.ts");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");



const initial = {
    pms: [],
    pagination: {
        page: 1,
        perPage: src_constants__WEBPACK_IMPORTED_MODULE_1__.INITIAL_PAGE_SIZE,
        totalPages: 1,
    },
};
const pmListReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initial, (builder) => {
    builder
        .addCase(_actions__WEBPACK_IMPORTED_MODULE_0__.filterByName, (state, action) => {
        const newState = {
            ...state,
            pms: state.pms.filter((pm) => pm.name.toLocaleLowerCase().includes(action.payload.toLowerCase())),
        };
        return newState;
    })
        .addCase(_actions__WEBPACK_IMPORTED_MODULE_0__.filterByType, (state, action) => {
        const newState = {
            ...state,
            // pms: state.pms.filter((pm: Pm) => action.payload.includes(pm.id)),
        };
        return newState;
    })
        .addCase(_actions__WEBPACK_IMPORTED_MODULE_0__.changePage, (state, action) => {
        const newState = {
            ...state,
            pagination: { ...state.pagination, page: action.payload },
        };
        return newState;
    })
        .addCase(_actions__WEBPACK_IMPORTED_MODULE_0__.changePageSize, (state, action) => {
        const perPage = action.payload;
        const totalPages = Math.ceil(state.pms.length / perPage);
        const newState = {
            page: 1,
            perPage: perPage,
            totalPages: totalPages,
        };
        return { ...state, pagination: newState };
    })
        .addCase(_actions__WEBPACK_IMPORTED_MODULE_0__.clearFilter, (_, action) => {
        if (Array.isArray(action.payload)) {
            return;
        }
    });
});
//open modal with certain pokemon info by id
const selectedPmReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createReducer)(null, (builder) => {
    builder
        .addCase(_actions__WEBPACK_IMPORTED_MODULE_0__.openModal, (state, action) => {
        return action.payload;
    })
        .addCase(_actions__WEBPACK_IMPORTED_MODULE_0__.closeModal, () => {
        return null;
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
/* harmony export */   "selectFilteredPms": () => (/* binding */ selectFilteredPms),
/* harmony export */   "selectPage": () => (/* binding */ selectPage),
/* harmony export */   "selectPerPage": () => (/* binding */ selectPerPage),
/* harmony export */   "selectSelectedPmId": () => (/* binding */ selectSelectedPmId),
/* harmony export */   "selectTotal": () => (/* binding */ selectTotal)
/* harmony export */ });
const selectFilteredPms = (state) => state.pmListReducer.pms;
const selectPage = (state) => state.pmListReducer.pagination.page;
const selectPerPage = (state) => state.pmListReducer.pagination.perPage;
const selectTotal = (state) => state.pmListReducer.pagination.totalPages;
const selectSelectedPmId = (state) => state.selectedPmReducer;


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
        selectedPmReducer: _reducer__WEBPACK_IMPORTED_MODULE_0__.selectedPmReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(_api_useGetPmApi__WEBPACK_IMPORTED_MODULE_1__.pmApi.middleware),
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_mui_icons-material_Search_js-node_modules_mui_material_Chip_Chip_js-node-349917"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2luZGV4LmNzcz9jNDBkIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9hcGkvcXVlcmllcy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvYXBpL3VzZUdldFBtQXBpLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb21wb25lbnRzL0hlYWRlckZpbHRlcnMvSGVhZGVyRmlsdGVycy50c3giLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbkxpc3QvUG9rZW1vbkxpc3QudHN4Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2hvb2tzL3VzZUZpbHRlcnNMb2dpYy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaG9va3MvdXNlTGlzdExvZ2ljLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL3N0YXRlL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL3N0YXRlL3NlbGVjdG9ycy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvc3RhdGUvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBIZWFkZXJGaWx0ZXJzIGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyRmlsdGVycy9IZWFkZXJGaWx0ZXJzXCI7XG5pbXBvcnQgUG9rZW1vbkxpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9Qb2tlbW9uTGlzdC9Qb2tlbW9uTGlzdFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIjtcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIHJldHVybiAoX2pzeHMoQ29udGFpbmVyLCB7IG1heFdpZHRoOiAnc20nLCBjaGlsZHJlbjogW19qc3goVHlwb2dyYXBoeSwgeyB2YXJpYW50OiAnaDInLCBjb21wb25lbnQ6ICdoMScsIGNoaWxkcmVuOiBcIlBva2Vtb25zXCIgfSksIF9qc3goSGVhZGVyRmlsdGVycywge30pLCBfanN4KFBva2Vtb25MaXN0LCB7fSldIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tIFwiZ3JhcGhxbC1yZXF1ZXN0XCI7XG5pbXBvcnQgeyBJTklUSUFMX1BBR0VfU0laRSB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XG5leHBvcnQgY29uc3QgR0VUX1BPS0VNT05TID0gZ3FsIGBcclxuICBxdWVyeSBHZXRQb2tlbW9ucygkdXJsOiBTdHJpbmchKSB7XHJcbiAgICBwb2tlbW9uKHVybDogJHVybCkge1xyXG4gICAgICBuYW1lXHJcbiAgICAgIHR5cGVzIHtcclxuICAgICAgICB0eXBlIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGFiaWxpdGllcyB7XHJcbiAgICAgICAgYWJpbGl0eSB7XHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNwcml0ZXMge1xyXG4gICAgICAgIGZyb250X2RlZmF1bHRcclxuICAgICAgfVxyXG4gICAgICBzdGF0cyB7XHJcbiAgICAgICAgc3RhdCB7XHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNwZWNpZXMge1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcbmV4cG9ydCBjb25zdCBHRVRfTElTVCA9IGdxbCBgXHJcbiAgICAgICAgICBxdWVyeSBHZXRMaXN0KCRsaW1pdDogSW50ID0gJHtJTklUSUFMX1BBR0VfU0laRX0sICRvZmZzZXQ6IEludCA9IDApIHtcclxuICAgICAgICAgICAgcG0obGltaXQ6ICRsaW1pdCwgb2Zmc2V0OiAkb2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgO1xuIiwiaW1wb3J0IHsgY3JlYXRlQXBpIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3RcIjtcbmltcG9ydCB7IGdyYXBocWxSZXF1ZXN0QmFzZVF1ZXJ5IH0gZnJvbSBcIkBydGstcXVlcnkvZ3JhcGhxbC1yZXF1ZXN0LWJhc2UtcXVlcnlcIjtcbmltcG9ydCB7IEdFVF9MSVNULCBHRVRfUE9LRU1PTlMgfSBmcm9tIFwiLi9xdWVyaWVzXCI7XG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uL1wiO1xuZXhwb3J0IGNvbnN0IHBtQXBpID0gY3JlYXRlQXBpKHtcbiAgICByZWR1Y2VyUGF0aDogXCJwbUFwaVwiLFxuICAgIHRhZ1R5cGVzOiBbXCJQbVwiLCBcIlBtVUlcIl0sXG4gICAgYmFzZVF1ZXJ5OiBncmFwaHFsUmVxdWVzdEJhc2VRdWVyeSh7XG4gICAgICAgIHVybDogYCR7QkFTRV9VUkx9YCxcbiAgICB9KSxcbiAgICBlbmRwb2ludHM6IChidWlsZGVyKSA9PiAoe1xuICAgICAgICBnZXRMaXN0OiBidWlsZGVyLnF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiAoeyBsaW1pdCwgb2Zmc2V0IH0pID0+ICh7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6IEdFVF9MSVNULFxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBwcm92aWRlc1RhZ3M6IFtcIlBtXCJdLFxuICAgICAgICAgICAgdHJhbnNmb3JtUmVzcG9uc2U6IChyZXNwb25zZSkgPT4gcmVzcG9uc2UucmVzdWx0cyxcbiAgICAgICAgfSksXG4gICAgICAgIGdldFBtOiBidWlsZGVyLnF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiAoeyB1cmwgfSkgPT4gKHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogR0VUX1BPS0VNT05TLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHsgdXJsIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHByb3ZpZGVzVGFnczogW1wiUG1VSVwiXSxcbiAgICAgICAgfSksXG4gICAgfSksXG59KTtcbmV4cG9ydCBjb25zdCB7IHVzZUdldExpc3RRdWVyeSwgdXNlR2V0UG1RdWVyeSB9ID0gcG1BcGk7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgQ2hpcCwgSWNvbkJ1dHRvbiwgSW5wdXRCYXNlLCBNZW51SXRlbSwgT3V0bGluZWRJbnB1dCwgU2VsZWN0LCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBCb3gsIFN0YWNrIH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2hcIjtcbmltcG9ydCB1c2VGaWx0ZXJzTG9naWMgZnJvbSBcInNyYy9ob29rcy91c2VGaWx0ZXJzTG9naWNcIjtcbmNvbnN0IElURU1fSEVJR0hUID0gNDg7XG5jb25zdCBJVEVNX1BBRERJTkdfVE9QID0gODtcbmNvbnN0IE1lbnVQcm9wcyA9IHtcbiAgICBQYXBlclByb3BzOiB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhIZWlnaHQ6IElURU1fSEVJR0hUICogNC41ICsgSVRFTV9QQURESU5HX1RPUCxcbiAgICAgICAgICAgIHdpZHRoOiAyNTAsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4vLyB0eXBlIEhlYWRlckZpbHRlcnNUID0ge31cbmNvbnN0IHR5cGVzID0gW1xuICAgIFwiT2xpdmVyIEhhbnNlblwiLFxuICAgIFwiVmFuIEhlbnJ5XCIsXG4gICAgXCJBcHJpbCBUdWNrZXJcIixcbiAgICBcIlJhbHBoIEh1YmJhcmRcIixcbiAgICBcIk9tYXIgQWxleGFuZGVyXCIsXG4gICAgXCJDYXJsb3MgQWJib3R0XCIsXG4gICAgXCJNaXJpYW0gV2FnbmVyXCIsXG4gICAgXCJCcmFkbGV5IFdpbGtlcnNvblwiLFxuICAgIFwiVmlyZ2luaWEgQW5kcmV3c1wiLFxuICAgIFwiS2VsbHkgU255ZGVyXCIsXG5dO1xuY29uc3QgSGVhZGVyRmlsdGVycyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGhhbmRsZUNoYW5nZVNlbGVjdCB9ID0gdXNlRmlsdGVyc0xvZ2ljKCk7XG4gICAgcmV0dXJuIChfanN4KEJveCwgeyBjaGlsZHJlbjogX2pzeHMoU3RhY2ssIHsgZGlyZWN0aW9uOiAncm93Jywgc3BhY2luZzogMiwgY2hpbGRyZW46IFtfanN4KElucHV0QmFzZSwgeyBzeDogeyBtbDogMSwgZmxleDogMSB9LCBwbGFjZWhvbGRlcjogJ1NlYXJjaCBieSBuYW1lJywgaW5wdXRQcm9wczogeyBcImFyaWEtbGFiZWxcIjogXCJzZWFyY2ggYnkgbmFtZVwiIH0gfSksIF9qc3goSWNvbkJ1dHRvbiwgeyB0eXBlOiAnYnV0dG9uJywgc3g6IHsgcDogXCIxMHB4XCIgfSwgXCJhcmlhLWxhYmVsXCI6ICdzZWFyY2gnLCBjaGlsZHJlbjogX2pzeChTZWFyY2hJY29uLCB7fSkgfSksIF9qc3goU2VsZWN0LCB7IGxhYmVsSWQ6ICdkZW1vLW11bHRpcGxlLWNoaXAtbGFiZWwnLCBpZDogJ2RlbW8tbXVsdGlwbGUtY2hpcCcsIG11bHRpcGxlOiB0cnVlLCB2YWx1ZTogW10sIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VTZWxlY3QsIGlucHV0OiBfanN4KE91dGxpbmVkSW5wdXQsIHsgaWQ6ICdzZWxlY3QtbXVsdGlwbGUtY2hpcCcsIGxhYmVsOiAnU2VsZWN0IGJ5IHR5cGUnIH0pLCByZW5kZXJWYWx1ZTogKHNlbGVjdGVkKSA9PiAoX2pzeChCb3gsIHsgc3g6IHsgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhXcmFwOiBcIndyYXBcIiwgZ2FwOiAwLjUgfSwgY2hpbGRyZW46IHNlbGVjdGVkLm1hcCgodmFsdWUpID0+IChfanN4KENoaXAsIHsgbGFiZWw6IHZhbHVlIH0sIHZhbHVlKSkpIH0pKSwgTWVudVByb3BzOiBNZW51UHJvcHMsIGNoaWxkcmVuOiB0eXBlcy5tYXAoKHR5cGUpID0+IChfanN4KE1lbnVJdGVtLCB7IHZhbHVlOiB0eXBlLCBjaGlsZHJlbjogdHlwZSB9LCB0eXBlKSkpIH0pXSB9KSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSGVhZGVyRmlsdGVycztcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgdXNlTGlzdExvZ2ljIGZyb20gXCJzcmMvaG9va3MvdXNlTGlzdExvZ2ljXCI7XG5jb25zdCBQb2tlbW9uTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBsb2dpYyA9IHVzZUxpc3RMb2dpYygpO1xuICAgIHJldHVybiBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnJyB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBQb2tlbW9uTGlzdDtcbiIsImV4cG9ydCBjb25zdCBJTklUSUFMX1BBR0VfU0laRSA9IDUwO1xuIiwiY29uc3QgdXNlRmlsdGVyc0xvZ2ljID0gKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVNlbGVjdCA9ICgpID0+IHsgfTtcbiAgICByZXR1cm4geyBoYW5kbGVDaGFuZ2VTZWxlY3QgfTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VGaWx0ZXJzTG9naWM7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlR2V0TGlzdFF1ZXJ5IH0gZnJvbSBcInNyYy9hcGkvdXNlR2V0UG1BcGlcIjtcbmltcG9ydCB7IGNsZWFyRmlsdGVyIH0gZnJvbSBcInNyYy9zdGF0ZS9hY3Rpb25zXCI7XG5pbXBvcnQgeyBcbi8vICAgc2VsZWN0RmlsdGVyZWRQbSxcbnNlbGVjdFBhZ2UsIHNlbGVjdFBlclBhZ2UsIHNlbGVjdFRvdGFsLCB9IGZyb20gXCJzcmMvc3RhdGUvc2VsZWN0b3JzXCI7XG5jb25zdCB1c2VMaXN0TG9naWMgPSAoKSA9PiB7XG4gICAgLy8gICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgaXNTdWNjZXNzLCBpc0Vycm9yIH0gPSB1c2VHZXRQbVF1ZXJ5KCk7XG4gICAgY29uc3QgcGVyUGFnZSA9IHVzZVNlbGVjdG9yKHNlbGVjdFBlclBhZ2UpO1xuICAgIGNvbnN0IHBhZ2UgPSB1c2VTZWxlY3RvcihzZWxlY3RQYWdlKTtcbiAgICBjb25zdCB0b3RhbCA9IHVzZVNlbGVjdG9yKHNlbGVjdFRvdGFsKTtcbiAgICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgaXNTdWNjZXNzLCBpc0Vycm9yIH0gPSB1c2VHZXRMaXN0UXVlcnkoe1xuICAgICAgICBsaW1pdDogcGVyUGFnZSxcbiAgICAgICAgb2Zmc2V0OiBwYWdlICogcGVyUGFnZSxcbiAgICB9KTtcbiAgICAvLyAgIGNvbnN0IGZpbHRlcmVkVXNlcnMgPSB1c2VTZWxlY3RvcihzZWxlY3RGaWx0ZXJlZFBtKTtcbiAgICAvL1RPRE86IGZpeCB0aGF0XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBkaXNwYXRjaChjbGVhckZpbHRlcihkYXRhKSk7XG4gICAgfSwgW2Rpc3BhdGNoLCBkYXRhXSk7XG4gICAgcmV0dXJuIHt9O1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUxpc3RMb2dpYztcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdGF0ZS9zdG9yZVwiO1xuaW1wb3J0IFwiQGZvbnRzb3VyY2Uvcm9ib3RvLzMwMC5jc3NcIjtcbmltcG9ydCBcIkBmb250c291cmNlL3JvYm90by80MDAuY3NzXCI7XG5pbXBvcnQgXCJAZm9udHNvdXJjZS9yb2JvdG8vNTAwLmNzc1wiO1xuaW1wb3J0IFwiQGZvbnRzb3VyY2Uvcm9ib3RvLzcwMC5jc3NcIjtcblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKS5yZW5kZXIoX2pzeChSZWFjdC5TdHJpY3RNb2RlLCB7IGNoaWxkcmVuOiBfanN4KFByb3ZpZGVyLCB7IHN0b3JlOiBzdG9yZSwgY2hpbGRyZW46IF9qc3goQXBwLCB7fSkgfSkgfSkpO1xuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmV4cG9ydCBjb25zdCBmaWx0ZXJCeU5hbWUgPSBjcmVhdGVBY3Rpb24oXCJGSUxURVJfQllfTkFNRVwiKTtcbmV4cG9ydCBjb25zdCBmaWx0ZXJCeVR5cGUgPSBjcmVhdGVBY3Rpb24oXCJGSUxURVJfQllfVFlQRVwiKTtcbmV4cG9ydCBjb25zdCBjbGVhckZpbHRlciA9IGNyZWF0ZUFjdGlvbihcIkNMRUFSX0ZJTFRFUlwiKTtcbmV4cG9ydCBjb25zdCBvcGVuTW9kYWwgPSBjcmVhdGVBY3Rpb24oXCJPUEVOX01PREFMXCIpO1xuZXhwb3J0IGNvbnN0IGNsb3NlTW9kYWwgPSBjcmVhdGVBY3Rpb24oXCJDTE9TRV9NT0RBTFwiKTtcbmV4cG9ydCBjb25zdCBjaGFuZ2VQYWdlID0gY3JlYXRlQWN0aW9uKFwiQ0hBTkdFX1BBR0VcIik7XG5leHBvcnQgY29uc3QgY2hhbmdlUGFnZVNpemUgPSBjcmVhdGVBY3Rpb24oXCJDSEFOR0VfUEFHRV9TSVpFXCIpO1xuIiwiaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBjaGFuZ2VQYWdlLCBjaGFuZ2VQYWdlU2l6ZSwgY2xlYXJGaWx0ZXIsIGNsb3NlTW9kYWwsIGZpbHRlckJ5TmFtZSwgZmlsdGVyQnlUeXBlLCBvcGVuTW9kYWwsIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgSU5JVElBTF9QQUdFX1NJWkUgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xuY29uc3QgaW5pdGlhbCA9IHtcbiAgICBwbXM6IFtdLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgcGVyUGFnZTogSU5JVElBTF9QQUdFX1NJWkUsXG4gICAgICAgIHRvdGFsUGFnZXM6IDEsXG4gICAgfSxcbn07XG5leHBvcnQgY29uc3QgcG1MaXN0UmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbCwgKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyXG4gICAgICAgIC5hZGRDYXNlKGZpbHRlckJ5TmFtZSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHBtczogc3RhdGUucG1zLmZpbHRlcigocG0pID0+IHBtLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKS5pbmNsdWRlcyhhY3Rpb24ucGF5bG9hZC50b0xvd2VyQ2FzZSgpKSksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9KVxuICAgICAgICAuYWRkQ2FzZShmaWx0ZXJCeVR5cGUsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAvLyBwbXM6IHN0YXRlLnBtcy5maWx0ZXIoKHBtOiBQbSkgPT4gYWN0aW9uLnBheWxvYWQuaW5jbHVkZXMocG0uaWQpKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGNoYW5nZVBhZ2UsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7IC4uLnN0YXRlLnBhZ2luYXRpb24sIHBhZ2U6IGFjdGlvbi5wYXlsb2FkIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9KVxuICAgICAgICAuYWRkQ2FzZShjaGFuZ2VQYWdlU2l6ZSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgcGVyUGFnZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHN0YXRlLnBtcy5sZW5ndGggLyBwZXJQYWdlKTtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgcGVyUGFnZTogcGVyUGFnZSxcbiAgICAgICAgICAgIHRvdGFsUGFnZXM6IHRvdGFsUGFnZXMsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwYWdpbmF0aW9uOiBuZXdTdGF0ZSB9O1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGNsZWFyRmlsdGVyLCAoXywgYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFjdGlvbi5wYXlsb2FkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbi8vb3BlbiBtb2RhbCB3aXRoIGNlcnRhaW4gcG9rZW1vbiBpbmZvIGJ5IGlkXG5leHBvcnQgY29uc3Qgc2VsZWN0ZWRQbVJlZHVjZXIgPSBjcmVhdGVSZWR1Y2VyKG51bGwsIChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlclxuICAgICAgICAuYWRkQ2FzZShvcGVuTW9kYWwsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICB9KVxuICAgICAgICAuYWRkQ2FzZShjbG9zZU1vZGFsLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xufSk7XG4iLCJleHBvcnQgY29uc3Qgc2VsZWN0RmlsdGVyZWRQbXMgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIucG1zO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFBhZ2UgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIucGFnaW5hdGlvbi5wYWdlO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFBlclBhZ2UgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIucGFnaW5hdGlvbi5wZXJQYWdlO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFRvdGFsID0gKHN0YXRlKSA9PiBzdGF0ZS5wbUxpc3RSZWR1Y2VyLnBhZ2luYXRpb24udG90YWxQYWdlcztcbmV4cG9ydCBjb25zdCBzZWxlY3RTZWxlY3RlZFBtSWQgPSAoc3RhdGUpID0+IHN0YXRlLnNlbGVjdGVkUG1SZWR1Y2VyO1xuIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgcG1MaXN0UmVkdWNlciwgc2VsZWN0ZWRQbVJlZHVjZXIgfSBmcm9tIFwiLi9yZWR1Y2VyXCI7XG5pbXBvcnQgeyBwbUFwaSB9IGZyb20gXCIuLi9hcGkvdXNlR2V0UG1BcGlcIjtcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICAgIHJlZHVjZXI6IHtcbiAgICAgICAgW3BtQXBpLnJlZHVjZXJQYXRoXTogcG1BcGkucmVkdWNlcixcbiAgICAgICAgcG1MaXN0UmVkdWNlcjogcG1MaXN0UmVkdWNlcixcbiAgICAgICAgc2VsZWN0ZWRQbVJlZHVjZXI6IHNlbGVjdGVkUG1SZWR1Y2VyLFxuICAgIH0sXG4gICAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PiBnZXREZWZhdWx0TWlkZGxld2FyZSgpLmNvbmNhdChwbUFwaS5taWRkbGV3YXJlKSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZWNsaXBzZV9hc3NpZ25tZW50XCJdID0gc2VsZltcIndlYnBhY2tDaHVua2VjbGlwc2VfYXNzaWdubWVudFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfbXVpX2ljb25zLW1hdGVyaWFsX1NlYXJjaF9qcy1ub2RlX21vZHVsZXNfbXVpX21hdGVyaWFsX0NoaXBfQ2hpcF9qcy1ub2RlLTM0OTkxN1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c3hcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==