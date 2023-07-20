from django.shortcuts import render
from django.http import JsonResponse

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


import pandas as pd
from sklearn.cluster import KMeans
import numpy as np
import pickle


@method_decorator(csrf_exempt, name='dispatch')
def percentsge_pred(request):

    if request.method == 'POST':

        filename = 'static/kmeans_model_for_per.pkl'
        with open(filename, 'rb') as f:
            kmeans_loaded = pickle.load(f)

        with open('static/dict_for_per_pred.pickle', 'rb') as f:
            df_dict = pickle.load(f)
            
        with open('static/dict2_for_per_pred.pickle', 'rb') as f:
            df2_dict = pickle.load(f)
            
        with open('static/dict3_for_per_pred.pickle', 'rb') as f:
            df3_dict = pickle.load(f)
            
        with open('static/dict4_for_per_pred.pickle', 'rb') as f:
            df4_dict = pickle.load(f)

        df = pd.read_csv('static/근로복지공단_업종별 산재신청 승인현황_20211231_for_per_pred.csv', encoding='ANSI')

        df2 = scale = pd.read_csv('static/근로복지공단_업무상질병판정위원회 질병별 판정현황_20211231_for_per_pred.csv', encoding='ANSI')

        df3 = pd.read_csv('static/근로복지공단_특수형태근로종사자 산재처리현황_2021_for_per_pred.csv', encoding='ANSI')

        df4 = pd.read_csv('static/근로복지공단_규모별 산재신청 승인현황_20211231_for_per_pred.csv', encoding='ANSI')

        ###########################################
        posted = request.POST

        data = [posted.get('workType'), posted.get('illness'), posted.get('special'), posted.get('scale')]

        ##########################################

        d1 = df['승인율(퍼센트)'][df_dict[data[0]]]
        d2 = df2['인정률(퍼센트)'][df2_dict[data[1]]]
        d3 = df3.iloc[0][df3_dict[data[2]]]
        d4 = df4['승인율(퍼센트)'][df4_dict[data[3]]]

        predicted_cluster = kmeans_loaded.predict([[d1,d2,d3,d4]])
        estimated_score = np.mean(kmeans_loaded.cluster_centers_[predicted_cluster])

        result = round(estimated_score,2)
        response = {'result':result}
        
        return JsonResponse(response)

