export const candlestick = theme => ({
  id: 'candlestick',
  beforeDatasetDraw(chart) {
    const {
      ctx,
      data,
      scales: { y }
    } = chart;
    ctx.save();
    ctx.lineWidth = 1.5;

    data.datasets[0].data.forEach((datapoint, index) => {
      ctx.strokeStyle = datapoint.o <= datapoint.c ? '#16C782' : '#EA3943';
      ctx.beginPath();
      ctx.moveTo(
        chart.getDatasetMeta(0).data[index].x,
        chart.getDatasetMeta(0).data[index].y
      );
      ctx.lineTo(
        chart.getDatasetMeta(0).data[index].x,
        y.getPixelForValue(datapoint.h)
      );
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(
        chart.getDatasetMeta(0).data[index].x,
        chart.getDatasetMeta(0).data[index].y
      );
      ctx.lineTo(
        chart.getDatasetMeta(0).data[index].x,
        y.getPixelForValue(datapoint.l)
      );
      ctx.stroke();
    });
  }
});

let crosshair;
export const crosshairLabel = theme => ({
  id: 'crosshairLabel',

  afterDatasetsDraw(chart) {
    const {
      ctx,
      chartArea: { right },
      scales: { y }
    } = chart;

    if (crosshair) {
      ctx.save();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#FF971D';
      ctx.setLineDash([5, 3]);
      ctx.beginPath();
      crosshair.forEach(line => {
        ctx.moveTo(line.startX, line.startY);
        ctx.lineTo(line.endX, line.endY);
        ctx.stroke();
      });
      ctx.fillStyle = '#FF971D';
      ctx.fillRect(right + 10, crosshair[0].startY - 15, 46, 24);

      ctx.fillStyle = theme.colors.mainBg;
      ctx.font = '400 12px sans-serif';
      ctx.textAlign = 'center';

      ctx.fillText(
        y.getValueForPixel(crosshair[0].startY).toFixed(2),
        right + 32,
        crosshair[0].startY
      );
      ctx.setLineDash([0, 0]);
    }
  },

  afterEvent(chart, args) {
    const {
      chartArea: { left, right }
    } = chart;

    const yCord = args.event.y;

    if (!args.inChartArea && crosshair) {
      crosshair = undefined;
      args.changed = true;
    } else if (args.inChartArea) {
      crosshair = [
        {
          startX: left,
          startY: yCord,
          endX: right,
          endY: yCord
        }
      ];
      args.changed = true;
    }
  }
});
