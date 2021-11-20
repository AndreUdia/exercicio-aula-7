# exercicio-aula-7

## Se quiserem, podem utilizar a biblioteca que eu adicionei no css do bootstrap:
```
<link href="../../css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
```
## Fiz também uma navbar, só adicionar no topo do body e no arquivo de css de voces :
> HTML
```
<nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="../login/login.html">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="../cadastro/cadastro.html">Cadastro</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="./principal/principal.html">Principal</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
```
> CSS
```
.navbar .navbar-nav .nav-item a{
    color: white;
}
.navbar{
    background-image: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
}
```
