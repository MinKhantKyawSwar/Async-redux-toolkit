import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../store/reducer/todo';

const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) =>state.todo.data)
    const isLoading = useSelector((state) => state.todo.isLoading)

    const getTodoHandler = () => {
        dispatch(getTodos())
    }
  return (
    <>
        <button className='welcome-btn' onClick={getTodoHandler}>Get todo</button>
        <section>
            { !isLoading &&
                todos.map((todo,index) => (
                    <p key={index}>{todo.title}</p>
                ))
            }
            {
                isLoading && <p>
                    Getting todos from the server...
                </p>
            }
            {
                !isLoading &&
                todos.length <1 &&
                <p>Click Get todo to gain todo from the server...</p>
            }
        </section>
    </>
  )
}

export default Todo