import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../../Redux/Actions/action'

export const AddPost = () => {

    const selector = useSelector(state => state.rootReducer)
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState('')
    const [areaValue, setAreavalue] = useState('')
    const [userName, setUserName] = useState(null)
    const [id, setId] = useState(1)


    useEffect(() => {

    }, [])

    return <>
        <div className="post__create">
            <div className="post__form">
                <select></select>
                <input 
                type="text" 
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                />
                <textarea 
                value={areaValue}
                onChange={e => setAreavalue(e.target.value)}
                />
                <button 
                className="btn btn-outline-info"
                onClick={() => {
                    dispatch(
                        addPost(
                            {
                                user: inputValue,
                                comment: areaValue
                            }
                        )
                    )
                }}
                >Save</button>
                <button className="btn btn-outline-warning">Cancel</button>
            </div>
        </div>
    </>
}


