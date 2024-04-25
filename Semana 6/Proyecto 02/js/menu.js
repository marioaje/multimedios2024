let menu = `
<ul
class="nav nav-tabs"
id="navId"
role="tablist"
>
<li class="nav-item">
    <a
        href="index.html"
        class="nav-link active"
        data-bs-toggle="tab"
        aria-current="page"
        >Dashboard</a
    >
</li>
<li class="nav-item dropdown">
    <a
        class="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        >Usuarios</a
    >
    <div class="dropdown-menu">
        <a class="dropdown-item" href="usuarios.html">Listar</a>
        <a class="dropdown-item" href="usuarioscrear.html">Crear</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#tab4Id">Action</a>
    </div>
</li>
<li class="nav-item" role="presentation">
    <a href="#tab5Id" class="nav-link" data-bs-toggle="tab"
        >Another link</a
    >
</li>
<li class="nav-item" role="presentation">
    <a href="#" class="nav-link disabled" data-bs-toggle="tab"
        >Disabled</a
    >
</li>
</ul>`;

document.getElementById("menu").innerHTML = menu;

let piedepagina = `<h2>Pie de pagina</h2>`;

document.getElementById("piedepagina").innerHTML = piedepagina;