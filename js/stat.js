'use strict';

var CLOUD_HEIGHT = 270;

var CLOUD_WIDTH = 420;

var CLOUD_X = 100;

var CLOUD_Y = 10;

var CLOUD_GAP = 10;

var CAPTION_X = 120;

var CAPTION_Y = 40;

var CAPTION_GAP = 20;

var BAR_HEIGHT = 150;

var BAR_WIDTH = 40;

var BAR_GAP = 50;

var NAMES_Y = 3 * CAPTION_Y + BAR_HEIGHT;

var BAR_Y = NAMES_Y - CAPTION_GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT)
};

var getMaxElement = function (times) {
  var maxElement = times[0];
  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }
  return maxElement
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CAPTION_X, CAPTION_Y);
  ctx.fillText('Список результатов:', CAPTION_X, CAPTION_Y + CAPTION_GAP);

  for (var i = 0; i < names.length; i++) {
    var maxTime = getMaxElement(times);
    ctx.fillStyle = 'black';
    ctx.fillText(Math.floor(times[i]), CAPTION_X + CAPTION_GAP + (BAR_WIDTH + BAR_GAP) * i, BAR_Y - (times[i] * BAR_HEIGHT / maxTime) - CLOUD_GAP);
    ctx.fillText(names[i], CAPTION_X + CAPTION_GAP + (BAR_WIDTH + BAR_GAP) * i, NAMES_Y);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)'
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')'
    }
    ctx.fillRect(CAPTION_X + CAPTION_GAP + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, -(times[i] * BAR_HEIGHT) / maxTime)
  }
};
