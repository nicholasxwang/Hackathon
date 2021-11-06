from flask import Flask, render_template, request
app = Flask('app')

@app.route('/')
def hello_world():
  return render_template("index.html")

@app.route('/sendImage',methods=['POST'])
def sendImage():
  import cv2
  # Get user supplied values
  imagePath = request.get('link')
  cascPath = "haarcascade_frontalface_default.xml"
  faceCascade = cv2.CascadeClassifier(cascPath)
  image = cv2.imread(imagePath)
  gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
  faces = faceCascade.detectMultiScale(
    gray,
    scaleFactor=1.1,
    minNeighbors=5,
    minSize=(30, 30),
    flags = cv2.cv.CV_HAAR_SCALE_IMAGE
  )
  print("Found {0} faces!".format(len(faces)))
  # for (x, y, w, h) in faces:
  #     cv2.rectangle(image, (x, y), (x+w, y+h), (0, 255, 0), 2)
  # cv2.imshow("Faces found", image)
  # cv2.waitKey(0)
  return  "We found "+len(faces)+" faces!"
app.run(host='0.0.0.0', port=8080)
