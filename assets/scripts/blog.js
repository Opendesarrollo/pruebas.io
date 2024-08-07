let blogs = [
    {
        usuario_id: 1,
        usuario_nombre: "soyceros",
        usuario_descripcion: "2023",
        usuario_imagen: "usuario_0.png",
        usuario_puntos: 10739,
        usuario_activo: true,
        blog_id: 1,
        blog_nombre: "Domina las variables en JavaScript como un experto: Guía completa",
        blog_descripcion: "Aprende todo lo que necesitas saber sobre las variables en JavaScript con nuestro completo artículo. Desde la declaración de variables hasta su uso en estructuras de control, descubre cómo utilizarlas de manera efectiva para crear aplicaciones dinámicas y eficientes. ¡Conviértete en un maestro de las variables en JavaScript hoy mismo!",
        blog_url: "domina-variables-javascript-experto",
        blog_activo: true,
        registro_usuario: "soyceros",
        registro_fecha: "17-03-2023",
        modificacion_usuario: "soyceros",
        modificacion_fecha: "17-03-2023"
    },
    {
        usuario_id: 1,
        usuario_nombre: "soyceros",
        usuario_descripcion: "2023",
        usuario_imagen: "usuario_0.png",
        usuario_puntos: 10739,
        usuario_activo: true,
        blog_id: 2,
        blog_nombre: "Cómo mejorar la legibilidad del código SQL con comentarios",
        blog_descripcion: "¿Problemas con código SQL? En nuestro blog, aprende a mejorar su legibilidad con comentarios efectivos. Descubre consejos útiles y mejora tus habilidades de programación SQL. ¡No te lo pierdas!",
        blog_url: "mejorar-legibilidad-codigo-sql-comentarios",
        blog_activo: true,
        registro_usuario: "soyceros",
        registro_fecha: "17-03-2023",
        modificacion_usuario: "soyceros",
        modificacion_fecha: "17-03-2023"
    }
];


function desplasarArriba(){
    let $section = document.querySelector("#mainBlog");
    $section.scrollIntoView({behavior: 'smooth'});
}


function cajaBlog(blogUrl,blogNombre,blogDescripcion,usuarioImagen,usuarioNombre,usuarioPuntos,usuarioDescripcion){
    let $fragment = document.createDocumentFragment();
    let $li = document.createElement("li");
    let $a = document.createElement("a");

    let $blogDiv = document.createElement("div");
    let $blogTitulo = document.createElement("h3");
    let $blogDescripcion = document.createElement("p");
    let $usuarioDiv = document.createElement("div");
    let $usuarioImg = document.createElement("img");
    let $usuarioNombre = document.createElement("p");
    let $usuarioPuntos = document.createElement("p");
    let $usuarioDescripcion = document.createElement("p");

    $a.setAttribute("href", `${blogUrl}`);
    $a.setAttribute("target", `_blank`);
    let blog_nombre = document.createTextNode(`${blogNombre}`);
    $blogTitulo.appendChild(blog_nombre);
    let blog_descripcion = document.createTextNode(`${blogDescripcion}`);
    $blogDescripcion.appendChild(blog_descripcion);
    $usuarioImg.setAttribute("src", `../assets/images/blog/usuario/${usuarioImagen}`);
    let usuario_nombre = document.createTextNode(`${usuarioNombre}`);
    $usuarioNombre.appendChild(usuario_nombre);
    let usuario_puntos = document.createTextNode(`${usuarioPuntos} Puntos`);
    $usuarioPuntos.appendChild(usuario_puntos);
    let usuario_descripcion = document.createTextNode(`Se publico en ${usuarioDescripcion}`);
    $usuarioDescripcion.appendChild(usuario_descripcion);

    $blogDiv.appendChild($blogTitulo);
    $blogDiv.appendChild($blogDescripcion);
    $usuarioDiv.appendChild($usuarioImg);
    $usuarioDiv.appendChild($usuarioNombre);
    $usuarioDiv.appendChild($usuarioPuntos);
    $usuarioDiv.appendChild($usuarioDescripcion);
    $a.appendChild($blogDiv);
    $a.appendChild($usuarioDiv);
    $li.appendChild($a);

    return $fragment.appendChild($li);
}


let contador = 0;
function listarBlog(){
    let desplasar = contador;
    desplasar != 0 ? desplasarArriba() : null;
    contador = contador + 10;
    let $section = document.querySelector(".mainBlog_cero");
    let $ul = document.createElement("ul");
    $section.innerHTML = "";
    
    if(contador >= blogs.length){
        // Si hemos llegado al final, mostramos los elementos restantes
        for(let i = contador - 10; i < blogs.length; i++){
            let indice = cajaBlog(blogs[i].blog_url,blogs[i].blog_nombre,blogs[i].blog_descripcion,blogs[i].usuario_imagen,blogs[i].usuario_nombre,blogs[i].usuario_puntos,blogs[i].usuario_descripcion);
            $ul.appendChild(indice);
            $section.appendChild($ul);
        }
        contador = 0;
    }else{
        // Si aún no hemos llegado al final, mostramos los siguientes 10 elementos
        for(let i = contador - 10; i < contador; i++){
            let indice = cajaBlog(blogs[i].blog_url,blogs[i].blog_nombre,blogs[i].blog_descripcion,blogs[i].usuario_imagen,blogs[i].usuario_nombre,blogs[i].usuario_puntos,blogs[i].usuario_descripcion);
            $ul.appendChild(indice);
            $section.appendChild($ul);
        }
    }
}