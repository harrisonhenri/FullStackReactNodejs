export default emails => {
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const invalidArray = emails
        .split(",")
        .map(email => email.trim())
        .filter(email => regex.test(email) === false);

    if (invalidArray.length) {
        return `These emails are invalid: ${invalidArray}`;
    }
};
