import { Fragment } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

//sorting function
const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1;
        } else {
            return quoteA.id < quoteB.id ? 1 : -1;
        }
    });
}


const QuoteList = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const AscendingOrder = queryParams.get('sort') === 'asc';

    const soartedQuotes = sortQuotes(props.quotes, AscendingOrder);

    console.log(location);

    const sortingHandler = () => {
        navigate({
            pathname: location.pathname,
            search: `?sort=${(AscendingOrder ? 'dsc' : 'asc')}`
        });
    }
        return (
            <Fragment>
                <div className={classes.sorting}>
                    <button onClick={sortingHandler}>
                        Sort {AscendingOrder ? 'Descending' : 'Ascending'}
                    </button>
                </div>
                <ul className={classes.list}>
                    {soartedQuotes.map((quote) => (
                        <QuoteItem
                            key={quote.id}
                            id={quote.id}
                            author={quote.author}
                            text={quote.text}
                        />
                    ))}
                </ul>
            </Fragment>
        )
    };

 export default QuoteList;