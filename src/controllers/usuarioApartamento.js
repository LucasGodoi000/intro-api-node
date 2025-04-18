const db = require('../database/connection');

module.exports ={
    async listarUsuariosApartamento (request, response) {
        try {

            const sql = `
                SELECT userap_id, userid, ap_id 
                FROM usuario_apartamento;
            `;

            const [row] = await db.query(sql);
            const nItens = row.length;


            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de usuários.',
                nItens,
                dados: row
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Listagem de usuários.',
                dados: error.message
            
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
                mensagem: 'Erro no cadastro de usuários.',
                dados: error.message
            
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
                mensagem: 'Erro na edição de usuários.',
                dados: error.message
            
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
                mensagem: 'Erro na remoção de usuários.',
                dados: error.message
            
            });
        }   
    },
}