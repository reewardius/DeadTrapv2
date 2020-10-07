import requests
from bs4 import BeautifulSoup
import re
from googlesearch import search

def remove_tags(text):
    TAG_RE = re.compile(r'<[^>]+>')
    return TAG_RE.sub('', text)

def spamcalls(num):

    lists = []

    r = requests.get("https://spamcalls.net/en/search?q={}".format(num))
    if r.status_code == 200:
        try:
            parse = BeautifulSoup(r.content.decode('utf-8'), 'html.parser')
            name = parse.findAll('strong')
            for names in name:
                lists.append(str(names))
            lists.pop(0)
            return{"spamcalls" :  remove_tags(", ".join(lists))}
        except Exception as e:
            return{'err' : e}
            
def scamcallfighters(num):

    r = requests.get("http://www.scamcallfighters.com/search-phone-{}.html".format(num.replace("+", "")))
    if r.status_code == 200:
        try:
            parse = BeautifulSoup(r.content.decode('utf-8'), 'html.parser')
            for g in parse.find_all('div', class_='nrp_headmat1'):
		            records = g.find_all('p')
            return{"scamcallfighters" : remove_tags(str(records))}
        except Exception as e:
            return{'err' : e}

def urls(num, countrycode, localnumber):

    return{"fouroneone": "https://www.411.com/phone/{}".format(num.replace('+', '').replace(' ', '-')), "truecaller": "https://www.truecaller.com/{}/{}".format(countrycode, localnumber), 'truepeoplesearch': "https://www.truepeoplesearch.com/results?phoneno={}".format(num.replace(' ', '')), 'syncme': "https://sync.me/search/?number={}".format(num.replace("+", ""))}
    try:
        for r in search(num):
            return{"URL": r}
    except:
        return{"err" : "error occured"}



