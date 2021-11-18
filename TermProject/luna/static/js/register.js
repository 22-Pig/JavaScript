const frm = {
    iptUserName: null,
    iptPassword: null,
    pUserNameErr: null,
    pPasswordErr: null,
    iptContact: null,
    pContactErr: null,
    pFrmErr: null
};

function onLogin() {
    frm.pUserNameErr.innerText = '';
    frm.pPasswordErr.innerText = '';
    frm.pContactErr.innerText = '';
    frm.pFrmErr.innerText = '';
    //const userName = document.getElementById('userName');
    const userName = frm.iptUserName.value;
    console.log(userName);
    if (userName.trim().length <= 0) {
        frm.pUserNameErr.innerText = '用户名不能为空';
    } else if (userName.trim().length < 3) {
        frm.pUserNameErr.innerText = '用户名长度不能小于3';
    }

    const password = frm.iptPassword.value;
    if (password.trim().length <= 0) {
        frm.pPasswordErr.innerText = '密码不能为空';
    } else if (password.trim().length < 6) {
        frm.pPasswordErr.innerText = '密码长度不能小于6';
    }


    const contact = frm.iptContact.value;
    if (contact.trim().length <= 0) {
        frm.pContactErr.innerText = '联系方式不能为空';
    } else if (contact.trim().length < 6) {
        frm.pContactErr.innerText = '联系方式';
    }
}

function onFocusOrInput(evt) {
    const obj = evt.target;
    // frm.pFrmErr.innerText = '';
    var reg1 = /^(?:13\d|15\d|18[123456789])-?\d{5}(\d{3}|\*{3})$/;
    var reg2 = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (obj === frm.iptUserName) {
        frm.pUserNameErr.innerText = '';
        const userName = frm.iptUserName.value;
        console.log(userName);
        if (userName.trim().length <= 0) {
            frm.pUserNameErr.innerText = '用户名不能为空';
        } else if (userName.trim().length == 11) {
            if (!reg1.test(userName)) {
                frm.pUserNameErr.innerText = '用户名必须是手机号或email';
                console.log(!reg1.test(userName));
            }
        }
        else if (!reg2.test(userName)) {
            frm.pUserNameErr.innerText = '用户名必须是手机号或email';
            console.log(!reg2.test(userName));
        }
    }
}

function onFocusOrInput1(evt) {
    const obj = evt.target;
    // frm.pFrmErr.innerText = '';
    if (obj === frm.iptPassword) {
        frm.pPasswordErr.innerText = '';
        var rep3 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
        const password = frm.iptPassword.value;
        console.log(password);
        if (password.trim().length <= 0) {
            frm.pPasswordErr.innerText = '密码不能为空';
        } else if (password.trim().length < 6) {
            frm.pPasswordErr.innerText = '密码长度不能小于6';
        } else if (!rep3.test(password)) {
            console.log(rep3.test(password));
            frm.pPasswordErr.innerText = '必须包含数字、英文字母和特殊符号';
        }
    }
}

function onFocusOrInput2(evt) {
    const obj = evt.target;
    // frm.pFrmErr.innerText = '';
    if (obj === frm.iptContact) {
        frm.pContactErr.innerText = '';
        const contact = frm.iptContact.value;
        console.log(contact);
        if (contact.trim().length <= 0) {
            frm.pContactErr.innerText = '联系方式不能为空';
        } else if (!(/^1[34578]\d{9}$/.test(contact))) {
            frm.pContactErr.innerText = '联系方式有误，请重填';
        }
    }
}

function checkbox() {
    var val = document.getElementById('agree');
    console.log(val.checked);
    if (!val.checked) {
        alert("请先阅读并同意相关服务！");
    }
    else {
        register();
    }
}

function register() {
    let userName = $("#userName").val();
    let passWord = $("#password").val();
    let messAge = $("#contact").val();

    $.ajax({
        type: "post",
        url: "/register.do",
        data: {
            userName: userName,
            passWord: passWord,
            messAge: messAge
        },
        success(data) {
            console.log("register" + data);
            if (data) {
                console.log('success');
                window.location.href = '/page/shop.html';
            }
            else {
                console.log('defeat');
                window.location.href = '/page/user.html';
            }
        }
    })
}

window.onload = function () {
    const btnRegister = document.getElementById('btnRegister');
    btnRegister.addEventListener('click', function (evt) {
        // onLogin();
        checkbox();
        // register();
        evt.returnValue = false;
    });

    frm.iptUserName = document.getElementById('userName');
    frm.iptUserName.addEventListener('focus', function (evt) {
        onFocusOrInput(evt);
    });

    frm.iptUserName.addEventListener('input', function (evt) {
        onFocusOrInput(evt);
    });


    frm.iptPassword = document.getElementById('password');
    frm.iptPassword.addEventListener('focus', function (evt) {
        onFocusOrInput1(evt);
    });
    frm.iptPassword.addEventListener('input', function (evt) {
        onFocusOrInput1(evt);
    });

    frm.iptContact = document.getElementById('contact');
    frm.iptContact.addEventListener('focus', function (evt) {
        onFocusOrInput2(evt);
    });
    frm.iptContact.addEventListener('input', function (evt) {
        onFocusOrInput2(evt);
    });

    frm.pUserNameErr = document.getElementById('userNameErr');
    frm.pPasswordErr = document.getElementById('passwordErr');
    frm.pContactErr = document.getElementById('contactErr');
    // frm.pFrmErr = document.getElementById('frmErr');
}