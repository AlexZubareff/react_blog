import { FETCH_STATUSES } from "../../../Utils/constats";
import { getArticlesFailure, getArticlesRequest, getArticlesSuccess } from "../articlesActions";
import { articlesReducer } from "../articlesReducer";

describe('articlesReducer', () =>{
    it('устанавливает error в null если вызван action  с REQUEST', () => {
        const result = articlesReducer(
            {
                data: [],
                status: FETCH_STATUSES.IDLE,
                error: 'error',
            },
            getArticlesRequest()
        );

        expect(result.error).toBeNull();
    });

    it('устанавливает STATUS в "success" если вызван action  с GET_ARTICLES_SUCCESS', () => {
        const result = articlesReducer(
            {
                data: [],
                status: FETCH_STATUSES.IDLE,
                error: 'error',
            },
            getArticlesSuccess()
        );

        const expected = "success";

        expect(result.status).toEqual(expected);
    });

    it('устанавливает STATUS в "failure" если вызван action  с GET_ARTICLES_FAILURE', () => {
        const result = articlesReducer(
            {
                data: [],
                status: FETCH_STATUSES.IDLE,
                error: 'error',
            },
            getArticlesFailure()
        );

        const expected = "failure";

        expect(result.status).toEqual(expected);
    });
});