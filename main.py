from flask import Flask
from flask import request
from flask_restful import Resource, Api
from flask_cors import CORS
from scanners.fraud import *
from scanners.basicScan import libphonenumbers
from scanners.numVerifyscan import numverifyScan
import scanners.dork as dork
import osint.fb as fb
import osint.linkedin as linkedin
import osint.twitter as twitter 
import time


app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)

class Helloworld(Resource):
    def post(self):
        some_json = request.get_json()

class Multi(Resource):
    def get(self, num):
        fbook = fb.is_valid(num)
        time.sleep(5)
        tweet = twitter.twitter(num)
        for i in dork.sites():
            return {
                'basic' : libphonenumbers(num), 
                'numverify' : numverifyScan(num.replace("+", "")), 
                'dork' : dork.dorkv(num, i), 
                'twitter' : tweet, 
                'linkedin' : linkedin.linkedin(libphonenumbers.timezoneResult.split("/")[1]), 
                'facebook' : fbook,
                'fraud' : spamcalls(num),
                'fraud2' : scamcallfighters(num),
                'fraud3' : urls(num, numverifyScan.data["country_code"].lower(), numverifyScan.data["local_format"])
            }


api.add_resource(Helloworld, "/")
api.add_resource(Multi, '/<num>')
if __name__ == "__main__":
    app.run()
