import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import Fetchers from '../../utilities/fetchers.js';

import {RecommendationsHeader, ProfileRenderer} from '../../components/recommendations-header.js';
import {ExtendingList, DocMini} from '../../components/extending-list.js';
import {RecommendationsSidebar, RecommendationsSidebarPanel, CommunityMini, TopicMini} from '../../components/recommendations-sidebar.js';

import {HtmlToReact} from '../../utilities/formatting.js';


class ProfileView extends Component {

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
        const {profile,
               similar_profiles,
               joined_communities,
               related_topics,
               top_docs,
               more,
              }
              = this.state;
        if (!profile) {
            return "loading...";
        }
        return (
            <div className="page">
              <Helmet>
                <meta charSet="utf-8" />
                <title>Docsie Social - {profile.username}'s Profile</title>
              </Helmet>
              <hr/>
              <RecommendationsHeader
                headingStr="Similar profiles"
                recommendedList={similar_profiles}
                itemRenderer={ProfileRenderer}
              />
              <hr/>
              <div className="cf fl">
                <div className="fl w-70 justify-center">
                  <ProfileDetail
                    username={profile.username}
                    reputation={profile.reputation}
                    blurb={profile.about_me}
                  />

                  <ExtendingList
                    headingStr="Top Posts"
                    contentsList={top_docs}
                    itemRenderer={DocMini}
                    extender={() =>
                              this.fetchMoreData('top_docs')
                             }
                    more={more}
                  />
                </div>
                <div className="fl w-30">
                  <div className="sidebar">
                    <RecommendationsSidebar>
                      <RecommendationsSidebarPanel
                        headingStr="Joined Communities"
                        recommendedList={joined_communities}
                        itemRenderer={CommunityMini}
                      />
                      <RecommendationsSidebarPanel
                        headingStr="Related Topics"
                        recommendedList={related_topics} 
                        itemRenderer={TopicMini}
                      />
                    </RecommendationsSidebar>
                  </div>
                </div>
              </div>
              
            </div>
        );
    }
}


const ProfileDetail = ({username, reputation, blurb}) =>
      <div className="">
        <h1>{username}</h1>
        
        {blurb ? <HtmlToReact html={blurb}/> : "" }
      </div>;

export default ProfileView;
