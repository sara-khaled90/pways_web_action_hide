# -*- coding: utf-8 -*-
{
    'name': 'Disable Action Feature',
    'version': '13.0.0',
    'author': 'Preciseways',
    'summary': 'Disable action feature which will hide duplicate or delete and wizard in all views',
    'depends': ['web'],
    'data': [
    		'security/web_ext_security.xml',
            'views/web_asset.xml',
    ],
    'application': True,
    'installable': True,
    'images':['static/description/banner.png'],
    'live_test_url': 'https://preciseways.com',
    'license': 'OPL-1',
}
