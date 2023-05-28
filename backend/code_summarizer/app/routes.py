from flask import Flask, request, jsonify
from flask_cors import CORS
from code_summarizer.utils.explainer import explainCode


app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "*"}})
CORS(app, resources={r"/summarize": {"origins": "http://localhost:3000"}})


@app.route("/summarize", methods=["POST"])
def summarize():
    api_key = request.headers.get("X-API-KEY")

    if not api_key:
        return jsonify(error="API key missing"), 400

    try:
        data = request.get_json()
    except:
        data = None

    if not data:
        return jsonify(error="Missing JSON data"), 400

    code = data.get("code")
    if not code:
        return jsonify(error="Code missing in request"), 400

    response = explainCode(api_key, code)
    if not response:
        return jsonify(error="API request failed"), 500

    return jsonify(summary=response)


if __name__ == "__main__":
    app.run(debug=True)
