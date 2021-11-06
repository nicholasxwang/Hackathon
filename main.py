from flask import Flask, render_template, request
app = Flask('app')

@app.route('/')
def index():
  return render_template("index.html")

@app.route('/login')
def login():
  return render_template('login.html')

@app.route("/dashboard")
def dashboard():
  return render_template('dashboard.html')
app.run(host='0.0.0.0', port=8080)
