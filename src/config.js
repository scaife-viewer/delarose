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
      [FETCH_TEXT]: ({ commit }, { versionUrn, pageIdentifier }) => {
        client.query({
          query: gql`
            {
              pages (version_Urn: "${versionUrn}", identifier: "${pageIdentifier}") {
                edges {
                  node {
                    identifier
                    idx
                    imageAnnotations {
                      edges {
                        node {
                          imageUrl
                        }
                      }
                    }
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
          `,
        })
          .then(data => commit(
            FETCH_TEXT,
            data.data.pages.edges.map(e => e.node),
          ));
      },
    },
  };
}
