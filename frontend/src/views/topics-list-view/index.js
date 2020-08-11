import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

import Fetchers from '../../utilities/fetchers.js';

// import FieldFilter from '../../components/field-filter.js';
// import FieldPaginator from '../../components/field-paginator.js';
import {PaginatedLongListBrowser, FieldFilter, FieldPaginator, TopicMini} from '../../components/long-list-browser.js';
import {RecommendationsHeader, TopicRenderer} from '../../components/recommendations-header.js';

import {RecommendationCardPanel, TopicDisplayCard} from '../../components/recommendation-card-panel.js';

import {TruncateHtml, HtmlToReact} from '../../utilities/formatting.js';

// import data from './data';

class TopicsListView extends Component {

    constructor(props) {
        super(props);

        // this.fallback_data = data;

        const fieldFilters = {'all_topics': ''};
        const fieldPageNums = {'all_topics': 0};

        this.state = {fieldFilters, fieldPageNums};
        this.title = "Topics";
        
        this.fetchData = Fetchers.fetchData.bind(this);        

        this.filteredField = FieldFilter.filteredField.bind(this);
        this.paginatedField = FieldPaginator.paginatedField.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const {popular_topics,
               recommended_topics,
               all_topics}
              = this.state;
        if (!popular_topics) {
            return "loading...";
        }
        const fieldData=this.filteredField('all_topics');
        const fieldPaginator=this.paginatedField('all_topics', fieldData.contents);
        return (
            <div className="page">
              <Helmet>
                <meta charSet="utf-8" />
                <title>Docsie Social - {this.title}</title>
              </Helmet>
              <hr/>
              {/* <h1>Topics</h1> */}
              <RecommendationsHeader
                headingStr="Popular Topics"
                recommendedList={popular_topics}
                itemRenderer={TopicRenderer}
              />
              <hr/>
              <RecommendationCardPanel
                headingStr="Recommended Topics"
                contentList={recommended_topics}
                itemRenderer={TopicDisplayCard}
              />
              <hr/>
                <PaginatedLongListBrowser
                  headingStr="All topics"
                  fieldData={fieldData}
                  paginator={fieldPaginator}
                  itemRenderer={TopicMini}
                  /* pageNum={this.fieldPageNums('all_topics')} */
                />
            </div>
        );
    }
}






export default TopicsListView;
