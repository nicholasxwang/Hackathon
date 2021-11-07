from flask import Flask, render_template, request
from flask_mail import Mail, Message
import os
import json
app = Flask('app')
mail = Mail(app)
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.getenv("email")
app.config['MAIL_PASSWORD'] = os.getenv("password")
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
from pyzipcode import ZipCodeDatabase
zcdb = ZipCodeDatabase()

@app.route("/signUp")
def signUp():
  email = request.form.get("email")
  username = request.form.get("username")
  password = request.form.get("password")
  zip_code = request.form.get("zipCode")
  betaCode = request.form.get("beta_code")
  country = "US"


@app.route("/checkValidZipCode",methods=["POST"])
def checkzipcode():
  try:
    a = zcdb[int(request.form.get("code"))]
    return "True"
  except:
    return "False"
@app.route("/checkBetaCode", methods=["POST"])
def checkBetaCode():
  with open("static/json/beta_codes.json","r") as file:
    file = json.load(file)
  with open("static/json/taken_codes.json","r") as file2:
    file2 = json.load(file2)
  code = request.form.get("code")
  if code in file2:
    print("code not is valid")
    return "Taken"
  if code in file:
    print("code is valid")
    # file2.append(code)
    # with open("static/json/taken_codes.json","r") as out:
    #   json.dump(file2,out)
    return "True"
  print("code not is valid")
  return "False"
@app.route("/sendEmail")
def sendEmail():
  e = request.args.get("e")
  t = request.args.get("t")
  b = request.args.get("b")
  msg = Message(t, sender = os.getenv("email"), recipients = [e])
  msg.body = b
  mail.send(msg)
  return "Sent"
@app.route('/')
def index():
  return render_template("index.html")

@app.route('/login')
def login():
  return render_template('login.html')

@app.route('/signup')
def signup():
  return render_template('signup.html')

@app.route("/dashboard")
def dashboard():
  return render_template('dashboard.html')

@app.route("/2048")
def game2048():
  return render_template("2048.html")
@app.route("/maze")
def game_maze():
  return render_template("maze.html")

@app.route("/snake")
def snake_game():
  return render_template("snake.html")
app.run(host='0.0.0.0', port=8080)
