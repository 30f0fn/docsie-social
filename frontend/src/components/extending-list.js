import React from 'react';

import {HtmlToReact, TruncateHtml} from '../utilities/formatting.js';
import striptags from 'striptags';

export const ExtendingList = ({headingStr, contentsList, itemRenderer, extender, more}) => 
    <div className="extending-list">
      <h2>{headingStr}</h2>
      {JSON.stringify(itemRenderer)}
      <ol className="list pl0 mt2">
        {contentsList.map(itemRenderer)}
      </ol>
      {more ?
       <ListExtendButton
         onClick={extender}
         contentsList={contentsList}/>
       : ""
      }
    </div>;

const ListExtendButton = ({onClick}) =>
      <a onClick={onClick} className="f6 link dim ba ph3 pv2 mb2 dib black">
        more...
      </a>;



export const TopicWithDocsItem = ({topic, docs}) =>
    <li className="pt2">
      <div className="topic-with-docs-item">
        <div className="pt0">
          <a href={"topics/"+topic.slug}
             className="f3 mb1 link black dim">
            {topic.name}
          </a>
          <hr/>
          <ul className="list pl0">
            {docs.map(
                (doc) => 
                    <li className="mt1">
                      <a href={"../docs/"+doc.id}
                         className="link black dim">
                        <b className="mt1">
                          <HtmlToReact html={striptags(doc.title)}/>
                        </b>
                        <br/>
                        <TruncateHtml html={striptags(doc.excerpt)}
                                      lines="1"/>
                      </a>
                    </li>
            )}
          </ul>
        </div>
      </div>
    </li>;



export const DocMini = (doc) =>
    <li className="mb2" key={doc.id}>
      <a href={"../docs/" + doc.id}
         className="link black dim">
        <b>{doc.title} ({doc.score})</b>
        <br/>
        <TruncateHtml html={striptags(doc.excerpt)} lines="3"/>
      </a>
    </li>;

export const ProfileMini = (profile) =>
    <li className="mb2" key={profile.pk}>
      <a href={"../profiles/" + profile.pk}
         className="link black dim">
        <b>{profile.username} ({profile.reputation})</b>
        <br/>
        <TruncateHtml html={striptags(profile.qualification)} lines="3"/>
      </a>
    </li>;




export default ExtendingList;

