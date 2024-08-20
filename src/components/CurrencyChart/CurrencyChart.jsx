import { Chart, registerables } from 'chart.js';
import { Component } from 'react';
import { withTheme } from 'styled-components';

import observable from '@/context/observable';
import { candlestick, crosshairLabel } from '@/utils/chartPlugins';
import chartTooltip from '@/utils/chartTooltip';
import getDataFromStorage from '@/utils/getDataFromStorage';

import { Canvas } from './styled';

Chart.register(...registerables);

class CurrencyChart extends Component {
  constructor() {
    super();
    this.chart = null;
    this.state = { data: [] };
    this.onDataChanged = this.onDataChanged.bind(this);
  }

  componentDidMount() {
    this.getData();
    observable.subscribe(this.onDataChanged);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currency !== this.props.currency) {
      this.getData();
    }
    if (!Object.is(this.state.data, prevState.data)) {
      this.clearChart();
      this.buildChart();
    }
  }

  componentWillUnmount() {
    this.clearChart();
    observable.unsubscribe(this.onDataChanged);
  }

  onDataChanged({ data }) {
    if (data.length === 30) {
      this.setState({ data });
    } else {
      this.setState({ data: [] });
    }
  }

  getData() {
    const data = getDataFromStorage(this.props.currency, {
      x: new Date(),
      o: 0,
      c: 0,
      l: 0,
      h: 0
    });
    this.setState({
      data: data.length === 30 ? data : []
    });
  }

  clearChart() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  buildChart() {
    const config = {
      type: 'bar',
      data: {
        labels: new Array(this.state.data.length).fill(''),
        borderSkipped: true,
        datasets: [
          {
            data: this.state.data,
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
            min: Math.min(...this.state.data.map(item => item.l)),
            max: Math.max(...this.state.data.map(item => item.h)),
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
            min: Math.min(...this.state.data.map(item => item.l)),
            max: Math.max(...this.state.data.map(item => item.h)),
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
      plugins: this.state.data.length
        ? [candlestick(this.props.theme), crosshairLabel(this.props.theme)]
        : []
    };

    const ctx = document.getElementById('currencyChart');

    this.chart = new Chart(ctx, config);
  }

  render() {
    return <Canvas id="currencyChart" />;
  }
}

export default withTheme(CurrencyChart);
