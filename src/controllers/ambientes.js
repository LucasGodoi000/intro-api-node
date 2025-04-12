const db = require('../database/connection');

module.exports ={
    async listarAmbientes (request, response) {
        try {

            const sql = `
            SELECT cond_id, amb_descricao, 
            amb_nome, amb_capacidade
            FROM ambientes;
        `;
        const [row] = await db.query(sql);
        const nItens = row.length;

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de Ambientes.',
                nItens,
                dados: row
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Listagem de Ambientes.',
                dados: error.message
            
            });
        }   
    },
    async cadastrarAmbientes (request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'cadastro de Ambientes.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro no Cadastro de Ambientes.',
                dados: error.message
            
            });
        }   
    },
    async editarAmbientes (request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Editar Ambiente.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na edição de Ambientes.',
                dados: error.message
            
            });
        }   
    },
    async apagarAmbientes (request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Apagar Ambiente.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Remoção de Ambientes.',
                dados: error.message
            
            });
        }   
    },
}