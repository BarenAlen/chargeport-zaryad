import axios from "axios";
import Inputmask from "inputmask";
import JustValidate from "just-validate";

const orderCallback = () => {
    const form = document.querySelector('#callback-form')
    const inputPhone = form.querySelector('#callback_phone')
    const phoneMask = new Inputmask("+7 (999) 999-99-99");

    phoneMask.mask(inputPhone)

    const validation = new JustValidate("#callback-form", {
        errorFieldCssClass: "error",
    });

    validation
        .addField("#callback_phone", [
            {
                rule: "required",
                errorMessage: "Необходимо ввести Телефон.",
            },
            {
                validator: (value) => {
                    return !value.includes("_");
                },
                errorMessage: "Неверный номер телефона.",
            },
        ])
        .addField("#callback_username", [
            {
                rule: "required",
                errorMessage: "Необходимо ввести Имя.",
            }
        ])
        .onSuccess((e) => {
            axios({
                method: "get",
                url: "https://chargeport.ru/ajax.php",
                params: {
                    action: "send_mail",
                    "callback_phone": document.querySelector("#callback_phone").value,
                    "callback_username": document.querySelector("#callback_username").value,
                },
            })
            .then((res) => {
                document.body.classList.remove('overflow-hidden')
                document.querySelector('.form-modal').classList.remove('opened')
                alert("Спасибо за ваше обращение!\nЗаявка отправлена, мы свяжемся с вами в ближайшее время.")
            })
            .catch((error) => {
                console.error(error)
                // document.body.classList.remove('overflow-hidden')
                // document.querySelector('.form-modal').classList.remove('opened')
                alert("Ошибка при отправке данных, повторите попытку позже.")
            });
        })
}

export default orderCallback;