from django.shortcuts import render
from django.http import HttpResponse
from qcloudsms_py.httpclient import HTTPError
from qcloudsms_py import SmsSingleSender
from .message import appid, appkey, template_id, sms_sign
import random


def message(request):
    phone_numbers = [request.GET['num']]
    print(phone_numbers)
    params = [''.join([str(random.randrange(0, 10)) for i in range(6)])]
    print(params)
    ssender = SmsSingleSender(appid, appkey)
    ssender.send_with_param(86, phone_numbers[0],
                            template_id, params, sign=sms_sign, extend="", ext="")
    return HttpResponse(params[0])
