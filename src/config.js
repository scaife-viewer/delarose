import axios from 'axios';

import {
  FETCH_TEXT,
} from './constants';

const fetchText = `
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
    }`;

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
        axios.get('https://delarose-atlas.herokuapp.com/graphql/', { params: { query: fetchText } }).then((r) => {
          commit(FETCH_TEXT, r.data.data.lines.edges.map(e => e.node));
        });
      },
    },
  };
}
