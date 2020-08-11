import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import Fetchers from '../../utilities/fetchers.js';

import {LongListBrowser, CommunityMini, FieldFilter} from '../../components/long-list-browser.js';
import {RecommendationsHeader, CommunityRenderer} from '../../components/recommendations-header.js';

import {RecommendationCardPanel, CommunityDisplayCard} from '../../components/recommendation-card-panel.js';

import {TruncateHtml, HtmlToReact} from '../../utilities/formatting.js';

// import data from './data';

class CommunitiesListView extends Component {

    constructor(props) {
        super(props);

        // this.fallback_data = data;

        const fieldFilters = {'all_communities': ''};
        this.state = {fieldFilters};
        this.title = 'communities';
        
        this.fetchData = Fetchers.fetchData.bind(this);        

        this.filteredField = FieldFilter.filteredField.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const {popular_communities,
               recommended_communities,
               all_communities}
              = this.state;
        if (!popular_communities) {
            return "loading...";
        }
        return (
            <div className="page">
              <Helmet>
                <meta charSet="utf-8" />
                <title>Docsie Social - {this.title}</title>
              </Helmet>
              <hr/>
              {/* <h1>Communities</h1> */}
              <RecommendationsHeader
                headingStr="Popular Communities"
                recommendedList={popular_communities}
                itemRenderer={CommunityRenderer}
              />
              <hr/>
              <RecommendationCardPanel
                headingStr="Recommended Communities"
                contentList={recommended_communities}
                itemRenderer={CommunityDisplayCard}
              />
              <hr/>
              <LongListBrowser
                headingStr="All communities"
                fieldData={this.filteredField('all_communities')}
                itemRenderer={CommunityMini}
              />
            </div>
        );
    }
}

export default CommunitiesListView;

