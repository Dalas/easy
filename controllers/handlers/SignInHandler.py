from .BaseHandler import BaseHandler


class SignInPageHandler(BaseHandler):

    def get(self):
        self.render('SignInPage.html')