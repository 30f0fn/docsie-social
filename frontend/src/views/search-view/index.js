import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import Fetchers from '../../utilities/fetchers.js';

import {RecommendationsHeader, CommunityRenderer} from '../../components/recommendations-header.js';
import {ExtendingList, DocMini} from '../../components/extending-list.js';

const MAINLIST_LENGTH = 10;


class SearchView extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.title = "Search";

        this.fetchData = Fetchers.fetchData.bind(this);        
        this.fetchMoreData = Fetchers.fetchMoreData.bind(this);
        
    }

    componentDidMount() {
        this.fetchData();
    }
    
    render() {
        const {searched_term,
               recommended_communities,
               matched_docs,
               active_refinements,
               more}
              = this.state;
        if (!recommended_communities) {
            return "loading...";
        }
        return (
            <div className="page">
              <Helmet>
                <meta charSet="utf-8" />
                <title>Docsie Social - {this.title}</title>
              </Helmet>
              <hr/>
              <RecommendationsHeader
                headingStr="Recommended communities"
                recommendedList={recommended_communities}
                itemRenderer={CommunityRenderer}
              />
              <hr/>
              {
                  (!matched_docs.length)
                      ?
                      <h2>{`found no docs to match '${searched_term}'`}</h2>
                  :
                  <ExtendingList
                    headingStr={`Documents matching '${searched_term}'`}
                    contentsList={matched_docs}
                    itemRenderer={DocMini}
                    extender={() =>
                              this.fetchMoreData('matched_docs', MAINLIST_LENGTH)
                             }
                    more={more}
                  />
              }
            </div>
        );
    }
}



export default SearchView;
