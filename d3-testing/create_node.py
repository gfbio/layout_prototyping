# -*- coding: utf-8 -*-
import json
import pprint
import random

def create_nodes(file_name='nodes.json', node_count=10, icons=[]):
    nodes = {
        'nodes': [
            {
                "name": "DataManagement",
                "group": 1,
                "icon_unicode": u"\ue02b",
                "sub_text": "Data Management",
                "highlight": True
            },
            {
                "name": "DataSubmission",
                "group": 2,
                "icon_unicode": u"\ue04c",
                "sub_text": "Data Submission",
                "highlight": True
            },
            {
                "name": "DataBrowsing",
                "group": 3,
                "icon_unicode": u"\ue02a",
                "sub_text": "Data Browsing",
                "highlight": True
            },
            {
                "name": "DataAnalysis",
                "group": 4,
                "icon_unicode": u"\ue03c",
                "sub_text": "Data Analysis",
                "highlight": True
            },
            {
                "name": "DataAnalysis",
                "group": 4,
                "icon_unicode": u"\ue034",
                "sub_text": "Tools",
                "highlight": True
            },
        ],
        'links': [
            {
                "source": 0,
                "target": 1,
                "value": 3
            },
            {
                "source": 1,
                "target": 2,
                "value": 3
            },
            {
                "source": 2,
                "target": 3,
                "value": 3
            },
            {
                "source": 4,
                "target": 0,
                "value": 8
            },
        ]
    }

    highlights = range(0, 5)

    # [nodes['nodes'].append() for i in icons]
    # for i in icons:
    for i in xrange(0, node_count-1):
        nodes['nodes'].append(
            {
                "name": "dummy",
                "group": 9,
                "icon_unicode": random.choice(icons),
                "highlight": False,
                "distance": random.randrange(2, 10, 2)
            }
        )

    for n in xrange(0, len(nodes['nodes'])):
        # link to highlight nodes
        nodes['links'].append(
            {
                "source": n,
                "target": random.choice(highlights),
                "value": 8
            }
        )

        # complete random
        # nodes['links'].append(
        #     {
        #         "source": n,
        #         "target": random.randrange(0, node_count-1),
        #         "value": 8
        #     }
        # )

    with open(file_name, 'w') as nodes_file:
        json.dump(nodes, nodes_file, ensure_ascii=True)


def extract_icon_unicodes(file_name=''):
    icons = set()
    with open(file_name, 'rb') as f:
        content = json.load(f)
        for n in content.get('nodes'):
            icons.add(n.get('icon_unicode'))
    print list(icons)


icons = [u'\ue002', u'\ue005', u'\ue006', u'\ue98c', u'\ue00e', u'\uea16',
         u'\ue018', u'\uea22', u'\ue025', u'\ue930', u'\ue02b', u'\ue02a',
         u'\ue031', u'\ue030', u'\ue033', u'\ue032', u'\ue034', u'\ue037',
         u'\ue039', u'\ue03c', u'\ue045', u'\ue046', u'\ue049', u'\ue04c',
         u'\ue05a', u'\ue9ea', u'\ue9bc']

create_nodes(
    file_name='/home/maweber/devel/gfbio_html/d3-testing/dynamic.json',
    node_count=25,
    icons=icons
)
# extract_icon_unicodes(file_name='/home/maweber/devel/gfbio_html/d3-testing/less.json')