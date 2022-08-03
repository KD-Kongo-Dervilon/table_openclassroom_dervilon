import  React ,{ useState } from 'react'
import PropTypes from 'prop-types';
import "./style.css";

/**
 *
 * @param {Object} props
 * @param {Array} props.data
 * @param {Array} props.labels
 * @param {Number} props.pagination
 * @returns {React.ReactElement}
 */

function Table({ data, labels, pagination }) {
    const [pageNumber, setPageNumber] = useState(1)

function page(
    /** @type {string | any[]} */ array,
    /** @type {number} */ pageSize,
    /** @type {number} */ pageNumber
) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
}

    return (
        <div id="table">
            <table>
                <thead>
                    <tr>
                        {labels.map((item, index) => (
                        <th key={index} scope="col" colSpan={1}>
                            {item}
                        </th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map(
            (
                /** @type {{ [s: string]: any; } | ArrayLike<any>} */ object,
                /** @type {import("react").Key} */ index
            ) => (
            <tr key={index} id={`row-${index}`}>
                {Object.entries(object).map((el, index) => (
                <td key={index} data-label={el[0]}>
                    {el[1]}
                </td>
            ))}
            </tr>
        )
    )}
        </tbody>
        </table>
            <div className={'pagination'}>
                <button onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}>
                    Previous
                </button>
                <button
                    onClick={() =>
                    page(data, pagination, pageNumber).length === pagination &&
                    setPageNumber(pageNumber + 1)
                }
                >
                    Next
                </button>
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
}