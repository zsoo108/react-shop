import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Nav, Alert } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import TabContent from '../components/TabContent';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';

const Box = styled.div`
  padding: 20px;
  color: gray;
`

const YellowBtn = styled.button`
  color: white;
  font-size: 30px;
  width: 100%;
  padding: 100px;
  border: 1px solid #ccc;
  background-image: url(https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1179&auto=format&fit=crop);
  background-size: cover;
  background-position: center;
`

const Detail = (props) => {

  const { shoes } = props;
  const { id } = useParams();

  let selproduct = shoes.find(x => x.id == id);

  const [tab, setTab] = useState(0);
  const [alert, setAlert] = useState(true);
  const [show, setShow] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const moveCart = () => {
    dispatch(addItem({
      id: selproduct.id,
      imgUrl: selproduct.imgUrl,
      item: selproduct.title,
      price: selproduct.price,
      amount: 1
    }));

    if (window.confirm('장바구니로 이동하시겠습니까?')) {
      navigate('/cart');
    }
  }

  useEffect(() => {
    const alertTimer = setTimeout(() => {
      setAlert(false);
    }, 2000);

    const showTimer = setTimeout(() => {
      setShow('end');
    }, 50);

    return () => {
      clearTimeout(alertTimer);
      clearTimeout(showTimer);
      setShow('');
    }
  }, []);

  return (
    <Container className={`start ${show}`}>
      {
        alert === true
          ? <Alert variant='warning'>2초 이내 구매시 할인</Alert>
          : null
      }

      <Box>
        <YellowBtn>지금 구매하면 10% 할인</YellowBtn>
      </Box>

      <Row>
        <Col md={6}>
          <img
            src={import.meta.env.BASE_URL + selproduct.imgUrl.replace(/^\/+/, '')}
            width="100%"
            alt="shoes"
          />
        </Col>

        <Col md={6}>
          <h4 className='pt-5'>{selproduct.title}</h4>
          <p>{selproduct.content}</p>
          <p>{selproduct.price}</p>

          <Button variant="success" onClick={moveCart}>
            장바구니
          </Button>
        </Col>
      </Row>

      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => { setTab(0) }}>
            탭0
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => { setTab(1) }}>
            탭1
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => { setTab(2) }}>
            탭2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab} />

    </Container>
  )
}

export default Detail;