import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const TransactionSummary = ({
  show,
  handleClose,
  formData,
  transactionType,
}) => {
  const renderSummaryDetails = () => (
    <ul>
      <li>
        <strong>Nome:</strong> {formData.name}
      </li>
      <li>
        <strong>CPF/CNPJ:</strong> {formData.cpfCnpj}
      </li>

      {transactionType === "PIX" ? (
        <li>
          <strong>Chave PIX:</strong> {formData.key}
        </li>
      ) : (
        <>
          <li>
            <strong>Banco:</strong> {formData.bank}
          </li>
          <li>
            <strong>Agência:</strong> {formData.agency}
          </li>
          <li>
            <strong>Conta:</strong> {formData.account}
          </li>
        </>
      )}

      <li>
        <strong>Valor:</strong> R$ {parseFloat(formData.amount || 0).toFixed(2)}
      </li>
      <li>
        <strong>Data:</strong> {formData.date}
      </li>
    </ul>
  );

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Transferência Realizada</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center mb-3">
          <FaCheckCircle size={50} color="green" />
          <h5 className="mt-3">Resumo da Transferência ({transactionType})</h5>
        </div>
        {renderSummaryDetails()}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TransactionSummary;
