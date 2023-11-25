import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useCartContext } from '../Context/CartContext';
import { createOrder } from '../../firebase/firebaseServices';

const MySwal = withReactContent(Swal);
const Formulario = () => {
  const [user, setUser] = useState({});
  const { cart } = useCartContext();

  const handleInput = ({ target }) => {
    setUser((currentValue) => {
      currentValue[target.name] = target.value;
      return currentValue;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Lógica para enviar el pedido a la base de datos u otro servicio
      const buy = { cart, user };
      const order = await createOrder(buy);

      // Mostrar SweetAlert después de realizar la compra
      MySwal.fire({
        title: <h2>¡Gracias por tu compra!</h2>,
        didOpen: () => {
          MySwal.isLoading();
        },
      }).then(() => {
        MySwal.fire(<p>Tu codigo de orden es {order}</p>);
      });
    } catch (error) {
      console.error('Error al realizar la compra:', error);
      // Manejar el error, por ejemplo, mostrar otro SweetAlert
      MySwal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al procesar tu pedido. Por favor, inténtalo de nuevo.',
      });
    }
  };

  return (
    <div>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Ingrese su email"
            onChange={handleInput}

          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre y apellido</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Ingrese su nombre"
            onChange={handleInput}

          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            name="tel"
            placeholder="11-4455-5544"
            onChange={handleInput}

          />
        </Form.Group>
        <button className="btn btn-secondary w-100" type="submit">Realizar compra</button>
      </Form>
    </div>
  );
};

export default Formulario;
