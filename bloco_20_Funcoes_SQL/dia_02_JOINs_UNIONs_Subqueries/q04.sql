SELECT
	T.id,
    T.name, 
    T.location,
    M.title,
    M.director, 
    M.year,
    M.length_minutes
FROM Theater T
LEFT JOIN Movies M
ON T.id = M.theater_id
ORDER BY T.name;