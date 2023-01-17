// JavaScript for adding partials to main page

const urlPageTitle = `Juguetería Cósmica`;
const metaDescription = document.querySelector('meta[name="description"]');
const mainElement = document.querySelector('.main');

const urlMetadata = {
    
    "/": {
        title: `Inicio | ${urlPageTitle}`,
        description: `La mejor tienda de juguetes del universo`
    },

    "/alta": {
        title: `Alta | ${urlPageTitle}`,
        description: `Agregar nuevos productos a la tienda`
    },
    
    "/aviso-de-privacidad": {
        title: `aviso-de-privacidad | ${urlPageTitle}`,
        description: `Aspectos de privacidad en el manejo de datos de Juguetería Cósmica`
    },
    
    "/carrito": {
        title: `carrito | ${urlPageTitle}`,
        description: `Carrito de comprar de Juguetería Cósmica`
    },
    
    "/contacto": {
        title: `Contacto | ${urlPageTitle}`,
        description: `Formulario de contacto Juguetería Cósmica`
    },
    
    "/nosotros": {
        title: `Nosotros | ${urlPageTitle}`,
        description: `Información sobre los desarrolladores del sitio web Juguetería Cósmica`
    }

} 



const getIdFromHash = () => {
    const defaultPage = 'inicio';
    let id = location.hash.slice(1);
    if (id[0] === '/') {
        id = id.slice(1);
    }
    return id || defaultPage;
};

const getUrlFromId = id => `partials/${id}.html`;

// Calling the partials HTML using the old way XMLHttpRequest
// const initAjax = (url, method = 'get') => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.send();
//     return xhr;
// };



const start = () => {
    loadDefaultPage();
};

const loadDefaultPage = () => {
    const id = getIdFromHash();
    loadAjaxFromId(id);
};

const loadAjaxFromId = async (id) => {
    const url = getUrlFromId(id);
    console.log(url);

    const html = await fetch(url)
        .then((response) => response.text())
        .catch(error => console.error(`Error: `, error))
        .finally(() => console.warn(`Request ended`))

    mainElement.innerHTML = html;

    if (url === `partials/inicio.html`) {
        document.title = urlMetadata["/"].title;
        metaDescription.setAttribute("content", urlMetadata["/"].description);
    } else if (url === `partials/alta.html`) {
        document.title = urlMetadata["/alta"].title;
        metaDescription.setAttribute("content", urlMetadata["/alta"].description);
    } else if (url === `partials/aviso-de-privacidad.html`) {
        document.title = urlMetadata["/aviso-de-privacidad"].title;
        metaDescription.setAttribute("content", urlMetadata["/aviso-de-privacidad"].description);
    } else if (url === `partials/carrito.html`) {
        document.title = urlMetadata["/carrito"].title;
        metaDescription.setAttribute("content", urlMetadata["/carrito"].description);
    } else if (url === `partials/contacto.html`) {
        document.title = urlMetadata["/contacto"].title;
        metaDescription.setAttribute("content", urlMetadata["/contacto"].description);
    } else if (url === `partials/nosotros.html`) {
        document.title = urlMetadata["/nosotros"].title;
        metaDescription.setAttribute("content", urlMetadata["/nosotros"].description);
    } else {
        document.title = urlPageTitle;
        metaDescription.setAttribute("content", urlPageTitle);
    };



// Loading the partials HTML from the resources using the old way XMLHttpRequest
    // const xhr = initAjax(url);
    // xhr.addEventListener('load', e => {
    //     if (e.target.status === 200) {
    //         const partialHTML = e.target.responseText;
    //         mainElement.innerHTML = partialHTML;
    //     }
    // });

};


window.addEventListener('hashchange', e => {
    // console.log('Cambió el hash');
    // console.log(location.hash);
    const id = getIdFromHash();
    console.log(id);

    loadAjaxFromId(id);

});

start();

