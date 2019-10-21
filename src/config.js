import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {
  FETCH_TEXT,
  FETCH_PAGE_INDEX,
} from './constants';

const client = new ApolloClient({
  uri: 'https://delarose-atlas.herokuapp.com/graphql/',
});


export default function createStore() {
  return {
    state: {
      passageText: [],
      pageIndex: {},
    },
    mutations: {
      [FETCH_TEXT]: (state, lines) => { state.passageText = lines; },
      [FETCH_PAGE_INDEX]: (state, pageIndex) => { state.pageIndex = pageIndex; },
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
      [FETCH_PAGE_INDEX]: ({ commit }, { versionUrn }) => {
        client.query({
          query: gql`
            {
              pages(version_Urn: "${versionUrn}") {
                edges {
                  node {
                    identifier
                    idx
                  }
                }
              }
            }
          `,
        })
          .then(data => commit(
            FETCH_PAGE_INDEX,
            data.data.pages.edges.map(e => e.node).reduce((pageMap, obj) => {
              const pageIdx = obj.idx;
              // eslint-disable-next-line no-param-reassign
              pageMap[pageIdx] = obj.identifier;
              return pageMap;
            }, {}),
          ));
      },
    },
  };
}
