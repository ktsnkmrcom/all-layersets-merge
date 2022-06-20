// すべてのグループをグループごとにレイヤーに結合するコマンド
// 特定のグループを除外したりはできないので注意

(function () {

if (documents.length > 0) {
var layerSetsLength = app.activeDocument.layerSets.length;

if (layerSetsLength === 0){

    alert("No groups. cannot be merge.");

} else {

for (var i = 0; i < layerSetsLength; i++) {
app.activeDocument.layerSets[0].merge();
}

alert("Success");

}

} else {
    alert("Open the document. Please try again.");
  }

})();