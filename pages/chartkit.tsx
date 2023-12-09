import Layout from "../components/layout";

import ChartKit, { settings } from "@gravity-ui/chartkit";
import { YagrWidgetData } from "@gravity-ui/chartkit/yagr";
import { YagrPlugin } from '@gravity-ui/chartkit/yagr';

settings.set({ plugins: [YagrPlugin] });

const testData: YagrWidgetData = {
  data: {
    timeline: [
      1636838612441, 1636925012441, 1637011412441, 1637097812441, 1637184212441, 1637270612441,
      1637357012441, 1637443412441, 1637529812441, 1637616212441,
    ],
    graphs: [
      {
        id: '0',
        name: 'Serie 1',
        color: '#6c59c2',
        data: [25, 52, 89, 72, 39, 49, 82, 59, 36, 5],
      },
      {
        id: '1',
        name: 'Serie 2',
        color: '#6e8188',
        data: [37, 6, 51, 10, 65, 35, 72, 0, 94, 54],
      },
    ],
  },
  libraryConfig: {
    chart: {
      series: {
        type: 'line',
      },
    },
    title: {
      text: 'line: random 10 pts',
    },
  },
};

export default function ChartKitPage() {
  return (
    <Layout>
      <div className="app" style={{ height: 500 }}>
        <ChartKit type="yagr" data={testData} />
      </div>
    </Layout>
  )
}