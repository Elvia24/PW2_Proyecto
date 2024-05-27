const { body, param, validationResult } = require('express-validator');

const validateCategory = [
    body('userID').isInt().withMessage('El ID del usuario debe ser un entero'),
    body('nombre').isString().isLength({ min: 1 }).withMessage('El nombre es requerido'),
    body('descripcion').isString().isLength({ min: 1 }).withMessage('La descripción es requerida'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateCategoryUpdate = [
    body('userID').isInt().withMessage('El ID del usuario debe ser un entero'),
    body('categoryID').isInt().withMessage('El ID de la categoría debe ser un entero'),
    body('nombre').optional().isString().isLength({ min: 1 }).withMessage('El nombre debe ser una cadena no vacía'),
    body('descripcion').optional().isString().isLength({ min: 1 }).withMessage('La descripción debe ser una cadena no vacía'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateCategoryDeletion = [
    body('userID').isInt().withMessage('El ID del usuario debe ser un entero'),
    body('categoryID').isInt().withMessage('El ID de la categoría debe ser un entero'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateCategory,
    validateCategoryUpdate,
    validateCategoryDeletion
};