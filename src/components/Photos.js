import {useSelector, useDispatch} from 'react-redux';
import { fetch_photos } from '../redux/photos/photosActions';
import LoadingSpinner from './LoadingSpinner';

const Photos = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.photos.loading);
    const photos = useSelector(state => state.photos.photos);
    const error = useSelector(state => state.photos.error);

    return ( 
        <div className="container">
            <h1>Photos</h1>
            <button onClick={() => dispatch(fetch_photos())}>Fetch Photos</button>
            <div >
                {
                    loading && <LoadingSpinner />
                }
                {
                    photos && photos.length>0 &&
                    photos.map(photo => (
                        <div className="m-1 p-2" key={photo.id} style={{border: '1px solid grey'}}>
                            <p>{photo.title}</p>
                            <img src={photo.thumbnailUrl} alt="thumb"/>
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
 
export default Photos;