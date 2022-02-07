import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Form } from "reactstrap";
import { IMahonCard } from "../../interfaces/components/IMahonCard";

const MahonCard = ({
  renderHeader,
  renderBody,
  renderFooter,
  onSubmitHandler,
}: IMahonCard) => {
  return (
    <Card>
      {renderHeader && (
        <CardHeader className="card-background-custom">
          {renderHeader()}
        </CardHeader>
      )}
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler && onSubmitHandler();
        }}
      >
        {renderBody && <CardBody>{renderBody()}</CardBody>}
        {renderFooter && (
          <CardFooter className="card-background-custom">
            {renderFooter()}
          </CardFooter>
        )}
      </Form>
    </Card>
  );
};

export { MahonCard };
