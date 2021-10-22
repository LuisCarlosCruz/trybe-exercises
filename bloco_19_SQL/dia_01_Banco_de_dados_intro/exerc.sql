SELECT * from sakila.city;

-- Exercício 4 : Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.
	-- Resposta: Ela faz referência à tabela country.
    
-- Exercício 5 : Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country ?
	-- Resposta: N:1
    
-- Exercício 6 : Qual tipo de relacionamento a tabela country faz com a tabela city ?
	-- Resposta: 1:N
    
-- Exercício 7 : Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.
	-- Resposta:
	-- store -> staff
	-- language -> film
	-- film -> language