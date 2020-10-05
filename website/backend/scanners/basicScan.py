import json
import requests
import phonenumbers
from phonenumbers import geocoder
from phonenumbers import carrier
from phonenumbers import timezone

def libphonenumbers(number):
    try:
        phonenumber = phonenumbers.parse(number, None)
    except:
        return {'response' : False}
    else:
        if not phonenumbers.is_valid_number(phonenumber):
            return {'valid' : False}

        number = phonenumbers.format_number(phonenumber, phonenumbers.PhoneNumberFormat.E164).replace('+', '')
        numberCountryCode = phonenumbers.format_number(phonenumber, phonenumbers.PhoneNumberFormat.INTERNATIONAL).split(' ')[0]

        countryRequest = json.loads(requests.request('GET', 'https://restcountries.eu/rest/v2/callingcode/{}'.format(numberCountryCode.replace('+', ''))).content)
        numberCountry = countryRequest[0]['alpha2Code']

        localNumber = phonenumbers.format_number(phonenumber, phonenumbers.PhoneNumberFormat.E164).replace(numberCountryCode, '')
        internationalNumber = phonenumbers.format_number(phonenumber, phonenumbers.PhoneNumberFormat.INTERNATIONAL)

        for libphonenumbers.timezoneResult in timezone.time_zones_for_number(phonenumber):
            return {'intl': '{}'.format(internationalNumber), 'local': '0{}'.format(localNumber), 'cc': '{}'.format(numberCountryCode), 'location': '{}'.format(geocoder.description_for_number(phonenumber, "en")), 'carrier': '{}'.format(phonenumbers.carrier.name_for_number(phonenumber, 'en')), 'timezone': '{}'.format(libphonenumbers.timezoneResult)}