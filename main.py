from flask import Flask, render_template, request
app = Flask('app')

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
app.run(host='0.0.0.0', port=8080)
