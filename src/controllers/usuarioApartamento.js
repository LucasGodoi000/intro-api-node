const db = require('../database/connection');

module.exports ={
    async listarUsuariosApartamento (request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de usuários.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Listagem de usuários.',
                dados: errpr.message
            
            });
        }   
    },
    async cadastrarUsuariosApartamento (request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'cadastro de usuários.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Listagem de usuários.',
                dados: errpr.message
            
            });
        }   
    },
    async editarUsuariosApartamento (request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Editar usuário.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Listagem de usuários.',
                dados: errpr.message
            
            });
        }   
    },
    async apagarUsuariosApartamento (request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Apagar usuário.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Listagem de usuários.',
                dados: errpr.message
            
            });
        }   
    },
}