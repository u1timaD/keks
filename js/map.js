import {getFixedNumberPoint} from './util.js';

const mapElement = document.querySelector('.map__canvas');
const address = document.querySelector('#address');

const map = L.map(mapElement)
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/pin.png',
  iconSize: [48, 48],
  iconAnchor: [24, 48],
});

const mainPinMarker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const mapPoint = evt.target.getLatLng();
  address.value = `${getFixedNumberPoint(mapPoint.lat)}, ${getFixedNumberPoint(mapPoint.lng)}`;
});

const points = [
  {
    title: 'Футура',
    lat: 59.96925,
    lng: 30.31730,
  },
  {
    title: 'Шаверма',
    lat: 59.96783,
    lng: 30.31258,
  },
  {
    title: 'Франк',
    lat: 59.95958,
    lng: 30.30228,
  },
  {
    title: 'Ginza',
    lat: 59.97292,
    lng: 30.31982,
  },
];


const createCustomPopup = ({lat, lng, title}) => `<section class="balloon">
  <h3 class="balloon__title">${title}</h3>
  <p class="balloon__lat-lng">Координаты: ${lat}, ${lng}</p>
</section>`;


const markerGroup = L.layerGroup().addTo(map);

const createMarker = (point) => {
  const {lat, lng} = point;
  const marker = L.marker(
    {
      lat,
      lng,
    }
  );


  marker
    .addTo(markerGroup)
    .bindPopup(createCustomPopup(point));
};

// points.forEach((point) => {
//   createMarker(point)
// });

// markerGroup.clearLayers();

points.slice(0, points.length / 2).forEach((point) => {
  createMarker(point);
});

// nextButton.addEventListener('click', () => {
//   markerGroup.clearLayers();
//   points.slice(points.length / 2).forEach((point) => {
//     createMarker(point);
//   });
//   nextButton.remove();
// });
