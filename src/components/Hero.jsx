import { Fragment } from "react";
import { personal, address } from "../data/data";
import {
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardText,
  FormGroup,
  Col,
  Input,
  Row,
  Label,
  Alert,
} from "reactstrap";

export const Hero = () => {
  return (
    <Fragment>
      <Card>
        <CardHeader>
          <div className="d-flex">
            <CardImg
              src="https://avatars.githubusercontent.com/u/54125783?v=4"
              alt="Foto de perfil"
              style={{ width: 50 }}
            />
            <h3 className="text-primary m-2">My profile</h3>
          </div>

          {personal ? (
            <FormGroup className="align-items-center justify-content-around">
              <Col>
                <Label className="mt-2">Nome</Label>
                <span className="m-3">{personal.name}</span>
              </Col>
              <Col>
                <Label className="mt-2">Idade</Label>
                <span className="m-3">{personal.age}</span>
              </Col>
              <Col>
                <Label className="mt-2">Profissão</Label>
                <span className="m-3">{personal.profession}</span>
              </Col>
              <Col>
                <Label className="mt-2">Área</Label>
                <span className="m-3">{personal.area}</span>
              </Col>
            </FormGroup>
          ) : (
            <Alert>Sem dados para exibir!</Alert>
          )}
        </CardHeader>
        <CardBody></CardBody>
      </Card>
    </Fragment>
  );
};
export default Hero;
