const {createRootView} = require("./form-view/form-view");
const {createRootValidator} = require("./validator/validator");

const createForm = (validatorPtns, data, onChange) => {
    const rootValidator = createRootValidator(validatorPtns);

    if (onChange && onChange.hasOwnProperty("forceUpdate")) {
        const comp = onChange;
        onChange = () => comp.forceUpdate();
    }

    createRootView(rootValidator);


};

exports.createForm = createForm;