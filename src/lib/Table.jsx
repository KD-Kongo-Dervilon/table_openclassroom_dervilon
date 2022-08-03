import  React , { useState} from 'react';
import Rows from './Rows';
import PropTypes from 'prop-types';
import "./style.css";

/**
 *
 * @param {Object} props
 *  @param {Array} props.data // Array of objects
 * @param {Array} props.labels // Array of strings
 * @param {Number} props.pagination
 * @returns {React.ReactElement}
 */

function Table({ data, labels, pagination }) {
    const [pageNumber, setPageNumber] = useState(1)
    const [selectAmounOfEntriesPerPage, setSelectAmounOfEntriesPerPage] =
    useState(pagination)
    const [amounOfEntriesPerPage, setAmounOfEntriesPerPage] = useState(0)
    const [tableData, setTableData] = useState(data)
    const [sortBy, setSortBy] = useState(0)


function setPagination(
    /** @type {any[]} */ array,
    /** @type {number} */ pageSize,
    /** @type {number} */ pageNumber
) {
    const newArray = array
        .slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
        .sort(function (a, b) {
            return Object.values(a)[sortBy].localeCompare(Object.values(b)[sortBy])
        })
    return newArray
}

function handleChangeSelect(event) {
    const value = event.target.value
    setSelectAmounOfEntriesPerPage(Number(value))
        setAmounOfEntriesPerPage(
            setPagination(data, selectAmounOfEntriesPerPage, pageNumber).length
        )
        setPageNumber(1)
    }

function handleChangeSearch(event) {
    const value = event.target.value
    const result = data.filter((obj) => {
        const isRequest = Object.values(obj).filter((item) =>
        String(item.toLowerCase()).includes(String(value.toLowerCase()))
        )
        return isRequest.length > 0
    })
    value.length === 0 ? setTableData(data) : setTableData(result)
}

return (
    <div id="table">
        <div className="table-top">
            <div className="selectAmountEntries">
                <span>Show </span>
                <select onChange={handleChangeSelect}>
                    <option defaultValue={10}>10</option>
                    <option value={50}>50</option>
                    <option value={data.length}>All</option>
                </select>
                <span> entries</span>
            </div>
            <div className="inputSearchWrapper">
                <label htmlFor="searchEntry">
                    <span>Search </span>
                    <input
                        type="search"
                        name="searchEntry"
                        id="searchEntry"
                        onChange={handleChangeSearch}
                    />
                </label>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    {labels.map((item, index) => (
                    <th key={index} scope="col" colSpan={1}>
                        {item}
                        <span className="arrow" onClick={() => setSortBy(index)}></span>
                    </th>
                ))}
                </tr>
            </thead>
            <tbody>
            <Rows
                data={setPagination(
                    tableData,
                    selectAmounOfEntriesPerPage,
                    pageNumber
                )}
                />
            </tbody>
        </table>
        <div className="table-bottom">
            <div className="paginationDisplay">
                <span>
                    Showing {amounOfEntriesPerPage} of {data.length} entries
                </span>
            </div>
            <div className={'pagination'}>
                <button
                    onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}
                >
                    Previous
                </button>
                <span>{pageNumber}</span>
                <button
                    onClick={() => {
                        setPagination(data, selectAmounOfEntriesPerPage, pageNumber)
                        .length === selectAmounOfEntriesPerPage &&
                        setPageNumber(pageNumber + 1)
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    </div>
    )
}

export default Table

Table.propType = {
    data: PropTypes.array.isRequired,
    labels: PropTypes.array.isRequired,
    pagination: PropTypes.number.isRequired,
}

Table.defaultProps = {
    pagination: 10,
    labels: [
        'First Name',
        'Last Name',
        'Start Date',
        'Department',
        'Date of Birth',
        'Street',
        'City',
        'State',
        'Zip Code',
    ],
    data: [
        {
            firstName: 'John',
            lastName: 'Doe',
            startDate: '01/01/2022',
            department: 'Aude',
            dateOfBirth: '01/01/1980',
            street: '1 rue Larue',
            city: 'Nice',
            state: 'France',
            zipCode: '06000',
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            startDate: '01/01/2022',
            department: 'Loire',
            dateOfBirth: '01/01/1981',
            street: '1 rue Marue',
            city: 'Paris',
            state: 'France',
            zipCode: '75000',
        },
        {
            firstName: 'John',
            lastName: 'Doe',
            startDate: '01/01/2022',
            department: 'Aude',
            dateOfBirth: '01/01/1980',
            street: '1 rue Larue',
            city: 'Nice',
            state: 'France',
            zipCode: '06000',
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            startDate: '01/01/2022',
            department: 'Loire',
            dateOfBirth: '01/01/1981',
            street: '1 rue Marue',
            city: 'Paris',
            state: 'France',
            zipCode: '75000',
        },
        {
            firstName: 'John',
            lastName: 'Doe',
            startDate: '01/01/2022',
            department: 'Aude',
            dateOfBirth: '01/01/1980',
            street: '1 rue Larue',
            city: 'Nice',
            state: 'France',
            zipCode: '06000',
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            startDate: '01/01/2022',
            department: 'Loire',
            dateOfBirth: '01/01/1981',
            street: '1 rue Marue',
            city: 'Paris',
            state: 'France',
            zipCode: '75000',
        },
        {
            firstName: 'John',
            lastName: 'Doe',
            startDate: '01/01/2022',
            department: 'Aude',
            dateOfBirth: '01/01/1980',
            street: '1 rue Larue',
            city: 'Nice',
            state: 'France',
            zipCode: '06000',
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            startDate: '01/01/2022',
            department: 'Loire',
            dateOfBirth: '01/01/1981',
            street: '1 rue Marue',
            city: 'Paris',
            state: 'France',
            zipCode: '75000',
        },
    ]
} 