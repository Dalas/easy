from .BaseHandler import BaseHandler


class HomePageHandler(BaseHandler):

    def get(self):
        self.render('BaseTemplate.html')