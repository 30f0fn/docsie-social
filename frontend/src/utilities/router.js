import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

import CommunitiesListView from '../views/communities-list-view';
import PortalView from '../views/portal-view';
import TopicsListView from '../views/topics-list-view';
import TopicDetailView from '../views/topic-detail-view';
import CommunityDetailView from '../views/community-detail-view';
import DocumentView from '../views/document-view';
import SearchView from '../views/search-view';
import ProfileView from '../views/profile-view';
import ProfilesListView from '../views/profiles-list-view';


const Router = ({className}) =>
      <BrowserRouter>

        <Switch>
          <Route path="/topics/:topicSlug"
                 render={(props)=>
                         <TopicDetailView
                           {...props}
                         />}
          />
          <Route path="/communities/:communitySlug"
                 render={(props)=>
                         <CommunityDetailView
                           {...props}
                         />}
          />
          <Route path="/topics"
                 render={(props)=>
                         <TopicsListView
                           {...props}
                         />}
          />
          <Route path="/communities"
                 render={(props)=>
                         <CommunitiesListView
                           {...props}
                         />}
          />
          <Route path="/topics"
                 render={(props)=>
                         <TopicsListView
                           {...props}
                         />}
          />

          <Route path="/docs/:docID"
                 render={(props)=>
                         <DocumentView
                           {...props}
                         />}
          />
          <Route path="/search"
                 render={(props)=>
                         <SearchView
                           {...props}
                         />}
          />
          <Route path="/profiles/:userId"
                 render={(props)=>
                         <ProfileView
                           {...props}
                         />}
          />
          <Route path="/profiles"
                 render={(props)=>
                         <ProfilesListView
                           {...props}
                         />}
          />
          <Route path=""
                 render={(props)=>
                         <PortalView
                           {...props}
                         />}
          />
        </Switch>
      </BrowserRouter>;

export default Router;



