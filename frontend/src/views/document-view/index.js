import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import striptags from 'striptags';

import Fetchers from '../../utilities/fetchers.js';

import Search from '../../components/search.js';
import {RecommendationsHeader, DocMiniRenderer} from '../../components/recommendations-header.js';
import {RecommendationsSidebar, RecommendationsSidebarPanel, TopicMini} from '../../components/recommendations-sidebar.js';

// import {RenderTruncatedHtml, HtmlToReact} from '../../utilities/formatting.js';
import {TruncateHtml, HtmlToReact} from '../../utilities/formatting.js';

const MAINLIST_LENGTH = 3;

class DocumentView extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.fetchData = Fetchers.fetchData.bind(this);        

    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const {document,
               author,
               similar_documents,
               topics,
               // related_communities
              }
              = this.state;
        if (!document){
            return "loading...";
        };
        return (  
            <div className="page">
              <Helmet>
                <meta charSet="utf-8" />
                <title>Docsie Social - {document.title}</title>
              </Helmet>
              <hr/>
              <RecommendationsHeader
                headingStr="similar docs"
                recommendedList={similar_documents}
                itemRenderer={DocMiniRenderer}
              />
              <hr/>
              <div className="cf fl">
                <div className="fl w-70 pr2">
                <DocDisplay
                  doc={document}
                  author={author}
                />
                </div>
                <div className="fl w-30">
                  <RecommendationsSidebar>
                    <RecommendationsSidebarPanel
                      headingStr={"Tagged topics "}
                      recommendedList={topics}
                      itemRenderer={TopicMini}
                    />
                  </RecommendationsSidebar>
                </div>
              </div>
            </div>
        );
    }
}

const DocDisplay = ({doc, author}) =>
      <div className="">
        <b className="f3 pl0 mb2">
          <HtmlToReact html={striptags(doc.title)}/>
        </b>
        <div>
          <HtmlToReact html = {doc.content} />
        </div>
        <div className="tr f4 mb5">
          <a href={"/profiles/"+author.pk}>{doc.author}</a>
        </div>
      </div>;

export default DocumentView;
