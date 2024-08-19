// 지도의 확대 및 축소를 하는 함수입니다.

function zoomIn() { // 확대
  // 현재 지도의 레벨을 얻어옵니다
  var level = map.getLevel();
  
  // 지도를 1레벨 내립니다 (지도가 확대됩니다)
  map.setLevel(level - 1);
}

function zoomOut() { // 축소
  // 현재 지도의 레벨을 얻어옵니다
  var level = map.getLevel(); 
  
  // 지도를 1레벨 올립니다 (지도가 축소됩니다)
  map.setLevel(level + 1);
}