from flask import Flask, render_template, request, redirect, make_response
from flask_mail import Mail, Message
import os
import json
import random
import time
app = Flask('app')

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'virtualholidaysmidnighthacks@gmail.com'
app.config['MAIL_PASSWORD'] = os.getenv('psw')
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
mail = Mail(app)
from pyzipcode import ZipCodeDatabase
zcdb = ZipCodeDatabase()

@app.route("/login",methods=["POST"])
def login2():
  import pymongo
  from werkzeug.security import generate_password_hash, check_password_hash
  db =pymongo.MongoClient(os.environ['token']).Users.Users
  for i in db.find({}):
    if request.form.get("u")==i["username"] and check_password_hash(i["password"],request.form.get("p"))==True:
      resp = make_response(redirect("/dashboard"))
      resp.set_cookie("u", request.form.get("u"))
      return resp


@app.route("/signUp",methods=["POST"])
def signUp():
  email = request.form.get("email")
  username = request.form.get("username")
  password = request.form.get("password")
  zip_code = request.form.get("zip_code")
  beta_code = request.form.get("beta_code")
  country = "US"
  import pymongo
  from werkzeug.security import generate_password_hash, check_password_hash
  db =pymongo.MongoClient(os.environ['token']).Users.Users
  count = 0
  for a in db.find({}):
    if a["email"] == email:
      return "Your email is taken!"
    if a["username"] == username:
      return "Your username is taken!"
    count+=1
  
  db.insert_one({"_id":count,"email":email,"password":generate_password_hash(password),"zip":zip_code,"beta":beta_code,"country":country,"username":username})
  with open("static/json/taken_codes.json","r") as file:
    file = json.load(file)
  file.append(beta_code)
  with open("static/json/taken_codes.json","w") as out:
    json.dump(file,out)
  return "Success!"
  


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
@app.route("/sendEmail",methods=["POST"])
def sendEmail():
  email = request.get("email")
  body = request.get("body")

  import smtplib, ssl

  port = 465  # For SSL
  smtp_server = "smtp.gmail.com"
  sender_email = os.getenv("email") # Enter your address
  receiver_email = email  # Enter receiver address
  code = random.randint(10000,99999)
  password = os.getenv("password")
  message = f"""\
  Verify your Email

  Your code is: {code}"""

  context = ssl.create_default_context()
  with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
    server.login(sender_email, password)
    server.sendmail(sender_email, receiver_email, message)
  with open("static/json/email.json","r") as codes:
    codes = json.load(codes)
  #Now the user must enter the correct code.
  time.sleep(120)
  return "Expired! :joy:"
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
  return render_template("dashboard.html")
  u = request.cookies.get("u")
  if u == None:
    return redirect("/login")
  import pymongo
  from werkzeug.security import generate_password_hash, check_password_hash
  db =pymongo.MongoClient(os.environ['token']).Users.Users
  for i in db:
    if i["u"] == u:
      name = i
      try:
        candy_num = int(i["candy_num"])
      except:
        candy_num = 0;
      zip_code = i["zip"]
  return str(name)
  return render_template('dashboard.html', name = name, candy_num=candy_num, zip=zip, place=ZipCodeDatabase()[int(zip)].place,state =ZipCodeDatabase()[int(zip)].state)

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
