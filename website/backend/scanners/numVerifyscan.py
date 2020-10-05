import requests
from bs4 import BeautifulSoup
import hashlib
import json
import sys

def api_generate():

    r = requests.get('https://numverify.com/')
    soup = BeautifulSoup(r.text, "html5lib")
    for tag in soup.find_all("input", type="hidden"):
        if tag['name'] == "scl_request_secret":
            secret = tag['value']
            break

    return secret

def numverifyScan(num, secret=api_generate()):

    api = hashlib.md5((num + secret).encode('utf-8')).hexdigest()

    response = requests.get("https://numverify.com/php_helper_scripts/phone_api.php?secret_key={}&number={}".format(api, num))

    if response.content == "Unauthorized" or response.status_code != 200:
        return {'authorized' : "unauthorized"}

    numverifyScan.data = json.loads(response.content)

    if numverifyScan.data["valid"] == False:
        return {'valild' : "invalid"}
        sys.exit()

    return numverifyScan.data