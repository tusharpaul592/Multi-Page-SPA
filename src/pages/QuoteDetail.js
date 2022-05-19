import { Route, useParams,Link } from 'react-router-dom';
import { Fragment } from 'react';
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DummyQuotes = [
    { id: 'q1', author: 'max', text: 'Learning react is fun' },
    { id: 'q2', author: 'maximillian', text: 'Learning react is free' },
]

const QuoteDetail = () => {
    const params = useParams();
    const quote = DummyQuotes.find(quote => quote.id === params.quoteId);
    if (!quote) {
        return (
            <p>No Quote Found</p>
        );
    }
    return (
        <Fragment>
            <h1> Quotes Deatils Page</h1>
            <p> <HighlightedQuote text={quote.text} author={quote.author} /></p>
            <Route path={`/quotes/${params.quoteId}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>
                        Comments
                    </Link>
                </div>
            </Route>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>

    );
};
export default QuoteDetail;