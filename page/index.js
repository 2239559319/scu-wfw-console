let region = null;

const map = new AMap.Map('container', {
  resizeEnable: true
});
const geocoder = new AMap.Geocoder({
  radius: 1000
});
const marker = new AMap.Marker();

const addr = document.querySelector('.addr-v');

const click = e => {
  const lnglat = e.lnglat;
  map.add(marker);
  marker.setPosition(lnglat);
  geocoder.getAddress(lnglat, (status, { info, regeocode }) => {
    if (status === 'complete' && info === 'OK') {
      addr.innerHTML = regeocode.formattedAddress;
      region = {
        ...regeocode,
        position: lnglat
      };
    } else {
      alert('查询地址失败');
    }
  });
}

map.on('click', click);

const copy = (e) => {
  const transfer = document.createElement('input');
  document.body.appendChild(transfer);
  transfer.value = JSON.stringify(region);
  transfer.focus();
  transfer.select();
  if (document.execCommand('copy')) {
      document.execCommand('copy');
  }
  transfer.blur();
  document.body.removeChild(transfer);
  
}

document.querySelector('.copy').addEventListener('click', copy);
