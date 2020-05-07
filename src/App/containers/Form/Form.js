import React, { Component, Fragment } from "react";
import FormRadio from "../../components/FormRadio/FormRadio";
import FormFile from "../../components/FormFile/FormFile";
import FormInputs from "../../components/FormInputs/FormInputs";
import CompletedMessage from "../../components/CompletedMessage/CompletedMessage";
import "./Form.scss";

const INPUTS_DATA = [
  {
    placeholder: "Your Name",
    onChangeName: `nameInputChange`,
    value: `name`,
    error: "nameError",
    paragraphValue: "Name",
  },
  {
    placeholder: "Your email",
    onChangeName: "emailInputChange",
    value: "email",
    error: "emailError",
    paragraphValue: "Email",
  },
  {
    placeholder: "+380 XX XXX XX XX",
    onChangeName: "phoneInputChange",
    value: "phone",
    error: "phoneError",
    paragraphValue: "Phone number",
    extraParagraphValue: "Enter number in open format",
  },
];

export default class Form extends Component {
  state = {
    positions: [],
    activePosition_id: 0,
    name: "",
    email: "",
    phone: "",
    photo: "Upload your photo",
    nameError: false,
    emailError: false,
    phoneError: false,
    photoError: false,
    radioError: false,
    completedMessage: false,
    completedMessageText: " You have succesfully passed the registration",
    completedMessageButton: "Great",
  };

  fileInputRef = React.createRef();

  componentDidMount() {
    // Загружаем Positions
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          positions: data.positions,
        })
      );
  }

  nameInputChange = ({ target: { value } }) => {
    this.setState({
      name: value,
    });
  };

  emailInputChange = ({ target: { value } }) => {
    this.setState({
      email: value,
    });
  };

  phoneInputChange = ({ target: { value } }) => {
    this.setState({
      phone: value,
    });
  };

  radioInputChange = (id) => {
    this.setState({
      activePosition_id: id,
    });
  };

  // Метод обновления стейта для дальнейшего вывода имени файла
  showPhotoName = () => {
    this.setState({
      photo: this.fileInputRef.current.files[0].name,
    });
  };

  //скрыть или показать сообщение об успешности регистрации
  changeVisibilityCompletedMessage = () => {
    this.setState(({ completedMessage }) => ({
      completedMessage: !completedMessage,
    }));
  };

  // Методы для стилизации input[type:text] при фокусе
  addInputClass = ({ target }) => {
    if (this.state[target.id + "Error"]) {
      target.classList.add("activeInputError");
    } else {
      target.classList.add("formActive");
    }
  };

  removeInputClass = ({ target }) => {
    if (this.state[target.id + "Error"]) {
      target.classList.remove("activeInputError");
    } else {
      target.classList.remove("formActive");
    }
  };

  // Управление классами при наведении и ошибке для input[type:file]

  addFileClass = (activeClass1, activeClass2) => {
    this.fileInputRef.current
      .closest(".formInputBlock")
      .querySelector(".formInputWrapper")
      .classList.add(activeClass1);

    this.fileInputRef.current
      .closest(".formInputBlock")
      .querySelector(".fileInputBlock")
      .classList.add(activeClass2);
  };

  removeFileClass = (activeClass1, activeClass2) => {
    this.fileInputRef.current
      .closest(".formInputBlock")
      .querySelector(".formInputWrapper")
      .classList.remove(activeClass1);

    this.fileInputRef.current
      .closest(".formInputBlock")
      .querySelector(".fileInputBlock")
      .classList.remove(activeClass2);
  };

  //Вызов методов валидации формы (validation()) и ее регистрации (registration())
  formSubmit = (e) => {
    e.preventDefault();

    let error = this.validation();
    if (error) return;

    this.registration();

    // Вызов метода перезагрузки Юзеров из props
  };

  // Метод для загрузки token и вызова метода PostData()
  registration = () => {
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token")
      .then((response) => response.json())
      .then((data) => {
        this.PostData(data.token);
      });
  };

  // Метод отправки формы на сервер
  PostData = (token) => {
    const { name, email, phone, activePosition_id } = this.state;
    let { reloadUsers, changeDisabledButton } = this.props;

    let formData = new FormData();

    let file = this.fileInputRef.current.files[0];
    formData.append("position_id", activePosition_id);
    formData.append("name", name.trim());
    formData.append("email", email.trim());
    formData.append("phone", phone.trim());
    formData.append("photo", file);

    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
      method: "POST",
      body: formData,
      headers: {
        Token: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          this.changeVisibilityCompletedMessage();
          this.setState({
            activePosition_id: 0,
            name: "",
            email: "",
            phone: "",
            photo: "Upload your photo",
            completedMessageText:
              " You have succesfully passed the registration",
            completedMessageButton: "Great",
          });

          //перезагружаем юзеров
          reloadUsers();

          //меняем стиль кнопкам
          changeDisabledButton();
        } else {
          console.log(data);
          this.setState({
            completedMessageText: `Error!    ${data.message}.`,
            completedMessageButton: "Ok",
          });
          this.changeVisibilityCompletedMessage();
        }
      })
      .catch((error) => error);
  };

  validation = () => {
    let validateEmail = (email) => {
      // eslint-disable-next-line no-control-regex
      var pattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
      return pattern.test(String(email).toLowerCase());
    };

    let validatePhone = (phone) => {
      var pattern = /^[+]{0,1}380([0-9]{9})$/;
      if (!pattern.test(String(phone.trim()))) {
        error = true;
        return false;
      }
      if (phone.trim().slice(0, 1) !== "+") {
        this.setState(({ phone }) => ({
          phone: "+" + phone,
        }));
      }
      return true;
    };

    let validatePhoto = (photo) => {
      if (!photo.endsWith(".jpg") && !photo.endsWith(".jpeg")) return false;
      return true;
    };

    const { name, email, phone, photo, activePosition_id } = this.state;

    this.setState({
      nameError: false,
      emailError: false,
      phoneError: false,
      photoError: false,
      radioError: false,
    });
    let error = false;

    if (name.trim().length < 2 || name.trim().length > 60) {
      error = true;

      this.setState({
        nameError: true,
      });
    }

    if (!validateEmail(email)) {
      error = true;

      this.setState({
        emailError: true,
      });
    }

    if (!validatePhone(phone)) {
      error = true;

      this.setState({
        phoneError: true,
      });
    }

    if (!validatePhoto(photo)) {
      error = true;

      this.setState({
        photoError: true,
      });
    }

    if (activePosition_id === 0) {
      error = true;

      this.setState({
        radioError: true,
      });
    }

    return error;
  };

  render() {
    const state = this.state;
    const {
      positions,
      activePosition_id,
      photo,
      photoError,
      completedMessage,
      radioError,
      completedMessageText,
      completedMessageButton,
    } = state;

    const { isDisabledButton } = this.props;

    return (
      <Fragment>
        {completedMessage && (
          <CompletedMessage
            onClick={this.changeVisibilityCompletedMessage}
            text={completedMessageText}
            buttonText={completedMessageButton}
          />
        )}
        <form className="form" onSubmit={this.formSubmit}>
          {/* InputTextComponents */}
          {INPUTS_DATA.map(
            ({
              placeholder,
              onChangeName,
              value,
              error,
              paragraphValue,
              extraParagraphValue,
            }) => (
              <FormInputs
                key={value}
                id={value}
                placeholder={placeholder}
                onChange={this[onChangeName]}
                value={state[value]}
                error={state[error]}
                paragraphValue={paragraphValue}
                extraParagraphValue={extraParagraphValue}
                onFocus={this.addInputClass}
                onBlur={this.removeInputClass}
              />
            )
          )}

          {/* InputRadioComponent */}
          <p className="positionPar">Select your position</p>
          {positions.map(({ id, name }) => (
            <FormRadio
              key={id}
              name={name}
              id={id}
              activePosition_id={activePosition_id}
              onChange={this.radioInputChange}
            />
          ))}
          {radioError && (
            <p
              className="formPar"
              style={{ color: "#ef5b4c", marginTop: "10px" }}
            >
              Error
            </p>
          )}

          {/* InputFileComponent */}
          <FormFile
            ref1={this.fileInputRef}
            photo={photo}
            photoError={photoError}
            onClick={this.addFileClass}
            onChangeMain={this.showPhotoName}
            onChangeRemove={this.removeFileClass}
          />
          {!isDisabledButton ? (
            <button className="formButton primaryLink" type="submit">
              <span>Sign up now</span>
            </button>
          ) : (
            <button
              className="formButton disabledLink"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <span>Sign up now</span>
            </button>
          )}
        </form>
      </Fragment>
    );
  }
}
