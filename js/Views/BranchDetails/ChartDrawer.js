// js/Views/BranchDetals/ChartDrawer.js

/**
 * ChartDrawer
 * Draws a pie chart on the given svg element
 * The code is taken and adapted from: 
 * http://stackoverflow.com/questions/7261318/svg-chart-generation-in-javascript
 * 
 * @utility
 * 
 */

define(function (require, exports, module) {
  
  function makeSVG(tag, attrs) {
    var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs)
      if (attrs.hasOwnProperty(k)) el.setAttribute(k, attrs[k]);
    return el;
  }

  module.exports = function drawArcs(paper, pieData){
    var total = pieData.reduce(function (accu, item) { return item.value + accu; }, 0);
    var sectorAngleArr = pieData.map(function (item) { 
      return {
        value : 360 * item.value / total,
        color : item.color
      };
    });

    var startAngle = 0;
    var endAngle = 0;
    for (var i=0; i<sectorAngleArr.length; i++){
      startAngle = endAngle;
      endAngle = startAngle + sectorAngleArr[i].value;

      var x1,x2,y1,y2 ;

      x1 = parseInt(Math.round(200 + 195*Math.cos(Math.PI*startAngle/180)));
      y1 = parseInt(Math.round(200 + 195*Math.sin(Math.PI*startAngle/180)));

      x2 = parseInt(Math.round(200 + 195*Math.cos(Math.PI*endAngle/180)));
      y2 = parseInt(Math.round(200 + 195*Math.sin(Math.PI*endAngle/180)));

      var d = "M200,200  L" + x1 + "," + y1 + "  A195,195 0 " + 
              ((endAngle-startAngle > 180) ? 1 : 0) + ",1 " + x2 + "," + y2 + " z";
      var arc = makeSVG("path", {d: d, fill: sectorAngleArr[i].color});
      paper.appendChild(arc);
    }
  };

});