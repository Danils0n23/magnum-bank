import React from "react";
import { Form, Row, Col, Spinner } from "react-bootstrap";

const TransactionForm = ({
  transactionType,
  setTransactionType,
  formData,
  handleChange,
  handleSubmit,
  isLoading,
}) => {
  const renderPixFields = () => (
    <Row>
      <Col md={12}>
        <Form.Floating className="mb-3">
          <Form.Control
            id="key"
            type="text"
            name="key"
            placeholder="Chave PIX"
            value={formData.key}
            onChange={handleChange}
            required
          />
        </Form.Floating>
      </Col>
    </Row>
  );

  const renderTedFields = () => (
    <>
      <Row>
        <Col md={12}>
          <Form.Floating className="mb-3">
            <Form.Control
              id="bank"
              type="text"
              name="bank"
              placeholder="Banco"
              value={formData.bank}
              onChange={handleChange}
              required
            />
          </Form.Floating>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Floating className="mb-3">
            <Form.Control
              id="agency"
              type="text"
              name="agency"
              placeholder="Agência"
              value={formData.agency}
              onChange={handleChange}
              required
            />
          </Form.Floating>
        </Col>
        <Col md={6}>
          <Form.Floating className="mb-3">
            <Form.Control
              id="account"
              type="text"
              name="account"
              placeholder="Conta"
              value={formData.account}
              onChange={handleChange}
              required
            />
          </Form.Floating>
        </Col>
      </Row>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        {["PIX", "TED"].map((type) => (
          <Col key={type} xs={6}>
            <Form.Check
              type="radio"
              label={type}
              name="transactionType"
              value={type}
              checked={transactionType === type}
              onChange={() => setTransactionType(type)}
            />
          </Col>
        ))}
      </Row>

      <Row>
        <Col md={6}>
          <Form.Floating className="mb-3">
            <Form.Control
              id="cpfCnpj"
              type="text"
              name="cpfCnpj"
              placeholder="CPF/CNPJ"
              value={formData.cpfCnpj}
              onChange={handleChange}
              required
            />
          </Form.Floating>
        </Col>
        <Col md={6}>
          <Form.Floating className="mb-3">
            <Form.Control
              id="name"
              type="text"
              name="name"
              placeholder="Nome do favorecido"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Floating>
        </Col>
      </Row>

      {transactionType === "PIX" ? renderPixFields() : renderTedFields()}

      <Row>
        <Col md={6}>
          <Form.Floating className="mb-3">
            <Form.Control
              id="amount"
              type="number"
              name="amount"
              placeholder="Valor"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </Form.Floating>
        </Col>
        <Col md={6}>
          <Form.Floating className="mb-3">
            <Form.Control
              id="date"
              type="date"
              name="date"
              placeholder="Data da transferência"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </Form.Floating>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Form.Floating className="mb-4">
            <Form.Control
              id="password"
              type="password"
              name="password"
              placeholder="Senha de transação"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Floating>
        </Col>
      </Row>
      <div className="flex">
        <button
          className="btn btn-primary"
          variant="primary"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Spinner animation="border" size="sm" className="me-2" />
              Processando...
            </>
          ) : (
            "Confirmar Transferência"
          )}
        </button>
      </div>
    </Form>
  );
};

export default TransactionForm;
