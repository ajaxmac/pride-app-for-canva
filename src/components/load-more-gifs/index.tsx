
import { Button, LoadingIndicator } from '@canva/app-ui-kit';
import { useContext } from 'react';
import { PrideContext, PrideDispatchContext } from '../../context/prideContext';
import { SEARCH_GIFS_LOADING, SEARCH_GIFS_RESULT } from '../../context/actions';
import { fetchGifs } from 'src/lib';
import styles from './loadMoreGifs.css';

const LoadMoreGifs = () => {
  const { isSearchingGifs, gifs, nextGif } = useContext(PrideContext);
  const { dispatch } = useContext(PrideDispatchContext);

  const loadMoreGifs = () => {
    dispatch({ type: SEARCH_GIFS_LOADING, payload: true });
    fetchGifs(nextGif).then((result) => {
      dispatch({ type: SEARCH_GIFS_RESULT, payload: {...result, loadMore: true} });
    });
  };

  return !gifs.length ? null : (
    <div className={styles.loadMoreGifs}>
      {isSearchingGifs ? (
        <LoadingIndicator />
      ) : (
        <Button variant="primary" onClick={loadMoreGifs}>
          Load More Gifs
        </Button>
      )}
    </div>
  );
};

export default LoadMoreGifs;

