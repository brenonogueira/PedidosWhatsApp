import { Button, Form, FormGroup, Label, Input, Row, Col, Jumbotron, Container } from 'reactstrap';
import { useFormik } from "formik";
import { useState } from 'react';

export function Pedidos() {

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState(0)
  const [rua, setRua] = useState('')
  const [bairro, setBairro] = useState('')
  const [ncasa, setNcasa] = useState(0)

  //adicionando campos do formulario a constante formik
  const formik = useFormik({
    initialValues: {
      nome: '',
      telefone: '',
      rua: '',
      bairro: '',
      ncasa: '',
    },
    onSubmit: values => {
      setNome(values.nome)
      setRua(values.rua)
      setBairro(values.bairro)
      setTelefone(Number(values.telefone))
      setNcasa(Number(values.ncasa))

      // alert(JSON.stringify(values));
    },
  });

  function sendMessage() {
    const apiWhats = 'https://api.whatsapp.com/send';

    let text = `##### SOLICITANDO PEDIDO!! #####\n
      nome: ${nome}
    ********************************************************************************************************************************  \n
    telefone: ${telefone}
    ********************************************************************************************************************************  \n
    Endereço: Rua ${rua}, Bairro ${bairro}, Nº ${ncasa}
    ********************************************************************************************************************************  \n
    `
    
    text = window.encodeURIComponent(text)
    
    console.log(text)
    let url = `${apiWhats}?phone=55${telefone}&text=${text}`

    window.open(url, '_blank')
  }

  return (
    <Container style={{ justifyContent: 'center', border: '1px solid black', marginTop: 50 }}>
      <h1 style={{textAlign: 'center'}}>PEDIDOS PARA WHATASPP</h1>
      <Jumbotron style={{ borderRadius: 1, marginTop: 20, marginBottom: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup style={{marginBottom: 10}}>
            <Label for="exampleEmail">Nome</Label>
            <Input type="text" placeholder="Informe o seu nome" {...formik.getFieldProps('nome')} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Número para contato (WhatsApp)</Label>
            <Input type="number" placeholder="DDD+Número" {...formik.getFieldProps('telefone')} />
          </FormGroup>
      <br/>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">Rua</Label>
                <Input type="text"  placeholder="Informe sua rua" {...formik.getFieldProps('rua')}/>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">Bairro</Label>
                <Input type="text"  placeholder="Informe o seu bairro" {...formik.getFieldProps('bairro')} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Número </Label>
                <Input type="number" placeholder="Nº casa" {...formik.getFieldProps('ncasa')}/>
              </FormGroup>
            </Col>
          </Row>

          <br />
          <Button
            type="submit"
            onClick={sendMessage}
          >
            Fazer Pedido
          </Button>
          {/* <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
        </Label>
      </FormGroup> */}<br />
        </Form>
      </Jumbotron>
    </Container>
  )

}