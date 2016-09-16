from tornado.web import RequestHandler


class BaseHandler(RequestHandler):
    def render(self, template_name, **kwargs):
        kwargs['user'] = None
        super(BaseHandler, self).render(template_name, **kwargs)