import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DummyQuotes=[
    {id:'q1',author:'max', text:'Learning react is fun'},
    {id:'q2',author:'maximillian', text:'Learning react is free'},
]
const AllQuotes=()=>
{
    return<h1><QuoteList quotes={DummyQuotes}/></h1>
};
export default AllQuotes;