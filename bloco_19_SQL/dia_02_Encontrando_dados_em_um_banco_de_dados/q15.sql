USE Scientists;

-- 15- Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.

SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') AS `Resultado` FROM Scientists;