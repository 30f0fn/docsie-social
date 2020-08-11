import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import striptags from 'striptags';

import Fetchers from '../../utilities/fetchers.js';

import {RecommendationsHeader, ProfileRenderer} from '../../components/recommendations-header.js';
import {ExtendingList, ProfileMini} from '../../components/extending-list.js';
import {RecommendationsSidebar, RecommendationsSidebarPanel, CommunityMini, TopicMini} from '../../components/recommendations-sidebar.js';

import {TruncateHtml} from '../../utilities/formatting.js';


class ProfilesListView extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.title = "Profiles";

        this.fetchData = Fetchers.fetchData.bind(this);        
        this.fetchMoreData = Fetchers.fetchMoreData.bind(this);
        
    }

    componentDidMount() {
        this.fetchData();
    }
    
    render() {
        const {top_authors,
               more,
              }
              = this.state;
        if (!top_authors) {
            return "loading...";
        }
        return (
            <div className="page">
              <Helmet>
                <meta charSet="utf-8" />
                <title>Docsie Social - {this.title}</title>
              </Helmet>
              <hr/>
              <div className="cf fl">
                <div className="fl w-90 pr2 justify-center">
                  <ExtendingList
                    headingStr="Top Authors"
                    contentsList={top_authors}
                    itemRenderer={ProfileMini}
                    extender={() =>
                              this.fetchMoreData('top_authors', 10)
                             }
                    more={more}
                  />
                </div>
              </div>
            </div>
        );
    }
}


export default ProfilesListView;
