import pool from "./conexao.js";

export async function retornaCampeonatos() {
    const conexao = await pool.getConnection();
    const query = 'SELECT id, campeao, vice, ano FROM campeonatos';
    const campeonatos = executaQuery(conexao, query);
    conexao.release();
    return campeonatos;
}

export async function retornaCampeonatosID(id) {
    const conexao = await pool.getConnection();
    const query = 'select id, campeao, vice, ano from campeonatos where id = '+ id;
    const campeonatos = executaQuery(conexao, query);
    conexao.release();
    return campeonatos
}

export async function retornaCampeonatosAno(ano) {
    const conexao = await pool.getConnection();
    const query = 'select id, campeao, vice, ano from campeonatos where ano = ' + ano;
    const campeonatos = executaQuery(conexao, query);
    conexao.release();
    return campeonatos;
}

export async function retornaCampeonatosTime(time) {
    const conexao = await pool.getConnection();
    const query = 'select id, campeao, vice, ano from campeonatos where campeao = "' + time + '"';
    const campeonatos = executaQuery(conexao, query);
    conexao.release();
    return campeonatos;
}

async function executaQuery(conexao, query) {
    const resultado_query = await conexao.query(query);
    const resposta = resultado_query[0];
    return resposta;
}

//`select id, campeao, vice, ano from campeonatos where campeao = '${time}'`