// const cError = Object.create(null);

const cError = {
    typeError: undefined, // Тип ошибки
    message: undefined, // Клиентское сообщение которое будет записываться или логироваться
    statusHeader: undefined, // Статус запроса
    header: undefined, // Хедер запроса
    method: undefined, // Метод запроса
    model: undefined, // Модель с которой шла работа
    parentData: undefined, // Данные которые передовались через body


    set(typeError, message, statusHeader, handler, method, model, parentData) {
        this.typeError = typeError;
        this.message = message;
        this.statusHeader = statusHeader;
        this.handler = handler;
        this.method = method;
        this.model = model;
        this.parentData = parentData;

        this.get();
    },

    get() {
        console.log(
            this.typeError,
            this.message,
            this.statusHeader,
            this.handler,
            this.method,
            this.model,
            this.parentData,
        );
    },

}

module.exports.cError = cError;