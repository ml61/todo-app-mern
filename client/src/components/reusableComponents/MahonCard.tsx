import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Collapse,
  Form,
} from "reactstrap";
import { IMahonCard } from "../../interfaces/components/IMahonCard";

const MahonCard = ({
  renderHeader,
  renderBody,
  renderFooter,
  onSubmitHandler,
  isNotCollapsable,
  className,
}: IMahonCard) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Card className={className}>
      {renderHeader && (
        <CardHeader
          className="card-background-custom cursor-pointer "
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          <div className="d-flex align-items-center">
            <span className="flex-grow-1">{renderHeader()}</span>
            {!isNotCollapsable && (
              <FontAwesomeIcon
                icon={isCollapsed ? faChevronDown : faChevronUp}
              />
            )}
          </div>
        </CardHeader>
      )}
      <Collapse isOpen={!isCollapsed}>
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
      </Collapse>
    </Card>
  );
};

export { MahonCard };
