"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/data/albums.js":
/*!****************************!*\
  !*** ./src/data/albums.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   listenNowAlbums: function() { return /* binding */ listenNowAlbums; },\n/* harmony export */   madeForYouAlbums: function() { return /* binding */ madeForYouAlbums; }\n/* harmony export */ });\nconst listenNowAlbums = [\n    {\n        id: 1,\n        name: \"Colorblind\",\n        artist: \"Vandyck\",\n        cover: \"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        description: \"This is a song about color blind\",\n        price: \"$ 100\",\n        quantity: 3\n    },\n    {\n        id: 2,\n        name: \"Duck\",\n        artist: \"Vandyck\",\n        cover: \"https://images.unsplash.com/photo-1582845512747-e42001c95638?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        description: \"Mini Duck\",\n        price: \"$ 50\",\n        quantity: 20\n    },\n    {\n        id: 3,\n        name: \"Web 5 Poppin\",\n        artist: \"Vandyck\",\n        cover: \"https://images.unsplash.com/photo-1506615111443-10e6dbdbfe41?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        description: \"Poppin Web 5 Decentralized Vibe\",\n        price: \"$ 400\",\n        quantity: 1\n    },\n    {\n        id: 4,\n        name: \"ABCD\",\n        artist: \"Vandyck\",\n        cover: \"https://plus.unsplash.com/premium_photo-1682308336208-7f3c19e6a96b?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n        description: \"Song for your kids\",\n        price: \"$ 30\",\n        quantity: 20\n    }\n];\nconst madeForYouAlbums = [\n    {\n        name: \"Royalty\",\n        artist: \"Vandyck\",\n        cover: \"https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9hbGJ1bXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxrQkFBa0I7SUFDL0I7UUFDSUMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsT0FDQTtRQUNBQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsVUFBVztJQUNmO0lBQ0E7UUFDSU4sSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsT0FDQTtRQUNBQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsVUFBVztJQUVmO0lBQ0E7UUFDSU4sSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsT0FDQTtRQUNBQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsVUFBVztJQUNmO0lBQ0E7UUFDSU4sSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsT0FDQTtRQUNBQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsVUFBVztJQUNmO0NBQ0M7QUFFTSxNQUFNQyxtQkFBbUI7SUFDaEM7UUFDSU4sTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLE9BQ0E7SUFDSjtDQUNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9kYXRhL2FsYnVtcy5qcz83MzUzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBsaXN0ZW5Ob3dBbGJ1bXMgPSBbXG57XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCJDb2xvcmJsaW5kXCIsXG4gICAgYXJ0aXN0OiBcIlZhbmR5Y2tcIixcbiAgICBjb3ZlcjpcbiAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDkzMjI1NDU3MTI0LWEzZWIxNjFmZmE1Zj9xPTgwJnc9MjM3MCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgc29uZyBhYm91dCBjb2xvciBibGluZFwiLFxuICAgIHByaWNlOiBcIiQgMTAwXCIsXG4gICAgcXVhbnRpdHkgOiAzXG59LFxue1xuICAgIGlkOiAyLFxuICAgIG5hbWU6IFwiRHVja1wiLFxuICAgIGFydGlzdDogXCJWYW5keWNrXCIsXG4gICAgY292ZXI6XG4gICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4Mjg0NTUxMjc0Ny1lNDIwMDFjOTU2Mzg/cT04MCZ3PTIzNzAmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWluaSBEdWNrXCIsXG4gICAgcHJpY2U6IFwiJCA1MFwiLFxuICAgIHF1YW50aXR5IDogMjBcblxufSxcbntcbiAgICBpZDogMyxcbiAgICBuYW1lOiBcIldlYiA1IFBvcHBpblwiLFxuICAgIGFydGlzdDogXCJWYW5keWNrXCIsXG4gICAgY292ZXI6XG4gICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNjYxNTExMTQ0My0xMGU2ZGJkYmZlNDE/cT04MCZ3PTIzNzAmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUG9wcGluIFdlYiA1IERlY2VudHJhbGl6ZWQgVmliZVwiLFxuICAgIHByaWNlOiBcIiQgNDAwXCIsXG4gICAgcXVhbnRpdHkgOiAxXG59LFxue1xuICAgIGlkOiA0LFxuICAgIG5hbWU6IFwiQUJDRFwiLFxuICAgIGFydGlzdDogXCJWYW5keWNrXCIsXG4gICAgY292ZXI6XG4gICAgXCJodHRwczovL3BsdXMudW5zcGxhc2guY29tL3ByZW1pdW1fcGhvdG8tMTY4MjMwODMzNjIwOC03ZjNjMTllNmE5NmI/cT04MCZ3PTI1OTImYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU29uZyBmb3IgeW91ciBraWRzXCIsXG4gICAgcHJpY2U6IFwiJCAzMFwiLFxuICAgIHF1YW50aXR5IDogMjBcbn0sXG5dXG5cbmV4cG9ydCBjb25zdCBtYWRlRm9yWW91QWxidW1zID0gW1xue1xuICAgIG5hbWU6IFwiUm95YWx0eVwiLFxuICAgIGFydGlzdDogXCJWYW5keWNrXCIsXG4gICAgY292ZXI6XG4gICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYxNTI0NzAwMTk1OC1mNGJjOTJmYTZhNGE/dz0zMDAmZHByPTImcT04MFwiLFxufSxcbl0iXSwibmFtZXMiOlsibGlzdGVuTm93QWxidW1zIiwiaWQiLCJuYW1lIiwiYXJ0aXN0IiwiY292ZXIiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwicXVhbnRpdHkiLCJtYWRlRm9yWW91QWxidW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/data/albums.js\n"));

/***/ })

});