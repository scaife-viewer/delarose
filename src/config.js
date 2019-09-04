import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {
  FETCH_TEXT,
} from './constants';

const client = new ApolloClient({
  uri: 'https://delarose-atlas.herokuapp.com/graphql/',
});


export default function createStore() {
  return {
    state: {
      passageText: [],
    },
    mutations: {
      [FETCH_TEXT]: (state, lines) => { state.passageText = lines; },
    },
    actions: {
      [FETCH_TEXT]: ({ commit }) => {
        client.query({
          query: gql`
          {
            lines {
              edges {
                node {
                  idx
                  milestoneNumber
                  textContent
                }
              }
            }
          }
          `,
        })
          .then(data => commit(FETCH_TEXT, data.data.lines.edges.map(e => e.node)));
      },
    },
  };
}
