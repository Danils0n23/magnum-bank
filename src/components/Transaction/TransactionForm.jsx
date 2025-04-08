import React from "react";
import { Form, Row, Col, Spinner } from "react-bootstrap";
import "./TransactionForm.css";

const Field = ({ id, type, name, placeholder, value, onChange }) => (
  <Form.Floating className="mb-3">
    <Form.Control
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
    <label htmlFor={id}>{placeholder}</label>
  </Form.Floating>
);

const TransactionForm = ({
  transactionType,
  setTransactionType,
  formData,
  handleChange,
  handleSubmit,
  isLoading,
}) => {
  const renderFieldRow = (fields) => (
    <Row>
      {fields.map((field, idx) => (
        <Col key={field.id} md={field.md || 12}>
          <Field
            {...field}
            value={formData[field.name]}
            onChange={handleChange}
          />
        </Col>
      ))}
    </Row>
  );

  const renderPixFields = () =>
    renderFieldRow([
      { id: "key", type: "text", name: "key", placeholder: "Chave PIX" },
    ]);

  const renderTedFields = () => (
    <>
      {renderFieldRow([
        { id: "bank", type: "text", name: "bank", placeholder: "Banco" },
      ])}
      {renderFieldRow([
        {
          id: "agency",
          type: "text",
          name: "agency",
          placeholder: "Agência",
          md: 6,
        },
        {
          id: "account",
          type: "text",
          name: "account",
          placeholder: "Conta",
          md: 6,
        },
      ])}
    </>
  );

  return (
    <Form onSubmit={handleSubmit} className="transaction-form p-3">
      <div className="form-section mb-4">
        <h5 className="form-title">Tipo de Transferência</h5>
        <Row>
          {["PIX", "TED"].map((type) => (
            <Col key={type} xs={6}>
              <Form.Check
                type="radio"
                label={type}
                name="transactionType"
                value={type}
                checked={transactionType === type}
                onChange={() => setTransactionType(type)}
                className="custom-radio"
              />
            </Col>
          ))}
        </Row>
      </div>

      <div className="form-section">
        {renderFieldRow([
          {
            id: "cpfCnpj",
            type: "text",
            name: "cpfCnpj",
            placeholder: "CPF/CNPJ",
            md: 6,
          },
          {
            id: "name",
            type: "text",
            name: "name",
            placeholder: "Nome do favorecido",
            md: 6,
          },
        ])}

        {transactionType === "PIX" ? renderPixFields() : renderTedFields()}

        {renderFieldRow([
          {
            id: "amount",
            type: "number",
            name: "amount",
            placeholder: "Valor",
            md: 6,
          },
          {
            id: "date",
            type: "date",
            name: "date",
            placeholder: "Data da transferência",
            md: 6,
          },
        ])}

        {renderFieldRow([
          {
            id: "password",
            type: "password",
            name: "password",
            placeholder: "Senha de transação",
          },
        ])}
      </div>

      <div className="text-end mt-4">
        <button
          className="btn btn-success btn-lg px-4"
          type="submit"
          disabled={isLoading}
          aria-busy={isLoading}
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
