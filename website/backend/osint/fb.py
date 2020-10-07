import os
import requests
from PIL import Image
from bs4 import BeautifulSoup
import sys
import re

def remove_tags(text):
    TAG_RE = re.compile(r'<[^>]+>')
    return TAG_RE.sub('', text)

def is_valid(num):
    URL = "https://mbasic.facebook.com/login/identify/?ctx=recover" 
    payload = {'email': num, 'did_submit': 'Search'}
    profiles = []

    req = requests.post(URL, data=payload)
    if req.status_code == 200:

        if True:
            soup = BeautifulSoup(req.content.decode('utf-8'), 'html.parser')
            try:
                name = soup.findAll('strong')
                for names in name:
                    profiles.append(str(names))
                name = remove_tags(",".join(profiles))
            except IndexError:
                try:
                    name = soup.findAll('div', {'class': 'p v w'})
                    for names in name:
                        profiles.append(str(names))
                    name = remove_tags(",".join(profiles))
                except:
                    sys.exit()

            if len(profiles) != 0:

                return{"users" : len(profiles), "usernames" : name}
            else:
                return{"users" : "0"}
        else:
            return {"users" : "not found"}

        