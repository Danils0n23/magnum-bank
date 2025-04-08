import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import "./TransactionForm.css";

const TransactionSummary = ({
  show,
  handleClose,
  formData = {},
  transactionType = "",
}) => {
  const formatCurrency = (value) =>
    `R$ ${parseFloat(value || 0)
      .toFixed(2)
      .replace(".", ",")}`;

  const renderPixDetails = () => (
    <DetailItem label="Chave PIX" value={formData.key} />
  );

  const renderBankDetails = () => (
    <>
      <DetailItem label="Banco" value={formData.bank} />
      <DetailItem label="Agência" value={formData.agency} />
      <DetailItem label="Conta" value={formData.account} />
    </>
  );

  const DetailItem = ({ label, value }) => (
    <div className="detail-item">
      <span className="label">{label}:</span>
      <span className="value">{value || "Não informado"}</span>
    </div>
  );

  return (
    <Modal show={show} onHide={handleClose} centered size="md">
      <Modal.Header closeButton className="border-0 pb-0" />
      <Modal.Body>
        <div className="summary-container text-center">
          <FaCheckCircle className="success-icon" />
          <h4 className="title">Transferência Realizada</h4>
          <p className="subtitle">
            Resumo da Transferência ({transactionType})
          </p>

          <div className="summary-details mt-4">
            <DetailItem label="Nome" value={formData.name} />
            <DetailItem label="CPF/CNPJ" value={formData.cpfCnpj} />
            {transactionType === "PIX"
              ? renderPixDetails()
              : renderBankDetails()}
            <DetailItem label="Valor" value={formatCurrency(formData.amount)} />
            <DetailItem label="Data" value={formData.date} />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0 pt-0">
        <Button variant="success" onClick={handleClose} className="px-4">
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TransactionSummary;
