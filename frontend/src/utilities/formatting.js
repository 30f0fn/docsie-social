import React from 'react';
import TruncateMarkup from 'react-truncate-markup';

var HtmlToReactParser = require('html-to-react').Parser;
const htmlParser = new HtmlToReactParser();


const MISSING_TEXT_NOTICE = "text missing!";


export const HtmlToReact = ({html}) =>
    htmlParser.parse(html || MISSING_TEXT_NOTICE);

export const TruncateHtml = ({html, lines}) => 
    <div>
      <TruncateMarkup lines={lines}>
        <div>
        {html}
        </div>
      </TruncateMarkup>
    </div>;

export default HtmlToReact;
