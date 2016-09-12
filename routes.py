from tornado.web import url
from tornado.web import StaticFileHandler
from controllers import *

routes = [
    # Static files.
    url(r'/static/(.*)', StaticFileHandler, {'path': 'static'}),

    # web
    url(r'/', HomePageHandler, name='home'),
]