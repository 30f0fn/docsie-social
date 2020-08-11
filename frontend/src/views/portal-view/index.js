import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import striptags from 'striptags';

import Fetchers from '../../utilities/fetchers.js';

import Search from '../../components/search.js';
import {RecommendationsHeader, TopicRenderer} from '../../components/recommendations-header.js';
import {RecommendationsSidebar, RecommendationsSidebarPanel, CommunityMini} from '../../components/recommendations-sidebar.js';
import {ExtendingList, TopicWithDocsItem} from '../../components/extending-list.js';




import {TruncateHtml, HtmlToReact} from '../../utilities/formatting.js';


const CHUNK_SIZE = 3;

class PortalView extends Component {

    constructor(props) {
        super(props);

        this.state={};
        this.title = "Portal";
        
        this.fetchData = Fetchers.fetchData.bind(this);        
        this.fetchMoreData = Fetchers.fetchMoreData.bind(this);
        this.headData = headData.bind(this);
    }


    componentDidMount() {
        
        this.fetchData();
    }


    render() {
        const {recommended_docs,
               popular_topics,
               recommended_topics,
               trending_communities,
               active_communities}
              = this.state;
        if (!recommended_docs) {
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
                headingStr="Popular Topics"
                recommendedList={popular_topics}
                itemRenderer={TopicRenderer}
              />
              <hr/>
              <div className="cf fl">
                <div className="fl w-70 pr2 justify-center">
                  <DocRecommendations
                    docs={recommended_docs}
                  />
                  <ExtendingList
                    headingStr="Recommended Topics"
                    contentsList={recommended_topics}
                    itemRenderer={TopicWithDocsItem}
                    extender={() =>
                              this.fetchMoreData('recommended_topics', CHUNK_SIZE)}
                    more={true}
                  />
                </div>
                <div className="fl w-30">
                  <div className="sidebar">
                    <RecommendationsSidebar>
                      <RecommendationsSidebarPanel
                        headingStr="Trending Communities"
                        recommendedList={trending_communities}
                        itemRenderer={CommunityMini}
                      />
                      <RecommendationsSidebarPanel
                        headingStr="Active Communities"
                        recommendedList={active_communities}
                        itemRenderer={CommunityMini}
                      />
                    </RecommendationsSidebar>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}


const DocRecommendations = ({docs}) =>
      <div className="cf mt1" >
        <div className="fl w-100 w-100-ns ba pa2">
          <DocRec doc={docs.most_discussed}/>
        </div>
        <div className="fl w-100 w-100-ns ba mt2 pa2">
          <DocRec doc={docs.most_active}/>
        </div>
        <div className="fl w-50 mt2">
          <div className="fl mr1 ba pa2">
            <DocRec doc={docs.weekly_top_commented}/>
          </div>
        </div>
        <div className="fl w-50 mt2">
          <div className="fl ba ml1 pa2">
            <DocRec doc={docs.daily_top_commented}/>
          </div>
        </div>
      </div>;



const DocRec = ({doc}) =>
      <div className="">
        <a href={"docs/" + doc.id} className="link black dim">
          <b>
            <HtmlToReact html={doc.title}/>
          </b>
          <br/>
          <TruncateHtml html={striptags(doc.excerpt)} lines="3"/>
        </a>
      </div>;

const headData = () =>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Docsie Social - {this.title}</title>
      </Helmet>;


export default PortalView;
