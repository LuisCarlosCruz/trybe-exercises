USE Scientists;

-- 14- Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.

SELECT * FROM Projects
ORDER BY Hours LIMIT 5;