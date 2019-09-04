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
              versions (first: 1) {
                edges {
                  node {
                    pages (first: 1) {
                      edges {
                        node {
                          identifier
                          idx
                          columns {
                            edges {
                              node {
                                id
                                idx
                                identifier
                                lineGroups {
                                  edges {
                                    node {
                                      position
                                      kind
                                      lines {
                                        edges {
                                          node {
                                            position
                                            htmlContent
                                            milestoneNumber
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
        })
          .then(data => commit(FETCH_TEXT, data.data.versions.edges[0].node.pages.edges.map(e => e.node)));
      },
    },
  };
}
