/*
Type: Photoshop Script
Name: All Layersets Merge
File Name: all-layersets-merge.jsx
Version: 0.1.0

Copyright (C) 2022 Katsushi Nakamura

This program is free software; you can redistribute it and/or modifyit under the terms of the GNU General Public License as published bythe Free Software Foundation; either version 3 of the License, or (at your option) any later version.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty ofMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
You should have received a copy of the GNU General Public Licensealong with this program. If not, see <https://www.gnu.org/licenses/>.
*/

// すべてのグループをグループごとにレイヤーに結合するコマンド
// 特定のグループを除外したりはできないので注意

(function () {
  if (documents.length > 0) {
    try {
      app.activeDocument.suspendHistory(
        "ALL-LAYERSETS-MERGE",
        "allLayersetsMerge()"
      );
    } catch (error) {
      alert("ERROR");
    }
  } else {
    alert("Open the document. Please try again.");
  }
})();

function allLayersetsMerge() {
  var sampleDocument = app.activeDocument;
  var layerSetsLength = sampleDocument.layerSets.length;
  if (layerSetsLength === 0) {
    alert("No groups. cannot be merge.");
  } else {
    // 新規にノーマルレイヤーを追加
    var normalLayerObj = sampleDocument.artLayers.add();
    normalLayerObj.kind = LayerKind.NORMAL;
    // レイヤー名を変更
    sampleDocument.layers[0].name = "ALL-LAYERSETS-MERGE";

    for (var i = 0; i < layerSetsLength; i++) {
      sampleDocument.layerSets[0].merge();
    }

    // 追加したレイヤーを削除する
    sampleDocument.layers["ALL-LAYERSETS-MERGE"].remove();

    alert("Success");
  }
}
