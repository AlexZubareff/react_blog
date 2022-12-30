import { getArticles, getArticlesRequest, getArticlesSuccess, GET_ARTICLES_REQUEST } from "../articlesActions";
// import fetchMock from 'jest-fetch-mock';
// import { enableFetchMocks } from 'jest-mock-fetch';
// import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';

describe('getArticlesRequest', () => {
    it('возвращает объект с предопределенным типом', () => {
        const expected = {
            type: GET_ARTICLES_REQUEST,
        };
        const received = getArticlesRequest();

        expect(received).toEqual(expected);
    })
});

describe('getArticles', () => {
    it('dispatches getArticlesRequest', () => {
        const mockDispatch = jest.fn();
        // fetch.mockResponse((JSON.stringify([])));

        getArticles()(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith(getArticlesRequest());
    });

    it('dispatches getArticlesSuccess with fetch result', async () => {
        const data = [{name:"test"}];
        const mockDispatch = jest.fn();
        // enableFetchMocks();
        fetch.mockResponse((JSON.stringify(data)));
        

        await getArticles()(mockDispatch);
        expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesSuccess([data]));

    })
});


 