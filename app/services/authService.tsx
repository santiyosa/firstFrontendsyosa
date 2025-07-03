import { tokenCookie } from "../utils/cookies";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { API_URL } from "../utils/api";

/**
* Realiza la solicitud de inicio de sesión a la API.
* @param {string} email - Correo del usuario.
* @param {string} password - Contraseña del usuario.
* @returns {Promise<Object>} - Datos del usuario autenticado.
*/
export async function login(email: string, password: string) {
    try {
        const response = await fetch(`${API_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Credenciales incorrectas');
        }

    } catch (error) {
        console.error(error);
    }
}
/**
* Realiza la solicitud de registro a la API.
* @param {string} firstName - nombre del usuario.
* @param {string} lastName - apellido del usuario.
* @param {string} birthDate - fecha de nacimiento del usuario.
* @param {string} email - Correo del usuario.
* @param {string} password - Contraseña del usuario.
* @returns {Promise<Object>} - Datos del usuario registrado.
*/
export async function register(
    firstName: string,
    lastName: string,
    birthDate: string,
    email: string,
    password: string
) {
    try {
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, birthDate, email, password })
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Error al registrar');
        }

    } catch (error) {
        console.error(error);
    }
}
/**
 * Verifica si hay un token válido en las cookies.
 * @param {Request} request - Petición HTTP.
 * @returns {Promise<boolean>} - `true` si el usuario está autenticado, `false` si no.
 */
export async function checkAuth(request: Request) {
    const cookieHeader = request.headers.get("Cookie");
    const token = await tokenCookie.parse(cookieHeader);

    if (!token) {
        return null; // Si no hay token, retornar null
    }

    try {
        // Decodificar el token para obtener los datos del usuario
        const decodedToken: JwtPayload = jwtDecode(token);
        // Extraer el rol del token decodificado
        const rol = (decodedToken as Record<string, any>)["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        // Extraer el nombre del token decodificado
        const nombre = (decodedToken as Record<string, any>)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];

        // Retornar un objeto con el token y el rol
        return { token, rol, nombre };
    } catch (error) {
        console.error("Error al decodificar el token:", error);
        return null; // Si hay un error al decodificar el token, retornar null
    }
}

/**
 * Cierra la sesión eliminando la cookie del token.
 * @returns {Promise<Object>} - Encabezados para eliminar la cookie.
 */
export async function logout() {
    return {
        headers: {
            "Set-Cookie": await tokenCookie.serialize("", { maxAge: 0 }), // Borra la cookie
        },
    };
}