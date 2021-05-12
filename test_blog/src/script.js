function disconnect(){
    document.querySelectorAll('.logged-out').forEach((el) => {
        el.classList.remove('d-none');
    });

    document.querySelectorAll('.logged-in').forEach((el) => {
        el.classList.add('d-none');
    });
}

function connect(){
    document.querySelectorAll('.logged-out').forEach((el) => {
        el.classList.add('d-none');
    });

    document.querySelectorAll('.logged-in').forEach((el) => {
        el.classList.remove('d-none');
    });
}

function ifAdmin(token){
    let token_payload = JSON.parse(atob(token.split('.')[1]));
    let admin = token_payload.user.typeCompte;
    if(admin == 1){
        if($("#addPost").is(":hidden")) $("#addPost").css('display',"block"); $("#addPost").removeClass('d-none');
    }
    else{
        if($("#addPost").is(":visible")) $("#addPost").addClass('d-none');
    }
}

function start(){
    if($("#addPost").is(":visible")) $("#addPost").hide();
    $.ajax({
        url: "./connec.html",
        success: function(html) {
            $("#content").html(html).show();
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

function affichePosts(token){
    data = `<h1>Bonjour</h1>
            <p>Voici les posts</p>`;
    $.ajax({
        type: "GET",
        beforeSend: function(request) {
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.setRequestHeader("Authorization", token);
        },
        dataType: "json",
        url: "http://localhost:3000/posts",
      }).done(function(rep) {
            rep.forEach((post)=>{
                data += `
                <div class="card" id="logged-out">
                    <div class="card-header">${post.title}</div>
                    <div class="card-body">
                        <p class="card-text">${post.content}</p>
                    </div>
                </div>
                <br/>
            `;
            content.innerHTML = data;
        });
      });
}

if(localStorage.getItem("token") !== null){
    ifAdmin(localStorage.getItem('token'));
    $(document).ready( function() {
        affichePosts(localStorage.getItem('token'));
    });
    connect();
}
else{
    start();
}

$(document).on( "click", "#disco", function() {
    localStorage.removeItem('token');
    disconnect();
    start();
});

$(document).on( "click", "a#inscr", function() {
    document.querySelectorAll('.connec').forEach((el) => {
        el.classList.add('d-none');
    });

    document.querySelectorAll('.inscr').forEach((el) => {
        el.classList.remove('d-none');
    });
});

$(document).on( "click", "a#connec", function() {
    document.querySelectorAll('.inscr').forEach((el) => {
        el.classList.add('d-none');
    });

    document.querySelectorAll('.connec').forEach((el) => {connec
        el.classList.remove('d-none');
    });
});

$(document).on( "click", "button#connecCompte", function(event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        beforeSend: function(request) {
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        },
        dataType: "JSON",
        data : $("form.connec").serialize(),
        url: "http://localhost:3000/user/login",
        success: function(data) {
            console.log(data.token);
            localStorage.setItem('token', data.token);
            ifAdmin(data.token);
            affichePosts(data.token);
            connect();
            },
        error: function(xhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
});

$(document).on( "click", "button#creaCompte", function(event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        beforeSend: function(request) {
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        },
        dataType: "JSON",
        data : $("form.inscr").serialize(),
        url: "http://localhost:3000/user/register",
        success: function(data) {
            $.ajax({
                type: "POST",
                dataType: "JSON",
                data : $("form.inscr").serialize(),
                url: "http://localhost:3000/user/login",
                success: function(data) {
                    console.log(data.token);
                    localStorage.setItem('token', data.token);
                    ifAdmin(data.token);
                    affichePosts(data.token);
                    connect();
                    },
                error: function(xhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
            },
        error: function(xhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
});

$(document).on( "click", "li#showPost", function() {
    affichePosts(localStorage.getItem('token'));
});

$(document).on( "click", "li#addPost", function() {
    $.ajax({
        url: "./creatPost.html",
        success: function(html) {
            $("#content").html(html).show();
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
});

$(document).on( "click", "button#creaPosts", function(event) {
    event.preventDefault();
    let token = localStorage.getItem('token');
    $.ajax({
        type: "POST",
        beforeSend: function(request) {
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.setRequestHeader("Authorization", token);
        },
        dataType: "JSON",
        data : $("form.creaPosts").serialize(),
        url: "http://localhost:3000/posts",
        success: function() {
            affichePosts(token);
            },
        error: function(xhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
});