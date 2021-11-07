import pymongo
import os
from weurkzeug.security import generate_password_hash, check_password_hash

def get_user(email):
  db = pymongo.MongoClient(os.environ['token']).Users.Users.find({})
  dictionary = {}
  for i in db:
    try:
      dictionary["email"]=i["email"]
    except:
      dictionary["email"] = None
    try:
      dictionary["username"]=i["username"]
    except:
      dictionary["username"] = None
    try:
      dictionary["password"]=generate_password_hash(i["password"])
    except:
      dictionary["password"] = None
    try:
      dictionary["username"]=i["username"]
    except:
      dictionary["username"] = None

    