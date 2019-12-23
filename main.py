import bcrypt
import json
import urllib.request

from flask import Flask, render_template, request, session, redirect
from pymongo import MongoClient
from flask_cors import CORS
app = Flask(__name__)

client = MongoClient()

client = MongoClient("mongodb+srv://mokhova813:12345@cluster0-yl1dx.mongodb.net/test?retryWrites=true&w=majority")

db = client.registration_database
collection = db.registration_collection


@app.route('/')
def my_form():
    if 'username' in session:
        return render_template('index.html', data='You are logged in as ' + session['username'])
    else:
        return render_template('index.html', reg=1)


@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        users = collection
        login_user = users.find_one({'name': request.form['username']})

        if login_user:
            if bcrypt.hashpw(request.form['pass'].encode('utf-8'), login_user['password']) == login_user['password']:
                session['username'] = request.form['username']
                return redirect('/')
        else:
            return 'Invalid username/password combination'
    return render_template('login.html')


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        users = collection
        existing_user = users.find_one({'name': request.form['username']})

        if existing_user is None:
            hashpass = bcrypt.hashpw(request.form['pass'].encode('utf-8'), bcrypt.gensalt())
            users.insert({'name': request.form['username'], 'password': hashpass})
            session['username'] = request.form['username']
            return redirect('/')

        return 'That username already exists!'

    return {"msg":"hello"}


@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect('/')


@app.route('/api/search', methods=['POST'])
def my_form_post():
    str_nonalc = ""
    str_alc = ""
    api_alc = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
    api_nonalc = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    api_byName = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    api_byIngredient = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="

    data = request.json
    if data['alc'] or data['noalc']:
        if data['alc']:
            json_obj_alc = urllib.request.urlopen(api_alc)
            data_alc = json.load(json_obj_alc)
            str_alc = data_alc["drinks"]

        if data['noalc']:
            json_obj_nonalc = urllib.request.urlopen(api_nonalc)
            data_nonalc = json.load(json_obj_nonalc)
            str_nonalc = data_nonalc["drinks"]

        return dict(s1=str_alc, s2=str_nonalc)


    # elif request.form.get("byName"):
    #     json_obj_byName = urllib.request.urlopen(api_byName + (request.form.get("byName")).replace(' ', '%20'))
    #     data_byName = json.load(json_obj_byName)
    #     str_byName = render_template('list.html', data=data_byName["drinks"])
    #     return render_template('searchByName.html', s1=str_byName)

    # elif request.form.get("byIngredient"):
    #     json_obj_byIngredient = urllib.request.urlopen(
    #         api_byIngredient + request.form.get("byIngredient").replace(' ', '%20'))
    #     data_byIngredient = json.load(json_obj_byIngredient)
    #     str_byIngredient = render_template('list.html', data=data_byIngredient["drinks"])
    #     return render_template('searchByIngredient.html', s1=str_byIngredient)

    # else:
    #     return "ERROR!"\
    return []


@app.route('/find', methods=['GET'])
def show_recipe():
    drink_id = request.args.get("id")

    if drink_id is not None:
        api_byId = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
        json_obj_byId = urllib.request.urlopen(api_byId + drink_id)
        data_byId = json.load(json_obj_byId)
        return render_template('foundCocktail.html', data=data_byId['drinks'][0])


    else:
        api_Random = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        json_Random = urllib.request.urlopen(api_Random)
        data_Random = json.load(json_Random)
        return render_template('foundCocktail.html', data=data_Random['drinks'][0])


if __name__ == "__main__":
    app.secret_key = 'mysecret'
    CORS(app)
    app.run(debug=True)
