import json

while True:
  c = input("Candy Name: ")
  p = input("Picture: ")
  with open("static/json/candy.json","r") as file:
    file = json.load(file)
  file[c] = p
  with open("static/json/candy.json","w") as out:
    json.dump(file,out,indent=4)