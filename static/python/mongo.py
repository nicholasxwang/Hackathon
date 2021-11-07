import pymongo
import os
from weurkzeug.security import generate_password_hash, check_password_hash

def get_user(email):
  db = pymongo.MongoClient(os.environ['token']).Users.Users.find({})
  for i in db:
    dictionary = {}
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
      dictionary["candy_amount"]=i["candy_amount"]
    except:
      dictionary["candy_amount"] = None
    try:
      dictionary["candy_dictionary"]=i["candy_dictionary"]
    except:
      dictionary["candy_dictionary"] = None
    if dictionary["email"]==email:
      return dictionary
  return {}

    