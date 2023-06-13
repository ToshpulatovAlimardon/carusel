let isBookShopOpen = true;
// promese

let willIGetNewBook = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (isBookShopOpen) {
            let book = {
                title: "The BIG book knowege",
                outhor: "Brown Watson",
            };
            resolve(book);
        } else {
            let reason = new Error("Kitob do'koni yopiq");
            reject(reason);
        }
    }, 1500);
});

willIGetNewBook
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
