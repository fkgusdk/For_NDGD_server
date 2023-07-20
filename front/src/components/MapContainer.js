import React, { useEffect } from 'react';
import jobData from "../data/JobInstitutionData.json"

const { kakao } = window;

const MapContainer = ({center, isPanto, level}) => {

    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(center.lat, center.lng),
			level: level
		};
        const map = new kakao.maps.Map(container, options);

        jobData.job.forEach((el) => {
            const marker = new kakao.maps.Marker({
                map: map,
                position : new kakao.maps.LatLng(el.lat, el.lng),
            });
            var infowindow = new kakao.maps.InfoWindow({
                content: el.name,
            });

            kakao.maps.event.addListener(
                marker,
                "mouseover",
                makeOverListener(map, marker, infowindow)
            );
            kakao.maps.event.addListener(
                marker,
                "mouseout",
                makeOutListener(infowindow)
            );
        });

        function makeOverListener(map, marker, infowindow) {
            return function () {
              infowindow.open(map, marker);
            };
          }
      
          // 인포윈도우를 닫는 클로저를 만드는 함수입니다
          function makeOutListener(infowindow) {
            return function () {
              infowindow.close();
            };
        }

    }, [center, isPanto, level]);


    return (
        <div id='myMap' style={{
            width: '80%', 
            height: '100vh',
            margin: '50px auto'
        }}></div>
    );
}

export default MapContainer; 
 