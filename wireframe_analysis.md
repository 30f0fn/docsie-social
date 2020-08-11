Wireframe analysis for docsie-social
==================================

[PortalView](https://github.com/LikaloLLC/docsie-social/blob/master/ui/wireframes/PortalView.pdf)
------

- header: popular topics list [HighlightsHeader<Popularity, Topic>]
- panel : doc recommendations [PortalPanel]
    - top commented of the week 
        - doc minidisplay [MiniDisplay<Doc>]
    - of the day
        - [MiniDisplay<Doc>]
    - most discussed
        - [MiniDisplay<Doc>]
    - most active
        - [MiniDisplay<Doc>]
- extensibly scrolling panel: Topic recommendations\ 
    [ExtensibleScrollerListing<FromUser, Topic>]
    - topic display [Display<Topic>]
        - title
        - docs recommendation list [Listing<FromTopic, Doc>]
            - [MiniDisplay<Doc>]
- sidebar: Communities [<Sidebar<Communities>>]
    - trending communities [SubSidebarList<Trending, Communities>]
        - community minidisplay [MiniDisplay<Community>]
    - active communities list by popular topic [Listing<FromTopic, Community>]
        - community minidisplay [MiniDisplay<Community>]

[TopicsListView](https://github.com/LikaloLLC/docsie-social/blob/master/ui/wireframes/TopicsListView.pdf)
-------------

- header: popular topics list [HighlightsHeader<Popularity, Topic>]
- panel: latest topics list [MiniDisplayListingPanel<Latest, Topic>]
    - topic  minidisplay [MiniDisplay<Topic>]
- panel: all topics list by title [ByTitleListing<Topic>]


[TopicDetailView](https://github.com/LikaloLLC/docsie-social/blob/master/ui/wireframes/TopicDetailView.pdf)
------------

- header: connected topics list [Highlightsheader<FromTopic, Topic>]
- detail [DetailPanel<Topic>]
    - follow/share/... [SocialOptions<Topic>]
    - extensibly loading list: top docs [ExtensibleScrollerListing<FromTopic, Doc>]
        - doc minidisplay [MiniDisplay<Doc>]
- sidebar: communities [<Sidebar<Communities>>]
    - trending [SubSidebarList<Trending, Communities>]
    - active [SubSidebarList<Active, Communities>]


[CommunitiesListView](https://github.com/LikaloLLC/docsie-social/blob/master/ui/wireframes/CommunitiesListView.pdf)
---------------

- header: popular communities list [HighlightsHeader<Popularity, Community>]
- panel: latest communities list  [MiniDisplayListingPanel<Latest, Community>]
    - topic minidisplay [MiniDisplay<Community>]
- panel: all communities list by title [ByTitleListing<Community>]

[CommunityDetailView](https://github.com/LikaloLLC/docsie-social/blob/master/ui/wireframes/CommunityDetailView.pdf)
----------------

- header: top communities list  [HighlightsHeader<Ascendance, Community>]
- detail [DetailPanel<Community>]
    - follow/share/... [SocialOptions<Topic>]
    - extensibly loading list: top docs  [ExtensibleScrollerListing<FromCommunity, Doc>]
        - doc minidisplay  [MiniDisplay<Doc>]
- sidebar: topics  [<Sidebar<topics>>]
    - trending  [SubSidebarList<Trending, Topics>]
    - relevant  [SubSidebarList<Relevant, Topics>]

[SearchResultsView](https://github.com/LikaloLLC/docsie-social/blob/master/ui/wireframes/SearchResultsView.pdf)
--------------

- header: recommendation refinement links [SearchAdjustmentHeader]
- panel: recommended (from search term) communities list [MiniDisplayListingPanel<FromSearch, community>]
    - community minidisplay [MiniDisplay<Community>]
- extensibly loading list: matching documents [ExtensibleScrollerListing<FromSearch, Doc>]
    - document minidisplay [MiniDisplay<Doc>]
