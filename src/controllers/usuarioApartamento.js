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
            const { userid, ap_id } = request.body;
    
            const sql = `
                INSERT INTO Usuario_apartamento
                    (userid, ap_id)
                VALUES
                    (?, ?);
            `;
    
            const values = [userid, ap_id];
            const [result] = await db.query(sql, values);
    
            const dados = {
                id: result.insertId,
                userid,
                ap_id,
            };
    
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastro de Usuário realizado com sucesso.',
                dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro no Cadastro de Usuário.',
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