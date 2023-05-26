from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
from notes_summarizer.utils import explainer


load_dotenv()


OPEN_API_KEY = os.getenv("OPEN_API_KEY")

app = Flask(__name__)


@app.route("/summarize", methods=["POST"])
def summarize(api_key, code):
    api_key = request.headers.get("X-API-KEY")
    if not api_key:
        return (
            jsonify(error="API key missing"),
            400,
        )
    data = request.get_json()
    code = data.get("code", "")
    response = explainer.explainCode(api_key, code)
    return response
