import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import Widget from "../Widgetes/Widget";
import { FaArrowUp, FaArrowDown, FaChartLine } from "react-icons/fa";

const transactions = [
  { id: 1, description: "Depósito", amount: 1200.0, date: "2025-04-05" },
  { id: 2, description: "Supermercado", amount: -250.35, date: "2025-04-04" },
  {
    id: 3,
    description: "Transferência Recebida",
    amount: 500.0,
    date: "2025-04-03",
  },
  {
    id: 4,
    description: "Pagamento Boleto",
    amount: -320.0,
    date: "2025-04-02",
  },
];

const lineData = [
  { date: "01/04", saldo: 42000 },
  { date: "02/04", saldo: 42450 },
  { date: "03/04", saldo: 42900 },
  { date: "04/04", saldo: 43120 },
  { date: "05/04", saldo: 45234 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff6b6b"];
const pieData = [
  { name: "Alimentação", value: 400 },
  { name: "Transporte", value: 300 },
  { name: "Lazer", value: 300 },
  { name: "Contas", value: 200 },
];

const DashboardContent = () => {
  const metaFinanceira = 60000;
  const dataConclusaoEstimada = "30/06/2025";

  const [transactions, setTransactions] = useState([
    { id: 1, description: "Depósito", amount: 1200.0, date: "2025-04-05" },
    { id: 2, description: "Supermercado", amount: -250.35, date: "2025-04-04" },
    {
      id: 3,
      description: "Transferência Recebida",
      amount: 500.0,
      date: "2025-04-03",
    },
    {
      id: 4,
      description: "Pagamento Boleto",
      amount: -320.0,
      date: "2025-04-02",
    },
  ]);

  const [lineData, setLineData] = useState([
    { date: "01/04", saldo: 42000 },
    { date: "02/04", saldo: 42450 },
    { date: "03/04", saldo: 42900 },
    { date: "04/04", saldo: 43120 },
    { date: "05/04", saldo: 45234 },
  ]);

  const saldoAtual = lineData[lineData.length - 1].saldo;
  const valorAcumulado = saldoAtual - 37934;
  const progressoMeta = Math.min((saldoAtual / metaFinanceira) * 100, 100);

  const totalEntradas = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const totalSaidas = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const totalTransactions = transactions.length;
  useEffect(() => {
    const interval = setInterval(() => {
      const randomValue = parseFloat((Math.random() * 1000).toFixed(2));
      const isEntry = Math.random() > 0.5;
      const newTransaction = {
        id: Date.now(),
        description: isEntry ? "Entrada Aleatória" : "Saída Aleatória",
        amount: isEntry ? randomValue : -randomValue,
        date: new Date().toLocaleDateString("pt-BR"),
      };

      setTransactions((prev) => {
        const updated = [newTransaction, ...prev];
        return updated.slice(0, 4);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      {/* Widgets principais */}
      <div className="row mb-4">
        <div className="col-lg-6 col-md-12 mb-3">
          <Widget
            title="Saldo Atual"
            value={`R$ ${saldoAtual.toLocaleString("pt-BR")}`}
            color="#007bff"
          />
        </div>
        <div className="col-lg-6 col-md-12 mb-3">
          <Widget
            title="Despesas Totais"
            value={`R$ ${Math.abs(totalSaidas).toLocaleString("pt-BR")}`}
            color="#dc3545"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm text-success">
            <h6>
              <FaArrowUp /> Entradas
            </h6>
            <h4>R$ {totalEntradas.toLocaleString("pt-BR")}</h4>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm text-danger">
            <h6>
              <FaArrowDown /> Saídas
            </h6>
            <h4>R$ {Math.abs(totalSaidas).toLocaleString("pt-BR")}</h4>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm text-dark">
            <h6>🔁 Total de Transações</h6>
            <h4>{totalTransactions}</h4>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card p-3 mb-4 shadow-sm h-100">
            <h6 className="mb-3">🧾 Transações Recentes</h6>
            <ul className="list-group list-group-flush">
              {transactions.map((tx) => (
                <li
                  key={tx.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{tx.description}</strong>
                    <div className="text-muted small">{tx.date}</div>
                  </div>
                  <div
                    className={`fw-bold ${
                      tx.amount < 0 ? "text-danger" : "text-success"
                    }`}
                  >
                    {tx.amount < 0 ? <FaArrowDown /> : <FaArrowUp />} R${" "}
                    {Math.abs(tx.amount).toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card p-4 mb-4 shadow-sm h-100">
            <h6 className="mb-3">📊 Gráfico de Despesas</h6>
            <div style={{ height: "200px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={70}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="card p-3 mb-4 shadow-sm">
              <h6 className="mb-3">
                <FaChartLine /> Evolução do Saldo
              </h6>
              <div style={{ height: "250px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="saldo"
                      stroke="#007bff"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card p-4 shadow-sm h-100">
              <h6 className="mb-3 fs-6">🎯 Progresso da Meta</h6>

              <p className="text-muted mb-1">
                Meta:{" "}
                <strong>R$ {metaFinanceira.toLocaleString("pt-BR")}</strong>
              </p>
              <p className="text-muted mb-2">
                Acumulado:{" "}
                <strong>R$ {valorAcumulado.toLocaleString("pt-BR")}</strong>
              </p>

              <div
                className="progress mb-3"
                style={{ height: "24px", fontSize: "0.9rem" }}
              >
                <div
                  className={`progress-bar ${
                    progressoMeta >= 100 ? "bg-primary" : "bg-success"
                  } fw-semibold d-flex align-items-center justify-content-center`}
                  role="progressbar"
                  style={{
                    width: `${Math.min(progressoMeta, 100)}%`,
                    transition: "width 0.6s ease-in-out",
                  }}
                >
                  {Math.round(progressoMeta)}%
                </div>
              </div>

              <span
                className={`badge ${
                  progressoMeta >= 100 ? "bg-primary" : "bg-warning text-dark"
                } mb-2`}
              >
                {progressoMeta >= 100 ? "Meta concluída!" : "Em andamento"}
              </span>

              <p className="text-muted small">
                Estimativa de conclusão:{" "}
                <strong>{dataConclusaoEstimada}</strong>
              </p>

              <p
                className="mt-2 text-secondary"
                style={{ fontSize: "0.875rem" }}
              >
                Continue focado! Você está a caminho de atingir sua meta. 💪
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
