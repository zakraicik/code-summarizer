import os
from dotenv import load_dotenv
from notes_summarizer.utils.explainer import explainCode
from openai.error import AuthenticationError, RateLimitError
from pytest import raises
from unittest.mock import patch

load_dotenv()


OPEN_API_KEY = os.getenv("OPEN_API_KEY")


def test_explainCode_authentication_error():
    # Test authentication error scenario
    api_key = "invalid_api_key"
    code = "print('hello world)"

    with raises(AuthenticationError):
        response = explainCode(api_key, code)


def test_explainCode_rate_limit_error():
    code = "print('hello world')"

    with patch(
        "openai.ChatCompletion.create",
        side_effect=RateLimitError(
            "openai.error.RateLimitError: You exceeded your current quota, please check your plan and billing details."
        ),
    ):
        with raises(RateLimitError):
            response = explainCode(OPEN_API_KEY, code)


def test_explainCode_valid():
    code = "print('hello world')"

    response = explainCode(OPEN_API_KEY, code)

    assert response is not None
