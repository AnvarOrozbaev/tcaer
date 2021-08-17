import "./Gists.css"
import {useCallback,  useEffect} from 'react';
import { CircularProgress } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {selectGists, selectGistsError, selectGistsLoading} from '../../store/gists/selectors'
import {getAllGists} from '../../store/gists/actions';

export const GistsList = () => {
 
  const dispatch = useDispatch();
  const gists = useSelector(selectGists);
  const error = useSelector(selectGistsError);
  const loading = useSelector(selectGistsLoading);

  const requestGists = () => {
    dispatch(getAllGists());
  };

  useEffect(() => {
    requestGists();
  }, []);

  const renderGist = useCallback(
    (gist) => <li className="gists__list-item"key={gist.id}>{gist.description}</li>,
    []
  );

  if (loading) {
    return <div className="gists__inner"><CircularProgress /></div>;
  }

  if (error) {
    return (
      <div className="gists__inner">
        <h3>Error</h3>
        <button onClick={requestGists}>Retry</button>
      </div>
    );
  }
  if (!gists.length){
    return <div className="gists__inner"><h3 className="gists__nogists-text">no gists</h3></div>
  }


  return ( <div className="gists__inner"><ul className="gists__list" >{gists.map(renderGist)}</ul></div>);
};



















 