import requests
from bs4 import BeautifulSoup
from googlesearch import search

foundnumbers = []

def sites():
    URL = "https://duckduckgo.com/html/?q=disposablenumbers"
    USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"
    headers = {"user-agent" : USER_AGENT}
    resp = requests.get(URL, headers=headers)
    if resp.status_code == 200:
	    soup = BeautifulSoup(resp.content, "html.parser")
	    results = []
	    for g in soup.find_all('h2', class_='result__title'):
		    anchors = g.find_all('a')
		    if anchors:
			    link = anchors[0]['href']
			    results.append(link)
    return results

def dorkv(num, sites):

    try:
        for result in search("site:{} intext:{}".format(sites, num), stop=1):
            if result:
                return{"website" : result}
            else:
                return {"website" : "Not Found"}
    except:
        return{"err" :"google being retard once again blocking requests, try using proxy"}
    