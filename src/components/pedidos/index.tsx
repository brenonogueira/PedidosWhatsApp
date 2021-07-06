import {
  Button, Form, FormGroup, Label, Input, Row, Col, Jumbotron, Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { useFormik } from "formik";
import { useState } from 'react';
import pizza from './pizza.jpg';

export function Pedidos() {

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState(0)
  const [rua, setRua] = useState('')
  const [bairro, setBairro] = useState('')
  const [ncasa, setNcasa] = useState(0)
  const [produto, setProduto] = useState('')
  const [pagamento, setPagamento] = useState('')

  //adicionando campos do formulario a constante formik
  const formik = useFormik({
    initialValues: {
      nome: '',
      telefone: '',
      rua: '',
      bairro: '',
      ncasa: '',
      produto: '',
      pagamento: '',
    },
    onSubmit: values => {
      setNome(values.nome)
      setRua(values.rua)
      setBairro(values.bairro)
      setProduto(values.produto)
      setPagamento(values.pagamento)
      setTelefone(Number(values.telefone))
      setNcasa(Number(values.ncasa))

      console.log(produto)
      console.log(pagamento)
      // alert(JSON.stringify(values));
    },
  });

  function sendMessage() {

    let text = `##### SOLICITANDO PEDIDO!! #####\n
    _______________________\n 
    Nome: ${nome}\n
    Telefone: ${telefone}\n
    Produto: ${produto}\n
    Forma de Pagamento: ${pagamento}\n
    Endereço: Rua ${rua}, Bairro ${bairro}, Nº ${ncasa}\n
    _______________________  
    
    `
    text = window.encodeURIComponent(text)

    console.log(text)
    const apiWhats = 'https://api.whatsapp.com/send';
    let url = `${apiWhats}?phone=55${telefone}&text=${text}`
    window.open(url, '_blank')
  }

  return (
    <>

      <Container md style={{ display: 'flex', border: '1px solid black', marginTop: 50 }}>
        <Col md={8} style={{ marginBottom: 20 }}>
          <Card style={{ marginTop: 20, width: '98%' }}>
            <img src={pizza} width="50%" alt="pizza" style={{}} />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card style={{ marginTop: 20, width: '98%' }}>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card style={{ marginTop: 20, width: '98%' }}>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>

        <Col md={4}>
          <Jumbotron style={{ borderRadius: 1, marginTop: 20, marginBottom: 20, display: 'flex' }}>
            <Form onSubmit={formik.handleSubmit}>
              <h3>Faça o seu pedido:</h3>
              <FormGroup style={{ marginBottom: 10 }}>
                <Label>Nome</Label>
                <Input type="text" placeholder="Informe o seu nome" {...formik.getFieldProps('nome')} />
              </FormGroup>
              <FormGroup>
                <Label>Número para contato (WhatsApp)</Label>
                <Input type="number" placeholder="DDD+Número" {...formik.getFieldProps('telefone')} />
              </FormGroup>    <br />
              <FormGroup>
                <Label>Selecione o produto que você deseja comprar</Label>
                <Input type="select" {...formik.getFieldProps('produto')} >
                  <option value="Trufa">Trufa</option>
                  <option value="Pão de Mel">Pão de Mel</option>
                  <option value="CupCake">Cupcake</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Selecione a forma de pagamento</Label>
                <Input type="select" {...formik.getFieldProps('pagamento')} >
                  <option value="Dinheiro">Dinheiro</option>
                  <option value="Cartão de crédito">Cartão de Crédito</option>
                  <option value="Cartão de Débito">Cartão de débito</option>
                  <option value="Pix">PIX</option>
                </Input>
              </FormGroup>
              <br />
              <Row>
                <h3>Endereço</h3>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleCity">Rua</Label>
                    <Input type="text" placeholder="Informe sua rua" {...formik.getFieldProps('rua')} />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleState">Bairro</Label>
                    <Input type="text" placeholder="Informe o seu bairro" {...formik.getFieldProps('bairro')} />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="exampleZip">Número </Label>
                    <Input type="number" placeholder="Nº casa" {...formik.getFieldProps('ncasa')} />
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
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10, color: 'blue' }}>Seu pedido será enviado para o WhatsApp do estabelecimento</div>

            </Form>
          </Jumbotron>
        </Col>


        {/* 

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

      </Container>
    </>
  )

}