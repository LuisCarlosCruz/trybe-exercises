SELECT 
	M.title,
    B.domestic_sales,
    B.international_sales
FROM Movies M
INNER JOIN BoxOffice B
ON B.movie_id = M.id
WHERE B.international_sales > B.domestic_sales;




