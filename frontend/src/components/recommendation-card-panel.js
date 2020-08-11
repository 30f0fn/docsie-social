import React from 'react';

import {TruncateHtml, HtmlToReact} from '../utilities/formatting';

export const RecommendationCardPanel = ({headingStr, contentList, itemRenderer}) =>
      <div className="cf">
        {contentList.map(itemRenderer)}
      </div>;

export const TopicDisplayCard = (topic) =>
    <div className="fl ba ma2 ph2 pv1 w-30"
         key={topic.slug}
    >
        <a href={"topics/" + topic.slug}
           className="link black dim"
        >
          <b className="f4 black pv1 mt0 mb0">
            {topic.name}
          </b>
          <br/>
          <TruncateHtml
            html={topic.excerpt}
            lines="3"
          />
        </a>
      </div>;

export const CommunityDisplayCard = (community) =>
    <div className="fl ba ma2 ph2 pv1 w-30"
         key={community.slug}
    >
        <a href={"communities/" + community.slug}
           className="link black dim"
        >
          <b className="f4 black pv1 mt0 mb0">
            {community.name}
          </b>
          <br/>
          <TruncateHtml html={community.excerpt} number="3"/>
        </a>
      </div>;



export default RecommendationCardPanel;
