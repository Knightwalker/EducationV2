from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World'

if __name__ == '__main__':
    # Change host to 'localhost' and port to 5000
    app.run(host='localhost', port=5000, debug=True)