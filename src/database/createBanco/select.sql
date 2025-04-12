-- Selects para as tabelas

-- Condominio
SELECT * FROM Condominio;

-- Bloco
SELECT * FROM Bloco;

-- Apartamentos
SELECT * FROM Apartamentos;

-- Usuarios
SELECT * FROM Usuarios;

-- Usuario_Apartamentos
SELECT userap_id, userid, ap_id FROM Usuario_Apartamentos;

-- Gerenciamento
SELECT * FROM Gerenciamento;

-- Mensagens
SELECT * FROM Mensagens;

-- Ambientes
SELECT cond_id, amb_descricao, amb_Nome, amb_capacidade FROM Ambientes;

-- Reservas_Ambientes
SELECT * FROM Reservas_Ambientes;

-- Visitantes
SELECT * FROM Visitantes;

-- Notificacoes
SELECT * FROM Notificacoes;