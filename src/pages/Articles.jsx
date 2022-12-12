import Button from '@mui/material/Button';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../store/articles/articlesActions';
import { selectArticles, selectArticlesError, selectArticlesStatus } from '../store/articles/articlesSelectors';
import { FETCH_STATUSES } from '../Utils/constats';


export const Articles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectArticles);
    const error = useSelector(selectArticlesError);
    const status = useSelector(selectArticlesStatus);

    const sendRequest = async () => {
        dispatch(getArticles())
    }

    useEffect(()=> {
        sendRequest();
    }, []);


   return <>
        <h3>Articles</h3>
        <Button type="submit" onClick={sendRequest} variant="contained" size="small">GET</Button>
        {status === FETCH_STATUSES.REQUEST && <h4>Data is loading ...</h4>}
        {error && <h4>{error}</h4>}
        <ul>
            {articles.map((item) => (
                <li key={item.id}>{item.id}: {item.title}</li>
            ))}
        </ul>

   </>
};