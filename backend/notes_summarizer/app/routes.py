from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
from notes_summarizer.utils.explainer import explainCode


load_dotenv()


OPEN_API_KEY = os.getenv("OPEN_API_KEY")

app = Flask(__name__)


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
