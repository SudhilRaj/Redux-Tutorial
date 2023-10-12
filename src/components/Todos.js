import {useSelector, useDispatch} from 'react-redux';
import { fetch_todos } from '../redux/todos/todosActions'
import LoadingSpinner from './LoadingSpinner';

const Todos = () => {
    const dispatch = useDispatch();
    const todosInfo = useSelector(state => state.todos);
    const {loading, todos, error} = todosInfo;
    
    return ( 
        <div className="container">
            <h1>Todos</h1>
            <button onClick={() => dispatch(fetch_todos())}>Fetch Todos</button>
            <div >
                {
                    loading && <LoadingSpinner />
                }
                {
                    todos.length &&
                    todos.map(todo => (
                        <div className="m-1 p-2" key={todo.id} style={{border: '1px solid grey'}}>
                            <p>{todo.title}</p>
                        </div>
                    ))
                }
                {
                    error && <h6 style={{color: 'red'}}> {error}! </h6>
                }
            </div>
        </div>
     );
}
 
export default Todos;
