import { Component } from 'react';
import { candlestick, crosshairLabel } from '../../utiils/chartPlugins';
import chartTooltip from '../../utiils/chartTooltip';
import { withTheme } from 'styled-components';

class CurrencyChart extends Component {
  constructor() {
    super();
    this.state = { chart: null };
  }

  buildChart() {
    const config = {
      type: 'bar',
      data: {
        labels: new Array(this.props.data.length).fill(''),
        borderSkipped: true,
        datasets: [
          {
            data: this.props.data,
            backgroundColor: ctx =>
              ctx.raw && ctx.raw.o <= ctx.raw.c ? '#16C782' : '#EA3943',
            barPercentage: 0.8
          }
        ]
      },
      options: {
        responsive: true,
        parsing: {
          xAxisKey: 'x',
          yAxisKey: 's'
        },
        scales: {
          valueScale: {
            offset: true,
            min: Math.min(...this.props.data.map(item => item.l)),
            max: Math.max(...this.props.data.map(item => item.h)),
            border: {
              color: this.props.theme.colors.primary,
              width: 2
            },
            ticks: {
              callback: () => ''
            },
            position: 'left',
            axis: 'y',
            title: {
              display: true,
              text: 'Value',
              align: 'end',
              padding: 0,
              color: this.props.theme.colors.primary,
              font: {
                size: 16
              }
            }
          },
          y: {
            grid: {
              color: 'rgba(160, 160, 160, 0.3)'
            },
            min: Math.min(...this.props.data.map(item => item.l)),
            max: Math.max(...this.props.data.map(item => item.h)),
            offset: true,
            position: 'right',
            ticks: {
              color: this.props.theme.colors.primary,
              font: {
                size: 12
              },
              padding: 15
            }
          },
          x: {
            grid: {
              color: 'rgba(160, 160, 160, 0.3)'
            },
            type: 'linear',
            ticks: {
              callback: () => '',
              maxTicksLimit: 20,
              padding: -21
            },
            offset: true,
            border: {
              color: this.props.theme.colors.primary,
              width: 2,
              padding: 30
            },
            title: {
              display: true,
              text: 'Day',
              align: 'end',
              padding: 0,
              color: this.props.theme.colors.primary,
              font: {
                size: 16
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: chartTooltip
        }
      },
      plugins: this.props.data.length
        ? [candlestick(this.props.theme), crosshairLabel(this.props.theme)]
        : []
    };

    const ctx = document.getElementById('currencyChart');

    this.chart = new Chart(ctx, config);
  }

  clearChart() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.clearChart();
    this.buildChart();
  }

  componentWillUnmount() {
    this.clearChart();
  }

  render() {
    return <canvas id="currencyChart"></canvas>;
  }
}

export default withTheme(CurrencyChart);
