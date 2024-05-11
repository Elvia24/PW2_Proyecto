// src/services/authService.js

export function getToken() {
    return sessionStorage.getItem('token');
}

export function isAuthenticated() {
    const token = getToken();
    return !!token;  // Convert truthy or falsy value to boolean
}

export function isTokenExpired(token) {
    
    const payloadBase64 = token.split('.')[1];
    const decodedJson = atob(payloadBase64); 
    const decoded = JSON.parse(decodedJson);
    const exp = decoded.exp * 1000;
    return Date.now() > exp;
}