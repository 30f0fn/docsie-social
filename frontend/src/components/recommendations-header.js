import React from 'react';

import {TruncateHtml, HtmlToReact} from '../utilities/formatting.js';

export const RecommendationsHeader = ({headingStr, recommendedList, itemRenderer}) => 
      <div className="flex">
        <nav className="flex">
          {recommendedList.map(itemRenderer)}
        </nav>
      </div>;

export const TopicRenderer = (topic) =>
      <a href={"/topics/" + topic.slug}
         className="link dim black mr3"
         key={topic.slug}
      >
        <HtmlToReact html={topic.name}/>
      </a>;

export const CommunityRenderer = (community) =>
      <a href={"/communities/" + community.slug}
         className="link dim black mr3" 
         key={community.slug}>
        <HtmlToReact html={community.name}/>
        </a>;

export const DocMiniRenderer = (doc) =>
      <a href={"/docs/" + doc.id}
         className="link dim black mr3"
         key={doc.id}
      >
          <HtmlToReact html={doc.title}/>
        </a>;

export const ProfileRenderer = (profile) =>
      <a href={"/profiles/" + profile.pk}
         className="link dim black mr3" 
         key={profile.pk}>
        {profile.username}
        {/* {profile.topics} */}
        </a>;



export default RecommendationsHeader;
