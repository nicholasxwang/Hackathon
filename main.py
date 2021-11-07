from flask import Flask, render_template, request
from flask_mail import Mail, Message
import os
app = Flask('app')
mail = Mail(app)
app.config['MAIL_SERVER']='smtp.mail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.getenv("email")
app.config['MAIL_PASSWORD'] = os.getenv("password")
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

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
