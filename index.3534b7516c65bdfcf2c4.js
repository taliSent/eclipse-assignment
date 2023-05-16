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
              url
            
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



const BASE_URL = "https://pokeapi.co/api/v2/";
const pmApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__.createApi)({
    reducerPath: "pmApi",
    tagTypes: ["Pm", "PmUI"],
    baseQuery: (0,_rtk_query_graphql_request_base_query__WEBPACK_IMPORTED_MODULE_0__.graphqlRequestBaseQuery)({
        url: `${BASE_URL}`,
    }),
    endpoints: (builder) => ({
        getList: builder.query({
            query: () => "pokemon",
            providesTags: ["Pm"],
            // transformResponse: (response: ResponsePm) => response.results,
        }),
        getPm: builder.query({
            query: ({ url }) => ({
                document: _queries__WEBPACK_IMPORTED_MODULE_1__.GET_POKEMONS,
                method: "GET",
                variables: { url },
            }),
            providesTags: ["PmUI"],
        }),
        // getTypes: builder.query<string[], void>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvYXBpL3F1ZXJpZXMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2FwaS91c2VHZXRQbUFwaS50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvY29tcG9uZW50cy9IZWFkZXJGaWx0ZXJzL0hlYWRlckZpbHRlcnMudHN4Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9jb21wb25lbnRzL1Bva2Vtb25MaXN0L1Bva2Vtb25MaXN0LnRzeCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9ob29rcy91c2VGaWx0ZXJzTG9naWMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL2hvb2tzL3VzZUxpc3RMb2dpYy50cyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9zdGF0ZS9yZWR1Y2VyLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC8uL3NyYy9zdGF0ZS9zZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50Ly4vc3JjL3N0YXRlL3N0b3JlLnRzIiwid2VicGFjazovL2VjbGlwc2UtYXNzaWdubWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWNsaXBzZS1hc3NpZ25tZW50L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lY2xpcHNlLWFzc2lnbm1lbnQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgSGVhZGVyRmlsdGVycyBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlckZpbHRlcnMvSGVhZGVyRmlsdGVyc1wiO1xuaW1wb3J0IFBva2Vtb25MaXN0IGZyb20gXCIuL2NvbXBvbmVudHMvUG9rZW1vbkxpc3QvUG9rZW1vbkxpc3RcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICByZXR1cm4gKF9qc3hzKENvbnRhaW5lciwgeyBtYXhXaWR0aDogJ3NtJywgY2hpbGRyZW46IFtfanN4KFR5cG9ncmFwaHksIHsgdmFyaWFudDogJ2gyJywgY29tcG9uZW50OiAnaDEnLCBjaGlsZHJlbjogXCJQb2tlbW9uc1wiIH0pLCBfanN4KEhlYWRlckZpbHRlcnMsIHt9KSwgX2pzeChQb2tlbW9uTGlzdCwge30pXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcImdyYXBocWwtcmVxdWVzdFwiO1xuaW1wb3J0IHsgSU5JVElBTF9QQUdFX1NJWkUgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xuZXhwb3J0IGNvbnN0IEdFVF9QT0tFTU9OUyA9IGdxbCBgXHJcbiAgcXVlcnkgR2V0UG9rZW1vbnMoJHVybDogU3RyaW5nISkge1xyXG4gICAgcG9rZW1vbih1cmw6ICR1cmwpIHtcclxuICAgICAgbmFtZVxyXG4gICAgICB0eXBlcyB7XHJcbiAgICAgICAgdHlwZSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhYmlsaXRpZXMge1xyXG4gICAgICAgIGFiaWxpdHkge1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzcHJpdGVzIHtcclxuICAgICAgICBmcm9udF9kZWZhdWx0XHJcbiAgICAgIH1cclxuICAgICAgc3RhdHMge1xyXG4gICAgICAgIHN0YXQge1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzcGVjaWVzIHtcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XG5leHBvcnQgY29uc3QgR0VUX0xJU1QgPSBncWwgYFxyXG4gICAgICAgICAgcXVlcnkgR2V0TGlzdCgkbGltaXQ6IEludCA9ICR7SU5JVElBTF9QQUdFX1NJWkV9LCAkb2Zmc2V0OiBJbnQgPSAwKSB7XHJcbiAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGA7XG4iLCJpbXBvcnQgeyBjcmVhdGVBcGkgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdFwiO1xuaW1wb3J0IHsgZ3JhcGhxbFJlcXVlc3RCYXNlUXVlcnkgfSBmcm9tIFwiQHJ0ay1xdWVyeS9ncmFwaHFsLXJlcXVlc3QtYmFzZS1xdWVyeVwiO1xuaW1wb3J0IHsgR0VUX1BPS0VNT05TIH0gZnJvbSBcIi4vcXVlcmllc1wiO1xuY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvXCI7XG5leHBvcnQgY29uc3QgcG1BcGkgPSBjcmVhdGVBcGkoe1xuICAgIHJlZHVjZXJQYXRoOiBcInBtQXBpXCIsXG4gICAgdGFnVHlwZXM6IFtcIlBtXCIsIFwiUG1VSVwiXSxcbiAgICBiYXNlUXVlcnk6IGdyYXBocWxSZXF1ZXN0QmFzZVF1ZXJ5KHtcbiAgICAgICAgdXJsOiBgJHtCQVNFX1VSTH1gLFxuICAgIH0pLFxuICAgIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XG4gICAgICAgIGdldExpc3Q6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6ICgpID0+IFwicG9rZW1vblwiLFxuICAgICAgICAgICAgcHJvdmlkZXNUYWdzOiBbXCJQbVwiXSxcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybVJlc3BvbnNlOiAocmVzcG9uc2U6IFJlc3BvbnNlUG0pID0+IHJlc3BvbnNlLnJlc3VsdHMsXG4gICAgICAgIH0pLFxuICAgICAgICBnZXRQbTogYnVpbGRlci5xdWVyeSh7XG4gICAgICAgICAgICBxdWVyeTogKHsgdXJsIH0pID0+ICh7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6IEdFVF9QT0tFTU9OUyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IHVybCB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBwcm92aWRlc1RhZ3M6IFtcIlBtVUlcIl0sXG4gICAgICAgIH0pLFxuICAgICAgICAvLyBnZXRUeXBlczogYnVpbGRlci5xdWVyeTxzdHJpbmdbXSwgdm9pZD5cbiAgICB9KSxcbn0pO1xuZXhwb3J0IGNvbnN0IHsgdXNlR2V0TGlzdFF1ZXJ5LCB1c2VHZXRQbVF1ZXJ5IH0gPSBwbUFwaTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBDaGlwLCBJY29uQnV0dG9uLCBJbnB1dEJhc2UsIE1lbnVJdGVtLCBPdXRsaW5lZElucHV0LCBTZWxlY3QsIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEJveCwgU3RhY2sgfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaFwiO1xuaW1wb3J0IHVzZUZpbHRlcnNMb2dpYyBmcm9tIFwic3JjL2hvb2tzL3VzZUZpbHRlcnNMb2dpY1wiO1xuY29uc3QgSVRFTV9IRUlHSFQgPSA0ODtcbmNvbnN0IElURU1fUEFERElOR19UT1AgPSA4O1xuY29uc3QgTWVudVByb3BzID0ge1xuICAgIFBhcGVyUHJvcHM6IHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG1heEhlaWdodDogSVRFTV9IRUlHSFQgKiA0LjUgKyBJVEVNX1BBRERJTkdfVE9QLFxuICAgICAgICAgICAgd2lkdGg6IDI1MCxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbi8vIHR5cGUgSGVhZGVyRmlsdGVyc1QgPSB7fVxuY29uc3QgdHlwZXMgPSBbXG4gICAgXCJPbGl2ZXIgSGFuc2VuXCIsXG4gICAgXCJWYW4gSGVucnlcIixcbiAgICBcIkFwcmlsIFR1Y2tlclwiLFxuICAgIFwiUmFscGggSHViYmFyZFwiLFxuICAgIFwiT21hciBBbGV4YW5kZXJcIixcbiAgICBcIkNhcmxvcyBBYmJvdHRcIixcbiAgICBcIk1pcmlhbSBXYWduZXJcIixcbiAgICBcIkJyYWRsZXkgV2lsa2Vyc29uXCIsXG4gICAgXCJWaXJnaW5pYSBBbmRyZXdzXCIsXG4gICAgXCJLZWxseSBTbnlkZXJcIixcbl07XG5jb25zdCBIZWFkZXJGaWx0ZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaGFuZGxlQ2hhbmdlU2VsZWN0IH0gPSB1c2VGaWx0ZXJzTG9naWMoKTtcbiAgICByZXR1cm4gKF9qc3goQm94LCB7IGNoaWxkcmVuOiBfanN4cyhTdGFjaywgeyBkaXJlY3Rpb246ICdyb3cnLCBzcGFjaW5nOiAyLCBjaGlsZHJlbjogW19qc3goSW5wdXRCYXNlLCB7IHN4OiB7IG1sOiAxLCBmbGV4OiAxIH0sIHBsYWNlaG9sZGVyOiAnU2VhcmNoIGJ5IG5hbWUnLCBpbnB1dFByb3BzOiB7IFwiYXJpYS1sYWJlbFwiOiBcInNlYXJjaCBieSBuYW1lXCIgfSB9KSwgX2pzeChJY29uQnV0dG9uLCB7IHR5cGU6ICdidXR0b24nLCBzeDogeyBwOiBcIjEwcHhcIiB9LCBcImFyaWEtbGFiZWxcIjogJ3NlYXJjaCcsIGNoaWxkcmVuOiBfanN4KFNlYXJjaEljb24sIHt9KSB9KSwgX2pzeChTZWxlY3QsIHsgbGFiZWxJZDogJ2RlbW8tbXVsdGlwbGUtY2hpcC1sYWJlbCcsIGlkOiAnZGVtby1tdWx0aXBsZS1jaGlwJywgbXVsdGlwbGU6IHRydWUsIHZhbHVlOiBbXSwgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZVNlbGVjdCwgaW5wdXQ6IF9qc3goT3V0bGluZWRJbnB1dCwgeyBpZDogJ3NlbGVjdC1tdWx0aXBsZS1jaGlwJywgbGFiZWw6ICdTZWxlY3QgYnkgdHlwZScgfSksIHJlbmRlclZhbHVlOiAoc2VsZWN0ZWQpID0+IChfanN4KEJveCwgeyBzeDogeyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiLCBnYXA6IDAuNSB9LCBjaGlsZHJlbjogc2VsZWN0ZWQubWFwKCh2YWx1ZSkgPT4gKF9qc3goQ2hpcCwgeyBsYWJlbDogdmFsdWUgfSwgdmFsdWUpKSkgfSkpLCBNZW51UHJvcHM6IE1lbnVQcm9wcywgY2hpbGRyZW46IHR5cGVzLm1hcCgodHlwZSkgPT4gKF9qc3goTWVudUl0ZW0sIHsgdmFsdWU6IHR5cGUsIGNoaWxkcmVuOiB0eXBlIH0sIHR5cGUpKSkgfSldIH0pIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIZWFkZXJGaWx0ZXJzO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB1c2VMaXN0TG9naWMgZnJvbSBcInNyYy9ob29rcy91c2VMaXN0TG9naWNcIjtcbmNvbnN0IFBva2Vtb25MaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvZ2ljID0gdXNlTGlzdExvZ2ljKCk7XG4gICAgcmV0dXJuIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6ICcnIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IFBva2Vtb25MaXN0O1xuIiwiZXhwb3J0IGNvbnN0IElOSVRJQUxfUEFHRV9TSVpFID0gNTA7XG4iLCJjb25zdCB1c2VGaWx0ZXJzTG9naWMgPSAoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU2VsZWN0ID0gKCkgPT4geyB9O1xuICAgIHJldHVybiB7IGhhbmRsZUNoYW5nZVNlbGVjdCB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUZpbHRlcnNMb2dpYztcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VHZXRMaXN0UXVlcnkgfSBmcm9tIFwic3JjL2FwaS91c2VHZXRQbUFwaVwiO1xuaW1wb3J0IHsgY2xlYXJGaWx0ZXIgfSBmcm9tIFwic3JjL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IFxuLy8gICBzZWxlY3RGaWx0ZXJlZFBtLFxuc2VsZWN0UGFnZSwgc2VsZWN0UGVyUGFnZSwgc2VsZWN0VG90YWwsIH0gZnJvbSBcInNyYy9zdGF0ZS9zZWxlY3RvcnNcIjtcbmNvbnN0IHVzZUxpc3RMb2dpYyA9ICgpID0+IHtcbiAgICAvLyAgIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MsIGlzRXJyb3IgfSA9IHVzZUdldFBtUXVlcnkoKTtcbiAgICBjb25zdCBwZXJQYWdlID0gdXNlU2VsZWN0b3Ioc2VsZWN0UGVyUGFnZSk7XG4gICAgY29uc3QgcGFnZSA9IHVzZVNlbGVjdG9yKHNlbGVjdFBhZ2UpO1xuICAgIGNvbnN0IHRvdGFsID0gdXNlU2VsZWN0b3Ioc2VsZWN0VG90YWwpO1xuICAgIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MsIGlzRXJyb3IgfSA9IHVzZUdldExpc3RRdWVyeSh7XG4gICAgICAgIGxpbWl0OiBwZXJQYWdlLFxuICAgICAgICBvZmZzZXQ6IHBhZ2UgKiBwZXJQYWdlLFxuICAgIH0pO1xuICAgIC8vICAgY29uc3QgZmlsdGVyZWRVc2VycyA9IHVzZVNlbGVjdG9yKHNlbGVjdEZpbHRlcmVkUG0pO1xuICAgIC8vVE9ETzogZml4IHRoYXRcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGRpc3BhdGNoKGNsZWFyRmlsdGVyKGRhdGEpKTtcbiAgICB9LCBbZGlzcGF0Y2gsIGRhdGFdKTtcbiAgICByZXR1cm4ge307XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlTGlzdExvZ2ljO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0YXRlL3N0b3JlXCI7XG5pbXBvcnQgXCJAZm9udHNvdXJjZS9yb2JvdG8vMzAwLmNzc1wiO1xuaW1wb3J0IFwiQGZvbnRzb3VyY2Uvcm9ib3RvLzQwMC5jc3NcIjtcbmltcG9ydCBcIkBmb250c291cmNlL3JvYm90by81MDAuY3NzXCI7XG5pbXBvcnQgXCJAZm9udHNvdXJjZS9yb2JvdG8vNzAwLmNzc1wiO1xuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpLnJlbmRlcihfanN4KFJlYWN0LlN0cmljdE1vZGUsIHsgY2hpbGRyZW46IF9qc3goUHJvdmlkZXIsIHsgc3RvcmU6IHN0b3JlLCBjaGlsZHJlbjogX2pzeChBcHAsIHt9KSB9KSB9KSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuZXhwb3J0IGNvbnN0IGZpbHRlckJ5TmFtZSA9IGNyZWF0ZUFjdGlvbihcIkZJTFRFUl9CWV9OQU1FXCIpO1xuZXhwb3J0IGNvbnN0IGZpbHRlckJ5VHlwZSA9IGNyZWF0ZUFjdGlvbihcIkZJTFRFUl9CWV9UWVBFXCIpO1xuZXhwb3J0IGNvbnN0IGNsZWFyRmlsdGVyID0gY3JlYXRlQWN0aW9uKFwiQ0xFQVJfRklMVEVSXCIpO1xuZXhwb3J0IGNvbnN0IG9wZW5Nb2RhbCA9IGNyZWF0ZUFjdGlvbihcIk9QRU5fTU9EQUxcIik7XG5leHBvcnQgY29uc3QgY2xvc2VNb2RhbCA9IGNyZWF0ZUFjdGlvbihcIkNMT1NFX01PREFMXCIpO1xuZXhwb3J0IGNvbnN0IGNoYW5nZVBhZ2UgPSBjcmVhdGVBY3Rpb24oXCJDSEFOR0VfUEFHRVwiKTtcbmV4cG9ydCBjb25zdCBjaGFuZ2VQYWdlU2l6ZSA9IGNyZWF0ZUFjdGlvbihcIkNIQU5HRV9QQUdFX1NJWkVcIik7XG4iLCJpbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IGNoYW5nZVBhZ2UsIGNoYW5nZVBhZ2VTaXplLCBjbGVhckZpbHRlciwgY2xvc2VNb2RhbCwgZmlsdGVyQnlOYW1lLCBmaWx0ZXJCeVR5cGUsIG9wZW5Nb2RhbCwgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQgeyBJTklUSUFMX1BBR0VfU0laRSB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XG5jb25zdCBpbml0aWFsID0ge1xuICAgIHBtczogW10sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBwZXJQYWdlOiBJTklUSUFMX1BBR0VfU0laRSxcbiAgICAgICAgdG90YWxQYWdlczogMSxcbiAgICB9LFxufTtcbmV4cG9ydCBjb25zdCBwbUxpc3RSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihpbml0aWFsLCAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXJcbiAgICAgICAgLmFkZENhc2UoZmlsdGVyQnlOYW1lLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgcG1zOiBzdGF0ZS5wbXMuZmlsdGVyKChwbSkgPT4gcG0ubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpLmluY2x1ZGVzKGFjdGlvbi5wYXlsb2FkLnRvTG93ZXJDYXNlKCkpKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGZpbHRlckJ5VHlwZSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIC8vIHBtczogc3RhdGUucG1zLmZpbHRlcigocG06IFBtKSA9PiBhY3Rpb24ucGF5bG9hZC5pbmNsdWRlcyhwbS5pZCkpLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSlcbiAgICAgICAgLmFkZENhc2UoY2hhbmdlUGFnZSwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHsgLi4uc3RhdGUucGFnaW5hdGlvbiwgcGFnZTogYWN0aW9uLnBheWxvYWQgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGNoYW5nZVBhZ2VTaXplLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBwZXJQYWdlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoc3RhdGUucG1zLmxlbmd0aCAvIHBlclBhZ2UpO1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICBwZXJQYWdlOiBwZXJQYWdlLFxuICAgICAgICAgICAgdG90YWxQYWdlczogdG90YWxQYWdlcyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBhZ2luYXRpb246IG5ld1N0YXRlIH07XG4gICAgfSlcbiAgICAgICAgLmFkZENhc2UoY2xlYXJGaWx0ZXIsIChfLCBhY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYWN0aW9uLnBheWxvYWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuLy9vcGVuIG1vZGFsIHdpdGggY2VydGFpbiBwb2tlbW9uIGluZm8gYnkgaWRcbmV4cG9ydCBjb25zdCBzZWxlY3RlZFBtUmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIobnVsbCwgKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyXG4gICAgICAgIC5hZGRDYXNlKG9wZW5Nb2RhbCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGNsb3NlTW9kYWwsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG59KTtcbiIsImV4cG9ydCBjb25zdCBzZWxlY3RGaWx0ZXJlZFBtcyA9IChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlci5wbXM7XG5leHBvcnQgY29uc3Qgc2VsZWN0UGFnZSA9IChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlci5wYWdpbmF0aW9uLnBhZ2U7XG5leHBvcnQgY29uc3Qgc2VsZWN0UGVyUGFnZSA9IChzdGF0ZSkgPT4gc3RhdGUucG1MaXN0UmVkdWNlci5wYWdpbmF0aW9uLnBlclBhZ2U7XG5leHBvcnQgY29uc3Qgc2VsZWN0VG90YWwgPSAoc3RhdGUpID0+IHN0YXRlLnBtTGlzdFJlZHVjZXIucGFnaW5hdGlvbi50b3RhbFBhZ2VzO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFNlbGVjdGVkUG1JZCA9IChzdGF0ZSkgPT4gc3RhdGUuc2VsZWN0ZWRQbVJlZHVjZXI7XG4iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBwbUxpc3RSZWR1Y2VyLCBzZWxlY3RlZFBtUmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJcIjtcbmltcG9ydCB7IHBtQXBpIH0gZnJvbSBcIi4uL2FwaS91c2VHZXRQbUFwaVwiO1xuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjoge1xuICAgICAgICBbcG1BcGkucmVkdWNlclBhdGhdOiBwbUFwaS5yZWR1Y2VyLFxuICAgICAgICBwbUxpc3RSZWR1Y2VyOiBwbUxpc3RSZWR1Y2VyLFxuICAgICAgICBzZWxlY3RlZFBtUmVkdWNlcjogc2VsZWN0ZWRQbVJlZHVjZXIsXG4gICAgfSxcbiAgICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+IGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KHBtQXBpLm1pZGRsZXdhcmUpLFxufSk7XG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtlY2xpcHNlX2Fzc2lnbm1lbnRcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZWNsaXBzZV9hc3NpZ25tZW50XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19tdWlfaWNvbnMtbWF0ZXJpYWxfU2VhcmNoX2pzLW5vZGVfbW9kdWxlc19tdWlfbWF0ZXJpYWxfQ2hpcF9DaGlwX2pzLW5vZGUtMzQ5OTE3XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzeFwiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9