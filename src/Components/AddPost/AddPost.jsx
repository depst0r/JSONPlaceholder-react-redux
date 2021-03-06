import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../../Redux/Actions/action'

export const AddPost = () => {

    const dispatch = useDispatch()
    const selector = useSelector(state => state.rootReducer)

    const [inputValue, setInputValue] = useState('')
    const [areaValue, setAreaValue] = useState('')

    
    return <>
        <div className="post__create">
            <div className="post__form">
                <select>
                    {selector.users?.map(res => (
                        <option>
                            {res.name}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <textarea
                    value={areaValue}
                    onChange={e => setAreaValue(e.target.value)}
                />
                <button
                    className="btn btn-outline-info"
                    onClick={() => {
                        dispatch(
                            addPost(
                                {
                                    title: inputValue,
                                    body: areaValue,
                                    userId: 1,
                                    id: 1
                                }
                            )
                        )
                    }}
                >Save
                </button>
                <button className="btn btn-outline-warning">Cancel</button>
            </div>
        </div>
    </>
}


