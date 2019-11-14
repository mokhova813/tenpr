from flask import Flask, render_template, request
import urllib.request
import json, requests

app = Flask(__name__)


@app.route('/')
def my_form():
    return render_template('index.html')


@app.route('/search', methods=['POST'])
def my_form_post():
    api_alc = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
    api_nonalc = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    api_byName = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

    json_obj = urllib.request.urlopen(api_alc)
    data = json.load(json_obj)
    if request.form.get("alc"):
        return render_template('search.html', title='Home', data=data["drinks"])
    return("error!")

if __name__ == "__main__":
    app.run(debug=True)

# client = pymongo.MongoClient("mongodb://mokhova813:12345@cluster0-yl1dx.mongodb.net/test?retryWrites=true&w=majority")
# db = client.test
# collection = db['test']
#
# collection.insert_one({'name' : "aa"})
# api = '1'
#
# url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita&api_key=api'
#
# json_obj = urllib.request.urlopen(url)
#
# data = json.load(json_obj)
