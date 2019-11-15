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
    api_byName = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="


    if request.form.get("alc"):
        json_obj_alc = urllib.request.urlopen(api_alc)
        data_alc = json.load(json_obj_alc)
        return render_template('search.html', title='Home', data_alc=data_alc["drinks"])

    if request.form.get("nonalc"):
        json_obj_nonalc = urllib.request.urlopen(api_nonalc)
        data_nonalc = json.load(json_obj_nonalc)
        return render_template('search.html', title='Home', data_nonalc=data_nonalc["drinks"])

    if request.form.get("byName"):
        json_obj_byName = urllib.request.urlopen(api_byName + (request.form.get("byName")).replace(' ', '%20'))
        data_byName = json.load(json_obj_byName)
        return render_template('search.html', title='Home', data_byName=data_byName["drinks"])
    return ("error!")

@app.route('/find', methods=['GET'])
def show_recipe():
    drink_id = request.args.get("id")
    api_byId = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

    json_obj_byId = urllib.request.urlopen(api_byId+drink_id)
    api_byId = json.load(json_obj_byId)
    return api_byId


if __name__ == "__main__":
    app.run(debug=True)

# client = pymongo.MongoClient("mongodb://mokhova813:12345@cluster0-yl1dx.mongodb.net/test?retryWrites=true&w=majority")
# db = client.test
# collection = db['test']
#
# collection.insert_one({'name' : "aa"})
