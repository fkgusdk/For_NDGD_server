from django.shortcuts import render
from django.http import JsonResponse

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


import pandas as pd
from sklearn.cluster import KMeans
import numpy as np
import pickle
import torch
from transformers import BertTokenizer, BertModel

# Create your views here.

@method_decorator(csrf_exempt, name='dispatch')
def payments_pred(request):

    if request.method == 'POST':
        # KoBERT 모델과 토크나이저 불러오기
        model = BertModel.from_pretrained('monologg/kobert')
        tokenizer = BertTokenizer.from_pretrained('monologg/kobert')

        filename = 'static/kmeans_model.pkl'
        with open(filename, 'rb') as f:
            kmeans_loaded = pickle.load(f)

        filename = 'static/cluster_dict.pickle'
        with open(filename, 'rb') as f:
            cluster_name = pickle.load(f)

        by_scale = pd.read_csv('static/근로복지공단_산재보험보상관련 사업규모별 통계현황_20211231_for_pay.csv', encoding='ANSI')

        scale = {'건설업':0, '5인미만':1,'5 ~ 29인':2,'30 ~ 49인':3, '50 ~ 99인':4, '100 ~ 299인':5, '300 ~ 499인':6, '500 ~ 999인':7, '1,000인 이상':8}

        topic = {'요양급여':0, '휴업급여':1, '상병보상연금':2, '장해급여':3, '유족급여':4, '장의비':5, '간병급여':6, '재활급여':7}

        ###########################################
        posted = request.POST

        data = [posted.get('occurrenceType'), posted.get('local'), posted.get('workname'), posted.get('illness')]
        
        input_topic = posted.get('paidType')
        input_scale = posted.get('scale')

        ##########################################

        vectors = []
        for col in data:
            new_word = col
            
            inputs = tokenizer.encode_plus(new_word, add_special_tokens=True, return_tensors='pt') 
            input_ids = inputs['input_ids']
            attention_mask = inputs['attention_mask']

            with torch.no_grad():
                outputs = model(input_ids, attention_mask=attention_mask)
                word_vector = outputs.pooler_output
            for d in word_vector.tolist()[0]:
                vectors.append(d)

        predicted_cluster = kmeans_loaded.predict([vectors])
        topic_index = topic[input_topic]

        result = round((cluster_name[0][predicted_cluster[0]][topic_index] + by_scale.loc[scale[input_scale],:][topic_index]) / 2)

        response = {'result':result}
        
        return JsonResponse(response)
