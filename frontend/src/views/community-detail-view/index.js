import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import Fetchers from '../../utilities/fetchers.js';

import Search from '../../components/search.js';
import {RecommendationsHeader, CommunityRenderer} from '../../components/recommendations-header.js';
import {RecommendationsSidebar, RecommendationsSidebarPanel, TopicMini} from '../../components/recommendations-sidebar.js';

import {ExtendingList, DocMini} from '../../components/extending-list.js';

// import data from './data';

const CHUNK_SIZE = 10;

class CommunityDetailView extends Component {

    constructor(props) {
        super(props);
        
        this.state = {};
        
        this.fetchData = Fetchers.fetchData.bind(this);        
        this.fetchMoreData = Fetchers.fetchMoreData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const {detailed_community,
               connected_communities,
               trending_topics,
               community_topics,
               top_docs,
               more}
              = this.state;
        const p = JSON.stringify(this.state);
        if (!detailed_community) {
            return "loading...";
        };
        return (  
            <div className="page">
              <Helmet>
                <meta charSet="utf-8" />
                <title>Docsie Social - {detailed_community.name}</title>
              </Helmet>
              <hr/>
              <RecommendationsHeader
                headingStr="connected communities"
                recommendedList={connected_communities}
                itemRenderer={CommunityRenderer}
              />
              <hr/>
              <div className="cf fl">
                <div className="fl w-70 pr2">
                  <b className="f3 pl0 mb2">{detailed_community.name}</b>
                  <ExtendingList
                    headingStr={"top docs"}
                    contentsList={top_docs}
                    itemRenderer={DocMini}
                    extender={() =>
                              this.fetchMoreData('top_docs', CHUNK_SIZE)
                             }
                    more={more}
                  />
                </div>
                <div className="fl w-30">
                  <RecommendationsSidebar>
                    <RecommendationsSidebarPanel
                      headingStr={
                          `Trending topics in the ${detailed_community.name} community`}
                      recommendedList={trending_topics}
                      itemRenderer={TopicMini}
                    />
                    <RecommendationsSidebarPanel
                      headingStr="community topics"
                      recommendedList={community_topics}
                      itemRenderer={TopicMini}
                    />
                  </RecommendationsSidebar>
                </div>
              </div>
            </div>
        );
    }
}


export default CommunityDetailView;
