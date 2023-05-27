import pytest
from flask import json
from notes_summarizer.app.routes import app


@pytest.fixture
def client():
    app.testing = True
    with app.test_client() as client:
        yield client


def test_no_api_key(client):
    response = client.post("/summarize", headers={"Content-Type": "application/json"})
    assert response.status_code == 400
    data = json.loads(response.data)
    assert data["error"] == "API key missing"


# def test_no_code(client):
#     response = client.post(
#         "/summarize",
#         headers={"X-API-KEY": "valid_api_key", "Content-Type": "application/json"},
#     )
#     assert response.status_code == 400
#     data = json.loads(response.data)
#     assert data["error"] == "Missing JSON data"


# def test_invalid_code(client):
#     response = client.post(
#         "/summarize",
#         headers={"X-API-KEY": "valid_api_key", "Content-Type": "application/json"},
#         data=json.dumps({"code": "invalid_code"}),
#     )
#     assert response.status_code == 500
#     data = json.loads(response.data)
#     assert data["error"] == "API request failed"
