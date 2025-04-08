import React, { useState } from "react";
import { Card } from "react-bootstrap";
import TransactionForm from "../components/Transaction/TransactionForm";
import TransactionSummary from "../components/Transaction/TransactionSummary";

const INITIAL_FORM_STATE = {
  cpfCnpj: "",
  name: "",
  bank: "",
  agency: "",
  account: "",
  key: "",
  amount: "",
  date: "",
  password: "",
};

const Transaction = () => {
  const [transactionType, setTransactionType] = useState("PIX");
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [showSummary, setShowSummary] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [balance] = useState(5000); // valor simulado

  const handleChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowSummary(true);
    }, 2000);
  };

  const handleClose = () => setShowSummary(false);

  return (
    <>
      <Card
        className="p-4 mt-4 m-5"
        style={{
          borderRadius: "30px",
        }}
      >
        <h4>Realizar Transferência ({transactionType})</h4>
        <div className="mb-3">
          <strong>Saldo atual: R$ {balance.toFixed(2)}</strong>
        </div>

        <TransactionForm
          transactionType={transactionType}
          setTransactionType={setTransactionType}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </Card>

      <TransactionSummary
        show={showSummary}
        handleClose={handleClose}
        formData={formData}
        transactionType={transactionType}
      />
    </>
  );
};

export default Transaction;
