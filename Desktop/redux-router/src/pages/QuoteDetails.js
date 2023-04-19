import { Fragment, useEffect ,React} from 'react';
import { useParams, useMatch } from 'react-router-dom';
import HighlightedQuotes from '../components/quotes/HighlightedQuotes';
import Comments from '../components/comments/Comments';

import useHttp from '../hooks/use-http';
import { getSingleQuotes } from '../lib/api';
import '../index.css';
import LoadingSpinner from '../components/ui/LoadingSpinner';




const QuoteDetails = () => {

    const match = useMatch('/quotes/:quoteId');
    const params = useParams();

    //getting our id from our params
    const { quoteId } = params;
    //http request
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuotes, true);
    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);


    console.log(match);

    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <p className='centered'>{error}</p>
        );
    }

    if (!loadedQuote.text) {
        return (
            <p>No quote found!</p>
        );
    }

    return (
        <Fragment>
            <HighlightedQuotes text={loadedQuote.text} author={loadedQuote.author} />
            <Comments />
        </Fragment >
    );
};

export default QuoteDetails;