import React from 'react';
import Questionnaire from './questionnaire';
import Layout from '../../components/Layout';

/*async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{news{title,link,content}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.news) throw new Error('Failed to load the news feed.');
  return {
    chunks: ['home'],
    title: 'React Starter Kit',
    component: <Layout><Home news={data.news} /></Layout>,
  };
  
}*/
const title = 'Kettiko , Happiness is marrying - questionnaire';
const pageNameCss="questionnaire-page";
function action() {
  return {
    chunks: ['questionnaire'],
    title,
    component: <Layout><Questionnaire title={title} pageNameCss={pageNameCss} /></Layout>,
    pageNameCss:pageNameCss
  };
}

export default action;