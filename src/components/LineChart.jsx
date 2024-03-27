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

const plotOptions = {
  series: {
    pointStart: 1,
  },
};

export const LineChart = ({ data }) => {
  return (
    <HighchartsProvider Highcharts={Highcharts}>
      <HighchartsChart plotOptions={plotOptions}>
        <Chart />

        <Title></Title>

        <Subtitle></Subtitle>

        <Legend layout="vertical" align="right" verticalAlign="middle" />

        <XAxis>
          <XAxis.Title>День</XAxis.Title>
        </XAxis>

        <YAxis>
          <YAxis.Title>Сумма, руб</YAxis.Title>
          <LineSeries name="Installation" data={data} />
        </YAxis>
      </HighchartsChart>
    </HighchartsProvider>
  );
};
