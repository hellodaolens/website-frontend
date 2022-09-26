import { useState } from 'react';
import styled from 'styled-components';
import bannerBcg from '../../public/assets/content/banner-bcg.png';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Modal = ({
  isModalOpen,
  setIsModalOpen,
  modalHeading,
  modalPara,
  inputBoxFieldName1,
  inputBoxFieldName2,
  inputBoxFieldName3,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email) {
      toast.error('Please enter all the details', {
        position: 'top-center',
        autoClose: 5000,
        closeOnClick: true,
      });
    } else {
      try {
        const response = await fetch(
          `https://api.mailmodo.com/api/v1/addToList`,
          {
            method: 'POST',
            headers: {
              mmApiKey: '0KTN04A-GKMMYZ4-N5H45E1-MMJ01TC',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              data: {
                first_name: firstName,
                last_name: lastName,
              },
              listName: 'My Emails',
            }),
          }
        );
        toast.success("Thank you for submitting, you'll receive it soon!", {
          position: 'top-center',
          autoClose: 5000,
          closeOnClick: true,
        });
        console.log('Completed!', response);
      } catch (err) {
        toast.error(err, {
          position: 'top-center',
          autoClose: 5000,
          closeOnClick: true,
        });
        console.error(`Error: ${err}`);
      }
      closeModal();
      setFirstName('');
      setLastName('');
      setEmail('');
    }
  };

  return (
    <Container>
      <div
        className={`${
          isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}
      >
        <div className="modal-container">
          <h3>{modalHeading}</h3>
          {modalPara && <p>{modalPara}</p>}
          <FormContainer
            method="post"
            action="https://api.mailmodo.com/api/v1/addToList"
            onSubmit={onSubmit}
          >
            <article>
              <div className="form-control">
                <label htmlFor="firstName">{inputBoxFieldName1}</label>
                <input
                  type="text"
                  id="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label htmlFor="lastName">{inputBoxFieldName2}</label>
                <input
                  type="text"
                  id="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </article>

            <div className="form-control">
              <label htmlFor="email">{inputBoxFieldName3}</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button type="submit" className="btn">
              Submit
            </button>
          </FormContainer>

          <button className="close-modal-btn" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
      </div>
    </Container>
  );
};

export const Container = styled.aside`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.65);
    display: grid;
    place-items: center;
    transition: var(--transition);
    visibility: hidden;
    z-index: -1;
  }

  /* OPEN/CLOSE MODAL */
  .show-modal {
    visibility: visible;
    z-index: 10;
  }
  .modal-container {
    background: url(${bannerBcg.src}) center/cover no-repeat;
    border-radius: var(--radius);
    width: 90vw;
    min-height: 50vh;
    max-width: var(--fixedWidth);
    text-align: center;
    display: grid;
    place-items: center;
    position: relative;
    border-radius: 0.5rem;
    padding: 2rem 4rem;
    @media (max-width: 492px) {
      padding: 1.5rem;
    }
  }

  .close-modal-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: red;
    cursor: pointer;
  }

  h3 {
    margin-bottom: 0;
  }
`;

export const FormContainer = styled.form`
  text-align: left;
  max-width: 692px;
  margin: 0 auto;
  border-radius: var(--borderRadius);

  .form-control {
    margin: 1rem 0;

    label {
      text-transform: capitalize;
      color: var(--clr-white);
    }
    input {
      margin-top: 0.25rem;
      width: 100%;
      padding: 0.75rem;
      outline: 0;
      border-radius: var(--borderRadius);
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(100px);
      border: 1px solid transparent;
      background: linear-gradient(to right, #2e1d3c, #2e1d3c),
        linear-gradient(to right, #5fb5fc, #844aff, #df52ff);
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
      color: var(--clr-white);

      &::placeholder {
        color: var(--clr-white);
      }
    }
  }

  article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    @media (max-width: 492px) {
      grid-template-columns: 1fr;
    }

    .form-control {
      margin: 0;
    }
  }

  .btn {
    margin-top: 2rem;
  }
`;

export default Modal;
