from flask import Flask, render_template, request
from flask_mail import Mail, Message
import os
import json
app = Flask('app')

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'virtualholidaysmidnighthacks@gmail.com'
app.config['MAIL_PASSWORD'] = os.getenv('psw')
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config["DEBUG"] = True
mail = Mail(app)
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
  import smtplib, ssl
  from email.mime.text import MIMEText
  from email.mime.multipart import MIMEMultipart

  sender_email = os.getenv("email")
  receiver_email = "nicholas.x.wang@gmail.com"
  password = os.getenv("passsword")

  message = MIMEMultipart("alternative")
  message["Subject"] = "multipart test"
  message["From"] = sender_email
  message["To"] = receiver_email

  # Create the plain-text and HTML version of your message
  text = """\
  Hi,
  How are you?
  Real Python has many great tutorials:
  www.realpython.com"""
  html = """\
  <html>
    <body>
      <p>Hi,<br>
        How are you?<br>
        <a href="http://www.realpython.com">Real Python</a> 
        has many great tutorials.
      </p>
    </body>
  </html>
  """

  # Turn these into plain/html MIMEText objects
  part1 = MIMEText(text, "plain")
  part2 = MIMEText(html, "html")

  # Add HTML/plain-text parts to MIMEMultipart message
  # The email client will try to render the last part first
  message.attach(part1)
  message.attach(part2)

  # Create secure connection with server and send email
  context = ssl.create_default_context()
  with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
      server.login(sender_email, password)
      server.sendmail(
          sender_email, receiver_email, message.as_string()
      )
  return "yay"
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
