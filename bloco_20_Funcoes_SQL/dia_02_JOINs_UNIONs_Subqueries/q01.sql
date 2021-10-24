SELECT 
	M.title,
    B.domestic_sales,
    B.international_sales 
FROM BoxOffice B
INNER JOIN Movies M
ON M.id = B.Movie_id;