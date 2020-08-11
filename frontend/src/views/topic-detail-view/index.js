import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

import Fetchers from '../../utilities/fetchers.js';

import Search from '../../components/search.js';
import {RecommendationsHeader, TopicRenderer} from '../../components/recommendations-header.js';
import {RecommendationsSidebar, RecommendationsSidebarPanel, CommunityMini} from '../../components/recommendations-sidebar.js';
import {ExtendingList, DocMini} from '../../components/extending-list.js';

import {HtmlToReact} from '../../utilities/formatting.js';

import data from './data';

const CHUNK_SIZE = 10;

class TopicDetailView extends Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.fetchData = Fetchers.fetchData.bind(this);        
        this.fetchMoreData = Fetchers.fetchMoreData.bind(this);
    }

    componentDidMount() {
        this.fetchData({num_docs: CHUNK_SIZE});
    }

    render() {
        const {detailed_topic,
               connected_topics,
               trending_communities,
               active_communities,
               top_docs,
               more}
              = this.state;
        if (!detailed_topic) {
            return "loading...";
        };
        return (  
            <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Docsie Social - {this.state.detailed_topic.name}</title>
              </Helmet>
              <hr/>
              <RecommendationsHeader
                headingStr="connected topics"
                recommendedList={connected_topics}
                itemRenderer={TopicRenderer}
              />
              <hr/>
              <div className="cf">
                <div className="fl w-70">
                  <b className="f3 mb2">
                    {detailed_topic.name}
                  </b>
                  {/* <hr/> */}
                  <ExtendingList
                    /* headingStr={detailed_topic.name + ": top docs"} */
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
                      headingStr="trending communities"
                      recommendedList={trending_communities}
                      itemRenderer={CommunityMini}
                    />
                    <RecommendationsSidebarPanel
                      headingStr="active communities"
                      recommendedList={active_communities}
                      itemRenderer={CommunityMini}
                    />
                  </RecommendationsSidebar>
                </div>
              </div>
            </div>
        );
    }
}


export default TopicDetailView;
