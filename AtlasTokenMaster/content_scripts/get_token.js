(() => {
    let cookies = document.cookie.split(' ');
    let token = '';
    cookies.forEach(cookie => {
        cookie = cookie.split('=');
        if (cookie[0] === 'bearerToken'){
            token = cookie[1];
        }
    });

    navigator.clipboard.writeText(token);
})();
