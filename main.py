from tornado.ioloop import IOLoop
from tornado.web import Application
from routes import routes
import os


def make_app():
    settings = {
        'template_path': 'templates',
        'login_url': '/login',
        'xsrf_cookies': True,
        'debug': True,
        'cookie_secret': 'hHSWz7CRQxiDL/AfDYTxGXqBGSSj7UaIvy1mSMoTgTY='
    }
    return Application(routes, **settings)


def main():
    app = make_app()

    port = os.environ.get('PORT', 8888)

    app.listen(port)
    IOLoop.instance().start()

if __name__ == "__main__":
    main()