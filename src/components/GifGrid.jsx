import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';
const GifGrid = ({category}) => {

  const {images, isLoading} =useFetchGifs(category);

  return (
    <>
      <h1>{category}</h1>
      {
        isLoading && <p>Loading..</p>
      }
      <div className='card-grid'>
      {
            images.map( (image )=> (
              <GifGridItem key={image.id}
                {...image}
              />

            ))
        }
        </div>
    </>
  )
}

export default GifGrid
