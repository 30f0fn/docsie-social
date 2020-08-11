"""
Here is a specification of JSON data returned for GET requests from six Docsie-social views. 
I used Python with the sole purpose of formalizing the spec, so please expect this code to be highly non-performant.
"""

portalview_data = {
    'docs_recommended' : {
        'weekly_top_commented_doc' : WEEKLY_TOP_COMMENTED_DOC,
        'daily_top_commented_doc' : DAILY_TOP_COMMENTED_DOC,
        'most_discussed_doc' : MOST_DISCUSSED_DOC,
        'most_active_doc' : MOST_DISCUSSED_DOC,
b    },
    'topics_recommended': {
        {topic : Docs.listing(key = ascendance,
                          num = NUM_DOCS_PER_TOPIC,
                          criterion = lambda d : topic in d.topics())}
        for topic in Topic.listing(key = lambda t : t.relevance_for_user(USER),
                                num = NUM_RECOMMENDED)
    },
    'trending_communities' : Community.listing(key=trendiness,
                                             length=UPPER_SIDEBAR_LENGTH),
    'active_communities' : Community.listing(key=activeness,
                                           length=LOWER_SIDEBAR_LENGTH),
}

searchresultsview_data = {
    'searched_term' : SEARCHED_TERM,
    'recommended_communities' : Communities.search(searched_term = SEARCHED_TERM,
                                                   refinements = REFINEMENTS_DICT,
                                                   num = NUM_RECOMMENDED),
    'matched_docs' = Doc.search(searched_term = SEARCHED_TERM,
                                 refinements = REFINEMENTS_DICT,
                                 num = NUM_FOR_SEARCH_RETURN),
    'effected_refinements' = REFINEMENTS_LIST
}


topics_listview_data = {'popular_topics' : Topic.listing(key=POPULARITY,
                                                      num=HEADINGLIST_LENGTH),
                        'recommended_topics' : Topic.listing(key=CREATION_DATE,
                                                     num=NUM_RECOMMENDED),
                        'all_topics' : Topic.dict_by_title()
}

topic_detailview_data = {
    'detailed_topic' : DETAILED_TOPIC,
    'connected_topics' : Topic.listing(key=lambda t : relevance_to_topic(
                                        DETAILED_TOPIC),
                                    num=NUM_RECOMMENDED),
    'top_docs' : Docs.listing(key=ASCENDANCE,
                            num=NUM_LISTED,
                            criterion=lamba d : DETAILED_TOPIC in d.topics()),
    'trending_communities' : Community.listing(key=trendiness,
                                  criterion = lambda c : \
                                  c in DETAILED_TOPIC.communities(),
                                  length=UPPER_SIDEBAR_LENGTH),
    'active_communities' : Community.listing(key=activeness,
                                  criterion = lambda c : \
                                  c in DETAILED_TOPIC.communities(),
                                  length=LOWER_SIDEBAR_LENGTH),
}

communities_listview_data = {'popular_communities' :
                             Community.listing(key=POPULARITY,
                                             num=HEADINGLIST_LENGTH),
                             'recommended_communities' :
                             Community.listing(key=CREATION_DATE,
                                                     num=NUM_RECOMMENDED),
                        'all_communities' : COMMUNITIES.dict_by_title()
}

community_detailview_data = {
    'detailed_community' : DETAILED_COMMUNITY,
    'connected_communities' : Community.listing(key = lambda t : t.popularity(),
                                    num=HEADINGLIST_LENGTH),
    'top_docs' : Docs.listing(key = ASCENDANCE,
                            num = NUM_LISTED,
                            criterion=lambda d : DETAILED_COMMUNITY in d.communities()),
    'trending_topics' : Topic.listing(key=trendiness,
                                  criterion = lambda t : \
                                      t in DETAILED_COMMUNITY.topics(),
                                  length=UPPER_SIDEBAR_LENGTH),
    'active_topics' : Topic.listing(key = activeness,
                                  criterion = lambda t : \
                                      c in DETAILED_TOPIC.communities(),
                                  length=LOWER_SIDEBAR_LENGTH),
}



"""
SOME SUPPORTING METHODS...
"""

def ListingMixin():
    @classmethod
    def listing(cls, ordering, num, criterion):
    return\
        [datum.description()
         for datum in cls.sorted(
                 key = lambda d : getattr(d, key))
         if criterion(datum)
        ][num]

def DictByTitleMixin():
    @classmethod
    def dict_by_title(cls):
        return itertools.groupby(
            cls.sort(lambda x: x.title),
            key = lambda x : x.title[0]
        )
