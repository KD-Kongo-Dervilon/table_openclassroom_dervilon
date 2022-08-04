"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.array.sort.js");

var _react = _interopRequireWildcard(require("react"));

var _Rows = _interopRequireDefault(require("./Rows"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 *
 * @param {Object} props
 *  @param {Array} props.data // Array of objects
 * @param {Array} props.labels // Array of strings
 * @param {Number} props.pagination
 * @returns {React.ReactElement}
 */
function Table(_ref) {
  let {
    data,
    labels,
    pagination
  } = _ref;
  const [pageNumber, setPageNumber] = (0, _react.useState)(1);
  const [selectAmounOfEntriesPerPage, setSelectAmounOfEntriesPerPage] = (0, _react.useState)(pagination);
  const [amounOfEntriesPerPage, setAmounOfEntriesPerPage] = (0, _react.useState)(0);
  const [tableData, setTableData] = (0, _react.useState)(data);
  const [sortBy, setSortBy] = (0, _react.useState)(null);
  const [sortByAsc, setSortByAsc] = (0, _react.useState)(true);
  const [page, setPage] = (0, _react.useState)([]);

  function handleChangeSelect(event) {
    const value = event.target.value;
    setSelectAmounOfEntriesPerPage(Number(value));
    setPageNumber(1);
  }

  function handleChangeSearch(event) {
    const value = event.target.value;
    const result = data.filter(obj => {
      const isRequest = Object.values(obj).filter(item => String(item.toLowerCase()).includes(String(value.toLowerCase())));
      return isRequest.length > 0;
    });
    value.length === 0 ? setTableData(data) : setTableData(result);
  }

  function handleClickArrow(index) {
    setSortBy(index);
    sortByAsc ? setSortByAsc(false) : setSortByAsc(true);
  }

  (0, _react.useEffect)(() => {
    function getPagination(
    /** @type {any[]} */
    array,
    /** @type {number} */
    pageSize,
    /** @type {number} */
    pageNumber) {
      const newArray = array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

      if (sortBy === null) {
        return newArray;
      } else {
        return newArray.sort(function (a, b) {
          if (sortByAsc) {
            return Object.values(a)[sortBy].localeCompare(Object.values(b)[sortBy]);
          } else {
            return Object.values(b)[sortBy].localeCompare(Object.values(a)[sortBy]);
          }
        });
      }
    }

    setPage(getPagination(tableData, selectAmounOfEntriesPerPage, pageNumber));
    setAmounOfEntriesPerPage(page.length);
    return;
  }, [page.length, pageNumber, selectAmounOfEntriesPerPage, sortBy, sortByAsc, tableData]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "table"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "table-top"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "selectAmountEntries"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Show "), /*#__PURE__*/_react.default.createElement("select", {
    onChange: handleChangeSelect
  }, /*#__PURE__*/_react.default.createElement("option", {
    defaultValue: 10
  }, "10"), /*#__PURE__*/_react.default.createElement("option", {
    value: 50
  }, "50"), /*#__PURE__*/_react.default.createElement("option", {
    value: data.length
  }, "All")), /*#__PURE__*/_react.default.createElement("span", null, " entries")), /*#__PURE__*/_react.default.createElement("div", {
    className: "inputSearchWrapper"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "searchEntry"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Search "), /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    name: "searchEntry",
    id: "searchEntry",
    onChange: handleChangeSearch
  })))), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, labels.map((item, index) => /*#__PURE__*/_react.default.createElement("th", {
    key: index,
    scope: "col",
    colSpan: 1
  }, item, /*#__PURE__*/_react.default.createElement("span", {
    className: "arrow",
    onClick: () => handleClickArrow(index)
  }))))), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement(_Rows.default, {
    data: page
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "table-bottom"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "paginationDisplay"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Showing ", amounOfEntriesPerPage, " of ", data.length, " entries")), /*#__PURE__*/_react.default.createElement("div", {
    className: 'pagination'
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => pageNumber > 1 && setPageNumber(pageNumber - 1)
  }, "Previous"), /*#__PURE__*/_react.default.createElement("span", null, pageNumber), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => {
      page.length === selectAmounOfEntriesPerPage && setPageNumber(pageNumber + 1);
    }
  }, "Next"))));
}

var _default = Table;
exports.default = _default;
Table.propType = {
  data: _propTypes.default.array.isRequired,
  labels: _propTypes.default.array.isRequired,
  pagination: _propTypes.default.number.isRequired
};
Table.defaultProps = {
  pagination: 10,
  labels: ['First Name', 'Last Name', 'Start Date', 'Department', 'Date of Birth', 'Street', 'City', 'State', 'Zip Code'],
  data: [{
    firstName: 'John',
    lastName: 'Doe',
    startDate: '01/01/2022',
    department: 'Aude',
    dateOfBirth: '01/01/1980',
    street: '1 rue Larue',
    city: 'Nice',
    state: 'France',
    zipCode: '06000'
  }, {
    firstName: 'Jane',
    lastName: 'Doe',
    startDate: '01/01/2022',
    department: 'Loire',
    dateOfBirth: '01/01/1981',
    street: '1 rue Marue',
    city: 'Paris',
    state: 'France',
    zipCode: '75000'
  }, {
    firstName: 'John',
    lastName: 'Doe',
    startDate: '01/01/2022',
    department: 'Aude',
    dateOfBirth: '01/01/1980',
    street: '1 rue Larue',
    city: 'Nice',
    state: 'France',
    zipCode: '06000'
  }, {
    firstName: 'Jane',
    lastName: 'Doe',
    startDate: '01/01/2022',
    department: 'Loire',
    dateOfBirth: '01/01/1981',
    street: '1 rue Marue',
    city: 'Paris',
    state: 'France',
    zipCode: '75000'
  }, {
    firstName: 'John',
    lastName: 'Doe',
    startDate: '01/01/2022',
    department: 'Aude',
    dateOfBirth: '01/01/1980',
    street: '1 rue Larue',
    city: 'Nice',
    state: 'France',
    zipCode: '06000'
  }, {
    firstName: 'Jane',
    lastName: 'Doe',
    startDate: '01/01/2022',
    department: 'Loire',
    dateOfBirth: '01/01/1981',
    street: '1 rue Marue',
    city: 'Paris',
    state: 'France',
    zipCode: '75000'
  }, {
    firstName: 'John',
    lastName: 'Doe',
    startDate: '01/01/2022',
    department: 'Aude',
    dateOfBirth: '01/01/1980',
    street: '1 rue Larue',
    city: 'Nice',
    state: 'France',
    zipCode: '06000'
  }, {
    firstName: 'Jane',
    lastName: 'Doe',
    startDate: '01/01/2022',
    department: 'Loire',
    dateOfBirth: '01/01/1981',
    street: '1 rue Marue',
    city: 'Paris',
    state: 'France',
    zipCode: '75000'
  }]
};