import Highcharts from 'highcharts';
import {
  HighchartsProvider,
  HighchartsChart,
  Chart,
  XAxis,
  YAxis,
  Title,
  Subtitle,
  Legend,
  LineSeries,
} from 'react-jsx-highcharts';
import '../App.css';

export const LineChart = ({ data }) => {
  return (
    <div className="chart">
      <HighchartsProvider Highcharts={Highcharts}>
        <HighchartsChart>
          <Chart />

          <Title></Title>

          <Subtitle></Subtitle>

          <Legend layout="vertical" align="right" verticalAlign="middle" />

          <XAxis categories={['вчера', 'сегодня']}>
            <XAxis.Title>День</XAxis.Title>
          </XAxis>

          <YAxis>
            <YAxis.Title>Сумма, руб</YAxis.Title>
            <LineSeries name="Installation" data={data} />
          </YAxis>
        </HighchartsChart>
      </HighchartsProvider>
    </div>
  );
};
