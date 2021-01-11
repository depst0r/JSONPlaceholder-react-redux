import React, {useState ,useEffect } from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [] 
    
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

console.log(pageNumbers)
console.log(paginate(1))

    return<>
        <ul className="pagination">
            {pageNumbers?.map(num => (
                <li key={num} className="page-item">
                    <a 
                    href='!#'
                    className='page-link'
                    onClick={() => paginate(num)}
                    >
                        {num}
                    </a>
                </li>
            ))}
        </ul>
    </>
}