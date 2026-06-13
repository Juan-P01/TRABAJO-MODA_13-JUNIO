// glosario - terminos del evento moda ecci
const terminos = [
    { en: "Color Theory",         es: "Teoría del Color",        defEs: "Estudia cómo los colores afectan lo que percibimos y sentimos.",                                           defEn: "Studies how colors affect what we perceive and feel." },
    { en: "Pantone",              es: "Pantone",                 defEs: "Sistema universal para identificar colores de forma exacta.",                                              defEn: "Universal system to identify colors in an exact way." },
    { en: "Brand Identity",       es: "Identidad de Marca",      defEs: "La personalidad visual de una empresa: colores, logo, tipografía.",                                       defEn: "The visual personality of a company: colors, logo, typography." },
    { en: "User Experience",      es: "Experiencia de Usuario",  defEs: "Qué tan fácil y agradable es usar un producto digital.",                                                  defEn: "How easy and enjoyable it is to use a digital product." },
    { en: "User Interface",       es: "Interfaz de Usuario",     defEs: "Los elementos visuales con los que el usuario interactúa en pantalla.",                                   defEn: "The visual elements the user interacts with on screen." },
    { en: "Color Semiology",      es: "Semiología del Color",    defEs: "Estudio de los significados culturales y simbólicos de los colores.",                                     defEn: "Study of the cultural and symbolic meanings of colors." },
    { en: "Visual Hierarchy",     es: "Jerarquía Visual",        defEs: "Organización de elementos para guiar la vista del usuario en un orden lógico.",                          defEn: "Organizing elements to guide the user's eye in a logical order." },
    { en: "Color Palette",        es: "Paleta de Colores",       defEs: "Conjunto de colores elegidos para mantener consistencia visual en un diseño.",                            defEn: "Set of colors chosen to maintain visual consistency in a design." },
    { en: "Contrast",             es: "Contraste",               defEs: "Diferencia entre colores que hace que el contenido sea más legible.",                                     defEn: "Difference between colors that makes content more readable." },
    { en: "Accessibility",        es: "Accesibilidad",           defEs: "Diseñar para que todas las personas puedan usar el producto, incluidas personas con discapacidades.",     defEn: "Designing so all people can use the product, including those with disabilities." },
    { en: "Typography",           es: "Tipografía",              defEs: "El estilo y disposición del texto dentro de un diseño.",                                                  defEn: "The style and arrangement of text within a design." },
    { en: "Responsive Design",    es: "Diseño Responsive",       defEs: "Que la interfaz se adapte bien a celulares, tablets y computadores.",                                     defEn: "The interface adapts well to phones, tablets and computers." },
    { en: "Hue",                  es: "Matiz",                   defEs: "El color puro, sin mezcla de blanco o negro.",                                                            defEn: "The pure color, without any mix of white or black." },
    { en: "Saturation",           es: "Saturación",              defEs: "Qué tan intenso o apagado se ve un color.",                                                               defEn: "How intense or muted a color looks." },
    { en: "Complementary Colors", es: "Colores Complementarios", defEs: "Colores opuestos en el círculo cromático, crean mucho contraste entre sí.",                              defEn: "Colors opposite each other on the color wheel, they create strong contrast." },
    { en: "Grid System",          es: "Sistema de Grilla",       defEs: "Estructura de filas y columnas para organizar el contenido de una página.",                              defEn: "Structure of rows and columns to organize content on a page." },
    { en: "Dark Mode",            es: "Modo Oscuro",             defEs: "Interfaz con fondo oscuro que reduce el cansancio visual.",                                               defEn: "Interface with a dark background that reduces eye strain." },
    { en: "Prototype",            es: "Prototipo",               defEs: "Versión de prueba de un producto digital para testear antes de desarrollarlo.",                          defEn: "Test version of a digital product to try out before building it." },
    { en: "FrontEnd",             es: "Desarrollo FrontEnd",     defEs: "La parte del desarrollo web que ve el usuario: HTML, CSS y JavaScript.",                                  defEn: "The part of web development the user sees: HTML, CSS and JavaScript." },
    { en: "Bootstrap",            es: "Bootstrap",               defEs: "Librería de CSS que facilita crear páginas responsive con componentes ya hechos.",                       defEn: "CSS library that makes it easy to build responsive pages with ready-made components." }
];

var idioma = 'es';

// llenar la tabla del glosario
function llenarGlosario() {
    var tabla = document.getElementById('glossary-tbody');
    if (!tabla) return;
    tabla.innerHTML = '';
    for (var i = 0; i < terminos.length; i++) {
        var t = terminos[i];
        var fila = document.createElement('tr');
        fila.innerHTML = '<td>' + t.en + '</td><td>' + t.es + '</td><td>' + (idioma === 'es' ? t.defEs : t.defEn) + '</td>';
        tabla.appendChild(fila);
    }
}

// traducir todos los elementos de la pagina
function traducir() {
    var elementos = document.querySelectorAll('[data-es][data-en]');
    for (var i = 0; i < elementos.length; i++) {
        var el = elementos[i];
        if (el.id === 'lang-toggle') continue;
        var texto = el.getAttribute('data-' + idioma);
        if (texto) el.textContent = texto;
    }
}

// cuando carga la pagina
document.addEventListener('DOMContentLoaded', function() {
    llenarGlosario();

    var boton = document.getElementById('lang-toggle');
    if (!boton) return;

    boton.addEventListener('click', function() {
        idioma = idioma === 'es' ? 'en' : 'es';
        boton.querySelector('.lang-text').textContent = idioma === 'es' ? 'English' : 'Español';
        traducir();
        llenarGlosario();
    });
});