import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import type { Venda } from "../contexts/DataContext";

type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};


function transformData(data: Venda[]): VendaDia[] {
  const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const dia = item.data.split(" ")[0];
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(dias).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }));
}

const GraficoVendas = ({ data }: { data: Venda[] }) => {
  const transformedData = transformData(data);

  return (
    <div>
      <ResponsiveContainer height={400} width={"100%"}>
        <LineChart
          style={{
            aspectRatio: 1.618,
            maxWidth: 800,
            margin: "auto",
          }}
          responsive
          data={transformedData}
        >
          <XAxis dataKey="data" />
          <YAxis />
          <Line
            type="monotone"
            dataKey="pago"
            stroke="#31c713"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="processando"
            stroke="#0955f8"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="falha"
            stroke="#ff1908"
            strokeWidth={3}
          />
          <Legend position="insideTopRight" offset={20} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoVendas;
