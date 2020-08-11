import React from 'react';
import striptags from 'striptags';

import {TruncateHtml, HtmlToReact} from '../utilities/formatting.js';



export const RecommendationsSidebar = ({ children }) =>
    <div className="recommendations-sidebar">
      {children}
    </div>;

export const RecommendationsSidebarPanel =
    ({headingStr, recommendedList, itemRenderer}) =>
    !recommendedList.length ? "" : 
    <div className="fl ba ph3 ma1 w-100">
      <h1 className="f4 pv0 mb0">
        {headingStr}
      </h1>
      <ul className="list pl0 mt1">
        {recommendedList.map(itemRenderer)}
      </ul>
    </div>;

export const CommunityMini = (community) =>
      <li className="" key={community.slug}>
        <a href={"/communities/" + community.slug}
           className="link black dim">
        <b className="mb1">
          {community.name}
        </b>
          <br/>
          <TruncateHtml html={community.excerpt} lines="3"/>
        </a>
      </li>;

export const TopicMini = (topic) =>
      <li className="" key={topic.slug}>
        <a href={"/topics/" + topic.slug}
           className="link black dim">
        <b className="mb1">
          {topic.name}
        </b>
          <br/>
          <TruncateHtml html={striptags(topic.excerpt)} lines="3"/>
          {/* <HtmlToReact html={topic.excerpt} /> */}
          {/* {topic.excerpt} */}
        </a>
      </li>;



export default RecommendationsSidebar;
